__d(
  "WAWebDigestKeyJob",
  [
    "WABase64",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebSignalStoreApi",
    "WAWebUploadPreKeysJob",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 32,
      _ = new (r("WADeprecatedWapParser"))("digestResponseParser", function (
        e,
      ) {
        var t = e.child("digest"),
          n = t.child("skey");
        return {
          regId: t.child("registration").contentUint(4),
          type: t.child("type").contentUint(1),
          identity: t.child("identity").contentBytes(32),
          skey: {
            id: n.child("id").contentUint(3),
            pubkey: n.child("value").contentBytes(32),
            signature: n.child("signature").contentBytes(64),
          },
          keys: t.child("list").mapChildren(function (e) {
            return e.contentUint(3);
          }),
          hash: t.child("hash").contentBytes(20),
        };
      });
    async function f() {
      var t,
        n = (t = o("WAWap")).wap(
          "iq",
          {
            xmlns: "encrypt",
            type: "get",
            to: t.S_WHATSAPP_NET,
            id: t.generateId(),
          },
          t.wap("digest", null),
        ),
        r = await o("WADeprecatedSendIq").deprecatedSendIq(n, _),
        a = null;
      if (r.success)
        try {
          (await g(r.result), (a = !1));
        } catch (e) {
          a = !1;
        }
      else {
        var i = r.errorCode;
        i === 404
          ? (o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "digestKey: no record found for current user",
                ])),
            ),
            (a = !0))
          : i === 406
            ? (o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "digestKey: malformed request",
                  ])),
              ),
              (a = !1))
            : i === 503
              ? (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "digestKey: service unavailable",
                    ])),
                ),
                (a = !1))
              : (o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "digestKey: server error ",
                      "",
                    ])),
                  i,
                ),
                (a = !1));
      }
      if (a != null && a)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "digestKey: validate key bundle failed, upload prekeys again",
              ])),
          ),
          o("WAWebUploadPreKeysJob").uploadPreKeys()
        );
    }
    async function g(e) {
      var t = await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
          o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
        ]),
        n = t[0],
        a = t[1];
      if (!n || !a)
        throw r("err")(
          "validateLocalKeyBundle: No registration info is available",
        );
      if (e.regId !== n.registrationId)
        throw r("err")("validateLocalKeyBundle: registation id mismatch");
      var i = n.identityKeyPair.pubKey,
        l = a.keyPair.pubKey,
        s =
          i.byteLength +
          l.byteLength +
          a.signature.byteLength +
          e.keys.length * p,
        u = new Uint8Array(s),
        c = 0;
      [i, l, a.signature].forEach(function (e) {
        (u.set(new Uint8Array(e), c), (c += e.byteLength));
      });
      var d = e.keys.map(async function (e) {
          var t = await o("WAWebSignalStoreApi").waSignalStore.getPreKeyById(e);
          if (!t)
            throw r("err")(
              "validateLocalKeyBundle: missing prekey record for id " + e,
            );
          return t.keyPair.pubKey;
        }),
        _ = await Promise.all(d);
      _.forEach(function (e) {
        (u.set(new Uint8Array(e), c), (c += e.byteLength));
      });
      var f = await self.crypto.subtle.digest("SHA-1", u),
        g = o("WABase64").encodeB64(f),
        h = o("WABase64").encodeB64(e.hash);
      if (g !== h)
        throw r("err")(
          "validateLocalKeyBundle: hash mismatch remote:" + h + " local:" + g,
        );
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "validateLocalKeyBundle: success",
          ])),
      );
    }
    l.digestKey = f;
  },
  98,
);
