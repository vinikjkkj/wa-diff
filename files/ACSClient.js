__d(
  "ACSClient",
  [
    "ACSCachedTokenModule",
    "ACSCipherSuiteModule",
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
      d = new WeakMap(),
      m = new WeakMap();
    function p(t) {
      for (
        var r = t.storageManager.getServerConfigs(), o = null, a = 0;
        a < (r == null ? void 0 : r.length);
        a++
      ) {
        var i = r[a];
        if (!_(i)) {
          t.storageManager.removeServerConfig(i.configId);
          continue;
        }
        (o == null || i.configExpiresOnMillis > o.configExpiresOnMillis) &&
          (o = i);
      }
      if (o == null) return f(t);
      var l = o;
      return l.configExpiresOnMillis <= Date.now() + c
        ? f(t).catch(function () {
            return l;
          })
        : (e || (e = n("Promise"))).resolve(l);
    }
    function _(e) {
      var t = Date.now() > e.configExpiresOnMillis,
        n = !t;
      return n;
    }
    function f(e) {
      var t = m.get(e);
      if (t != null) return t;
      var n = e.serverProvider
        .getPublicParameters(e.projectName, e.attributeIdentifier)
        .then(function (t) {
          return (e.storageManager.storeServerConfig(t), t);
        })
        .finally(function () {
          m.delete(e);
        });
      return (m.set(e, n), n);
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield p(e);
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
            var a = yield f(e);
            if (a.configId === n.configId) throw i;
            return t(a);
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return g(e, function (r) {
        return R(e, r, n, t);
      });
    }
    var C = new WeakMap();
    function b(e, t) {
      var n = C.get(e);
      n == null && ((n = new Map()), C.set(e, n));
      var r = n.get(t);
      if (r != null) return r;
      var o = n,
        a = v(e, t).finally(function () {
          o.delete(t);
        });
      return (o.set(t, a), a);
    }
    function v(e, t) {
      return g(
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
              var a = yield N(e, n, n.maxEvals, t);
              D(e, a);
            }
          });
          return function (e) {
            return r.apply(this, arguments);
          };
        })(),
      );
    }
    function S(e, t, n) {
      return g(e, function (r) {
        return N(e, r, t, n);
      });
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield E(e, t.cipherSuite, t.configId, r);
            if (o != null) return o;
            var a = yield N(e, t, t.maxEvals, n);
            return I(e, a, t, r);
          },
        )),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield $(e, t, n, r);
            return o;
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (t.length < 1) throw new u("No tokens received from ACS!");
            D(e, t);
            var o = yield $(e, n.cipherSuite, n.configId, r);
            if (o == null) throw new u("No redeemable token generated!");
            return o;
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      t.forEach(function (t) {
        return x(e, t);
      });
    }
    function x(e, t) {
      t != null &&
        (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
          ? e.storageManager.storeCachedToken(t)
          : e.storageManager.deleteCachedToken(t));
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.storageManager.getCachedToken(n);
            if (a == null) return null;
            var i = o("ACSCachedTokenModule").redeemCachedToken(a);
            if ((x(e, a), i)) {
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
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (n <= 0) throw new s("Invalid number of tokens requested: " + n);
            var a = A(e, t.cipherSuite),
              i = o("ACSTokenUtil").generateBlindedTokens(n, e.voprfWasm, a),
              l = o("ACSTokenUtil").getBlindedNonces(i),
              u = yield e.serverProvider.getCredentials({
                blindedTokens: l,
                config: t,
                projectName: e.projectName,
                requestProof: r,
              });
            return w(e, a, t, i, u.signedBlindedTokens, u.dleqProofs, r);
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r, a, i, l) {
      var s = o("ACSTokenUtil").unblindTokens(n, r, a, i, e.voprfWasm, t, l),
        u = o("ACSTokenUtil").getCachedTokens(s, n, e.voprfWasm, t);
      return u;
    }
    function A(e, t) {
      if (o("ACSCipherSuiteModule").getACSCipherSuiteByValue(t) == null)
        throw new s("Unknown cipher suite: " + String(t));
      if (t !== o("ACSCipherSuiteModule").VOPRF_ED25519_HMACSHA256.value)
        return e.voprfInfo;
      var n = e.voprfWasm,
        r = d.get(n);
      if (r != null) return r;
      if (n.createCurveEd25519 == null)
        throw new s("VOPRF module does not support Ed25519");
      var a = n.createCurveEd25519(),
        i;
      try {
        i = n.createVoprfExpTwohashdh(a);
      } catch (e) {
        throw (n.freeCurve(a), e);
      }
      var l = { curvePtr: a, voprfPtr: i };
      return (d.set(n, l), l);
    }
    function F(e, t, n, r, o) {
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
      (l.loadACSServerConfig = p),
      (l.fetchAndRedeem = y),
      (l.prewarmTokenCache = b),
      (l.loadServerConfigAndGetNewTokens = S),
      (l.getNewTokens = N),
      (l.buildACSClient = F));
  },
  98,
);
