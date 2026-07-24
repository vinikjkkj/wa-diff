__d(
  "WAWebDeleteGuestSessionOnWebLoad",
  [
    "Promise",
    "WALogger",
    "WAWebGuestCoreLocalStorage",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== "") {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[guest] nuking existing guest session on this browser",
                ])),
            ),
              p(),
              r("WAWebLocalStorage") == null || r("WAWebLocalStorage").clear(),
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").setItem(
                  o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
                  "1",
                ));
            var t = yield o("WAWebIndexedDBPurge").deleteAllIdb();
            t ||
              r("WAWebLocalStorage") == null ||
              r("WAWebLocalStorage").removeItem(
                o("WAWebUserPrefsKeys").KEYS.LOGOUT_DIRTY_BIT,
              );
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e,
              t = yield (e = window.navigator.serviceWorker) == null ||
              e.getRegistrations == null
                ? void 0
                : e.getRegistrations();
            if (t == null) return;
            var r = [];
            for (var a of t)
              f(a.scope) &&
                r.push(
                  a.unregister().catch(function (e) {
                    o("WALogger").ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[guest] failed to unregister service worker",
                        ])),
                    );
                  }),
                );
            yield (c || (c = n("Promise"))).all(r);
          } catch (e) {
            o("WALogger").ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[guest] failed to unregister service workers",
                ])),
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      try {
        return new URL(e).pathname.startsWith("/guest");
      } catch (e) {
        return !1;
      }
    }
    ((l.maybeDeleteGuestSessionOnWebLoad = d),
      (l.unregisterGuestServiceWorkers = p));
  },
  98,
);
