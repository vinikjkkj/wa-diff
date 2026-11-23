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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n,
        r,
        a = await o(
          "WAWebMexFetchRecommendedNewslettersJob",
        ).mexFetchRecommendedNewsletters(e, t),
        i = u(
          (n = a.xwa2_newsletters_recommended) == null ? void 0 : n.result,
          "recommended_newsletters",
        );
      return {
        pageInfo:
          (r = a.xwa2_newsletters_recommended) == null ? void 0 : r.page_info,
        newsletters: i,
      };
    }
    async function s(e) {
      var t = async function () {
        var t = await o(
            "WAWebMexFetchSimilarNewslettersJob",
          ).mexFetchSimilarNewsletters(e),
          n = u(t, "similar_newsletters");
        return { pageInfo: null, newsletters: n };
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
    }
    function u(e, t) {
      if (e != null)
        return e.map(function (e) {
          var t = o("WAWebMexNewsletterParseUtils").parseMexNewsletterResponse(
            e,
          );
          if (t != null) return c(t);
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
    function c(e) {
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
    async function d(e) {
      var t = async function () {
        var t,
          n,
          r = await o(
            "WAWebMexFetchNewsletterDirectoryListJob",
          ).mexFetchNewsletterDirectoryList(e),
          a = u(
            (t = r.xwa2_newsletters_directory_list) == null ? void 0 : t.result,
            "directory_v2_list_newsletters",
          );
        return {
          pageInfo:
            (n = r.xwa2_newsletters_directory_list) == null
              ? void 0
              : n.page_info,
          newsletters: a,
        };
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
    }
    async function m(e) {
      var t = async function () {
        var t,
          n,
          r = await o(
            "WAWebMexFetchNewsletterDirectorySearchResultsJob",
          ).mexFetchNewsletterDirectorySearchResults(e),
          a = u(
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
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
    }
    async function p(e) {
      var t = async function () {
        var t,
          n = await o(
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
                  var t = u(
                    e.newsletters,
                    "directory_category_preview_newsletters",
                  );
                  return {
                    category: {
                      type: o(
                        "WAWebNewsletterDirectoryCategoryUtils",
                      ).getNewsletterDirectoryCategoryTypeFromValue(e.category),
                      name: e.category_title,
                    },
                    newsletters: t,
                  };
                });
        return a != null ? a : [];
      };
      return o("WAWebNewsletterRpcUtils").runWithBackoff(t);
    }
    ((l.getRecommendedNewslettersQuery = e),
      (l.getSimilarNewslettersQuery = s),
      (l.getNewsletterDirectoryListQuery = d),
      (l.getNewsletterDirectorySearchResultsQuery = m),
      (l.getNewsletterDirectoryCategoriesPreviewQuery = p));
  },
  98,
);
