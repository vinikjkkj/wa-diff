__d(
  "getCometRouteFetchRouteData",
  ["Promise", "buildCometErrorRoute", "parseCometRouteFetchResult"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, o, a) {
      return o.error
        ? (e || (e = n("Promise"))).resolve({
            prefetchable: !0,
            route: r("buildCometErrorRoute")(t, a),
          })
        : r("parseCometRouteFetchResult")(t, o.result);
    }
    l.default = s;
  },
  98,
);
