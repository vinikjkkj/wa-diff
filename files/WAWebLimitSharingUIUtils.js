__d(
  "WAWebLimitSharingUIUtils",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactSystemMsg",
    "WAWebDBProcessMessage",
    "WAWebFaqUrl",
    "WAWebFormatCTAText",
    "WAWebFormatNotificationTemplateText",
    "WAWebFormatUnknownMsg",
    "WAWebFrontendContactGetters",
    "WAWebGroupConstants",
    "WAWebLimitSharingDisableConfirmationPopup.react",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingInvokeBlockedPopup.react",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingSettingUpdateWamEvent",
    "WAWebModalManager",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebNetworkStatus",
    "WAWebOpusUtils",
    "WAWebProtobufsProtocol.pb",
    "WAWebSendMsgChatAction",
    "WAWebSetPropertyGroupAction",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumToggleUpdateAction",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = { OFFLINE: "offline", TOGGLE_1_ON_1: "toggle1on1" };
    function m() {
      return o("WAWebFaqUrl").getFullUrl(715385484388016);
    }
    function p(e) {
      o("WAWebCmd").Cmd.limitSharingDrawer(e);
    }
    function _(e) {
      var t;
      return o("WAWebLimitSharingGatingUtils").isOpusEnabled()
        ? !1
        : o(
            "WAWebLimitSharingGatingUtils",
          ).isLimitSharingReceiverGatingEnabledForChat() &&
            (e == null || (t = e.limitSharing) == null
              ? void 0
              : t.sharingLimited) === !0;
    }
    function f(e, t) {
      var n,
        r =
          (n =
            t == null
              ? void 0
              : t.some(function (e) {
                  return e.isBot();
                })) != null
            ? n
            : !1;
      return r && _(e);
    }
    function g(e) {
      var t;
      if (
        !o(
          "WAWebLimitSharingGatingUtils",
        ).isLimitSharingReceiverGatingEnabledForChat()
      )
        return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
      var n = v();
      if (e.limitSharing != null) {
        var r,
          a = (r = e.limitSharing) == null ? void 0 : r.initiatedBy;
        if (a) {
          var i,
            l = o("WAWebWidFactory").createUserWidOrThrow(a.user, a.server),
            s = o("WAWebContactCollection").ContactCollection.get(l),
            u = s
              ? o("WAWebFrontendContactGetters").getFormattedName(s)
              : o("WAWebWidFormat").widToFormattedUser(l),
            c = o("WAWebUserPrefsMeUser").isMeAccount(l);
          return ((i = e.limitSharing) == null ? void 0 : i.sharingLimited) ===
            !0
            ? c
              ? n.byMeOn()
              : n.byOtherUserOn(u)
            : c
              ? n.byMeOff()
              : n.byOtherUserOff(u);
        }
      }
      return ((t = e.limitSharing) == null ? void 0 : t.sharingLimited) === !0
        ? n.byNoUserOn()
        : n.byNoUserOff();
    }
    function h(e) {
      return o("WAWebLimitSharingGatingUtils").isOpusEnabled()
        ? !1
        : e.hasCapi !== !0 &&
            !e.id.isBot() &&
            !r("WAWebWid").isPSA(e.contact.id) &&
            !e.contact.isEnterprise &&
            N(e);
    }
    function y(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebLimitSharingInvokeBlockedPopup.react"), { chat: e }),
      );
    }
    async function C(e) {
      if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
        var t = _(e),
          n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          a = o("WATimeUtils").unixTime(),
          i = {
            sharingLimited: !t,
            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
              .CHAT_SETTING,
            initiatedBy: n,
            limitSharingSettingTimestamp: a * 1e3,
          };
        if (!r("WAWebNetworkStatus").online) {
          S();
          return;
        }
        i.sharingLimited !== !0 && !E(e)
          ? o("WAWebModalManager").ModalManager.open(
              c.jsx(r("WAWebLimitSharingDisableConfirmationPopup.react"), {
                onOK: async function () {
                  await k(e, i, n, a);
                },
              }),
            )
          : await k(e, i, n, a);
      }
    }
    function b(t) {
      var n;
      if (
        ((n = t.limitSharing) == null ? void 0 : n.sharingLimited) === !0 &&
        o("WAWebLimitSharingGatingUtils").isOpusEnabled()
      ) {
        var a = o("WAWebABProps").getABPropConfigValue("opus_t");
        o("WAWebOpusUtils")
          .opusProcessChat(t.id.toString(), { beforeTimestamp: a })
          .catch(function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[opus] guardrail failed for chat ",
                    "",
                  ])),
                t.id.toString(),
              )
              .catching(n instanceof Error ? n : r("err")(String(n)))
              .sendLogs("opus-guardrail-fail");
          });
      }
    }
    function v() {
      return {
        byMeOn: function () {
          return s._(/*BTDS*/ "You turned on advanced chat privacy");
        },
        byMeOff: function () {
          return s._(/*BTDS*/ "You turned off advanced chat privacy");
        },
        byOtherUserOn: function (t) {
          return s._(
            /*BTDS*/ "{limit_sharing_author} turned on advanced chat privacy",
            [s._param("limit_sharing_author", t)],
          );
        },
        byOtherUserOff: function (t) {
          return s._(
            /*BTDS*/ "{limit_sharing_author} turned off advanced chat privacy",
            [s._param("limit_sharing_author", t)],
          );
        },
        byNoUserOn: function () {
          return s._(/*BTDS*/ "Advanced chat privacy was turned on");
        },
        byNoUserOff: function () {
          return s._(/*BTDS*/ "Advanced chat privacy was turned off");
        },
        byMeChatProgressOn: function () {
          return s._(/*BTDS*/ "Turning on advanced chat privacy in this chat");
        },
        byMeChatProgressOff: function () {
          return s._(/*BTDS*/ "Turning off advanced chat privacy in this chat");
        },
        byMeChatCompletedOn: function () {
          return s._(
            /*BTDS*/ "You turned on advanced chat privacy in this chat",
          );
        },
        byMeChatCompletedOff: function () {
          return s._(
            /*BTDS*/ "You turned off advanced chat privacy in this chat",
          );
        },
      };
    }
    function S() {
      L(
        d.OFFLINE,
        s._(
          /*BTDS*/ "You can't change this setting because you're not connected to the internet. Check your internet connection and try again.",
        ),
      );
    }
    function R(e, t, n) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: e,
          initialAction: t,
          pendingAction: n,
        }),
      );
    }
    function L(e, t) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function E(e) {
      var t;
      return (t = e.limitSharing) != null && t.initiatedBy
        ? o("WAWebUserPrefsMeUser").isMeAccount(
            o("WAWebWidFactory").createWidFromWidLike(
              e.limitSharing.initiatedBy,
            ),
          )
        : !1;
    }
    async function k(e, t, n, o) {
      (r("WAWebWid").isGroup(e.id) ? await I(e, t) : await T(e, t, n, o), M(t));
    }
    async function I(e, t) {
      await o("WAWebSetPropertyGroupAction").setGroupProperty(
        e,
        o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING,
        t.sharingLimited === !0 ? 1 : 0,
      );
    }
    async function T(e, t, n, r) {
      var a = v(),
        i = new (o("WAWebActionToast.react").ActionType)(
          t.sharingLimited === !0
            ? a.byMeChatProgressOn()
            : a.byMeChatProgressOff(),
        ),
        l = D(e, t, n, r).then(function () {
          return new (o("WAWebActionToast.react").ActionType)(
            t.sharingLimited === !0
              ? a.byMeChatCompletedOn()
              : a.byMeChatCompletedOff(),
          );
        });
      R(d.TOGGLE_1_ON_1, i, l);
    }
    async function D(e, t, n, r) {
      var a = await x(e, t, n, r);
      await o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, a);
      var i = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
        e.id,
        t,
      );
      (await o("WAWebDBProcessMessage").storeMessages([i], e.id),
        await o("WAWebLimitSharingModelUtils").updateChat(e.id, t));
    }
    async function x(e, t, n, a) {
      var i = new (r("WAWebMsgKey"))({
        id: await r("WAWebMsgKey").newId(),
        remote: e.id,
        fromMe: !0,
      });
      return {
        id: i,
        from: n,
        to: e.id,
        t: a,
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        subtype: "limit_sharing_system_message",
        kind: "protocol",
        isNewMsg: !0,
        viewMode: "VISIBLE",
        limitSharing: t,
      };
    }
    function $(e, t) {
      var n = o("WAWebStateUtils").unproxy(t),
        a = r("WAWebFormatNotificationTemplateText")(
          o("WAWebStateUtils").unproxy(t.unsafe()),
        ).text,
        i,
        l;
      return (
        o(
          "WAWebLimitSharingGatingUtils",
        ).isLimitSharingReceiverGatingEnabledForChat() &&
          ((i = r("WAWebFormatCTAText")({
            type: t.type,
            subtype: t.subtype,
            id: n.id,
          })),
          (l = function () {
            return p(e);
          })),
        { text: a, ctaText: i, handleClick: l }
      );
    }
    function P() {
      var e = v();
      return {
        on: [e.byMeChatProgressOn(), e.byMeChatCompletedOn()],
        off: [e.byMeChatProgressOff(), e.byMeChatCompletedOff()],
      };
    }
    function N(e) {
      var t;
      return e
        ? ((t = e.limitSharing) == null ? void 0 : t.sharingLimited) === !0
          ? !0
          : r("WAWebWid").isGroup(e.id) ||
            o(
              "WAWebLimitSharingGatingUtils",
            ).isLimitSharingSetterGatingEnabledFor1on1Chat()
        : !1;
    }
    function M(e) {
      new (o(
        "WAWebLimitSharingSettingUpdateWamEvent",
      ).LimitSharingSettingUpdateWamEvent)({
        toggleUpdateAction:
          e.sharingLimited === !0
            ? o("WAWebWamEnumToggleUpdateAction").TOGGLE_UPDATE_ACTION.TURN_ON
            : o("WAWebWamEnumToggleUpdateAction").TOGGLE_UPDATE_ACTION.TURN_OFF,
      }).commit();
    }
    ((l.getSystemMessageLearnMoreURL = m),
      (l.showLimitSharingDrawer = p),
      (l.isLimitSharingReceiverEnabled = _),
      (l.isLimitSharingReceiverEnabledForUsers = f),
      (l.getLimitSharingMessageSystemNotificationText = g),
      (l.isLimitSharingSettingVisible = h),
      (l.showLimitSharingInvokeBlockedPopup = y),
      (l.toggleLimitSharing = C),
      (l.maybeOpusProcessChatOnOpen = b),
      (l.getLimitSharingMessageNotification = $),
      (l.getLimitSharingGroupUpdateActionStrings = P));
  },
  226,
);
