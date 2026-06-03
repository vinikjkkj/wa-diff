__d(
  "WAWebRotateKeyJob",
  [
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWap",
    "WAWebCryptoCurve25519",
    "WAWebDefinePersistedJob",
    "WAWebDigestKeyJob",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = new (r("WADeprecatedWapParser"))("rotateKeyResponseParser", function (
        e,
      ) {
        e.assertFromServer();
      }),
      p = o("WAWebDefinePersistedJob")
        .defineWebPersistedJob()
        .step(
          "uploadKeys",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebSignalStoreApi")
              .waSignalStore.getRegistrationInfo()
              .then(function (e) {
                if (!e) throw r("err")("No registration info is available");
                return o(
                  "WAWebSignalStoreApi",
                ).waSignalStore.rotateSignedPreKey(
                  o("WAWebCryptoCurve25519").toSignalCurveKeyPair(
                    e.identityKeyPair,
                  ),
                  o("WAWebSignalKeyApi").generateSignedKeyPair,
                );
              });
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "rotateKey: signedPreKey uploading",
                ])),
            );
            var n = o("WAWap").wap(
                "iq",
                {
                  xmlns: "encrypt",
                  type: "set",
                  to: o("WAWap").S_WHATSAPP_NET,
                  id: o("WAWap").generateId(),
                },
                o("WAWap").wap(
                  "rotate",
                  null,
                  o("WAWebSignalUtilsApi").xmppSignedPreKey(t),
                ),
              ),
              a = yield o("WADeprecatedSendIq").deprecatedSendIq(n, m);
            if (a.success) return { shouldDigestKey: !1 };
            var i = !1,
              l = a.errorCode;
            return (
              l === 406
                ? o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "rotateKey generated bad key",
                      ])),
                  )
                : l === 409
                  ? (o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "skey does not pass server validation",
                        ])),
                    ),
                    (i = !0))
                  : l >= 500
                    ? o("WALogger").LOG(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "rotateKey server error ",
                            ", wait a day",
                          ])),
                        l,
                      )
                    : (o("WALogger").LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "rotateKey unrecognized error ",
                            "",
                          ])),
                        l,
                      ),
                      (i = !0)),
              { shouldDigestKey: i }
            );
          }),
        )
        .finalStep("maybeDigestKey", function (e) {
          var t = e.shouldDigestKey;
          if (t) return o("WAWebDigestKeyJob").digestKey();
        })
        .end();
    l.rotateKey = p;
  },
  98,
);
