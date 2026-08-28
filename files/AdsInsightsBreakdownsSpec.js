__d(
  "AdsInsightsBreakdownsSpec",
  [
    "invariant",
    "AdsInsightsActionGroups",
    "AdsInsightsBreakdown",
    "AdsInsightsDemographicsBreakdown",
    "AdsInsightsGeographyBreakdown",
    "AdsInsightsMetaBreakdowns",
    "AdsInsightsTimeBreakdown",
    "enumUtils",
    "first",
    "objectKeys",
    "objectValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = Object.freeze({
        AD: "ad_id",
        ADSET_ID: "adset_id",
        AD_NAME: "ad_name",
        ADSET_NAME: "adset_name",
      }),
      u = Object.freeze({
        ATTRIBUTION_SETTING: "attribution_setting",
        CONVERSION_COUNT: "conversion_count",
      }),
      c = function (n) {
        var t = [
          r("AdsInsightsActionGroups"),
          r("AdsInsightsBreakdown"),
          r("AdsInsightsDemographicsBreakdown"),
          r("AdsInsightsGeographyBreakdown"),
          r("AdsInsightsMetaBreakdowns"),
          r("AdsInsightsTimeBreakdown"),
          e,
          u,
        ];
        for (var a of t)
          if (r("objectValues")(a).includes(n))
            return o("enumUtils").assert(n, a);
        return (typeof n == "string" || s(0, 87738), "age");
      },
      d = function (t) {
        var e = {};
        return (
          r("objectKeys")(t).forEach(function (n) {
            var o = t[n];
            e[n] = r("first")(r("objectValues")(o));
          }),
          e
        );
      };
    ((l.ObjectBreakdowns = e),
      (l.AttributionSettingBreakdowns = u),
      (l.castStringtoBreakdown = c),
      (l.convertBreakdownDataToBarData = d));
  },
  98,
);
