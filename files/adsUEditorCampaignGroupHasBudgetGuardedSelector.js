__d(
  "adsUEditorCampaignGroupHasBudgetGuardedSelector",
  [
    "AdsAPICampaignGroupRecordUtils",
    "AdsUEditorCampaignGroupSelectors",
    "adsCreateSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.everyPlainObject(
            o("AdsAPICampaignGroupRecordUtils").hasBudget,
          ),
          o("AdsUEditorCampaignGroupSelectors").campaignGroups.somePlainObject(
            o("AdsAPICampaignGroupRecordUtils").hasBudget,
          ),
        ],
        function (t, n) {
          return t && n;
        },
        { name: i.id + ".adsUEditorCampaignGroupHasBudgetGuardedSelector" },
      ),
      s = e;
    l.default = s;
  },
  98,
);
