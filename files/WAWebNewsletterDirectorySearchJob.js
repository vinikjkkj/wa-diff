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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 20;
    function u(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getRecommendedNewsletters",
          async function () {
            var t = await o(
              "WAWebUserPrefsNewsletter",
            ).getCachedRecommendedNewsletters();
            if (t != null) return t;
            var n = await o(
                "WAWebNewsletterDirectorySearchQueryJob",
              ).getRecommendedNewslettersQuery(s, e === "" ? [] : [e]),
              r = n.newsletters;
            return (
              await o(
                "WAWebUserPrefsNewsletter",
              ).setCachedRecommendedNewsletters(r),
              r
            );
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function c(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getSimilarNewsletters",
          async function () {
            var t = await o(
                "WAWebNewsletterDirectorySearchQueryJob",
              ).getSimilarNewslettersQuery(e),
              n = t.newsletters;
            return n;
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function d(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterDirectoryList",
          async function () {
            var t = {
                view: e.view,
                countryCodes: e.countryCodes,
                categories: e.categories,
              },
              n = e.cursorToken == null || e.cursorToken === "";
            if (n) {
              var r = await o(
                "WAWebUserPrefsNewsletter",
              ).NewsletterDirectoryPageCache.get(t);
              if (r != null) return r;
            }
            var a = await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function m(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterDirectorySearchResults",
          async function () {
            var t = await o(
              "WAWebNewsletterDirectorySearchQueryJob",
            ).getNewsletterDirectorySearchResultsQuery(e);
            return (_(t.newsletters), t);
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    function p(e) {
      return o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "getNewsletterDirectoryCategoriesPreviewResults",
          async function () {
            var t = babelHelpers.extends({}, e),
              n = await o(
                "WAWebUserPrefsNewsletter",
              ).NewsletterDirectoryCategoriesPreviewCache.get(t);
            if (n != null) return n;
            var r = await o(
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
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.UI_ACTION },
        )
        .waitUntilCompleted();
    }
    async function _(t) {
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
          r = await o("WAWebSchemaNewsletterMetadata")
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
        await o("WAWebNewsletterMetadataJob").updateNewsletterMetadata(a);
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[maybeUpdateDatabaseRecords] failed to update db records",
            ])),
        );
      }
    }
    ((l.getRecommendedNewsletters = u),
      (l.getSimilarNewsletters = c),
      (l.getNewsletterDirectoryList = d),
      (l.getNewsletterDirectorySearchResults = m),
      (l.getNewsletterDirectoryCategoriesPreview = p));
  },
  98,
);
