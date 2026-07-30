__d(
  "ACSClient",
  [
    "ACSCachedTokenModule",
    "ACSTokenUtil",
    "Promise",
    "asyncToGeneratorRuntime",
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
      c = 720 * 60 * 1e3;
    function d(t) {
      for (
        var r = t.storageManager.getServerConfigs(), o = null, a = 0;
        a < (r == null ? void 0 : r.length);
        a++
      ) {
        var i = r[a];
        if (!m(i)) {
          t.storageManager.removeServerConfig(i.configId);
          continue;
        }
        (o == null || i.configExpiresOnMillis > o.configExpiresOnMillis) &&
          (o = i);
      }
      if (o == null) return p(t);
      var l = o;
      return l.configExpiresOnMillis <= Date.now() + c
        ? p(t).catch(function () {
            return l;
          })
        : (e || (e = n("Promise"))).resolve(l);
    }
    function m(e) {
      var t = Date.now() > e.configExpiresOnMillis,
        n = !t;
      return n;
    }
    function p(e) {
      return e.serverProvider
        .getPublicParameters(e.projectName, e.attributeIdentifier)
        .then(function (t) {
          return (e.storageManager.storeServerConfig(t), t);
        });
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield d(e);
          return S(e, r, n, t);
        })),
        f.apply(this, arguments)
      );
    }
    var g = new WeakMap();
    function h(e, t) {
      var n = g.get(e);
      n == null && ((n = new Map()), g.set(e, n));
      var r = n.get(t);
      if (r != null) return r;
      var o = n,
        a = y(e, t).finally(function () {
          o.delete(t);
        });
      return (o.set(t, a), a);
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield d(e),
            r = e.storageManager.getCachedToken(n.configId);
          if (
            !(r != null && o("ACSCachedTokenModule").isCachedTokenRedeemable(r))
          ) {
            var a = yield P(e, n, n.maxEvals, t);
            T(e, a);
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield d(e),
            o = yield P(e, r, t, n);
          return o;
        })),
        v.apply(this, arguments)
      );
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
      (l.loadACSServerConfig = d),
      (l.fetchAndRedeem = _),
      (l.prewarmTokenCache = h),
      (l.loadServerConfigAndGetNewTokens = b),
      (l.getNewTokens = P),
      (l.buildACSClient = w));
  },
  98,
);
