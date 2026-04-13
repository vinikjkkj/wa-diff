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
      _ = { drawer: { backgroundColor: "x1280gxy", $$css: !0 } };
    function f(t) {
      var n = o("react-compiler-runtime").c(61),
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
        ? ((m = []), (n[3] = m))
        : (m = n[3]);
      var f = p(m),
        g = f[0],
        h = f[1],
        y = p(null),
        C = y[0],
        b = y[1],
        v = p(!1),
        S = v[0],
        R = v[1],
        L;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = o(
            "WAWebNewsletterGatingUtils",
          ).getNewsletterDirectorySearchDebounce()),
          (n[4] = L))
        : (L = n[4]);
      var E = r("useWAWebDebouncedSearch")(L),
        k = E[0],
        I = E[1],
        T = p(!1),
        D = T[0],
        x = T[1],
        $;
      n[5] !== C || n[6] !== k
        ? (($ = k.trim() !== "" || C != null),
          (n[5] = C),
          (n[6] = k),
          (n[7] = $))
        : ($ = n[7]);
      var P = $,
        N = a,
        M = N.newsletterDirectoryFunnelLogger,
        w;
      n[8] !== u || n[9] !== M || n[10] !== a.entryPoint
        ? ((w = {
            newsletterDirectoryFunnelLogger: M,
            entryPoint: a.entryPoint,
            countryCode: u,
            channelDirectorySurface: o("WAWebWamEnumChannelDirectorySurface")
              .CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY_CATEGORIES,
          }),
          (n[8] = u),
          (n[9] = M),
          (n[10] = a.entryPoint),
          (n[11] = w))
        : (w = n[11]);
      var A = o(
          "useWAWebLogNewsletterDirectoryOpen",
        ).useLogNewsletterDirectoryOpen(w),
        F;
      n[12] !== M
        ? ((F = function (t) {
            (d(t), M.logRegionChange(t));
          }),
          (n[12] = M),
          (n[13] = F))
        : (F = n[13]);
      var O = F,
        B;
      n[14] !== u || n[15] !== O || n[16] !== P
        ? ((B = P
            ? null
            : c.jsx(
                o("WAWebNewsletterDirectoryRegionSelector.react")
                  .NewsletterDirectoryRegionSelector,
                {
                  selectedCountry: u,
                  onSelectCountry: O,
                  theme: o("WAWebNewsletterDirectoryRegionSelector.react")
                    .NewsletterDirectoryRegionSelectorTheme.MenuBar,
                },
              )),
          (n[14] = u),
          (n[15] = O),
          (n[16] = P),
          (n[17] = B))
        : (B = n[17]);
      var W = B,
        q = P && D,
        U,
        V;
      n[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = function () {
            return R(!0);
          }),
          (V = function () {
            return R(!1);
          }),
          (n[18] = U),
          (n[19] = V))
        : ((U = n[18]), (V = n[19]));
      var H;
      n[20] !== M
        ? ((H = function () {
            (M.clearSelectedCategory(), b(null));
          }),
          (n[20] = M),
          (n[21] = H))
        : (H = n[21]);
      var G;
      n[22] !== C || n[23] !== M || n[24] !== I || n[25] !== H || n[26] !== q
        ? ((G = c.jsx(r("WAWebNewsletterDirectorySearchInput.react"), {
            onSearch: I,
            filteredCategory: C,
            loading: q,
            newsletterDirectoryFunnelLogger: M,
            onFocus: U,
            onBlur: V,
            onClearCategoryFilter: H,
          })),
          (n[22] = C),
          (n[23] = M),
          (n[24] = I),
          (n[25] = H),
          (n[26] = q),
          (n[27] = G))
        : (G = n[27]);
      var z = G,
        j;
      n[28] !== u || n[29] !== M || n[30] !== a
        ? ((j = function (t) {
            var e = t.category,
              n = t.entryPoint,
              r = t.sectionIndex,
              o = t.sectionName;
            (M.logCategoryExploreClick({ sectionName: o, sectionIndex: r }),
              a.onSeeAllNewsletters(n, u, e));
          }),
          (n[28] = u),
          (n[29] = M),
          (n[30] = a),
          (n[31] = j))
        : (j = n[31]);
      var K = j,
        Q;
      n[32] !== M
        ? ((Q = function (t, n) {
            (b(t),
              M.logCategorySelection({
                categoryName: o(
                  "WAWebNewsletterDirectoryCategoryUtils",
                ).getNewsletterSectionFromCategoryType(t.type),
                categoryIndex: n,
              }));
          }),
          (n[32] = M),
          (n[33] = Q))
        : (Q = n[33]);
      var X = Q,
        Y;
      if (P || S) {
        var J;
        (n[34] !== g ||
        n[35] !== u ||
        n[36] !== C ||
        n[37] !== X ||
        n[38] !== P ||
        n[39] !== M ||
        n[40] !== k
          ? ((J = c.jsx(
              r("WAWebNewsletterDirectoryCategoriesSearchContent.react"),
              {
                isSearching: P,
                searchText: k,
                category: C,
                countryCode: u,
                newsletterDirectoryFunnelLogger: M,
                onLoadStateChange: x,
                categories: g,
                onCategorySelect: X,
              },
            )),
            (n[34] = g),
            (n[35] = u),
            (n[36] = C),
            (n[37] = X),
            (n[38] = P),
            (n[39] = M),
            (n[40] = k),
            (n[41] = J))
          : (J = n[41]),
          (Y = J));
      } else {
        var Z;
        (n[42] !== u || n[43] !== K || n[44] !== M
          ? ((Z = c.jsx(
              r("WAWebNewsletterDirectoryCategoriesPreviewDrawerContent.react"),
              {
                countryCode: u,
                newsletterDirectoryFunnelLogger: M,
                onSeeAllNewsletters: K,
                onCategoriesLoad: h,
              },
            )),
            (n[42] = u),
            (n[43] = K),
            (n[44] = M),
            (n[45] = Z))
          : (Z = n[45]),
          (Y = Z));
      }
      var ee, te;
      n[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = "x5yr21d"),
          (te = s._(/*BTDS*/ "Find channel categories drawer")),
          (n[46] = ee),
          (n[47] = te))
        : ((ee = n[46]), (te = n[47]));
      var ne;
      n[48] === Symbol.for("react.memo_cache_sentinel")
        ? ((ne = {
            surface: "channel-directory-categories-home",
            extras: {
              threadType: o("WAWebWamEnumThreadType").THREAD_TYPE.CHANNEL,
            },
          }),
          (n[48] = ne))
        : (ne = n[48]);
      var re;
      n[49] === Symbol.for("react.memo_cache_sentinel")
        ? ((re = o("WAWebCommonNewsletterStrings").getFindNewslettersText()),
          (n[49] = re))
        : (re = n[49]);
      var oe;
      n[50] !== W || n[51] !== a.onBack
        ? ((oe = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: re,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            onBack: a.onBack,
            children: W,
          })),
          (n[50] = W),
          (n[51] = a.onBack),
          (n[52] = oe))
        : (oe = n[52]);
      var ae;
      n[53] !== Y || n[54] !== z || n[55] !== i || n[56] !== oe
        ? ((ae = c.jsxs(r("WAWebDrawer.react"), {
            tsNavigationData: ne,
            ref: i,
            xstyle: _.drawer,
            testid: void 0,
            children: [oe, z, Y],
          })),
          (n[53] = Y),
          (n[54] = z),
          (n[55] = i),
          (n[56] = oe),
          (n[57] = ae))
        : (ae = n[57]);
      var ie;
      return (
        n[58] !== ae || n[59] !== A
          ? ((ie = c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: A,
              className: ee,
              "aria-label": te,
              "data-testid": void 0,
              children: ae,
            })),
            (n[58] = ae),
            (n[59] = A),
            (n[60] = ie))
          : (ie = n[60]),
        ie
      );
    }
    l.default = f;
  },
  226,
);
