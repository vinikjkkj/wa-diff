__d(
  "ReverseInteropStoreHandler",
  [
    "LoadObjectMapBatchingQueueNames",
    "chunkArray",
    "clearImmediate",
    "setImmediate",
    "uniqueArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o) {
        var a = this;
        (n === void 0 && (n = null),
          r === void 0 && (r = !1),
          o === void 0 && (o = ""),
          (this.$3 = null),
          (this.$4 = new Map()),
          (this.$6 = new Map()),
          (this.$1 = t),
          (this.$2 = e),
          this.$2.subscribeToChanges(function () {
            return a.$9();
          }),
          (this.$5 = n),
          (this.$7 = r),
          (this.$8 = o));
      }
      var t = e.prototype;
      return (
        (t.get = function (t, n, r) {
          var e = this.$10(n),
            o = this.$11(t, e),
            a = this.$12(t, e),
            i = this.$13(t, e),
            l = t.filter(function (e) {
              return !i.includes(e);
            });
          if (
            (o || this.addKeysAndFieldsToLoadedKeysAndFields(t, e),
            l.length === 0)
          )
            return a;
          var s = l.filter(function (e) {
            return (
              a.length === 0 ||
              a.some(function (t) {
                var n, r;
                return (
                  t.key === e &&
                  ((n = (r = t.value) == null ? void 0 : r.isLoading()) != null
                    ? n
                    : !1)
                );
              })
            );
          });
          return (this.queueLoad(s, e, r), a);
        }),
        (t.getCached = function (t, n) {
          var e = this.$10(n),
            r = this.$13(t, e);
          return this.$12(r, e);
        }),
        (t.$12 = function (t, n) {
          return this.$2.getCached(t, n);
        }),
        (t.refetchAll = function () {
          var e = Array.from(this.$6.keys());
          (this.$6.clear(), this.$2.refetch(e));
        }),
        (t.refetchKeys = function (t) {
          var e = this,
            n = t
              .filter(function (t) {
                return e.$6.has(t);
              })
              .map(function (t) {
                var n;
                return {
                  key: t,
                  fields: Array.from((n = e.$6.get(t)) != null ? n : []),
                };
              });
          (n.forEach(function (t) {
            var n = t.key;
            e.$6.delete(n);
          }),
            this.$2.refetch(t),
            this.$14(n, !0));
        }),
        (t.queueLoad = function (t, n, o) {
          var e,
            a = this,
            i =
              (e = o == null ? void 0 : o.queueName) != null
                ? e
                : r("LoadObjectMapBatchingQueueNames").DEFAULT;
          (this.$15(t, n, i),
            this.$7 && this.$16(),
            this.$3 == null &&
              (this.$3 = r("setImmediate")(function () {
                (a.$4.forEach(function (e, t) {
                  e.size > 0 && a.$17(t);
                }),
                  a.$18());
              })));
        }),
        (t.$16 = function () {
          var e = this,
            t = this.$4.get(r("LoadObjectMapBatchingQueueNames").MAIN);
          t != null && t.size > 0
            ? this.$19(t, r("LoadObjectMapBatchingQueueNames").MAIN)
            : this.$4.forEach(function (t, n) {
                t.size > 0 && e.$19(t, n);
              });
        }),
        (t.$19 = function (t, n) {
          var e,
            r,
            o = (e = t == null ? void 0 : t.size) != null ? e : 0;
          o >= ((r = this.$5) != null ? r : 1) && this.$17(n);
        }),
        (t.$15 = function (t, n, r) {
          var e,
            o = (e = this.$4.get(r)) != null ? e : new Map();
          (t.forEach(function (e) {
            var t,
              r = (t = o.get(e)) != null ? t : new Set();
            (n.forEach(function (e) {
              return r.add(e);
            }),
              o.set(e, r));
          }),
            this.$4.set(r, o));
        }),
        (t.$17 = function (t, n) {
          var e;
          n === void 0 && (n = !1);
          var r = this.$4.get(t);
          if (r != null) {
            var o = Array.from((e = r.entries()) != null ? e : []).map(
              function (e) {
                var t = e[0],
                  n = e[1];
                return { key: t, fields: Array.from(n) };
              },
            );
            (this.$20(t), this.$14(o, n));
          }
        }),
        (t.$14 = function (t, n) {
          var e = this;
          n === void 0 && (n = !1);
          var o = this.$5 == null ? [t] : r("chunkArray")(t, this.$5),
            a = t.map(function (e) {
              var t = e.key;
              return t;
            });
          (this.$2.createLoadingRecordsInRelayStore(a),
            o.forEach(function (t) {
              var r = t.flatMap(function (e) {
                  var t = e.fields;
                  return t;
                }),
                o = t.map(function (e) {
                  var t = e.key;
                  return t;
                });
              e.loadData(o, r, n);
            }));
        }),
        (t.loadData = function (t, n, o) {
          o === void 0 && (o = !1);
          var e = r("uniqueArray")(n);
          this.$2.load(t, e, o);
        }),
        (t.$20 = function (t) {
          this.$4.set(t, new Map());
        }),
        (t.$18 = function () {
          (r("clearImmediate")(this.$3), (this.$3 = null));
        }),
        (t.$9 = function () {
          this.$1();
        }),
        (t.$11 = function (t, n) {
          var e = this;
          return t.every(function (t) {
            var r = e.$6.get(t);
            return r == null
              ? !1
              : n.every(function (e) {
                  return r.has(e);
                });
          });
        }),
        (t.$13 = function (t, n) {
          var e = this;
          return t.filter(function (t) {
            var r = e.$6.get(t);
            return r == null
              ? !1
              : n.every(function (e) {
                  return r.has(e);
                });
          });
        }),
        (t.addKeysAndFieldsToLoadedKeysAndFields = function (t, n) {
          var e = this;
          t.forEach(function (t) {
            var r,
              o = (r = e.$6.get(t)) != null ? r : new Set();
            (n.forEach(function (e) {
              return o.add(e);
            }),
              e.$6.set(t, o));
          });
        }),
        (t.removeKeysFromLoadedKeysAndFields = function (t) {
          var e = this;
          t.forEach(function (t) {
            e.$6.delete(t);
          });
        }),
        (t.getLoadedKeysAndFields = function () {
          return this.$6;
        }),
        (t.$10 = function (t) {
          if (!this.$2.isTiered()) return t;
          var e = this.$2.getTierFields(t);
          return e;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
