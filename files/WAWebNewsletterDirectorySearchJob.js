__d(
  "WAWebNewsletterDirectorySearchJob",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebNewsletterDirectorySearchQueryJob",
    "WAWebNewsletterMetadataJob",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebSchemaNewsletterMetadata",
    "WAWebUserPrefsNewsletter",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 20;
    function u(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getRecommendedNewsletters",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o(
              "WAWebUserPrefsNewsletter",
            ).getCachedRecommendedNewsletters();
            if (t != null) return t;
            var n = yield o(
                "WAWebNewsletterDirectorySearchQueryJob",
              ).getRecommendedNewslettersQuery(s, [e]),
              r = n.newsletters;
            return (
              yield o(
                "WAWebUserPrefsNewsletter",
              ).setCachedRecommendedNewsletters(r),
              r
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getSimilarNewsletters",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o(
                "WAWebNewsletterDirectorySearchQueryJob",
              ).getSimilarNewslettersQuery(e),
              n = t.newsletters;
            return n;
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function d(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterDirectoryList",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = {
                view: e.view,
                countryCodes: e.countryCodes,
                categories: e.categories,
              },
              n = e.cursorToken == null || e.cursorToken === "";
            if (n) {
              var r = yield o(
                "WAWebUserPrefsNewsletter",
              ).NewsletterDirectoryPageCache.get(t);
              if (r != null) return r;
            }
            var a = yield o(
              "WAWebNewsletterDirectorySearchQueryJob",
            ).getNewsletterDirectoryListQuery(e);
            return (
              n &&
                o("WAWebUserPrefsNewsletter").NewsletterDirectoryPageCache.set(
                  t,
                  a,
                ),
              _(a.newsletters),
              a
            );
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterDirectorySearchResults",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = yield o(
              "WAWebNewsletterDirectorySearchQueryJob",
            ).getNewsletterDirectorySearchResultsQuery(e);
            return (_(t.newsletters), t);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterDirectoryCategoriesPreviewResults",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = babelHelpers.extends({}, e),
              n = yield o(
                "WAWebUserPrefsNewsletter",
              ).NewsletterDirectoryCategoriesPreviewCache.get(t);
            if (n != null) return n;
            var r = yield o(
              "WAWebNewsletterDirectorySearchQueryJob",
            ).getNewsletterDirectoryCategoriesPreviewQuery(e);
            o(
              "WAWebUserPrefsNewsletter",
            ).NewsletterDirectoryCategoriesPreviewCache.set(t, r);
            var a = r.reduce(function (e, t) {
              var n = t.newsletters;
              return e.concat(n);
            }, []);
            return (_(a), r);
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.reduce(function (e, t) {
                var n;
                return e.set(t.idJid, {
                  size:
                    (n = t.newsletterSubscribersMetadataMixin) == null
                      ? void 0
                      : n.subscribersCount,
                });
              }, new Map()),
              r = yield o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .bulkGet(
                  t.map(function (e) {
                    return e.idJid;
                  }),
                )
                .then(function (e) {
                  return e.filter(Boolean);
                }),
              a = r.map(function (e) {
                return babelHelpers.extends({ id: e.id }, n.get(e.id));
              });
            yield o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(a);
          } catch (t) {
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[maybeUpdateDatabaseRecords] failed to update db records",
                ])),
            );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.getRecommendedNewsletters = u),
      (l.getSimilarNewsletters = c),
      (l.getNewsletterDirectoryList = d),
      (l.getNewsletterDirectorySearchResults = m),
      (l.getNewsletterDirectoryCategoriesPreview = p));
  },
  98,
);
