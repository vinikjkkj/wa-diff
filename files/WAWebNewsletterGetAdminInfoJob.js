__d(
  "WAWebNewsletterGetAdminInfoJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchNewsletterAdminInfoJob",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterAdminInfo",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var n = yield o(
                  "WAWebMexFetchNewsletterAdminInfoJob",
                ).mexFetchNewsletterAdminInfo(t),
                r = n.adminCount,
                a = n.adminProfile;
              return {
                adminCount:
                  r != null
                    ? r
                    : o("WAWebNewsletterModelUtils")
                        .DEFAULT_NEWSLETTER_ADMIN_COUNT,
                adminProfile: a,
              };
            } catch (t) {
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[getNewsletterAdminInfo] fetch failed, using default",
                    ])),
                ),
                {
                  adminCount: o("WAWebNewsletterModelUtils")
                    .DEFAULT_NEWSLETTER_ADMIN_COUNT,
                  adminProfile: null,
                }
              );
            }
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterAdminInfo = s;
  },
  98,
);
