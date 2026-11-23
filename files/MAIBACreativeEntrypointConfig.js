__d(
  "MAIBACreativeEntrypointConfig",
  ["fbt", "MAIBACreationStepsSection", "MAIBACreativeSuggestionPrompts"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      buttonLabel: s._(/*BTDS*/ ""),
      customPromptPlaceholder: "How can I improve my creative?",
      entrypoint: "GUIDANCE_CARD_TABLE",
      promptId: "gp3_creation_steps_entrypoint",
      sectionTestId: "creative-section",
      sectionType: r("MAIBACreationStepsSection").CREATIVE,
      suggestionPrompts: o("MAIBACreativeSuggestionPrompts")
        .CREATIVE_SUGGESTION_PROMPTS,
      targetAdObjectLevel: "ADGROUP",
    };
    l.CREATIVE_ENTRYPOINT_CONFIG = e;
  },
  226,
);
