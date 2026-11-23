__d(
  "AdsStatusPillScaleGoodCampaignBoostAgainPopover.entrypoint",
  [
    "AdsStatusPillScaleGoodCampaignBoostAgainPopoverQuery$Parameters",
    "JSResourceForInteraction",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            queryRef: {
              parameters: r(
                "AdsStatusPillScaleGoodCampaignBoostAgainPopoverQuery$Parameters",
              ),
              variables: babelHelpers.extends({}, t),
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "AdsStatusPillScaleGoodCampaignBoostAgainPopover.react",
      ).__setRef("AdsStatusPillScaleGoodCampaignBoostAgainPopover.entrypoint"),
    };
    l.default = e;
  },
  98,
);
