__d(
  "AdsUEditorCampaignSetDraftTestReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSetFreeformTestActionFlux",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            var n = -1;
            return o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
              if ((n++, n < t.studyCellIDs.length)) {
                var o = e;
                return (
                  (o = r(
                    "AdsCampaignRecordAccessors",
                  ).include_in_ad_study_id.set(t.studyID, o)),
                  (o = r(
                    "AdsCampaignRecordAccessors",
                  ).include_in_ad_study_cell_id.set(t.studyCellIDs[n], o)),
                  o
                );
              }
              return e;
            });
          },
          o("AdsUEditorCampaignSetFreeformTestActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
