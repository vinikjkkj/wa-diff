__d(
  "WAWebNewsletterDirectorySearchAction",
  [
    "WALogger",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebL10N",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterDirectorySearchJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
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
      h,
      y,
      C;
    async function b(e) {
      var t = e.categories,
        n = e.countryCodes,
        r = e.cursorToken,
        a = e.searchText,
        i = e.skipSubscribedNewsletters,
        l = e.view,
        s = o("WAWebNewsletterGatingUtils").getNewsletterDirectoryPageSize();
      return a.trim() !== ""
        ? L({
            searchText: a,
            limit: s,
            cursorToken: r,
            categories: t,
            skipSubscribedNewsletters: i,
          })
        : R({
            view: l,
            limit: s,
            countryCodes: n,
            cursorToken: r,
            categories: t,
            skipSubscribedNewsletters: i,
          });
    }
    async function v() {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getRecommendedNewslettersAction] Start",
          ])),
      );
      var e = await o(
          "WAWebNewsletterDirectorySearchJob",
        ).getRecommendedNewsletters(
          o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getMaybeMyCountryCodeIso(),
        ),
        t = await o(
          "WAWebGetNewsletterDirectoryChats",
        ).getDirectoryNewsletterChats(e, { skipSubscribedNewsletters: !0 });
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][getRecommendedNewslettersAction] End",
            ])),
        ),
        t
      );
    }
    async function S(e) {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
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
            limit: o(
              "WAWebNewsletterGatingUtils",
            ).getSimilarNewslettersMaxFetchLimit(),
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getSimilarNewslettersAction] End",
              ])),
          ),
          r
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters][getSimilarNewslettersAction] failed",
                ])),
            )
            .sendLogs("failed-to-retrieve-similar-newsletters"),
          []
        );
      }
    }
    async function R(t) {
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "[newsletters][getNewsletterDirectoryListAction] End",
          ])),
      );
      var u = s.reduce(
          function (e, t) {
            var n;
            return (
              ((n = t.newsletterMetadata) == null ? void 0 : n.isPreview) === !0
                ? e.notSubscribed.push(t)
                : e.subscribed.push(t),
              e
            );
          },
          { subscribed: [], notSubscribed: [] },
        ),
        c = u.notSubscribed,
        d = u.subscribed;
      return { pageInfo: l, newsletters: c, subscribedNewsletters: d };
    }
    async function L(e) {
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
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
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[newsletters][getNewsletterDirectorSearchResultsAction] End",
            ])),
        ),
        { pageInfo: i, newsletters: l, subscribedNewsletters: [] }
      );
    }
    async function E(e) {
      o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "[getNewsletterDirectoryCategoriesPreviewAction] Start",
          ])),
      );
      var t = await o(
          "WAWebNewsletterDirectorySearchJob",
        ).getNewsletterDirectoryCategoriesPreview({
          countryCode: e,
          categories: o(
            "WAWebNewsletterExtendedGatingUtils",
          ).getNewsletterDirectoryCategoryTypes(),
          locale: r("WAWebL10N").getLocale(),
          perCategoryLimit: o(
            "WAWebNewsletterGatingUtils",
          ).getNewslettersPerDirectoryCategoryLimit(),
        }),
        n = await Promise.all(
          t.map(async function (e) {
            var t = await o(
              "WAWebGetNewsletterDirectoryChats",
            ).getDirectoryNewsletterChats(e.newsletters, {
              skipSubscribedNewsletters: !1,
            });
            return (
              t.sort(function (e, t) {
                var n,
                  r,
                  o =
                    ((n = e.newsletterMetadata) == null
                      ? void 0
                      : n.isPreview) === !0
                      ? 1
                      : 0,
                  a =
                    ((r = t.newsletterMetadata) == null
                      ? void 0
                      : r.isPreview) === !0
                      ? 1
                      : 0;
                return a - o;
              }),
              { category: e.category, newsletters: t }
            );
          }),
        );
      return (
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[getNewsletterDirectoryCategoriesPreviewAction] End",
            ])),
        ),
        n
      );
    }
    ((l.fetchNewsletterDirectories = b),
      (l.getRecommendedNewslettersAction = v),
      (l.getSimilarNewslettersAction = S),
      (l.getNewsletterDirectoryListAction = R),
      (l.getNewsletterDirectorySearchResultsAction = L),
      (l.getNewsletterDirectoryCategoriesPreviewAction = E));
  },
  98,
);
