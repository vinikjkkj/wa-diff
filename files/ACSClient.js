__d(
  "ACSClient",
  ["ACSCachedTokenModule", "ACSTokenUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
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
      s = (function (e) {
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
    function u(e) {
      for (
        var t = e.storageManager.getServerConfigs(), n = null, r = 0;
        r < (t == null ? void 0 : t.length);
        r++
      ) {
        var o = t[r];
        if (!c(o)) {
          e.storageManager.removeServerConfig(o.configId);
          continue;
        }
        n == null && (n = o);
      }
      return new Promise(function (t) {
        n != null ? t(n) : t(d(e));
      });
    }
    function c(e) {
      var t = Date.now() > e.configExpiresOnMillis,
        n = !t;
      return n;
    }
    function d(e) {
      return e.serverProvider
        .getPublicParameters(e.projectName, e.attributeIdentifier)
        .then(function (t) {
          return (e.storageManager.storeServerConfig(t), t);
        });
    }
    async function m(e, t, n) {
      var r = await u(e);
      return h(e, r, n, t);
    }
    var p = new WeakMap();
    function _(e, t) {
      var n = p.get(e);
      n == null && ((n = new Map()), p.set(e, n));
      var r = n.get(t);
      if (r != null) return r;
      var o = n,
        a = f(e, t).finally(function () {
          o.delete(t);
        });
      return (o.set(t, a), a);
    }
    async function f(e, t) {
      var n = await u(e),
        r = e.storageManager.getCachedToken(n.configId);
      if (
        !(r != null && o("ACSCachedTokenModule").isCachedTokenRedeemable(r))
      ) {
        var a = await R(e, n, n.maxEvals, t);
        b(e, a);
      }
    }
    async function g(e, t, n) {
      var r = await u(e),
        o = await R(e, r, t, n);
      return o;
    }
    async function h(e, t, n, r) {
      var o = await y(e, t.cipherSuite, t.configId, r);
      if (o != null) return o;
      var a = await R(e, t, t.maxEvals, n);
      return C(e, a, t, r);
    }
    async function y(e, t, n, r) {
      var o = await S(e, t, n, r);
      return o;
    }
    async function C(e, t, n, r) {
      if (t.length < 1) throw new s("No tokens received from ACS!");
      b(e, t);
      var o = await S(e, n.cipherSuite, n.configId, r);
      if (o == null) throw new s("No redeemable token generated!");
      return o;
    }
    function b(e, t) {
      t.forEach(function (t) {
        return v(e, t);
      });
    }
    function v(e, t) {
      t != null &&
        (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
          ? e.storageManager.storeCachedToken(t)
          : e.storageManager.deleteCachedToken(t));
    }
    async function S(e, t, n, r) {
      var a = e.storageManager.getCachedToken(n);
      if (a == null) return null;
      var i = o("ACSCachedTokenModule").redeemCachedToken(a);
      if ((v(e, a), i)) {
        var l = await o("ACSTokenUtil").generateTag(t, a, r),
          u = {
            projectName: e.projectName,
            attributeIdentifier: e.attributeIdentifier,
            serverConfigId: a.serverConfigId,
            tag: l,
            credential: a.nonce.slice(),
            data: r,
            clientSharedSecret: a.sharedSecret.slice(),
          };
        return u;
      } else
        throw new s(
          "Cached token is not redeemable. Neither storage nor ACS should return unredeemable tokens; this should not happen.",
        );
    }
    async function R(t, n, r, a) {
      if (r <= 0) throw new e("Invalid number of tokens requested: " + r);
      var i = o("ACSTokenUtil").generateBlindedTokens(
          r,
          t.voprfWasm,
          t.voprfInfo,
        ),
        l = o("ACSTokenUtil").getBlindedNonces(i),
        s = await t.serverProvider.getCredentials({
          blindedTokens: l,
          config: n,
          projectName: t.projectName,
          requestProof: a,
        });
      return L(t, n, i, s.signedBlindedTokens, s.dleqProofs, a);
    }
    function L(e, t, n, r, a, i) {
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
    function E(e, t, n, r, o) {
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
    ((l.ACSClientError = e),
      (l.loadACSServerConfig = u),
      (l.fetchAndRedeem = m),
      (l.prewarmTokenCache = _),
      (l.loadServerConfigAndGetNewTokens = g),
      (l.getNewTokens = R),
      (l.buildACSClient = E));
  },
  98,
);
