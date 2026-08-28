__d(
  "StaticSearchSource",
  ["AbstractSearchSource", "SearchSourceCallbackManager", "TokenizeUtil"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, o, a) {
        var i;
        return (
          o === void 0 && (o = !0),
          a === void 0 && (a = !0),
          (i = e.call(this) || this),
          (i.$StaticSearchSource$p_2 = t),
          (i.$StaticSearchSource$p_3 = o),
          (i.$StaticSearchSource$p_4 = a),
          (i.$StaticSearchSource$p_1 = new (r("SearchSourceCallbackManager"))({
            parseFn: r("TokenizeUtil").parse,
            matchFn: r("TokenizeUtil").isQueryMatch,
            indexFn: n,
          })),
          i.$StaticSearchSource$p_1.addLocalEntries(i.$StaticSearchSource$p_2),
          i
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.searchImpl = function (t, n, r) {
          t
            ? (this.$StaticSearchSource$p_3 &&
                this.$StaticSearchSource$p_1.setQueryStringAsExhausted(t),
              this.$StaticSearchSource$p_1.search(t, n))
            : n(
                this.$StaticSearchSource$p_4
                  ? this.$StaticSearchSource$p_2
                  : [],
                t,
              );
        }),
        (n.getSearchableEntries = function () {
          return this.$StaticSearchSource$p_2;
        }),
        t
      );
    })(r("AbstractSearchSource"));
    l.default = e;
  },
  98,
);
