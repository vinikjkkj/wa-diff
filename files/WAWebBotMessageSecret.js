__d(
  "WAWebBotMessageSecret",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WANullthrows",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
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
              id: r("WANullthrows")(
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
              r("WANullthrows")(l.author, "decryptMsmsgBotMessage: author"),
            ),
            f = null,
            g = r("WANullthrows")(u.encIv, "decryptMsmsgBotMessage: encIv"),
            h = r("WANullthrows")(
              u.encPayload,
              "decryptMsmsgBotMessage: encPayload",
            );
          try {
            var y = l.externalId,
              C = yield S({
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
            var R = r("WANullthrows")(
                (v = n.msgBotInfo) == null ? void 0 : v.botEditTargetId,
                "decryptMsmsgBotMessage: botEditTargetId",
              ),
              L = yield S({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: R,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(L, g, h, R + "\0" + _);
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
              id: r("WANullthrows")(
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
          var y = c.from,
            C = o("WAWebWidToJid").widToUserJid(
              y != null &&
                l.author != null &&
                l.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
                ? y
                : r("WANullthrows")(
                    l.author,
                    "decryptMsmsgFbidBotMessage: author",
                  ),
            ),
            v = o("WAWebWidToJid").widToUserJid(m),
            R = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            L = R.encIv,
            E = R.encPayload,
            k = r("WANullthrows")(L, "decryptMsmsgFbidBotMessage: encIv"),
            I = r("WANullthrows")(E, "decryptMsmsgFbidBotMessage: encPayload");
          function T(e) {
            return D.apply(this, arguments);
          }
          function D() {
            return (
              (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                var t = yield S({
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
            l = o(
              "WAWebMsmsgMsgSecretCache",
            ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(a);
          if (
            (l == null &&
              i != null &&
              (l = o(
                "WAWebMsmsgMsgSecretCache",
              ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(i)),
            l == null)
          ) {
            var s = yield o("WAWebSchemaMessage")
                .getMessageTable()
                .bulkGet([a, i].filter(Boolean)),
              u = s[0],
              c = s[1],
              d = u != null ? u : c;
            if (d == null && o("WAWebBotGating").isBotOrphanMsgEnabled())
              throw new (r("WAWebOrphanBotMsgError"))(a);
            var p = o("WAWebDBMessageSerialization").messageFromDbRow(
              r("WANullthrows")(d, "decryptMsmsgBotMessage: targetMsg"),
            );
            if (
              ((l = p == null ? void 0 : p.messageSecret),
              o(
                "WAWebBotGroupGatingUtils",
              ).isOpenGroupBotParticipantAddEnabled() ||
                o(
                  "WAWebBotGroupGatingUtils",
                ).isTEEGroupBotParticipantAddEnabled())
            ) {
              var _ = p == null ? void 0 : p.botGroupParticipant;
              _ != null &&
                o(
                  "WAWebMsmsgMsgSecretCache",
                ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
                  a,
                  _,
                );
            }
          }
          return m(
            r("WANullthrows")(l, "decryptMsmsgBotMessage: decryptSecretBase"),
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        R.apply(this, arguments)
      );
    }
    ((l.genBotMsgSecretFromMsgSecret = m),
      (l.decryptMsmsgBotMessage = _),
      (l.genBotDecryptionKey = S));
  },
  98,
);
