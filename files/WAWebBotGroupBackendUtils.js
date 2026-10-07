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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "encryptnow",
      s = 1;
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
              "WAWebContactSystemMsg",
            ).genEncryptNotificationMsgAfterBotRemoved(e);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
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
            ).isOpenGroupBotParticipantAddEnabled() === !0
          ) {
            var t = o(
              "WAWebGroupSystemMsg",
            ).genGroupTransitionToBotGroupNotificationMsg(e);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
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
          if (
            o(
              "WAWebBotGroupGatingUtils",
            ).isTEEGroupBotParticipantAddEnabled() === !0
          ) {
            var t = o(
              "WAWebGroupSystemMsg",
            ).genGroupTransitionToTeeBotGroupNotificationMsg(e);
            yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: e,
              newMsg: t,
              handleSingleMsgOrigin: "botGroup",
            });
          }
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
              ? (i || (yield d(n)), !0)
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
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              ? (i || (yield p(n)), !0)
              : !1;
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentIsOpenBotGroupState,
            n = e.currentIsTeeBotGroupState,
            r = e.groupWid,
            a = e.prevIsOpenBotGroupState,
            i = e.prevIsTeeBotGroupState;
          if (
            (!o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              !o(
                "WAWebBotGroupGatingUtils",
              ).isTEEGroupBotParticipantAddEnabled()) ||
            (t == null && n == null)
          )
            return !1;
          var l = !!a || !!i,
            s = !(t != null && t) && !(n != null && n);
          return l && s
            ? (o(
                "WAWebBotGroupGatingUtils",
              ).isStandardBotProfileGroupEnabled() || (yield u(r)),
              !0)
            : !1;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          var l = yield o("WAWebGroupsParticipantsApi").getParticipants(
            a.chatId,
          );
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
            !I(l.participants) ||
            I(c) ||
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
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.currentParticipants,
            n = e.groupWid,
            r = e.prevParticipantIds,
            a = e.responseListsAgents;
          return !a ||
            r == null ||
            !E(r, t) ||
            !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled()
            ? !1
            : (yield o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
                chatId: n,
                newMsg: o(
                  "WAWebContactSystemMsg",
                ).genEncryptNotificationMsgAfterBotRemoved(n),
                handleSingleMsgOrigin: "botGroup",
              }),
              !0);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
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
        : n.every(k);
    }
    function k(e) {
      return o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)
        ? o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled()
        : o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
          ? o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
          : o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled();
    }
    function I(e) {
      return e.some(function (e) {
        return o("WAWebBotUtils").isWidGroupAgentFbidWid(
          o("WAWebWidFactory").createWid(e),
        );
      });
    }
    function T(e) {
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
    ((l.addGroupChangedToOpenBotGroupSystemMsgIfRequired = f),
      (l.addGroupChangedToTeeBotGroupSystemMsgIfRequired = h),
      (l.addBotGroupChangedToE2EEFSystemMsgIfRequired = C),
      (l.genE2EENoticeMsgAfterLastAgentRemoved = v),
      (l.addE2EESystemMsgAfterLastAgentRemovedIfRequired = R),
      (l.injectBotParticipantState = T));
  },
  98,
);
