__d(
  "WAWebReadHatchConnectorCardRoute",
  ["WAWebHatchConnectorCardRoute", "WAWebRequestHatchConnectors"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return o("WAWebRequestHatchConnectors")
        .requestHatchConnectors()
        .then(
          function (r) {
            return o(
              "WAWebHatchConnectorCardRoute",
            ).resolveHatchConnectorCardRoute(
              e,
              r.find(function (e) {
                return e.id === t;
              }),
              !1,
              n,
            );
          },
          function () {
            return "fallback_url";
          },
        );
    }
    l.readHatchConnectorCardRoute = e;
  },
  98,
);
