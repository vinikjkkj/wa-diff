__d(
  "WAWebNewsletterSubscriberListJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterSubscriberListQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebUserPrefsNewsletter",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterSubscribers",
          async function () {
            var r = { view: n, newsletterJid: e },
              a = await o(
                "WAWebUserPrefsNewsletter",
              ).NewsletterSubscribersCache.get(r);
            if (a != null) return { followers: a };
            var i = await o(
              "WAWebNewsletterSubscriberListQueryJob",
            ).getNewsletterSubscribers(e, t);
            return (
              (i == null ? void 0 : i.followers) != null &&
                (await o(
                  "WAWebUserPrefsNewsletter",
                ).NewsletterSubscribersCache.set(r, i.followers)),
              i
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterSubscribers = e;
  },
  98,
);
