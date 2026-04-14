__d(
  "WAWebNewsletterSubscriberListJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterSubscriberListQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsNewsletter",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, r) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterSubscribers",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var n = { view: r, newsletterJid: e },
              a = yield o(
                "WAWebUserPrefsNewsletter",
              ).NewsletterSubscribersCache.get(n);
            if (a != null) return { followers: a };
            var i = yield o(
              "WAWebNewsletterSubscriberListQueryJob",
            ).getNewsletterSubscribers(e, t);
            return (
              (i == null ? void 0 : i.followers) != null &&
                (yield o(
                  "WAWebUserPrefsNewsletter",
                ).NewsletterSubscribersCache.set(n, i.followers)),
              i
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterSubscribers = e;
  },
  98,
);
