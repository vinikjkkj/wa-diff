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
            a = t.stanzaId,
            i = o("WAWebWasaUserPrefs").getWasaActiveTargetMessageKey(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
            );
          if (i == null) throw new u();
          var l = yield o("WAWebWasaRootSecretWriter").getWasaCarrierSecret(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            i,
          );
          if (l == null) throw new u();
          var s = o("WAWebWidToJid").widToUserJid(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            ),
            c = o("WAWebWidToJid").widToUserJid(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            ),
            d = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              l,
            ),
            m = yield o("WAWebBotMessageSecret").genBotDecryptionKey({
              decryptSecret: d,
              messageSecretOriginalUserJid: s,
              senderJid: c,
              stanzaId: a,
            }),
            p = self.crypto.getRandomValues(new Uint8Array(e)),
            _ = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n)
              .readByteArrayView(),
            f = a + "\0" + c,
            g = yield o("WACryptoAesGcm").gcmEncrypt(m, p, _, f);
          return r("WAWebWasaGenerateSecretEncryptedMessageProto")({
            targetMsgKey: o("WAWebWasaRootSecretWriter").getWasaCarrierMsgKey(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              i,
            ),
            encPayload: g,
            encIv: p,
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
