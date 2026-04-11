__d(
  "WAWebNewsletterDirectorySearchAction",
  [
    "Promise",
    "WALogger",
    "WAWebGetNewsletterDirectoryChats",
    "WAWebL10N",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebNewsletterDirectorySearchJob",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterValidationUtils",
    "WAWebUserPrefsMeUser",
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
      y,
      C,
      b;
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.categories,
            n = e.countryCodes,
            r = e.cursorToken,
            a = e.searchText,
            i = e.skipSubscribedNewsletters,
            l = e.view,
            s = o(
              "WAWebNewsletterGatingUtils",
            ).getNewsletterDirectoryPageSize();
          return a.trim() !== ""
            ? D({
                searchText: a,
                limit: s,
                cursorToken: r,
                categories: t,
                skipSubscribedNewsletters: i,
              })
            : I({
                view: l,
                limit: s,
                countryCodes: n,
                cursorToken: r,
                categories: t,
                skipSubscribedNewsletters: i,
              });
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[newsletters][getRecommendedNewslettersAction] Start",
              ])),
          );
          var e = o(
              "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
            ).getCountryCodeIso(
              o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
            ),
            t = yield o(
              "WAWebNewsletterDirectorySearchJob",
            ).getRecommendedNewsletters(e),
            n = yield o(
              "WAWebGetNewsletterDirectoryChats",
            ).getDirectoryNewsletterChats(t, { skipSubscribedNewsletters: !0 });
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters][getRecommendedNewslettersAction] End",
                ])),
            ),
            n
          );
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
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
                limit: o(
                  "WAWebNewsletterGatingUtils",
                ).getSimilarNewslettersMaxFetchLimit(),
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
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
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
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletters][getNewsletterDirectorSearchResultsAction] End",
                ])),
            ),
            { pageInfo: i, newsletters: l, subscribedNewsletters: [] }
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
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
              perCategoryLimit: o(
                "WAWebNewsletterGatingUtils",
              ).getNewslettersPerDirectoryCategoryLimit(),
            }),
            a = yield (b || (b = n("Promise"))).all(
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[getNewsletterDirectoryCategoriesPreviewAction] End",
                ])),
            ),
            a
          );
        })),
        P.apply(this, arguments)
      );
    }
    ((l.fetchNewsletterDirectories = v),
      (l.getRecommendedNewslettersAction = R),
      (l.getSimilarNewslettersAction = E),
      (l.getNewsletterDirectoryListAction = I),
      (l.getNewsletterDirectorySearchResultsAction = D),
      (l.getNewsletterDirectoryCategoriesPreviewAction = $));
  },
  98,
);
