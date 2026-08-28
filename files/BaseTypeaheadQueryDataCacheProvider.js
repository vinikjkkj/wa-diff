__d(
  "BaseTypeaheadQueryDataCacheProvider",
  [
    "BaseCacheEntryLabelKeyBuilder",
    "BaseTypeaheadInMemoryMapDataCache",
    "FBLogger",
    "baseTypeaheadDedupEntriesBuilder",
    "baseTypeaheadLabelSuffixBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = e === void 0 ? {} : e,
          n = t.dedupe,
          o = t.suffixBuilder;
        ((this.$1 = new (r("BaseTypeaheadInMemoryMapDataCache"))()),
          (this.$2 =
            n != null
              ? n
              : r("baseTypeaheadDedupEntriesBuilder")(
                  r("BaseCacheEntryLabelKeyBuilder"),
                )),
          (this.$3 = o != null ? o : r("baseTypeaheadLabelSuffixBuilder")));
      }
      var t = e.prototype;
      return (
        (t.add = function (t, n) {
          n === void 0 && (n = "");
          var e = (n != null ? n : "").trimLeft().toLowerCase(),
            r = this.$4(t, e);
          this.$1.set(e, r);
        }),
        (t.clear = function () {
          this.$1.clear();
        }),
        (t.match = function (t) {
          var e = t.trimLeft().toLowerCase();
          if (e === "") {
            var n;
            return ((n = this.$1.get(e)) != null ? n : []).map(function (e) {
              var t = e.entry;
              return t;
            });
          }
          for (var r = [], o = 1; o <= e.length; o++) {
            var a = e.substring(0, o),
              i = e.substring(o, e.length),
              l = this.$5(a, i);
            r = this.$2(r, l);
          }
          return r.map(function (e) {
            var t = e.entry;
            return t;
          });
        }),
        (t.remove = function (t) {
          r("FBLogger")("search").mustfix(
            "'remove' is not implemented for BaseTypeaheadQueryDataCacheProvider",
          );
        }),
        (t.$5 = function (t, n) {
          var e,
            r = (e = this.$1.get(t)) != null ? e : [];
          return r
            .map(function (e) {
              return !e.suffix.startsWith(n) && e.suffix !== n.trim()
                ? null
                : e;
            })
            .filter(Boolean);
        }),
        (t.$4 = function (t, n) {
          var e = this;
          return t.map(function (t) {
            return { entry: t, suffix: e.$3(t, n) };
          });
        }),
        (t.values = function () {
          return (
            r("FBLogger")("search").mustfix(
              "'entries' is not implemented for BaseTypeaheadQueryDataCacheProvider",
            ),
            []
          );
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
