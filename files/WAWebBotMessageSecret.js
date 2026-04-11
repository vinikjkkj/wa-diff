__d(
  "WAWebBotMessageSecret",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WANullthrows",
    "WAWebBotGroupGatingUtils",
    "WAWebBotTypes",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsmsgMsgSecretCache",
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
                : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
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
              C = yield S(y, p, _, m);
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
              L = yield S(R, p, _, m);
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
          var n,
            a = t.msgBotInfo,
            i = t.msgInfo,
            l = t.msgMeta,
            u = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            c = (n = l.targetSenderJid) != null ? n : u,
            d = {
              fromMe: o("WAWebUserPrefsMeUser").isMeAccount(c),
              remote: i.chat,
              id: r("WANullthrows")(
                l.targetId,
                "decryptMsmsgFbidBotMessage: targetId",
              ),
            };
          if (i.chat.isGroup()) {
            var m;
            d.participant =
              (m = o("WAWebLidMigrationUtils").toPn(c)) != null ? m : c;
          }
          var p = yield b(d),
            _ = i.externalId;
          ((a == null ? void 0 : a.botEditType) ===
            o("WAWebBotTypes").BotMsgEditType.INNER ||
            (a == null ? void 0 : a.botEditType) ===
              o("WAWebBotTypes").BotMsgEditType.LAST) &&
            ((a == null ? void 0 : a.botEditTargetId) != null
              ? (_ = a == null ? void 0 : a.botEditTargetId)
              : o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[decryptMsmsgFbidBotMessage] fallback\u2192externalId edit=",
                      "",
                    ])),
                  a == null ? void 0 : a.botEditType,
                ));
          var f = o("WAWebWidToJid").widToUserJid(
              r("WANullthrows")(i.author, "decryptMsmsgFbidBotMessage: author"),
            ),
            g = yield S(_, o("WAWebWidToJid").widToUserJid(c), f, p),
            h = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            y = h.encIv,
            C = h.encPayload,
            v = yield o("WACryptoAesGcm").gcmDecrypt(
              g,
              r("WANullthrows")(y, "decryptMsmsgFbidBotMessage: encIv"),
              r("WANullthrows")(C, "decryptMsmsgFbidBotMessage: encPayload"),
              _ + "\0" + f,
            );
          return v;
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
              c = s[0],
              d = s[1];
            c == null &&
              d == null &&
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[getDecryptSecretForMsg] targetMsg null chat=",
                    " key=",
                    " alt=",
                    "",
                  ])),
                e.remote,
                a,
                i,
              );
            var p = o("WAWebDBMessageSerialization").messageFromDbRow(
              r("WANullthrows")(
                c != null ? c : d,
                "decryptMsmsgBotMessage: targetMsg",
              ),
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
    function S(e, t, n, r) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WABinary").Binary.build(e, t, n).readBuffer(),
              i = yield o("WACryptoHkdf").extractAndExpand(
                new Uint8Array(r),
                a,
                c,
              );
            return i;
          },
        )),
        R.apply(this, arguments)
      );
    }
    ((l.genBotMsgSecretFromMsgSecret = m), (l.decryptMsmsgBotMessage = _));
  },
  98,
);
