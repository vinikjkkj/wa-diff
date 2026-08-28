__d(
  "AdsUEditorCampaignCBOToggleDayPartingReducerPlugin",
  [
    "AdsCampaignRecordAccessors",
    "AdsMutators",
    "AdsUEditorCampaignGroupToggleDayPartingActionFlux",
    "AdsUEditorCampaignReducerUtils",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {},
          function (e, t) {
            return t.useDayParting
              ? e
              : o("AdsMutators").mutateEach(e, t.campaignIDs, function (e) {
                  return r("AdsCampaignRecordAccessors").adset_schedule.set(
                    r("immutable").List(),
                    e,
                  );
                });
          },
          o("AdsUEditorCampaignGroupToggleDayPartingActionFlux").actionType,
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
