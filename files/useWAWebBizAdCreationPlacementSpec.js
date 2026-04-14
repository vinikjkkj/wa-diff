__d(
  "useWAWebBizAdCreationPlacementSpec",
  [
    "CometRelay",
    "compactMap",
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
        a,
        i = o("CometRelay").useFragment(s, e),
        l =
          i == null || (t = i.spec) == null || (t = t.placement_spec) == null
            ? void 0
            : t.publisher_platforms;
      if (l != null && l.length > 0) return { selectedPublisherPlatforms: l };
      var u =
        (n =
          i == null || (a = i.options) == null
            ? void 0
            : a.eligible_publisher_platforms) != null
          ? n
          : [];
      return {
        selectedPublisherPlatforms: r("compactMap")(u, function (e) {
          return e.type;
        }),
      };
    }
    l.default = u;
  },
  98,
);
