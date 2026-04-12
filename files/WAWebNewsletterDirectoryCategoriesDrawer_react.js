__d(
  "WAWebNewsletterDirectoryCategoriesDrawer.react",
  [
    "fbt",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryCategoriesPreviewDrawerContent.react",
    "WAWebNewsletterDirectoryCategoriesSearchContent.react",
    "WAWebNewsletterDirectoryCategoryUtils",
    "WAWebNewsletterDirectoryRegionSelector.react",
    "WAWebNewsletterDirectorySearchInput.react",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumChannelDirectorySurface",
    "WAWebWamEnumThreadType",
    "react",
    "useWAWebDebouncedSearch",
    "useWAWebLogNewsletterDirectoryOpen",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useState,
      _ = { drawer: { backgroundColor: "x1280gxy", $$css: !0 } };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = p(a.selectedCountryCode),
        l = i[0],
        u = i[1],
        d = p([]),
        f = d[0],
        g = d[1],
        h = p(null),
        y = h[0],
        C = h[1],
        b = p(!1),
        v = b[0],
        S = b[1],
        R = r("useWAWebDebouncedSearch")(
          o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterDirectorySearchDebounce(),
        ),
        L = R[0],
        E = R[1],
        k = p(!1),
        I = k[0],
        T = k[1],
        D = L.trim() !== "" || y != null,
        x = a.newsletterDirectoryFunnelLogger,
        $ = o(
          "useWAWebLogNewsletterDirectoryOpen",
        ).useLogNewsletterDirectoryOpen({
          newsletterDirectoryFunnelLogger: x,
          entryPoint: a.entryPoint,
          countryCode: l,
          channelDirectorySurface: o("WAWebWamEnumChannelDirectorySurface")
            .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY_CATEGORIES,
        }),
        P = m(
          function (e) {
            (u(e), x.logRegionChange(e));
          },
          [x],
        ),
        N = D
          ? null
          : c.jsx(
              o("WAWebNewsletterDirectoryRegionSelector.react")
                .NewsletterDirectoryRegionSelector,
              {
                selectedCountry: l,
                onSelectCountry: P,
                theme: o("WAWebNewsletterDirectoryRegionSelector.react")
                  .NewsletterDirectoryRegionSelectorTheme.MenuBar,
              },
            ),
        M = c.jsx(r("WAWebNewsletterDirectorySearchInput.react"), {
          onSearch: E,
          filteredCategory: y,
          loading: D && I,
          newsletterDirectoryFunnelLogger: x,
          onFocus: function () {
            return S(!0);
          },
          onBlur: function () {
            return S(!1);
          },
          onClearCategoryFilter: function () {
            (x.clearSelectedCategory(), C(null));
          },
        }),
        w = function (t) {
          var e = t.category,
            n = t.entryPoint,
            r = t.sectionIndex,
            o = t.sectionName;
          (x.logCategoryExploreClick({ sectionName: o, sectionIndex: r }),
            a.onSeeAllNewsletters(n, l, e));
        },
        A = m(
          function (e, t) {
            (C(e),
              x.logCategorySelection({
                categoryName: o(
                  "WAWebNewsletterDirectoryCategoryUtils",
                ).getNewsletterSectionFromCategoryType(e.type),
                categoryIndex: t,
              }));
          },
          [C, x],
        ),
        F = null;
      return (
        D || v
          ? (F = c.jsx(
              r("WAWebNewsletterDirectoryCategoriesSearchContent.react"),
              {
                isSearching: D,
                searchText: L,
                category: y,
                countryCode: l,
                newsletterDirectoryFunnelLogger: x,
                onLoadStateChange: T,
                categories: f,
                onCategorySelect: A,
              },
            ))
          : (F = c.jsx(
              r("WAWebNewsletterDirectoryCategoriesPreviewDrawerContent.react"),
              {
                countryCode: l,
                newsletterDirectoryFunnelLogger: x,
                onSeeAllNewsletters: w,
                onCategoriesLoad: g,
              },
            )),
        c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          ref: $,
          className: "x5yr21d",
          "aria-label": s._(/*BTDS*/ "Find channel categories drawer"),
          "data-testid": void 0,
          children: c.jsxs(r("WAWebDrawer.react"), {
            tsNavigationData: {
              surface: "channel-directory-categories-home",
              extras: {
                threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
              },
            },
            ref: n,
            xstyle: _.drawer,
            testid: void 0,
            children: [
              c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
                title: o(
                  "WAWebCommonNewsletterStrings",
                ).getFindNewslettersText(),
                type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
                onBack: a.onBack,
                children: N,
              }),
              M,
              F,
            ],
          }),
        })
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
