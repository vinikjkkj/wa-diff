__d(
  "FluxDerivedStore",
  ["FluxStore", "UserTimingUtils", "abstractMethod", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this, t) || this),
          n.getDependencyStores(),
          (n.$FluxDerivedStore_LEGACY$p_1 = r("immutable").Map()),
          (n.$FluxDerivedStore_LEGACY$p_2 = new Set()),
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
          this.$FluxDerivedStore_LEGACY$p_2 &&
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
          this.$FluxDerivedStore_LEGACY$p_2.clear();
        }),
        (n.__updateOne = function (t, n, r, o) {
          if (o == null || !this.__areEqual(o, r)) {
            var e = this.__computeResult(
              n,
              r,
              this.$FluxDerivedStore_LEGACY$p_1.getIn([n, "result"], null),
            );
            (t.setIn([n, "data"], r), t.setIn([n, "result"], e));
          }
        }),
        (n.__updateAll = function (t, n, r, o) {
          for (var e of n) this.__updateOne(t, e, r.get(e), o.get(e));
        }),
        (n.get = function (t) {
          var e = this;
          if (this.$FluxDerivedStore_LEGACY$p_2.has(t))
            return this.$FluxDerivedStore_LEGACY$p_1.getIn([t, "result"]);
          var n = this.$FluxDerivedStore_LEGACY$p_1.getIn([t, "data"]),
            r = this.__getData(t, n);
          return (
            (this.$FluxDerivedStore_LEGACY$p_1 =
              this.$FluxDerivedStore_LEGACY$p_1.withMutations(function (o) {
                return e.__updateOne(o, t, r, n);
              })),
            this.$FluxDerivedStore_LEGACY$p_2.add(t),
            this.$FluxDerivedStore_LEGACY$p_1.getIn([t, "result"])
          );
        }),
        (n.getCached = function (t) {
          var e = this;
          if (this.$FluxDerivedStore_LEGACY$p_2.has(t))
            return this.$FluxDerivedStore_LEGACY$p_1.getIn([t, "result"]);
          var n = this.$FluxDerivedStore_LEGACY$p_1.getIn([t, "data"]),
            r = this.__getCachedData(t, n);
          return (
            (this.$FluxDerivedStore_LEGACY$p_1 =
              this.$FluxDerivedStore_LEGACY$p_1.withMutations(function (o) {
                return e.__updateOne(o, t, r, n);
              })),
            this.$FluxDerivedStore_LEGACY$p_1.getIn([t, "result"])
          );
        }),
        (n.getAll = function (t, n) {
          var e = this,
            o = new Set(t),
            a = n || this.$FluxDerivedStore_LEGACY$p_3 || r("immutable").Map(),
            i = a.withMutations(function (n) {
              if (
                (a.forEach(function (e, t) {
                  o.has(t) || n.delete(t);
                }),
                e.__getDataAll)
              ) {
                var r = e.$FluxDerivedStore_LEGACY$p_1
                    .filter(function (e, t) {
                      return o.has(t);
                    })
                    .map(function (e) {
                      return e.get("data");
                    }),
                  i = e.__getDataAll(o, r);
                ((e.$FluxDerivedStore_LEGACY$p_1 =
                  e.$FluxDerivedStore_LEGACY$p_1.withMutations(function (n) {
                    return e.__updateAll(n, t, i, r);
                  })),
                  o.forEach(function (t) {
                    n.set(
                      t,
                      e.$FluxDerivedStore_LEGACY$p_1.getIn([t, "result"]),
                    );
                  }));
              } else
                o.forEach(function (t) {
                  n.set(t, e.get(t));
                });
            });
          return ((this.$FluxDerivedStore_LEGACY$p_3 = i), i);
        }),
        (n.getAllCached = function (t, n) {
          var e = this,
            o = new Set(t),
            a = n || this.$FluxDerivedStore_LEGACY$p_3 || r("immutable").Map(),
            i = a.withMutations(function (t) {
              for (var n of a.keys()) o.has(n) || t.delete(n);
              e.$FluxDerivedStore_LEGACY$p_1 =
                e.$FluxDerivedStore_LEGACY$p_1.withMutations(function (n) {
                  for (var r of o) {
                    var a = n.getIn([r, "data"]),
                      i = e.__getCachedData(r, a);
                    (e.__updateOne(n, r, i, a),
                      t.set(r, n.getIn([r, "result"])));
                  }
                });
            });
          return ((this.$FluxDerivedStore_LEGACY$p_3 = i), i);
        }),
        (n.clearCacheForTestsOnly = function () {
          (this.$FluxDerivedStore_LEGACY$p_2.clear(),
            (this.$FluxDerivedStore_LEGACY$p_1 = r("immutable").Map()));
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
