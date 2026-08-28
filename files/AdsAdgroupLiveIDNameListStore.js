__d(
  "AdsAdgroupLiveIDNameListStore",
  [
    "AdsAdgroupListBatchLoadedDataActionFlux",
    "AdsAdgroupLiveListDataManager",
    "AdsDataAtom",
    "FluxLoadObjectStore",
    "adsCFGetAccountAPIState_HACK",
    "adsDraftIsApplicationIDPowerEditor",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["campaign_id"],
      s = ["adset_id"],
      u,
      c = (function (t) {
        function n() {
          return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.reduce = function (t, n) {
            var e = this,
              a = n.action;
            return r("adsDraftIsApplicationIDPowerEditor")(a.adsApplicationID)
              ? (function (n) {
                  if (
                    ((typeof n == "object" && n !== null) ||
                      typeof n == "function") &&
                    "actionType" in n &&
                    n.actionType ===
                      o("AdsAdgroupListBatchLoadedDataActionFlux").actionType
                  ) {
                    var r = n;
                    return e.__handleListBatchLoaded(r, t);
                  }
                  return t;
                })(a)
              : t;
          }),
          (a.__handleListBatchLoaded = function (n, o) {
            var t = this,
              a = o;
            return (
              n.responses.forEach(function (n, o) {
                if (n[0] && n[0].adset_id) {
                  var i = r("immutable").List(
                    n.map(function (t) {
                      var n = t.campaign_id,
                        r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                      return r;
                    }),
                  );
                  i.groupBy(function (e) {
                    return e.adset_id;
                  }).forEach(function (e, n) {
                    e != null &&
                      (a = t.__handleOne(
                        a,
                        n,
                        e
                          .map(function (e) {
                            var t = e.adset_id,
                              n = babelHelpers.objectWithoutPropertiesLoose(
                                e,
                                s,
                              );
                            return n;
                          })
                          .toArray(),
                      ));
                  });
                }
                n.length === 0 && (a = t.__handleOne(a, o, []));
              }),
              a
            );
          }),
          (a.__loadAll = function (t) {
            var e = r("adsCFGetAccountAPIState_HACK")().account_id;
            o(
              "AdsAdgroupLiveListDataManager",
            ).AdsAdgroupLiveListDataManager.loadForCampaigns(e, t);
          }),
          (a.getForCampaign = function (t, n) {
            return this.get(n);
          }),
          (a.getForCampaigns = function (t, n) {
            return this.getAll(n);
          }),
          (a.__getChunkSize = function () {
            return 1e3;
          }),
          n
        );
      })(r("FluxLoadObjectStore"));
    c.__moduleID = i.id;
    var d = new c(u || (u = r("AdsDataAtom")));
    ((l.AdsAdgroupLiveIDNameListStoreClass = c),
      (l.AdsAdgroupLiveIDNameListStore = d));
  },
  98,
);
