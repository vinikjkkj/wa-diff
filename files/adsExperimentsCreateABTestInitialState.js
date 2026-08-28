__d(
  "adsExperimentsCreateABTestInitialState",
  [
    "AdsTALStudyType",
    "adsExperimentsEndStudyCriteriaInitialState",
    "adsExperimentsScenarioTestInitialState",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        numCells: 2,
        endStudyCriteria: r("adsExperimentsEndStudyCriteriaInitialState"),
        endTime: null,
        startTime: null,
        testName: null,
        fieldsModifiedByUser: (e = r("immutable")).Set(),
        budget: null,
        budgetMode: null,
        keyMetrics: e.List(["cost_per_result"]),
        errors: e.Map(),
        createTestError: null,
        validators: e.Map(),
        cellData: e.List.of(
          {
            adObjectFragments: e.List(),
            campaignGroupName: null,
            scenarioTestState: r("adsExperimentsScenarioTestInitialState"),
          },
          {
            adObjectFragments: null,
            campaignGroupName: null,
            scenarioTestState: r("adsExperimentsScenarioTestInitialState"),
          },
        ),
        question: "CAMPAIGN_COMPARISON",
        studyType: o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2,
        useCampaignBudget: !1,
        studyLevel: null,
        shouldAutosaveAudience: !1,
      },
      u = s;
    l.default = u;
  },
  98,
);
