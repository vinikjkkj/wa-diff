__d(
  "WAWebMexCachedTokenJob",
  [
    "WABase64",
    "WALogger",
    "WAWebAccountLinkingCryptoUtils",
    "WAWebMexCachedTokenJobMutation.graphql",
    "WAWebMexClient",
    "WAWebODS",
    "WAWebPonyfillsCryptoRandomUUID",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = e !== void 0 ? e : (e = n("WAWebMexCachedTokenJobMutation.graphql"));
    async function c() {
      var e,
        t = await o("WAWebAccountLinkingCryptoUtils").generateRSAKeys(),
        n = t.privateKey,
        a = t.publicKey,
        i = await o("WAWebAccountLinkingCryptoUtils").cryptoKeyToPem(a, !0),
        l = o("WABase64").encodeB64(new TextEncoder().encode(i)),
        c = await o("WAWebMexClient").fetchQuery(u, {
          input: {
            client_pub_key: l,
            request_id: r("WAWebPonyfillsCryptoRandomUUID")(),
          },
        }),
        d =
          (e = c.xwa2_ent_trade_canonical_nonce_for_access_tokens) == null
            ? void 0
            : e.encrypted_access_tokens;
      if (d == null)
        throw r("err")(
          "[canonical][cached-nonce] MEX response missing encrypted payload",
        );
      var m = new Uint8Array(o("WABase64").decodeB64(d.key)),
        p = new Uint8Array(o("WABase64").decodeB64(d.data)),
        _ = new Uint8Array(o("WABase64").decodeB64(d.nonce)),
        f = new Uint8Array(o("WABase64").decodeB64(d.tag)),
        g = await o(
          "WAWebAccountLinkingCryptoUtils",
        ).decryptRSAEncryptedPayload(n, m, p, _, f);
      if (g == null || typeof g != "object")
        throw r("err")(
          "[canonical][cached-nonce] decrypted payload is not an object",
        );
      var h = g.access_token,
        y = g.fbid;
      if (typeof h != "string" || typeof y != "number")
        throw r("err")(
          "[canonical][cached-nonce] decrypted payload missing access_token or fbid",
        );
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[canonical][cached-nonce] cached nonce fetch via MEX succeeded",
            ])),
        ),
        r("WAWebODS").incr("web.app.canonical.cached_nonce.decrypt_success"),
        { accessToken: h, fbid: y }
      );
    }
    l.fetchCachedNonceToken = c;
  },
  98,
);
