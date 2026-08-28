__d(
  "AdsTargetFrequencyInAuctionInitializeCampaignPredictionReducerPlugin",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsDataAtom",
    "AdsFrequencyControlEditorUtils",
    "AdsTargetFrequencyInAuctionInitializeCampaignPredictionActionFlux",
    "AdsUEditorCampaignGroupAdObjectsUtils",
    "AdsUEditorCampaignReducerUtils",
    "AdsUEditorCampaignSelectors",
    "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
    "DateTime",
    "adsUEditorAccountSelector",
    "first",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")(
        "AdsUEditorCampaignTargetFrequencyInAuctionGeneratePredictionAction",
      ).__setRef(
        "AdsTargetFrequencyInAuctionInitializeCampaignPredictionReducerPlugin",
      ),
      u = {
        reduce: o("AdsUEditorCampaignReducerUtils").createReducer(
          {
            account: r("adsUEditorAccountSelector"),
            campaignIDToCampaignGroupMap: o(
              "AdsUEditorCampaignSelectors",
            ).adObjectsList.mapTransform(
              o("AdsUEditorCampaignGroupAdObjectsUtils").getCampaignGroup,
            ),
          },
          function (t, n, a) {
            var i = a.account,
              l = a.campaignIDToCampaignGroupMap,
              u = function (u) {
                var a,
                  c,
                  d,
                  m,
                  p,
                  _ = (a = t.get(u)) == null ? void 0 : a.getValue(),
                  f = l.get(u),
                  g = _ == null ? void 0 : _.frequency_control_specs,
                  h = r("first")(g != null ? g : []);
                if (
                  _ == null ||
                  f == null ||
                  f.objective !== r("AdsAPIObjectives").OUTCOME_AWARENESS ||
                  _.optimization_goal !== r("AdsAPIOptimizationGoals").REACH ||
                  h == null ||
                  h.get("type") !== "TARGET"
                )
                  return 1;
                var y = i.timezone_id,
                  C =
                    _.start_time != null
                      ? r("DateTime").fromISOString(_.start_time, y).toDate()
                      : null,
                  b =
                    _.end_time != null
                      ? r("DateTime").fromISOString(_.end_time, y).toDate()
                      : null,
                  v =
                    _.lifetime_budget != null
                      ? Number(_.lifetime_budget)
                      : null,
                  S = o(
                    "AdsFrequencyControlEditorUtils",
                  ).getUniformMaxFrequency(g),
                  R = o(
                    "AdsFrequencyControlEditorUtils",
                  ).getUniformFrequencyInterval(g),
                  L =
                    _.targeting != null
                      ? [JSON.parse(JSON.stringify(_.targeting))]
                      : [],
                  E = o(
                    "AdsUEditorCampaignTargetFrequencyInAuctionUtils",
                  ).getPredictionParamsForTargetFrequencyInAuction(
                    i.account_id,
                    v,
                    i.currency,
                    (c =
                      (d = _.promoted_object) == null ? void 0 : d.page_id) !=
                      null
                      ? c
                      : null,
                    (m =
                      (p = _.promoted_object) == null
                        ? void 0
                        : p.instagram_profile_id) != null
                      ? m
                      : null,
                    f.objective,
                    _.optimization_goal,
                    C,
                    b,
                    S,
                    R,
                    y,
                    f.id,
                    L,
                    null,
                    null,
                  );
                E != null &&
                  (e || (e = r("AdsDataAtom"))).addPostDispatchCallback(
                    function () {
                      s.onReadyImmediately(function (e) {
                        e.dispatch({
                          campaignIDs: [u],
                          hostID: n.hostID,
                          params: E,
                        });
                      });
                    },
                  );
              };
            for (var c of n.campaignIDs) u(c);
            return t;
          },
          o("AdsTargetFrequencyInAuctionInitializeCampaignPredictionActionFlux")
            .actionType,
        ),
      },
      c = u;
    l.default = c;
  },
  98,
);
