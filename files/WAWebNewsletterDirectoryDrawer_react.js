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
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(63),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = p(a.selectedCountryCode),
        u = l[0],
        d = l[1],
        m;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterDirectorySearchDebounce()),
          (n[3] = m))
        : (m = n[3]);
      var f = r("useWAWebDebouncedSearch")(m),
        y = f[0],
        C = f[1],
        b;
      n[4] !== y ? ((b = y.trim()), (n[4] = y), (n[5] = b)) : (b = n[5]);
      var v = b !== "",
        S = p(!1),
        R = S[0],
        L = S[1],
        E;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = o(
            "WAWebNewsletterExtendedGatingUtils",
          ).getNewsletterDirectoryV2FilterTypes()),
          (n[6] = E))
        : (E = n[6]);
      var k = E,
        I = p(
          o("WAWebNewsletterDirectoryFilterUtils").NewsletterDirectoryListView
            .Recommended,
        ),
        T = I[0],
        D = I[1],
        x = a,
        $ = x.newsletterDirectoryFunnelLogger,
        P;
      n[7] !== u || n[8] !== T || n[9] !== $ || n[10] !== a.entryPoint
        ? ((P = {
            newsletterDirectoryFunnelLogger: $,
            entryPoint: a.entryPoint,
            countryCode: u,
            listView: T,
            channelDirectorySurface: o("WAWebWamEnumChannelDirectorySurface")
              .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY,
          }),
          (n[7] = u),
          (n[8] = T),
          (n[9] = $),
          (n[10] = a.entryPoint),
          (n[11] = P))
        : (P = n[11]);
      var N = o(
          "useWAWebLogNewsletterDirectoryOpen",
        ).useLogNewsletterDirectoryOpen(P),
        M;
      n[12] !== u || n[13] !== $
        ? ((M = function (t) {
            (D(t), $.logViewChange(t, u));
          }),
          (n[12] = u),
          (n[13] = $),
          (n[14] = M))
        : (M = n[14]);
      var w = M,
        A;
      n[15] !== T || n[16] !== $
        ? ((A = function (t) {
            (d(t), $.logRegionChange(t, T));
          }),
          (n[15] = T),
          (n[16] = $),
          (n[17] = A))
        : (A = n[17]);
      var F = A,
        O = v && R,
        B;
      n[18] !== a.selectedCategory
        ? ((B =
            a.selectedCategory == null
              ? void 0
              : o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterCategorySearchPlaceholder(a.selectedCategory)),
          (n[18] = a.selectedCategory),
          (n[19] = B))
        : (B = n[19]);
      var W;
      n[20] !== $ || n[21] !== C || n[22] !== O || n[23] !== B
        ? ((W = c.jsx(r("WAWebNewsletterDirectorySearchInput.react"), {
            onSearch: C,
            loading: O,
            newsletterDirectoryFunnelLogger: $,
            searchPlaceholder: B,
          })),
          (n[20] = $),
          (n[21] = C),
          (n[22] = O),
          (n[23] = B),
          (n[24] = W))
        : (W = n[24]);
      var q = W,
        U;
      n[25] !== u || n[26] !== F || n[27] !== w || n[28] !== v || n[29] !== T
        ? ((U = v
            ? null
            : c.jsx(r("WAWebDrawerSection.react"), {
                animation: !1,
                theme: "list-section",
                xstyle: _.filtersContainer,
                children: c.jsx(r("WAWebNewsletterDirectoryFilters.react"), {
                  xstyle: [_.paddingHoriz16, _.paddingTop2, _.paddingBottom8],
                  filters: k,
                  selectedView: T,
                  selectedCountry: u,
                  onViewSelect: w,
                  onRegionSelect: F,
                }),
              })),
          (n[25] = u),
          (n[26] = F),
          (n[27] = w),
          (n[28] = v),
          (n[29] = T),
          (n[30] = U))
        : (U = n[30]);
      var V = U,
        H;
      n[31] !== V || n[32] !== q
        ? ((H = c.jsxs(c.Fragment, { children: [q, V] })),
          (n[31] = V),
          (n[32] = q),
          (n[33] = H))
        : (H = n[33]);
      var G = H,
        z;
      n[34] !== u || n[35] !== v
        ? ((z =
            !v &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isNewsletterDirectoryCategoriesEnabled()
              ? c.jsx(
                  o("WAWebNewsletterDirectoryRegionSelector.react")
                    .NewsletterDirectoryRegionSelector,
                  {
                    selectedCountry: u,
                    onSelectCountry: d,
                    theme: o("WAWebNewsletterDirectoryRegionSelector.react")
                      .NewsletterDirectoryRegionSelectorTheme.MenuBar,
                  },
                )
              : null),
          (n[34] = u),
          (n[35] = v),
          (n[36] = z))
        : (z = n[36]);
      var j = z,
        K;
      n[37] !== u ||
      n[38] !== T ||
      n[39] !== $ ||
      n[40] !== a.selectedCategory ||
      n[41] !== y
        ? ((K = {
            category: a.selectedCategory,
            countryCode: u,
            listView: T,
            searchText: y,
            newsletterDirectoryFunnelLogger: $,
            onLoadStateChange: L,
            directorySurface: o("WAWebWamEnumChannelDirectorySurface")
              .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY,
          }),
          (n[37] = u),
          (n[38] = T),
          (n[39] = $),
          (n[40] = a.selectedCategory),
          (n[41] = y),
          (n[42] = K))
        : (K = n[42]);
      var Q = K,
        X,
        Y;
      n[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = "x5yr21d"),
          (Y = s._(/*BTDS*/ "Find channels drawer")),
          (n[43] = X),
          (n[44] = Y))
        : ((X = n[43]), (Y = n[44]));
      var J;
      n[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = {
            surface: "channel-directory-home",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          }),
          (n[45] = J))
        : (J = n[45]);
      var Z;
      n[46] !== a.selectedCategory
        ? ((Z =
            a.selectedCategory == null
              ? o("WAWebCommonNewsletterStrings").getFindNewslettersText()
              : a.selectedCategory.name),
          (n[46] = a.selectedCategory),
          (n[47] = Z))
        : (Z = n[47]);
      var ee;
      n[48] !== j || n[49] !== a.onBack || n[50] !== Z
        ? ((ee = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: Z,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a.onBack,
            children: j,
          })),
          (n[48] = j),
          (n[49] = a.onBack),
          (n[50] = Z),
          (n[51] = ee))
        : (ee = n[51]);
      var te;
      n[52] !== Q || n[53] !== v
        ? ((te = v
            ? c.jsx(h, babelHelpers.extends({}, Q))
            : c.jsx(g, babelHelpers.extends({}, Q))),
          (n[52] = Q),
          (n[53] = v),
          (n[54] = te))
        : (te = n[54]);
      var ne;
      n[55] !== G || n[56] !== i || n[57] !== ee || n[58] !== te
        ? ((ne = c.jsxs(r("WAWebDrawer.react"), {
            tsNavigationData: J,
            ref: i,
            xstyle: _.drawer,
            testid: void 0,
            children: [ee, G, te],
          })),
          (n[55] = G),
          (n[56] = i),
          (n[57] = ee),
          (n[58] = te),
          (n[59] = ne))
        : (ne = n[59]);
      var re;
      return (
        n[60] !== ne || n[61] !== N
          ? ((re = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: N,
              className: X,
              "aria-label": Y,
              "data-testid": void 0,
              children: ne,
            })),
            (n[60] = ne),
            (n[61] = N),
            (n[62] = re))
          : (re = n[62]),
        re
      );
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = {
            surface: "channel-directory-home",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          }),
          (t[0] = n))
        : (n = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(n));
      var a;
      return (
        t[1] !== e
          ? ((a = c.jsx(
              r("WAWebNewsletterDirectoryListDrawerContent.react"),
              babelHelpers.extends({}, e, {
                focusOnMount: !0,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHANNEL_DIRECTORY,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterDirectory,
              }),
            )),
            (t[1] = e),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = {
            surface: "channel-directory-search",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          }),
          (t[0] = n))
        : (n = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(n));
      var a;
      return (
        t[1] !== e
          ? ((a = c.jsx(
              r("WAWebNewsletterDirectoryListDrawerContent.react"),
              babelHelpers.extends({}, e, {
                focusOnMount: !1,
                discoverySurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .CHANNEL_DIRECTORY_SEARCH,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .NewsletterDirectorySearch,
              }),
            )),
            (t[1] = e),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    l.default = f;
  },
  226,
);
