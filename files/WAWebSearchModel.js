__d(
  "WAWebSearchModel",
  ["err"],
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
        (t.query = async function (t, n) {
          var e,
            r = this;
          if ((n === void 0 && (n = {}), this.maxPageLength != null)) {
            var o;
            ((o = n) == null ? void 0 : o.pagination) == null
              ? (n.pagination = { pageLength: this.maxPageLength, page: 0 })
              : (n.pagination.pageLength = this.maxPageLength);
          }
          var a = await this.queryFn(t, n),
            i = babelHelpers.extends({}, a, {
              query: { searchText: t, options: n },
              pagination: null,
            });
          if (((e = n) == null ? void 0 : e.pagination) != null) {
            var l, s, u, c, d, m;
            if (a.pagination == null) {
              var p;
              ((l = (p = n.pagination.page) != null ? p : 0),
                (s = n.pagination.pageLength));
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
                (c = (h = a.pagination) == null ? void 0 : h.hasMoreResults));
            }
            ((c === !0 || (u != null && u > l + 1)) &&
              (d = function () {
                return r.query(
                  t,
                  babelHelpers.extends({}, n, {
                    pagination: { pageLength: s, page: l + 1 },
                  }),
                );
              }),
              l > 0 &&
                (m = function () {
                  return r.query(
                    t,
                    babelHelpers.extends({}, n, {
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
        }),
        e
      );
    })();
    l.Search = e;
  },
  98,
);
