__d(
  "AdsPECampaignGroupAvailableIDStore",
  [
    "AdsCampaignGroupDraftFragmentStore",
    "AdsPEBaseAvailableIDStore",
    "AdsPECampaignGroupSortLiveSelectors",
    "adsCampaignGroupValidationBootloadedErrorsSelectors",
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
            return "campaignGroup";
          }),
          (n.__getIDKey = function () {
            return "campaignGroupIDs";
          }),
          (n.__getObjectLevel = function () {
            return "campaign";
          }),
          (n.__getDraftFragmentStore = function () {
            return r("AdsCampaignGroupDraftFragmentStore");
          }),
          (n.__getSortInfoSelector = function () {
            return o("AdsPECampaignGroupSortLiveSelectors").getSortInfo;
          }),
          (n.__getCombinedErrorsForAdAccountSelector = function () {
            return o("adsCampaignGroupValidationBootloadedErrorsSelectors")
              .adsCampaignGroupValidationBootloadedErrorsSelectors
              .combinedErrorsForAdAccountSelector;
          }),
          (n.__handleDeletionStart = function (t) {
            t.campaignGroupIDs &&
              this.__updateDeletedIDList(t.campaignGroupIDs);
          }),
          t
        );
      })(r("AdsPEBaseAvailableIDStore")),
      s = new e();
    l.default = s;
  },
  98,
);
