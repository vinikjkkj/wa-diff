__d(
  "WAWebNewsletterMetadataJob",
  [
    "Promise",
    "WAJobOrchestratorTypes",
    "WAWebNewsletterCreateJob",
    "WAWebNewsletterMetadataQueryJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSchemaProfilePicThumb",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["id"],
      s;
    function u() {
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
    function c(e, t, n) {
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
    function d(e) {
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
    function m(e) {
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
    function p(e) {
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
    function _(e, t, n) {
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
    function f(t, r, a, i) {
      return (
        i === void 0 && (i = o("WAJobOrchestratorTypes").JOB_PRIORITY.LOW),
        o("WAWebOrchestratorNonPersistedJob")
          .createNonPersistedJob(
            "updateNewsletterMessageDeliveryUpdates",
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var i = yield o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .get(t);
              if (i == null) return (s || (s = n("Promise"))).resolve();
              var l = i.messageDeliveryUpdates,
                u = l === void 0 ? new Map() : l;
              return (
                a.forEach(function (e) {
                  u == null || u.delete(e);
                }),
                r.forEach(function (t) {
                  var n = t.id,
                    r = babelHelpers.objectWithoutPropertiesLoose(t, e);
                  u == null || u.set(n, r);
                }),
                (i.messageDeliveryUpdates = u),
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
    function g(e) {
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
    function h(e) {
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
    ((l.getAllNewslettersMetadata = u),
      (l.getNewsletterMetadata = c),
      (l.updateNewsletterMetadata = d),
      (l.deleteNewsletterMetadata = m),
      (l.deleteNewsletterPicture = p),
      (l.editNewsletterMetadata = _),
      (l.updateNewsletterMessageDeliveryUpdates = f),
      (l.suspendNewsletter = g),
      (l.geosuspendNewsletter = h));
  },
  98,
);
