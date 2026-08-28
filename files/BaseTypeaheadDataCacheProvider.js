__d(
  "BaseTypeaheadDataCacheProvider",
  ["BaseDataEntryLabelKeyBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.cache,
          n = e.matchBuilder,
          o = e.mergeBuilder,
          a = e.keyBuilder,
          i = a === void 0 ? r("BaseDataEntryLabelKeyBuilder") : a;
        ((this.$1 = t), (this.$2 = n), (this.$3 = o), (this.$4 = i));
      }
      var t = e.prototype;
      return (
        (t.add = function (t) {
          var e = this;
          t.forEach(function (t) {
            var n = e.$4(t),
              r = e.$1.get(n);
            e.$1.set(n, r != null && e.$3 != null ? e.$3(t, r) : t);
          });
        }),
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.remove = function (t) {
          var e = this.$4(t);
          this.$1.remove(e);
        }),
        (t.match = function (t) {
          var e = this.$2({ query: t });
          return this.$1
            .values()
            .map(function (e) {
              return e.type === "section"
                ? babelHelpers.extends({}, e)
                : babelHelpers.extends({}, e);
            })
            .filter(function (t) {
              return t.type === "section"
                ? ((t.entries = t.entries.filter(e)), !0)
                : e(t);
            });
        }),
        (t.values = function () {
          return this.$1.values();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
