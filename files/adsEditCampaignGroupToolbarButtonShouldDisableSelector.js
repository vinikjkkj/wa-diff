__d(
  "adsEditCampaignGroupToolbarButtonShouldDisableSelector",
  [
    "AdsCampaignGroupBulkStore",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsCampaignGroupBulkStore").getDerivedRawSpecs,
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
        ],
        function (t, n) {
          return (
            t.some(function (e) {
              return e.isLocked;
            }) || n.length === 0
          );
        },
        {
          name:
            i.id + ".adsEditCampaignGroupToolbarButtonShouldDisableSelector",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
