__d(
  "PerformanceSummaryAgeGenderMisdeliveryGuidanceWidgetPlugin",
  [
    "AdsPerformanceSummaryTypes",
    "AdsTargetingAgeGenderMisdeliveryPerceptionGuidanceCard.react",
    "feature",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        type: "performanceSummaryWidget",
        key: "ageGenderMisdeliveryPerceptionGuidance",
        name: o("AdsPerformanceSummaryTypes").PerformanceSummaryWidgetNamesEnum
          .AgeGenderMisdeliveryPerceptionGuidanceCard,
        isEnabled: function (t) {
          return t.isAdvantagePlusAudienceEnabled;
        },
        ContentComponent: function () {
          return u.jsx(
            r("AdsTargetingAgeGenderMisdeliveryPerceptionGuidanceCard.react"),
            {},
          );
        },
        logKey: "age_gender_misdelivery_perception_guidance",
        feature: o("feature").feature(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "AdsManager_PerfSum_AgeGenderMisdeliveryPerceptionGuidance_Widget",
            ])),
        ),
      },
      d = c;
    l.default = d;
  },
  98,
);
