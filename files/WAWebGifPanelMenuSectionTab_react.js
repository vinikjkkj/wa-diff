__d(
  "WAWebGifPanelMenuSectionTab.react",
  [
    "fbt",
    "WAWebGifPanelGifSections",
    "WAWebGifPanelMenuSectionIcon.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenuTab.react",
    "react",
    "useWAWebForwardRefSetter",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n,
        a,
        i = t.ref,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u = r("useWAWebForwardRefSetter")(i),
        d =
          ((n = {}),
          (n[(a = o("WAWebGifPanelGifSections")).SECTIONS.FAVORITES] = s._(
            /*BTDS*/ "Favorites",
          )),
          (n[a.SECTIONS.TRENDING] = s._(/*BTDS*/ "Trending")),
          (n[a.SECTIONS.HAHA] = s._(/*BTDS*/ "Haha")),
          (n[a.SECTIONS.SAD] = s._(/*BTDS*/ "Sad")),
          (n[a.SECTIONS.LOVE] = s._(/*BTDS*/ "Love")),
          (n[a.SECTIONS.REACTIONS] = s._(/*BTDS*/ "Reactions")),
          (n[a.SECTIONS.SPORTS] = s._(/*BTDS*/ "Sports")),
          (n[a.SECTIONS.TV] = s._(/*BTDS*/ "TV")),
          n),
        m = l.sectionId,
        p = d[m];
      return c.jsx(o("WAWebPanelsMenuTab.react").MenuTab, {
        onClick: l.onClick,
        sectionId: m,
        selected: l.selected,
        showFocusIndicator: l.showFocusIndicator,
        title: p,
        theme: o("WAWebPanelsMenuTab.react").THEMES.MENU,
        onRef: u,
        children: c.jsx(
          o("WAWebGifPanelMenuSectionIcon.react").GifSectionIcon,
          {
            sectionId: m,
            sectionTitle: p,
            theme:
              l.displayLocation ===
              o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
                ? o("WAWebGifPanelMenuSectionIcon.react")
                    .GifPanelMenuSectionIconTheme.EXPRESSION_PANELS
                : void 0,
          },
        ),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
