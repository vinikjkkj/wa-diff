__d(
  "WAWebUploadPreKeysJob",
  [
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
      f = 812,
      g = { error: !1, result: !0 },
      h = new (r("WADeprecatedWapParser"))("uploadPreKeyResParser", function (
        e,
      ) {
        var t;
        (e.assertTag("iq"), e.assertFromServer());
        var n = e.attrEnum("type", g);
        if (n) return { success: !0 };
        var r = e.child("error");
        return {
          errorCode: r.attrInt("code"),
          errorText: (t = r.maybeAttrString("text")) != null ? t : "",
        };
      });
    async function y() {
      var t = await Promise.all([
          o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
          o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
        ]),
        n = t[0],
        a = t[1];
      if (!n || !a) throw r("err")("No signal info is available");
      var i = n.identityKeyPair,
        l = n.registrationId,
        m = await o("WAWebSignalStoreApi")
          .waSignalStore.getOrGenPreKeys(
            f,
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
        p = m[0],
        _ = m[1],
        g = m[2];
      try {
        var y = await o("WAComms")
          .waitForConnection()
          .then(function () {
            return o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(_);
          })
          .then(function () {
            return o("WADeprecatedSendIq").deprecatedSendIqWithoutRetry(p, h);
          });
        if (y.success)
          return (
            o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(!0),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "_uploadPreKeys: ",
                  " keys uploaded, raw stanza size: ",
                  "b",
                ])),
              g,
              p.toString().length,
            ),
            { success: !0 }
          );
        var C = y.errorCode;
        return (
          C >= 500
            ? o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "_uploadPreKeys: server requested backoff ",
                    " (count: ",
                    ", size: ",
                    "b)",
                  ])),
                C,
                g,
                p.toString().length,
              )
            : C === 406
              ? o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "_uploadPreKeys: uploaded invalid keys (count: ",
                      ", size: ",
                      "b)",
                    ])),
                  g,
                  p.toString().length,
                )
              : o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "_uploadPreKeys: unrecognized error ",
                      " (count: ",
                      ", size: ",
                      "b)",
                    ])),
                  C,
                  g,
                  p.toString().length,
                ),
          { errorCode: y.errorCode, errorText: y.errorText }
        );
      } catch (e) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "_uploadPreKeys: disconnected, server state unknown: ",
              " cnt=",
              " sz=",
              "b",
            ])),
          e,
          g,
          p.toString().length,
        );
        return;
      }
    }
    var C = { algo: { type: "fibonacci", first: 1e3, second: 2e3 }, max: 61e4 };
    function b() {
      var e = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
        name: "uploadPreKeys",
        timer: C,
        code: async function (t) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "uploadPreKeys: running",
              ])),
          );
          var e = await y();
          (e == null ? void 0 : e.success) === !0
            ? (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadPreKeys: done",
                  ])),
              ),
              t())
            : o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "uploadPreKeys: retrying (after delay)",
                  ])),
              );
        },
      });
      return (e.start(), e.promise());
    }
    ((l.UPLOAD_KEYS_COUNT = f),
      (l.uploadPreKeyResParser = h),
      (l.uploadPreKeys = b));
  },
  98,
);
