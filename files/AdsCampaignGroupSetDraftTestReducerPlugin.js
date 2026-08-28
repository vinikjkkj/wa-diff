__d(
  "AdsCampaignGroupSetDraftTestReducerPlugin",
  [
    "AdsCampaignGroupRecordAccessors",
    "AdsMutators",
    "adsCampaignGroupDraftFragmentCreateReducer",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsCampaignGroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            var n = -1;
            return o("AdsMutators").mutateEach(
              e,
              t.campaignGroupIDs,
              function (e) {
                if ((n++, n < t.studyCellIDs.length)) {
                  var o = e;
                  return (
                    (o = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).include_in_ad_study_id.set(t.studyID, o)),
                    (o = r(
                      "AdsCampaignGroupRecordAccessors",
                    ).include_in_ad_study_cell_id.set(t.studyCellIDs[n], o)),
                    o
                  );
                }
                return e;
              },
            );
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
