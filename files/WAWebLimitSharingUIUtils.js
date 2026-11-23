__d(
  "WAWebLimitSharingUIUtils",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAcp2SystemText",
    "WAWebActionToast.react",
    "WAWebBackendRuntime",
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
    "WAWebLimitSharingAIGroupBlock",
    "WAWebLimitSharingBlockedDueToAIAgent.react",
    "WAWebLimitSharingBlockedDueToAIGroup.react",
    "WAWebLimitSharingDisableConfirmationPopup.react",
    "WAWebLimitSharingGatingUtils",
    "WAWebLimitSharingInvokeBlockedPopup.react",
    "WAWebLimitSharingModelUtils",
    "WAWebLimitSharingSettingUpdateWamEvent",
    "WAWebMessageStoreService",
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
    "WAWebUserUtils",
    "WAWebWamEnumToggleUpdateAction",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "WAWebWorkFeature",
    "WDSDialogBridge",
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
      var t = o("WAWebLimitSharingAIGroupBlock").getLimitSharingAIGroupBlock(e);
      if (
        t ===
        o("WAWebLimitSharingAIGroupBlock").LimitSharingAIGroupBlock.GROUP_AGENT
      ) {
        o("WDSDialogBridge").openWDSDialog(
          c.jsx(r("WAWebLimitSharingBlockedDueToAIAgent.react"), {}),
        );
        return;
      }
      if (
        t ===
        o("WAWebLimitSharingAIGroupBlock").LimitSharingAIGroupBlock.META_AI
      ) {
        o("WDSDialogBridge").openWDSDialog(
          c.jsx(r("WAWebLimitSharingBlockedDueToAIGroup.react"), {}),
        );
        return;
      }
      o("WAWebCmd").Cmd.limitSharingDrawer(e);
    }
    function _(e) {
      return (
        o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e) ||
        g(e == null ? void 0 : e.limitSharing)
      );
    }
    function f(e) {
      var t = e.acp2Setting,
        n = e.chatId,
        r = e.limitSharing;
      return (
        o("WAWebLimitSharingGatingUtils").isAcp2RestrictedSetting(n, t) || g(r)
      );
    }
    function g(e) {
      return o("WAWebLimitSharingGatingUtils").isOpusEnabled()
        ? !1
        : o(
            "WAWebLimitSharingGatingUtils",
          ).isLimitSharingReceiverGatingEnabledForChat() &&
            (e == null ? void 0 : e.sharingLimited) === !0;
    }
    function h(e, t) {
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
    function y(e, t) {
      var n,
        r = e.acp2Setting,
        o = e.chatId,
        a = e.limitSharing,
        i =
          (n =
            t == null
              ? void 0
              : t.some(function (e) {
                  return e.isBot();
                })) != null
            ? n
            : !1;
      return i && f({ acp2Setting: r, chatId: o, limitSharing: a });
    }
    function C(e) {
      var t;
      if (
        !o(
          "WAWebLimitSharingGatingUtils",
        ).isLimitSharingReceiverGatingEnabledForChat()
      )
        return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
      var n = I();
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
            c = o("WAWebUserUtils").isMeAccount(l);
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
    function b(e, t, n) {
      return v({
        acp2Setting: n,
        chatId: e.id,
        contactId: e.contact.id,
        isCapiHostedGroup: e.hasCapi === !0,
        isEnterprise: e.contact.isEnterprise,
        limitSharing: t,
      });
    }
    function v(e) {
      var t = e.acp2Setting,
        n = e.chatId,
        a = e.contactId,
        i = e.isCapiHostedGroup,
        l = e.isEnterprise,
        s = e.limitSharing;
      return o("WAWebWorkFeature").isWork() ||
        i ||
        n.isBot() ||
        r("WAWebWid").isPSA(a) ||
        l
        ? null
        : o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(n) && !S(s, t)
          ? "acp2"
          : o("WAWebLimitSharingGatingUtils").isOpusEnabled()
            ? null
            : "limitSharing";
    }
    function S(e, t) {
      return (t == null ? void 0 : t.enabled) !== !0 && g(e);
    }
    function R(e) {
      o("WAWebCmd").Cmd.acp2Drawer(e);
    }
    function L(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebLimitSharingInvokeBlockedPopup.react"), { chatId: e.id }),
      );
    }
    async function E(e) {
      if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
        var t = g(e == null ? void 0 : e.limitSharing),
          n = o("WAWebUserUtils").getMeLidUserOrThrow(),
          a = o("WATimeUtils").unixTime(),
          i = {
            sharingLimited: !t,
            trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
              .CHAT_SETTING,
            initiatedBy: n,
            limitSharingSettingTimestamp: a * 1e3,
          };
        if (!r("WAWebNetworkStatus").online) {
          T();
          return;
        }
        i.sharingLimited !== !0 && !$(e)
          ? o("WDSDialogBridge").openWDSDialog(
              c.jsx(r("WAWebLimitSharingDisableConfirmationPopup.react"), {
                onOK: async function () {
                  await P({
                    chat: e,
                    limitSharing: i,
                    meUser: n,
                    unixTimeSeconds: a,
                  });
                },
              }),
            )
          : await P({
              chat: e,
              limitSharing: i,
              meUser: n,
              unixTimeSeconds: a,
            });
      }
    }
    function k(t) {
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
    function I() {
      return {
        byMeOn: function () {
          return s._(/*BTDS*/ "");
        },
        byMeOff: function () {
          return s._(/*BTDS*/ "");
        },
        byOtherUserOn: function (t) {
          return s._(/*BTDS*/ "", [s._param("limit_sharing_author", t)]);
        },
        byOtherUserOff: function (t) {
          return s._(/*BTDS*/ "", [s._param("limit_sharing_author", t)]);
        },
        byNoUserOn: function () {
          return s._(/*BTDS*/ "");
        },
        byNoUserOff: function () {
          return s._(/*BTDS*/ "");
        },
        byMeChatProgressOn: function () {
          return s._(/*BTDS*/ "");
        },
        byMeChatProgressOff: function () {
          return s._(/*BTDS*/ "");
        },
        byMeChatCompletedOn: function () {
          return s._(/*BTDS*/ "");
        },
        byMeChatCompletedOff: function () {
          return s._(/*BTDS*/ "");
        },
      };
    }
    function T() {
      x(d.OFFLINE, s._(/*BTDS*/ ""));
    }
    function D(e, t, n) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: e,
          initialAction: t,
          pendingAction: n,
        }),
      );
    }
    function x(e, t) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function $(e) {
      var t;
      return (t = e.limitSharing) != null && t.initiatedBy
        ? o("WAWebUserUtils").isMeAccount(
            o("WAWebWidFactory").createWidFromWidLike(
              e.limitSharing.initiatedBy,
            ),
          )
        : !1;
    }
    async function P(e) {
      var t = e.chat,
        n = e.limitSharing,
        o = e.meUser,
        a = e.unixTimeSeconds;
      (r("WAWebWid").isGroup(t.id) ? await N(t, n) : await M(t, n, o, a), G(n));
    }
    async function N(e, t) {
      await o("WAWebSetPropertyGroupAction").setGroupProperty(
        e,
        o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING,
        t.sharingLimited === !0 ? 1 : 0,
      );
    }
    async function M(e, t, n, r) {
      var a = I(),
        i = new (o("WAWebActionToast.react").ActionType)(
          t.sharingLimited === !0
            ? a.byMeChatProgressOn()
            : a.byMeChatProgressOff(),
        ),
        l = w({ chat: e, limitSharing: t, meUser: n, unixTimeSeconds: r }).then(
          function () {
            return new (o("WAWebActionToast.react").ActionType)(
              t.sharingLimited === !0
                ? a.byMeChatCompletedOn()
                : a.byMeChatCompletedOff(),
            );
          },
        );
      D(d.TOGGLE_1_ON_1, i, l);
    }
    async function w(e) {
      var t = e.chat,
        n = e.limitSharing,
        r = e.meUser,
        a = e.unixTimeSeconds,
        i = await A({
          chat: t,
          limitSharing: n,
          meUser: r,
          unixTimeSeconds: a,
        });
      await o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, i);
      var l = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
        t.id,
        n,
      );
      (await (
        o("WAWebBackendRuntime").isWebDiBackendEnabled()
          ? o("WAWebBackendRuntime").runtime(
              o("WAWebMessageStoreService").MessageStoreService,
            ).storeMessages
          : o("WAWebDBProcessMessage").storeMessages
      )([l], t.id),
        await o("WAWebLimitSharingModelUtils").updateChat(t.id, n));
    }
    async function A(e) {
      var t = e.chat,
        n = e.limitSharing,
        a = e.meUser,
        i = e.unixTimeSeconds,
        l = new (r("WAWebMsgKey"))({
          id: await r("WAWebMsgKey").newId(),
          remote: t.id,
          fromMe: !0,
        });
      return {
        id: l,
        from: a,
        to: t.id,
        t: i,
        type: o("WAWebMsgType").MSG_TYPE.PROTOCOL,
        subtype: "limit_sharing_system_message",
        kind: "protocol",
        isNewMsg: !0,
        viewMode: "VISIBLE",
        limitSharing: n,
      };
    }
    function F(e, t) {
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
    function O() {
      var e = I();
      return {
        on: [e.byMeChatProgressOn(), e.byMeChatCompletedOn()],
        off: [e.byMeChatProgressOff(), e.byMeChatCompletedOff()],
      };
    }
    function B(e, t) {
      return W(e.id, t);
    }
    function W(e, t) {
      return (
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e) &&
        (t == null ? void 0 : t.enabled) === !0
      );
    }
    function q(e) {
      return B(e, e == null ? void 0 : e.acp2Setting);
    }
    function U() {
      return {
        byMeOn: function () {
          return o("WAWebAcp2SystemText").getAcp2ByMeOnText();
        },
        byMeOff: function () {
          return o("WAWebAcp2SystemText").getAcp2ByMeOffText();
        },
        byOtherUserOn: function (t) {
          return o("WAWebAcp2SystemText").getAcp2ByOtherUserOnText(t);
        },
        byOtherUserOff: function (t) {
          return o("WAWebAcp2SystemText").getAcp2ByOtherUserOffText(t);
        },
        byNoUserOn: function () {
          return o("WAWebAcp2SystemText").getAcp2ByNoUserOnText();
        },
        byNoUserOff: function () {
          return o("WAWebAcp2SystemText").getAcp2ByNoUserOffText();
        },
      };
    }
    function V(e) {
      var t;
      if (!o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e.id.remote))
        return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
      var n = U();
      if (e.acp2Setting != null) {
        var r, a;
        if (((r = e.acp2Setting) == null ? void 0 : r.initiatedBy) == null) {
          var i;
          if (((i = e.acp2Setting) == null ? void 0 : i.initiatedByMe) === !0) {
            var l;
            return ((l = e.acp2Setting) == null ? void 0 : l.enabled) === !0
              ? n.byMeOn()
              : n.byMeOff();
          }
        }
        var s = (a = e.acp2Setting) == null ? void 0 : a.initiatedBy;
        if (s) {
          var u,
            c = o("WAWebWidFactory").createUserWidOrThrow(s.user, s.server),
            d = o("WAWebContactCollection").ContactCollection.get(c),
            m = d
              ? o("WAWebFrontendContactGetters").getFormattedName(d)
              : o("WAWebWidFormat").widToFormattedUser(c),
            p = o("WAWebUserUtils").isMeAccount(c);
          return ((u = e.acp2Setting) == null ? void 0 : u.enabled) === !0
            ? p
              ? n.byMeOn()
              : n.byOtherUserOn(m)
            : p
              ? n.byMeOff()
              : n.byOtherUserOff(m);
        }
      }
      return ((t = e.acp2Setting) == null ? void 0 : t.enabled) === !0
        ? n.byNoUserOn()
        : n.byNoUserOff();
    }
    function H(e, t) {
      var n = o("WAWebStateUtils").unproxy(t),
        a = r("WAWebFormatNotificationTemplateText")(
          o("WAWebStateUtils").unproxy(t.unsafe()),
        ).text,
        i,
        l;
      return (
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(e) &&
          ((i = r("WAWebFormatCTAText")({
            type: t.type,
            subtype: t.subtype,
            id: n.id,
          })),
          (l = function () {
            return R(e);
          })),
        { text: a, ctaText: i, handleClick: l }
      );
    }
    function G(e) {
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
      (l.isLimitSharingReceiverEnabledFor = f),
      (l.isLimitSharingReceiverEnabledForValue = g),
      (l.isLimitSharingReceiverEnabledForUsers = h),
      (l.isLimitSharingReceiverEnabledForUsersFor = y),
      (l.getLimitSharingMessageSystemNotificationText = C),
      (l.getAcpSettingRow = b),
      (l.getAcpSettingRowFor = v),
      (l.showAcp2Drawer = R),
      (l.showLimitSharingInvokeBlockedPopup = L),
      (l.toggleLimitSharing = E),
      (l.maybeOpusProcessChatOnOpen = k),
      (l.getLimitSharingMessageNotification = F),
      (l.getLimitSharingGroupUpdateActionStrings = O),
      (l.isAcp2ReceiverEnabledForValue = B),
      (l.isAcp2ReceiverEnabledFor = W),
      (l.isAcp2ReceiverEnabled = q),
      (l.getAcp2MessageSystemNotificationText = V),
      (l.getAcp2MessageNotification = H));
  },
  226,
);
