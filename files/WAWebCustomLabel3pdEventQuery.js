__d(
  "WAWebCustomLabel3pdEventQuery",
  [
    "WALogger",
    "WAWebCustomLabel3pdEventQuery.graphql",
    "WAWebGraphQLServerError",
    "WAWebNetworkStatus",
    "WAWebRelayClient",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = { type: "error" },
      d = e !== void 0 ? e : (e = n("WAWebCustomLabel3pdEventQuery.graphql"));
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield r("WAWebNetworkStatus").waitIfOffline();
          try {
            var n = yield o("WAWebRelayClient").fetchQuery(d, {
              custom_labels: e,
              expt_group: t,
            });
            if (n == null) return c;
            var a = n.xwa_get_3pd_event;
            if (a == null) return c;
            var i = {
              type: "success",
              events: a.map(function (e) {
                var t;
                return {
                  custom_label: (t = e.custom_label) != null ? t : "",
                  ctwa_3pd_conversion_type: e.ctwa_3pd_conversion_type,
                  ctwa_3pd_conversion_subtype: e.ctwa_3pd_conversion_subtype,
                  ctwa_3pd_conversion_metadata: e.ctwa_3pd_conversion_metadata,
                };
              }),
            };
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "getCustomLabel3pdEvent: success",
                  ])),
              ),
              i
            );
          } catch (e) {
            return (
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "getCustomLabel3pdEvent: failed with error",
                  ])),
              ),
              e instanceof o("WAWebGraphQLServerError").GraphQLServerError
                ? { type: "graphql-error", error: e }
                : c
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    l.getCustomLabel3pdEvent = m;
  },
  98,
);
