(function () {
    const selects = document.querySelectorAll('[data-country-code-select]');

    if (!selects.length) {
        return;
    }

    const SOURCE_URL = '/static/data/country-codes.json';
    const FALLBACK_CODES = [
        { name: 'India', dial_code: '+91', country_code: 'IN' },
        { name: 'United States', dial_code: '+1', country_code: 'US' },
        { name: 'United Kingdom', dial_code: '+44', country_code: 'GB' },
        { name: 'Canada', dial_code: '+1', country_code: 'CA' },
        { name: 'Australia', dial_code: '+61', country_code: 'AU' },
        { name: 'Germany', dial_code: '+49', country_code: 'DE' },
        { name: 'France', dial_code: '+33', country_code: 'FR' },
        { name: 'United Arab Emirates', dial_code: '+971', country_code: 'AE' },
        { name: 'Singapore', dial_code: '+65', country_code: 'SG' },
        { name: 'Japan', dial_code: '+81', country_code: 'JP' }
    ];

    const DIAL_PREFERRED_COUNTRY = {
        '+1': 'US'
    };

    const normalizeName = function (name) {
        if (!name) {
            return '';
        }

        return name
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '');
    };

    const buildEntries = function (data) {
        const entries = [];
        const seen = new Set();

        const addEntry = function (name, dialCode, countryCode) {
            if (!name || !dialCode) {
                return;
            }

            const trimmed = dialCode.trim();
            if (!trimmed) {
                return;
            }

            const key = name + '|' + trimmed + '|' + (countryCode || '');
            if (seen.has(key)) {
                return;
            }

            seen.add(key);
            entries.push({
                name: normalizeName(name),
                dial_code: trimmed,
                country_code: countryCode ? String(countryCode).toUpperCase() : ''
            });
        };

        if (Array.isArray(data)) {
            data.forEach(function (item) {
                const name = item && item.name ? item.name.common : '';
                const countryCode = item && item.cca2 ? item.cca2 : '';
                const idd = item && item.idd ? item.idd : {};
                const root = idd.root || '';
                const suffixes = Array.isArray(idd.suffixes) ? idd.suffixes : [];

                if (root && suffixes.length === 1) {
                    addEntry(name, root + suffixes[0], countryCode);
                    return;
                }

                if (root && suffixes.length > 1) {
                    addEntry(name, root, countryCode);
                    return;
                }

                const codes = Array.isArray(item.callingCodes) ? item.callingCodes : [];
                codes.forEach(function (code) {
                    addEntry(name, code, countryCode);
                });
            });
        } else if (data && typeof data === 'object') {
            Object.values(data).forEach(function (item) {
                addEntry(item.name, item.dial_code, item.country_code);
            });
        }

        entries.sort(function (a, b) {
            const byName = a.name.localeCompare(b.name);
            if (byName !== 0) {
                return byName;
            }
            return a.dial_code.localeCompare(b.dial_code);
        });

        return entries;
    };

    const populateSelects = function (entries) {
        selects.forEach(function (select) {
            const selectedValue = select.dataset.selected || select.dataset.defaultCode || '';
            const normalizedSelected = String(selectedValue).trim();
            const selectedIsDial = normalizedSelected.startsWith('+');
            const preferredCountry = selectedIsDial
                ? DIAL_PREFERRED_COUNTRY[normalizedSelected]
                : '';
            const preferredEntryValue = preferredCountry
                ? (entries.find(function (entry) {
                    return entry.dial_code === normalizedSelected && entry.country_code === preferredCountry;
                }) || {}).country_code
                : '';

            select.innerHTML = '';

            const placeholder = document.createElement('option');
            placeholder.value = '';
            placeholder.textContent = 'Code';
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);

            entries.forEach(function (entry) {
                const option = document.createElement('option');
                option.value = entry.country_code || entry.dial_code;
                option.textContent = entry.name + ' (' + entry.dial_code + ')';
                const matchesDial = selectedIsDial && entry.dial_code === normalizedSelected;
                const matchesCountry = !selectedIsDial && entry.country_code === normalizedSelected.toUpperCase();
                const matchesPreferred = selectedIsDial && preferredEntryValue && entry.country_code === preferredEntryValue;
                if (matchesCountry || matchesPreferred || (matchesDial && !preferredEntryValue)) {
                    option.selected = true;
                    placeholder.selected = false;
                }
                select.appendChild(option);
            });

            if (!select.value && normalizedSelected) {
                select.value = normalizedSelected;
            }
        });
    };

    fetch(SOURCE_URL)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('Failed to load country codes');
            }
            return response.json();
        })
        .then(function (data) {
            const entries = buildEntries(data);
            if (entries.length) {
                populateSelects(entries);
                return;
            }
            populateSelects(FALLBACK_CODES);
        })
        .catch(function () {
            populateSelects(FALLBACK_CODES);
        });
})();
