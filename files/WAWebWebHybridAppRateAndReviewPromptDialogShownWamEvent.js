__d(
  "WAWebWebHybridAppRateAndReviewPromptDialogShownWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebHybridAppRateAndReviewPromptDialogShown: [
            7104,
            {
              dedupKey: [4, e.TYPES.INTEGER],
              webHybridAppRateAndReviewPromptDialogShownTime: [
                1,
                e.TYPES.TIMER,
              ],
              webHybridAppRateAndReviewPromptDialogStatusResult: [
                2,
                o(
                  "WAWebWamEnumWebHybridAppRateAndReviewPromptDialogStatusResult",
                ).WEB_HYBRID_APP_RATE_AND_REVIEW_PROMPT_DIALOG_STATUS_RESULT,
              ],
              webHybridDontShowAgainAppRateAndReviewChecked: [
                3,
                e.TYPES.BOOLEAN,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebHybridAppRateAndReviewPromptDialogShown: [] },
      );
    l.WebHybridAppRateAndReviewPromptDialogShownWamEvent = s;
  },
  98,
);
