__d(
  "AdsPagePostListStore",
  [
    "AdsBaseListStore_LEGACY",
    "AdsLoadState_LEGACY",
    "AdsPagePostBatchCreatedDataActionFlux",
    "AdsPagePostListDataManager",
    "AdsPagePostListLoadErrorDataActionFlux",
    "AdsPagePostListLoadedDataActionFlux",
    "AdsPagePostListPartialLoadDataActionFlux",
    "AdsPagePostUtils",
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
            return r("AdsPagePostListDataManager");
          }),
          (n.getSortKey = function () {
            return "created_time";
          }),
          (n.compare = function (t, n) {
            return t < n ? 1 : t > n ? -1 : 0;
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsPagePostBatchCreatedDataActionFlux").actionType,
              o("AdsPagePostListLoadErrorDataActionFlux").actionType,
              o("AdsPagePostListLoadedDataActionFlux").actionType,
              o("AdsPagePostListPartialLoadDataActionFlux").actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.actionType) {
              case o("AdsPagePostListLoadedDataActionFlux").actionType:
                this.__handleDataFor(
                  e.pageID,
                  e.pagePosts,
                  r("AdsLoadState_LEGACY").LOADED,
                );
                break;
              case o("AdsPagePostListPartialLoadDataActionFlux").actionType:
                this.__handleDataFor(
                  e.pageID,
                  e.pagePosts,
                  r("AdsLoadState_LEGACY").LOADING,
                );
                break;
              case o("AdsPagePostListLoadErrorDataActionFlux").actionType:
                this.__handleDataFor(
                  e.pageID,
                  null,
                  r("AdsLoadState_LEGACY").ERROR,
                );
                break;
              case o("AdsPagePostBatchCreatedDataActionFlux").actionType:
                this.$AdsPagePostListStoreClass$p_1(e.ids);
                break;
            }
          }),
          (n.$AdsPagePostListStoreClass$p_1 = function (t) {
            var e = this,
              n = new Set(
                t.map(o("AdsPagePostUtils").getPageIdFromPagePostId_BROKEN),
              );
            n.forEach(function (t) {
              if (t != null) {
                var n = e.__getMinValueFor(t);
                if (n) {
                  var o = r("AdsPagePostListDataManager").getStopFn(n);
                  r("AdsPagePostListDataManager").loadForWithStopFn(t, o);
                }
              }
            });
          }),
          t
        );
      })(r("AdsBaseListStore_LEGACY")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
