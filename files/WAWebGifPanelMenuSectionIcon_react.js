__d(
  "WAWebGifPanelMenuSectionIcon.react",
  [
    "$InternalEnum",
    "WAWebGifPanelGifSections",
    "WDSIconIcFavorite.react",
    "WDSIconIcGrade.react",
    "WDSIconIcMonitor.react",
    "WDSIconIcSentimentExcited.react",
    "WDSIconIcSentimentSad.react",
    "WDSIconIcSportsBasketball.react",
    "WDSIconIcThumbUp.react",
    "WDSIconIcTrendingUp.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["EXPRESSION_PANELS"]);
    function c(e) {
      var t = e.sectionId,
        n = e.sectionTitle,
        a = e.theme;
      return a === u.EXPRESSION_PANELS
        ? s.jsx(d, { sectionId: t })
        : t && t === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES
          ? s.jsx(r("WDSIconIcGrade.react"), {})
          : s.jsx("span", {
              className: "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft",
              children: n,
            });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e.sectionId;
      switch (t) {
        case o("WAWebGifPanelGifSections").SECTIONS.TRENDING:
          return s.jsx(r("WDSIconIcTrendingUp.react"), {});
        case o("WAWebGifPanelGifSections").SECTIONS.HAHA:
          return s.jsx(r("WDSIconIcSentimentExcited.react"), {});
        case o("WAWebGifPanelGifSections").SECTIONS.SAD:
          return s.jsx(r("WDSIconIcSentimentSad.react"), {});
        case o("WAWebGifPanelGifSections").SECTIONS.LOVE:
          return s.jsx(r("WDSIconIcFavorite.react"), {});
        case o("WAWebGifPanelGifSections").SECTIONS.REACTIONS:
          return s.jsx(r("WDSIconIcThumbUp.react"), {});
        case o("WAWebGifPanelGifSections").SECTIONS.SPORTS:
          return s.jsx(r("WDSIconIcSportsBasketball.react"), {});
        case o("WAWebGifPanelGifSections").SECTIONS.TV:
          return s.jsx(r("WDSIconIcMonitor.react"), {});
      }
      return s.jsx(r("WDSIconIcGrade.react"), {});
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.GifPanelMenuSectionIconTheme = u),
      (l.GifSectionIcon = c));
  },
  98,
);
