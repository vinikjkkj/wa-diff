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
    "WAWebUserUtils",
    "WAWebWidToJid",
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
    async function h(e) {
      var t = new (o("WABinary").Binary)(e).readByteArrayView(),
        n = await o("WACryptoHkdf").extractAndExpand(new Uint8Array(t), f, _);
      return n;
    }
    async function y(e, t) {
      return t.msgInfo.author.isFbidBot() ? b(e, t) : C(e, t);
    }
    async function C(t, n) {
      var a,
        i,
        l = n.msgInfo,
        s = n.msgMeta,
        u = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
          t,
        ),
        c = s.targetSenderJid
          ? o("WAWebUserUtils").isMeAccount(s.targetSenderJid)
          : !0,
        d = {
          fromMe: c,
          remote: (a = s.targetChatJid) != null ? a : l.chat,
          id: r("nullthrows")(s.targetId, "decryptMsmsgBotMessage: targetId"),
        };
      l.chat.isGroup() && (d.participant = s.targetSenderJid);
      var m = await L(new (r("WAWebMsgKey"))(d), l),
        p = o("WAWebWidToJid").widToUserJid(
          (i = s.targetSenderJid) != null
            ? i
            : o("WAWebUserUtils").getMeUserOrThrow(),
        ),
        _ = o("WAWebWidToJid").widToUserJid(
          r("nullthrows")(l.author, "decryptMsmsgBotMessage: author"),
        ),
        f = null,
        g = r("nullthrows")(u.encIv, "decryptMsmsgBotMessage: encIv"),
        h = r("nullthrows")(u.encPayload, "decryptMsmsgBotMessage: encPayload");
      try {
        var y = l.externalId,
          C = await x({
            decryptSecret: m,
            messageSecretOriginalUserJid: p,
            senderJid: _,
            stanzaId: y,
          });
        f = await o("WACryptoAesGcm").gcmDecrypt(C, g, h, y + "\0" + _);
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
          S = await x({
            decryptSecret: m,
            messageSecretOriginalUserJid: p,
            senderJid: _,
            stanzaId: v,
          });
        f = await o("WACryptoAesGcm").gcmDecrypt(S, g, h, v + "\0" + _);
      }
      return f;
    }
    async function b(e, t) {
      var n = t.msgInfo,
        o = t.msgMeta,
        a = v({
          chat: n.chat,
          targetId: r("nullthrows")(
            o.targetId,
            "decryptMsmsgFbidBotMessage: targetId",
          ),
          targetSenderJid: o.targetSenderJid,
        }),
        i = await L(a, n);
      return S(e, t, i);
    }
    function v(e) {
      var t = e.chat,
        n = e.targetId,
        a = e.targetSenderJid,
        i = a != null ? a : o("WAWebUserUtils").getMeLidUserOrThrow(),
        l = { fromMe: o("WAWebUserUtils").isMeAccount(i), remote: t, id: n };
      if (t.isGroup()) {
        var s;
        l.participant =
          (s = o("WAWebLidMigrationUtils").toPn(i)) != null ? s : i;
      }
      return new (r("WAWebMsgKey"))(l);
    }
    async function S(e, t, n) {
      var a,
        i = t.msgBotInfo,
        l = t.msgInfo,
        c = t.msgMeta,
        d =
          (a = c.targetSenderJid) != null
            ? a
            : o("WAWebUserUtils").getMeLidUserOrThrow(),
        m = l.externalId,
        p = null;
      ((i == null ? void 0 : i.botEditType) ===
        o("WAWebBotTypes").BotMsgEditType.INNER ||
        (i == null ? void 0 : i.botEditType) ===
          o("WAWebBotTypes").BotMsgEditType.LAST) &&
        ((i == null ? void 0 : i.botEditTargetId) != null
          ? ((m = i == null ? void 0 : i.botEditTargetId), (p = l.externalId))
          : o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[decryptMsmsgFbidBotMessage] fallback\u2192externalId edit=",
                  "",
                ])),
              i == null ? void 0 : i.botEditType,
            ));
      var _ = l.metaFrom,
        f = o("WAWebWidToJid").widToUserJid(
          _ != null &&
            l.author != null &&
            l.author.equals(o("WAWebCoexV2BotWid").COEX_V2_BOT_FBID_WID) &&
            o("WAWebCoexV2GatingUtils").isCoexV2RecvEnabled()
            ? _
            : r("nullthrows")(l.author, "decryptMsmsgFbidBotMessage: author"),
        ),
        g = o("WAWebWidToJid").widToUserJid(d),
        h = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
          e,
        ),
        y = h.encIv,
        C = h.encPayload,
        b = r("nullthrows")(y, "decryptMsmsgFbidBotMessage: encIv"),
        v = r("nullthrows")(C, "decryptMsmsgFbidBotMessage: encPayload");
      async function S(e) {
        var t = await x({
          decryptSecret: n,
          messageSecretOriginalUserJid: g,
          senderJid: f,
          stanzaId: e,
        });
        return o("WACryptoAesGcm").gcmDecrypt(t, b, v, e + "\0" + f);
      }
      try {
        var L = await S(m);
        return L;
      } catch (e) {
        if (p == null) throw R(e);
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[decryptMsmsgFbidBotMessage] gcmDecrypt failed primaryStanzaId=",
              ", fallback\u2192externalId=",
              ": ",
              "",
            ])),
          m,
          p,
          String(e),
        );
        try {
          return await S(p);
        } catch (e) {
          throw R(e);
        }
      }
    }
    function R(e) {
      return new (r("WAWebBotMsgDecryptError"))(
        "decryptMsmsgFbidBotMessage: decrypt with the message secret failed: " +
          String(e),
      );
    }
    async function L(e, t) {
      var n,
        a = e.toString(),
        i =
          (n = o("WAWebLidMigrationUtils").getAlternateMsgKey(e)) == null
            ? void 0
            : n.toString(),
        l = I(a, i, t);
      if (l != null) return h(l);
      var s = await o("WAWebSchemaMessage")
          .getMessageTable()
          .bulkGet([a, i].filter(Boolean)),
        u = s[0],
        _ = s[1],
        f = u != null ? u : _;
      if (f == null)
        throw E(t)
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
        if (!E(t))
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
      D(a, y);
      var b = y.messageSecret;
      if (b == null)
        throw k(t)
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
    }
    function E(e) {
      return k(e) || o("WAWebBotGating").isBotOrphanMsgEnabled();
    }
    function k(e) {
      return (
        e.chat.isGroup() &&
        e.author.isBot() &&
        o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      );
    }
    function I(e, t, n) {
      var r = T(e, n);
      return r != null || t == null ? r : T(t, n);
    }
    function T(e, t) {
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
    function D(e, t) {
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
    async function x(e) {
      var t = e.decryptSecret,
        n = e.messageSecretOriginalUserJid,
        r = e.senderJid,
        a = e.stanzaId,
        i = o("WABinary").Binary.build(a, n, r).readBuffer(),
        l = await o("WACryptoHkdf").extractAndExpand(new Uint8Array(t), i, _);
      return l;
    }
    ((l.RetainedBotMessageSecretLookupError = g),
      (l.genBotMsgSecretFromMsgSecret = h),
      (l.decryptMsmsgBotMessage = y),
      (l.getFbidBotResponseTargetMsgKey = v),
      (l.decryptMsmsgFbidBotMessageWithBotMessageSecret = S),
      (l.genBotDecryptionKey = x));
  },
  98,
);
