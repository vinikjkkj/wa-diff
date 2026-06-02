__d(
  "WAWebBotGroupBackendUtils",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e) {
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
    async function s(e) {
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
    async function u(e) {
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
    async function c(e) {
      var t = e.currentIsOpenBotGroupState,
        n = e.groupWid,
        r = e.prevIsOpenBotGroupState;
      return o(
        "WAWebBotGroupGatingUtils",
      ).isOpenGroupBotParticipantAddEnabled() !== !0 || t == null
        ? !1
        : r === !1 && (t != null ? t : !1) === !0
          ? (await s(n), !0)
          : !1;
    }
    async function d(e) {
      var t = e.currentIsTeeBotGroupState,
        n = e.groupWid,
        r = e.prevIsTeeBotGroupState;
      return o(
        "WAWebBotGroupGatingUtils",
      ).isTEEGroupBotParticipantAddEnabled() !== !0 || t == null
        ? !1
        : r === !1 && t === !0
          ? (await u(n), !0)
          : !1;
    }
    async function m(t) {
      var n = t.currentIsOpenBotGroupState,
        r = t.currentIsTeeBotGroupState,
        a = t.groupWid,
        i = t.prevIsOpenBotGroupState,
        l = t.prevIsTeeBotGroupState;
      if (
        (!o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
          !o(
            "WAWebBotGroupGatingUtils",
          ).isTEEGroupBotParticipantAddEnabled()) ||
        (n == null && r == null)
      )
        return !1;
      var s = !!i || !!l,
        u = !(n != null && n) && !(r != null && r);
      return s && u ? (await e(a), !0) : !1;
    }
    function p(e) {
      if (
        !o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
        !o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
      )
        return e;
      var t = e.map(function (e) {
        var t = e,
          n = o("WAWebBotUtils").participantListIncludOpenOrTeeGroupBotWid(
            e.participants,
          );
        return (
          o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
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
    ((l.addGroupChangedToOpenBotGroupSystemMsgIfRequired = c),
      (l.addGroupChangedToTeeBotGroupSystemMsgIfRequired = d),
      (l.addBotGroupChangedToE2EEFSystemMsgIfRequired = m),
      (l.injectBotParticipantState = p));
  },
  98,
);
