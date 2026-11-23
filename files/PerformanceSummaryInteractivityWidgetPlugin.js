__d(
  "PerformanceSummaryInteractivityWidgetPlugin",
  [
    "AdsPEInteractiveComponentCardContainerDeferred.react",
    "AdsPerformanceSummaryTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        type: "performanceSummaryWidget",
        key: "interactivity",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .Interactivity,
        ContentComponent: function () {
          return s.jsx(
            r("AdsPEInteractiveComponentCardContainerDeferred.react"),
            {},
          );
        },
        isEnabled: function () {
          return !0;
        },
        logKey: "interactive_component",
      },
      c = u;
    l.default = c;
  },
  98,
);
