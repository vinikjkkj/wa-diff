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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored(["EXPRESSION_PANELS"]);
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.sectionId,
        a = e.sectionTitle,
        i = e.theme;
      if (i === u.EXPRESSION_PANELS) {
        var l;
        return (
          t[0] !== n
            ? ((l = s.jsx(d, { sectionId: n })), (t[0] = n), (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      if (n && n === o("WAWebGifPanelGifSections").SECTIONS.FAVORITES) {
        var c;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(r("WDSIconIcGrade.react"), {})), (t[2] = c))
            : (c = t[2]),
          c
        );
      }
      var m;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = {
            className: "x1rg5ohu x193iq5w x6ikm8r x10wlt62 xlyipyv xuxw1ft",
          }),
          (t[3] = m))
        : (m = t[3]);
      var p;
      return (
        t[4] !== a
          ? ((p = s.jsx("span", babelHelpers.extends({}, m, { children: a }))),
            (t[4] = a),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.sectionId;
      switch (n) {
        case o("WAWebGifPanelGifSections").SECTIONS.TRENDING: {
          var a;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = s.jsx(r("WDSIconIcTrendingUp.react"), {})), (t[0] = a))
              : (a = t[0]),
            a
          );
        }
        case o("WAWebGifPanelGifSections").SECTIONS.HAHA: {
          var i;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = s.jsx(r("WDSIconIcSentimentExcited.react"), {})),
                (t[1] = i))
              : (i = t[1]),
            i
          );
        }
        case o("WAWebGifPanelGifSections").SECTIONS.SAD: {
          var l;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = s.jsx(r("WDSIconIcSentimentSad.react"), {})), (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        case o("WAWebGifPanelGifSections").SECTIONS.LOVE: {
          var u;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = s.jsx(r("WDSIconIcFavorite.react"), {})), (t[3] = u))
              : (u = t[3]),
            u
          );
        }
        case o("WAWebGifPanelGifSections").SECTIONS.REACTIONS: {
          var c;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = s.jsx(r("WDSIconIcThumbUp.react"), {})), (t[4] = c))
              : (c = t[4]),
            c
          );
        }
        case o("WAWebGifPanelGifSections").SECTIONS.SPORTS: {
          var d;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = s.jsx(r("WDSIconIcSportsBasketball.react"), {})),
                (t[5] = d))
              : (d = t[5]),
            d
          );
        }
        case o("WAWebGifPanelGifSections").SECTIONS.TV: {
          var m;
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = s.jsx(r("WDSIconIcMonitor.react"), {})), (t[6] = m))
              : (m = t[6]),
            m
          );
        }
      }
      var p;
      return (
        t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s.jsx(r("WDSIconIcGrade.react"), {})), (t[7] = p))
          : (p = t[7]),
        p
      );
    }
    ((l.GifPanelMenuSectionIconTheme = u), (l.GifSectionIcon = c));
  },
  98,
);
