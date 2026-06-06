__d(
  "WAWebNewsletterGetAdminInfoJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebMexFetchNewsletterAdminInfoJob",
    "WAWebNewsletterModelUtils",
    "WAWebOrchestratorNonPersistedJob",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterAdminInfo",
          async function () {
            try {
              var n = await o(
                  "WAWebMexFetchNewsletterAdminInfoJob",
                ).mexFetchNewsletterAdminInfo(t),
                r = n.adminCount,
                a = n.adminProfile,
                i = n.adminProfilesSettingEnabled;
              return {
                adminCount:
                  r != null
                    ? r
                    : o("WAWebNewsletterModelUtils")
                        .DEFAULT_NEWSLETTER_ADMIN_COUNT,
                adminProfile: a,
                adminProfilesSettingEnabled: i,
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
                  adminProfilesSettingEnabled: !1,
                }
              );
            }
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    l.getNewsletterAdminInfo = s;
  },
  98,
);
