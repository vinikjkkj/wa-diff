__d(
  "WAWebGetReachoutTimelockJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchReachoutTimelockJob",
    "WAWebMexReachoutTimelockNotificationHandler",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var e = await u();
      if (e != null) {
        var t = e.enforcement_type,
          n = e.is_active,
          r = e.time_enforcement_ends;
        await o(
          "WAWebMexReachoutTimelockNotificationHandler",
        ).handleReachoutTimelockUpdate(n, t, r);
      }
    }
    function u() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getReachoutTimelock",
          async function () {
            try {
              var t = await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.fetchReachoutTimelock = s;
  },
  98,
);
