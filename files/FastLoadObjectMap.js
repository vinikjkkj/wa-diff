__d(
  "FastLoadObjectMap",
  ["invariant", "LoadObject", "LoadObjectMapBatchingQueueNames", "immutable"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "long_secret_string_do_not_use",
      u = function (t, n) {
        return t.isEmpty();
      },
      c = Number.POSITIVE_INFINITY,
      d = (function () {
        function t(e, t, n, r, o, a) {
          ((this.$1 = new Map()),
            (this.$3 = r),
            (this.$4 = n),
            (this.$2 = t),
            (this.$7 = new Set()),
            (this.$8 = null),
            (this.$5 = o),
            (this.$9 = a),
            (this.$6 = new Map()));
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
              i = this.$4(t);
            if (!this.$7.has(i) && this.$3(a, t)) {
              this.$6.has(o) || this.$6.set(o, new Set());
              var l = this.$6.get(o);
              if (
                (l != null || s(0, 21818), l.add(t), this.$7.add(i), this.$9)
              ) {
                var u = r("LoadObjectMapBatchingQueueNames").MAIN,
                  c = this.$6.get(u);
                if (c != null) {
                  var d = this.__getChunkSize(c, u);
                  if (c.size >= d) return (this.$10(c, u), a);
                } else
                  this.$6.forEach(function (t, n) {
                    var r = e.__getChunkSize(t, n);
                    if (t.size >= r) return (e.$10(t, n), a);
                  });
              }
              this.$8 === null &&
                (this.$8 = window.setTimeout(function () {
                  (e.$6.forEach(function (t, n) {
                    t.size > 0 && e.$10(t, n);
                  }),
                    e.$9 || e.$7.clear(),
                    (e.$8 = null));
                }, 0));
            }
            return a;
          }),
          (n.getCached = function (t) {
            var e,
              n = this.$4(t);
            return (e = this.$1.get(n)) != null
              ? e
              : r("LoadObject").empty({ creatorModuleID: i.id });
          }),
          (n.getAll = function (t) {
            var e = this,
              n = r("immutable")
                .Map()
                .withMutations(function (n) {
                  for (var r of t) n.set(r, e.get(r));
                });
            return n;
          }),
          (n.__clearFrame = function (t) {
            var e;
            (e = this.$6.get(t)) == null || e.clear();
          }),
          (n.$11 = function (t, n) {
            var e = [],
              r = new Set(),
              o = this.__getChunkSize(t, n);
            for (var a of t)
              (r.add(a), r.size >= o && (e.push(r), (r = new Set())));
            return (r.size > 0 && e.push(r), e);
          }),
          (n.$10 = function (t, n) {
            for (var e of this.$11(t, n)) this.__doLoadChunk(e);
            this.__clearFrame(n);
          }),
          (n.__doLoadChunk = function (t) {
            this.$2(t);
          }),
          (n.__getChunkSize = function (t, n) {
            return this.$5;
          }),
          (n.__getData = function () {
            return this.$1;
          }),
          (n.getData = function () {
            return this.$1;
          }),
          (n.__setData = function (t) {
            this.$1 = t;
          }),
          (n.setDeleting = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = !1;
              for (var r of t) {
                var o = e.$4(r),
                  a = e.getCached(r);
                (e.$1.get(o) != a.deleting() && (n = !0),
                  e.$1.set(o, a.deleting()));
              }
              return [e.$1, n];
            });
          }),
          (n.setLoading = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = !1;
              for (var r of t) {
                var o = e.$4(r),
                  a = e.getCached(r);
                (!n && e.$1.get(o) != a.loading() && (n = !0),
                  e.$1.set(o, a.loading()));
              }
              return [e.$1, n];
            });
          }),
          (n.setUpdating = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = !1;
              for (var r of t) {
                var o = e.$4(r),
                  a = e.getCached(r);
                (!n && e.$1.get(o) != a.updating() && (n = !0),
                  e.$1.set(o, a.updating()));
              }
              return [e.$1, n];
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
              var n = !1;
              for (var r of t) {
                var o = r[0],
                  a = r[1],
                  i = e.$4(o),
                  l = e.getCached(o);
                if (a instanceof Error) {
                  var s = l.setError(a).done();
                  (!n && s != l && (n = !0), e.$1.set(i, s));
                } else {
                  var u = l.setValue(a).done();
                  (!n && u != l && (n = !0), e.$1.set(i, u));
                }
              }
              return [e.$1, n];
            });
          }),
          (n.setMultipleErrors = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = !1;
              for (var r of t) {
                var o = r[0],
                  a = r[1],
                  i = e.$4(o),
                  l = e.getCached(o),
                  s = l.setError(a).done();
                (!n && s != l && (n = !0), e.$1.set(i, s));
              }
              return [e.$1, n];
            });
          }),
          (n.deleteMultipleValueOrError = function (t) {
            var e = this,
              n = !1;
            return this.__mutate(function () {
              for (var r of t) {
                var o = e.$4(r);
                (!n && e.$1.has(o) && (n = !0), e.$1.delete(o));
              }
              return [e.$1, n];
            });
          }),
          (n.deleteMultipleErrors = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = !1;
              for (var r of t) {
                var o = e.$4(r),
                  a = e.$1.get(o);
                a != null && a.hasError() && ((n = !0), e.$1.delete(o));
              }
              return [e.$1, n];
            });
          }),
          (n.deleteAllErrors = function () {
            var e = this;
            return this.__mutate(function () {
              var t = !1;
              return (
                e.$1.forEach(function (n, r) {
                  n.hasError() && (e.$1.delete(r), (t = !0));
                }),
                [e.$1, t]
              );
            });
          }),
          (n.has = function (t) {
            return this.$1.has(this.$4(t));
          }),
          (n.set = function (t, n) {
            var e = this;
            return this.__mutate(function () {
              var r = e.$4(t);
              return e.$1.get(r) === n
                ? [e.$1, !1]
                : (e.$1.set(r, n), [e.$1, !0]);
            });
          }),
          (n.update = function (t, n) {
            return this.set(t, n(this.get(t)));
          }),
          (n.delete = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = e.$4(t),
                r = e.$1.has(n);
              return (e.$1.delete(n), [e.$1, r]);
            });
          }),
          (n.merge = function (t) {
            var e = this;
            return this.__mutate(function () {
              var n = !1;
              return (
                Array.from(t).forEach(function (t) {
                  var r = t[0],
                    o = t[1],
                    a = e.$4(r);
                  (!n && e.$1.get(a) != o && (n = !0), e.$1.set(a, o));
                }),
                [e.$1, n]
              );
            });
          }),
          (n.clear = function () {
            var e = this;
            return this.__mutate(function () {
              var t = e.$1.size != 0;
              return (e.$1.clear(), [e.$1, t]);
            });
          }),
          (n.__mutate = function (r) {
            var n = r(),
              o = n[0],
              a = n[1];
            if (!a) return this;
            var i = new t(e, this.$2, this.$4, this.$3, this.$5, this.$9);
            return ((i.$1 = o), i);
          }),
          (n.__getPreventLoadsForThisFrame = function (t) {
            var e;
            return (
              t === void 0 &&
                (t = r("LoadObjectMapBatchingQueueNames").DEFAULT),
              (e = this.$6.get(t)) != null ? e : new Set()
            );
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
