__d(
  "adsPECrepeEditorStepIndexSelector",
  [
    "AdsObjectTypes",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsPECrepeEditorStepsSelector",
    "adsUEditorInjectEditingCampaignGroupContext",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("adsCreateDynamicSelector")(
        (e = r("adsCreateSelector"))(
          [
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                return t;
              },
              { name: i.id },
            ),
            r("adsUEditorInjectEditingCampaignGroupContext")(
              o("adsPECrepeEditorStepsSelector").adsPECrepeEditorStepsSelector,
            ),
          ],
          function (t, n) {
            return n.findIndex(function (e) {
              return e.includes(t);
            });
          },
          { name: i.id },
        ),
      ),
      u = e(
        [s],
        function (t) {
          return t(r("AdsObjectTypes").ADGROUP);
        },
        { name: i.id + ".adsPEAdgroupCrepeEditorStepIndexSelector" },
      ),
      c = e(
        [s],
        function (t) {
          return t(r("AdsObjectTypes").CAMPAIGN);
        },
        { name: i.id + ".adsPECampaignCrepeEditorStepIndexSelector" },
      ),
      d = e(
        [s],
        function (t) {
          return t(r("AdsObjectTypes").CAMPAIGN_GROUP);
        },
        { name: i.id + ".adsPECampaignGroupCrepeEditorStepIndexSelector" },
      );
    ((l.adsPECrepeGetEditorStepIndexForObjectTypeSelector = s),
      (l.adsPEAdgroupCrepeEditorStepIndexSelector = u),
      (l.adsPECampaignCrepeEditorStepIndexSelector = c),
      (l.adsPECampaignGroupCrepeEditorStepIndexSelector = d));
  },
  98,
);
