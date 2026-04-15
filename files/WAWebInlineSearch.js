__d(
  "WAWebInlineSearch",
  ["WAWebSearchModel", "WAWebSearchUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n, r, o) {
        var a;
        return (
          (a = e.call(this, o) || this),
          (a.type = t),
          (a.items = n),
          (a.filterFn = r),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.queryFn = function (t, n) {
          var e = this,
            r = o("WAWebSearchUtils").normalizeString(t),
            a = o("WAWebSearchUtils").filterPaginate(
              this.items,
              function (t) {
                return e.filterFn(r, t);
              },
              n == null ? void 0 : n.pagination,
            ),
            i = a.pagination,
            l = a.results;
          return {
            type: this.type,
            results: l.map(function (t, n) {
              return { id: "" + n, type: e.type, data: t };
            }),
            pagination: i,
          };
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    function s(t) {
      var n = t.filter,
        r = t.items,
        o = t.options,
        a = t.type;
      return new e(a, r, n, o);
    }
    l.inlineSearchModel = s;
  },
  98,
);
