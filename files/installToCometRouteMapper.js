__d(
  "installToCometRouteMapper",
  ["CometRouteMapper", "FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!t.error) {
        var n = [];
        (s(e, t.result, n), r("CometRouteMapper").installBatch(n));
      }
    }
    function s(e, t, n) {
      if (t != null) {
        if (t.type === "routeRedirect") {
          (n.push({
            rawUrl: e,
            redirectUrl: t.redirectUrl,
            result: { routeRedirect: t.routeRedirect, type: "routeRedirect" },
            routeMatchInfos: t.routeMatchInfos,
          }),
            s(t.redirectUrl, t.redirectResult, n));
          return;
        }
        if (t.type === "routeDefinition") {
          n.push({
            rawUrl: e,
            result: {
              routeDefinition: t.routeDefinition,
              type: "routeDefinition",
            },
            routeMatchInfos: t.routeMatchInfos,
          });
          return;
        }
        if (t.type === "routeResolver") {
          n.push({
            rawUrl: e,
            result: { routeResolver: t.routeResolver, type: "routeResolver" },
            routeMatchInfos: t.routeMatchInfos,
          });
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
