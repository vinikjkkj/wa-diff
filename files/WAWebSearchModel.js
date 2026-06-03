__d(
  "WAWebSearchModel",
  ["asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        ((this.maxPageLength = e == null ? void 0 : e.maxPageLength),
          this.preloadData());
      }
      var t = e.prototype;
      return (
        (t.preloadData = function () {}),
        (t.queryFn = function (t, n) {
          throw r("err")("Cannot create `Search` Model without `query` method");
        }),
        (t.query = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              var n,
                r = this;
              if ((t === void 0 && (t = {}), this.maxPageLength != null)) {
                var o;
                ((o = t) == null ? void 0 : o.pagination) == null
                  ? (t.pagination = { pageLength: this.maxPageLength, page: 0 })
                  : (t.pagination.pageLength = this.maxPageLength);
              }
              var a = yield this.queryFn(e, t),
                i = babelHelpers.extends({}, a, {
                  query: { searchText: e, options: t },
                  pagination: null,
                });
              if (((n = t) == null ? void 0 : n.pagination) != null) {
                var l, s, u, c, d, m;
                if (a.pagination == null) {
                  var p;
                  ((l = (p = t.pagination.page) != null ? p : 0),
                    (s = t.pagination.pageLength));
                  var _ = l * s,
                    f = _ + s;
                  ((u = Math.ceil(i.results.length / s)),
                    (c = l < u - 1),
                    (i.results = i.results.slice(_, f)));
                } else {
                  var g, h;
                  ((l = a.pagination.page),
                    (s = a.pagination.pageLength),
                    (u = (g = a.pagination) == null ? void 0 : g.totalPages),
                    (c =
                      (h = a.pagination) == null ? void 0 : h.hasMoreResults));
                }
                ((c === !0 || (u != null && u > l + 1)) &&
                  (d = function () {
                    return r.query(
                      e,
                      babelHelpers.extends({}, t, {
                        pagination: { pageLength: s, page: l + 1 },
                      }),
                    );
                  }),
                  l > 0 &&
                    (m = function () {
                      return r.query(
                        e,
                        babelHelpers.extends({}, t, {
                          pagination: { pageLength: s, page: l - 1 },
                        }),
                      );
                    }),
                  (i.pagination = {
                    page: l,
                    pageLength: s,
                    totalPages: u,
                    hasMoreResults: c,
                    next: d,
                    previous: m,
                  }));
              }
              return i;
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
    l.Search = e;
  },
  98,
);
