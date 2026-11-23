__d(
  "WAWebRedeemACSToken",
  [
    "WAACSTokenUtils",
    "WATimeUtils",
    "WAWamPrivateStatsToken",
    "WAWebCRUDOperationsACSTokens",
    "WAWebFetchACSTokens",
    "WAWebRedeemACSTokenFromStorage",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5;
    async function s(e) {
      var t = e.projectName,
        n = await o("WAWebRedeemACSTokenFromStorage").redeemACSTokenFromStorage(
          t,
        );
      if (n != null) return n;
      var r = await u(t);
      if (r.length !== 0) {
        var a = r[0],
          i = babelHelpers.arrayLikeToArray(r).slice(1),
          l = a.sharedSecret,
          s = a.t,
          c = a.token;
        return (
          await o("WAWebCRUDOperationsACSTokens").storeACSTokenForProject(t, {
            creationTs: s,
            redeemCount: 1,
            token: { sharedSecret: l, token: c },
          }),
          await o("WAWebCRUDOperationsACSTokens").storeACSTokensForProject(
            t,
            i.map(function (e) {
              var t = e.sharedSecret,
                n = e.t,
                r = e.token;
              return {
                token: { sharedSecret: t, token: r },
                creationTs: n,
                redeemCount: 0,
              };
            }),
          ),
          { sharedSecret: l, token: c }
        );
      }
    }
    async function u(t, n) {
      n === void 0 && (n = e);
      var o = Array.from({ length: n })
          .fill()
          .map(function () {
            return c(t);
          }),
        a = await Promise.allSettled(o),
        i = a.filter(function (e) {
          return e.status === "fulfilled";
        });
      return r("compactMap")(i, function (e) {
        return e.value;
      });
    }
    async function c(e) {
      var t = o("WAACSTokenUtils").getBlindedToken(),
        n = t.blindedToken,
        r = t.blindingFactor,
        a = t.token,
        i = await o("WAWebFetchACSTokens").fetchACSTokenForProjectWithRetry(
          e,
          n,
        );
      if (i.result != null) {
        var l = i.result,
          s = l.signCredentialAcsPublicKeyElementValue,
          u = l.signCredentialSignedCredentialElementValue,
          c = l.signCredentialT,
          d = o("WAWamPrivateStatsToken").unblindToken(u, r, s);
        if (d != null) {
          var m = o("WAACSTokenUtils").getSharedSecret({
            token: a,
            unblindedSignedToken: d,
          });
          return {
            token: a,
            sharedSecret: m,
            t: o("WATimeUtils").castToUnixTime(c),
          };
        }
      }
    }
    l.redeemACSToken = s;
  },
  98,
);
