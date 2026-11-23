__d(
  "PerformanceSummaryWidgetErrorUtils",
  [
    "AdsPerformanceSummaryTypes",
    "PerformanceSummaryWidgetLogger.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t =
        o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetStatusEnum.cast(
          e.message,
        ) ||
        o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetStatusEnum
          .Error;
      return t ===
        o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetStatusEnum
          .Hidden
        ? s.jsx(r("PerformanceSummaryWidgetLogger.react"), {
            status: o("AdsPerformanceSummaryTypes")
              .PerformanceSummaryWidgetStatusEnum.Hidden,
          })
        : t ===
            o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetStatusEnum
              .Error
          ? s.jsx(r("PerformanceSummaryWidgetLogger.react"), {
              status: o("AdsPerformanceSummaryTypes")
                .PerformanceSummaryWidgetStatusEnum.Error,
            })
          : s.jsx(r("PerformanceSummaryWidgetLogger.react"), {
              status: o("AdsPerformanceSummaryTypes")
                .PerformanceSummaryWidgetStatusEnum.Error,
            });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"),
      (l.getWidgetErrorFallback = u));
  },
  98,
);
