__d(
  "WAWebRedeemACSToken",
  [
    "Promise",
    "WAACSTokenUtils",
    "WATimeUtils",
    "WAWamPrivateStatsToken",
    "WAWebCRUDOperationsACSTokens",
    "WAWebFetchACSTokens",
    "WAWebRedeemACSTokenFromStorage",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 5;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.projectName,
            n = yield o(
              "WAWebRedeemACSTokenFromStorage",
            ).redeemACSTokenFromStorage(t);
          if (n != null) return n;
          var r = yield d(t);
          if (r.length !== 0) {
            var a = r[0],
              i = babelHelpers.arrayLikeToArray(r).slice(1),
              l = a.sharedSecret,
              s = a.t,
              u = a.token;
            return (
              yield o("WAWebCRUDOperationsACSTokens").storeACSTokenForProject(
                t,
                {
                  creationTs: s,
                  redeemCount: 1,
                  token: { sharedSecret: l, token: u },
                },
              ),
              yield o("WAWebCRUDOperationsACSTokens").storeACSTokensForProject(
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
              { sharedSecret: l, token: u }
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          o === void 0 && (o = s);
          var a = Array.from({ length: o })
              .fill()
              .map(function () {
                return p(t);
              }),
            i = yield (e || (e = n("Promise"))).allSettled(a),
            l = i.filter(function (e) {
              return e.status === "fulfilled";
            });
          return r("compactMap")(l, function (e) {
            return e.value;
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAACSTokenUtils").getBlindedToken(),
            n = t.blindedToken,
            r = t.blindingFactor,
            a = t.token,
            i = yield o("WAWebFetchACSTokens").fetchACSTokenForProjectWithRetry(
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
        })),
        _.apply(this, arguments)
      );
    }
    l.redeemACSToken = u;
  },
  98,
);
