__d(
  "CometPlatformRootClient",
  ["CometPlatformRouterRootClientRenderer", "CometRootConfigBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ConfigOrBuilder"];
    function s(t) {
      var n = t.ConfigOrBuilder,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = n instanceof r("CometRootConfigBuilder") ? n.buildRootConfig() : n;
      return o("CometPlatformRouterRootClientRenderer").initialize(
        babelHelpers.extends({ config: i }, a),
      );
    }
    function u(e) {
      return o("CometPlatformRouterRootClientRenderer").setInitDeferredPayload(
        e,
      );
    }
    ((l.initialize = s), (l.setInitDeferredPayload = u));
  },
  98,
);
