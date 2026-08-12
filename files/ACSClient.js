__d(
  "ACSClient",
  [
    "ACSCachedTokenModule",
    "ACSCommon",
    "ACSTokenUtil",
    "Promise",
    "asyncToGeneratorRuntime",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "ACSClientError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      u = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, t) || this),
            (n.name = "IllegalStateError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      c = 720 * 60 * 1e3,
      d = new WeakMap();
    function m(t) {
      for (
        var r = t.storageManager.getServerConfigs(), o = null, a = 0;
        a < (r == null ? void 0 : r.length);
        a++
      ) {
        var i = r[a];
        if (!p(i)) {
          t.storageManager.removeServerConfig(i.configId);
          continue;
        }
        (o == null || i.configExpiresOnMillis > o.configExpiresOnMillis) &&
          (o = i);
      }
      if (o == null) return _(t);
      var l = o;
      return l.configExpiresOnMillis <= Date.now() + c
        ? _(t).catch(function () {
            return l;
          })
        : (e || (e = n("Promise"))).resolve(l);
    }
    function p(e) {
      var t = Date.now() > e.configExpiresOnMillis,
        n = !t;
      return n;
    }
    function _(e) {
      var t = d.get(e);
      if (t != null) return t;
      var n = e.serverProvider
        .getPublicParameters(e.projectName, e.attributeIdentifier)
        .then(function (t) {
          return (e.storageManager.storeServerConfig(t), t);
        })
        .finally(function () {
          d.delete(e);
        });
      return (d.set(e, n), n);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield m(e);
          try {
            return yield t(n);
          } catch (i) {
            if (
              !(i instanceof o("ACSCommon").ACSInvalidConfigIdError) ||
              i.configId !== n.configId ||
              !r("justknobx")._("5654")
            )
              throw i;
            e.storageManager.removeServerConfig(n.configId);
            var a = yield _(e);
            if (a.configId === n.configId) throw i;
            return t(a);
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return f(e, function (r) {
        return S(e, r, n, t);
      });
    }
    var y = new WeakMap();
    function C(e, t) {
      var n = y.get(e);
      n == null && ((n = new Map()), y.set(e, n));
      var r = n.get(t);
      if (r != null) return r;
      var o = n,
        a = b(e, t).finally(function () {
          o.delete(t);
        });
      return (o.set(t, a), a);
    }
    function b(e, t) {
      return f(
        e,
        (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(function* (n) {
            var r = e.storageManager.getCachedToken(n.configId);
            if (
              !(
                r != null &&
                o("ACSCachedTokenModule").isCachedTokenRedeemable(r)
              )
            ) {
              var a = yield P(e, n, n.maxEvals, t);
              T(e, a);
            }
          });
          return function (e) {
            return r.apply(this, arguments);
          };
        })(),
      );
    }
    function v(e, t, n) {
      return f(e, function (r) {
        return P(e, r, t, n);
      });
    }
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield L(e, t.cipherSuite, t.configId, r);
            if (o != null) return o;
            var a = yield P(e, t, t.maxEvals, n);
            return k(e, a, t, r);
          },
        )),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield x(e, t, n, r);
            return o;
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n, r) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (t.length < 1) throw new u("No tokens received from ACS!");
            T(e, t);
            var o = yield x(e, n.cipherSuite, n.configId, r);
            if (o == null) throw new u("No redeemable token generated!");
            return o;
          },
        )),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      t.forEach(function (t) {
        return D(e, t);
      });
    }
    function D(e, t) {
      t != null &&
        (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
          ? e.storageManager.storeCachedToken(t)
          : e.storageManager.deleteCachedToken(t));
    }
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.storageManager.getCachedToken(n);
            if (a == null) return null;
            var i = o("ACSCachedTokenModule").redeemCachedToken(a);
            if ((D(e, a), i)) {
              var l = yield o("ACSTokenUtil").generateTag(t, a, r),
                s = {
                  projectName: e.projectName,
                  attributeIdentifier: e.attributeIdentifier,
                  serverConfigId: a.serverConfigId,
                  tag: l,
                  credential: a.nonce.slice(),
                  data: r,
                  clientSharedSecret: a.sharedSecret.slice(),
                };
              return s;
            } else
              throw new u(
                "Cached token is not redeemable. Neither storage nor ACS should return unredeemable tokens; this should not happen.",
              );
          },
        )),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n, r) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (n <= 0) throw new s("Invalid number of tokens requested: " + n);
            var a = o("ACSTokenUtil").generateBlindedTokens(
                n,
                e.voprfWasm,
                e.voprfInfo,
              ),
              i = o("ACSTokenUtil").getBlindedNonces(a),
              l = yield e.serverProvider.getCredentials({
                blindedTokens: i,
                config: t,
                projectName: e.projectName,
                requestProof: r,
              });
            return M(e, t, a, l.signedBlindedTokens, l.dleqProofs, r);
          },
        )),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r, a, i) {
      var l = o("ACSTokenUtil").unblindTokens(
          t,
          n,
          r,
          a,
          e.voprfWasm,
          e.voprfInfo,
          i,
        ),
        s = o("ACSTokenUtil").getCachedTokens(l, t, e.voprfWasm, e.voprfInfo);
      return s;
    }
    function w(e, t, n, r, o) {
      var a = o.createCurveRistretto(),
        i = o.createVoprfExpTwohashdh(a);
      return {
        projectName: e,
        attributeIdentifier: t,
        serverProvider: n,
        storageManager: r,
        voprfInfo: { curvePtr: a, voprfPtr: i },
        voprfWasm: o,
      };
    }
    ((l.ACSClientError = s),
      (l.loadACSServerConfig = m),
      (l.fetchAndRedeem = h),
      (l.prewarmTokenCache = C),
      (l.loadServerConfigAndGetNewTokens = v),
      (l.getNewTokens = P),
      (l.buildACSClient = w));
  },
  98,
);
