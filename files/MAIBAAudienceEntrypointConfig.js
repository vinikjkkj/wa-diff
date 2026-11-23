__d(
  "MAIBAAudienceEntrypointConfig",
  ["fbt", "MAIBAAudienceSuggestionPrompts", "MAIBACreationStepsSection"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      buttonLabel: s._(/*BTDS*/ ""),
      refreshButtonLabel: s._(/*BTDS*/ ""),
      refreshButtonLabelWhenAdopted: s._(/*BTDS*/ ""),
      customPromptPlaceholder: "How can I improve my audience?",
      entrypoint: "GUIDANCE_CARD_TABLE",
      promptId: "gp3_creation_steps_entrypoint",
      sectionTestId: "audience-section",
      sectionType: r("MAIBACreationStepsSection").AUDIENCE,
      suggestionPrompts: o("MAIBAAudienceSuggestionPrompts")
        .AUDIENCE_SUGGESTION_PROMPTS,
      targetAdObjectLevel: "CAMPAIGN",
    };
    l.AUDIENCE_ENTRYPOINT_CONFIG = e;
  },
  226,
);
