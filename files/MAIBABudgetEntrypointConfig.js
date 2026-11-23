__d(
  "MAIBABudgetEntrypointConfig",
  ["fbt", "MAIBABudgetSuggestionPrompts", "MAIBACreationStepsSection"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        buttonLabel: s._(/*BTDS*/ ""),
        refreshButtonLabel: s._(/*BTDS*/ ""),
        refreshButtonLabelWhenAdopted: s._(/*BTDS*/ ""),
        customPromptPlaceholder: "How can I improve my budget?",
        entrypoint: "GUIDANCE_CARD_TABLE",
        promptId: "gp3_creation_steps_entrypoint",
        sectionTestId: "budget-section",
        sectionType: r("MAIBACreationStepsSection").BUDGET,
        suggestionPrompts: o("MAIBABudgetSuggestionPrompts")
          .BUDGET_SUGGESTION_PROMPTS,
        refreshSuggestionPrompts: o("MAIBABudgetSuggestionPrompts")
          .BUDGET_REFRESH_SUGGESTION_PROMPTS,
        targetAdObjectLevel: "CAMPAIGN",
        variant: "single",
      },
      u = babelHelpers.extends({}, e);
    ((l.BUDGET_ENTRYPOINT_CONFIG = e),
      (l.CAMPAIGN_BUDGET_ENTRYPOINT_CONFIG = u));
  },
  226,
);
