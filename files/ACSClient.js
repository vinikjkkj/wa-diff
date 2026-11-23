__d(
  "ACSClient",
  [
    "ACSCachedTokenModule",
    "ACSCipherSuiteModule",
    "ACSCommon",
    "ACSTokenUtil",
    "justknobx",
  ],
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
      })(babelHelpers.wrapNativeSuper(Error)),
      u = 720 * 60 * 1e3,
      c = new WeakMap(),
      d = new WeakMap();
    function m(e) {
      for (
        var t = e.storageManager.getServerConfigs(), n = null, r = 0;
        r < (t == null ? void 0 : t.length);
        r++
      ) {
        var o = t[r];
        if (!p(o)) {
          e.storageManager.removeServerConfig(o.configId);
          continue;
        }
        (n == null || o.configExpiresOnMillis > n.configExpiresOnMillis) &&
          (n = o);
      }
      if (n == null) return _(e);
      var a = n;
      return a.configExpiresOnMillis <= Date.now() + u
        ? _(e).catch(function () {
            return a;
          })
        : Promise.resolve(a);
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
    async function f(e, t) {
      var n = await m(e);
      try {
        return await t(n);
      } catch (i) {
        if (
          !(i instanceof o("ACSCommon").ACSInvalidConfigIdError) ||
          i.configId !== n.configId ||
          !r("justknobx")._("5654")
        )
          throw i;
        e.storageManager.removeServerConfig(n.configId);
        var a = await _(e);
        if (a.configId === n.configId) throw i;
        return t(a);
      }
    }
    function g(e, t, n) {
      return f(e, function (r) {
        return v(e, r, n, t);
      });
    }
    var h = new WeakMap();
    function y(e, t) {
      var n = h.get(e);
      n == null && ((n = new Map()), h.set(e, n));
      var r = n.get(t);
      if (r != null) return r;
      var o = n,
        a = C(e, t).finally(function () {
          o.delete(t);
        });
      return (o.set(t, a), a);
    }
    function C(e, t) {
      return f(e, async function (n) {
        var r = e.storageManager.getCachedToken(n.configId);
        if (
          !(r != null && o("ACSCachedTokenModule").isCachedTokenRedeemable(r))
        ) {
          var a = await I(e, n, n.maxEvals, t);
          L(e, a);
        }
      });
    }
    function b(e, t, n) {
      return f(e, function (r) {
        return I(e, r, t, n);
      });
    }
    async function v(e, t, n, r) {
      var o = await S(e, t.cipherSuite, t.configId, r);
      if (o != null) return o;
      var a = await I(e, t, t.maxEvals, n);
      return R(e, a, t, r);
    }
    async function S(e, t, n, r) {
      var o = await k(e, t, n, r);
      return o;
    }
    async function R(e, t, n, r) {
      if (t.length < 1) throw new s("No tokens received from ACS!");
      L(e, t);
      var o = await k(e, n.cipherSuite, n.configId, r);
      if (o == null) throw new s("No redeemable token generated!");
      return o;
    }
    function L(e, t) {
      t.forEach(function (t) {
        return E(e, t);
      });
    }
    function E(e, t) {
      t != null &&
        (o("ACSCachedTokenModule").isCachedTokenRedeemable(t)
          ? e.storageManager.storeCachedToken(t)
          : e.storageManager.deleteCachedToken(t));
    }
    async function k(e, t, n, r) {
      var a = e.storageManager.getCachedToken(n);
      if (a == null) return null;
      var i = o("ACSCachedTokenModule").redeemCachedToken(a);
      if ((E(e, a), i)) {
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
    async function I(t, n, r, a) {
      if (r <= 0) throw new e("Invalid number of tokens requested: " + r);
      var i = D(t, n.cipherSuite),
        l = o("ACSTokenUtil").generateBlindedTokens(r, t.voprfWasm, i),
        s = o("ACSTokenUtil").getBlindedNonces(l),
        u = await t.serverProvider.getCredentials({
          blindedTokens: s,
          config: n,
          projectName: t.projectName,
          requestProof: a,
        });
      return T(t, i, n, l, u.signedBlindedTokens, u.dleqProofs, a);
    }
    function T(e, t, n, r, a, i, l) {
      var s = o("ACSTokenUtil").unblindTokens(n, r, a, i, e.voprfWasm, t, l),
        u = o("ACSTokenUtil").getCachedTokens(s, n, e.voprfWasm, t);
      return u;
    }
    function D(t, n) {
      if (o("ACSCipherSuiteModule").getACSCipherSuiteByValue(n) == null)
        throw new e("Unknown cipher suite: " + String(n));
      if (n !== o("ACSCipherSuiteModule").VOPRF_ED25519_HMACSHA256.value)
        return t.voprfInfo;
      var r = t.voprfWasm,
        a = c.get(r);
      if (a != null) return a;
      if (r.createCurveEd25519 == null)
        throw new e("VOPRF module does not support Ed25519");
      var i = r.createCurveEd25519(),
        l;
      try {
        l = r.createVoprfExpTwohashdh(i);
      } catch (e) {
        throw (r.freeCurve(i), e);
      }
      var s = { curvePtr: i, voprfPtr: l };
      return (c.set(r, s), s);
    }
    function x(e, t, n, r, o) {
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
      (l.loadACSServerConfig = m),
      (l.fetchAndRedeem = g),
      (l.prewarmTokenCache = y),
      (l.loadServerConfigAndGetNewTokens = b),
      (l.getNewTokens = I),
      (l.buildACSClient = x));
  },
  98,
);
