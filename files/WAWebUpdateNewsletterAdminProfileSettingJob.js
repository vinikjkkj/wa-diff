__d(
  "WAWebUpdateNewsletterAdminProfileSettingJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebDbErrors",
    "WAWebMexUpdateNewsletterAdminProfileSettingJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterAdminProfileSetting",
          async function () {
            await u(e);
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function u(t) {
      var n = t.adminProfilesEnabled,
        r = t.newsletterJid;
      await o(
        "WAWebMexUpdateNewsletterAdminProfileSettingJob",
      ).mexUpdateNewsletterAdminProfileSetting({
        adminProfilesEnabled: n,
        newsletterID: r,
      });
      try {
        return await o("WAWebSchemaNewsletterMetadata")
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
    }
    l.updateNewsletterAdminProfileSetting = s;
  },
  98,
);
