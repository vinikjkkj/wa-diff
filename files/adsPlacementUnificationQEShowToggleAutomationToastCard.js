__d(
  "adsPlacementUnificationQEShowToggleAutomationToastCard",
  [
    "AdsAddToastCardAction",
    "AdsUEditorAdvantageStateContent",
    "AdsUEditorPreflightRecommendationHubQEUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { toastCardOffset: { bottom: "x1wb5xmz", $$css: !0 } },
      s = function () {
        var t = {
          id: "placement-toggle-automation-opt-in-toast",
          "data-testid": "placement-toggle-automation-opt-in-toast",
          cardType: "success",
          canDismiss: !0,
          header: o("AdsUEditorAdvantageStateContent")
            .ADVANTAGE_PLACEMENT_TOAST_HEADING,
          bodyText: o(
            "AdsUEditorAdvantageStateContent",
          ).getAdvantagePlacementToastBody(),
          dismissTimer: 5e3,
          xstyle: o(
            "AdsUEditorPreflightRecommendationHubQEUtils",
          ).isPassingAdsToastCardVisibilityImprovementGK()
            ? e.toastCardOffset
            : {},
        };
        r("AdsAddToastCardAction").dispatch(
          { toastCard: t },
          {
            line: "44",
            module: "adsPlacementUnificationQEShowToggleAutomationToastCard.js",
            moduleID: i.id,
          },
        );
      },
      u = s;
    l.default = u;
  },
  98,
);
