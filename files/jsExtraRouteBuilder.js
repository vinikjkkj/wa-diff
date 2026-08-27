__d(
  "jsExtraRouteBuilder",
  ["FBLogger", "jsRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = r("jsRouteBuilder")(e, t, o),
        i = n.reduce(function (e, n) {
          return (
            e === void 0 && (e = {}),
            typeof n == "string" &&
              (e[n] = r("jsRouteBuilder")(n, t, o, null, !0).buildURL),
            e
          );
        }, {});
      return {
        buildExtraURL: function (t, n) {
          if (typeof t != "string" || i[t] == null)
            throw r("FBLogger")("comet_infra").mustfixThrow(
              "Route builder for extra path does not exist",
            );
          return i[t](n);
        },
        buildUri: function (t) {
          return a.buildUri(t);
        },
        buildURL: function (t) {
          return a.buildURL(t);
        },
      };
    }
    l.default = e;
  },
  98,
);
