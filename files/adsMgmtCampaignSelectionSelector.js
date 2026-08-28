__d(
  "adsMgmtCampaignSelectionSelector",
  ["AdsMgmtCampaignSelectionProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtCampaignSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.selection;
          return e;
        },
        { name: i.id + ".adsMgmtCampaignSelectionSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
