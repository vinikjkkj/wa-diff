__d(
  "WAWebUpdateNewsletterAdminProfileSettingJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDbErrors",
    "WAWebMexUpdateNewsletterAdminProfileSettingJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterAdminProfileSetting",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield u(e);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.adminProfilesEnabled,
            r = t.newsletterJid;
          yield o(
            "WAWebMexUpdateNewsletterAdminProfileSettingJob",
          ).mexUpdateNewsletterAdminProfileSetting({
            adminProfilesEnabled: n,
            newsletterID: r,
          });
          try {
            return yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(r, { id: r, adminProfilesSettingEnabled: n });
          } catch (t) {
            throw (
              t instanceof o("WAWebDbErrors").DbOnLogoutAbort ||
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[newsletter][updateNewsletterAdminProfileSetting] db persist failed",
                      ])),
                  )
                  .tags("newsletter")
                  .sendLogs("newsletter-update-admin-profile-setting-db-fail"),
              t
            );
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.updateNewsletterAdminProfileSetting = s;
  },
  98,
);
