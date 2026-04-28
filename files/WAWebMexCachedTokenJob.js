__d(
  "WAWebMexCachedTokenJob",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebMexCachedTokenJobMutation.graphql",
    "WAWebMexClient",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = e !== void 0 ? e : (e = n("WAWebMexCachedTokenJobMutation.graphql"));
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
            a = n.privateKey,
            i = n.publicKey,
            l = yield o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(i, !0),
            c = o("WABase64").encodeB64(new TextEncoder().encode(l)),
            d = yield o("WAWebMexClient").fetchQuery(u, {
              input: {
                nonce: e,
                client_pub_key: c,
                request_id: crypto.randomUUID(),
              },
            }),
            m =
              (t = d.xwa2_ent_trade_canonical_nonce_for_access_tokens) == null
                ? void 0
                : t.encrypted_access_tokens;
          if (m == null)
            throw r("err")(
              "[canonical][cached-nonce] MEX cached token response missing encrypted tokens",
            );
          var p = new Uint8Array(o("WABase64").decodeB64(m.key)),
            _ = new Uint8Array(o("WABase64").decodeB64(m.data)),
            f = new Uint8Array(o("WABase64").decodeB64(m.nonce)),
            g = new Uint8Array(o("WABase64").decodeB64(m.tag)),
            h = yield o(
              "WAWebAccountLinkingCryptoUtils",
            ).decryptRSAEncryptedPayload(a, p, _, f, g),
            y = h.access_token,
            C = h.fbid;
          if (y == null || typeof y != "string")
            throw r("err")(
              "[canonical][cached-nonce] decrypted payload missing access_token",
            );
          return (
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[canonical][cached-nonce] cached token fetch via MEX succeeded",
                ])),
            ),
            { accessToken: y, fbid: C }
          );
        })),
        d.apply(this, arguments)
      );
    }
    l.fetchCachedNonceToken = c;
  },
  98,
);
