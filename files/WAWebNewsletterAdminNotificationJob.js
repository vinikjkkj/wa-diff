__d(
  "WAWebNewsletterAdminNotificationJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return (
        r === void 0 && (r = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateGeosuspendedCountry",
            async function () {
              var r = await o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .get(e);
              if (r == null) return Promise.resolve();
              var a = r.geosuspendedCountries,
                i = a === void 0 ? new Map() : a;
              return (
                n
                  ? t.forEach(function (e) {
                      i == null || i.set(e, { geosuspended: !0 });
                    })
                  : t.forEach(function (e) {
                      i == null || i.delete(e);
                    }),
                (r.geosuspendedCountries = i),
                o("WAWebSchemaNewsletterMetadata")
                  .getNewsletterMetadataTable()
                  .merge(e, r)
              );
            },
            { priority: r },
          )
          .waitUntilCompleted()
      );
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
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH },
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
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH },
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
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH },
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
