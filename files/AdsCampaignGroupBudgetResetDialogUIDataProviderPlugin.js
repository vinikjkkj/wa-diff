__d(
  "AdsCampaignGroupBudgetResetDialogUIDataProviderPlugin",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Record({
        hostID: null,
        mode: null,
        resetFields: r("immutable").List(),
        onConfirm: null,
      }),
      s = function () {
        return e();
      },
      u = { initialState: s() },
      c = u;
    l.default = c;
  },
  98,
);
