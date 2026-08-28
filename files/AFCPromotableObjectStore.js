__d(
  "AFCPromotableObjectStore",
  [
    "AFCPromotableObjectDataManager",
    "AdsAdgroupFetchAfcPromotableObjectsErrorDataActionFlux",
    "AdsAdgroupFetchAfcPromotableObjectsSuccessDataActionFlux",
    "AdsDataAtom",
    "FluxLoadObjectStore",
    "adsCreateStoreThunkSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getSelector = r("adsCreateStoreThunkSelector")(
              n,
              n.get.bind(n),
            )),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__load = function (t) {
            r("AFCPromotableObjectDataManager").loadPromotableObjects(t);
          }),
          (a.__getActionTypes = function () {
            return [
              this.getActionTypeStartLoad(),
              o("AdsAdgroupFetchAfcPromotableObjectsErrorDataActionFlux")
                .actionType,
              o("AdsAdgroupFetchAfcPromotableObjectsSuccessDataActionFlux")
                .actionType,
            ];
          }),
          (a.reduce = function (t, n) {
            var e = n.action;
            switch (e.type) {
              case o("AdsAdgroupFetchAfcPromotableObjectsSuccessDataActionFlux")
                .actionType:
                return this.__handleOne(t, e.accountID, e.promotableObjects);
              case o("AdsAdgroupFetchAfcPromotableObjectsErrorDataActionFlux")
                .actionType:
                return this.getInitialState();
              default:
                return t;
            }
          }),
          n
        );
      })(r("FluxLoadObjectStore"));
    s.__moduleID = i.id;
    var u = new s();
    l.default = u;
  },
  98,
);
