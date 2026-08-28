__d(
  "AdsAdgroupLiveListStore",
  [
    "AdsAdgroupListBatchLoadErrorDataActionFlux",
    "AdsAdgroupListBatchLoadedDataActionFlux",
    "AdsAdgroupLiveListDataManager",
    "AdsBaseListStore_LEGACY",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftPublishCompletedDataActionFlux",
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
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.getForCampaigns = function (e, n) {
              var r = t.__updateLoadingFor(n);
              r.length > 0 &&
                o(
                  "AdsAdgroupLiveListDataManager",
                ).AdsAdgroupLiveListDataManager.loadForCampaigns(e, r);
              var a = new Map();
              return (
                n.forEach(function (e) {
                  a.set(e, t.getCachedFor(e));
                }),
                a
              );
            }),
            (t.getForCampaignGroups = function (e, n) {
              var r = t.__updateLoadingFor(n);
              r.length > 0 &&
                o(
                  "AdsAdgroupLiveListDataManager",
                ).AdsAdgroupLiveListDataManager.loadForCampaignGroups(e, n);
              var a = new Map();
              return (
                n.forEach(function (e) {
                  a.set(e, t.getCachedFor(e));
                }),
                a
              );
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.getDataManager = function () {
            return o("AdsAdgroupLiveListDataManager")
              .AdsAdgroupLiveListDataManager;
          }),
          (n.getForCampaign = function (t, n) {
            return this.getForCampaigns(t, [n]).get(n);
          }),
          (n.getForCampaignGroup = function (t, n) {
            return this.getForCampaignGroups(t, [n]).get(n);
          }),
          (n.getForAccount = function (t) {
            var e = this.__updateLoadingFor([t]);
            return (
              e.length === 1 &&
                o(
                  "AdsAdgroupLiveListDataManager",
                ).AdsAdgroupLiveListDataManager.loadForAccount(t),
              this.getCachedFor(t)
            );
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsAdgroupListBatchLoadErrorDataActionFlux").actionType,
              o("AdsAdgroupListBatchLoadedDataActionFlux").actionType,
              o("AdsDraftDraftCloseDataActionFlux").actionType,
              o("AdsDraftDraftPublishCompletedDataActionFlux").actionType,
              o("AdsPEExportDataPreloadedActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = this,
              n = t.action;
            switch (n.actionType) {
              case o("AdsAdgroupListBatchLoadedDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, t, r("AdsLoadState_LEGACY").LOADED);
                });
                break;
              case o("AdsAdgroupListBatchLoadErrorDataActionFlux").actionType:
                n.responses.forEach(function (t, n) {
                  e.__handleDataFor(n, null, r("AdsLoadState_LEGACY").ERROR);
                });
                break;
              case o("AdsPEExportDataPreloadedActionFlux").actionType:
                this.$AdsAdgroupLiveListStore$p_1(n.childMap.adgroup);
                break;
              case o("AdsDraftDraftCloseDataActionFlux").actionType:
                if (
                  !r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID)
                )
                  return;
                this.$AdsAdgroupLiveListStore$p_2(n.publishedObjectIDs);
                break;
              case o("AdsDraftDraftPublishCompletedDataActionFlux").actionType:
                if (
                  !r("adsDraftIsApplicationIDPowerEditor")(n.adsApplicationID)
                )
                  return;
                var a = r("adsDraftGetIDsToInvalidateAfterPublish")({
                  response: n.response,
                  ancestorIDs: n.ancestorIDs,
                });
                this.$AdsAdgroupLiveListStore$p_2(a);
                break;
            }
          }),
          (n.getSortKey = function () {
            return "name";
          }),
          (n.compare = function (t, n) {
            return r("naturalComparator")(t, n);
          }),
          (n.$AdsAdgroupLiveListStore$p_2 = function (t) {
            var e = this;
            if (!t) this.__invalidateEntireCache() && this.__emitChange();
            else {
              var n = t.map(function (t) {
                return e.__invalidate(t);
              });
              n.some(function (e) {
                return e;
              }) && this.__emitChange();
            }
          }),
          (n.$AdsAdgroupLiveListStore$p_1 = function (t) {
            var e = this;
            t.forEach(function (t, n) {
              e.__handleDataFor(n, t, r("AdsLoadState_LEGACY").LOADED);
            });
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e();
    l.default = s;
  },
  98,
);
