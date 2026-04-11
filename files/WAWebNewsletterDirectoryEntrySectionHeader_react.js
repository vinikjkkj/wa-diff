__d(
  "WAWebNewsletterDirectoryEntrySectionHeader.react",
  [
    "fbt",
    "WAWebBaseShimmerComponents.react",
    "WAWebFlex.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebSectionHeaderWithAction.react",
    "react",
    "react-compiler-runtime",
    "useWAWebActiveSelection",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.active,
        a = e.isLoading,
        i = e.onSeeAllNewsletters,
        l = e.subtitle,
        c = e.title,
        d = e.xstyle,
        m;
      t[0] !== c ? ((m = c.toString()), (t[0] = c), (t[1] = m)) : (m = t[1]);
      var p = r("useWAWebActiveSelection")(
          n,
          "newsletter-category-header-" + m,
        ),
        _ = p[0],
        f = p[1];
      if (a === !0) {
        var g;
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = u.jsx(
              o("WAWebBaseShimmerComponents.react").RectangleShimmer,
              { height: 18, width: 250 },
            )),
            (t[2] = g))
          : (g = t[2]);
        var h;
        return (
          t[3] !== d
            ? ((h = u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: d,
                children: g,
              })),
              (t[3] = d),
              (t[4] = h))
            : (h = t[4]),
          h
        );
      }
      var y;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = s._(/*BTDS*/ "See all")), (t[5] = y))
        : (y = t[5]);
      var C;
      t[6] !== f || t[7] !== i || t[8] !== l || t[9] !== c || t[10] !== d
        ? ((C = u.jsx(r("WAWebSectionHeaderWithAction.react"), {
            active: f,
            xstyle: d,
            title: c,
            subtitle: l,
            actionText: y,
            onClick: i,
          })),
          (t[6] = f),
          (t[7] = i),
          (t[8] = l),
          (t[9] = c),
          (t[10] = d),
          (t[11] = C))
        : (C = t[11]);
      var b;
      return (
        t[12] !== _ || t[13] !== C
          ? ((b = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              ref: _,
              children: C,
            })),
            (t[12] = _),
            (t[13] = C),
            (t[14] = b))
          : (b = t[14]),
        b
      );
    }
    l.default = c;
  },
  226,
);
