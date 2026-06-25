__d(
  "WAWebDeleteGuestSessionOnWebLoad",
  [
    "WALogger",
    "WAWebGuestCoreLocalStorage",
    "WAWebIndexedDBPurge",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebGuestCoreLocalStorage").getGuestExperienceType() !== "") {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[guest] nuking existing guest session on this browser",
                ])),
            ),
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
        u.apply(this, arguments)
      );
    }
    l.maybeDeleteGuestSessionOnWebLoad = s;
  },
  98,
);
