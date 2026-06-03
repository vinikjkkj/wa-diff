__d(
  "WAWebUploadPreKeysJob",
  [
    "Promise",
    "WAComms",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAWap",
    "WAWebConstantsDeprecated",
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
      m,
      p,
      _,
      f,
      g = 812,
      h = { error: !1, result: !0 },
      y = new (r("WADeprecatedWapParser"))("uploadPreKeyResParser", function (
        e,
      ) {
        var t;
        (e.assertTag("iq"), e.assertFromServer());
        var n = e.attrEnum("type", h);
        if (n) return { success: !0 };
        var r = e.child("error");
        return {
          errorCode: r.attrInt("code"),
          errorText: (t = r.maybeAttrString("text")) != null ? t : "",
        };
      });
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (f || (f = n("Promise"))).all([
              o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
              o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
            ]),
            t = e[0],
            a = e[1];
          if (!t || !a) throw r("err")("No signal info is available");
          var i = t.identityKeyPair,
            l = t.registrationId,
            s = yield o("WAWebSignalStoreApi")
              .waSignalStore.getOrGenPreKeys(
                g,
                o("WAWebSignalKeyApi").generatePreKeyPair,
              )
              .then(function (e) {
                if (e.length === 0) throw r("err")("No preKey is available");
                return [
                  o("WAWap").wap(
                    "iq",
                    {
                      id: o("WAWap").generateId(),
                      xmlns: "encrypt",
                      type: "set",
                      to: o("WAWap").S_WHATSAPP_NET,
                    },
                    o("WAWap").wap(
                      "registration",
                      null,
                      o("WAWap").BIG_ENDIAN_CONTENT(l),
                    ),
                    o("WAWap").wap(
                      "type",
                      null,
                      r("WAWebConstantsDeprecated").KEY_BUNDLE_TYPE,
                    ),
                    o("WAWap").wap("identity", null, i.pubKey),
                    o("WAWap").wap(
                      "list",
                      null,
                      e.map(o("WAWebSignalUtilsApi").xmppPreKey),
                    ),
                    o("WAWebSignalUtilsApi").xmppSignedPreKey(a),
                  ),
                  e[e.length - 1].keyId,
                  e.length,
                ];
              }),
            u = s[0],
            h = s[1],
            C = s[2];
          try {
            var b = yield o("WAComms")
              .waitForConnection()
              .then(function () {
                return o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                  h,
                );
              })
              .then(function () {
                return o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry(
                  u,
                  y,
                );
              });
            if (b.success)
              return (
                o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!0),
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "_uploadPreKeys: ",
                      " keys uploaded, raw stanza size: ",
                      "b",
                    ])),
                  C,
                  u.toString().length,
                ),
                { success: !0 }
              );
            var v = b.errorCode;
            return (
              v >= 500
                ? o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: server requested backoff ",
                        " (count: ",
                        ", size: ",
                        "b)",
                      ])),
                    v,
                    C,
                    u.toString().length,
                  )
                : v === 406
                  ? o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "_uploadPreKeys: uploaded invalid keys (count: ",
                          ", size: ",
                          "b)",
                        ])),
                      C,
                      u.toString().length,
                    )
                  : o("WALogger").WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "_uploadPreKeys: unrecognized error ",
                          " (count: ",
                          ", size: ",
                          "b)",
                        ])),
                      v,
                      C,
                      u.toString().length,
                    ),
              { errorCode: b.errorCode, errorText: b.errorText }
            );
          } catch (e) {
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "_uploadPreKeys: disconnected, server state unknown: ",
                  " cnt=",
                  " sz=",
                  "b",
                ])),
              e,
              C,
              u.toString().length,
            );
            return;
          }
        })),
        b.apply(this, arguments)
      );
    }
    var v = { algo: { type: "fibonacci", first: 1e3, second: 2e3 }, max: 61e4 };
    function S() {
      var t = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
        name: "uploadPreKeys",
        timer: v,
        code: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "uploadPreKeys: running",
                ])),
            );
            var n = yield C();
            (n == null ? void 0 : n.success) === !0
              ? (o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "uploadPreKeys: done",
                    ])),
                ),
                t())
              : o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "uploadPreKeys: retrying (after delay)",
                    ])),
                );
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })(),
      });
      return (t.start(), t.promise());
    }
    ((l.UPLOAD_KEYS_COUNT = g),
      (l.uploadPreKeyResParser = y),
      (l.uploadPreKeys = S));
  },
  98,
);
