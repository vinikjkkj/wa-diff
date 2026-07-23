__d(
  "installToCometRouteMapper",
  ["CometRouteMapper", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t.error || s(e, t.result);
    }
    function s(e, t) {
      if (t != null) {
        if (t.type === "routeRedirect") {
          (r("CometRouteMapper").installRedirect(
            e,
            t.routeRedirect,
            t.routeMatchInfos,
          ),
            s(t.redirectUrl, t.redirectResult));
          return;
        }
        if (t.type === "routeDefinition") {
          r("CometRouteMapper").installRoute(
            e,
            t.routeDefinition,
            t.routeMatchInfos,
          );
          return;
        }
        if (t.type === "routeResolver") {
          r("CometRouteMapper").installRouteResolver(
            e,
            t.routeResolver,
            t.routeMatchInfos,
          );
          return;
        }
        r("FBLogger")("comet_infra").mustfix(
          "CometRouteStore encountered a bad fetch result: %s",
          t.type,
        );
      }
    }
    l.default = e;
  },
  98,
);
