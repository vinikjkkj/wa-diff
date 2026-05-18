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
      })(babelHelpers.wrapNativeSuper(Error));
    function c(t) {
      for (
        var r = t.storageManager.getServerConfigs(), o = null, a = 0;
        a < (r == null ? void 0 : r.length);
        a++
      ) {
        var i = r[a];
        if (!d(i)) {
          t.storageManager.removeServerConfig(i.configId);
          continue;
        }
        o == null && (o = i);
      }
      return new (e || (e = n("Promise")))(function (e) {
        o != null ? e(o) : e(m(t));
      });
    }
    function d(e) {
      var t = Date.now() > e.configExpiresOnMillis,
        n = !t;
      return n;
    }
    function m(e) {
      return e.serverProvider
        .getPublicParameters(e.projectName, e.attributeIdentifier)
        .then(function (t) {
          return (e.storageManager.storeServerConfig(t), t);
        });
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c(e);
          return v(e, r, n, t);
        })),
        _.apply(this, arguments)
      );
    }
    var f = new WeakMap();
    function g(e, t) {
      var n = f.get(e);
      n == null && ((n = new Map()), f.set(e, n));
      var r = n.get(t);
      if (r != null) return r;
      var o = n,
        a = h(e, t).finally(function () {
          o.delete(t);
        });
      return (o.set(t, a), a);
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield c(e),
            r = e.storageManager.getCachedToken(n.configId);
          if (
            !(r != null && o("ACSCachedTokenModule").isCachedTokenRedeemable(r))
          ) {
            var a = yield $(e, n, n.maxEvals, t);
            I(e, a);
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c(e),
            o = yield $(e, r, t, n);
          return o;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield R(e, t.cipherSuite, t.configId, r);
            if (o != null) return o;
            var a = yield $(e, t, t.maxEvals, n);
            return E(e, a, t, r);
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield D(e, t, n, r);
            return o;
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
            if (t.length < 1) throw new u("No tokens received from ACS!");
            I(e, t);
            var o = yield D(e, n.cipherSuite, n.configId, r);
            if (o == null) throw new u("No redeemable token generated!");
            return o;
          },
        )),
        k.apply(this, arguments)
      );
    }
    function I(e, t) {
      t.forEach(function (t) {
        return T(e, t);
      });
    }
    function T(e, t) {
      t != null &&
        (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
          ? e.storageManager.storeCachedToken(t)
          : e.storageManager.deleteCachedToken(t));
    }
    function D(e, t, n, r) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.storageManager.getCachedToken(n);
            if (a == null) return null;
            var i = o("ACSCachedTokenModule").redeemCachedToken(a);
            if ((T(e, a), i)) {
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (n <= 0) throw new s("Invalid number of tokens requested: " + n);
            var a = o("ACSTokenUtil").generateBlindedTokens(
                n,
                e.voprfWasm,
                e.voprfInfo,
              ),
              i = o("ACSTokenUtil").getBlindedNonces(a),
              l = yield e.serverProvider.getCredentials(t, i, r, e.projectName);
            return N(e, t, a, l.signedBlindedTokens, l.dleqProofs, r);
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r, a, i) {
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
    function M(e, t, n, r, o) {
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
      (l.loadACSServerConfig = c),
      (l.fetchAndRedeem = p),
      (l.prewarmTokenCache = g),
      (l.loadServerConfigAndGetNewTokens = C),
      (l.getNewTokens = $),
      (l.buildACSClient = M));
  },
  98,
);
