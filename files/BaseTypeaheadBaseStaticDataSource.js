__d(
  "BaseTypeaheadBaseStaticDataSource",
  [
    "BaseTypeaheadDataCacheProvider",
    "BaseTypeaheadInMemoryMapDataCache",
    "baseTypeaheadStartsWithMatchBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e.entries,
          n = e.keyBuilder,
          o = e.matchBuilder,
          a = o === void 0 ? r("baseTypeaheadStartsWithMatchBuilder") : o;
        ((this.$1 = new (r("BaseTypeaheadDataCacheProvider"))({
          cache: new (r("BaseTypeaheadInMemoryMapDataCache"))(),
          keyBuilder: n,
          matchBuilder: a,
        })),
          this.$1.add(t));
      }
      var t = e.prototype;
      return (
        (t.fetchCache = function (t) {
          var e = t.query;
          return { entries: this.$1.match(e), params: t };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
