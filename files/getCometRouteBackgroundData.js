__d(
  "getCometRouteBackgroundData",
  ["asyncToGeneratorRuntime", "parseCometRouteFetchResult"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t == null) return null;
          if (e.route.type === "valid_route") {
            var n,
              o =
                (n = e.route.backgroundRouteConfig) == null
                  ? void 0
                  : n.defaultBackgroundUrl;
            if (o == null) return null;
            var a = yield r("parseCometRouteFetchResult")(o, t);
            return { backgroundUrl: o, result: a };
          }
          return null;
        })),
        s.apply(this, arguments)
      );
    }
    l.default = e;
  },
  98,
);
