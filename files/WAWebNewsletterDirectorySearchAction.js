__d(
  "WAWebNewsletterDirectorySearchAction",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebL10N",
    "WAWebNewsletterDirectorySearchJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterMetadataGetters",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["skipSubscribedNewsletters"],
      s = ["skipSubscribedNewsletters"],
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h;
    function y(e) {
      var t = e.newsletterMetadata;
      return t != null && o("WAWebNewsletterMetadataGetters").getIsPreview(t);
    }
    async function C(e) {
      var t = e.categories,
        n = e.countryCodes,
        r = e.cursorToken,
        a = e.searchText,
        i = e.skipSubscribedNewsletters,
        l = e.view,
        s = o("WAWebABProps").getABPropConfigValue(
          "channels_directory_page_size",
        );
      return a.trim() !== ""
        ? S({
            searchText: a,
            limit: s,
            cursorToken: r,
            categories: t,
            skipSubscribedNewsletters: i,
          })
        : v({
            view: l,
            limit: s,
            countryCodes: n,
            cursorToken: r,
            categories: t,
            skipSubscribedNewsletters: i,
          });
    }
    async function b(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getSimilarNewslettersAction] Start",
          ])),
      );
      try {
        var t,
          n = await o(
            "WAWebNewsletterDirectorySearchJob",
          ).getSimilarNewsletters({
            newsletterId: o(
              "WAWebNewsletterValidationUtils",
            ).toNewsletterJidOrThrow(e.id.toString()),
            limit: o("WAWebABProps").getABPropConfigValue(
              "similar_channels_max_limit",
            ),
          }),
          r = await o(
            "WAWebGetNewsletterDirectoryChats",
          ).getDirectoryNewsletterChats(n, { skipSubscribedNewsletters: !1 });
        return (
          (t = e.newsletterMetadata) == null ||
            t.set(
              "similarNewsletters",
              r.map(function (e) {
                return e.id;
              }),
            ),
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getSimilarNewslettersAction] End",
              ])),
          ),
          r
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters][getSimilarNewslettersAction] failed",
                ])),
            )
            .sendLogs("failed-to-retrieve-similar-newsletters"),
          []
        );
      }
    }
    async function v(t) {
      o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getNewsletterDirectoryListAction] Start",
          ])),
      );
      var n = t.skipSubscribedNewsletters,
        r = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = await o(
          "WAWebNewsletterDirectorySearchJob",
        ).getNewsletterDirectoryList(r),
        i = a.newsletters,
        l = a.pageInfo,
        s = await o(
          "WAWebGetNewsletterDirectoryChats",
        ).getDirectoryNewsletterChats(i, { skipSubscribedNewsletters: n });
      o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getNewsletterDirectoryListAction] End",
          ])),
      );
      var u = s.reduce(
          function (e, t) {
            return (y(t) ? e.notSubscribed.push(t) : e.subscribed.push(t), e);
          },
          { subscribed: [], notSubscribed: [] },
        ),
        c = u.notSubscribed,
        d = u.subscribed;
      return { pageInfo: l, newsletters: c, subscribedNewsletters: d };
    }
    async function S(e) {
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getNewsletterDirectorSearchResultsAction] Start",
          ])),
      );
      var t = e.skipSubscribedNewsletters,
        n = babelHelpers.objectWithoutPropertiesLoose(e, s),
        r = await o(
          "WAWebNewsletterDirectorySearchJob",
        ).getNewsletterDirectorySearchResults(n),
        a = r.newsletters,
        i = r.pageInfo,
        l = await o(
          "WAWebGetNewsletterDirectoryChats",
        ).getDirectoryNewsletterChats(a, { skipSubscribedNewsletters: t });
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][getNewsletterDirectorSearchResultsAction] End",
            ])),
        ),
        { pageInfo: i, newsletters: l, subscribedNewsletters: [] }
      );
    }
    function R(e) {
      return {
        countryCode: e,
        categories: o(
          "WAWebNewsletterExtendedGatingUtils",
        ).getNewsletterDirectoryCategoryTypes(),
        locale: r("WAWebL10N").getLocale(),
        perCategoryLimit: o("WAWebABProps").getABPropConfigValue(
          "directory_categories_newsletters_per_category_limit",
        ),
      };
    }
    async function L(e) {
      var t = await o(
        "WAWebNewsletterDirectorySearchJob",
      ).getNewsletterDirectoryCategoriesPreview(R(e));
      return t.map(function (e) {
        return e.category;
      });
    }
    async function E(e) {
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "[getNewsletterDirectoryCategoriesPreviewAction] Start",
          ])),
      );
      var t = await o(
          "WAWebNewsletterDirectorySearchJob",
        ).getNewsletterDirectoryCategoriesPreview(R(e)),
        n = await Promise.all(
          t.map(async function (e) {
            var t = await o(
              "WAWebGetNewsletterDirectoryChats",
            ).getDirectoryNewsletterChats(e.newsletters, {
              skipSubscribedNewsletters: !1,
            });
            return (
              t.sort(function (e, t) {
                var n = y(e) ? 1 : 0,
                  r = y(t) ? 1 : 0;
                return r - n;
              }),
              { category: e.category, newsletters: t }
            );
          }),
        );
      return (
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[getNewsletterDirectoryCategoriesPreviewAction] End",
            ])),
        ),
        n
      );
    }
    ((l.fetchNewsletterDirectories = C),
      (l.getSimilarNewslettersAction = b),
      (l.getNewsletterDirectoryListAction = v),
      (l.getNewsletterDirectorySearchResultsAction = S),
      (l.getNewsletterDirectoryCategoriesAction = L),
      (l.getNewsletterDirectoryCategoriesPreviewAction = E));
  },
  98,
);
