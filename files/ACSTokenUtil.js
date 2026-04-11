__d(
  "ACSTokenUtil",
  ["ACSCipherSuiteModule", "ACSTokenHmacUtil"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = window.crypto || window.msCrypto,
      s = (function (e) {
        function t(t) {
          var n;
          return ((n = e.call(this, t) || this), (n.name = "TokenError"), n);
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function u(t, n, r) {
      for (var o = [], a = n.getCurveBytes(r), i = 0; i < t; i++) {
        var l = new Uint8Array(a);
        e.getRandomValues(l);
        var s = n.blind(r, l),
          u = {
            nonce: l,
            blindingFactor: s.blindingFactor,
            blindedNonce: s.blindedElement,
          };
        o.push(u);
      }
      return o;
    }
    function c(e) {
      for (var t = new Array(e.length), n = 0; n < e.length; n++) {
        var r = e[n];
        t[n] = r.blindedNonce.slice();
      }
      return t;
    }
    function d(e, t, n, r) {
      if (
        t == null ||
        e == null ||
        e.nonce == null ||
        e.unblindedSignature == null
      )
        throw new s(
          "Server configuration or token or its fields used for shared secret derivation are null during getting a cached token.",
        );
      var o = n.clientFinalize(r, e.nonce, e.unblindedSignature),
        a = {
          serverConfigId: e.serverConfigId,
          nonce: e.nonce,
          sharedSecret: o.finalEvaluation,
          expiresOnMillis: e.tokenExpiresOnMillis,
          maxRedemptions: t.maxNumberOfRedemptionsPerToken,
          numberRedemptions: 0,
        };
      return a;
    }
    function m(e, t, n, r) {
      var o = [];
      for (var a of e) {
        var i = d(a, t, n, r);
        o.push(i);
      }
      return o;
    }
    function p(e, t, n, r, o, a, i) {
      if (e == null)
        throw new s("Server configuration missing during unblind.");
      if (i && r == null)
        throw new s("Proofs need to be verified but not provided.");
      if (i && t.length !== (r == null ? void 0 : r.length))
        throw new s("Number of signatures do not match number of proofs.");
      if (n.length !== t.length)
        throw new s(
          "Number of signatures do not match number of credentials requested.",
        );
      for (var l = [], u = 0; u < t.length; u++) {
        var c = t[u];
        if (
          c == null ||
          c.blindingFactor == null ||
          c.blindedNonce == null ||
          n[u] == null
        )
          throw new s(
            "Token or its blinding factor or its blinded once or its signed blinded nonce is null.",
          );
        var d = null,
          m = null;
        if (i && r != null) {
          var p = r[u];
          if (p == null || p.c == null || p.s == null)
            throw new s(
              "Proof verification requested but dleqProof or either of its fields are null.",
            );
          ((d = p.c), (m = p.s));
        }
        var _ = o.verifiableUnblind(
            a,
            d,
            m,
            c.blindingFactor,
            n[u],
            c.blindedNonce,
            e.publicKey,
            i,
          ),
          f = Date.now() + e.tokenTTLOnMillis,
          g = {
            nonce: c.nonce,
            unblindedSignature: _.unblindedElement,
            serverConfigId: e.configId,
            tokenExpiresOnMillis: f,
          };
        l.push(g);
      }
      return l;
    }
    function _(e, t, n) {
      var r = o("ACSCipherSuiteModule").getACSCipherSuiteByValue(e);
      if (r != null)
        return o("ACSTokenHmacUtil").hmac(
          r.macAlgorithm,
          t.sharedSecret.slice(),
          n,
        );
      throw new s("Unknown cipher suite: " + e);
    }
    ((l.TokenError = s),
      (l.generateBlindedTokens = u),
      (l.getBlindedNonces = c),
      (l.getCachedTokens = m),
      (l.unblindTokens = p),
      (l.generateTag = _));
  },
  98,
);
