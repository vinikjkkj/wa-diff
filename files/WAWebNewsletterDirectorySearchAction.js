__d(
  "WAWebNewsletterDirectorySearchAction",
  [
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebL10N",
    "WAWebNewsletterDirectorySearchJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterValidationUtils",
    "asyncToGeneratorRuntime",
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
      y;
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            ? E({
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getSimilarNewslettersAction] Start",
              ])),
          );
          try {
            var t,
              n = yield o(
                "WAWebNewsletterDirectorySearchJob",
              ).getSimilarNewsletters({
                newsletterId: o(
                  "WAWebNewsletterValidationUtils",
                ).toNewsletterJidOrThrow(e.id.toString()),
                limit: o("WAWebABProps").getABPropConfigValue(
                  "similar_channels_max_limit",
                ),
              }),
              r = yield o(
                "WAWebGetNewsletterDirectoryChats",
              ).getDirectoryNewsletterChats(n, {
                skipSubscribedNewsletters: !1,
              });
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
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getNewsletterDirectoryListAction] Start",
              ])),
          );
          var n = t.skipSubscribedNewsletters,
            r = babelHelpers.objectWithoutPropertiesLoose(t, e),
            a = yield o(
              "WAWebNewsletterDirectorySearchJob",
            ).getNewsletterDirectoryList(r),
            i = a.newsletters,
            l = a.pageInfo,
            s = yield o(
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
                var n;
                return (
                  ((n = t.newsletterMetadata) == null
                    ? void 0
                    : n.isPreview) === !0
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getNewsletterDirectorSearchResultsAction] Start",
              ])),
          );
          var t = e.skipSubscribedNewsletters,
            n = babelHelpers.objectWithoutPropertiesLoose(e, s),
            r = yield o(
              "WAWebNewsletterDirectorySearchJob",
            ).getNewsletterDirectorySearchResults(n),
            a = r.newsletters,
            i = r.pageInfo,
            l = yield o(
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
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[getNewsletterDirectoryCategoriesPreviewAction] Start",
              ])),
          );
          var t = yield o(
              "WAWebNewsletterDirectorySearchJob",
            ).getNewsletterDirectoryCategoriesPreview({
              countryCode: e,
              categories: o(
                "WAWebNewsletterExtendedGatingUtils",
              ).getNewsletterDirectoryCategoryTypes(),
              locale: r("WAWebL10N").getLocale(),
              perCategoryLimit: o("WAWebABProps").getABPropConfigValue(
                "directory_categories_newsletters_per_category_limit",
              ),
            }),
            a = yield (y || (y = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield o(
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
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
          return (
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[getNewsletterDirectoryCategoriesPreviewAction] End",
                ])),
            ),
            a
          );
        })),
        T.apply(this, arguments)
      );
    }
    ((l.fetchNewsletterDirectories = C),
      (l.getSimilarNewslettersAction = v),
      (l.getNewsletterDirectoryListAction = R),
      (l.getNewsletterDirectorySearchResultsAction = E),
      (l.getNewsletterDirectoryCategoriesPreviewAction = I));
  },
  98,
);
