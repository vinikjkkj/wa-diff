__d(
  "WAWebBBInfoDrawerLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.audienceId,
        n = e.entryPoint,
        r = e.log,
        a = e.surface;
      r({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: n,
        extraAttributes: { audience_id: t },
        surface: a,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.AUDIENCE_INFO_BUTTON,
      });
    }
    function s(e, t, n, r, a) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { is_starred: a, msg_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.STAR_MESSAGE_BUTTON,
      });
    }
    function u(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: r != null ? { msg_id: r } : void 0,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.BROADCAST_INFO_DRAWER,
      });
    }
    function c(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: { campaign_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.PERFORMANCE_EXPLAINED_BUTTON,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CLOSE_BUTTON,
      });
    }
    function p(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: r,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CREATE_BROADCAST_BUTTON,
      });
    }
    function _(e, t, n, r, a) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: { error_type: a, source: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.CREATE_BROADCAST_BUTTON,
      });
    }
    function f(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.NEW_BROADCAST_BUTTON,
      });
    }
    function g(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.NEW_BROADCAST_TILE,
      });
    }
    function h(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.OPEN_BROADCAST_THREAD,
      });
    }
    function y(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function C(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CLOSE_BUTTON,
      });
    }
    function b(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EDIT_RECIPIENTS_BUTTON,
      });
    }
    function v(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_AUDIENCE_BUTTON,
      });
    }
    function S(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.LABEL_CHAT_CLICKED,
      });
    }
    function R(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.LABEL_CHAT_SAVED,
      });
    }
    function L(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t != null ? t : void 0,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_AUDIENCE_BUTTON,
      });
    }
    function E(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_DIALOG,
      });
    }
    function k(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_AUDIENCE_BUTTON,
      });
    }
    function I(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function T(e, t, n, r, a, i) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: babelHelpers.extends(
          { audience_id: r, save_result: a },
          i != null ? { errorType: i } : void 0,
        ),
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_AUDIENCE_BUTTON,
      });
    }
    function D(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_BROADCAST_BUTTON,
      });
    }
    function x(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_DIALOG,
      });
    }
    function $(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function P(e, t, n, r, a, i, l) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: babelHelpers.extends(
          { audience_id: r, campaign_id: a, save_result: i },
          l != null ? { errorType: l } : void 0,
        ),
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_BROADCAST_BUTTON,
      });
    }
    function N(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.RENAME_BROADCAST_BUTTON,
      });
    }
    function M(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: babelHelpers.extends(
          { save_result: n },
          r != null ? { errorType: r } : void 0,
        ),
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.RENAME_BROADCAST_BUTTON,
      });
    }
    function w(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.RENAME_AUDIENCE_BUTTON,
      });
    }
    function A(e, t, n, r, a, i) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: babelHelpers.extends(
          { audience_id: r, save_result: a },
          i != null ? { errorType: i } : void 0,
        ),
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.RENAME_AUDIENCE_BUTTON,
      });
    }
    function F(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.UNDO_RENAME_BROADCAST,
      });
    }
    function O(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.UNDO_RENAME_AUDIENCE,
      });
    }
    function B(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.PREVIEW_BUTTON,
      });
    }
    function W(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DUPLICATE_BROADCAST_BUTTON,
      });
    }
    function q(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DUPLICATE_BROADCAST_BUTTON,
      });
    }
    function U(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { campaign_id: n, msg_id: r },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_THREAD,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .IN_THREAD_INSIGHT_METRICS_CHIP,
      });
    }
    function V(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.REFRESH_INSIGHTS_BUTTON,
      });
    }
    function H(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: { campaign_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELIVERED_TO_DRAWER,
      });
    }
    function G(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.API,
        entryPoint: t,
        extraAttributes: {
          campaign_id: n,
          error_type: r,
          save_result: "failure",
        },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELIVERED_TO_DRAWER,
      });
    }
    ((l.audienceInfoButtonClicked = e),
      (l.starMessageButtonClicked = s),
      (l.broadcastInfoDrawerOpened = u),
      (l.broadcastInfoDrawerViewed = c),
      (l.performanceExplainedClicked = d),
      (l.detailsPanelCloseClicked = m),
      (l.createBroadcastButtonClicked = p),
      (l.createBroadcastButtonClickFailed = _),
      (l.newBroadcastButtonClicked = f),
      (l.newBroadcastTileClicked = g),
      (l.openBroadcastThreadClicked = h),
      (l.audienceInfoDrawerViewed = y),
      (l.audienceInfoDrawerCloseClicked = C),
      (l.audienceInfoDrawerEditRecipientsClicked = b),
      (l.audienceInfoDrawerDeleteClicked = v),
      (l.labelChatClicked = S),
      (l.labelChatSaved = R),
      (l.deleteAudienceClicked = L),
      (l.deleteAudienceDialogViewed = E),
      (l.audienceDeleteConfirmed = k),
      (l.deleteAudienceCancelClicked = I),
      (l.audienceDeleteResult = T),
      (l.broadcastDeleteConfirmed = D),
      (l.deleteBroadcastDialogViewed = x),
      (l.deleteBroadcastCancelClicked = $),
      (l.broadcastDeleteResult = P),
      (l.renameBroadcastClicked = N),
      (l.renameBroadcastResult = M),
      (l.renameAudienceClicked = w),
      (l.renameAudienceResult = A),
      (l.undoRenameBroadcastClicked = F),
      (l.undoRenameAudienceClicked = O),
      (l.broadcastPreviewClicked = B),
      (l.duplicateBroadcastClicked = W),
      (l.duplicateBroadcastTileViewed = q),
      (l.inThreadInsightMetricsChipClicked = U),
      (l.refreshInsightsClicked = V),
      (l.deliveredToDrawerViewed = H),
      (l.deliveredToDrawerFetchFailed = G));
  },
  98,
);
