__d(
  "useWAWebBizAdCreationBrowseInterests",
  [
    "CometRelay",
    "WAWebBizAdCreationInterestTreeBuilder",
    "react",
    "react-compiler-runtime",
    "useWAWebBizAdCreationBrowseInterestsQuery.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(t, r) {
      var a = o("react-compiler-runtime").c(7),
        i = m(null),
        l = i[0],
        s = i[1],
        u = m(!0),
        p = u[0],
        _ = u[1],
        f = d(null),
        g,
        h;
      (a[0] !== t || a[1] !== r
        ? ((g = function () {
            return (
              (f.current = o("CometRelay")
                .fetchQuery(
                  r,
                  e !== void 0
                    ? e
                    : (e = n(
                        "useWAWebBizAdCreationBrowseInterestsQuery.graphql",
                      )),
                  { adAccountID: t, audiencePath: ["Interests"] },
                )
                .subscribe({
                  next: function (t) {
                    var e,
                      n = o(
                        "WAWebBizAdCreationInterestTreeBuilder",
                      ).buildInterestTree(
                        (e = t.detailed_targeting_browse) != null ? e : [],
                      );
                    (s(n), _(!1));
                  },
                  error: function (t) {
                    _(!1);
                  },
                })),
              function () {
                f.current != null && f.current.unsubscribe();
              }
            );
          }),
          (h = [r, t]),
          (a[0] = t),
          (a[1] = r),
          (a[2] = g),
          (a[3] = h))
        : ((g = a[2]), (h = a[3])),
        c(g, h));
      var y;
      return (
        a[4] !== l || a[5] !== p
          ? ((y = { interestTree: l, isLoading: p }),
            (a[4] = l),
            (a[5] = p),
            (a[6] = y))
          : (y = a[6]),
        y
      );
    }
    l.default = p;
  },
  98,
);
