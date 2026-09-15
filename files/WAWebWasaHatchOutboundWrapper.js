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
    "WAWebWasaRootSecretWriter",
    "WAWebWasaUserPrefs",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 12,
      d = (function (e) {
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
      m = (function (e) {
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
      })(d);
    function p(e, t, n) {
      return (
        o("WAWebBotUtils").isHatchBot(e) &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t) &&
        n !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentStanzaId,
            n = e.innerMessage,
            a = yield g();
          if (a == null) throw new m();
          var i = a.rootSecret,
            l = a.targetId,
            s = o("WAWebWidToJid").widToUserJid(
              o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            ),
            u = o("WAWebWidToJid").widToUserJid(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            ),
            d = yield o("WAWebBotMessageSecret").genBotMsgSecretFromMsgSecret(
              i,
            ),
            p = yield o("WAWebBotMessageSecret").genBotDecryptionKey({
              decryptSecret: d,
              messageSecretOriginalUserJid: s,
              senderJid: u,
              stanzaId: t,
            }),
            _ = self.crypto.getRandomValues(new Uint8Array(c)),
            f = o("encodeProtobuf")
              .encodeProtobuf(o("WAWebProtobufsE2E.pb").MessageSpec, n)
              .readByteArrayView(),
            h = t + "\0" + s,
            y = yield o("WACryptoAesGcm").gcmEncrypt(p, _, f, h);
          return r("WAWebWasaGenerateSecretEncryptedMessageProto")({
            targetMsgKey: o(
              "WAWebWasaRootSecretDb",
            ).getWasaRootSecretMsgKeyForId(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              l,
            ),
            encPayload: y,
            encIv: _,
          });
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebWasaUserPrefs").getWasaActiveTargetId(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID.user,
          );
          if (e == null) return y("no-active-target");
          var t = yield o("WAWebWasaRootSecretDb").getWasaRootSecretForId(
            o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            e,
          );
          return t == null
            ? y("no-root-secret-row")
            : { rootSecret: t, targetId: e };
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
              "WAWebWasaRootSecretWriter",
            ).maybeRecoverWasaActiveTargetFromStore(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
            ),
            r = n.reason,
            a = n.stanzaId,
            i =
              a != null
                ? yield o("WAWebWasaRootSecretDb").getWasaRootSecretForId(
                    o("WAWebBotUtils").HATCH_BOT_FBID_WID,
                    a,
                  )
                : null;
          return a != null && i != null
            ? (o("WALogger")
                .LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[wasa] Hatch send key rebuilt from syncd after ",
                      ": ",
                      "",
                    ])),
                  t,
                  a,
                )
                .sendLogs("wasa-hatch-send-key-rebuilt"),
              { rootSecret: i, targetId: a })
            : (t === "no-active-target"
                ? o("WALogger")
                    .ERROR(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[wasa] Hatch send failed: no active target id; rebuild from syncd: ",
                          "",
                        ])),
                      r,
                    )
                    .sendLogs("wasa-hatch-no-active-target")
                : o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[wasa] Hatch send failed: no root secret row; rebuild from syncd: ",
                          "",
                        ])),
                      r,
                    )
                    .sendLogs("wasa-hatch-root-secret-missing"),
              null);
        })),
        C.apply(this, arguments)
      );
    }
    ((l.WAWebWasaHatchWrapError = d),
      (l.WAWebWasaHatchNotPairedError = m),
      (l.shouldWrapHatchOutbound = p),
      (l.wrapHatchOutboundMessage = _));
  },
  98,
);
