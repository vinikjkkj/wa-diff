__d(
  "WAWebStoreNewsletterMessageAddOns",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebNewsletterAddOnsUtils",
    "WAWebNewsletterReactionUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebdbCRUDOperationsNewsletterReaction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        reactions: function (t) {
          var e = t.map(
            o("WAWebNewsletterReactionUtils").mapFrontendReactionToBackend,
          );
          return o(
            "WAWebdbCRUDOperationsNewsletterReaction",
          ).createOrUpdateNewsletterReactions(e);
        },
      };
    function u(t) {
      var r = o("WAWebNewsletterAddOnsUtils").getAddOnsFromMessages(t);
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "storeNewsletterMessageAddOns",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = Object.entries(r).map(function (e) {
              var t = e[0],
                n = s[t],
                o = r[t];
              return n(o);
            });
            yield (e || (e = n("Promise"))).all(t);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.storeNewsletterMessageAddOns = u;
  },
  98,
);
