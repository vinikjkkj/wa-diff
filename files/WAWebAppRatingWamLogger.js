__d(
  "WAWebAppRatingWamLogger",
  [
    "WAWebWamEnumCloseTypeEnum",
    "WAWebWamEnumSourceType",
    "WAWebWebAppRateAndReviewDialogShownWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebWamEnumSourceType").SOURCE_TYPE.CONTEXTUAL;
      t === "navbar"
        ? (n = o("WAWebWamEnumSourceType").SOURCE_TYPE.NAVBAR)
        : t === "settings" &&
          (n = o("WAWebWamEnumSourceType").SOURCE_TYPE.SETTINGS);
      var r =
        e === "submitted"
          ? o("WAWebWamEnumCloseTypeEnum").CLOSE_TYPE_ENUM.SUBMITTED
          : o("WAWebWamEnumCloseTypeEnum").CLOSE_TYPE_ENUM.CLOSED;
      new (o(
        "WAWebWebAppRateAndReviewDialogShownWamEvent",
      ).WebAppRateAndReviewDialogShownWamEvent)({
        reviewDialogAction: r,
        reviewSource: n,
      }).commit();
    }
    l.logAppRatingDialogAction = e;
  },
  98,
);
