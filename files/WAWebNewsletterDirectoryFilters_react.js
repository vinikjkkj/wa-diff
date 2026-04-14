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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.filters,
        n = e.onRegionSelect,
        a = e.onViewSelect,
        i = e.selectedCountry,
        l = e.selectedView,
        u = e.xstyle,
        c = function (t) {
          var e = o(
            "WAWebNewsletterDirectoryFilterUtils",
          ).getNewsletterDirectoryListViewFromFilter(t);
          a(e);
        },
        d = o(
          "WAWebNewsletterDirectoryFilterUtils",
        ).getNewsletterDirectoryFilterFromListView(l),
        m = t.map(function (e, t) {
          var a = "filter-" + t;
          if (
            e !==
            o("WAWebNewsletterDirectoryFilterUtils")
              .NewsletterDirectoryFilterType.Country
          ) {
            var l = o(
              "WAWebCommonNewsletterStrings",
            ).getNewsletterDirectoryFilterLabel(e);
            return s.jsx(
              r("WAWebListFilterButton.react"),
              {
                label: l,
                selected: e === d,
                onClick: function () {
                  c(e);
                },
                testIdSuffix: l.toString().toLowerCase().replaceAll(" ", "-"),
              },
              a,
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
                  selectedCountry: i,
                  onSelectCountry: n,
                  theme: o("WAWebNewsletterDirectoryRegionSelector.react")
                    .NewsletterDirectoryRegionSelectorTheme.ListFilter,
                },
                a,
              );
        });
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        shrink: 0,
        wrap: "wrap",
        rowGap: 8,
        columnGap: 8,
        xstyle: u,
        children: m,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
