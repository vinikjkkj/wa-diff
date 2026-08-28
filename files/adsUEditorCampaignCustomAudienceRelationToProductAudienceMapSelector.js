__d(
  "adsUEditorCampaignCustomAudienceRelationToProductAudienceMapSelector",
  [
    "AdsCustomAudienceRelationToProductAudienceProvider",
    "adsCreateSelector",
    "adsGetCustomAudienceRelationToProductAudience",
    "adsUEditorSelectedCampaignsSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("adsUEditorSelectedCampaignsSelector"),
          r(
            "AdsCustomAudienceRelationToProductAudienceProvider",
          ).toFluxSelector(),
        ],
        function (t, n) {
          return r("immutable").Map(
            t.map(function (e) {
              return [
                e.id,
                r("adsGetCustomAudienceRelationToProductAudience")(e, n),
              ];
            }),
          );
        },
        {
          name:
            i.id +
            ".adsUEditorCampaignCustomAudienceRelationToProductAudienceMapSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
