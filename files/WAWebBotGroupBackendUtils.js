__d(
  "WAWebBotGroupBackendUtils",
  [
    "WATimeUtils",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebGroupAgentRemovalSystemMsgs",
    "WAWebGroupSystemMsg",
    "WAWebGroupType",
    "WAWebGroupsParticipantsApi",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebMsgKey",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "encryptnow",
      s = 1;
    async function u(e) {
      if (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ===
        !0
      ) {
        var t = o(
          "WAWebContactSystemMsg",
        ).genEncryptNotificationMsgAfterBotRemoved(e);
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: t,
          handleSingleMsgOrigin: "botGroup",
        });
      }
    }
    async function c(e) {
      if (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ===
        !0
      ) {
        var t = o(
          "WAWebGroupSystemMsg",
        ).genGroupTransitionToBotGroupNotificationMsg(e);
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: t,
          handleSingleMsgOrigin: "botGroup",
        });
      }
    }
    async function d(e) {
      if (
        o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() ===
        !0
      ) {
        var t = o(
          "WAWebGroupSystemMsg",
        ).genGroupTransitionToTeeBotGroupNotificationMsg(e);
        await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
          chatId: e,
          newMsg: t,
          handleSingleMsgOrigin: "botGroup",
        });
      }
    }
    async function m(e) {
      var t = e.currentIsOpenBotGroupState,
        n = e.groupWid,
        r = e.prevIsOpenBotGroupState,
        a = e.skipSystemMsg,
        i = a === void 0 ? !1 : a;
      return o(
        "WAWebBotGroupGatingUtils",
      ).isOpenGroupBotParticipantAddEnabled() !== !0 || t == null
        ? !1
        : r === !1 && (t != null ? t : !1) === !0
          ? (i || (await c(n)), !0)
          : !1;
    }
    async function p(e) {
      var t = e.currentIsTeeBotGroupState,
        n = e.groupWid,
        r = e.prevIsTeeBotGroupState,
        a = e.skipSystemMsg,
        i = a === void 0 ? !1 : a;
      return o(
        "WAWebBotGroupGatingUtils",
      ).isTEEGroupBotParticipantAddEnabled() !== !0 || t == null
        ? !1
        : r === !1 && t === !0
          ? (i || (await d(n)), !0)
          : !1;
    }
    async function _(e) {
      var t = e.currentIsOpenBotGroupState,
        n = e.currentIsTeeBotGroupState,
        r = e.groupWid,
        a = e.prevIsOpenBotGroupState,
        i = e.prevIsTeeBotGroupState;
      if (
        (!o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          !o(
            "WAWebBotGroupGatingUtils",
          ).isTEEGroupBotParticipantAddEnabled()) ||
        (t == null && n == null)
      )
        return !1;
      var l = !!a || !!i,
        s = !(t != null && t) && !(n != null && n);
      return l && s
        ? (o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
            (await u(r)),
          !0)
        : !1;
    }
    async function f(t) {
      var n = t.actions,
        a = t.meta,
        i = n.flatMap(function (e) {
          return e.actionType === o("WAWebGroupType").GROUP_ACTIONS.REMOVE
            ? e.participants.map(function (e) {
                var t = e.id;
                return t;
              })
            : [];
        });
      if (!i.some(o("WAWebBotUtils").isWidGroupAgentFbidWid)) return null;
      var l = await o("WAWebGroupsParticipantsApi").getParticipants(a.chatId);
      if (l == null) return null;
      var u = new Set(
          i.map(function (e) {
            return e.toString();
          }),
        ),
        c = l.participants.filter(function (e) {
          return !u.has(e);
        });
      if (
        !y(l.participants) ||
        y(c) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
      )
        return null;
      var d = o(
          "WAWebContactSystemMsg",
        ).genEncryptNotificationMsgAfterBotRemoved(a.chatId),
        m = a.externalId,
        p = a.ts;
      return m == null
        ? d
        : babelHelpers.extends({}, d, {
            id: new (r("WAWebMsgKey"))({
              fromMe: d.id.fromMe,
              remote: a.chatId,
              id:
                "" +
                m +
                o("WAWebGroupAgentRemovalSystemMsgs").toSystemMsgIdPart(e) +
                (p != null ? p : ""),
            }),
            t: p == null ? d.t : o("WATimeUtils").castToUnixTime(p + s),
          });
    }
    async function g(e) {
      var t = e.currentParticipants,
        n = e.groupWid,
        r = e.prevParticipantIds,
        a = e.responseListsAgents;
      return !a ||
        r == null ||
        !h(r, t) ||
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
        ? !1
        : (await o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
            chatId: n,
            newMsg: o(
              "WAWebContactSystemMsg",
            ).genEncryptNotificationMsgAfterBotRemoved(n),
            handleSingleMsgOrigin: "botGroup",
          }),
          !0);
    }
    function h(e, t) {
      var n = e
        .map(function (e) {
          return o("WAWebWidFactory").createWid(e);
        })
        .filter(o("WAWebBotUtils").isWidGroupAgentFbidWid);
      return n.length === 0 ||
        t.some(function (e) {
          var t = e.id;
          return o("WAWebBotUtils").isWidGroupAgentFbidWid(t);
        })
        ? !1
        : n.every(
            o("WAWebBotGroupGatingUtils").isAgentListedInGroupInfoResponse,
          );
    }
    function y(e) {
      return e.some(function (e) {
        return o("WAWebBotUtils").isWidGroupAgentFbidWid(
          o("WAWebWidFactory").createWid(e),
        );
      });
    }
    function C(e) {
      if (
        !o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
        !o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
      )
        return e;
      var t = e.map(function (e) {
        var t = e,
          n = o("WAWebBotUtils").participantListIncludeOpenOrTeeGroupBotWid(
            e.participants,
          );
        return (
          o("WAWebBotGroupGatingUtils").isOpenGroupBotSendEnabled() &&
            (t = babelHelpers.extends({}, t, {
              isOpenBotGroup: n.includeOpenMetabot,
            })),
          o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() &&
            (t = babelHelpers.extends({}, t, {
              isTeeBotGroup: n.includeTeeMetabot,
            })),
          t
        );
      });
      return t;
    }
    ((l.addGroupChangedToOpenBotGroupSystemMsgIfRequired = m),
      (l.addGroupChangedToTeeBotGroupSystemMsgIfRequired = p),
      (l.addBotGroupChangedToE2EEFSystemMsgIfRequired = _),
      (l.genE2EENoticeMsgAfterLastAgentRemoved = f),
      (l.addE2EESystemMsgAfterLastAgentRemovedIfRequired = g),
      (l.injectBotParticipantState = C));
  },
  98,
);
