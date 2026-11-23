__d(
  "WAWebNewsletterRestoreMetadataWithLoadingStage",
  [
    "WAWebNewsletterLoadingStageManager",
    "WAWebNewsletterMetadataInitFromStorage",
    "WAWebUserPrefsMultiDevice",
  ],
  function (t, n, r, o, a, i, l) {
    async function e() {
      var e =
        o("WAWebUserPrefsMultiDevice").getNewsletterWasBootstrapped() &&
        o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStageManager
          .stage ===
          o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage.None;
      e &&
        o(
          "WAWebNewsletterLoadingStageManager",
        ).NewsletterLoadingStageManager.start();
      try {
        (await o(
          "WAWebNewsletterMetadataInitFromStorage",
        ).restoreNewsletterMetadata(),
          e &&
            o("WAWebNewsletterLoadingStageManager")
              .NewsletterLoadingStageManager.stage ===
              o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
                .Loading &&
            o(
              "WAWebNewsletterLoadingStageManager",
            ).NewsletterLoadingStageManager.end());
      } catch (t) {
        throw (
          e &&
            o("WAWebNewsletterLoadingStageManager")
              .NewsletterLoadingStageManager.stage ===
              o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
                .Loading &&
            o(
              "WAWebNewsletterLoadingStageManager",
            ).NewsletterLoadingStageManager.end(),
          t
        );
      }
    }
    l.restoreNewsletterMetadataWithLoadingStage = e;
  },
  98,
);
