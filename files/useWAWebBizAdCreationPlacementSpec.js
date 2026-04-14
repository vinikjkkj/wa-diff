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
        a = o("CometRelay").useFragment(s, e),
        i =
          (t =
            a == null || (n = a.options) == null
              ? void 0
              : n.eligible_publisher_platforms) != null
            ? t
            : [];
      return {
        selectedPublisherPlatforms: r("compactMap")(i, function (e) {
          return e.type;
        }),
      };
    }
    l.default = u;
  },
  98,
);
