__d(
  "adsCampaignGroupBulkEditValidationErrorSpecSelector",
  [
    "AdsCampaignGroupBulkEditCrossValidationStore",
    "AdsCampaignGroupBulkEditValidationStore",
    "adsCreateKeyedStoreSelector",
    "distinctArrayBy",
    "observeRuntimeType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateKeyedStoreSelector")(
        [
          r("AdsCampaignGroupBulkEditValidationStore"),
          r("AdsCampaignGroupBulkEditCrossValidationStore"),
        ],
        {
          getKey: function (t) {
            return t;
          },
          getInputData: function (t) {
            r("observeRuntimeType")(
              t,
              "adsCampaignGroupBulkEditValidationErrorSpecSelector.getInputData.id",
            );
            var e = r("AdsCampaignGroupBulkEditValidationStore").getAllErrors([
                t,
              ]),
              n = r(
                "AdsCampaignGroupBulkEditCrossValidationStore",
              ).getAllErrors([t]);
            return {
              campaignGroupValidationErrors: e,
              campaignGroupCrossValidationErrors: n,
            };
          },
          computeResult: function (t, n) {
            var e = n.campaignGroupCrossValidationErrors,
              o = n.campaignGroupValidationErrors;
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
