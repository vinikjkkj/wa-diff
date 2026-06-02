__d(
  "WAWebNewsletterGetMessageUpdatesJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterBackendAddOnsUtils",
    "WAWebNewsletterGetMessageUpdatesQuery",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ids"];
    function s(t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterMessageUpdates",
          async function () {
            var r = n.ids,
              a = babelHelpers.objectWithoutPropertiesLoose(n, e),
              i = await o(
                "WAWebNewsletterGetMessageUpdatesQuery",
              ).getNewsletterMessageUpdatesQuery(t, a),
              l = i.timestamp,
              s = i.updates,
              u = await o(
                "WAWebNewsletterBackendAddOnsUtils",
              ).getMsgsAndAddOnsFromUpdates(
                s,
                o("WAWebWidFactory").createWid(t),
                l,
              );
            return (
              await o("WAWebNewsletterBackendAddOnsUtils").updateAddOnDbRecords(
                babelHelpers.extends({}, u, { ids: r, timestamp: l }),
              ),
              babelHelpers.extends({}, u, { timestamp: l, ids: r })
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterMessageUpdates = s;
  },
  98,
);
