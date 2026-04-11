__d(
  "WAWebGifPanelMenuSectionTab.react",
  [
    "fbt",
    "WAWebGifPanelGifSections",
    "WAWebGifPanelMenuSectionIcon.react",
    "WAWebPanelsDisplayLocation",
    "WAWebPanelsMenuTab.react",
    "react",
    "react-compiler-runtime",
    "useWAWebForwardRefSetter",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = o("react-compiler-runtime").c(23),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = r("useWAWebForwardRefSetter")(i),
        u;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Favorites")), (n[3] = u))
        : (u = n[3]);
      var d;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Trending")), (n[4] = d))
        : (d = n[4]);
      var m;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Haha")), (n[5] = m))
        : (m = n[5]);
      var p;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Sad")), (n[6] = p))
        : (p = n[6]);
      var _;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Love")), (n[7] = _))
        : (_ = n[7]);
      var f;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Reactions")), (n[8] = f))
        : (f = n[8]);
      var g;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Sports")), (n[9] = g))
        : (g = n[9]);
      var h;
      if (n[10] === Symbol.for("react.memo_cache_sentinel")) {
        var y, C;
        ((h =
          ((y = {}),
          (y[(C = o("WAWebGifPanelGifSections")).SECTIONS.FAVORITES] = u),
          (y[C.SECTIONS.TRENDING] = d),
          (y[C.SECTIONS.HAHA] = m),
          (y[C.SECTIONS.SAD] = p),
          (y[C.SECTIONS.LOVE] = _),
          (y[C.SECTIONS.REACTIONS] = f),
          (y[C.SECTIONS.SPORTS] = g),
          (y[C.SECTIONS.TV] = s._(/*BTDS*/ "TV")),
          y)),
          (n[10] = h));
      } else h = n[10];
      var b = h,
        v = a,
        S = v.sectionId,
        R = b[S],
        L =
          a.displayLocation ===
          o("WAWebPanelsDisplayLocation").DisplayLocation.ExpressionsPanel
            ? o("WAWebGifPanelMenuSectionIcon.react")
                .GifPanelMenuSectionIconTheme.EXPRESSION_PANELS
            : void 0,
        E;
      n[11] !== S || n[12] !== L || n[13] !== R
        ? ((E = c.jsx(o("WAWebGifPanelMenuSectionIcon.react").GifSectionIcon, {
            sectionId: S,
            sectionTitle: R,
            theme: L,
          })),
          (n[11] = S),
          (n[12] = L),
          (n[13] = R),
          (n[14] = E))
        : (E = n[14]);
      var k;
      return (
        n[15] !== a.onClick ||
        n[16] !== a.selected ||
        n[17] !== a.showFocusIndicator ||
        n[18] !== S ||
        n[19] !== l ||
        n[20] !== E ||
        n[21] !== R
          ? ((k = c.jsx(o("WAWebPanelsMenuTab.react").MenuTab, {
              onClick: a.onClick,
              sectionId: S,
              selected: a.selected,
              showFocusIndicator: a.showFocusIndicator,
              title: R,
              theme: o("WAWebPanelsMenuTab.react").THEMES.MENU,
              onRef: l,
              children: E,
            })),
            (n[15] = a.onClick),
            (n[16] = a.selected),
            (n[17] = a.showFocusIndicator),
            (n[18] = S),
            (n[19] = l),
            (n[20] = E),
            (n[21] = R),
            (n[22] = k))
          : (k = n[22]),
        k
      );
    }
    l.default = d;
  },
  226,
);
