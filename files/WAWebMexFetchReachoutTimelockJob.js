__d(
  "WAWebMexFetchReachoutTimelockJob",
  [
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexClient",
    "WAWebMexFetchReachoutTimelockJobQuery.graphql",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        e !== void 0
          ? e
          : (e = n("WAWebMexFetchReachoutTimelockJobQuery.graphql"));
    function c() {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = {},
            t = yield o("WAWebMexClient").fetchQuery(u, e);
          if (
            (t == null ? void 0 : t.xwa2_fetch_account_reachout_timelock) ==
            null
          )
            throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
              500,
              "Mex unexpected null response for fetching reachout timelock",
            );
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[MEX][WA-ICE][RET] fetched reachout timelock",
                ])),
            )
            .tags("GQL", "MEX", "wa-ice", "RET");
          var n = t == null ? void 0 : t.xwa2_fetch_account_reachout_timelock,
            r = n.enforcement_type,
            a = n.is_active,
            i = n.time_enforcement_ends;
          return {
            is_active: a,
            time_enforcement_ends: i,
            enforcement_type: r,
          };
        })),
        d.apply(this, arguments)
      );
    }
    l.mexFetchReachoutTimelock = c;
  },
  98,
);
