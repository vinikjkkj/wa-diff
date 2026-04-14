__d(
  "WAWebBBNuxLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: n,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.TOS_NUX_MODAL,
      });
    }
    function s(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.TOS_NUX_ACCEPT,
      });
    }
    function u(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: { error_type: n, save_result: "failure" },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.TOS_NUX_ACCEPT_FAILED,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.TOS_NUX_DISMISS,
      });
    }
    function d(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { link_name: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.TOS_NUX_LINK,
      });
    }
    ((l.tosNuxViewed = e),
      (l.tosNuxAcceptClicked = s),
      (l.tosNuxAcceptFailed = u),
      (l.tosNuxDismissClicked = c),
      (l.tosNuxLinkClicked = d));
  },
  98,
);
