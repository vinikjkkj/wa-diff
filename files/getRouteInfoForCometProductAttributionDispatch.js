__d(
  "getRouteInfoForCometProductAttributionDispatch",
  ["FBLogger", "pushViewToRouteInfo"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (t != null)
        switch (t) {
          case "rootView":
            return e.main;
          case "hostedView": {
            var n = e.hosted;
            if (n) return n;
            r("FBLogger")("comet_infra").mustfix(
              "Navigation was dispatched from hostedView, but no hosted route in previous state",
            );
            break;
          }
          case "pushView": {
            var o = e.pushViewStack;
            if (o && o.length > 0)
              return r("pushViewToRouteInfo")(o[o.length - 1]);
            r("FBLogger")("comet_infra").mustfix(
              "Navigation was dispatched from pushView, but no push view route in previous state",
            );
            break;
          }
        }
      return e.main;
    }
    l.default = e;
  },
  98,
);
