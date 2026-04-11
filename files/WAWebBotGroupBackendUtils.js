__d(
  "WAWebBotGroupBackendUtils",
  [
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebContactSystemMsg",
    "WAWebGroupSystemMsg",
    "WAWebHandleSingleMsgFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() === !0
          ) {
            var t = o(
              "WAWebContactSystemMsg",
            ).genEncryptNotificationMsgAfterBotRemoved(e);
            yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "botGroup",
            });
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() === !0
          ) {
            var t = o(
              "WAWebGroupSystemMsg",
            ).genGroupTransitionToBotGroupNotificationMsg(e);
            yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "botGroup",
            });
          }
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
          if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() === !0
          ) {
            var t = o(
              "WAWebGroupSystemMsg",
            ).genGroupTransitionToTeeBotGroupNotificationMsg(e);
            yield o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "botGroup",
            });
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentIsOpenBotGroupState,
            n = e.groupWid,
            r = e.prevIsOpenBotGroupState;
          return o(
            "WAWebBotGroupGatingUtils",
          ).isOpenGroupBotParticipantAddEnabled() !== !0 || t == null
            ? !1
            : r === !1 && (t != null ? t : !1) === !0
              ? (yield u(n), !0)
              : !1;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentIsTeeBotGroupState,
            n = e.groupWid,
            r = e.prevIsTeeBotGroupState;
          return o(
            "WAWebBotGroupGatingUtils",
          ).isTEEGroupBotParticipantAddEnabled() !== !0 || t == null
            ? !1
            : r === !1 && t === !0
              ? (yield d(n), !0)
              : !1;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.currentIsOpenBotGroupState,
            r = t.currentIsTeeBotGroupState,
            a = t.groupWid,
            i = t.prevIsOpenBotGroupState,
            l = t.prevIsTeeBotGroupState;
          if (
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              !o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) ||
            (n == null && r == null)
          )
            return !1;
          var s = !!i || !!l,
            u = !(n != null && n) && !(r != null && r);
          return s && u ? (yield e(a), !0) : !1;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
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
    ((l.addGroupChangedToOpenBotGroupSystemMsgIfRequired = p),
      (l.addGroupChangedToTeeBotGroupSystemMsgIfRequired = f),
      (l.addBotGroupChangedToE2EEFSystemMsgIfRequired = h),
      (l.injectBotParticipantState = C));
  },
  98,
);
