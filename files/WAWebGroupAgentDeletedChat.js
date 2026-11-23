__d(
  "WAWebGroupAgentDeletedChat",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupType",
    "WAWebSchemaChat",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t = e.addedIds,
        n = e.chatId,
        r = e.removedIds;
      return ![].concat(t, r).some(o("WAWebBotUtils").isWidGroupAgentFbidWid) ||
        t.some(function (e) {
          return o("WAWebUserUtils").isMeAccount(e);
        }) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? !1
        : d(n);
    }
    async function c(e) {
      var t = e.chatId,
        n = e.currentIsOpenBotGroupState,
        r = e.currentIsTeeBotGroupState,
        a = e.prevIsOpenBotGroupState,
        i = e.prevIsTeeBotGroupState,
        l = (n != null && n !== !!a) || (r != null && r !== !!i);
      return !l ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? !1
        : d(t);
    }
    async function d(t) {
      try {
        return (
          (await o("WAWebSchemaChat").getChatTable().get(t.toString(), !1)) ==
          null
        );
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "isGroupChatDeleted: chat read failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("group-agent-deleted-chat-check-failed"),
          !1
        );
      }
    }
    function m(e, t) {
      return u({
        addedIds: t.flatMap(function (e) {
          return e.actionType === o("WAWebGroupType").GROUP_ACTIONS.ADD
            ? e.participants.map(function (e) {
                var t = e.id;
                return t;
              })
            : [];
        }),
        chatId: e,
        removedIds: t.flatMap(function (e) {
          return e.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
            ? e.participants.map(function (e) {
                var t = e.id;
                return t;
              })
            : [];
        }),
      });
    }
    async function p(e) {
      var t = e.chatId,
        n = e.currentParticipantIds,
        a = e.prevParticipantIds;
      if (
        a == null ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return a;
      try {
        var i = new Set(a),
          l = new Set(n.map(String)),
          c = await u({
            addedIds: n.filter(function (e) {
              return !i.has(String(e));
            }),
            chatId: t,
            removedIds: a
              .filter(function (e) {
                return !l.has(e);
              })
              .map(function (e) {
                return o("WAWebWidFactory").createWid(e);
              }),
          });
        return c ? null : a;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "getPrevParticipantIdsForMetadataAgentRows: deleted chat check failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("group-agent-deleted-chat-check-failed"),
          a
        );
      }
    }
    ((l.isBotGroupStateChangeInDeletedGroupChat = c),
      (l.isAgentChangeInDeletedGroupChatForActions = m),
      (l.getPrevParticipantIdsForMetadataAgentRows = p));
  },
  98,
);
