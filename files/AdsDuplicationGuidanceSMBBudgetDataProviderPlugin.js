__d(
  "AdsDuplicationGuidanceSMBBudgetDataProviderPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        initialState: {
          adoptedSMBAdObjectIDs: new Set(),
          campaignGroupIDs: [],
          campaignIDs: [],
          isACB: !1,
          isDailyBudget: null,
          originalToDuplicateIDsMap: new Map(),
          predictedBudgetArray: [],
          predictedConvLiftsPctArray: [],
          recommendedBudget: null,
          recommendedBudgetConvLiftPct: null,
          recommendedBudgetSource: null,
          showSMBBudgetModal: !1,
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
