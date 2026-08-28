__d(
  "AdsDraftFragmentStore",
  [
    "AdsBaseDataStore_LEGACY",
    "AdsDraftDraftCloseDataActionFlux",
    "AdsDraftDraftDiscardedDataActionFlux",
    "AdsDraftDraftFragmentBatchCreateErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchCreatedDataActionFlux",
    "AdsDraftDraftFragmentBatchDeletedDataActionFlux",
    "AdsDraftDraftFragmentBatchLoadErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchLoadedDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux",
    "AdsDraftDraftFragmentBatchUpdatedDataActionFlux",
    "AdsDraftDraftFragmentListPartialLoadDataActionFlux",
    "AdsDraftFragmentDataManager",
    "AdsLoadState_LEGACY",
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
            return r("AdsDraftFragmentDataManager");
          }),
          (n.__getActionTypes = function () {
            return [
              o("AdsDraftDraftCloseDataActionFlux").actionType,
              o("AdsDraftDraftDiscardedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
                .actionType,
              o("AdsDraftDraftFragmentBatchCreatedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchDeletedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchLoadErrorDataActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchLoadedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux")
                .actionType,
              o("AdsDraftDraftFragmentBatchUpdatedDataActionFlux").actionType,
              o("AdsDraftDraftFragmentListPartialLoadDataActionFlux")
                .actionType,
            ];
          }),
          (n.__onDispatch = function (t) {
            var e = t.action;
            switch (e.type) {
              case o("AdsDraftDraftCloseDataActionFlux").actionType:
                this.$AdsDraftFragmentStore$p_1(e.draftID, e.fragmentIDs);
                break;
              case o("AdsDraftDraftDiscardedDataActionFlux").actionType:
                this.$AdsDraftFragmentStore$p_2(e.draftID);
                break;
              case o("AdsDraftDraftFragmentBatchCreatedDataActionFlux")
                .actionType:
              case o("AdsDraftDraftFragmentBatchLoadedDataActionFlux")
                .actionType:
              case o("AdsDraftDraftFragmentBatchUpdatedDataActionFlux")
                .actionType:
                this.__handleData(e.fragments, r("AdsLoadState_LEGACY").LOADED);
                break;
              case o("AdsDraftDraftFragmentListPartialLoadDataActionFlux")
                .actionType:
                var n = new Map();
                (e.fragments.forEach(function (e) {
                  return n.set(e.id, e);
                }),
                  this.__handleData(n, r("AdsLoadState_LEGACY").LOADED));
                break;
              case o("AdsDraftDraftFragmentBatchCreateErrorDataActionFlux")
                .actionType:
              case o("AdsDraftDraftFragmentBatchLoadErrorDataActionFlux")
                .actionType:
              case o("AdsDraftDraftFragmentBatchUpdateErrorDataActionFlux")
                .actionType:
                this.__handleData(e.errors, r("AdsLoadState_LEGACY").ERROR);
                break;
              case o("AdsDraftDraftFragmentBatchDeletedDataActionFlux")
                .actionType:
                this.$AdsDraftFragmentStore$p_3(e.fragments);
                break;
            }
          }),
          (n.$AdsDraftFragmentStore$p_3 = function (t) {
            var e = this;
            (t.forEach(function (t) {
              return e.__invalidate(t.id);
            }),
              this.__emitChange());
          }),
          (n.$AdsDraftFragmentStore$p_2 = function (t) {
            this.__clearCache();
          }),
          (n.$AdsDraftFragmentStore$p_1 = function (t, n) {
            if (!n || !n.length) (this.__clearCache(), this.__emitChange());
            else {
              var e = this.__invalidateAll(n);
              e && this.__emitChange();
            }
          }),
          t
        );
      })(r("AdsBaseDataStore_LEGACY")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
