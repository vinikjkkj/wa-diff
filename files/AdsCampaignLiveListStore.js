__d(
  "AdsCampaignLiveListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsCampaignListBatchLoadErrorActionFlux",
    "AdsCampaignListBatchLoadedActionFlux",
    "AdsCampaignLiveListDataManager",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftCurrentDraftLoadedDataActionFlux",
    "AdsDraftDraftDiscardedDataActionFlux",
    "AdsDraftDraftSetCurrentDraftSuccessDataActionFlux",
    "AdsLoadState_LEGACY",
    "AdsPEExportDataPreloadedActionFlux",
    "adsDraftGetIDsToInvalidateAfterPublish",
    "adsDraftIsApplicationIDPowerEditor",
    "naturalComparator",
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
          (n.getDataManager = function () {
            return r("AdsCampaignLiveListDataManager");
          }),
          (n.getForCampaignGroups = function (t, n) {
            var e = this,
              o = this.__updateLoadingFor(n);
            o.length > 0 &&
              r("AdsCampaignLiveListDataManager").loadForCampaignGroups(t, o);
            var a = new Map();
            return (
              n.forEach(function (t) {
                a.set(t, e.getCachedFor(t));
              }),
              a
            );
          }),
          (n.getForCampaignGroup = function (t, n) {
            return (this.getForCampaignGroups(t, [n]), this.getCachedFor(n));
          }),
          (n.getForAccount = function (t) {
            var e = this.__updateLoadingFor([t]);
            return (
              e.length === 1 &&
                r("AdsCampaignLiveListDataManager").loadForAccount(t),
              this.getCachedFor(t)
            );
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsCampaignListBatchLoadErrorActionFlux").actionType,
              o("AdsCampaignListBatchLoadedActionFlux").actionType,
              o("AdsDraftDraftCloseDataActionFlux").actionType,
              o("AdsDraftDraftCurrentDraftLoadedDataActionFlux").actionType,
              o("AdsDraftDraftDiscardedDataActionFlux").actionType,
              o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux").actionType,
              o("AdsPEExportDataPreloadedActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            if (r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID))
              switch (n.actionType) {
                case o("AdsCampaignListBatchLoadedActionFlux").actionType:
                  n.responses.forEach(function (t, n) {
                    e.__handleDataFor(n, t, r("AdsLoadState_LEGACY").LOADED);
                  });
                  break;
                case o("AdsCampaignListBatchLoadErrorActionFlux").actionType:
                  n.responses.forEach(function (t, n) {
                    e.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                  });
                  break;
                case o("AdsPEExportDataPreloadedActionFlux").actionType:
                  this.$AdsCampaignLiveListStore$p_1(n.childMap.campaign);
                  break;
                case o("AdsDraftDraftCloseDataActionFlux").actionType:
                  this.$AdsCampaignLiveListStore$p_2(n);
                  break;
                case o("AdsDraftDraftCurrentDraftLoadedDataActionFlux")
                  .actionType:
                case o("AdsDraftDraftDiscardedDataActionFlux").actionType:
                case o("AdsDraftDraftSetCurrentDraftSuccessDataActionFlux")
                  .actionType:
                  this.$AdsCampaignLiveListStore$p_3();
                  break;
              }
          }),
          (n.getSortKey = function () {
            return "name";
          }),
          (n.compare = function (t, n) {
            return r("naturalComparator")(t, n);
          }),
          (n.$AdsCampaignLiveListStore$p_1 = function (t) {
            var e = this;
            t.forEach(function (t, n) {
              e.__handleDataFor(n, t, r("AdsLoadState_LEGACY").LOADED);
            });
          }),
          (n.$AdsCampaignLiveListStore$p_2 = function (t) {
            var e = this,
              n = r("adsDraftGetIDsToInvalidateAfterPublish")({
                ancestorIDs: t.ancestorIDs,
                publishedObjectIDs: t.publishedObjectIDs,
              }),
              o = n.map(function (t) {
                return e.__invalidate(t);
              });
            o.some(function (e) {
              return e;
            }) && this.__emitChange();
          }),
          (n.$AdsCampaignLiveListStore$p_3 = function () {
            this.__invalidateEntireCache() && this.__emitChange();
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
