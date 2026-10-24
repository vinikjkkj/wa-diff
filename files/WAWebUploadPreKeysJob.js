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
    "WAWebSignalConst",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
    "asyncToGeneratorRuntime",
    "err",
    "requireDeferred",
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
      g = r("requireDeferred")("WAWebKyberPreKeyStore").__setRef(
        "WAWebUploadPreKeysJob",
      ),
      h = 812,
      y = { error: !1, result: !0 },
      C = new (r("WADeprecatedWapParser"))("uploadPreKeyResParser", function (
        e,
      ) {
        var t;
        (e.assertTag("iq"), e.assertFromServer());
        var n = e.attrEnum("type", y);
        if (n) return { success: !0 };
        var r = e.child("error");
        return {
          errorCode: r.attrInt("code"),
          errorText: (t = r.maybeAttrString("text")) != null ? t : "",
        };
      });
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                h,
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
                      o("WAWebSignalConst").KEY_BUNDLE_TYPE,
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
            g = s[1],
            y = s[2];
          try {
            var b = yield o("WAComms")
              .waitForConnection()
              .then(function () {
                return o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                  g,
                );
              })
              .then(function () {
                return L();
              })
              .then(function () {
                return o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry(
                  u,
                  C,
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
                  y,
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
                    y,
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
                      y,
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
                      y,
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
              y,
              u.toString().length,
            );
            return;
          }
        })),
        v.apply(this, arguments)
      );
    }
    var S = { algo: { type: "fibonacci", first: 1e3, second: 2e3 }, max: 61e4 };
    function R() {
      var t = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
        name: "uploadPreKeys",
        timer: S,
        code: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "uploadPreKeys: running",
                ])),
            );
            var n = yield b();
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
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield g.load(),
            t = e.setPQMigrated;
          yield t(!1);
        })),
        E.apply(this, arguments)
      );
    }
    ((l.UPLOAD_KEYS_COUNT = h),
      (l.uploadPreKeyResParser = C),
      (l.uploadPreKeys = R),
      (l.resetPQMigration = L));
  },
  98,
);
