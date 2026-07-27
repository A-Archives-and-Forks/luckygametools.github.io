(function () {
    'use strict';

    function renderSupportedApps() {
        const list = document.getElementById('onlineVerificationAppList');
        const count = document.getElementById('onlineVerificationAppCount');

        if (!list) {
            return;
        }

        const source = Array.isArray(window.LGT_ONLINE_VERIFICATION_APPIDS)
            ? window.LGT_ONLINE_VERIFICATION_APPIDS
            : [];
        const seen = new Set();
        const appids = source
            .map(function (appid) {
                return String(appid).trim();
            })
            .filter(function (appid) {
                if (!/^\d+$/.test(appid) || seen.has(appid)) {
                    return false;
                }

                seen.add(appid);
                return true;
            });

        if (count) {
            count.textContent = String(appids.length);
        }

        list.replaceChildren();

        if (appids.length === 0) {
            const empty = document.createElement('p');
            empty.className = 'online-verification-app-empty';
            empty.textContent = list.dataset.empty || 'No supported games are currently listed.';
            list.appendChild(empty);
            return;
        }

        const fragment = document.createDocumentFragment();

        appids.forEach(function (appid) {
            const link = document.createElement('a');
            const icon = document.createElement('span');
            const label = document.createElement('span');
            const value = document.createElement('strong');

            link.className = 'online-verification-app';
            link.href = 'https://steamdb.info/app/' + encodeURIComponent(appid);
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute(
                'aria-label',
                (list.dataset.openLabel || 'Open AppID on SteamDB') + ' ' + appid
            );

            icon.className = 'lgt-icon icon-gamepad';
            icon.setAttribute('aria-hidden', 'true');
            label.textContent = 'AppID';
            value.textContent = appid;

            link.append(icon, label, value);
            fragment.appendChild(link);
        });

        list.appendChild(fragment);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSupportedApps, { once: true });
    } else {
        renderSupportedApps();
    }
})();
