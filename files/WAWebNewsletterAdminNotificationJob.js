__d(
  "WAWebNewsletterAdminNotificationJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var r = t.countryCodes,
        a = t.newsletterJid,
        i = t.priority,
        l = i === void 0 ? o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW : i,
        s = t.toAdd;
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateGeosuspendedCountry",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .get(a);
            if (t == null) return (e || (e = n("Promise"))).resolve();
            var i = t.geosuspendedCountries,
              l = i === void 0 ? new Map() : i;
            return (
              s
                ? r.forEach(function (e) {
                    l == null || l.set(e, { geosuspended: !0 });
                  })
                : r.forEach(function (e) {
                    l == null || l.delete(e);
                  }),
              (t.geosuspendedCountries = l),
              o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .merge(a, t)
            );
          }),
          { priority: l },
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
              .merge(e, { id: e, adminProfile: t });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.HIGH },
        )
        .waitUntilCompleted();
    }
    function c(e, t) {
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
    function d(e) {
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
    ((l.updateGeosuspendedCountry = s),
      (l.updateNewsletterAdminProfile = u),
      (l.updateNewsletterAdminProfileSettings = c),
      (l.updateProfilePictureDeletionAlertState = d));
  },
  98,
);
