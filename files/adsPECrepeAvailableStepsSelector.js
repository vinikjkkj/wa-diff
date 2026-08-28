__d(
  "adsPECrepeAvailableStepsSelector",
  [
    "adsCreateBranchSelector",
    "adsCreateSelector",
    "adsPECrepeAvailableStepsSelectorUtils",
    "adsPECrepeEditorStepsSelector",
    "adsUEditorAdgroupIDsForSelectedCampaignGroupsSelector_slow",
    "adsUEditorCampaignIDsForSelectedCampaignGroupsSelector",
    "adsUEditorSelectedCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("adsCreateSelector")(
        [
          o("adsPECrepeEditorStepsSelector").adsPECrepeEditorStepsSelector,
          o("adsUEditorSelectedCampaignGroupIDsSelector")
            .adsUEditorSelectedCampaignGroupIDsSelector,
          r("adsUEditorCampaignIDsForSelectedCampaignGroupsSelector"),
          r("adsUEditorAdgroupIDsForSelectedCampaignGroupsSelector_slow"),
        ],
        function (t, n, r, a) {
          return o(
            "adsPECrepeAvailableStepsSelectorUtils",
          ).adsPECrepeAvailableSteps(t, n, r.getValue(), a.getValue());
        },
        { name: i.id + ".adsPECrepeAvailableStepsSelector" },
      ),
      s = r("adsCreateBranchSelector")(
        r("adsCreateSelector")(
          [o("adsPECrepeEditorStepsSelector").adsPECrepeEditorStepsSelector],
          function (t) {
            return t.length > 0;
          },
          { name: i.id },
        ),
        e,
        r("adsCreateSelector")(
          [],
          function () {
            return 0;
          },
          { name: i.id },
        ),
      );
    l.default = s;
  },
  98,
);
