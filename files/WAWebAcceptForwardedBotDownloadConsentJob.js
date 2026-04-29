__d(
  "WAWebAcceptForwardedBotDownloadConsentJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebModelStorageUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "acceptForwardedBotDownloadConsent",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield o("WAWebModelStorageUtils")
              .getStorage()
              .lock(
                ["message"],
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t[0],
                        r = yield n.get(e.toString());
                      (r == null ? void 0 : r.forwardedAiBotMessageInfo) !=
                        null &&
                        (yield n.merge(e.toString(), {
                          forwardedAiBotMessageInfo: babelHelpers.extends(
                            {},
                            r.forwardedAiBotMessageInfo,
                            { validationStatus: "download_consent_accepted" },
                          ),
                        }));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.acceptForwardedBotDownloadConsentJob = e;
  },
  98,
);
