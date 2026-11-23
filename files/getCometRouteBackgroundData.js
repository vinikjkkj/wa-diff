__d(
  "getCometRouteBackgroundData",
  ["parseCometRouteFetchResult"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      if (t == null) return null;
      if (e.route.type === "valid_route") {
        var n,
          o =
            (n = e.route.backgroundRouteConfig) == null
              ? void 0
              : n.defaultBackgroundUrl;
        if (o == null) return null;
        var a = await r("parseCometRouteFetchResult")(o, t);
        return { backgroundUrl: o, result: a };
      }
      return null;
    }
    l.default = e;
  },
  98,
);
