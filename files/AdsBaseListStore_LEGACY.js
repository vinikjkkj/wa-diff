__d(
  "AdsBaseListStore_LEGACY",
  [
    "AdsDataAtom",
    "AdsLoadState_LEGACY",
    "FBLogger",
    "FluxStore",
    "ImmutableObject",
    "ListCache",
    "TreeMap",
    "TypedImmutableObject",
    "abstractMethod",
    "adsCreateStoreThunkSelector",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new (r("TreeMap"))(function () {
        return 0;
      }),
      u = r("TypedImmutableObject").create({
        loadState: r("AdsLoadState_LEGACY").LOADING,
        list: [],
      }),
      c = r("TypedImmutableObject").create({
        loadState: r("AdsLoadState_LEGACY").NOT_LOADED,
        list: [],
      }),
      d = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getAllSelector = r("adsCreateStoreThunkSelector")(
              n,
              n.getFor.bind(n),
            )),
            (n.$AdsBaseListStore_LEGACY$p_1 = new (r("ListCache"))(
              n.$AdsBaseListStore_LEGACY$p_6.bind(n, n.compare),
            )),
            (n.$AdsBaseListStore_LEGACY$p_2 = new Map()),
            (n.$AdsBaseListStore_LEGACY$p_5 = new Map()),
            (n.$AdsBaseListStore_LEGACY$p_3 = n.getIDKey()),
            (n.$AdsBaseListStore_LEGACY$p_4 = n.getSortKey()),
            n
          );
        }
        (babelHelpers.inheritsLoose(n, t),
          (n.getLoadingList = function () {
            return u;
          }));
        var o = n.prototype;
        return (
          (o.getDataManager = function () {
            return (
              r("abstractMethod")("AdsBaseListStore_LEGACY", "getDataManager"),
              r("nullthrows")(null)
            );
          }),
          (o.getIDKey = function () {
            return "id";
          }),
          (o.getLoadingList = function () {
            return u;
          }),
          (o.getSortKey = function () {
            return null;
          }),
          (o.compare = function (t, n) {
            return t < n ? -1 : t > n ? 1 : 0;
          }),
          (o.$AdsBaseListStore_LEGACY$p_6 = function (t, n, r) {
            return t(n.value, r.value);
          }),
          (o.getFor = function (t, n) {
            var e = this.$AdsBaseListStore_LEGACY$p_7(t);
            if (e.loadState === r("AdsLoadState_LEGACY").NOT_LOADED) {
              for (
                var o = this.getDataManager(),
                  a = arguments.length,
                  i = new Array(a > 2 ? a - 2 : 0),
                  l = 2;
                l < a;
                l++
              )
                i[l - 2] = arguments[l];
              (o.loadFor.apply(o, [t, n].concat(i)),
                this.$AdsBaseListStore_LEGACY$p_1.set(
                  t,
                  r("AdsLoadState_LEGACY").LOADING,
                ),
                this.$AdsBaseListStore_LEGACY$p_2.delete(t));
            }
            return this.$AdsBaseListStore_LEGACY$p_7(t);
          }),
          (o.getCachedFor = function (t) {
            return this.$AdsBaseListStore_LEGACY$p_7(t);
          }),
          (o.$AdsBaseListStore_LEGACY$p_7 = function (t) {
            if (this.$AdsBaseListStore_LEGACY$p_2.has(t))
              return r("nullthrows")(this.$AdsBaseListStore_LEGACY$p_2.get(t));
            if (this.$AdsBaseListStore_LEGACY$p_1.has(t)) {
              var e = this.$AdsBaseListStore_LEGACY$p_1.get(
                  t,
                  r("AdsLoadState_LEGACY").NOT_LOADED,
                ),
                n = this.$AdsBaseListStore_LEGACY$p_1.getList(t, s).keys(),
                o = {
                  loadState: e || r("AdsLoadState_LEGACY").NOT_LOADED,
                  list: n || [],
                  totalCount: void 0,
                  loadedCount: void 0,
                };
              return (
                this.$AdsBaseListStore_LEGACY$p_5.has(t) &&
                  ((o.totalCount = this.$AdsBaseListStore_LEGACY$p_5.get(t)),
                  (o.loadedCount = n.length)),
                (o = new (r("ImmutableObject"))(o)),
                this.$AdsBaseListStore_LEGACY$p_2.set(t, o),
                o
              );
            }
            return c;
          }),
          (o.__getMinValueFor = function (t) {
            if (!this.$AdsBaseListStore_LEGACY$p_1.hasList(t)) return null;
            var e = this.$AdsBaseListStore_LEGACY$p_1.getList(t).min();
            return e == null ? null : e.value;
          }),
          (o.__getMaxValueFor = function (t) {
            if (!this.$AdsBaseListStore_LEGACY$p_1.hasList(t)) return null;
            var e = this.$AdsBaseListStore_LEGACY$p_1.getList(t).max();
            return e == null ? null : e.value;
          }),
          (o.__invalidateEntireCache = function () {
            var e =
              this.$AdsBaseListStore_LEGACY$p_1.size() > 0 ||
              this.$AdsBaseListStore_LEGACY$p_2.size > 0;
            return (
              this.$AdsBaseListStore_LEGACY$p_1.clear(),
              this.$AdsBaseListStore_LEGACY$p_2.clear(),
              e
            );
          }),
          (o.__invalidate = function (t) {
            if (
              this.$AdsBaseListStore_LEGACY$p_1.has(t) ||
              this.$AdsBaseListStore_LEGACY$p_2.has(t)
            ) {
              var e = this.$AdsBaseListStore_LEGACY$p_1.delete(t),
                n = this.$AdsBaseListStore_LEGACY$p_2.delete(t);
              return e || n;
            }
            return !1;
          }),
          (o.__invalidateChildren = function (t, n) {
            var e = this;
            n.forEach(function (n) {
              return e.__invalidateChild(t, n);
            });
          }),
          (o.__invalidateChild = function (t, n) {
            var e = this.$AdsBaseListStore_LEGACY$p_1.getList(t);
            if (!e) return !1;
            var r = e.delete(n);
            return r
              ? (this.__incrementTotalCountIfSet(t, -1),
                this.$AdsBaseListStore_LEGACY$p_2.delete(t),
                this.__emitChange(),
                !0)
              : !1;
          }),
          (o.__setTotalCount = function (t, n) {
            this.$AdsBaseListStore_LEGACY$p_5.get(t) !== n &&
              (this.$AdsBaseListStore_LEGACY$p_5.set(t, n),
              this.__emitChange());
          }),
          (o.__incrementTotalCountIfSet = function (t, n) {
            var e = this.$AdsBaseListStore_LEGACY$p_5.get(t);
            if (e) {
              var r = e + (n || 1);
              return (this.$AdsBaseListStore_LEGACY$p_5.set(t, r), r);
            }
          }),
          (o.__handleDataFor = function (t, n, o) {
            var e = this,
              a = !1;
            this.$AdsBaseListStore_LEGACY$p_1.hasList(t) ||
              this.$AdsBaseListStore_LEGACY$p_1.makeList(t);
            var i = this.$AdsBaseListStore_LEGACY$p_1.getList(t);
            return (
              n &&
                n.length > 0 &&
                n.forEach(function (t) {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      t,
                      e.$AdsBaseListStore_LEGACY$p_3,
                    )
                  ) {
                    var n = t[e.$AdsBaseListStore_LEGACY$p_3],
                      o =
                        e.$AdsBaseListStore_LEGACY$p_4 == null
                          ? null
                          : t[e.$AdsBaseListStore_LEGACY$p_4];
                    (!i.has(n) || i.get(n) !== o) && (i.set(n, o), (a = !0));
                  } else
                    r("FBLogger")("ads").mustfix(
                      'The ID Key "%s" did not exist in some data',
                      e.$AdsBaseListStore_LEGACY$p_3,
                    );
                }),
              o &&
                this.$AdsBaseListStore_LEGACY$p_1.get(t) !== o &&
                (this.$AdsBaseListStore_LEGACY$p_1.set(t, o), (a = !0)),
              a &&
                (this.$AdsBaseListStore_LEGACY$p_2.delete(t),
                this.__emitChange()),
              a
            );
          }),
          (o.__updateLoadingFor = function (t) {
            var e = this,
              n = [];
            return (
              t.forEach(function (t) {
                var o = e.$AdsBaseListStore_LEGACY$p_7(t);
                o.loadState === r("AdsLoadState_LEGACY").NOT_LOADED &&
                  (e.$AdsBaseListStore_LEGACY$p_1.set(
                    t,
                    r("AdsLoadState_LEGACY").LOADING,
                  ),
                  e.$AdsBaseListStore_LEGACY$p_2.delete(t),
                  n.push(t));
              }),
              n
            );
          }),
          n
        );
      })(r("FluxStore"));
    ((d.__moduleID = i.id), (l.default = d));
  },
  98,
);
