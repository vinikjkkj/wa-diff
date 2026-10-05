__d(
  "WAWebGroupAgentDeletedChat",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupType",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.addedIds,
            n = e.chatId,
            r = e.removedIds;
          return ![]
            .concat(t, r)
            .some(o("WAWebBotUtils").isWidGroupAgentFbidWid) ||
            t.some(function (e) {
              return o("WAWebUserPrefsMeUser").isMeAccount(e);
            }) ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? !1
            : p(n);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chatId,
            n = e.currentIsOpenBotGroupState,
            r = e.currentIsTeeBotGroupState,
            a = e.prevIsOpenBotGroupState,
            i = e.prevIsTeeBotGroupState,
            l = (n != null && n !== !!a) || (r != null && r !== !!i);
          return !l ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? !1
            : p(t);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return (
              (yield o("WAWebSchemaChat")
                .getChatTable()
                .get(t.toString(), !1)) == null
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              c = yield u({
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
        })),
        h.apply(this, arguments)
      );
    }
    ((l.isAgentChangeInDeletedGroupChat = u),
      (l.isBotGroupStateChangeInDeletedGroupChat = d),
      (l.isAgentChangeInDeletedGroupChatForActions = f),
      (l.getPrevParticipantIdsForMetadataAgentRows = g));
  },
  98,
);
