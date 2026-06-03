__d(
  "WAWebNewsletterDirectorySearchQueryJob",
  [
    "WAWebBackendErrors",
    "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob",
    "WAWebMexFetchNewsletterDirectoryListJob",
    "WAWebMexFetchNewsletterDirectorySearchResultsJob",
    "WAWebMexFetchRecommendedNewslettersJob",
    "WAWebMexFetchSimilarNewslettersJob",
    "WAWebMexNewsletterParseUtils",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r,
            a = yield o(
              "WAWebMexFetchRecommendedNewslettersJob",
            ).mexFetchRecommendedNewsletters(e, t),
            i = d(
              (n = a.xwa2_newsletters_recommended) == null ? void 0 : n.result,
              "recommended_newsletters",
            );
          return {
            pageInfo:
              (r = a.xwa2_newsletters_recommended) == null
                ? void 0
                : r.page_info,
            newsletters: i,
          };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield o(
                  "WAWebMexFetchSimilarNewslettersJob",
                ).mexFetchSimilarNewsletters(e),
                n = d(t, "similar_newsletters");
              return { pageInfo: null, newsletters: n };
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      if (e != null)
        return e.map(function (e) {
          var t = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
            e,
          );
          if (t != null) return m(t);
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            500,
            "unexpected null mex newsletter metadata",
          );
        });
      throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
        500,
        "unexpected " + t + " response",
      );
    }
    function m(e) {
      var t = e.idJid,
        n = e.newsletterCreationTimeMetadataMixin,
        r = e.newsletterDescriptionMetadataMixin,
        o = e.newsletterInviteLinkMetadataMixin,
        a = e.newsletterNameMetadataMixin,
        i = e.newsletterPictureMetadataMixin,
        l = e.newsletterPrivacyMetadataMixin,
        s = e.newsletterStatusMetadata,
        u = e.newsletterSubscribersMetadataMixin,
        c = e.newsletterVerificationMetadataMixin;
      return {
        idJid: t,
        newsletterCreationTimeMetadataMixin: n,
        newsletterNameMetadataMixin: a,
        newsletterPictureMetadataMixin: i,
        newsletterDescriptionMetadataMixin: r,
        newsletterInviteLinkMetadataMixin: o,
        newsletterSubscribersMetadataMixin: u,
        newsletterPrivacyMetadataMixin: l,
        newsletterVerificationMetadataMixin: c,
        newsletterStatusMetadata: s,
      };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t,
                n,
                r = yield o(
                  "WAWebMexFetchNewsletterDirectoryListJob",
                ).mexFetchNewsletterDirectoryList(e),
                a = d(
                  (t = r.xwa2_newsletters_directory_list) == null
                    ? void 0
                    : t.result,
                  "directory_v2_list_newsletters",
                );
              return {
                pageInfo:
                  (n = r.xwa2_newsletters_directory_list) == null
                    ? void 0
                    : n.page_info,
                newsletters: a,
              };
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t,
                n,
                r = yield o(
                  "WAWebMexFetchNewsletterDirectorySearchResultsJob",
                ).mexFetchNewsletterDirectorySearchResults(e),
                a = d(
                  (t = r.xwa2_newsletters_directory_search) == null
                    ? void 0
                    : t.result,
                  "directory_v2_search_newsletter",
                );
              return {
                pageInfo:
                  (n = r.xwa2_newsletters_directory_search) == null
                    ? void 0
                    : n.page_info,
                newsletters: a,
              };
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t,
                n = yield o(
                  "WAWebMexFetchNewsletterDirectoryCategoriesPreviewJob",
                ).mexFetchNewsletterDirectoryCategoriesPreview(e),
                r =
                  (t = n.xwa2_newsletters_directory_category_preview) == null
                    ? void 0
                    : t.result,
                a =
                  r == null
                    ? void 0
                    : r.map(function (e) {
                        var t = d(
                          e.newsletters,
                          "directory_category_preview_newsletters",
                        );
                        return {
                          category: {
                            type: o(
                              "WAWebNewsletterDirectoryCategoryUtils",
                            ).getNewsletterDirectoryCategoryTypeFromValue(
                              e.category,
                            ),
                            name: e.category_title,
                          },
                          newsletters: t,
                        };
                      });
              return a != null ? a : [];
            });
            return function () {
              return t.apply(this, arguments);
            };
          })();
          return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
        })),
        y.apply(this, arguments)
      );
    }
    ((l.getRecommendedNewslettersQuery = e),
      (l.getSimilarNewslettersQuery = u),
      (l.getNewsletterDirectoryListQuery = p),
      (l.getNewsletterDirectorySearchResultsQuery = f),
      (l.getNewsletterDirectoryCategoriesPreviewQuery = h));
  },
  98,
);
