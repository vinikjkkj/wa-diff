__d(
  "WAWebBBEntryPointLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.BB_CHAT_OVERFLOW_MENU,
        surface: t.SURFACE_TYPE.OVERFLOW_MENU,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    function s(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t.ENTRY_POINT.BB_CHAT_OVERFLOW_MENU,
        surface: t.SURFACE_TYPE.OVERFLOW_MENU,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    function u(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.BB_TOOLS_PAGE,
        surface: t.SURFACE_TYPE.BUSINESS_HOME_PAGE,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    function c(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t.ENTRY_POINT.BB_TOOLS_PAGE,
        surface: t.SURFACE_TYPE.BUSINESS_HOME_PAGE,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    function d(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.CHAT_HOME,
        surface: t.SURFACE_TYPE.CHATLIST,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    function m(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t.ENTRY_POINT.CHAT_HOME,
        surface: t.SURFACE_TYPE.CHATLIST,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    function p(e, t, n, r) {
      (n === void 0 && (n = o("WAWebBBLoggerTypes").ENTRY_POINT.CHAT_BANNER),
        r === void 0 && (r = o("WAWebBBLoggerTypes").SURFACE_TYPE.CHATLIST),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
          entryPoint: n,
          entryPointDetails: t,
          stickyEntryPoint: !1,
          surface: r,
          userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.QP_BANNER,
        }));
    }
    function _(e, t, n, r) {
      (n === void 0 && (n = o("WAWebBBLoggerTypes").ENTRY_POINT.CHAT_BANNER),
        r === void 0 && (r = o("WAWebBBLoggerTypes").SURFACE_TYPE.CHATLIST),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.DISMISS,
          entryPoint: n,
          entryPointDetails: t,
          stickyEntryPoint: !1,
          surface: r,
          userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.QP_BANNER,
        }));
    }
    function f(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: n.ENTRY_POINT.DEEP_LINK,
        extraAttributes: { attachment_count: t },
        surface: n.SURFACE_TYPE.CHATLIST,
        userActionTarget: n.UserActionTarget.SEND_MSG_MULTI_MODAL,
      });
    }
    function g(e, t) {
      var n;
      e({
        action: (n = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n.ENTRY_POINT.DEEP_LINK,
        extraAttributes: { attachment_count: t },
        surface: n.SURFACE_TYPE.CHATLIST,
        userActionTarget: n.UserActionTarget.SEND_MSG_MULTI_MODAL,
      });
    }
    function h(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t.ENTRY_POINT.BB_THREAD,
        surface: t.SURFACE_TYPE.BB_THREAD,
        userActionTarget: t.UserActionTarget.BUSINESS_BROADCASTS_BUTTON,
      });
    }
    ((l.chatOverflowMenuEntryPointViewed = e),
      (l.chatOverflowMenuEntryPointClicked = s),
      (l.toolsEntryPointViewed = u),
      (l.toolsEntryPointClicked = c),
      (l.newChatEntryPointViewed = d),
      (l.newChatEntryPointClicked = m),
      (l.qpBannerViewed = p),
      (l.qpBannerDismissed = _),
      (l.sendMsgMultiModalViewed = f),
      (l.sendMsgMultiModalConfirmed = g),
      (l.bbThreadSystemMessageCtaClicked = h));
  },
  98,
);
