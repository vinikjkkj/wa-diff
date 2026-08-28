__d(
  "LoadObjectMap",
  [
    "invariant",
    "FBLogger",
    "LoadObject",
    "LoadObjectMapBatchingQueueNames",
    "immutable",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "long_secret_string_do_not_use",
      u = function (t, n) {
        return t.isEmpty();
      },
      c = Number.POSITIVE_INFINITY,
      d = 100,
      m = (function () {
        function t(e, t, n, o, a, i) {
          ((this.$1 = r("immutable").Map()),
            (this.$4 = o),
            (this.$5 = n),
            (this.$3 = t),
            (this.$8 = r("immutable").OrderedSet().asMutable()),
            (this.$9 = null),
            (this.$6 = a),
            (this.$10 = i),
            (this.$11 = r("immutable").Set()),
            (this.$7 = new Map()));
        }
        ((t.create = function (r, o, a, i) {
          return (
            o === void 0 && (o = u),
            a === void 0 && (a = c),
            i === void 0 && (i = !1),
            new t(
              e,
              r,
              function (e) {
                return e;
              },
              o,
              a,
              i,
            )
          );
        }),
          (t.createKeyed = function (r, o, a, i, l) {
            return (
              a === void 0 && (a = u),
              i === void 0 && (i = c),
              l === void 0 && (l = !1),
              new t(e, r, o, a, i, l)
            );
          }));
        var n = t.prototype;
        return (
          (n.get = function (t, n) {
            var e = this;
            n === void 0 && (n = r("LoadObjectMapBatchingQueueNames").DEFAULT);
            var o = n,
              a = this.getCached(t),
              i = this.$5(t);
            if (!this.$8.has(i) && (this.$4(a, t) || this.$11.has(i))) {
              this.$7.has(o) ||
                this.$7.set(o, r("immutable").OrderedSet().asMutable());
              var l = this.$7.get(o);
              if (
                (l != null || s(0, 21818), l.add(t), this.$8.add(i), this.$10)
              ) {
                var u = r("LoadObjectMapBatchingQueueNames").MAIN,
                  c = this.$7.get(u);
                if (c != null) {
                  var d = this.__getChunkSize(c, u);
                  if (c.size >= d) return (this.$12(c, u), a);
                } else
                  this.$7.forEach(function (t, n) {
                    var r = e.__getChunkSize(t, n);
                    if (t.size >= r) return (e.$12(t, n), a);
                  });
              }
              (this.$9 === null &&
                (this.$9 = window.setTimeout(function () {
                  (e.$7.forEach(function (t, n) {
                    t.size > 0 && e.$12(t, n);
                  }),
                    e.$10 || e.$8.clear(),
                    (e.$9 = null));
                }, 0)),
                (this.$11 = this.$11.delete(i)));
            }
            return a;
          }),
          (n.getCached = function (t) {
            var e,
              n = this.$5(t);
            return (e = this.$1.get(n)) != null
              ? e
              : r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (n.getAll = function (t) {
            var e = this,
              n = r("immutable")
                .Map()
                .withMutations(function (n) {
                  var o = 0;
                  for (var a of t) (n.set(a, e.get(a)), o++);
                  o > d &&
                    r("justknobx")._("4451") &&
                    r("FBLogger")("ads_manager_overfetching").warn(
                      "Loaded %s keys (threshold: %s)! This will likely cause performance problems due to loading so many keys",
                      o,
                      d,
                    );
                });
            return n;
          }),
          (n.setKeyStale = function (r) {
            var n = this.$5(r),
              o = new t(e, this.$3, this.$5, this.$4, this.$6, this.$10);
            return ((o.$1 = this.$1), (o.$11 = this.$11.add(n)), o);
          }),
          (n.setAllExistingKeysStale = function () {
            var n = new t(e, this.$3, this.$5, this.$4, this.$6, this.$10);
            return (
              (n.$1 = this.$1),
              (n.$11 = this.$11.union(Array.from(this.$1.keys()))),
              n
            );
          }),
          (n.setAllKeysStale = function (o) {
            var n = this,
              a = r("immutable")
                .Set(o)
                .map(function (e) {
                  return n.$5(e);
                }),
              i = new t(e, this.$3, this.$5, this.$4, this.$6, this.$10);
            return ((i.$1 = this.$1), (i.$11 = this.$11.union(a)), i);
          }),
          (n.__clearFrame = function (t) {
            var e;
            (e = this.$7.get(t)) == null || e.clear();
          }),
          (n.$13 = function (t, n) {
            var e = [],
              r = new Set(),
              o = this.__getChunkSize(t, n);
            for (var a of t)
              (r.add(a), r.size >= o && (e.push(r), (r = new Set())));
            return (r.size > 0 && e.push(r), e);
          }),
          (n.$12 = function (t, n) {
            for (var e of this.$13(t, n)) this.__doLoadChunk(e);
            this.__clearFrame(n);
          }),
          (n.__doLoadChunk = function (t) {
            this.$3(t);
          }),
          (n.__getChunkSize = function (t, n) {
            return this.$6;
          }),
          (n.getData = function () {
            return this.$1;
          }),
          (n.__setData = function (t) {
            this.$1 = t;
          }),
          (n.getLoadedMap = function () {
            if (!this.$2) {
              var e = [];
              for (var t of this.$1) {
                var n = t[0],
                  o = t[1];
                o.hasValue() && e.push([n, o.getValueEnforcing()]);
              }
              this.$2 = r("immutable").Map(e);
            }
            return this.$2;
          }),
          (n.getLoadedValue = function (t) {
            return this.getLoadedMap().get(this.$5(t));
          }),
          (n.setDeleting = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = e.$5(r),
                    a = e.getCached(r);
                  n.set(o, a.deleting());
                }
              });
            });
          }),
          (n.setLoading = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = e.$5(r),
                    a = e.getCached(r);
                  n.set(o, a.loading());
                }
              });
            });
          }),
          (n.setUpdating = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = e.$5(r),
                    a = e.getCached(r);
                  n.set(o, a.updating());
                }
              });
            });
          }),
          (n.setSingleValueOrError = function (t, n) {
            var e = this.getCached(t);
            return n instanceof Error
              ? this.set(t, e.setError(n).done())
              : this.set(t, e.setValue(n).done());
          }),
          (n.setMultipleValueOrError = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = r[0],
                    a = r[1],
                    i = e.$5(o),
                    l = e.getCached(o);
                  a instanceof Error
                    ? n.set(i, l.setError(a).done())
                    : n.set(i, l.setValue(a).done());
                }
              });
            });
          }),
          (n.setMultipleErrors = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = r[0],
                    a = r[1],
                    i = e.$5(o),
                    l = e.getCached(o);
                  n.set(i, l.setError(a).done());
                }
              });
            });
          }),
          (n.deleteMultipleValueOrError = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = e.$5(r);
                  n.delete(o);
                }
              });
            });
          }),
          (n.deleteMultipleErrors = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (n) {
                for (var r of t) {
                  var o = e.$5(r),
                    a = e.$1.get(o);
                  a != null && a.hasError() && n.delete(o);
                }
              });
            });
          }),
          (n.deleteAllErrors = function () {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(function (e) {
                e.forEach(function (t, n) {
                  t.hasError() && e.delete(n);
                });
              });
            });
          }),
          (n.getKeyIsStale = function (t) {
            return this.$11.contains(this.$5(t));
          }),
          (n.has = function (t) {
            return this.$1.has(this.$5(t));
          }),
          (n.set = function (t, n) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.set(e.$5(t), n);
            });
          }),
          (n.update = function (t, n) {
            return this.set(t, n(this.get(t)));
          }),
          (n.delete = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.delete(e.$5(t));
            });
          }),
          (n.merge = function (t) {
            var e = this;
            return t == null
              ? (r("FBLogger")("LoadObjectMap").warn(
                  "Cannot merge null or undefined map",
                ),
                this)
              : this.__mutate(function () {
                  return e.$1.merge(e.$14(t));
                });
          }),
          (n.withMutations = function (t) {
            var e = this;
            return this.__mutate(function () {
              return e.$1.withMutations(t);
            });
          }),
          (n.clear = function () {
            var e = this;
            return this.__mutate(function () {
              return e.$1.clear();
            });
          }),
          (n.$14 = function* (t) {
            for (var e of t) yield [this.$5(e[0]), e[1]];
          }),
          (n.__mutate = function (r) {
            var n = r();
            if (n === this.$1) return this;
            var o = new t(e, this.$3, this.$5, this.$4, this.$6, this.$10);
            return ((o.$1 = n), (o.$11 = this.$11), o);
          }),
          (n.__getPreventLoadsForThisFrame = function (t) {
            var e;
            return (
              t === void 0 &&
                (t = r("LoadObjectMapBatchingQueueNames").DEFAULT),
              (e = this.$7.get(t)) != null ? e : r("immutable").OrderedSet()
            );
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
