__d(
  "deliveryStatusForCampaignSelector",
  ["AdsMgmtCampaignDynamicStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsMgmtCampaignDynamicStore"),
      function (e) {
        return r("AdsMgmtCampaignDynamicStore").getSingleField(
          e,
          "delivery_status",
        );
      },
    );
    l.default = e;
  },
  98,
);
