__d(
  "performRouteConsistencyPingback",
  [
    "FBLogger",
    "buildCometErrorRoute",
    "cometRouterNavigateOnWindow",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n, o, a, i, l, s) {
        r("promiseDone")(
          l.fetchForValidation(n, t, o, s),
          function (e) {
            if (!(a() || e == null))
              return e.type !== "valid_route"
                ? r("cometRouterNavigateOnWindow")(e.url, "unmatched", !0)
                : i(e);
          },
          function (e) {
            return e.errorRawTransportStatus === 404 ||
              e.errorType === "HTTP 404"
              ? r("cometRouterNavigateOnWindow")(t, "404", !0)
              : (r("FBLogger")("comet_infra")
                  .catching(e)
                  .warn(
                    'Error notifying server on navigation: type="' +
                      e.errorType +
                      '" msg="' +
                      e.errorMsg +
                      '" code="' +
                      e.code +
                      '" statusCode="' +
                      e.errorRawTransportStatus +
                      '"',
                  ),
                i(r("buildCometErrorRoute")(t, s)));
          },
        );
      },
      s = e;
    l.default = s;
  },
  98,
);
