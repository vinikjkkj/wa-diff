__d(
  "WAWebNewsletterDirectoryEntrySectionHeader.react",
  [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebSectionHeaderWithAction.react",
    "react",
    "useWAWebActiveSelection",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.active,
        n = e.isLoading,
        a = e.onSeeAllNewsletters,
        i = e.subtitle,
        l = e.title,
        c = e.xstyle,
        d = r("useWAWebActiveSelection")(
          t,
          "newsletter-category-header-" + l.toString(),
        ),
        m = d[0],
        p = d[1];
      return n === !0
        ? u.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: c,
            children: u.jsx(
              o("WAWebBaseShimmerComponents.react").RectangleShimmer,
              { height: 18, width: 250 },
            ),
          })
        : u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
            ref: m,
            children: u.jsx(r("WAWebSectionHeaderWithAction.react"), {
              active: p,
              xstyle: c,
              title: l,
              subtitle: i,
              actionText: s._(/*BTDS*/ "See all"),
              onClick: a,
            }),
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
