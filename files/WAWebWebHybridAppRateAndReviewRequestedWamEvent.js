__d(
  "WAWebWebHybridAppRateAndReviewRequestedWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumWebHybridAppRateAndReviewRequestSource",
    "WAWebWamEnumWebHybridAppRateAndReviewStatusResult",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          WebHybridAppRateAndReviewRequested: [
            7106,
            {
              dedupKey: [6, e.TYPES.INTEGER],
              webHybridAppRateAndReviewRequestDialogShownTime: [
                1,
                e.TYPES.TIMER,
              ],
              webHybridAppRateAndReviewRequestSource: [
                2,
                o("WAWebWamEnumWebHybridAppRateAndReviewRequestSource")
                  .WEB_HYBRID_APP_RATE_AND_REVIEW_REQUEST_SOURCE,
              ],
              webHybridAppRateAndReviewStatusResult: [
                3,
                o("WAWebWamEnumWebHybridAppRateAndReviewStatusResult")
                  .WEB_HYBRID_APP_RATE_AND_REVIEW_STATUS_RESULT,
              ],
              webHybridAppRateAndReviewWasReviewUpdated: [4, e.TYPES.BOOLEAN],
              webHybridFallbackedToMsStoreReviewPipeline: [5, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { WebHybridAppRateAndReviewRequested: [] },
      );
    l.WebHybridAppRateAndReviewRequestedWamEvent = s;
  },
  98,
);
