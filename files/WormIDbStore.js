__d(
  "WormIDbStore",
  [
    "Promise",
    "WormIDbGetMinMaxKeySelector",
    "WormPromise",
    "WormStoreFunctions",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function () {},
      u = (function () {
        function t(e, t, n, r, o) {
          var a = this;
          ((this.readIndexRange = function (e, t, n) {
            return t == null
              ? a.$11(function () {
                  return a.$1
                    .index(e)
                    .openCursor(
                      null,
                      (n == null ? void 0 : n.order) === "desc"
                        ? "prev"
                        : "next",
                    );
                }, n)
              : a.$11(function () {
                  return a.$1
                    .index(e)
                    .openCursor(
                      a.$12(t, e),
                      (n == null ? void 0 : n.order) === "desc"
                        ? "prev"
                        : "next",
                    );
                }, n);
          }),
            (this.$1 = t.objectStore(e)),
            (this.$2 = e),
            (this.$3 = r),
            (this.$4 = n),
            (this.$5 = o));
        }
        var a = t.prototype;
        return (
          (a.$6 = function (t, n) {
            var e,
              r =
                (e = this.$4.eventFlow) != null && e.isActive()
                  ? this.$4.eventFlow
                  : null;
            r == null || r.addPoint(n + "_start");
            var o = t();
            return (r == null || r.addPoint(n + "_end"), o);
          }),
          (a.$7 = function () {
            return this.$3.isSecureStore(this.$2);
          }),
          (a.$8 = function (t) {
            var e = this;
            return this.$7()
              ? this.$6(function () {
                  return e.$3.hashPk(e.$2, e.$5.primaryKey, t);
                }, "hashPk")
              : t;
          }),
          (a.$9 = function (t, n) {
            var e = this;
            return !this.$7() || t == null
              ? t
              : this.$6(function () {
                  return e.$3.hashSelector(t, e.$2, n);
                }, "hashSelector");
          }),
          (a.$10 = function (t) {
            var e = this;
            return new (o("WormPromise").WormPromise)(function (n, r) {
              var o = t();
              ((o.onsuccess = function () {
                try {
                  n(
                    o.result.map(function (t) {
                      return e.$3.maybeDecrypt(
                        t,
                        e.$2,
                        "readArray",
                        e.$4.eventFlow,
                      );
                    }),
                  );
                } catch (e) {
                  r(e);
                }
              }),
                (o.onerror = function () {
                  return r(o.error);
                }));
            });
          }),
          (a.$11 = function (t, n) {
            var e = this;
            return new (o("WormPromise").WormPromise)(function (r, o) {
              var a,
                i = [],
                l = (n == null ? void 0 : n.limit) != null,
                s = Math.max(
                  0,
                  (a = n == null ? void 0 : n.limit) != null ? a : 0,
                );
              if (l && s === 0) {
                r(i);
                return;
              }
              var u = t();
              ((u.onsuccess = function () {
                var t = u.result;
                if (t) {
                  var a;
                  try {
                    a = e.$3.maybeDecrypt(
                      t.value,
                      e.$2,
                      "readCursor",
                      e.$4.eventFlow,
                    );
                  } catch (e) {
                    o(e);
                    return;
                  }
                  if (
                    ((!(n != null && n.filter) || n.filter(a)) && i.push(a),
                    l && s === i.length)
                  ) {
                    r(i);
                    return;
                  }
                  t.continue();
                } else r(i);
              }),
                (u.onerror = function () {
                  return o(u.error);
                }));
            });
          }),
          (a.bulkAdd = function (r) {
            var t = this;
            return (e || (e = n("Promise"))).all(
              r.map(function (e) {
                return new (o("WormPromise").WormPromise)(function (n, r) {
                  var o = t.$1.add(t.$3.maybeEncrypt(e, t.$2, t.$4.eventFlow));
                  ((o.onsuccess = function () {
                    t.$5.autoIncrement === !0
                      ? n(o.result)
                      : n(e[t.$5.primaryKey]);
                  }),
                    (o.onerror = function () {
                      return r(o.error);
                    }));
                });
              }),
            );
          }),
          (a.bulkPut = function (r) {
            var t = this;
            return (e || (e = n("Promise"))).all(
              r.map(function (e) {
                return new (o("WormPromise").WormPromise)(function (n, r) {
                  var o,
                    a = t.$1.put(
                      t.$3.maybeEncrypt(
                        e,
                        t.$2,
                        (o = t.$4.eventFlow) != null ? o : void 0,
                      ),
                    );
                  ((a.onsuccess = function () {
                    t.$5.autoIncrement === !0
                      ? n(a.result)
                      : n(e[t.$5.primaryKey]);
                  }),
                    (a.onerror = function () {
                      return r(a.error);
                    }));
                });
              }),
            );
          }),
          (a.bulkUpsert = function (t, n) {
            return o("WormStoreFunctions").bulkUpsert(this, this.$5, t, n);
          }),
          (a.bulkGet = function (r) {
            var t = this;
            return (e || (e = n("Promise"))).all(
              r.map(function (e) {
                return new (o("WormPromise").WormPromise)(function (n, r) {
                  var o = t.$1.get(t.$8(e));
                  ((o.onsuccess = function () {
                    try {
                      var e;
                      n(
                        t.$3.maybeDecrypt(
                          o.result,
                          t.$2,
                          "bulkGet",
                          (e = t.$4.eventFlow) != null ? e : void 0,
                        ),
                      );
                    } catch (e) {
                      r(e);
                    }
                  }),
                    (o.onerror = function () {
                      return r(o.error);
                    }));
                });
              }),
            );
          }),
          (a.get = function (t) {
            return this.bulkGet([t]).then(function (e) {
              return e[0];
            });
          }),
          (a.getByIndex = function (t, n, r) {
            return o("WormStoreFunctions").getByIndex(this, t, n, r);
          }),
          (a.readByKeyRange = function (t, n) {
            var e = this;
            return t == null
              ? this.$11(function () {
                  return e.$1.openCursor(
                    null,
                    (n == null ? void 0 : n.order) === "desc" ? "prev" : "next",
                  );
                }, n)
              : this.$11(function () {
                  return e.$1.openCursor(
                    e.$12(t, e.$5.primaryKey),
                    (n == null ? void 0 : n.order) === "desc" ? "prev" : "next",
                  );
                }, n);
          }),
          (a.$13 = function (t, n, a) {
            if (this.$5.indexes == null)
              throw r("err")("No indexes found for store");
            var e = this.$5.indexes[t].fields;
            if (n.length === e.length) return n;
            var i = e.map(function (e, t) {
              var r;
              return (r = n[t]) != null
                ? r
                : a === "max"
                  ? o("WormIDbGetMinMaxKeySelector").getMaxSelector()
                  : o("WormIDbGetMinMaxKeySelector").MIN_KEY;
            });
            return i;
          }),
          (a.$12 = function (t, n) {
            var e,
              o,
              a = n === this.$5.primaryKey;
            if (t.only != null) {
              if (this.$5.indexes == null)
                throw r("err")("No indexes found for store");
              var i = this.$5.indexes[n].fields;
              return t.only.length === i.length
                ? IDBKeyRange.only(this.$9(t.only, n))
                : IDBKeyRange.bound(
                    a
                      ? this.$8(t.only)
                      : this.$9(this.$13(n, t.only, "min"), n),
                    a
                      ? this.$8(t.only)
                      : this.$9(this.$13(n, t.only, "max"), n),
                    !0,
                    !0,
                  );
            }
            var l = (e = t.lessThan) != null ? e : t.lessThanOrEqual,
              s = (o = t.greaterThan) != null ? o : t.greaterThanOrEqual;
            if (l != null)
              return s != null
                ? IDBKeyRange.bound(
                    a ? this.$8(s) : this.$9(this.$13(n, s, "min"), n),
                    a ? this.$8(l) : this.$9(this.$13(n, l, "max"), n),
                    t.greaterThan != null,
                    t.lessThan != null,
                  )
                : IDBKeyRange.upperBound(
                    a ? this.$8(l) : this.$9(this.$13(n, l, "max"), n),
                    t.lessThan != null,
                  );
            if (s != null)
              return IDBKeyRange.lowerBound(
                a ? this.$8(s) : this.$9(this.$13(n, s, "min"), n),
                t.greaterThan != null,
              );
            throw r("err")("Invalid range");
          }),
          (a.readIndex = function (t, n, r) {
            var e = this;
            return (r == null ? void 0 : r.filter) == null &&
              (r == null ? void 0 : r.order) !== "desc"
              ? this.$10(function () {
                  var o;
                  return e.$1
                    .index(t)
                    .getAll(
                      e.$9(n, t),
                      (o = r == null ? void 0 : r.limit) != null ? o : void 0,
                    );
                })
              : this.$11(function () {
                  return e.$1
                    .index(t)
                    .openCursor(
                      e.$9(n, t),
                      (r == null ? void 0 : r.order) === "desc"
                        ? "prev"
                        : "next",
                    );
                }, r);
          }),
          (a.readIndexAnyOf = function (t, n, a) {
            var e = this;
            return new (o("WormPromise").WormPromise)(function (i, l) {
              var s, u;
              if (n.length === 0) {
                i([]);
                return;
              }
              var c = (a == null ? void 0 : a.limit) != null,
                d = Math.max(
                  0,
                  (s = a == null ? void 0 : a.limit) != null ? s : 0,
                );
              if (c && d === 0) {
                i([]);
                return;
              }
              var m =
                (u = e.$5.indexes) == null || (u = u[t]) == null
                  ? void 0
                  : u.fields;
              if (!m) {
                l(r("err")("No index fields found"));
                return;
              }
              var p = n.every(function (e) {
                return Array.isArray(e) ? e.length === m.length : !0;
              });
              if (p) {
                var _ = n.map(function (n) {
                  return e.$10(function () {
                    return e.$1.index(t).getAll(e.$9(n, t), c ? d : void 0);
                  });
                });
                o("WormPromise")
                  .WormPromise.all(_)
                  .then(function (e) {
                    var t = e.flat();
                    (a != null && a.filter && (t = t.filter(a.filter)), i(t));
                  })
                  .catch(l);
              } else {
                var f = n.map(function (n) {
                  return e.readIndexRange(t, { only: n }, a);
                });
                o("WormPromise")
                  .WormPromise.all(f)
                  .then(function (t) {
                    var n = t.flat(),
                      r = new Set();
                    ((n = n.filter(function (t) {
                      var n = t[e.$5.primaryKey];
                      return r.has(n) ? !1 : (r.add(n), !0);
                    })),
                      i(n));
                  })
                  .catch(l);
              }
            });
          }),
          (a.readIndexKeys = function (t, n, r) {
            var e = this;
            return this.readIndex(t, n, r).then(function (t) {
              return t.map(function (t) {
                return t[e.$5.primaryKey];
              });
            });
          }),
          (a.readKeysByIndexRange = function (t, n, r) {
            var e = this;
            return this.readIndexRange(t, n, r).then(function (t) {
              return t.map(function (t) {
                return t[e.$5.primaryKey];
              });
            });
          }),
          (a.getIndexRangeIterator = function (t, n, r, a) {
            return o("WormStoreFunctions").getIndexRangeIterator(
              this.readIndexRange,
              this.$5,
              t,
              n,
              r,
              a,
            );
          }),
          (a.readAll = function (t) {
            var e = this;
            return (t == null ? void 0 : t.filter) == null &&
              (t == null ? void 0 : t.order) !== "desc"
              ? this.$10(function () {
                  return e.$1.getAll(void 0, t == null ? void 0 : t.limit);
                })
              : this.$11(function () {
                  return e.$1.openCursor(
                    null,
                    (t == null ? void 0 : t.order) === "desc" ? "prev" : "next",
                  );
                }, t);
          }),
          (a.readKeys = function (t) {
            var e = this;
            return this.readAll(t).then(function (t) {
              return t.map(function (t) {
                return t[e.$5.primaryKey];
              });
            });
          }),
          (a.bulkDelete = function (r) {
            var t = this;
            return (e || (e = n("Promise")))
              .all(
                r.map(function (e) {
                  return new (o("WormPromise").WormPromise)(function (n, r) {
                    var o = t.$1.delete(t.$8(e));
                    ((o.onsuccess = n),
                      (o.onerror = function () {
                        return r(o.error);
                      }));
                  });
                }),
              )
              .then(s);
          }),
          (a.delete = function (t) {
            var e = this;
            return new (o("WormPromise").WormPromise)(function (n, r) {
              var o = e.$1.delete(e.$8(t));
              ((o.onsuccess = function () {
                return n();
              }),
                (o.onerror = function () {
                  return r(o.error);
                }));
            });
          }),
          (a.clear = function () {
            var e = this;
            return new (o("WormPromise").WormPromise)(function (t, n) {
              var r = e.$1.clear();
              ((r.onsuccess = t),
                (r.onerror = function () {
                  return n(r.error);
                }));
            }).then(s);
          }),
          (a.count = function () {
            var e = this;
            return new (o("WormPromise").WormPromise)(function (t, n) {
              var r = e.$1.count();
              ((r.onsuccess = function () {
                return t(r.result);
              }),
                (r.onerror = function () {
                  return n(r.error);
                }));
            });
          }),
          t
        );
      })();
    l.WormIDbStore = u;
  },
  98,
);
