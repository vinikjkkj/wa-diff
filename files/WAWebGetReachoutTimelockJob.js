__d(
  "WAWebGetReachoutTimelockJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchReachoutTimelockJob",
    "WAWebMexReachoutTimelockNotificationHandler",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield c();
          if (e != null) {
            var t = e.enforcement_type,
              n = e.is_active,
              r = e.time_enforcement_ends;
            yield o(
              "WAWebMexReachoutTimelockNotificationHandler",
            ).handleReachoutTimelockUpdate(n, t, r);
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getReachoutTimelock",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var t = yield o(
                "WAWebMexFetchReachoutTimelockJob",
              ).mexFetchReachoutTimelock();
              return t;
            } catch (t) {
              throw (
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][WA-ICE][RET] GET Reachout Timelock job error",
                      ])),
                  )
                  .tags("GQL", "MEX", "wa-ice", "RET"),
                t
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.fetchReachoutTimelock = s;
  },
  98,
);
