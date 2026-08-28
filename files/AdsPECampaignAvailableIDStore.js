__d(
  "AdsPECampaignAvailableIDStore",
  [
    "AdsCampaignDraftFragmentStore",
    "AdsPEBaseAvailableIDStore",
    "AdsPECampaignSortLiveSelectors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.__getAdLevel = function () {
            return "campaign";
          }),
          (n.__getIDKey = function () {
            return "campaignIDs";
          }),
          (n.__getObjectLevel = function () {
            return "ad_set";
          }),
          (n.__getDraftFragmentStore = function () {
            return r("AdsCampaignDraftFragmentStore");
          }),
          (n.__getSortInfoSelector = function () {
            return o("AdsPECampaignSortLiveSelectors").getSortInfo;
          }),
          (n.__getCombinedErrorsForAdAccountSelector = function () {
            return null;
          }),
          (n.__handleDeletionStart = function (t) {
            t.campaignIDs && this.__updateDeletedIDList(t.campaignIDs);
          }),
          t
        );
      })(r("AdsPEBaseAvailableIDStore")),
      s = new e();
    l.default = s;
  },
  98,
);
