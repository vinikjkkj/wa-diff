__d(
  "adsUEditorCampaignCTXBudgetDurationRecommendationSelectors",
  [
    "AdsAPIObjectives",
    "AdsCampaignRecordAccessors",
    "AdsPromotedObjectTypes",
    "AdsUEditorSelectors",
    "adsCreateSelector",
    "adsGetUniformValueSelector",
    "adsIsCreationPackageEnabledSelector",
    "adsUEditorAccountSelector",
    "adsUEditorCampaignDerivedPromotedObjectTypeSelector",
    "adsUEditorCampaignGroupHasBudgetGuardedSelector",
    "adsUEditorSelectedCampaignIDsSelector",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = (u = r("adsGetUniformValueSelector"))(
        (e = o("AdsUEditorSelectors")).campaign.bulkByAccessor(
          (s = r("AdsCampaignRecordAccessors")).destination_type.get,
        ),
        null,
      );
    function d(e) {
      if (r("isTruthy")(e)) return new Date(e);
    }
    var m = r("adsCreateSelector")(
        [u(e.campaign.bulkByAccessor(s.start_time.get))],
        d,
        { name: i.id + ".startDateSelector" },
      ),
      p = r("adsCreateSelector")(
        [
          r("adsUEditorAccountSelector"),
          r("adsUEditorCampaignGroupHasBudgetGuardedSelector"),
          c,
          u(
            e.campaignGroup.bulkByAccessorToJS(function (e) {
              return e.objective;
            }),
            r("AdsAPIObjectives").NONE,
          ),
          u(e.campaign.bulkByAccessor(s.optimization_goal.get)),
          u(e.campaign.bulkByAccessor(s.promoted_object.page_id.get)),
          u(
            r("adsUEditorCampaignDerivedPromotedObjectTypeSelector"),
            r("AdsPromotedObjectTypes").NONE,
          ),
          r("adsUEditorSelectedCampaignIDsSelector"),
          u(e.campaign.bulkByAccessor(s.start_time.get)),
          u(e.campaign.bulkByAccessor(s.end_time.get)),
          o("adsIsCreationPackageEnabledSelector")
            .adsIsCreationPackageEnabledSelector,
        ],
        function (t, n, r, o, a, i, l, s, u, c, d) {
          return _(t, n, r, o, a, i, l, s, u, c, d);
        },
        {
          name: i.id + ".shouldEnableCTXBudgetDurationDefaultQEParamsSelector",
        },
      );
    function _(e, t, n, r, o, a, i, l, s, u, c) {
      return {
        account: e,
        destinationType: n,
        isCBOEnabled: t,
        objective: r,
        optimizationGoal: o,
        pageID: a,
        promotedObjectType: i,
        selectedCampaignIDs: l,
        startTime: s,
        endTime: u,
        isCreationPackageEnabled: c,
      };
    }
    function f(e, t, n, r, o, a, i, l, s, u, c) {
      return {
        account: e,
        destinationType: n,
        isCBOEnabled: t,
        objective: r,
        optimizationGoal: o,
        pageID: a,
        promotedObjectType: i,
        selectedCampaignIDs: l,
        startTime: s,
        endTime: u,
        isCreationPackageEnabled: c,
      };
    }
    ((l.destinationTypeSelector = c),
      (l.getStartDateFromStartTime = d),
      (l.startDateSelector = m),
      (l.shouldEnableCTXBudgetDurationDefaultQEParamsSelector = p),
      (l.shouldEnableCTXBudgetDurationDefaultQEParamsRelay = f));
  },
  98,
);
