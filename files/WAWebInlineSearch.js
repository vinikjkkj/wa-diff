__d(
  "WAWebInlineSearch",
  ["WAWebSearchModel", "WAWebSearchUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n,
          r = t.filterFn,
          o = t.items,
          a = t.options,
          i = t.type;
        return (
          (n = e.call(this, a) || this),
          (n.type = i),
          (n.items = o),
          (n.filterFn = r),
          n
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
      return new e({ filterFn: n, items: r, options: o, type: a });
    }
    l.inlineSearchModel = s;
  },
  98,
);
