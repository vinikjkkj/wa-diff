__d(
  "AdsCampaignGroupBudgetBulkEditBidStrategyLegacyInstantPublishValidationStore",
  [
    "invariant",
    "AdsCampaignGroupBudgetBulkEditBidStrategyValidationBaseStore",
    "AdsCampaignGroupBulkEditStore",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getBulkEditDataStore = function () {
            return r("AdsCampaignGroupBulkEditStore");
          }),
          (n.__getDraftFragmentStore = function () {
            s(0, 1537, this.constructor.name, "__getDraftFragmentStore");
          }),
          t
        );
      })(r("AdsCampaignGroupBudgetBulkEditBidStrategyValidationBaseStore")),
      u = new e();
    l.default = u;
  },
  98,
);
