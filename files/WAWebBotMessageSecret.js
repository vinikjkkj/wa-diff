__d(
  "WAWebBotMessageSecret",
  [
    "WABinary",
    "WACryptoAesGcm",
    "WACryptoHkdf",
    "WALogger",
    "WATimeUtils",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotMsgDecryptError",
    "WAWebBotMsgSecretError",
    "WAWebBotTypes",
    "WAWebCoexV2BotWid",
    "WAWebCoexV2GatingUtils",
    "WAWebCoexV2ResponseWindow",
    "WAWebCommonMsgUtils",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
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
      p,
      _ = 32,
      f = "Bot Message",
      g = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o = e.call(this, r) || this),
            (o.reason = n),
            (o.targetMsgKey = t),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebBotMsgSecretError"));
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e).readByteArrayView(),
            n = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              f,
              _,
            );
          return n;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return t.msgInfo.author.isFbidBot() ? R(e, t) : v(e, t);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          var m = yield D(new (r("WAWebMsgKey"))(d), l),
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
              C = yield A({
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
              S = yield A({
                decryptSecret: m,
                messageSecretOriginalUserJid: p,
                senderJid: _,
                stanzaId: v,
              });
            f = yield o("WACryptoAesGcm").gcmDecrypt(S, g, h, v + "\0" + _);
          }
          return f;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.msgInfo,
            o = t.msgMeta,
            a = E({
              chat: n.chat,
              targetId: r("nullthrows")(
                o.targetId,
                "decryptMsmsgFbidBotMessage: targetId",
              ),
              targetSenderJid: o.targetSenderJid,
            }),
            i = yield D(a, n);
          return k(e, t, i);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.chat,
        n = e.targetId,
        a = e.targetSenderJid,
        i = a != null ? a : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        l = {
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(i),
          remote: t,
          id: n,
        };
      if (t.isGroup()) {
        var s;
        l.participant =
          (s = o("WAWebLidMigrationUtils").toPn(i)) != null ? s : i;
      }
      return new (r("WAWebMsgKey"))(l);
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i,
            l = t.msgBotInfo,
            c = t.msgInfo,
            d = t.msgMeta,
            m =
              (i = d.targetSenderJid) != null
                ? i
                : o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
            p = c.externalId,
            _ = null;
          ((l == null ? void 0 : l.botEditType) ===
            o("WAWebBotTypes").BotMsgEditType.INNER ||
            (l == null ? void 0 : l.botEditType) ===
              o("WAWebBotTypes").BotMsgEditType.LAST) &&
            ((l == null ? void 0 : l.botEditTargetId) != null
              ? ((p = l == null ? void 0 : l.botEditTargetId),
                (_ = c.externalId))
              : o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[decryptMsmsgFbidBotMessage] fallback\u2192externalId edit=",
                      "",
                    ])),
                  l == null ? void 0 : l.botEditType,
                ));
          var f = c.metaFrom,
            g = o("WAWebWidToJid").widToUserJid(
              f != null &&
                c.author != null &&
                c.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
                o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
                ? f
                : r("nullthrows")(
                    c.author,
                    "decryptMsmsgFbidBotMessage: author",
                  ),
            ),
            h = o("WAWebWidToJid").widToUserJid(m),
            y = o("decodeProtobuf").decodeProtobuf(
              o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
              e,
            ),
            C = y.encIv,
            b = y.encPayload,
            v = r("nullthrows")(C, "decryptMsmsgFbidBotMessage: encIv"),
            S = r("nullthrows")(b, "decryptMsmsgFbidBotMessage: encPayload");
          function R(e) {
            return L.apply(this, arguments);
          }
          function L() {
            return (
              (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
                var t = yield A({
                  decryptSecret: a,
                  messageSecretOriginalUserJid: h,
                  senderJid: g,
                  stanzaId: e,
                });
                return o("WACryptoAesGcm").gcmDecrypt(t, v, S, e + "\0" + g);
              })),
              L.apply(this, arguments)
            );
          }
          try {
            var E = yield R(p);
            return E;
          } catch (e) {
            if (_ == null) throw T(e);
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[decryptMsmsgFbidBotMessage] gcmDecrypt failed primaryStanzaId=",
                  ", fallback\u2192externalId=",
                  ": ",
                  "",
                ])),
              p,
              _,
              String(e),
            );
            try {
              return yield R(_);
            } catch (e) {
              throw T(e);
            }
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return new (r("WAWebBotMsgDecryptError"))(
        "decryptMsmsgFbidBotMessage: decrypt with the message secret failed: " +
          String(e),
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = e.toString(),
            i =
              (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
                ? void 0
                : n.toString(),
            l = N(a, i, t);
          if (l != null) return h(l);
          var s = yield o("WAWebSchemaMessage")
              .getMessageTable()
              .bulkGet([a, i].filter(Boolean)),
            u = s[0],
            _ = s[1],
            f = u != null ? u : _;
          if (f == null)
            throw $(t)
              ? (o("WALogger")
                  .WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] no target row, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(a, "no-target-row"))
              : (o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] no target row and orphan handling is off",
                      ])),
                  )
                  .tags("messaging")
                  .sendLogs("bot-msmsg-no-target-row", { sampling: 0.01 }),
                new g(
                  a,
                  "no-target-row",
                  "decryptMsmsgBotMessage: no target row for the message secret",
                ));
          var y = o("WAWebDBMessageSerialization").messageFromDbRow(f);
          if (o("WAWebCommonMsgUtils").isPlaceholderMsg(y.type)) {
            if (!$(t))
              throw new g(
                a,
                "placeholder-target-row",
                "decryptMsmsgBotMessage: decryptSecretBase",
              );
            var C =
              u != null && _ != null
                ? o("WAWebDBMessageSerialization").messageFromDbRow(_)
                : null;
            if (C == null || o("WAWebCommonMsgUtils").isPlaceholderMsg(C.type))
              throw (
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] placeholder target row, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(a, "placeholder-target-row")
              );
            y = C;
          }
          w(a, y);
          var b = y.messageSecret;
          if (b == null)
            throw P(t)
              ? (o("WALogger")
                  .WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[bot-msmsg] target row without a secret, deferring as an orphan",
                      ])),
                  )
                  .tags("messaging"),
                new (r("WAWebOrphanBotMsgError"))(a, "secretless-target-row"))
              : y.type === o("WAWebMsgType").MSG_TYPE.REVOKED
                ? new g(
                    a,
                    "revoked-target-row",
                    "decryptMsmsgBotMessage: decryptSecretBase",
                  )
                : new (r("WAWebBotMsgSecretError"))(
                    "decryptMsmsgBotMessage: decryptSecretBase",
                  );
          return h(b);
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P(e) || o("WAWebBotGating").isBotOrphanMsgEnabled();
    }
    function P(e) {
      return (
        e.chat.isGroup() &&
        e.author.isBot() &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function N(e, t, n) {
      var r = M(e, n);
      return r != null || t == null ? r : M(t, n);
    }
    function M(e, t) {
      var n = o(
        "WAWebMsmsgMsgSecretCache",
      ).msmsgMsgSecretCache.getMsmsgMsgSecretFromCache(e);
      if (n == null) return null;
      if (
        t.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
        o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
      ) {
        var r = o(
          "WAWebMsmsgMsgSecretCache",
        ).msmsgMsgSecretCache.getMsmsgMsgSecretTimestampFromCache(e);
        if (
          r == null ||
          !Number.isFinite(r) ||
          r + o("WAWebCoexV2ResponseWindow").COEXV2_RESPONSE_WINDOW_SECONDS <=
            o("WATimeUtils").unixTime()
        )
          return null;
      }
      return n;
    }
    function w(e, t) {
      var n,
        r = t.botGroupParticipant;
      if (
        r != null &&
        !(
          ((n = t.id.remote) == null ? void 0 : n.isGroup()) !== !0 ||
          !o("WAWebBotGroupGatingUtils").isGroupBotParticipantEnabled(r)
        )
      ) {
        var a = o("WAWebMsmsgMsgSecretCache").createBotGroupGossipData(
          t.botGroupParticipants,
          r,
        );
        a != null &&
          o(
            "WAWebMsmsgMsgSecretCache",
          ).msmsgBotGroupGossipDataCache.addMsmsgBotGroupGossipDataToCache(
            e,
            a.participants,
            a.isLegacySingular,
          );
      }
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.decryptSecret,
            n = e.messageSecretOriginalUserJid,
            r = e.senderJid,
            a = e.stanzaId,
            i = o("WABinary").Binary.build(a, n, r).readBuffer(),
            l = yield o("WACryptoHkdf").extractAndExpand(
              new Uint8Array(t),
              i,
              _,
            );
          return l;
        })),
        F.apply(this, arguments)
      );
    }
    ((l.RetainedBotMessageSecretLookupError = g),
      (l.genBotMsgSecretFromMsgSecret = h),
      (l.decryptMsmsgBotMessage = C),
      (l.getFbidBotResponseTargetMsgKey = E),
      (l.decryptMsmsgFbidBotMessageWithBotMessageSecret = k),
      (l.genBotDecryptionKey = A));
  },
  98,
);
