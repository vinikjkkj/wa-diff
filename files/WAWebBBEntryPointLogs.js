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
    function p(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t.ENTRY_POINT.CHAT_BANNER,
        surface: t.SURFACE_TYPE.CHATLIST,
        userActionTarget: t.UserActionTarget.QP_BANNER,
      });
    }
    function _(e) {
      var t;
      e({
        action: (t = o("WAWebBBLoggerTypes")).SMB_USER_ACTION_TYPE_ENUM.DISMISS,
        entryPoint: t.ENTRY_POINT.CHAT_BANNER,
        surface: t.SURFACE_TYPE.CHATLIST,
        userActionTarget: t.UserActionTarget.QP_BANNER,
      });
    }
    function f(e) {
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
      (l.bbThreadSystemMessageCtaClicked = f));
  },
  98,
);
