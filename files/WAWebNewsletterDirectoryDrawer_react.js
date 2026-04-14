__d(
  "WAWebNewsletterDirectoryDrawer.react",
  [
    "fbt",
    "WAWebChatEntryPoint",
    "WAWebCommonNewsletterStrings",
    "WAWebDrawer.react",
    "WAWebDrawerHeader.react",
    "WAWebDrawerSection.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterDirectoryFilters.react",
    "WAWebNewsletterDirectoryListDrawerContent.react",
    "WAWebNewsletterDirectoryRegionSelector.react",
    "WAWebNewsletterDirectorySearchInput.react",
    "WAWebNewsletterExtendedGatingUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebTimeSpentLoggingNavigation",
    "WAWebWamEnumChannelDirectorySurface",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumTsSurface",
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
      _ = {
        filtersContainer: {
          borderBottomColor: "x120ee7l",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          $$css: !0,
        },
        drawer: { backgroundColor: "x1280gxy", $$css: !0 },
        paddingHoriz16: {
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingTop2: { paddingTop: "x1gxa6cn", $$css: !0 },
        paddingBottom8: { paddingBottom: "x12xbjc7", $$css: !0 },
      };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = p(a.selectedCountryCode),
        l = i[0],
        u = i[1],
        d = r("useWAWebDebouncedSearch")(
          o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterDirectorySearchDebounce(),
        ),
        f = d[0],
        y = d[1],
        C = f.trim() !== "",
        b = p(!1),
        v = b[0],
        S = b[1],
        R = o(
          "WAWebNewsletterExtendedGatingUtils",
        ).getNewsletterDirectoryV2FilterTypes(),
        L = p(
          o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView
            .Recommended,
        ),
        E = L[0],
        k = L[1],
        I = a.newsletterDirectoryFunnelLogger,
        T = o(
          "useWAWebLogNewsletterDirectoryOpen",
        ).useLogNewsletterDirectoryOpen({
          newsletterDirectoryFunnelLogger: I,
          entryPoint: a.entryPoint,
          countryCode: l,
          listView: E,
          channelDirectorySurface: o("WAWebWamEnumChannelDirectorySurface")
            .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY,
        }),
        D = m(
          function (e) {
            (k(e), I.logViewChange(e, l));
          },
          [l, I],
        ),
        x = m(
          function (e) {
            (u(e), I.logRegionChange(e, E));
          },
          [E, I],
        ),
        $ = c.jsx(r("WAWebNewsletterDirectorySearchInput.react"), {
          onSearch: y,
          loading: C && v,
          newsletterDirectoryFunnelLogger: I,
          searchPlaceholder:
            a.selectedCategory == null
              ? void 0
              : o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterCategorySearchPlaceholder(a.selectedCategory),
        }),
        P = C
          ? null
          : c.jsx(r("WAWebDrawerSection.react"), {
              animation: !1,
              theme: "list-section",
              xstyle: _.filtersContainer,
              children: c.jsx(r("WAWebNewsletterDirectoryFilters.react"), {
                xstyle: [_.paddingHoriz16, _.paddingTop2, _.paddingBottom8],
                filters: R,
                selectedView: E,
                selectedCountry: l,
                onViewSelect: D,
                onRegionSelect: x,
              }),
            }),
        N = c.jsxs(c.Fragment, { children: [$, P] }),
        M =
          !C &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterDirectoryCategoriesEnabled()
            ? c.jsx(
                o("WAWebNewsletterDirectoryRegionSelector.react")
                  .NewsletterDirectoryRegionSelector,
                {
                  selectedCountry: l,
                  onSelectCountry: u,
                  theme: o("WAWebNewsletterDirectoryRegionSelector.react")
                    .NewsletterDirectoryRegionSelectorTheme.MenuBar,
                },
              )
            : null,
        w = {
          category: a.selectedCategory,
          countryCode: l,
          listView: E,
          searchText: f,
          newsletterDirectoryFunnelLogger: I,
          onLoadStateChange: S,
          directorySurface: o("WAWebWamEnumChannelDirectorySurface")
            .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY,
        };
      return c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        ref: T,
        className: "x5yr21d",
        "aria-label": s._(/*BTDS*/ "Find channels drawer"),
        "data-testid": void 0,
        children: c.jsxs(r("WAWebDrawer.react"), {
          tsNavigationData: {
            surface: "channel-directory-home",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          },
          ref: n,
          xstyle: _.drawer,
          testid: void 0,
          children: [
            c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
              title:
                a.selectedCategory == null
                  ? o("WAWebCommonNewsletterStrings").getFindNewslettersText()
                  : a.selectedCategory.name,
              type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
              onBack: a.onBack,
              children: M,
            }),
            N,
            C
              ? c.jsx(h, babelHelpers.extends({}, w))
              : c.jsx(g, babelHelpers.extends({}, w)),
          ],
        }),
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "channel-directory-home",
          extras: {
            threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
          },
        }),
        c.jsx(
          r("WAWebNewsletterDirectoryListDrawerContent.react"),
          babelHelpers.extends({}, e, {
            focusOnMount: !0,
            discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .CHANNEL_DIRECTORY,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterDirectory,
          }),
        )
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return (
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation({
          surface: "channel-directory-search",
          extras: {
            threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
          },
        }),
        c.jsx(
          r("WAWebNewsletterDirectoryListDrawerContent.react"),
          babelHelpers.extends({}, e, {
            focusOnMount: !1,
            discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
              .CHANNEL_DIRECTORY_SEARCH,
            chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
              .NewsletterDirectorySearch,
          }),
        )
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = f));
  },
  226,
);
