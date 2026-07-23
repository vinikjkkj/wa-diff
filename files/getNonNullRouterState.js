__d(
  "getNonNullRouterState",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (!e)
        throw r("FBLogger")("comet_infra")
          .addToCategoryKey("missing_router_state")
          .mustfixThrow(
            "No route state before first use... did you forget to init?",
          );
      return e;
    }
    l.default = e;
  },
  98,
);
