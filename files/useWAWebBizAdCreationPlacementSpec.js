__d(
  "useWAWebBizAdCreationPlacementSpec",
  [
    "CometRelay",
    "compactMap",
    "react-compiler-runtime",
    "useWAWebBizAdCreationPlacementSpec_boostedComponentWrapper.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n(
              "useWAWebBizAdCreationPlacementSpec_boostedComponentWrapper.graphql",
            ));
    function u(e) {
      var t,
        n = o("react-compiler-runtime").c(4),
        a = o("CometRelay").useFragment(s, e),
        i;
      if (
        n[0] !==
        (a == null || (t = a.options) == null
          ? void 0
          : t.eligible_publisher_platforms)
      ) {
        var l,
          u,
          d,
          m =
            (l =
              a == null || (u = a.options) == null
                ? void 0
                : u.eligible_publisher_platforms) != null
              ? l
              : [];
        ((i = r("compactMap")(m, c)),
          (n[0] =
            a == null || (d = a.options) == null
              ? void 0
              : d.eligible_publisher_platforms),
          (n[1] = i));
      } else i = n[1];
      var p;
      return (
        n[2] !== i
          ? ((p = { selectedPublisherPlatforms: i }), (n[2] = i), (n[3] = p))
          : (p = n[3]),
        p
      );
    }
    function c(e) {
      return e.type;
    }
    l.default = u;
  },
  98,
);
