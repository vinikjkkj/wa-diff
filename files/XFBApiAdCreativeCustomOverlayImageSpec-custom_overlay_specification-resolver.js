__d(
  "XFBApiAdCreativeCustomOverlayImageSpec-custom_overlay_specification-resolver",
  [
    "AdCustomOverlaySpecUtil",
    "RelayHooks",
    "XFBApiAdCreativeCustomOverlayImageSpecCustomOverlaySpecificationResolver.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var r = o("RelayHooks").readFragment(
        e !== void 0
          ? e
          : (e = n(
              "XFBApiAdCreativeCustomOverlayImageSpecCustomOverlaySpecificationResolver.graphql",
            )),
        t,
      );
      return o("AdCustomOverlaySpecUtil").coerceGraphQLSpecToGraphAPI(r);
    }
    l.custom_overlay_specification = s;
  },
  98,
);
