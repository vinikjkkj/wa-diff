__d(
  "WAWebNewsletterRestoreMetadataWithLoadingStage",
  [
    "WAWebNewsletterLoadingStageManager",
    "WAWebNewsletterMetadataInitFromStorage",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
            o("WAWebUserPrefsMultiDevice").getNewsletterWasBootstrapped() &&
            o("WAWebNewsletterLoadingStageManager")
              .NewsletterLoadingStageManager.stage ===
              o("WAWebNewsletterLoadingStageManager").NewsletterLoadingStage
                .None;
          e &&
            o(
              "WAWebNewsletterLoadingStageManager",
            ).NewsletterLoadingStageManager.start();
          try {
            (yield o(
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
        })),
        s.apply(this, arguments)
      );
    }
    l.restoreNewsletterMetadataWithLoadingStage = e;
  },
  98,
);
