__d(
  "WAWebTheiaACSClient",
  ["WAWebACSServerProvider", "WAWebTheiaVoprfJsEd25519", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = 32,
      u = new Uint8Array(0),
      c = new Set(["WA_Theia", "WA_TheiaInternal", "WA_TheiaDebug"]);
    async function d(t) {
      if (!c.has(t))
        throw r("err")("WAWebTheiaACSClient: unsupported ACS project " + t);
      var n = new (o("WAWebACSServerProvider").WAWebACSServerProvider)(),
        a = await n.getPublicParameters(t, "");
      if (a.cipherSuite !== e)
        throw r("err")(
          "WAWebTheiaACSClient: expected cipher_suite=2, got " +
            String(a.cipherSuite),
        );
      var i = await m(n, t, a),
        l = await _(i.sharedSecret.slice(), u);
      return {
        projectName: t,
        attributeIdentifier: "",
        serverConfigId: i.serverConfigId,
        tag: l,
        credential: i.nonce.slice(),
        data: u.slice(),
        clientSharedSecret: i.sharedSecret.slice(),
      };
    }
    async function m(e, t, n) {
      var r = o(
          "WAWebTheiaVoprfJsEd25519",
        ).createWAWebTheiaVoprfJsEd25519Module(),
        a = p(s),
        i = r.blind(a),
        l = i.blindedElement,
        u = i.blindingFactor,
        c = await e.getCredentials({
          blindedTokens: [l],
          config: n,
          projectName: t,
          requestProof: !0,
        }),
        d = f(c),
        m = g(c),
        _ = r.verifiableUnblind(m.c, m.s, u, d, l, n.publicKey, !0),
        h = _.unblindedElement,
        y = r.clientFinalize(a, h),
        C = y.finalEvaluation;
      return { nonce: a, serverConfigId: n.configId, sharedSecret: C };
    }
    function p(e) {
      var t = new Uint8Array(e);
      return (self.crypto.getRandomValues(t), t);
    }
    async function _(e, t) {
      var n = await self.crypto.subtle.importKey(
          "raw",
          e,
          { hash: "SHA-256", name: "HMAC" },
          !1,
          ["sign"],
        ),
        r = await self.crypto.subtle.sign("HMAC", n, t);
      return new Uint8Array(r);
    }
    function f(e) {
      var t = e.signedBlindedTokens[0];
      if (t == null || e.signedBlindedTokens.length !== 1)
        throw r("err")(
          "WAWebTheiaACSClient: expected exactly one signed token",
        );
      return t;
    }
    function g(e) {
      var t = e.dleqProofs,
        n = t == null ? void 0 : t[0];
      if (n == null || t == null || t.length !== 1)
        throw r("err")("WAWebTheiaACSClient: expected exactly one DLEQ proof");
      return n;
    }
    l.redeemWithTheiaAPTClient = d;
  },
  98,
);
