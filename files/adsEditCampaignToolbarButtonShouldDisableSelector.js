__d(
  "adsEditCampaignToolbarButtonShouldDisableSelector",
  [
    "AdsCampaignBulkStore",
    "adsCreateSelector",
    "adsUEditorSelectedCampaignIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          r("AdsCampaignBulkStore").getDerivedRawSpecs,
          r("adsUEditorSelectedCampaignIDsSelector"),
        ],
        function (t, n) {
          return (
            t.some(function (e) {
              return e.isLocked;
            }) || n.length === 0
          );
        },
        { name: i.id + ".adsEditCampaignToolbarButtonShouldDisableSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
