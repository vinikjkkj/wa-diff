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
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 32,
      c = "Bot Message";
    async function d(e) {
      var t = new (o("WABinary").Binary)(e).readByteArrayView(),
        n = await o("WACryptoHkdf").extractAndExpand(new Uint8Array(t), c, u);
      return n;
    }
    async function m(e, t) {
      return t.msgInfo.author.isFbidBot() ? _(e, t) : p(e, t);
    }
    async function p(t, n) {
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
          id: r("WANullthrows")(s.targetId, "decryptMsmsgBotMessage: targetId"),
        };
      l.chat.isGroup() && (d.participant = s.targetSenderJid);
      var m = await f(d),
        p = o("WAWebWidToJid").widToUserJid(
          (i = s.targetSenderJid) != null
            ? i
            : o("WAWebUserPrefsMeUser").getMeUser(),
        ),
        _ = o("WAWebWidToJid").widToUserJid(
          r("WANullthrows")(l.author, "decryptMsmsgBotMessage: author"),
        ),
        h = null,
        y = r("WANullthrows")(u.encIv, "decryptMsmsgBotMessage: encIv"),
        C = r("WANullthrows")(
          u.encPayload,
          "decryptMsmsgBotMessage: encPayload",
        );
      try {
        var b = l.externalId,
          v = await g(b, p, _, m);
        h = await o("WACryptoAesGcm").gcmDecrypt(v, y, C, b + "\0" + _);
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
          L = await g(R, p, _, m);
        h = await o("WACryptoAesGcm").gcmDecrypt(L, y, C, R + "\0" + _);
      }
      return h;
    }
    async function _(e, t) {
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
      var p = await f(d),
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
      var h = o("WAWebWidToJid").widToUserJid(
          r("WANullthrows")(i.author, "decryptMsmsgFbidBotMessage: author"),
        ),
        y = await g(_, o("WAWebWidToJid").widToUserJid(c), h, p),
        C = o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsE2E.pb").MessageSecretMessageSpec,
          e,
        ),
        b = C.encIv,
        v = C.encPayload,
        S = await o("WACryptoAesGcm").gcmDecrypt(
          y,
          r("WANullthrows")(b, "decryptMsmsgFbidBotMessage: encIv"),
          r("WANullthrows")(v, "decryptMsmsgFbidBotMessage: encPayload"),
          _ + "\0" + h,
        );
      return S;
    }
    async function f(e) {
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
        var s = await o("WAWebSchemaMessage")
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
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled())
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
    }
    async function g(e, t, n, r) {
      var a = o("WABinary").Binary.build(e, t, n).readBuffer(),
        i = await o("WACryptoHkdf").extractAndExpand(new Uint8Array(r), a, u);
      return i;
    }
    ((l.genBotMsgSecretFromMsgSecret = d), (l.decryptMsmsgBotMessage = m));
  },
  98,
);
