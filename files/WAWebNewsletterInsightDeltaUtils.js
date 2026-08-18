__d(
  "WAWebNewsletterInsightDeltaUtils",
  ["WAWebClock", "WAWebNewsletterMetricUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebClock").Clock.daysDeltaAbs(e) >=
        o("WAWebNewsletterMetricUtils").INSIGHT_DAYS_COVERED
      );
    }
    l.shouldShowInsightDelta = e;
  },
  98,
);
