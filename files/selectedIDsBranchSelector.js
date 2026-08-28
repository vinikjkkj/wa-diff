__d(
  "selectedIDsBranchSelector",
  [
    "adsCampaignStructureSelectedIDsSelector",
    "adsCreateBranchSelector",
    "adsPECrepeIsPackageSelector",
    "adsUEditorCrepeCurrentLevelIDsSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateBranchSelector")(
      r("adsPECrepeIsPackageSelector"),
      r("adsUEditorInjectEditingCampaignGroupContext")(
        r("adsUEditorCrepeCurrentLevelIDsSelector"),
      ),
      r("adsCampaignStructureSelectedIDsSelector"),
    );
    l.default = e;
  },
  98,
);
