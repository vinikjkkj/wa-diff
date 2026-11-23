__d(
  "WAWebGroupAgentRemoveNotFoundJob",
  [
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleGroupNotificationAction",
    "WAWebMessageQueue",
    "WAWebMexFetchGroupInfoIncludBotsJob",
    "WAWebMsgKey",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "404";
    function s(t) {
      var n = t.participants
        .filter(function (t) {
          var n = t.code,
            r = t.userWid;
          return (
            n === e && o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(r)
          );
        })
        .map(function (e) {
          var t = e.userWid;
          return t;
        });
      return n.length === 0 ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? []
        : n;
    }
    async function u(e, t, n) {
      var a = await o(
          "WAWebMexFetchGroupInfoIncludBotsJob",
        ).mexGetGroupInfoIncludBots({
          groupId: e.toString(),
          queryContext: "out_of_sync_update",
        }),
        i = a == null ? void 0 : a.groupInfo;
      if (
        !(i == null || (a == null ? void 0 : a.participantPhashMatch) === !0)
      ) {
        var l = new Set(
            i.participants.map(function (e) {
              var t = e.id;
              return t.toString();
            }),
          ),
          s = t.filter(function (e) {
            return !l.has(e.toString());
          });
        s.length !== 0 &&
          (await o("WAWebMessageQueue").onMessageQueue({
            chatWid: e,
            isOffline: !1,
            msgCategory: null,
            action: async function () {
              var t = await c(e),
                a = s.filter(function (e) {
                  return t.has(e.toString());
                });
              if (a.length !== 0) {
                var i = {
                    actionType: o("WAWebGroupType").GROUP_ACTIONS.REMOVE,
                    participants: a.map(function (e) {
                      return { id: e, isAdmin: !1, isSuperAdmin: !1 };
                    }),
                    reason: null,
                    isLidAddressingMode: n,
                  },
                  l = {
                    externalId: await r("WAWebMsgKey").newId(),
                    chatId: e,
                    author: null,
                    authorPhoneNumber: null,
                    ts: o("WATimeUtils").unixTime(),
                    pushname: null,
                    actions: [i],
                    offline: null,
                    isLidAddressingMode: n,
                    hasIncompleteParticipantInformation: !1,
                  };
                (await o("WAWebHandleGroupNotificationAction").handleAction({
                  action: i,
                  meta: l,
                }),
                  await d(e, a));
              }
            },
          }));
      }
    }
    async function c(e) {
      var t, n;
      return new Set(
        (t =
          (n = await o("WAWebGroupsParticipantsApi").getParticipants(e)) == null
            ? void 0
            : n.participants) != null
          ? t
          : [],
      );
    }
    async function d(e, t) {
      var n = await c(e);
      if (
        t.some(function (e) {
          return n.has(e.toString());
        })
      )
        throw r("err")(
          "removeDepartedGroupAgents: stored participants list the agent",
        );
    }
    ((l.getNotFoundGroupAgentWids = s), (l.removeDepartedGroupAgents = u));
  },
  98,
);
