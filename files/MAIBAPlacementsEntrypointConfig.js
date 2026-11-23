__d(
  "MAIBAPlacementsEntrypointConfig",
  ["fbt", "MAIBACreationStepsSection", "MAIBAPlacementsSuggestionPrompts"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      buttonLabel: s._(/*BTDS*/ ""),
      refreshButtonLabel: s._(/*BTDS*/ ""),
      refreshButtonLabelWhenAdopted: s._(/*BTDS*/ ""),
      customPromptPlaceholder: "How can I improve my placements?",
      entrypoint: "GUIDANCE_CARD_TABLE",
      promptId: "gp3_creation_steps_entrypoint",
      sectionTestId: "placements-section",
      sectionType: r("MAIBACreationStepsSection").PLACEMENTS,
      suggestionPrompts: o("MAIBAPlacementsSuggestionPrompts")
        .PLACEMENTS_SUGGESTION_PROMPTS,
      refreshSuggestionPrompts: o("MAIBAPlacementsSuggestionPrompts")
        .PLACEMENTS_REFRESH_SUGGESTION_PROMPTS,
      targetAdObjectLevel: "CAMPAIGN",
    };
    l.PLACEMENTS_ENTRYPOINT_CONFIG = e;
  },
  226,
);
