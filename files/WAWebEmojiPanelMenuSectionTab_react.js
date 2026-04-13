__d(
  "WAWebEmojiPanelMenuSectionTab.react",
  [
    "fbt",
    "WAWebEmojiPanelEmojiSections",
    "WAWebEmojiPanelMenuSectionIcon.react",
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
        ? ((u = s._(/*BTDS*/ "Recent")), (n[3] = u))
        : (u = n[3]);
      var d;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Recent reactions")), (n[4] = d))
        : (d = n[4]);
      var m;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Smileys & People")), (n[5] = m))
        : (m = n[5]);
      var p;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Animals & Nature")), (n[6] = p))
        : (p = n[6]);
      var _;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(/*BTDS*/ "Food & Drink")), (n[7] = _))
        : (_ = n[7]);
      var f;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Activity")), (n[8] = f))
        : (f = n[8]);
      var g;
      n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(/*BTDS*/ "Travel & Places")), (n[9] = g))
        : (g = n[9]);
      var h;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Objects")), (n[10] = h))
        : (h = n[10]);
      var y;
      n[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "Symbols")), (n[11] = y))
        : (y = n[11]);
      var C;
      if (n[12] === Symbol.for("react.memo_cache_sentinel")) {
        var b, v;
        ((C =
          ((b = {}),
          (b[(v = o("WAWebEmojiPanelEmojiSections")).SECTIONS.RECENT] = u),
          (b[v.SECTIONS.RECENT_REACTIONS] = d),
          (b[v.SECTIONS.SMILEYS_PEOPLE] = m),
          (b[v.SECTIONS.ANIMALS_NATURE] = p),
          (b[v.SECTIONS.FOOD_DRINK] = _),
          (b[v.SECTIONS.ACTIVITY] = f),
          (b[v.SECTIONS.TRAVEL_PLACES] = g),
          (b[v.SECTIONS.OBJECTS] = h),
          (b[v.SECTIONS.SYMBOLS] = y),
          (b[v.SECTIONS.FLAGS] = s._(/*BTDS*/ "Flags")),
          b)),
          (n[12] = C));
      } else C = n[12];
      var S = C,
        R = a,
        L = R.sectionId,
        E = S[L],
        k;
      n[13] !== L
        ? ((k = c.jsx(r("WAWebEmojiPanelMenuSectionIcon.react"), {
            sectionId: L,
          })),
          (n[13] = L),
          (n[14] = k))
        : (k = n[14]);
      var I;
      return (
        n[15] !== a.onClick ||
        n[16] !== a.selected ||
        n[17] !== a.showFocusIndicator ||
        n[18] !== L ||
        n[19] !== l ||
        n[20] !== k ||
        n[21] !== E
          ? ((I = c.jsx(o("WAWebPanelsMenuTab.react").MenuTab, {
              onClick: a.onClick,
              sectionId: L,
              selected: a.selected,
              showFocusIndicator: a.showFocusIndicator,
              theme: o("WAWebPanelsMenuTab.react").THEMES.MENU,
              title: E,
              onRef: l,
              children: k,
            })),
            (n[15] = a.onClick),
            (n[16] = a.selected),
            (n[17] = a.showFocusIndicator),
            (n[18] = L),
            (n[19] = l),
            (n[20] = k),
            (n[21] = E),
            (n[22] = I))
          : (I = n[22]),
        I
      );
    }
    l.default = d;
  },
  226,
);
