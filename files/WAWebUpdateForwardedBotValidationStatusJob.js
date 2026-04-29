__d(
  "WAWebUpdateForwardedBotValidationStatusJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateForwardedBotValidationStatus",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var r = n[0],
                        o = yield r.get(e.toString());
                      (o == null ? void 0 : o.forwardedAiBotMessageInfo) !=
                        null &&
                        (yield r.merge(e.toString(), {
                          forwardedAiBotMessageInfo: babelHelpers.extends(
                            {},
                            o.forwardedAiBotMessageInfo,
                            { validationStatus: t },
                          ),
                        }));
                    },
                  );
                  return function (e) {
                    return r.apply(this, arguments);
                  };
                })(),
              );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.updateForwardedBotValidationStatus = e;
  },
  98,
);
