__d(
  "deliveryInfoDynamicSelector",
  ["AdsDynamicAdObjectsSelectors", "adsCreateDynamicSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignSelector(
        "delivery_info",
      ),
      s = r("adsCreateDynamicSelector")(e);
    l.default = s;
  },
  98,
);
