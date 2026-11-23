__d(
  "WAWebNewsletterAdminNotificationJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.countryCodes,
        n = e.newsletterJid,
        r = e.priority,
        a = r === void 0 ? o("WAJobOrchestratorTypes").JobPriority.LOW : r,
        i = e.toAdd;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateGeosuspendedCountry",
          async function () {
            var e = await o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .get(n);
            if (e == null) return Promise.resolve();
            var r = e.geosuspendedCountries,
              a = r === void 0 ? new Map() : r;
            return (
              i
                ? t.forEach(function (e) {
                    a == null || a.set(e, { geosuspended: !0 });
                  })
                : t.forEach(function (e) {
                    a == null || a.delete(e);
                  }),
              (e.geosuspendedCountries = a),
              o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .merge(n, e)
            );
          },
          { priority: a },
        )
        .waitUntilCompleted();
    }
    function s(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterAdminProfile",
          function () {
            return o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(e, { id: e, adminProfile: t });
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.HIGH },
        )
        .waitUntilCompleted();
    }
    function u(e, t) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterAdminProfile",
          function () {
            return o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(e, { id: e, adminProfilesSettingEnabled: t });
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.HIGH },
        )
        .waitUntilCompleted();
    }
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateProfilePictureDeletion",
          function () {
            return o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(e, { id: e, hasProfilePictureDeletionAlerts: !0 });
          },
          { priority: o("WAJobOrchestratorTypes").JobPriority.HIGH },
        )
        .waitUntilCompleted();
    }
    ((l.updateGeosuspendedCountry = e),
      (l.updateNewsletterAdminProfile = s),
      (l.updateNewsletterAdminProfileSettings = u),
      (l.updateProfilePictureDeletionAlertState = c));
  },
  98,
);
