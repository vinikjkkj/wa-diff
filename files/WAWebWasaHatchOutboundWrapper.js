__d(
  "WAWebWasaHatchOutboundWrapper",
  [
    "WACryptoAesGcm",
    "WALogger",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWasaGenerateSecretEncryptedMessageProto",
    "WAWebWasaRootSecretDb",
    "WAWebWasaUserPrefs",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 12,
      c = (function (e) {
        function t(t, n) {
          var r;
          return (
            (r = e.call(this, t) || this),
            (r.name = "WAWebWasaHatchWrapError"),
            n != null && (r.cause = n),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      d = (function (e) {
        function t() {
          var t;
          return (
            (t =
              e.call(
                this,
                "WASA Hatch outbound wrap: not paired (no target_message_key/root_secret)",
              ) || this),
            (t.name = "WAWebWasaHatchNotPairedError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(c);
    function m(e, t, n) {
      return (
        o("WAWebBotUtils").isHatchBot(e) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        n !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.currentStanzaId,
            a = t.innerMessage,
            i = o("WAWebWasaUserPrefs").getWasaActiveTargetId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
            );
          if (i == null)
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] Hatch outbound wrap: no active target id",
                    ])),
                )
                .sendLogs("wasa-hatch-no-active-target"),
              new d()
            );
          var l = yield o("WAWebWasaRootSecretDb").getWasaRootSecretForId(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            i,
          );
          if (l == null)
            throw (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] Hatch outbound wrap: no root secret for target ",
                      "",
                    ])),
                  i,
                )
                .sendLogs("wasa-hatch-root-secret-missing"),
              new d()
            );
          var c = o("WAWebWidToJid").widToUserJid(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            ),
            m = o("WAWebWidToJid").widToUserJid(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            ),
            p = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              l,
            ),
            _ = yield o("WAWebBotMessageSecret").genBotDecryptionKey({
              decryptSecret: p,
              messageSecretOriginalUserJid: c,
              senderJid: m,
              stanzaId: n,
            }),
            f = self.crypto.getRandomValues(new Uint8Array(u)),
            g = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, a)
              .readByteArrayView(),
            h = n + "\0" + c,
            y = yield o("WACryptoAesGcm").gcmEncrypt(_, f, g, h);
          return r("WAWebWasaGenerateSecretEncryptedMessageProto")({
            targetMsgKey: o(
              "WAWebWasaRootSecretDb",
            ).getWasaRootSecretMsgKeyForId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              i,
            ),
            encPayload: y,
            encIv: f,
          });
        })),
        _.apply(this, arguments)
      );
    }
    ((l.WAWebWasaHatchWrapError = c),
      (l.WAWebWasaHatchNotPairedError = d),
      (l.shouldWrapHatchOutbound = m),
      (l.wrapHatchOutboundMessage = p));
  },
  98,
);
