__d(
  "WAWebNewsletterDirectoryFilters.react",
  [
    "WAWebCommonNewsletterStrings",
    "WAWebFlex.react",
    "WAWebListFilterButton.react",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterDirectoryRegionSelector.react",
    "WAWebNewsletterGatingUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.filters,
        a = e.onRegionSelect,
        i = e.onViewSelect,
        l = e.selectedCountry,
        u = e.selectedView,
        c = e.xstyle,
        d;
      t[0] !== i
        ? ((d = function (t) {
            var e = o(
              "WAWebNewsletterDirectoryFilterUtils",
            ).getNewsletterDirectoryListViewFromFilter(t);
            i(e);
          }),
          (t[0] = i),
          (t[1] = d))
        : (d = t[1]);
      var m = d,
        p;
      t[2] !== u
        ? ((p = o(
            "WAWebNewsletterDirectoryFilterUtils",
          ).getNewsletterDirectoryFilterFromListView(u)),
          (t[2] = u),
          (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      if (t[4] !== n || t[5] !== m || t[6] !== a || t[7] !== l || t[8] !== _) {
        var g;
        (t[10] !== m || t[11] !== a || t[12] !== l || t[13] !== _
          ? ((g = function (t, n) {
              var e = "filter-" + n;
              if (
                t !==
                o("WAWebNewsletterDirectoryFilterUtils")
                  .NewsletterDirectoryFilterType.Country
              ) {
                var i = o(
                  "WAWebCommonNewsletterStrings",
                ).getNewsletterDirectoryFilterLabel(t);
                return s.jsx(
                  r("WAWebListFilterButton.react"),
                  {
                    label: i,
                    selected: t === _,
                    onClick: function () {
                      m(t);
                    },
                    testIdSuffix: i
                      .toString()
                      .toLowerCase()
                      .replaceAll(" ", "-"),
                  },
                  e,
                );
              }
              return o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterDirectoryCategoriesEnabled()
                ? null
                : s.jsx(
                    o("WAWebNewsletterDirectoryRegionSelector.react")
                      .NewsletterDirectoryRegionSelector,
                    {
                      selectedCountry: l,
                      onSelectCountry: a,
                      theme: o("WAWebNewsletterDirectoryRegionSelector.react")
                        .NewsletterDirectoryRegionSelectorTheme.ListFilter,
                    },
                    e,
                  );
            }),
            (t[10] = m),
            (t[11] = a),
            (t[12] = l),
            (t[13] = _),
            (t[14] = g))
          : (g = t[14]),
          (f = n.map(g)),
          (t[4] = n),
          (t[5] = m),
          (t[6] = a),
          (t[7] = l),
          (t[8] = _),
          (t[9] = f));
      } else f = t[9];
      var h = f,
        y;
      return (
        t[15] !== h || t[16] !== c
          ? ((y = s.jsx(o("WAWebFlex.react").FlexRow, {
              shrink: 0,
              wrap: "wrap",
              rowGap: 8,
              columnGap: 8,
              xstyle: c,
              children: h,
            })),
            (t[15] = h),
            (t[16] = c),
            (t[17] = y))
          : (y = t[17]),
        y
      );
    }
    l.default = u;
  },
  98,
);
