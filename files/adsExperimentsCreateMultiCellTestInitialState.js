__d(
  "adsExperimentsCreateMultiCellTestInitialState",
  [
    "AdsTALStudyType",
    "LoadObject",
    "adsExperimentsEndStudyCriteriaInitialState",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        cells: (e = r("immutable")).List(),
        doesStudyContainIOS14AdEntitiesLoader: r("LoadObject").loading({
          creatorModuleID: i.id,
        }),
        endStudyCriteria: r("adsExperimentsEndStudyCriteriaInitialState"),
        endTime: null,
        errors: e.Map(),
        fieldsModifiedByUser: e.Set(),
        isFastStartEligible: !1,
        keyMetrics: e.List(["cost_per_result"]),
        question: "CAMPAIGN_COMPARISON",
        startTime: null,
        studyLevel: "campaign",
        studyType: o("AdsTALStudyType").AdStudyTypeName.SPLIT_TEST_V2,
        testName: null,
        validators: e.Map(),
        enableUpperFunnelMetric: !0,
        testVariable: null,
        shouldAutosaveAudience: !0,
      },
      u = s;
    l.default = u;
  },
  98,
);
