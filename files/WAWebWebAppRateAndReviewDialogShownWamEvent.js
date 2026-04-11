__d(
  "WAWebWebAppRateAndReviewDialogShownWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCloseTypeEnum",
    "WAWebWamEnumSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        WebAppRateAndReviewDialogShown: [
          6788,
          {
            reviewDialogAction: [
              1,
              o("WAWebWamEnumCloseTypeEnum").CLOSE_TYPE_ENUM,
            ],
            reviewSource: [2, o("WAWebWamEnumSourceType").SOURCE_TYPE],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { WebAppRateAndReviewDialogShown: [] },
    );
    l.WebAppRateAndReviewDialogShownWamEvent = e;
  },
  98,
);
