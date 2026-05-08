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
      u = 32,
      c = "Bot Message";
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e).readByteArrayView(),
            n = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              c,
              u,
            );
          return n;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.msgInfo.author.isFbidBot() ? h(e, t) : f(e, t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          var m = yield C(d),
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
              b = yield v(y, p, _, m);
            f = yield o("WACryptoAesGcm").gcmDecrypt(b, g, h, y + "\0" + _);
          } catch (t) {
            var S;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptMsmsgBotMessage: fallback to botEditTargetId: ",
                  "",
                ])),
              t,
            );
            var R = r("WANullthrows")(
                (S = n.msgBotInfo) == null ? void 0 : S.botEditTargetId,
                "decryptMsmsgBotMessage: botEditTargetId",
              ),
              L = yield v(R, p, _, m);
            f = yield o("WACryptoAesGcm").gcmDecrypt(L, g, h, R + "\0" + _);
          }
          return f;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var p = yield C(d),
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
            g = yield v(_, o("WAWebWidToJid").widToUserJid(c), f, p),
            h = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            y = h.encIv,
            b = h.encPayload,
            S = yield o("WACryptoAesGcm").gcmDecrypt(
              g,
              r("WANullthrows")(y, "decryptMsmsgFbidBotMessage: encIv"),
              r("WANullthrows")(b, "decryptMsmsgFbidBotMessage: encPayload"),
              _ + "\0" + f,
            );
          return S;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              m = u != null ? u : c;
            if (m == null && o("WAWebBotGating").isBotOrphanMsgEnabled())
              throw new (r("WAWebOrphanBotMsgError"))(a);
            var p = o("WAWebDBMessageSerialization").messageFromDbRow(
              r("WANullthrows")(m, "decryptMsmsgBotMessage: targetMsg"),
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
          return d(
            r("WANullthrows")(l, "decryptMsmsgBotMessage: decryptSecretBase"),
          );
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WABinary").Binary.build(e, t, n).readBuffer(),
              i = yield o("WACryptoHkdf").extractAndExpand(
                new Uint8Array(r),
                a,
                u,
              );
            return i;
          },
        )),
        S.apply(this, arguments)
      );
    }
    ((l.genBotMsgSecretFromMsgSecret = d), (l.decryptMsmsgBotMessage = p));
  },
  98,
);
