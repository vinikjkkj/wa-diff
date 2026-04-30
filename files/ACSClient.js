__d(
  "ACSClient",
  [
    "ACSCachedTokenModule",
    "ACSTokenUtil",
    "LSVoprfWasm",
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
          return h(e, r, n, t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c(e),
            o = yield I(e, r, t, n);
          return o;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield C(e, t.cipherSuite, t.configId, r);
            if (o != null) return o;
            var a = yield I(e, t, t.maxEvals, n);
            return v(e, a, t, r);
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var o = yield E(e, t, n, r);
            return o;
          },
        )),
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
            if (t.length < 1) throw new u("No tokens received from ACS!");
            R(e, t);
            var o = yield E(e, n.cipherSuite, n.configId, r);
            if (o == null) throw new u("No redeemable token generated!");
            return o;
          },
        )),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      t.forEach(function (t) {
        return L(e, t);
      });
    }
    function L(e, t) {
      t != null &&
        (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
          ? e.storageManager.storeCachedToken(t)
          : e.storageManager.deleteCachedToken(t));
    }
    function E(e, t, n, r) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.storageManager.getCachedToken(n);
            if (a == null) return null;
            var i = o("ACSCachedTokenModule").redeemCachedToken(a);
            if ((L(e, a), i)) {
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
            if (n <= 0) throw new s("Invalid number of tokens requested: " + n);
            var a = o("ACSTokenUtil").generateBlindedTokens(
                n,
                e.voprfWasm,
                e.voprfInfo,
              ),
              i = o("ACSTokenUtil").getBlindedNonces(a),
              l = yield e.serverProvider.getCredentials(t, i, r, e.projectName);
            return D(e, t, a, l.signedBlindedTokens, l.dleqProofs, r);
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n, r, a, i) {
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
    function x(e, t, n, r) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o("LSVoprfWasm").LSVoprfWasm({
                locateFile: o("LSVoprfWasm").locateFile,
              }),
              i = a.createCurveRistretto(),
              l = a.createVoprfExpTwohashdh(i);
            return {
              projectName: e,
              attributeIdentifier: t,
              serverProvider: n,
              storageManager: r,
              voprfInfo: { curvePtr: i, voprfPtr: l },
              voprfWasm: a,
            };
          },
        )),
        $.apply(this, arguments)
      );
    }
    ((l.ACSClientError = s),
      (l.loadACSServerConfig = c),
      (l.fetchAndRedeem = p),
      (l.loadServerConfigAndGetNewTokens = f),
      (l.getNewTokens = I),
      (l.buildACSClient = x));
  },
  98,
);
