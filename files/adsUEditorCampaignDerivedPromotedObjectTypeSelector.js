__d(
  "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
  [
    "AdsAPICampaignRecordUtils",
    "AdsPromotedObjectTypeUIProvider",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectorUtils",
    "adsCreateSelector",
    "adsUEditorAdObjectsForSelectedCampaignsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorAdObjectsForSelectedCampaignsSelector"),
          r("AdsPromotedObjectTypeUIProvider").toFluxSelector(),
        ],
        o("AdsUEditorSelectorUtils").memoizeBulkAggregation(function (e, t) {
          return e.map(function (e) {
            var n,
              a = e.campaign,
              i = e.campaignGroup,
              l = t.get(a.id);
            return (
              l === r("AdsPromotedObjectTypes").LIVE_VIDEO &&
                (i == null || (n = i.promoted_object) == null
                  ? void 0
                  : n.live_video_destination) !== "INSTAGRAM" &&
                (l = void 0),
              o("AdsAPICampaignRecordUtils").getDerivedPromotedObjectType(
                a,
                i,
                l,
              )
            );
          });
        }),
        { name: i.id + ".adsUEditorCampaignDerivedPromotedObjectTypeSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
