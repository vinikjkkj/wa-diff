__d(
  "WAWebStoreNewsletterMessageAddOns",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterAddOnsUtils",
    "WAWebNewsletterReactionUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebdbCRUDOperationsNewsletterReaction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = {
      reactions: function (t) {
        var e = t.map(
          o("WAWebNewsletterReactionUtils").mapFrontendReactionToBackend,
        );
        return o(
          "WAWebdbCRUDOperationsNewsletterReaction",
        ).createOrUpdateNewsletterReactions(e);
      },
    };
    function s(t) {
      var n = o("WAWebNewsletterAddOnsUtils").getAddOnsFromMessages(t);
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "storeNewsletterMessageAddOns",
          async function () {
            var t = Object.entries(n).map(function (t) {
              var r = t[0],
                o = e[r],
                a = n[r];
              return o(a);
            });
            await Promise.all(t);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.storeNewsletterMessageAddOns = s;
  },
  98,
);
