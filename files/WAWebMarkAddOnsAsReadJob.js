__d(
  "WAWebMarkAddOnsAsReadJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebAddOnsMarkAddOnsAsReadDb",
    "WAWebAddonMarkAsReadUtils",
    "WAWebBackendApi",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "markAddOnsAsRead",
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    (yield o(
                      "WAWebAddOnsMarkAddOnsAsReadDb",
                    ).markAddOnsAsReadDb(e.updates),
                      o("WAWebBackendApi").frontendFireAndForget(
                        "markAddOnsAsReadUi",
                        { updatedMsgKeys: e.updates },
                      ));
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
            )
            .waitUntilCompleted({ updates: e });
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "markAddOnsAsReadUsingAddonInfra",
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    return o("WAWebAddonMarkAsReadUtils").processMarkAsRead(
                      e.addons,
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW },
            )
            .waitUntilCompleted({ addons: e });
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      return t.length === 0
        ? (e || (e = n("Promise"))).resolve({
            updatedAddOns: new Map(),
            updatedOrphans: [],
          })
        : o("WAWebOrchestratorNonPersistedJob")
            .createNonPersistedJob(
              "markUnclassifiedAddOnsAsRead",
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var t = yield o(
                      "WAWebAddOnsMarkAddOnsAsReadDb",
                    ).markUnclassifiedAddOnsAsReadDb(e.msgKeys);
                    return (
                      o("WAWebBackendApi").frontendFireAndForget(
                        "markAddOnsAsReadUi",
                        { updatedMsgKeys: t.updatedAddOns },
                      ),
                      t
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
            )
            .waitUntilCompleted({ msgKeys: t });
    }
    ((l.markAddOnsAsReadJob = s),
      (l.markAddOnsAsReadUsingAddonInfraJob = c),
      (l.markUnclassifiedAddOnsAsReadJob = m));
  },
  98,
);
