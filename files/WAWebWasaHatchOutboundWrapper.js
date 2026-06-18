__d(
  "WAWebWasaHatchOutboundWrapper",
  [
    "WACryptoAesGcm",
    "WAWebBotMessageSecret",
    "WAWebBotUtils",
    "WAWebHatchGating",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWasaGenerateSecretEncryptedMessageProto",
    "WAWebWasaRootSecretWriter",
    "WAWebWasaUserPrefs",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 12,
      s = (function (e) {
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
      u = (function (e) {
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
      })(s);
    function c(e, t) {
      return (
        o("WAWebBotUtils").isHatchBot(e) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        o("WAWebHatchGating").isHatchSecretEncryptedMessageEnabled()
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.innerMessage,
            a = o("WAWebWasaUserPrefs").getWasaActiveTargetId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
            );
          if (a == null) throw new u();
          var i = yield o(
            "WAWebWasaRootSecretWriter",
          ).getWasaCarrierSecretForId(o("WAWebBotUtils").HATCH_BOT_FBID_WID, a);
          if (i == null) throw new u();
          var l = o("WAWebWidToJid").widToUserJid(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            ),
            s = o("WAWebWidToJid").widToUserJid(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            ),
            c = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              i,
            ),
            d = yield o("WAWebBotMessageSecret").genBotDecryptionKey({
              decryptSecret: c,
              messageSecretOriginalUserJid: l,
              senderJid: s,
              stanzaId: a,
            }),
            m = self.crypto.getRandomValues(new Uint8Array(e)),
            p = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n)
              .readByteArrayView(),
            _ = a + "\0" + l,
            f = yield o("WACryptoAesGcm").gcmEncrypt(d, m, p, _);
          return r("WAWebWasaGenerateSecretEncryptedMessageProto")({
            targetMsgKey: o(
              "WAWebWasaRootSecretWriter",
            ).getWasaCarrierMsgKeyForId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              a,
            ),
            encPayload: f,
            encIv: m,
          });
        })),
        m.apply(this, arguments)
      );
    }
    ((l.WAWebWasaHatchWrapError = s),
      (l.WAWebWasaHatchNotPairedError = u),
      (l.shouldWrapHatchOutbound = c),
      (l.wrapHatchOutboundMessage = d));
  },
  98,
);
