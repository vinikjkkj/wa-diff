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
    "asyncToGeneratorRuntime",
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
      var n = S();
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
            B(e);
    }
    function y(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebLimitSharingInvokeBlockedPopup.react"), { chat: e }),
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var t = _(e),
              a = o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              i = o("WATimeUtils").unixTime(),
              l = {
                sharingLimited: !t,
                trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                  .CHAT_SETTING,
                initiatedBy: a,
                limitSharingSettingTimestamp: i * 1e3,
              };
            if (!r("WAWebNetworkStatus").online) {
              R();
              return;
            }
            l.sharingLimited !== !0 && !k(e)
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebLimitSharingDisableConfirmationPopup.react"), {
                    onOK: n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        yield I(e, l, a, i);
                      },
                    ),
                  }),
                )
              : yield I(e, l, a, i);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(t) {
      var n;
      if (
        ((n = t.limitSharing) == null ? void 0 : n.sharingLimited) === !0 &&
        o("WAWebLimitSharingGatingUtils").isOpusEnabled()
      ) {
        var r = o("WAWebABProps").getABPropConfigValue("opus_t");
        o("WAWebOpusUtils")
          .opusProcessChat(t.id.toString(), { beforeTimestamp: r })
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
              .catching(n instanceof Error ? n : new Error(String(n)))
              .sendLogs("opus-guardrail-fail");
          });
      }
    }
    function S() {
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
    function R() {
      E(
        d.OFFLINE,
        s._(
          /*BTDS*/ "You can't change this setting because you're not connected to the internet. Check your internet connection and try again.",
        ),
      );
    }
    function L(e, t, n) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: e,
          initialAction: t,
          pendingAction: n,
        }),
      );
    }
    function E(e, t) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function k(e) {
      var t;
      return (t = e.limitSharing) != null && t.initiatedBy
        ? o("WAWebUserPrefsMeUser").isMeAccount(
            o("WAWebWidFactory").createWidFromWidLike(
              e.limitSharing.initiatedBy,
            ),
          )
        : !1;
    }
    function I(e, t, n, r) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, o) {
            (r("WAWebWid").isGroup(e.id) ? yield D(e, t) : yield $(e, t, n, o),
              W(t));
          },
        )),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebSetPropertyGroupAction").setGroupProperty(
            e,
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING,
            t.sharingLimited === !0 ? 1 : 0,
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = S(),
              i = new (o("WAWebActionToast.react").ActionType)(
                t.sharingLimited === !0
                  ? a.byMeChatProgressOn()
                  : a.byMeChatProgressOff(),
              ),
              l = N(e, t, n, r).then(function () {
                return new (o("WAWebActionToast.react").ActionType)(
                  t.sharingLimited === !0
                    ? a.byMeChatCompletedOn()
                    : a.byMeChatCompletedOff(),
                );
              });
            L(d.TOGGLE_1_ON_1, i, l);
          },
        )),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n, r) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield w(e, t, n, r);
            yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(e, a);
            var i = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
              e.id,
              t,
            );
            (yield o("WAWebDBProcessMessage").storeMessages([i], e.id),
              yield o("WAWebLimitSharingModelUtils").updateChat(e.id, t));
          },
        )),
        M.apply(this, arguments)
      );
    }
    function w(e, t, n, r) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
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
          },
        )),
        A.apply(this, arguments)
      );
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
      var e = S();
      return {
        on: [e.byMeChatProgressOn(), e.byMeChatCompletedOn()],
        off: [e.byMeChatProgressOff(), e.byMeChatCompletedOff()],
      };
    }
    function B(e) {
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
    function W(e) {
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
      (l.maybeOpusProcessChatOnOpen = v),
      (l.getLimitSharingMessageNotification = F),
      (l.getLimitSharingGroupUpdateActionStrings = O));
  },
  226,
);
