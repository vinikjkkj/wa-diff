__d(
  "useWAWebBizAdCreationBrowseInterests",
  [
    "CometRelay",
    "WAWebBizAdCreationInterestTreeBuilder",
    "react",
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
      var a = m(null),
        i = a[0],
        l = a[1],
        s = m(!0),
        u = s[0],
        p = s[1],
        _ = d(null);
      return (
        c(
          function () {
            return (
              (_.current = o("CometRelay")
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
                    (l(n), p(!1));
                  },
                  error: function (t) {
                    p(!1);
                  },
                })),
              function () {
                _.current != null && _.current.unsubscribe();
              }
            );
          },
          [r, t],
        ),
        { interestTree: i, isLoading: u }
      );
    }
    l.default = p;
  },
  98,
);
