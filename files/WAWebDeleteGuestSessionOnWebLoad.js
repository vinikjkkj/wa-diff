__d(
  "WAWebDeleteGuestSessionOnWebLoad",
  [
    "WALogger",
    "WAWebGuestCoreLocalStorage",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c() {
      if (o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== "") {
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[guest] nuking existing guest session on this browser",
            ])),
        ),
          d(),
          r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear(),
          r("WAWebLocalStorage") == null ||
            r("WAWebLocalStorage").setItem(
              o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
              "1",
            ));
        var t = await o("WAWebIndexedDBPurge").deleteAllIdb();
        t ||
          r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").removeItem(
            o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
          );
      }
    }
    async function d() {
      try {
        var e,
          t = await ((e = window.navigator.serviceWorker) == null ||
          e.getRegistrations == null
            ? void 0
            : e.getRegistrations());
        if (t == null) return;
        var n = [];
        for (var r of t)
          m(r.scope) &&
            n.push(
              r.unregister().catch(function (e) {
                o("WALogger").ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[guest] failed to unregister service worker",
                    ])),
                );
              }),
            );
        await Promise.all(n);
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[guest] failed to unregister service workers",
            ])),
        );
      }
    }
    function m(e) {
      try {
        return new URL(e).pathname.startsWith("/guest");
      } catch (e) {
        return !1;
      }
    }
    ((l.maybeDeleteGuestSessionOnWebLoad = c),
      (l.unregisterGuestServiceWorkers = d));
  },
  98,
);
