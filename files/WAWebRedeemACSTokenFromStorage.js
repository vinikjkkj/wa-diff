__d(
  "WAWebRedeemACSTokenFromStorage",
  [
    "WAWebACSTokenUtils",
    "WAWebCRUDOperationsACSTokens",
    "WAWebModelStorageUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["acs-tokens"],
              (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n = t[0],
                      r = yield o(
                        "WAWebCRUDOperationsACSTokens",
                      ).getACSTokensByProject(e, n);
                    if (r.length === 0) return null;
                    var a = r.filter(function (t) {
                      return o("WAWebACSTokenUtils").isValidACSToken({
                        creationTs: t.creationTs,
                        projectName: e,
                        redeemCount: t.redeemCount,
                      });
                    });
                    if (a.length === 0)
                      return (
                        yield o(
                          "WAWebCRUDOperationsACSTokens",
                        ).deleteAllACSTokensByProject(e, n),
                        null
                      );
                    var i = u(a);
                    if (i == null) return null;
                    var l = i.redeemCount + 1;
                    return (
                      yield o("WAWebCRUDOperationsACSTokens").upsertACSToken(
                        babelHelpers.extends({}, i, { redeemCount: l }),
                        n,
                      ),
                      i.token
                    );
                  },
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })(),
            );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = Math.min.apply(
        Math,
        e.map(function (e) {
          return e.redeemCount;
        }),
      );
      return e.find(function (e) {
        return e.redeemCount === t;
      });
    }
    l.redeemACSTokenFromStorage = e;
  },
  98,
);
