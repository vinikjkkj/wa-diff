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
        n,
        a = o("react-compiler-runtime").c(6),
        i = o("CometRelay").useFragment(s, e),
        l =
          i == null || (t = i.spec) == null || (t = t.placement_spec) == null
            ? void 0
            : t.publisher_platforms;
      if (l != null && l.length > 0) {
        var u;
        return (
          a[0] !== l
            ? ((u = { selectedPublisherPlatforms: l }), (a[0] = l), (a[1] = u))
            : (u = a[1]),
          u
        );
      }
      var d;
      if (
        a[2] !==
        (i == null || (n = i.options) == null
          ? void 0
          : n.eligible_publisher_platforms)
      ) {
        var m,
          p,
          _,
          f =
            (m =
              i == null || (p = i.options) == null
                ? void 0
                : p.eligible_publisher_platforms) != null
              ? m
              : [];
        ((d = r("compactMap")(f, c)),
          (a[2] =
            i == null || (_ = i.options) == null
              ? void 0
              : _.eligible_publisher_platforms),
          (a[3] = d));
      } else d = a[3];
      var g;
      return (
        a[4] !== d
          ? ((g = { selectedPublisherPlatforms: d }), (a[4] = d), (a[5] = g))
          : (g = a[5]),
        g
      );
    }
    function c(e) {
      return e.type;
    }
    l.default = u;
  },
  98,
);
