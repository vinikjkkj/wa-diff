__d(
  "adsCampaignBulkEditValidationErrorSpecSelector",
  [
    "AdsCampaignBulkEditCrossValidationStore",
    "AdsCampaignBulkEditValidationStore",
    "adsCreateKeyedStoreSelector",
    "distinctArrayBy",
    "observeRuntimeType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateKeyedStoreSelector")(
        [
          r("AdsCampaignBulkEditValidationStore"),
          r("AdsCampaignBulkEditCrossValidationStore"),
        ],
        {
          getKey: function (t) {
            return t;
          },
          getInputData: function (t) {
            r("observeRuntimeType")(
              t,
              "adsCampaignBulkEditValidationErrorSpecSelector.getInputData.id",
            );
            var e = r("AdsCampaignBulkEditValidationStore").getAllErrors([t]),
              n = r("AdsCampaignBulkEditCrossValidationStore").getAllErrors([
                t,
              ]);
            return {
              campaignValidationErrors: e,
              camapaignValidationCrossErrors: n,
            };
          },
          computeResult: function (t, n) {
            var e = n.camapaignValidationCrossErrors,
              o = n.campaignValidationErrors;
            return r("distinctArrayBy")([].concat(o, e), function (e) {
              return e.key;
            });
          },
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
