__d(
  "useWAWebBizAdCreationSearchInterests",
  [
    "CometRelay",
    "isStringNullOrEmpty",
    "react",
    "useWAWebBizAdCreationSearchInterestsQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef,
      p = u.useState;
    function _(t, a) {
      var i = p([]),
        l = i[0],
        s = i[1],
        u = p(!1),
        _ = u[0],
        f = u[1],
        g = m(null);
      d(function () {
        return function () {
          g.current != null && g.current.unsubscribe();
        };
      }, []);
      var h = c(
          function (i) {
            if (i.trim().length === 0) {
              (s([]), f(!1));
              return;
            }
            (f(!0),
              g.current != null && g.current.unsubscribe(),
              (g.current = o("CometRelay")
                .fetchQuery(
                  a,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationSearchInterestsQuery.graphql",
                      )),
                  { query: i, adAccountID: t, count: 10 },
                )
                .subscribe({
                  next: function (t) {
                    var e,
                      n =
                        t == null ||
                        (e = t.entities_named) == null ||
                        (e = e.ads_targeting) == null ||
                        (e = e.detailed_targetings) == null
                          ? void 0
                          : e.edges;
                    if (n == null) {
                      (s([]), f(!1));
                      return;
                    }
                    var o = [];
                    (n.forEach(function (e) {
                      var t = e == null ? void 0 : e.node;
                      t != null &&
                        !r("isStringNullOrEmpty")(t.id) &&
                        o.push({ children: [], node: t, pathName: null });
                    }),
                      s(o),
                      f(!1));
                  },
                  error: function (t) {
                    (s([]), f(!1));
                  },
                })));
          },
          [a, t],
        ),
        y = c(function () {
          (s([]),
            f(!1),
            g.current != null && (g.current.unsubscribe(), (g.current = null)));
        }, []);
      return {
        searchResults: l,
        fetchSearchResults: h,
        clearSearchResults: y,
        isSearching: _,
      };
    }
    l.default = _;
  },
  98,
);
