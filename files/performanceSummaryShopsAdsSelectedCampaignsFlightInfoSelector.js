__d(
  "performanceSummaryShopsAdsSelectedCampaignsFlightInfoSelector",
  [
    "$InternalEnum",
    "AdsDynamicAdObjectsSelectors",
    "AdsLoadObjectUtils",
    "LoadObject",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsMgmtCampaignSelectedIdsSelector",
    "adsUEditorCampaignIDsForSelectedCampaignGroupsSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o(
        "AdsDynamicAdObjectsSelectors",
      ).getAdsDynamicCampaignGroupSelector("delivery_status"),
      s = o("AdsDynamicAdObjectsSelectors").getAdsDynamicCampaignSelector(
        "delivery_status",
      ),
      u = o("AdsDynamicAdObjectsSelectors").getAdsDynamicAdgroupSelector(
        "delivery_status",
      ),
      c = r("adsCreateStoreSelector")(
        s.getStores(),
        function () {
          return function (e) {
            return s(e);
          };
        },
        { name: i.id + ".getCampaignDeliveryStatusStoreSelector" },
      ),
      d = n("$InternalEnum").Mirrored(["Midflight", "Postflight"]);
    function m(e) {
      if (e != null) {
        var t = e.status,
          n = e.substatuses;
        return (t === "active" || t === "inactive") &&
          !n.includes("in_learning_phase")
          ? d.Postflight
          : d.Midflight;
      }
      return null;
    }
    var p = r("adsCreateSelector")(
        [
          c,
          o("adsMgmtCampaignSelectedIdsSelector")
            .adsMgmtCampaignSelectedIdsSelector,
        ],
        function (t, n) {
          return o("AdsLoadObjectUtils")
            .all(
              n.map(function (e) {
                return t(e);
              }),
            )
            .mapValue(function (e) {
              return e.map(function (e) {
                return m(e);
              });
            });
        },
        { name: i.id + ".getSelectedCampaignsFlightInfoSelector" },
      ),
      _ = r("adsCreateSelector")(
        [
          c,
          r("adsUEditorInjectEditingCampaignGroupContext")(
            r("adsUEditorCampaignIDsForSelectedCampaignGroupsSelector"),
          ),
        ],
        function (t, n) {
          var e,
            a = (e = n.getValue()) != null ? e : [];
          return a.length === 0
            ? r("LoadObject").empty({ creatorModuleID: i.id })
            : o("AdsLoadObjectUtils")
                .all(
                  a.map(function (e) {
                    return t(e);
                  }),
                )
                .mapValue(function (e) {
                  return e.map(function (e) {
                    return m(e);
                  });
                });
        },
        { name: i.id + ".getSelectedCampaignGroupsFlightInfoSelector" },
      ),
      f = r("adsCreateSelector")(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          p,
          _,
        ],
        function (t, n, r) {
          return t === "campaign" ? r : n;
        },
        {
          name:
            i.id +
            ".performanceSummaryShopsAdsSelectedCampaignsFlightInfoSelector",
        },
      );
    ((l.FlightType = d),
      (l.performanceSummaryShopsAdsSelectedCampaignsFlightInfoSelector = f));
  },
  98,
);
