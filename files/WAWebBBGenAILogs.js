__d(
  "WAWebBBGenAILogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { latency_ms: n, tone_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_SUGGESTIONS_SHOWN,
      });
    }
    function s(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { index: n, tone: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CARD_TAPPED,
      });
    }
    function u(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { index: n, tone: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_SUGGESTION_USED,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { previous_tone_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFRESH,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ERROR_SHOWN,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ERROR_RETRY,
      });
    }
    function p(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { daily_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_DAILY_LIMIT,
      });
    }
    function _(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { result: t, time_spent_ms: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_MODAL_CLOSED,
      });
    }
    function f(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { source: "suggestion", tone: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_AI_TEXT_USED,
      });
    }
    function g(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_AI_TEXT_CLEARED,
      });
    }
    function h(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_MODAL,
      });
    }
    function y(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_ACCEPT,
      });
    }
    function C(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_DISMISS,
      });
    }
    ((l.genAISuggestionsShown = e),
      (l.genAICardTapped = s),
      (l.genAISuggestionUsed = u),
      (l.genAIRefreshTapped = c),
      (l.genAIErrorShown = d),
      (l.genAIErrorRetryTapped = m),
      (l.genAIDailyLimitHit = p),
      (l.genAIModalClosed = _),
      (l.genAIAiTextUsed = f),
      (l.genAIAiTextCleared = g),
      (l.genAINuxModalViewed = h),
      (l.genAINuxAcceptClicked = y),
      (l.genAINuxDismissClicked = C));
  },
  98,
);
