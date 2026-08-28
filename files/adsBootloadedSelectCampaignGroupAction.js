__d(
  "adsBootloadedSelectCampaignGroupAction",
  ["AdsPESelectionClickTypes", "JSResource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("JSResource").loadAll(
        [
          r("JSResource")("AdsPESelectionActions").__setRef(
            "adsBootloadedSelectCampaignGroupAction",
          ),
        ],
        function (t) {
          t.clickCampaignGroupID(e, r("AdsPESelectionClickTypes").SINGLE);
        },
      );
    }
    l.default = e;
  },
  98,
);
