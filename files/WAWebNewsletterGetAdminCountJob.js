__d(
  "WAWebNewsletterGetAdminCountJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchNewsletterAdminCountJob",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterAdminCount",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var n = yield o(
                "WAWebMexFetchNewsletterAdminCountJob",
              ).mexFetchNewsletterAdminCount(t);
              return n != null
                ? n
                : o("WAWebNewsletterModelUtils").DEFAULT_NEWSLETTER_ADMIN_COUNT;
            } catch (t) {
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[getNewsletterAdminCount] fetch failed, using default",
                    ])),
                ),
                o("WAWebNewsletterModelUtils").DEFAULT_NEWSLETTER_ADMIN_COUNT
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterAdminCount = s;
  },
  98,
);
