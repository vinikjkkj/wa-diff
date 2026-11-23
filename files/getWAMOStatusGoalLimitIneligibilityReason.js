__d(
  "getWAMOStatusGoalLimitIneligibilityReason",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsAPIOptimizationGoals",
    "AdsPlacementIneligibilityReason",
    "AdsUniqueMetricsID",
    "WAMOLabelStrings",
    "WAMOStatusAdsManagerUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      switch (
        o("WAMOStatusAdsManagerUtils").getWAMOStatusGoalLimitViolation(e)
      ) {
        case "CONVERSION_LOCATION":
          return e.optimizationGoal ===
            r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
            ? o(
                "AdsPlacementIneligibilityReason",
              ).createWAMOStatusConversionLocationReason(e.objective)
            : o("AdsPlacementIneligibilityReason").createCustomReason(
                s._(/*BTDS*/ "", [
                  s._param(
                    "conversion location",
                    u.jsx("strong", {
                      children: o("WAMOLabelStrings").CONVERSION_LOCATION,
                    }),
                  ),
                  s._param(
                    "performance goal",
                    u.jsx("strong", {
                      children:
                        o("WAMOLabelStrings").MAXIMIZE_VALUE_OF_CONVERSIONS,
                    }),
                  ),
                  s._param(
                    "learn more link",
                    u.jsx(r("AHGHelpTrayLink2.react"), {
                      helpCenterID:
                        o("AdsUniqueMetricsID").ABOUT_ADS_IN_WHATSAPP_STATUS,
                      children: s._(/*BTDS*/ ""),
                    }),
                  ),
                ]),
              );
        case "CONVERSION_EVENT":
          return o("AdsPlacementIneligibilityReason").createCustomReason(
            s._(/*BTDS*/ "", [
              s._param(
                "conversion event",
                u.jsx("strong", {
                  children: o("WAMOLabelStrings").CONVERSION_EVENT,
                }),
              ),
              s._param(
                "purchase",
                u.jsx("strong", {
                  children: o("WAMOLabelStrings").PURCHASE_LOWERCASE,
                }),
              ),
            ]),
          );
        case null:
        case void 0:
          return null;
      }
    }
    l.default = c;
  },
  226,
);
