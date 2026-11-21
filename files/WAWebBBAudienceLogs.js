__d(
  "WAWebBBAudienceLogs",
  ["WAWebBBLoggerTypes", "WAWebWamEnumBbTierType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = t === "creation",
        i = {};
      (n.status === "complete" &&
        (i = a
          ? { matching_saved_audience_count: n.count }
          : { matching_prior_campaign_audience_count: n.count }),
        e({
          action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
          bbTier: o("WAWebWamEnumBbTierType").BB_TIER_TYPE.CORE,
          entryPoint: r,
          extraAttributes: babelHelpers.extends(
            { duplicate_check_point: t, duplicate_check_status: n.status },
            i,
          ),
          surface: a
            ? o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER
            : o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_REVIEW,
          userActionTarget:
            o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCE_DUPLICATE_CHECK,
        }));
    }
    function s(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: { is_edit: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function u(e) {
      var t = e.entryPoint,
        n = e.log,
        r = e.totalSelectedCount;
      n({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { total_selected_count: r },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CONTACT_CHECKBOX,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.BACK_BUTTON,
      });
    }
    function d(e, t, n, r, a, i, l) {
      var s = babelHelpers.extends(
        { audience_id: t, contact_count: n, is_edit: r },
        a != null ? { suggested_audience_card_id: a } : void 0,
      );
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: i,
        extraAttributes:
          l != null ? babelHelpers.extends({}, s, { time_spent_ms: l }) : s,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON,
      });
    }
    function m(e) {
      var t = e.entryPoint,
        n = e.floorMinimum,
        r = e.log,
        a = e.recipientCount,
        i = e.validationSucceeded;
      r({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VALIDATION,
        entryPoint: t,
        extraAttributes: babelHelpers.extends(
          {
            floor_check_point: "creation",
            floor_minimum: n,
            recipient_count: a,
            validation_succeeded: i,
          },
          i ? void 0 : { validation_error_type: "below_minimum" },
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_RECIPIENT_PICKER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON,
      });
    }
    function p(e) {
      var t = e.entryPoint,
        n = e.floorMinimum,
        r = e.log,
        a = e.recipientCount;
      r({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: babelHelpers.extends(
          { floor_check_point: "send", floor_minimum: n },
          a != null ? { recipient_count: a } : void 0,
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCE_BELOW_FLOOR_BANNER,
      });
    }
    function _(e, t, n, r, a, i, l) {
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
    function f(e, t, n, r, a, i) {
      var l =
        r != null
          ? babelHelpers.extends({}, i, {
              contact_count: t,
              errorType: r,
              save_result: n,
            })
          : babelHelpers.extends({}, i, { contact_count: t, save_result: n });
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: a,
        extraAttributes: l,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.IMPORTED_CONTACT_WIZARD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.SAVE_AUDIENCE_BUTTON,
      });
    }
    ((l.coreAudienceDuplicateCheck = e),
      (l.createAudienceViewed = s),
      (l.createAudienceContactCheckboxClicked = u),
      (l.createAudienceBackClicked = c),
      (l.createAudienceSaveClicked = d),
      (l.proAudienceFloorChecked = m),
      (l.proAudienceBelowFloorBannerViewed = p),
      (l.createAudienceSaveResult = _),
      (l.importAudienceSaveResult = f));
  },
  98,
);
