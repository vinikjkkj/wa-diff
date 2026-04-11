__d(
  "WAWebBBInfoDrawerLogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
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
    function _(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.NEW_BROADCAST_BUTTON,
      });
    }
    function f(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.NEW_BROADCAST_TILE,
      });
    }
    function g(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.OPEN_BROADCAST_THREAD,
      });
    }
    function h(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.PAGE,
      });
    }
    function y(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CLOSE_BUTTON,
      });
    }
    function C(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.EDIT_RECIPIENTS_BUTTON,
      });
    }
    function b(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_AUDIENCE_BUTTON,
      });
    }
    function v(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.LABEL_CHAT_CLICKED,
      });
    }
    function S(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.LABEL_CHAT_SAVED,
      });
    }
    function R(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t != null ? t : void 0,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_AUDIENCE_BUTTON,
      });
    }
    function L(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELETE_BROADCAST_BUTTON,
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
        userActionTarget: o("WAWebBBLoggerTypes").UserActionTarget.CANCEL,
      });
    }
    function I(e, t, n, r, a, i, l) {
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
    function T(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.RENAME_BROADCAST_BUTTON,
      });
    }
    function D(e, t, n, r) {
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
    function x(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.RENAME_AUDIENCE_BUTTON,
      });
    }
    function $(e, t, n, r, a, i) {
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
    function P(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.UNDO_RENAME_BROADCAST,
      });
    }
    function N(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        extraAttributes: { audience_id: r },
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.UNDO_RENAME_AUDIENCE,
      });
    }
    function M(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: n,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.PREVIEW_BUTTON,
      });
    }
    function w(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        entryPoint: t,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_AUDIENCE_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.REFRESH_INSIGHTS_BUTTON,
      });
    }
    function A(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        entryPoint: t,
        extraAttributes: { campaign_id: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_BROADCAST_INFO_DRAWER,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.DELIVERED_TO_DRAWER,
      });
    }
    function F(e, t, n, r) {
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
      (l.newBroadcastButtonClicked = _),
      (l.newBroadcastTileClicked = f),
      (l.openBroadcastThreadClicked = g),
      (l.audienceInfoDrawerViewed = h),
      (l.audienceInfoDrawerCloseClicked = y),
      (l.audienceInfoDrawerEditRecipientsClicked = C),
      (l.audienceInfoDrawerDeleteClicked = b),
      (l.labelChatClicked = v),
      (l.labelChatSaved = S),
      (l.deleteAudienceClicked = R),
      (l.broadcastDeleteConfirmed = L),
      (l.deleteBroadcastDialogViewed = E),
      (l.deleteBroadcastCancelClicked = k),
      (l.broadcastDeleteResult = I),
      (l.renameBroadcastClicked = T),
      (l.renameBroadcastResult = D),
      (l.renameAudienceClicked = x),
      (l.renameAudienceResult = $),
      (l.undoRenameBroadcastClicked = P),
      (l.undoRenameAudienceClicked = N),
      (l.broadcastPreviewClicked = M),
      (l.refreshInsightsClicked = w),
      (l.deliveredToDrawerViewed = A),
      (l.deliveredToDrawerFetchFailed = F));
  },
  98,
);
