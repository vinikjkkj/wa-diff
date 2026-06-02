__d(
  "WAWebUploadPrekeysForRegTask",
  [
    "WAComms",
    "WADeprecatedSendIq",
    "WALogger",
    "WAWap",
    "WAWebConstantsDeprecated",
    "WAWebSignalKeyApi",
    "WAWebSignalStoreApi",
    "WAWebSignalUtilsApi",
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
      p,
      _,
      f = (function () {
        function t() {}
        var n = t.prototype;
        return (
          (n.startKeyGenerationStage = function () {
            return (this.$1 || (this.$1 = this.$3()), this.$1);
          }),
          (n.startKeyUploadStage = function () {
            return (this.$2 || (this.$2 = this.$4()), this.$2);
          }),
          (n.$3 = async function () {
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "PrekeyUploadForRegistrationTask: start key generation",
                ])),
            );
            var t = await Promise.all([
                o("WAWebSignalStoreApi").waSignalStore.getRegistrationInfo(),
                o("WAWebSignalStoreApi").waSignalStore.getSignedPreKey(),
              ]),
              n = t[0],
              a = t[1];
            if (!n || !a) throw r("err")("No signal info is available");
            var i = await o(
              "WAWebSignalStoreApi",
            ).waSignalStore.getOrGenPreKeys(
              o("WAWebUploadPreKeysJob").UPLOAD_KEYS_COUNT,
              o("WAWebSignalKeyApi").generatePreKeyPair,
            );
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "PrekeyUploadForRegistrationTask: successfully generated ",
                    " keys",
                  ])),
                i.length,
              ),
              { regInfo: n, signedPreKey: a, prekeys: i }
            );
          }),
          (n.$4 = async function () {
            var e = this.$1 || this.startKeyGenerationStage(),
              t = await e,
              n = t.prekeys,
              a = t.regInfo,
              i = t.signedPreKey;
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "PrekeyUploadForRegistrationTask: start key upload",
                ])),
            );
            var l = n.length;
            if (l === 0) throw r("err")("No preKey is available");
            var s = n[n.length - 1].keyId,
              f = a.identityKeyPair,
              g = a.registrationId,
              h = o("WAWap").wap(
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
                  o("WAWap").BIG_ENDIAN_CONTENT(g),
                ),
                o("WAWap").wap(
                  "type",
                  null,
                  r("WAWebConstantsDeprecated").KEY_BUNDLE_TYPE,
                ),
                o("WAWap").wap("identity", null, f.pubKey),
                o("WAWap").wap(
                  "list",
                  null,
                  n.map(o("WAWebSignalUtilsApi").xmppPreKey),
                ),
                o("WAWebSignalUtilsApi").xmppSignedPreKey(i),
              );
            try {
              (await o("WAComms").waitForConnection(),
                await o("WAWebSignalStoreApi").waSignalStore.markKeyAsUploaded(
                  s,
                ));
              var y = await o(
                "WADeprecatedSendIq",
              ).deprecatedSendIqWithoutRetry(
                h,
                o("WAWebUploadPreKeysJob").uploadPreKeyResParser,
              );
              if (y.success)
                return (
                  o("WAWebSignalStoreApi").waSignalStore.setServerHasPreKeys(
                    !0,
                  ),
                  o("WALogger").LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "_uploadPreKeys: ",
                        " keys uploaded, raw stanza size: ",
                        "b",
                      ])),
                    n.length,
                    h.toString().length,
                  ),
                  { success: !0 }
                );
              var C = y.errorCode;
              return (
                C >= 500
                  ? o("WALogger").WARN(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose([
                          "_uploadPreKeys: server requested backoff ",
                          " (count: ",
                          ", size: ",
                          "b)",
                        ])),
                      C,
                      l,
                      h.toString().length,
                    )
                  : C === 406
                    ? o("WALogger").WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "_uploadPreKeys: uploaded invalid keys (count: ",
                            ", size: ",
                            "b)",
                          ])),
                        l,
                        h.toString().length,
                      )
                    : o("WALogger").WARN(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "_uploadPreKeys: unrecognized error ",
                            " (count: ",
                            ", size: ",
                            "b)",
                          ])),
                        C,
                        l,
                        h.toString().length,
                      ),
                { errorCode: y.errorCode, errorText: y.errorText }
              );
            } catch (e) {
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "_uploadPreKeys: disconnected, unclear if on server: ",
                    " (count: ",
                    ", size: ",
                    "b)",
                  ])),
                e,
                l,
                h.toString().length,
              );
              return;
            }
          }),
          t
        );
      })();
    function g() {
      return new f();
    }
    l.default = g;
  },
  98,
);
