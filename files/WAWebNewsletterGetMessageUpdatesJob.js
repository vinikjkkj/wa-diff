__d(
  "WAWebNewsletterGetMessageUpdatesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGetMessageUpdatesQuery",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ids"];
    function s(t, r) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterMessageUpdates",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = r.ids,
              a = babelHelpers.objectWithoutPropertiesLoose(r, e),
              i = yield o(
                "WAWebNewsletterGetMessageUpdatesQuery",
              ).getNewsletterMessageUpdatesQuery(t, a),
              l = i.timestamp,
              s = i.updates,
              u = yield o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).getMsgsAndAddOnsFromUpdates(
                s,
                o("WAWebWidFactory").createWid(t),
                l,
              );
            return (
              yield o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(
                babelHelpers.extends({}, u, { ids: n, timestamp: l }),
              ),
              babelHelpers.extends({}, u, { timestamp: l, ids: n })
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterMessageUpdates = s;
  },
  98,
);
