__d(
  "adsMgmtCampaignGroupSelectionSelector",
  ["AdsMgmtCampaignGroupSelectionProvider", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtCampaignGroupSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.selection;
          return e;
        },
        { name: i.id + ".adsMgmtCampaignGroupSelectionSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
