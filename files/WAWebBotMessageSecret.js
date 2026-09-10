__d(
  "WAWebBotMessageSecret",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMsgSecretError",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsmsgMsgSecretCache",
    "WAWebOrphanBotMsgError",
    "WAWebProtobufsE2E.pb",
    "WAWebSchemaMessage",
    "WAWebUserPrefsMeUser",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 32,
      d = "Bot Message";
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e).readByteArrayView(),
            n = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              d,
              c,
            );
          return n;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.msgInfo.author.isFbidBot() ? y(e, t) : g(e, t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a,
            i,
            l = n.msgInfo,
            s = n.msgMeta,
            u = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              t,
            ),
            c = s.targetSenderJid
              ? o("WAWebUserPrefsMeUser").isMeAccount(s.targetSenderJid)
              : !0,
            d = {
              fromMe: c,
              remote: (a = s.targetChatJid) != null ? a : l.chat,
              id: r("nullthrows")(
                s.targetId,
                "decryptMsmsgBotMessage: targetId",
              ),
            };
          l.chat.isGroup() && (d.participant = s.targetSenderJid);
          var m = yield b(d),
            p = o("WAWebWidToJid").widToUserJid(
              (i = s.targetSenderJid) != null
                ? i
                : o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
            ),
            _ = o("WAWebWidToJid").widToUserJid(
              r("nullthrows")(l.author, "decryptMsmsgBotMessage: author"),
            ),
            f = null,
            g = r("nullthrows")(u.encIv, "decryptMsmsgBotMessage: encIv"),
            h = r("nullthrows")(
              u.encPayload,
              "decryptMsmsgBotMessage: encPayload",
            );
          try {
            var y = l.externalId,
              C = yield L({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: y,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(C, g, h, y + "\0" + _);
          } catch (t) {
            var v;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptMsmsgBotMessage: fallback to botEditTargetId: ",
                  "",
                ])),
              t,
            );
            var S = r("nullthrows")(
                (v = n.msgBotInfo) == null ? void 0 : v.botEditTargetId,
                "decryptMsmsgBotMessage: botEditTargetId",
              ),
              R = yield L({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: S,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(R, g, h, S + "\0" + _);
          }
          return f;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a,
            i = t.msgBotInfo,
            l = t.msgInfo,
            c = t.msgMeta,
            d = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            m = (a = c.targetSenderJid) != null ? a : d,
            p = {
              fromMe: o("WAWebUserPrefsMeUser").isMeAccount(m),
              remote: l.chat,
              id: r("nullthrows")(
                c.targetId,
                "decryptMsmsgFbidBotMessage: targetId",
              ),
            };
          if (l.chat.isGroup()) {
            var _;
            p.participant =
              (_ = o("WAWebLidMigrationUtils").toPn(m)) != null ? _ : m;
          }
          var f = yield b(p),
            g = l.externalId,
            h = null;
          ((i == null ? void 0 : i.botEditType) ===
            o("WAWebBotTypes").BotMsgEditType.INNER ||
            (i == null ? void 0 : i.botEditType) ===
              o("WAWebBotTypes").BotMsgEditType.LAST) &&
            ((i == null ? void 0 : i.botEditTargetId) != null
              ? ((g = i == null ? void 0 : i.botEditTargetId),
                (h = l.externalId))
              : o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[decryptMsmsgFbidBotMessage] fallback\u2192externalId edit=",
                      "",
                    ])),
                  i == null ? void 0 : i.botEditType,
                ));
          var y = l.metaFrom,
            C = o("WAWebWidToJid").widToUserJid(
              y != null &&
                l.author != null &&
                l.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
                ? y
                : r("nullthrows")(
                    l.author,
                    "decryptMsmsgFbidBotMessage: author",
                  ),
            ),
            v = o("WAWebWidToJid").widToUserJid(m),
            S = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            R = S.encIv,
            E = S.encPayload,
            k = r("nullthrows")(R, "decryptMsmsgFbidBotMessage: encIv"),
            I = r("nullthrows")(E, "decryptMsmsgFbidBotMessage: encPayload");
          function T(e) {
            return D.apply(this, arguments);
          }
          function D() {
            return (
              (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                var t = yield L({
                  decryptSecret: f,
                  messageSecretOriginalUserJid: v,
                  senderJid: C,
                  stanzaId: e,
                });
                return o("WACryptoAesGcm").gcmDecrypt(t, k, I, e + "\0" + C);
              })),
              D.apply(this, arguments)
            );
          }
          try {
            var x = yield T(g);
            return x;
          } catch (e) {
            if (h == null) throw e;
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[decryptMsmsgFbidBotMessage] gcmDecrypt failed primaryStanzaId=",
                    ", fallback\u2192externalId=",
                    ": ",
                    "",
                  ])),
                g,
                h,
                String(e),
              ),
              T(h)
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = new (r("WAWebMsgKey"))(e),
            a = n.toString(),
            i =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(n)) == null
                ? void 0
                : t.toString(),
            l = S(a, i);
          if (l != null) return m(l);
          var s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([a, i].filter(Boolean)),
            u = s[0],
            c = s[1],
            d = u != null ? u : c;
          if (d == null && o("WAWebBotGating").isBotOrphanMsgEnabled())
            throw new (r("WAWebOrphanBotMsgError"))(a);
          if (d == null)
            throw new (r("WAWebBotMsgSecretError"))(
              "decryptMsmsgBotMessage: no target row for the message secret",
            );
          var p = o("WAWebDBMessageSerialization").messageFromDbRow(d);
          R(a, p);
          var _ = p.messageSecret;
          if (_ == null)
            throw new (r("WAWebBotMsgSecretError"))(
              "decryptMsmsgBotMessage: decryptSecretBase",
            );
          return m(_);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n = o(
        "WAWebMsmsgMsgSecretCache",
      ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(e);
      return n != null || t == null
        ? n
        : o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(t);
    }
    function R(e, t) {
      if (
        !(
          !o(
            "WAWebBotGroupGatingUtils",
          ).isOpenGroupBotParticipantAddEnabled() &&
          !o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
        )
      ) {
        var n = t.botGroupParticipant;
        n != null &&
          o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
            e,
            n,
          );
      }
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.decryptSecret,
            n = e.messageSecretOriginalUserJid,
            r = e.senderJid,
            a = e.stanzaId,
            i = o("WABinary").Binary.build(a, n, r).readBuffer(),
            l = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              i,
              c,
            );
          return l;
        })),
        E.apply(this, arguments)
      );
    }
    ((l.genBotMsgSecretFromMsgSecret = m),
      (l.decryptMsmsgBotMessage = _),
      (l.genBotDecryptionKey = L));
  },
  98,
);
