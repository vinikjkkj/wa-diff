__d(
  "WormStoreFunctions",
  ["WormPromise", "WormRangeIterator", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = t.indexes[n],
        i = r;
      return (
        a.unique &&
          (i = Array.from(
            new Map(
              r.map(function (e) {
                var t = e.item,
                  n = e.selector;
                return [n.join("_"), { item: t, selector: n }];
              }),
            ).values(),
          )),
        o("WormPromise").WormPromise.all(
          i.map(function (t) {
            var r = t.item,
              o = t.selector;
            return e
              .getByIndex(n, o)
              .then(function (e) {
                return { existingItem: e, item: r };
              })
              .then(function (t) {
                return e.bulkPut([
                  babelHelpers.extends({}, t.existingItem, t.item),
                ]);
              })
              .then(function (e) {
                return e[0];
              });
          }),
        )
      );
    }
    function s(e, t, n, r) {
      return e
        .readIndex(t, n, babelHelpers.extends({}, r, { limit: 1 }))
        .then(function (e) {
          return e[0];
        });
    }
    var u = (function () {
      function e(e, t, n, r, o, a) {
        ((this.query = e),
          (this.indexName = n),
          (this.storeSchema = t),
          (this.order = r),
          (this.filter = a),
          (this.boundaries = o),
          (o == null ? void 0 : o.greaterThan) != null
            ? (this.lowerBoundary = { greaterThan: o.greaterThan })
            : (o == null ? void 0 : o.greaterThanOrEqual) != null &&
              (this.lowerBoundary = {
                greaterThanOrEqual: o.greaterThanOrEqual,
              }),
          (o == null ? void 0 : o.lessThan) != null
            ? (this.upperBoundary = { lessThan: o.lessThan })
            : (o == null ? void 0 : o.lessThanOrEqual) != null &&
              (this.upperBoundary = { lessThanOrEqual: o.lessThanOrEqual }));
      }
      var t = e.prototype;
      return (
        (t.read = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n = this.order === "asc",
                a;
              e == null
                ? (a = this.boundaries)
                : n
                  ? (a = babelHelpers.extends({}, this.upperBoundary, {
                      greaterThan: e,
                    }))
                  : (a = babelHelpers.extends({}, this.lowerBoundary, {
                      lessThan: e,
                    }));
              var i = yield this.query(a, {
                  filter: this.filter,
                  limit: t + 1,
                  order: this.order,
                }),
                l,
                s = null;
              if (i.length <= t) l = i;
              else if (i.length === t + 1) ((l = i.slice(0, t)), (s = i[t]));
              else throw r("err")("unreachable");
              var u = o("WormRangeIterator").makeCursorInfoFromList(
                l,
                this.storeSchema.indexes[this.indexName].fields,
                s != null,
                e != null,
              );
              return { cursorInfo: u, data: l };
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    function c(e, t, n, o, a, i) {
      var l = t.indexes;
      if (l == null) throw r("err")("No indexes found");
      var s = l[n];
      if (s == null) throw r("err")("Index not found");
      return new u(
        function (t, r) {
          return e(n, t != null ? t : void 0, r);
        },
        t,
        n,
        o,
        a,
        i,
      );
    }
    ((l.bulkUpsert = e), (l.getByIndex = s), (l.getIndexRangeIterator = c));
  },
  98,
);
