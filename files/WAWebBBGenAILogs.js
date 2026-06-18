__d(
  "WAWebBBGenAILogs",
  ["WAWebBBLoggerTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { ai_model: r, latency_ms: n, num_ai_suggestions: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_SUGGESTIONS_SHOWN,
      });
    }
    function s(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { num_ai_suggestions: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CARD_TAPPED,
      });
    }
    function u(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { num_ai_suggestions: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFRESH,
      });
    }
    function c(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ERROR_SHOWN,
      });
    }
    function d(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_ERROR_RETRY,
      });
    }
    function m(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { daily_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_DAILY_LIMIT,
      });
    }
    function p(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { modal: t, result: n, time_spent_ms: r },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_MODAL_CLOSED,
      });
    }
    function _(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { num_ai_suggestions: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_AI_TEXT_USED,
      });
    }
    function f(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_AI_TEXT_CLEARED,
      });
    }
    function g(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget
            .GENAI_INSUFFICIENT_WORD_COUNT,
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
    function b(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { chip_label: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CHIP_TAPPED,
      });
    }
    function v(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { refinement_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_BACK,
      });
    }
    function S(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { num_ai_suggestions: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_OPENED,
      });
    }
    function R(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { card_index: n, is_original: r, refinement_count: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_CUSTOMIZE_USE_MESSAGE,
      });
    }
    function L(e) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_LOADING,
      });
    }
    function E(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { response_time_ms: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_COMPLETED,
      });
    }
    function k(e, t) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.VIEW,
        extraAttributes: { error_type: t },
        surface: o("WAWebBBLoggerTypes").SURFACE_TYPE.BB_CAMPAIGN_DRAFT,
        userActionTarget:
          o("WAWebBBLoggerTypes").UserActionTarget.GENAI_REFINEMENT_FAILED,
      });
    }
    function I(e, t, n, r) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { ai_model: n, prompt_type: t, refinement_count: r },
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
    function D(e, t, n) {
      e({
        action: o("WAWebBBLoggerTypes").SMB_USER_ACTION_TYPE_ENUM.CLICK,
        extraAttributes: { ai_model: t, num_words_composer_draft: n },
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
      (l.genAIRefreshTapped = u),
      (l.genAIErrorShown = c),
      (l.genAIErrorRetryTapped = d),
      (l.genAIDailyLimitHit = m),
      (l.genAIModalClosed = p),
      (l.genAIAiTextUsed = _),
      (l.genAIAiTextCleared = f),
      (l.genAIInsufficientWordCountShown = g),
      (l.genAICreateModalViewed = h),
      (l.genAICreateModalDismissed = y),
      (l.genAICreateModalSubmitted = C),
      (l.genAIChipTapped = b),
      (l.genAICustomizeBack = v),
      (l.genAICustomizeOpened = S),
      (l.genAICustomizeUseMessage = R),
      (l.genAIRefinementLoading = L),
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
