__d(
  "WAWebTheiaACSClient",
  [
    "WAWebACSServerProvider",
    "WAWebTheiaVoprfJsEd25519",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 2,
      s = 32,
      u = new Uint8Array(0),
      c = new Set(["WA_Theia", "WA_TheiaInternal", "WA_TheiaDebug"]);
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!c.has(t))
            throw r("err")("WAWebTheiaACSClient: unsupported ACS project " + t);
          var n = new (o("WAWebACSServerProvider").WAWebACSServerProvider)(),
            a = yield n.getPublicParameters(t, "");
          if (a.cipherSuite !== e)
            throw r("err")(
              "WAWebTheiaACSClient: expected cipher_suite=2, got " +
                String(a.cipherSuite),
            );
          var i = yield p(n, t, a),
            l = yield g(i.sharedSecret.slice(), u);
          return {
            projectName: t,
            attributeIdentifier: "",
            serverConfigId: i.serverConfigId,
            tag: l,
            credential: i.nonce.slice(),
            data: u.slice(),
            clientSharedSecret: i.sharedSecret.slice(),
          };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = o(
              "WAWebTheiaVoprfJsEd25519",
            ).createWAWebTheiaVoprfJsEd25519Module(),
            a = f(s),
            i = r.blind(a),
            l = i.blindedElement,
            u = i.blindingFactor,
            c = yield e.getCredentials({
              blindedTokens: [l],
              config: n,
              projectName: t,
              requestProof: !0,
            }),
            d = y(c),
            m = C(c),
            p = r.verifiableUnblind(m.c, m.s, u, d, l, n.publicKey, !0),
            _ = p.unblindedElement,
            g = r.clientFinalize(a, _),
            h = g.finalEvaluation;
          return { nonce: a, serverConfigId: n.configId, sharedSecret: h };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      var t = new Uint8Array(e);
      return (self.crypto.getRandomValues(t), t);
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield self.crypto.subtle.importKey(
              "raw",
              e,
              { hash: "SHA-256", name: "HMAC" },
              !1,
              ["sign"],
            ),
            r = yield self.crypto.subtle.sign("HMAC", n, t);
          return new Uint8Array(r);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t = e.signedBlindedTokens[0];
      if (t == null || e.signedBlindedTokens.length !== 1)
        throw r("err")(
          "WAWebTheiaACSClient: expected exactly one signed token",
        );
      return t;
    }
    function C(e) {
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
