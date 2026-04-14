__d(
  "useWAWebBizAdCreationSuggestedInterests",
  [
    "CometRelay",
    "isStringNullOrEmpty",
    "react",
    "useWAWebBizAdCreationSuggestedInterestsQuery.graphql",
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
    function _(t, a, i) {
      var l = p([]),
        s = l[0],
        u = l[1],
        _ = p(!1),
        f = _[0],
        g = _[1],
        h = m(null),
        y = c(
          function () {
            if (i.length === 0) {
              (u([]), g(!1));
              return;
            }
            var l = i
              .map(function (e) {
                var t;
                return (t = e.node) == null ? void 0 : t.id;
              })
              .filter(Boolean);
            if (l.length === 0) {
              (u([]), g(!1));
              return;
            }
            (g(!0), h.current != null && h.current.unsubscribe());
            var s = l.map(function (e) {
              return { id: e, name: null, type: "interests" };
            });
            h.current = o("CometRelay")
              .fetchQuery(
                a,
                e !== void 0
                  ? e
                  : (e = n(
                      "useWAWebBizAdCreationSuggestedInterestsQuery.graphql",
                    )),
                { adAccountID: t, detailedTargetingItems: s, count: 10 },
              )
              .subscribe({
                next: function (t) {
                  var e,
                    n =
                      t == null ||
                      (e = t.ad_account) == null ||
                      (e = e.detailed_targeting_suggestions) == null
                        ? void 0
                        : e.nodes;
                  if (n == null) {
                    (u([]), g(!1));
                    return;
                  }
                  var o = new Set(l),
                    a = n
                      .filter(function (e) {
                        return (
                          e != null &&
                          !r("isStringNullOrEmpty")(e.id) &&
                          !o.has(e.id)
                        );
                      })
                      .map(function (e) {
                        return {
                          children: [],
                          node: {
                            id: e.id,
                            name: e.name,
                            path: e.path,
                            raw_name: e.name,
                            target_type: e.target_type,
                          },
                          pathName: null,
                        };
                      });
                  (u(a), g(!1));
                },
                error: function (t) {
                  (u([]), g(!1));
                },
              });
          },
          [a, t, i],
        );
      return (
        d(
          function () {
            return (
              y(),
              function () {
                h.current != null && h.current.unsubscribe();
              }
            );
          },
          [y],
        ),
        { suggestedInterests: s, isLoadingSuggestions: f }
      );
    }
    l.default = _;
  },
  98,
);
