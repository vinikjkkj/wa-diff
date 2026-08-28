__d(
  "AdsDeliveryFragmentationModalProviderPlugin",
  ["AdsDeliveryFragmentationModalPages"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        initialState: {
          adgroupIDsToDuplicate: new Set(),
          campaignIDs: [],
          campaignIDToPublish: "",
          campaignIDsToPause: [],
          currentStep: o("AdsDeliveryFragmentationModalPages")
            .AdsDeliveryFragmentationModalPagesType.LANDING_PAGE,
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
