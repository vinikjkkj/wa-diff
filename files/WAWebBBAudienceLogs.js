__d(
  "WAWebBBAudienceLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function s(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: { total_selected_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CONTACT_CHECKBOX,
      });
    }
    function u(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON,
      });
    }
    function c(e, t, n, r, a, i) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: i,
        extraAttributes: babelHelpers.extends(
          { audience_id: t, contact_count: n, is_edit: r },
          a != null ? { suggested_audience_card_id: a } : void 0,
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON,
      });
    }
    function d(e, t, n, r, a, i, l) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: l,
        extraAttributes: babelHelpers.extends(
          { audience_id: t, contact_count: n, is_edit: r, save_result: a },
          i != null ? { errorType: i } : void 0,
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON,
      });
    }
    function m(e, t, n, r, a) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: a,
        extraAttributes: babelHelpers.extends(
          { contact_count: t, save_result: n },
          r != null ? { errorType: r } : void 0,
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON,
      });
    }
    ((l.createAudienceViewed = e),
      (l.createAudienceContactCheckboxClicked = s),
      (l.createAudienceBackClicked = u),
      (l.createAudienceSaveClicked = c),
      (l.createAudienceSaveResult = d),
      (l.importAudienceSaveResult = m));
  },
  98,
);
