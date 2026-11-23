__d(
  "MAIBAAdSetupEntrypointConfig",
  ["fbt", "MAIBACreationStepsSection"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      buttonLabel: s._(/*BTDS*/ ""),
      refreshButtonLabel: s._(/*BTDS*/ ""),
      refreshButtonLabelWhenAdopted: s._(/*BTDS*/ ""),
      customPromptPlaceholder: "How can I improve my ad setup?",
      entrypoint: "GUIDANCE_CARD_TABLE",
      promptId: "gp3_creation_steps_entrypoint",
      sectionTestId: "ad-setup-section",
      sectionType: r("MAIBACreationStepsSection").AD_SETUP,
      suggestionPrompts: [],
      targetAdObjectLevel: "ADGROUP",
      variant: "single",
    };
    l.AD_SETUP_ENTRYPOINT_CONFIG = e;
  },
  226,
);
