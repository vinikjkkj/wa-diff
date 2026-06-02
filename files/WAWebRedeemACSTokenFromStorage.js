__d(
  "WAWebRedeemACSTokenFromStorage",
  [
    "WAWebACSTokenUtils",
    "WAWebCRUDOperationsACSTokens",
    "WAWebModelStorageUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
      return o("WAWebModelStorageUtils")
        .getStorage()
        .lock(["acs-tokens"], async function (t) {
          var n = t[0],
            r = await o("WAWebCRUDOperationsACSTokens").getACSTokensByProject(
              e,
              n,
            );
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
              await o(
                "WAWebCRUDOperationsACSTokens",
              ).deleteAllACSTokensByProject(e, n),
              null
            );
          var i = s(a);
          if (i == null) return null;
          var l = i.redeemCount + 1;
          return (
            await o("WAWebCRUDOperationsACSTokens").upsertACSToken(
              babelHelpers.extends({}, i, { redeemCount: l }),
              n,
            ),
            i.token
          );
        });
    }
    function s(e) {
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
