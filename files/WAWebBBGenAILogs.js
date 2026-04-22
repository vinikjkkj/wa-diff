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
    function h(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { card_index: n, direction: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CAROUSEL_NAVIGATED,
      });
    }
    function y(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { chip_label: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CHIP_TAPPED,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { refinement_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_BACK,
      });
    }
    function b(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { tone: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_OPENED,
      });
    }
    function v(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { card_index: n, is_original: r, refinement_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_USE_MESSAGE,
      });
    }
    function S(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { refinement_count: n, response_time_ms: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_COMPLETED,
      });
    }
    function R(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { error_type: t, prompt_text: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_FAILED,
      });
    }
    function L(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { prompt_text: n, prompt_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_SUBMITTED,
      });
    }
    function E(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ENTRY_POINT_VIEWED,
      });
    }
    function k(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ENTRY_POINT_CLICKED,
      });
    }
    function I(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_MODAL,
      });
    }
    function T(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_ACCEPT,
      });
    }
    function D(e) {
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
      (l.genAICarouselNavigated = h),
      (l.genAIChipTapped = y),
      (l.genAICustomizeBack = C),
      (l.genAICustomizeOpened = b),
      (l.genAICustomizeUseMessage = v),
      (l.genAIRefinementCompleted = S),
      (l.genAIRefinementFailed = R),
      (l.genAIRefinementSubmitted = L),
      (l.genAIEntryPointViewed = E),
      (l.genAIEntryPointClicked = k),
      (l.genAINuxModalViewed = I),
      (l.genAINuxAcceptClicked = T),
      (l.genAINuxDismissClicked = D));
  },
  98,
);
