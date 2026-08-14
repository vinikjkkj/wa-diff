__d(
  "WormReadOnlyStoreAccessor",
  [
    "FBLogger",
    "QPLFlow",
    "Worm",
    "WormStoreFunctions",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$1 = e), (this.$2 = t), (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.$4 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = this.$2 + "." + t + "_inline",
                a =
                  this.$3 != null
                    ? o("QPLFlow").startQPLFlow(this.$3, {
                        annotations: { string: { operationType: n } },
                        timeoutInMs: o("Worm").OP_TIMEOUT_MS,
                      })
                    : void 0;
              try {
                var i = yield this.$1.runInTransaction(
                  [this.$2],
                  "readonly",
                  e,
                  { eventFlow: a },
                );
                return (a == null || a.endSuccess(), i);
              } catch (e) {
                a == null || a.endFail("error");
                var l = r("getErrorSafe")(e);
                throw (
                  r("FBLogger")("worm")
                    .catching(l)
                    .mustfix("Error performing %s", n),
                  l
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (t.bulkGet = function (t) {
          var e = this;
          return this.$4(function (n) {
            return n.stores[e.$2].bulkGet(t);
          }, "bulkGet");
        }),
        (t.count = function () {
          var e = this;
          return this.$4(function (t) {
            return t.stores[e.$2].count();
          }, "count");
        }),
        (t.get = function (t) {
          var e = this;
          return this.$4(function (n) {
            return n.stores[e.$2].get(t);
          }, "get");
        }),
        (t.getByIndex = function (t, n, r) {
          var e = this;
          return this.$4(function (o) {
            return o.stores[e.$2].getByIndex(t, n, r);
          }, "getByIndex");
        }),
        (t.getIndexRangeIterator = function (t, n, r, a) {
          var e = this;
          return o("WormStoreFunctions").getIndexRangeIterator(
            function (t, n, r) {
              return e.$4(function (o) {
                return o.stores[e.$2].readIndexRange(t, n, r);
              }, "getIndexRangeIterator");
            },
            this.$1.getSchema()[this.$2],
            t,
            n,
            r,
            a,
          );
        }),
        (t.readAll = function (t) {
          var e = this;
          return this.$4(function (n) {
            return n.stores[e.$2].readAll(t);
          }, "readAll");
        }),
        (t.readByKeyRange = function (t, n) {
          var e = this;
          return this.$4(function (r) {
            return r.stores[e.$2].readByKeyRange(t, n);
          }, "readByKeyRange");
        }),
        (t.readIndex = function (t, n, r) {
          var e = this;
          return this.$4(function (o) {
            return o.stores[e.$2].readIndex(t, n, r);
          }, "readIndex");
        }),
        (t.readIndexAnyOf = function (t, n, r) {
          var e = this;
          return this.$4(function (o) {
            return o.stores[e.$2].readIndexAnyOf(t, n, r);
          }, "readIndexAnyOf");
        }),
        (t.readIndexKeys = function (t, n, r) {
          var e = this;
          return this.$4(function (o) {
            return o.stores[e.$2].readIndexKeys(t, n, r);
          }, "readIndexKeys");
        }),
        (t.readIndexRange = function (t, n, r) {
          var e = this;
          return this.$4(function (o) {
            return o.stores[e.$2].readIndexRange(t, n, r);
          }, "readIndexRange");
        }),
        (t.readKeys = function (t) {
          var e = this;
          return this.$4(function (n) {
            return n.stores[e.$2].readKeys(t);
          }, "readKeys");
        }),
        (t.readKeysByIndexRange = function (t, n, r) {
          var e = this;
          return this.$4(function (o) {
            return o.stores[e.$2].readKeysByIndexRange(t, n, r);
          }, "readKeysByIndexRange");
        }),
        e
      );
    })();
    l.ReadOnlyStoreAccessor = e;
  },
  98,
);
