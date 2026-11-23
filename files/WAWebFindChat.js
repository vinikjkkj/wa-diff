__d(
  "WAWebFindChat",
  [
    "WAAbortError",
    "WALogger",
    "WAWebBotUtils",
    "WAWebChatFindBridge",
    "WAWebCheckChatExistsOrCreate",
    "WAWebLidMigrationUtils",
    "WAWebMaibaWASSMigration",
    "WAWebMessageProcessUtils",
    "WAWebSyncContactJob",
    "WAWebUsernameTypes",
    "WAWebWid",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e, t) {
      return t != null
        ? t(e)
        : o("WAWebChatFindBridge").findLocal(e.toString());
    }
    async function m(e, t, n) {
      var a = e.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
          ? o("WAWebBotUtils").META_BOT_PN_WID
          : o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(e),
        i = n != null ? n : {},
        l = i.getExistingChat;
      if (!r("WAWebWid").isUser(a))
        return p(a, t, n).then(function (e) {
          var t = e.chat;
          return t;
        });
      var s = await d(a, l);
      return (
        s ||
        p(a, t, n).then(function (e) {
          var t = e.chat;
          return t;
        })
      );
    }
    async function p(t, n, a) {
      var i = t.equals(o("WAWebBotUtils").META_BOT_FBID_WID)
          ? o("WAWebBotUtils").META_BOT_PN_WID
          : o("WAWebMaibaWASSMigration").resolveMaibaAiHubFbidToLidOrChatId(t),
        l = { chatId: i };
      if (i.isRegularUser()) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[findOrCreateLatestChat] migration rules chat=",
              " origin=",
              "",
            ])),
          l.chatId.toLogString(),
          n,
        );
        var m = o("WAWebLidMigrationUtils").toUserLid(i);
        (m == null &&
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[findOrCreateLatestChat] id->lid failed ",
                  "",
                ])),
              n,
            )
            .sendLogs("findOrCreateLatestChat_lid_not_found", {
              sampling: 0.01,
            }),
          await o("WAWebSyncContactJob").syncContactListJob([i], !0, "query"),
          (m = o("WAWebLidMigrationUtils").toUserLidOrThrow(i))),
          (l = await o("WAWebMessageProcessUtils").selectChatForOneOnOneMessage(
            { lid: m },
          )));
      }
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[findOrCreateLatestChat] selected chat=",
            " origin=",
            "",
          ])),
        l.chatId.toLogString(),
        n,
      );
      var p = a != null ? a : {},
        _ = p.buildFirstIncomingMsg,
        f = _ === void 0 ? function () {} : _,
        g = p.forceUsync,
        h = p.getExistingChat,
        y = p.isGroupJoin,
        C = p.nextPrivacyMode,
        b = p.signal;
      if (b != null && b.aborted) throw new (o("WAAbortError").AbortError)();
      var v = await d(l.chatId, h);
      if (v) return { chat: v, created: !1 };
      var S = { createdLocally: !0 };
      y === !0 && (S.notSpam = !0);
      var R = l.chatId;
      R.isLid() &&
        (S.lidOriginType = o("WAWebUsernameTypes").LidOriginType.GENERAL);
      var L = await o("WAWebCheckChatExistsOrCreate").checkChatExistsOrCreate({
          destinationChat: l,
          msgMeta: null,
          chatOriginType: n,
          initialProps: S,
          options: {
            firstIncomingMsg: f(l.chatId),
            forceUsync: g,
            nextPrivacyMode: C,
          },
        }),
        E = await d(l.chatId, h);
      if (E == null) {
        var k, I;
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "findOrCreateLatestChat: new chat not found ",
                  "",
                ])),
              (k = l.chatId) == null ? void 0 : k.toLogString(),
            )
            .sendLogs("findOrCreateLatestChat-new-chat-not-found"),
          r("err")(
            "findChat: new chat not found " +
              ((I = l.chatId) == null ? void 0 : I.toLogString()),
          )
        );
      }
      return { chat: E, created: !L };
    }
    ((l.findExistingChat = m), (l.findOrCreateLatestChat = p));
  },
  98,
);
