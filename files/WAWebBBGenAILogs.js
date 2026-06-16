__d(
  "WAWebBBGenAILogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { ai_model: r, latency_ms: n, tone_count: t },
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
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CREATE_MODAL_VIEWED,
      });
    }
    function y(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CREATE_MODAL_DISMISSED,
      });
    }
    function C(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { prompt_length: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CREATE_MODAL_SUBMITTED,
      });
    }
    function b(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { card_index: n, direction: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CAROUSEL_NAVIGATED,
      });
    }
    function v(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { chip_label: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CHIP_TAPPED,
      });
    }
    function S(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { refinement_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_BACK,
      });
    }
    function R(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { tone: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_OPENED,
      });
    }
    function L(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { card_index: n, is_original: r, refinement_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_USE_MESSAGE,
      });
    }
    function E(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { refinement_count: n, response_time_ms: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_COMPLETED,
      });
    }
    function k(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { error_type: t, prompt_text: n },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_FAILED,
      });
    }
    function I(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { ai_model: r, prompt_text: n, prompt_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_SUBMITTED,
      });
    }
    function T(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ENTRY_POINT_VIEWED,
      });
    }
    function D(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ENTRY_POINT_CLICKED,
      });
    }
    function x(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_MODAL,
      });
    }
    function $(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_ACCEPT,
      });
    }
    function P(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_DISMISS,
      });
    }
    function N(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { link_name: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_NUX,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_NUX_LINK,
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
      (l.genAICreateModalViewed = h),
      (l.genAICreateModalDismissed = y),
      (l.genAICreateModalSubmitted = C),
      (l.genAICarouselNavigated = b),
      (l.genAIChipTapped = v),
      (l.genAICustomizeBack = S),
      (l.genAICustomizeOpened = R),
      (l.genAICustomizeUseMessage = L),
      (l.genAIRefinementCompleted = E),
      (l.genAIRefinementFailed = k),
      (l.genAIRefinementSubmitted = I),
      (l.genAIEntryPointViewed = T),
      (l.genAIEntryPointClicked = D),
      (l.genAINuxModalViewed = x),
      (l.genAINuxAcceptClicked = $),
      (l.genAINuxDismissClicked = P),
      (l.genAINuxLinkClicked = N));
  },
  98,
);
