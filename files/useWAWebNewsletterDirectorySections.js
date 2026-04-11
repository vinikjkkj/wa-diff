__d(
  "useWAWebNewsletterDirectorySections",
  [
    "WAWebChatEntryPoint",
    "WAWebCommonNewsletterStrings",
    "WAWebNetworkStatus",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterDirectorySearchAction",
    "WAWebNewsletterGatingUtils",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useRef,
      d = s.useState,
      m = {
        NEWSLETTER_DIRECTORY_SECTION_HEADER:
          "NEWSLETTER_DIRECTORY_SECTION_HEADER",
        NEWSLETTER_DIRECTORY_CELL: "NEWSLETTER_DIRECTORY_CELL",
      },
      p = 56,
      _ = 18,
      f = {
        searchText: "",
        view: o("WAWebNewsletterDirectoryFilterUtils")
          .NewsletterDirectoryListView.Recommended,
        categories: [],
        skipSubscribedNewsletters: !0,
      },
      g = function (t) {
        var e = t.directoryFunnelLogger,
          n = t.newsletters,
          r = t.offset,
          a = r === void 0 ? 0 : r,
          i = t.section,
          l = t.sectionIndex;
        if (n == null) return [];
        var s = n.map(function (t, n) {
          return {
            type: m.NEWSLETTER_DIRECTORY_CELL,
            itemKey: "newsletter-" + t.id.toString(),
            newsletter: t,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterDirectoryCategory,
            index: n + a,
            directoryFunnelLogger: e,
            section: i,
            sectionIndex: l,
          };
        });
        return s;
      },
      h = function (t, n, r) {
        var e = [],
          a = new Set();
        return (
          t.forEach(function (t, i) {
            if (t.newsletters.length !== 0) {
              var l = i + 1;
              e.push({
                type: m.NEWSLETTER_DIRECTORY_SECTION_HEADER,
                section: o(
                  "WAWebNewsletterDirectoryCategoryUtils",
                ).getNewsletterSectionFromCategoryType(t.category.type),
                itemKey: "newsletter-category-header-" + t.category.name,
                title: t.category.name,
                height: p,
                sectionIndex: l,
                directoryFunnelLogger: n,
              });
              var s = t.newsletters
                .filter(function (e) {
                  return !r.has(e.id.user);
                })
                .slice(
                  0,
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).getDisplayNewsletterPerCategoryLimit(),
                )
                .reduce(function (e, t) {
                  return (a.add(t.id.user), e.push(t), e);
                }, []);
              e.push.apply(
                e,
                g({
                  newsletters: s,
                  directoryFunnelLogger: n,
                  section: o(
                    "WAWebNewsletterDirectoryCategoryUtils",
                  ).getNewsletterSectionFromCategoryType(t.category.type),
                  sectionIndex: l,
                }),
              );
            }
          }),
          e.push({
            type: "NEWSLETTER_DIRECTORY_SECTION_HEADER",
            section: "EXPLORE_MORE",
            itemKey: "newsletter-category-header-explore-more",
            title: o(
              "WAWebCommonNewsletterStrings",
            ).getExploreMoreNewslettersText(),
            subtitle: o(
              "WAWebCommonNewsletterStrings",
            ).getAcrossAllCategoriesText(),
            height: p + _,
            sectionIndex: t.length + 1,
            directoryFunnelLogger: n,
          }),
          { rowCells: e, excludedNewsletters: a }
        );
      };
    function y(e) {
      var t = e.countryCode,
        n = e.newsletterDirectoryFunnelLogger,
        a = e.onCategoriesLoad,
        i = c(""),
        l = c(!1),
        s = d([]),
        m = s[0],
        _ = s[1],
        y = d(new Set()),
        C = y[0],
        b = y[1],
        v = d(0),
        S = v[0],
        R = v[1],
        L = d(0),
        E = L[0],
        k = L[1],
        I = d(!1),
        T = I[0],
        D = I[1],
        x = d(!1),
        $ = x[0],
        P = x[1],
        N = d(!1),
        M = N[0],
        w = N[1],
        A = r("useWAWebEventTargetValue")(
          r("WAWebNetworkStatus"),
          "change:online",
          function () {
            return !r("WAWebNetworkStatus").online;
          },
        ),
        F = r("useWAWebUnmountSignal")(),
        O = u(
          function () {
            var e = new Set();
            return o("WAWebNewsletterDirectorySearchAction")
              .fetchNewsletterDirectories(
                babelHelpers.extends({}, f, {
                  countryCodes: t === "" ? [] : [t],
                  cursorToken: i.current,
                }),
              )
              .then(function (t) {
                var n,
                  r = t.newsletters,
                  a = t.pageInfo;
                ((i.current =
                  (n = a == null ? void 0 : a.endCursor) != null ? n : ""),
                  (l.current = (a == null ? void 0 : a.hasNextPage) === !0));
                var s = r.slice(
                  0,
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).getDisplayNewsletterPerCategoryLimit(),
                );
                s.forEach(function (t) {
                  e.add(t.id.user);
                });
                var u = r.slice(
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).getDisplayNewsletterPerCategoryLimit(),
                );
                return {
                  recommendedNewsletters: s,
                  exploreMoreNewsletters: u,
                  recommendedNewslettersIds: e,
                };
              })
              .catch(function (e) {
                throw (n.logServerError(), e);
              });
          },
          [t, n],
        ),
        B = u(
          function () {
            return o("WAWebNewsletterDirectorySearchAction")
              .fetchNewsletterDirectories(
                babelHelpers.extends({}, f, {
                  countryCodes: t === "" ? [] : [t],
                  cursorToken: i.current,
                }),
              )
              .then(function (e) {
                var t,
                  r = e.newsletters,
                  o = e.pageInfo;
                return (
                  (i.current =
                    (t = o == null ? void 0 : o.endCursor) != null ? t : ""),
                  (l.current = (o == null ? void 0 : o.hasNextPage) === !0),
                  g({
                    newsletters: r.filter(function (e) {
                      return !C.has(e.id.user);
                    }),
                    directoryFunnelLogger: n,
                    section: "EXPLORE_MORE",
                    sectionIndex: E + 1,
                    offset: S,
                  })
                );
              })
              .catch(function (e) {
                throw (n.logServerError(), e);
              });
          },
          [t, n, E, S, C],
        ),
        W = u(
          function (e, t) {
            if ((t === void 0 && (t = new Set()), F.aborted))
              return { rowCells: [], excludedNewsletters: new Set() };
            var r = e.map(function (e) {
              return e.category;
            });
            return (k(r.length), a(r), h(e, n, t));
          },
          [F.aborted, n, a],
        ),
        q = u(
          function () {
            !A &&
              !T &&
              (w(!0),
              (i.current = ""),
              (l.current = !1),
              O()
                .then(function (e) {
                  o("WAWebNewsletterDirectorySearchAction")
                    .getNewsletterDirectoryCategoriesPreviewAction(t)
                    .then(function (t) {
                      var r = W(t, e.recommendedNewslettersIds);
                      b(r.excludedNewsletters);
                      var a = e.exploreMoreNewsletters.filter(function (e) {
                        return !r.excludedNewsletters.has(e.id.user);
                      });
                      (_(
                        [
                          {
                            type: "NEWSLETTER_DIRECTORY_SECTION_HEADER",
                            section: "EXPLORE",
                            itemKey: "newsletter-category-header-explore",
                            title: o(
                              "WAWebCommonNewsletterStrings",
                            ).getExploreNewslettersText(),
                            height: p,
                            sectionIndex: 0,
                            directoryFunnelLogger: n,
                          },
                        ].concat(
                          g({
                            newsletters: e.recommendedNewsletters,
                            directoryFunnelLogger: n,
                            section: "EXPLORE",
                            sectionIndex: 0,
                          }),
                          r.rowCells,
                          g({
                            newsletters: a,
                            directoryFunnelLogger: n,
                            section: "EXPLORE_MORE",
                            sectionIndex: t.length + 1,
                          }),
                        ),
                      ),
                        R(a.length));
                    })
                    .catch(function (e) {
                      throw e;
                    });
                })
                .catch(function () {
                  (n.logServerError(), D(!0));
                })
                .finally(function () {
                  w(!1);
                }));
          },
          [A, T, t, W, O, n],
        ),
        U = u(
          function () {
            (P(!0),
              B()
                .then(function (e) {
                  (_([].concat(m, e)), R(S + e.length));
                })
                .finally(function () {
                  P(!1);
                }));
          },
          [S, B, m],
        ),
        V = u(
          function () {
            return l.current === !0 && !$;
          },
          [$],
        );
      return [m, V, q, U, M, $, T, D];
    }
    ((l.TabCellDataType = m), (l.useNewsletterDirectorySections = y));
  },
  98,
);
