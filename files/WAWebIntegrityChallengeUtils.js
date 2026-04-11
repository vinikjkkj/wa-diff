__d(
  "WAWebIntegrityChallengeUtils",
  [
    "$InternalEnum",
    "WABase64UrlSafe",
    "asyncToGeneratorRuntime",
    "err",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["PASSKEY", "CAPTCHA"]),
      s = "WAIntegrityChallengeState",
      u = "whatsapp-challenge";
    function c(e) {
      var t = o("WABase64UrlSafe").urlSafeBase64ToStandard(e),
        n = (t + "===").slice(0, t.length + ((4 - (t.length % 4)) % 4));
      return o("WABase64UrlSafe").getBytesFromBase64(n);
    }
    function d(e) {
      for (var t = new Uint8Array(e), n = "", r = 0; r < t.length; r++)
        n += String.fromCharCode(t[r]);
      var a = btoa(n);
      return o("WABase64UrlSafe").urlSafeBase64(a).replace(/=/g, "");
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            o = c(e),
            a = new TextEncoder().encode(u),
            i = {
              challenge: o,
              rpId: "whatsapp.com",
              userVerification: "preferred",
              timeout: 6e5,
              extensions: { prf: { eval: { first: a } } },
            },
            l = navigator.credentials;
          if (l == null)
            throw r("err")("WebAuthn credentials API is not available");
          var s = yield l.get({ publicKey: i });
          if (s == null)
            throw r("err")("No credential returned from WebAuthn API");
          var m = r("unsafeCast")(s),
            p =
              (t =
                (n = m.getClientExtensionResults()) == null ||
                (n = n.prf) == null ||
                (n = n.results) == null
                  ? void 0
                  : n.first) != null
                ? t
                : null;
          return {
            credential_id: m.id,
            raw_id: d(m.rawId),
            type: m.type,
            authenticator_data: d(m.response.authenticatorData),
            client_data_json: d(m.response.clientDataJSON),
            signature: d(m.response.signature),
            user_handle:
              m.response.userHandle != null ? d(m.response.userHandle) : "",
            prf_output: p != null ? d(p) : null,
          };
        })),
        p.apply(this, arguments)
      );
    }
    ((l.ChallengeTypes = e),
      (l.INTEGRITY_CHALLENGE_IDB_KEY = s),
      (l.performPasskeyAssertion = m));
  },
  98,
);
