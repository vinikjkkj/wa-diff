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
    function s(t, r, a, i) {
      return (
        i === void 0 && (i = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateGeosuspendedCountry",
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var i = yield o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .get(t);
              if (i == null) return (e || (e = n("Promise"))).resolve();
              var l = i.geosuspendedCountries,
                s = l === void 0 ? new Map() : l;
              return (
                a
                  ? r.forEach(function (e) {
                      s == null || s.set(e, { geosuspended: !0 });
                    })
                  : r.forEach(function (e) {
                      s == null || s.delete(e);
                    }),
                (i.geosuspendedCountries = s),
                o("WAWebSchemaNewsletterMetadata")
                  .getNewsletterMetadataTable()
                  .merge(t, i)
              );
            }),
            { priority: i },
          )
          .waitUntilCompleted()
      );
    }
    function u(e) {
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
      (l.updateProfilePictureDeletionAlertState = u));
  },
  98,
);
