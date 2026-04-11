__d(
  "WAWebNewsletterDirectorySearchInput.react",
  ["WAWebDrawerSection.react", "WAWebFbtCommon", "WAWebSearchInput", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback,
      c = { searchContainer: { height: "x112a4uq", $$css: !0 } };
    function d(e) {
      var t = e.filteredCategory,
        n = e.loading,
        a = e.newsletterDirectoryFunnelLogger,
        i = e.onBlur,
        l = e.onClearCategoryFilter,
        d = e.onFocus,
        m = e.onSearch,
        p = e.searchPlaceholder,
        _ = p != null ? p : r("WAWebFbtCommon")("Search"),
        f = u(
          function (e) {
            (a.logSearchTap(), d == null || d(e));
          },
          [a, d],
        );
      return s.jsx(r("WAWebDrawerSection.react"), {
        animation: !1,
        theme: "list-section",
        xstyle: c.searchContainer,
        children: s.jsx(o("WAWebSearchInput").DrawerSearchInput, {
          searchInputA11yLabel: _,
          placeholder: _,
          filter: t == null ? void 0 : t.name,
          onClearFilter: l,
          loading: n,
          focusOnMount: !1,
          onSearch: m,
          onFocus: f,
          onBlur: i,
          showBackButton: !0,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
