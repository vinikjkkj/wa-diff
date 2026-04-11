__d(
  "WAWebDigestKeyJob",
  [
    "Promise",
    "WABase64",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebSignalStoreApi",
    "WAWebUploadPreKeysJob",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 32,
      f = new (r("WADeprecatedWapParser"))("digestResponseParser", function (
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
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            r = yield o("WADeprecatedSendIq").deprecatedSendIq(n, f),
            a = null;
          if (r.success)
            try {
              (yield y(r.result), (a = !1));
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield (p || (p = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
              o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
            ]),
            a = t[0],
            i = t[1];
          if (!a || !i)
            throw r("err")(
              "validateLocalKeyBundle: No registration info is available",
            );
          if (e.regId !== a.registrationId)
            throw r("err")("validateLocalKeyBundle: registation id mismatch");
          var l = a.identityKeyPair.pubKey,
            s = i.keyPair.pubKey,
            u =
              l.byteLength +
              s.byteLength +
              i.signature.byteLength +
              e.keys.length * _,
            c = new Uint8Array(u),
            d = 0;
          [l, s, i.signature].forEach(function (e) {
            (c.set(new Uint8Array(e), d), (d += e.byteLength));
          });
          var f = e.keys.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getPreKeyById(e);
                    if (!t)
                      throw r("err")(
                        "validateLocalKeyBundle: missing prekey record for id " +
                          e,
                      );
                    return t.keyPair.pubKey;
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            ),
            g = yield p.all(f);
          g.forEach(function (e) {
            (c.set(new Uint8Array(e), d), (d += e.byteLength));
          });
          var h = yield self.crypto.subtle.digest("SHA-1", c),
            y = o("WABase64").encodeB64(h),
            C = o("WABase64").encodeB64(e.hash);
          if (y !== C)
            throw r("err")(
              "validateLocalKeyBundle: hash mismatch remote:" +
                C +
                " local:" +
                y,
            );
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "validateLocalKeyBundle: success",
              ])),
          );
        })),
        C.apply(this, arguments)
      );
    }
    l.digestKey = g;
  },
  98,
);
