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
    "WAWebCommonMsgUtils",
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
      c,
      d,
      m,
      p = 32,
      _ = "Bot Message";
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e).readByteArrayView(),
            n = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              _,
              p,
            );
          return n;
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
          return t.msgInfo.author.isFbidBot() ? v(e, t) : C(e, t);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          var m = yield R(d),
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
              C = yield I({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: y,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(C, g, h, y + "\0" + _);
          } catch (t) {
            var b;
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decryptMsmsgBotMessage: fallback to botEditTargetId: ",
                  "",
                ])),
              t,
            );
            var v = r("nullthrows")(
                (b = n.msgBotInfo) == null ? void 0 : b.botEditTargetId,
                "decryptMsmsgBotMessage: botEditTargetId",
              ),
              S = yield I({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: v,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(S, g, h, v + "\0" + _);
          }
          return f;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          var f = yield R(p),
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
            b = o("WAWebWidToJid").widToUserJid(m),
            v = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            S = v.encIv,
            L = v.encPayload,
            E = r("nullthrows")(S, "decryptMsmsgFbidBotMessage: encIv"),
            k = r("nullthrows")(L, "decryptMsmsgFbidBotMessage: encPayload");
          function T(e) {
            return D.apply(this, arguments);
          }
          function D() {
            return (
              (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                var t = yield I({
                  decryptSecret: f,
                  messageSecretOriginalUserJid: b,
                  senderJid: C,
                  stanzaId: e,
                });
                return o("WACryptoAesGcm").gcmDecrypt(t, E, k, e + "\0" + C);
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
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = new (r("WAWebMsgKey"))(e),
            a = n.toString(),
            i =
              (t = o("WAWebLidMigrationUtils").getAlternateMsgKey(n)) == null
                ? void 0
                : t.toString(),
            l = E(a, i);
          if (l != null) return f(l);
          var s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([a, i].filter(Boolean)),
            u = s[0],
            p = s[1],
            _ = u != null ? u : p;
          if (_ == null)
            throw o("WAWebBotGating").isBotOrphanMsgEnabled()
              ? (o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] no target row, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(a))
              : (o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] no target row and orphan handling is off",
                      ])),
                  )
                  .tags("messaging")
                  .sendLogs("bot-msmsg-no-target-row", { sampling: 0.01 }),
                new (r("WAWebBotMsgSecretError"))(
                  "decryptMsmsgBotMessage: no target row for the message secret",
                ));
          var g = o("WAWebDBMessageSerialization").messageFromDbRow(_);
          if (
            o("WAWebCommonMsgUtils").isPlaceholderMsg(g.type) &&
            o("WAWebBotGating").isBotOrphanMsgEnabled()
          ) {
            var h =
              u != null && p != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow(p)
                : null;
            if (h == null || o("WAWebCommonMsgUtils").isPlaceholderMsg(h.type))
              throw (
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] placeholder target row, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(a)
              );
            g = h;
          }
          k(a, g);
          var y = g.messageSecret;
          if (y == null)
            throw new (r("WAWebBotMsgSecretError"))(
              "decryptMsmsgBotMessage: decryptSecretBase",
            );
          return f(y);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      var n = o(
        "WAWebMsmsgMsgSecretCache",
      ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(e);
      return n != null || t == null
        ? n
        : o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(t);
    }
    function k(e, t) {
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
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.decryptSecret,
            n = e.messageSecretOriginalUserJid,
            r = e.senderJid,
            a = e.stanzaId,
            i = o("WABinary").Binary.build(a, n, r).readBuffer(),
            l = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              i,
              p,
            );
          return l;
        })),
        T.apply(this, arguments)
      );
    }
    ((l.genBotMsgSecretFromMsgSecret = f),
      (l.decryptMsmsgBotMessage = h),
      (l.genBotDecryptionKey = I));
  },
  98,
);
