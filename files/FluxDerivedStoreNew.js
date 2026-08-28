__d(
  "FluxDerivedStoreNew",
  [
    "invariant",
    "FluxStore",
    "UserTimingUtils",
    "abstractMethod",
    "filterMap",
    "immutable",
    "mapMap",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          n.getDependencyStores(),
          (n.$FluxDerivedStoreNew$p_1 = new Map()),
          (n.$FluxDerivedStoreNew$p_2 = new Set()),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__getActionTypes = function () {
          return [];
        }),
        (n.__onDispatch = function (t) {
          this.$FluxDerivedStoreNew$p_2 &&
            (this.getDispatcher().waitFor(this.getDependencyDispatchTokens()),
            this.getDependencyStores().some(function (e) {
              return e.hasChanged();
            }) && (this.__invalidateCache(), this.__emitChange()));
        }),
        (n.__getStores = function () {
          return r("abstractMethod")(this.constructor.name, "__getStores");
        }),
        (n.__getData = function (t, n) {
          return r("abstractMethod")(this.constructor.name, "__getData");
        }),
        (n.__getCachedData = function (t, n) {
          return r("abstractMethod")(this.constructor.name, "__getCachedData");
        }),
        (n.__computeResult = function (t, n, o) {
          return r("abstractMethod")(this.constructor.name, "__computeResult");
        }),
        (n.__areEqual = function (t, n) {
          return t === n;
        }),
        (n.__invalidateCache = function () {
          this.$FluxDerivedStoreNew$p_2.clear();
        }),
        (n.__updateOne = function (t, n, r) {
          if (r == null || !this.__areEqual(r, n)) {
            var e,
              o = this.__computeResult(
                t,
                n,
                (e = this.$FluxDerivedStoreNew$p_4(t)) != null ? e : null,
              );
            this.$FluxDerivedStoreNew$p_1.set(t, { data: n, result: o });
          }
        }),
        (n.$FluxDerivedStoreNew$p_4 = function (t) {
          var e;
          return (e = this.$FluxDerivedStoreNew$p_1.get(t)) == null
            ? void 0
            : e.result;
        }),
        (n.$FluxDerivedStoreNew$p_5 = function (t) {
          var e = this.$FluxDerivedStoreNew$p_1.get(t);
          return (e != null || s(0, 26211, t), e.result);
        }),
        (n.$FluxDerivedStoreNew$p_6 = function (t) {
          var e;
          return (e = this.$FluxDerivedStoreNew$p_1.get(t)) == null
            ? void 0
            : e.data;
        }),
        (n.__updateAll = function (t, n, r) {
          for (var e of t) {
            var o = n.get(e);
            this.__updateOne(e, o, r.get(e));
          }
        }),
        (n.get = function (t) {
          if (this.$FluxDerivedStoreNew$p_2.has(t))
            return this.$FluxDerivedStoreNew$p_5(t);
          var e = this.$FluxDerivedStoreNew$p_6(t),
            n = this.__getData(t, e);
          return (
            this.__updateOne(t, n, e),
            this.$FluxDerivedStoreNew$p_2.add(t),
            this.$FluxDerivedStoreNew$p_5(t)
          );
        }),
        (n.getCached = function (t) {
          if (this.$FluxDerivedStoreNew$p_2.has(t))
            return this.$FluxDerivedStoreNew$p_5(t);
          var e = this.$FluxDerivedStoreNew$p_6(t),
            n = this.__getCachedData(t, e);
          return (this.__updateOne(t, n, e), this.$FluxDerivedStoreNew$p_5(t));
        }),
        (n.getAll = function (t, n) {
          var e = this,
            o = new Set(t),
            a = n || this.$FluxDerivedStoreNew$p_3 || r("immutable").Map(),
            i = a.withMutations(function (n) {
              if (
                (a.forEach(function (e, t) {
                  o.has(t) || n.delete(t);
                }),
                e.__getDataAll)
              ) {
                var i = r("mapMap")(
                    r("filterMap")(e.$FluxDerivedStoreNew$p_1, function (e, t) {
                      return o.has(t);
                    }),
                    function (e) {
                      return e.data;
                    },
                  ),
                  l = e.__getDataAll(o, i);
                (e.__updateAll(t, l, i),
                  o.forEach(function (t) {
                    n.set(t, e.$FluxDerivedStoreNew$p_5(t));
                  }));
              } else
                o.forEach(function (t) {
                  n.set(t, e.get(t));
                });
            });
          return ((this.$FluxDerivedStoreNew$p_3 = i), i);
        }),
        (n.getAllCached = function (t, n) {
          var e = this,
            o = new Set(t),
            a = n || this.$FluxDerivedStoreNew$p_3 || r("immutable").Map(),
            i = a.withMutations(function (t) {
              for (var n of a.keys()) o.has(n) || t.delete(n);
              for (var r of o) {
                var i = e.$FluxDerivedStoreNew$p_6(r),
                  l = e.__getCachedData(r, i);
                (e.__updateOne(r, l, i),
                  t.set(r, e.$FluxDerivedStoreNew$p_5(r)));
              }
            });
          return ((this.$FluxDerivedStoreNew$p_3 = i), i);
        }),
        (n.clearCacheForTestsOnly = function () {
          (this.$FluxDerivedStoreNew$p_2.clear(),
            this.$FluxDerivedStoreNew$p_1.clear());
        }),
        (n.__getDependencyStores = function () {
          return this.__getStores();
        }),
        t
      );
    })(r("FluxStore"));
    ((e.__moduleID = i.id), (l.default = e));
  },
  98,
);
