__d(
  "WAWebNewsletterMetadataJob",
  [
    "WAJobOrchestratorTypes",
    "WAWebNewsletterCreateJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSchemaProfilePicThumb",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["id"];
    function s() {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getAllNewslettersMetadata",
          function () {
            return o(
              "WAWebNewsletterMetadataQueryJob",
            ).queryAllNewslettersMetadata();
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function u(e, t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterMetadata",
          function () {
            return o(
              "WAWebNewsletterMetadataQueryJob",
            ).queryNewsletterMetadataByJid(e, t, n);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "updateNewsletterMetadata",
          function () {
            return Array.isArray(e)
              ? o("WAWebSchemaNewsletterMetadata")
                  .getNewsletterMetadataTable()
                  .bulkCreateOrMerge(e)
              : o("WAWebSchemaNewsletterMetadata")
                  .getNewsletterMetadataTable()
                  .createOrMerge(e.id, e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function d(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteNewsletterMetadata",
          function () {
            return o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .remove(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "deleteNewsletterPicture",
          function () {
            return o("WAWebSchemaProfilePicThumb")
              .getProfilePicThumbTable()
              .remove(e);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e, t, n) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "editNewsletterMetadata",
          function () {
            var r = n.picture,
              a = o("WAWebNewsletterCreateJob").encodePicture(r);
            return o(
              "WAWebNewsletterMetadataQueryJob",
            ).editNewsletterMetadataQuery(
              e,
              t,
              babelHelpers.extends({}, n, { picture: a }),
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function _(t, n, r, a) {
      return (
        a === void 0 && (a = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateNewsletterMessageDeliveryUpdates",
            async function () {
              var a = await o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .get(t);
              if (a == null) return Promise.resolve();
              var i = a.messageDeliveryUpdates,
                l = i === void 0 ? new Map() : i;
              return (
                r.forEach(function (e) {
                  l == null || l.delete(e);
                }),
                n.forEach(function (t) {
                  var n = t.id,
                    r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                  l == null || l.set(n, r);
                }),
                (a.messageDeliveryUpdates = l),
                o("WAWebSchemaNewsletterMetadata")
                  .getNewsletterMetadataTable()
                  .merge(t, a)
              );
            },
            { priority: a },
          )
          .waitUntilCompleted()
      );
    }
    function f(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "suspendNewsletter",
          function () {
            return o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(e, { id: e, suspended: !0 });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function g(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "geosuspendNewsletter",
          function () {
            return o("WAWebSchemaNewsletterMetadata")
              .getNewsletterMetadataTable()
              .merge(e, { id: e, suspended: !0, geosuspended: !0 });
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    ((l.getAllNewslettersMetadata = s),
      (l.getNewsletterMetadata = u),
      (l.updateNewsletterMetadata = c),
      (l.deleteNewsletterMetadata = d),
      (l.deleteNewsletterPicture = m),
      (l.editNewsletterMetadata = p),
      (l.updateNewsletterMessageDeliveryUpdates = _),
      (l.suspendNewsletter = f),
      (l.geosuspendNewsletter = g));
  },
  98,
);
