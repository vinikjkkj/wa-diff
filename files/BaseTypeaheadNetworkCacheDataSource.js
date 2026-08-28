__d(
  "BaseTypeaheadNetworkCacheDataSource",
  ["BaseTypeaheadNetworkDataSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        var o = n.normalizeFunc;
        ((this.$1 = new (r("BaseTypeaheadNetworkDataSource"))(e, o)),
          (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.fetchCache = function (t) {
          var e = t.query,
            n = this.$2.match(e);
          return { entries: n, params: t };
        }),
        (t.fetchNetwork = function (t) {
          var e = this,
            n = t.query;
          return this.$1.fetchNetwork(t).then(function (r) {
            var o = r.entries;
            return (
              o != null && e.$2.add(o, n),
              { entries: e.$2.match(n), params: t }
            );
          });
        }),
        (t.clearCache = function () {
          this.$2.clear();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
