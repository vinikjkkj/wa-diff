__d(
  "getAdObjectDeliveryStatusSelector",
  [
    "AdsDynamicAdObjectsSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelectorsByLevel",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelectorsByLevel")(function (e) {
      var t;
      e: {
        if (e === "campaign") {
          t = o(
            "AdsDynamicAdObjectsSelectors",
          ).getAdsDynamicCampaignGroupSelector("delivery_status");
          break e;
        }
        if (e === "ad_set") {
          t = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignSelector(
            "delivery_status",
          );
          break e;
        }
        if (e === "ad") {
          t = o("AdsDynamicAdObjectsSelectors").getAdsDynamicAdgroupSelector(
            "delivery_status",
          );
          break e;
        }
        throw r("err")("Unexpected ad object level for delivery status " + e);
      }
      return r("adsCreateDynamicSelector")(t);
    });
    l.default = e;
  },
  98,
);
