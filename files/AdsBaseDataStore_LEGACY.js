__d(
  "AdsBaseDataStore_LEGACY",
  [
    "AdsCachedLoadState_LEGACY",
    "AdsDataAtom",
    "AdsLoadState_LEGACY",
    "Cache",
    "FBLogger",
    "ImmutableObject",
    "TypedFluxStore",
    "abstractMethod",
    "adsCreateStoreThunkSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n(n) {
          var o;
          return (
            (o = t.call(this, n || e || (e = r("AdsDataAtom"))) || this),
            (o.getSelector = r("adsCreateStoreThunkSelector")(
              o,
              o.get.bind(o),
            )),
            (o.getAllSelector = r("adsCreateStoreThunkSelector")(
              o,
              o.getAll.bind(o),
            )),
            (o.$AdsBaseDataStore_LEGACY$p_1 = new (r("Cache"))()),
            (o.$AdsBaseDataStore_LEGACY$p_2 = new Set()),
            o
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var o = n.prototype;
        return (
          (o.getDataManager = function () {
            return (
              r("abstractMethod")("AdsBaseDataStore", "getDataManager"),
              r("nullthrows")(null)
            );
          }),
          (o.get = function (t) {
            return this.getAll([t]).get(t);
          }),
          (o.getCached = function (t) {
            return this.getAllCached([t]).get(t);
          }),
          (o.getAll = function (t) {
            var e = u(this.$AdsBaseDataStore_LEGACY$p_1, t);
            return (
              e.length > 0 && this.getDataManager().loadAll(e),
              this.getAllCached(t)
            );
          }),
          (o.getAllCached = function (t) {
            return this.$AdsBaseDataStore_LEGACY$p_1.getAll(
              t,
              r("AdsCachedLoadState_LEGACY").NOT_LOADED,
            );
          }),
          (o.getTimeout = function () {
            return null;
          }),
          (o.__clearCache = function () {
            this.$AdsBaseDataStore_LEGACY$p_1.clear();
          }),
          (o.__cacheContains = function (t) {
            return this.$AdsBaseDataStore_LEGACY$p_1.has(t);
          }),
          (o.__delete = function (t) {
            var e = this.getCached(t);
            (this.__handleData(
              new Map([[t, e]]),
              r("AdsLoadState_LEGACY").DELETING,
            ),
              this.getDataManager().delete(t),
              this.__emitChange());
          }),
          (o.__updateLoading = function (t) {
            return u(this.$AdsBaseDataStore_LEGACY$p_1, t);
          }),
          (o.__updatePendingWrite = function (t) {
            var e = this.getAllCached(t);
            this.__handleData(e, r("AdsLoadState_LEGACY").PENDING_WRITE);
          }),
          (o.__invalidate = function (t) {
            return this.$AdsBaseDataStore_LEGACY$p_1.has(t)
              ? this.$AdsBaseDataStore_LEGACY$p_1.delete(t)
              : !1;
          }),
          (o.__invalidateAll = function (t) {
            var e = this,
              n = !1;
            return (
              t.forEach(function (t) {
                var r = e.__invalidate(t);
                n = n || r;
              }),
              n
            );
          }),
          (o.__invalidateAllErrors = function () {
            var e = this,
              t = !1,
              n = this.getAllCached(
                Array.from(this.$AdsBaseDataStore_LEGACY$p_2.values()),
              );
            return (
              n.forEach(function (n, o) {
                if (n.loadState === r("AdsLoadState_LEGACY").ERROR) {
                  var a = e.__invalidate(o);
                  ((t = a || t), e.$AdsBaseDataStore_LEGACY$p_2.delete(o));
                }
              }),
              t
            );
          }),
          (o.__handleData = function (t, n) {
            var e = this;
            t &&
              t.size > 0 &&
              (t.forEach(function (t, o) {
                var a = e.getCached(o),
                  i;
                switch (n) {
                  case r("AdsLoadState_LEGACY").DELETING:
                  case r("AdsLoadState_LEGACY").LOADED:
                  case r("AdsLoadState_LEGACY").PENDING_WRITE:
                    i = babelHelpers.extends({}, t, { loadState: n });
                    break;
                  case r("AdsLoadState_LEGACY").UPDATING:
                    i = babelHelpers.extends({}, a, t);
                    break;
                  case r("AdsLoadState_LEGACY").ERROR:
                    ((i = { loadState: n, error: t, previousData: void 0 }),
                      a.loadState === r("AdsLoadState_LEGACY").LOADED &&
                        (i.previousData = a));
                    break;
                  default:
                    (r("FBLogger")("ads").mustfix(
                      'Unsure how to update the loadState "%s" when handling data',
                      n,
                    ),
                      (i = { loadState: n }));
                    break;
                }
                (e.$AdsBaseDataStore_LEGACY$p_2.add(o),
                  e.$AdsBaseDataStore_LEGACY$p_1.set(
                    o,
                    new (r("ImmutableObject"))(i),
                    null,
                    e.getTimeout(),
                  ));
              }),
              this.__emitChange());
          }),
          n
        );
      })(r("TypedFluxStore"));
    s.__moduleID = i.id;
    function u(e, t) {
      var n = [];
      return (
        t.forEach(function (t) {
          var o = e.get(t, r("AdsCachedLoadState_LEGACY").NOT_LOADED);
          o &&
            o.loadState === r("AdsLoadState_LEGACY").NOT_LOADED &&
            (e.set(t, r("AdsCachedLoadState_LEGACY").LOADING), n.push(t));
        }),
        n
      );
    }
    l.default = s;
  },
  98,
);
