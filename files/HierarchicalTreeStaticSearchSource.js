__d(
  "HierarchicalTreeStaticSearchSource",
  ["AbstractSearchSource", "Promise"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function r(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.$HierarchicalTreeStaticSearchSource$p_1 = e),
            n
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var o = r.prototype;
        return (
          (o.getBootstrappedEntries = function (t) {
            var e = this;
            return this.bootstrap(function () {
              var n = e.$HierarchicalTreeStaticSearchSource$p_1;
              n != null && t(Array.from(n));
            });
          }),
          (o.searchImpl = function (t, n, r) {
            var e = this.$HierarchicalTreeStaticSearchSource$p_2(
              this.$HierarchicalTreeStaticSearchSource$p_1,
              t,
              r,
            );
            n(e, t);
          }),
          (o.getAllChildren = function () {
            var t = this.$HierarchicalTreeStaticSearchSource$p_1,
              r = t != null ? Array.from(t) : [];
            return (e || (e = n("Promise"))).resolve(r);
          }),
          (o.$HierarchicalTreeStaticSearchSource$p_2 = function (t, n, r) {
            if (t.length === 0) return [];
            for (var e = [], o = 0; o < t.length; o++) {
              var a = t[o],
                i = a.getCategorySearchSource() != null;
              if (
                (!i &&
                  a.getTitle().toLowerCase().includes(n.toLowerCase()) &&
                  e.push(a),
                i)
              ) {
                var l = a.getCategorySearchSource();
                l == null ||
                  l.search(
                    n,
                    function (t, n, r) {
                      e.push.apply(e, t);
                    },
                    r,
                  );
              }
            }
            return e;
          }),
          r
        );
      })(r("AbstractSearchSource"));
    l.default = s;
  },
  98,
);
