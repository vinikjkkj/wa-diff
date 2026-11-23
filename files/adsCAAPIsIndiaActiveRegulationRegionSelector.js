__d(
  "adsCAAPIsIndiaActiveRegulationRegionSelector",
  [
    "AdsBuyingTypes",
    "AdsReachFrequencyFlowStore",
    "adsCAAPLocationUtils",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupPlainObjectsSelector",
    "adsUEditorSelectedCampaignPlainObjectsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
      [
        r("adsUEditorSelectedCampaignGroupPlainObjectsSelector"),
        r("adsUEditorSelectedCampaignPlainObjectsSelector"),
        r("AdsReachFrequencyFlowStore").getStateSelector,
      ],
      function (t, n, a) {
        var e = n.reduce(function (e, n) {
          var i;
          if (
            ((i = t.find(function (e) {
              return e.id === n.campaign_id;
            })) == null
              ? void 0
              : i.buying_type) === r("AdsBuyingTypes").RESERVED
          ) {
            var l, s;
            return (
              e.push.apply(
                e,
                o("adsCAAPLocationUtils").getRegulationsForIndiaGeoLocation(
                  (l = a(n.id)) == null || (l = l.targeting) == null
                    ? void 0
                    : l.geo_locations,
                  (s = a(n.id)) == null || (s = s.targeting) == null
                    ? void 0
                    : s.excluded_geo_locations,
                ),
              ),
              e
            );
          }
          return (
            e.push.apply(
              e,
              o("adsCAAPLocationUtils").getRegulationsForIndiaGeoLocation(
                n.targeting.geo_locations,
                n.targeting.excluded_geo_locations,
              ),
            ),
            e
          );
        }, []);
        return e.includes("INDIA_FINSERV");
      },
      { name: i.id + ".adsCAAPIsIndiaActiveRegulationRegionSelector" },
    );
    l.adsCAAPIsIndiaActiveRegulationRegionSelector = e;
  },
  98,
);
