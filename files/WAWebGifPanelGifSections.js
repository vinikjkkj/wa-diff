__d(
  "WAWebGifPanelGifSections",
  ["WAWebGifPanelGifCategories"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c =
        ((e = { FAVORITES: "FAVORITES" }),
        (e[(u = r("WAWebGifPanelGifCategories")).TRENDING] = u.TRENDING),
        (e[u.HAHA] = u.HAHA),
        (e[u.SAD] = u.SAD),
        (e[u.LOVE] = u.LOVE),
        (e[u.REACTIONS] = u.REACTIONS),
        (e[u.SPORTS] = u.SPORTS),
        (e[u.TV] = u.TV),
        e),
      d =
        ((s = {}),
        (s[c.FAVORITES] = c.FAVORITES),
        (s[c.TRENDING] = c.TRENDING),
        (s[c.HAHA] = c.HAHA),
        (s[c.SAD] = c.SAD),
        (s[c.LOVE] = c.LOVE),
        (s[c.REACTIONS] = c.REACTIONS),
        (s[c.SPORTS] = c.SPORTS),
        (s[c.TV] = c.TV),
        s),
      m = [
        d.FAVORITES,
        d.TRENDING,
        d.HAHA,
        d.SAD,
        d.LOVE,
        d.REACTIONS,
        d.SPORTS,
        d.TV,
      ];
    ((l.SECTIONS = c), (l.ORDERED_TAB_SECTION_IDS = m));
  },
  98,
);
