__d(
  "currentLevelBranchSelector",
  [
    "adsCampaignStructureCurrentLevelSelector",
    "adsCreateBranchSelector",
    "adsPECrepeIsPackageSelector",
    "adsUEditorCrepeCurrentLevelSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateBranchSelector")(
      r("adsPECrepeIsPackageSelector"),
      r("adsUEditorInjectEditingCampaignGroupContext")(
        r("adsUEditorCrepeCurrentLevelSelector"),
      ),
      r("adsCampaignStructureCurrentLevelSelector"),
    );
    l.default = e;
  },
  98,
);
