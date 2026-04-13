__d(
  "useWAWebBizAdCreationSearchInterests",
  [
    "CometRelay",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
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
      var i = o("react-compiler-runtime").c(11),
        l;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = []), (i[0] = l))
        : (l = i[0]);
      var s = p(l),
        u = s[0],
        c = s[1],
        _ = p(!1),
        f = _[0],
        g = _[1],
        h = m(null),
        y,
        C;
      (i[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function () {
            return function () {
              h.current != null && h.current.unsubscribe();
            };
          }),
          (C = []),
          (i[1] = y),
          (i[2] = C))
        : ((y = i[1]), (C = i[2])),
        d(y, C));
      var b;
      i[3] !== t || i[4] !== a
        ? ((b = function (l) {
            if (l.trim().length === 0) {
              (c([]), g(!1));
              return;
            }
            (g(!0),
              h.current != null && h.current.unsubscribe(),
              (h.current = o("CometRelay")
                .fetchQuery(
                  a,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationSearchInterestsQuery.graphql",
                      )),
                  { query: l, adAccountID: t, count: 10 },
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
                      (c([]), g(!1));
                      return;
                    }
                    var o = [];
                    (n.forEach(function (e) {
                      var t = e == null ? void 0 : e.node;
                      t != null &&
                        !r("isStringNullOrEmpty")(t.id) &&
                        o.push({ children: [], node: t, pathName: null });
                    }),
                      c(o),
                      g(!1));
                  },
                  error: function (t) {
                    (c([]), g(!1));
                  },
                })));
          }),
          (i[3] = t),
          (i[4] = a),
          (i[5] = b))
        : (b = i[5]);
      var v = b,
        S;
      i[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            (c([]),
              g(!1),
              h.current != null &&
                (h.current.unsubscribe(), (h.current = null)));
          }),
          (i[6] = S))
        : (S = i[6]);
      var R = S,
        L;
      return (
        i[7] !== v || i[8] !== f || i[9] !== u
          ? ((L = {
              searchResults: u,
              fetchSearchResults: v,
              clearSearchResults: R,
              isSearching: f,
            }),
            (i[7] = v),
            (i[8] = f),
            (i[9] = u),
            (i[10] = L))
          : (L = i[10]),
        L
      );
    }
    l.default = _;
  },
  98,
);
