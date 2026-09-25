__d(
  "WAWebLimitSharingUIUtils",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebAcp2SystemText",
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
      return (
        o("WAWebLimitSharingGatingUtils").isChatAcp2Restricted(e) ||
        f(e == null ? void 0 : e.limitSharing)
      );
    }
    function f(e) {
      return o("WAWebLimitSharingGatingUtils").isOpusEnabled()
        ? !1
        : o(
            "WAWebLimitSharingGatingUtils",
          ).isLimitSharingReceiverGatingEnabledForChat() &&
            (e == null ? void 0 : e.sharingLimited) === !0;
    }
    function g(e, t) {
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
    function h(e) {
      var t;
      if (
        !o(
          "WAWebLimitSharingGatingUtils",
        ).isLimitSharingReceiverGatingEnabledForChat()
      )
        return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
      var n = E();
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
    function y(e) {
      return o("WAWebLimitSharingGatingUtils").isOpusEnabled() || C(e)
        ? !1
        : e.hasCapi !== !0 &&
            !e.id.isBot() &&
            !r("WAWebWid").isPSA(e.contact.id) &&
            !e.contact.isEnterprise;
    }
    function C(e) {
      return (
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(e) &&
        (e == null ? void 0 : e.acp2Setting) != null &&
        e.hasCapi !== !0 &&
        !e.id.isBot() &&
        !r("WAWebWid").isPSA(e.contact.id) &&
        !e.contact.isEnterprise
      );
    }
    function b(e) {
      o("WAWebCmd").Cmd.acp2Drawer(e);
    }
    function v(e) {
      o("WAWebModalManager").ModalManager.open(
        c.jsx(r("WAWebLimitSharingInvokeBlockedPopup.react"), { chat: e }),
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!o("WAWebLimitSharingGatingUtils").isOpusEnabled()) {
            var t = f(e == null ? void 0 : e.limitSharing),
              a = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
              i = o("WATimeUtils").unixTime(),
              l = {
                sharingLimited: !t,
                trigger: o("WAWebProtobufsProtocol.pb").LimitSharing$Trigger
                  .CHAT_SETTING,
                initiatedBy: a,
                limitSharingSettingTimestamp: i * 1e3,
              };
            if (!r("WAWebNetworkStatus").online) {
              k();
              return;
            }
            l.sharingLimited !== !0 && !D(e)
              ? o("WAWebModalManager").ModalManager.open(
                  c.jsx(r("WAWebLimitSharingDisableConfirmationPopup.react"), {
                    onOK: n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        yield x({
                          chat: e,
                          limitSharing: l,
                          meUser: a,
                          unixTimeSeconds: i,
                        });
                      },
                    ),
                  }),
                )
              : yield x({
                  chat: e,
                  limitSharing: l,
                  meUser: a,
                  unixTimeSeconds: i,
                });
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(t) {
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
    function E() {
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
    function k() {
      T(
        d.OFFLINE,
        s._(
          /*BTDS*/ "You can't change this setting because you're not connected to the internet. Check your internet connection and try again.",
        ),
      );
    }
    function I(e, t, n) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: e,
          initialAction: t,
          pendingAction: n,
        }),
      );
    }
    function T(e, t) {
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, { msg: t, id: e }),
      );
    }
    function D(e) {
      var t;
      return (t = e.limitSharing) != null && t.initiatedBy
        ? o("WAWebUserPrefsMeUser").isMeAccount(
            o("WAWebWidFactory").createWidFromWidLike(
              e.limitSharing.initiatedBy,
            ),
          )
        : !1;
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.limitSharing,
            o = e.meUser,
            a = e.unixTimeSeconds;
          (r("WAWebWid").isGroup(t.id) ? yield P(t, n) : yield M(t, n, o, a),
            j(n));
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebSetPropertyGroupAction").setGroupProperty(
            e,
            o("WAWebGroupConstants").GROUP_SETTING_TYPE.LIMIT_SHARING,
            t.sharingLimited === !0 ? 1 : 0,
          );
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n, r) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = E(),
              i = new (o("WAWebActionToast.react").ActionType)(
                t.sharingLimited === !0
                  ? a.byMeChatProgressOn()
                  : a.byMeChatProgressOff(),
              ),
              l = A({
                chat: e,
                limitSharing: t,
                meUser: n,
                unixTimeSeconds: r,
              }).then(function () {
                return new (o("WAWebActionToast.react").ActionType)(
                  t.sharingLimited === !0
                    ? a.byMeChatCompletedOn()
                    : a.byMeChatCompletedOff(),
                );
              });
            I(d.TOGGLE_1_ON_1, i, l);
          },
        )),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.limitSharing,
            r = e.meUser,
            a = e.unixTimeSeconds,
            i = yield O({
              chat: t,
              limitSharing: n,
              meUser: r,
              unixTimeSeconds: a,
            });
          yield o("WAWebSendMsgChatAction").addAndSendMsgToChat(t, i);
          var l = o("WAWebContactSystemMsg").genLimitSharingUpdateSystemMsg(
            t.id,
            n,
          );
          (yield o("WAWebDBProcessMessage").storeMessages([l], t.id),
            yield o("WAWebLimitSharingModelUtils").updateChat(t.id, n));
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.limitSharing,
            a = e.meUser,
            i = e.unixTimeSeconds,
            l = new (r("WAWebMsgKey"))({
              id: yield r("WAWebMsgKey").newId(),
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
        })),
        B.apply(this, arguments)
      );
    }
    function W(e, t) {
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
    function q() {
      var e = E();
      return {
        on: [e.byMeChatProgressOn(), e.byMeChatCompletedOn()],
        off: [e.byMeChatProgressOff(), e.byMeChatCompletedOff()],
      };
    }
    function U(e, t) {
      return (
        o("WAWebLimitSharingGatingUtils").isAcp2EnabledForChat(e) &&
        (t == null ? void 0 : t.enabled) === !0
      );
    }
    function V(e) {
      return U(e, e == null ? void 0 : e.acp2Setting);
    }
    function H() {
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
    function G(e) {
      var t;
      if (!o("WAWebLimitSharingGatingUtils").isAcp2EnabledForWid(e.id.remote))
        return o("WAWebFormatUnknownMsg").defaultFutureproofMsgText(e);
      var n = H();
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
            p = o("WAWebUserPrefsMeUser").isMeAccount(c);
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
    function z(e, t) {
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
            return b(e);
          })),
        { text: a, ctaText: i, handleClick: l }
      );
    }
    function j(e) {
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
      (l.isLimitSharingReceiverEnabledForValue = f),
      (l.isLimitSharingReceiverEnabledForUsers = g),
      (l.getLimitSharingMessageSystemNotificationText = h),
      (l.isLimitSharingSettingVisible = y),
      (l.isAcp2SettingVisible = C),
      (l.showAcp2Drawer = b),
      (l.showLimitSharingInvokeBlockedPopup = v),
      (l.toggleLimitSharing = S),
      (l.maybeOpusProcessChatOnOpen = L),
      (l.getLimitSharingMessageNotification = W),
      (l.getLimitSharingGroupUpdateActionStrings = q),
      (l.isAcp2ReceiverEnabledForValue = U),
      (l.isAcp2ReceiverEnabled = V),
      (l.getAcp2MessageSystemNotificationText = G),
      (l.getAcp2MessageNotification = z));
  },
  226,
);
