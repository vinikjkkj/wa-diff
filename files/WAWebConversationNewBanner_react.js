__d(
  "WAWebConversationNewBanner.react",
  [
    "WAWebButton.react",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = 1250,
      c = {
        container: {
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          backgroundColor: "x1280gxy",
          display: "x78zum5",
          justifyContent: "x1l1ennw",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.buttons,
        a = e.primaryText,
        i = e.secondaryText,
        l = e.testId,
        d = r("useWAWebWindowSize")(),
        m = d.width,
        p =
          m <= u
            ? o("WAWebFlex.react").FlexColumn
            : o("WAWebFlex.react").FlexRow,
        _;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = [16, 16, 16, 16]), (t[0] = _))
        : (_ = t[0]);
      var f;
      t[1] !== a
        ? ((f = s.jsx(o("WAWebText.react").WAWebTextTitle, { children: a })),
          (t[1] = a),
          (t[2] = f))
        : (f = t[2]);
      var g;
      t[3] !== i
        ? ((g =
            i != null &&
            s.jsx(o("WAWebText.react").WAWebTextMuted, { children: i })),
          (t[3] = i),
          (t[4] = g))
        : (g = t[4]);
      var h;
      t[5] !== f || t[6] !== g
        ? ((h = s.jsxs(o("WAWebFlex.react").FlexColumn, { children: [f, g] })),
          (t[5] = f),
          (t[6] = g),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== n
        ? ((y = s.jsx(o("WAWebButton.react").ButtonGroup, {
            direction: "horizontal",
            shrink: 0,
            children: n,
          })),
          (t[8] = n),
          (t[9] = y))
        : (y = t[9]);
      var C;
      return (
        t[10] !== p || t[11] !== h || t[12] !== y || t[13] !== l
          ? ((C = s.jsx(o("WAWebFlex.react").FlexColumn, {
              padding: 8,
              children: s.jsxs(p, {
                alignSelf: "stretch",
                align: "center",
                justify: "all",
                xstyle: c.container,
                padding: _,
                gap: 16,
                testid: void 0,
                children: [h, y],
              }),
            })),
            (t[10] = p),
            (t[11] = h),
            (t[12] = y),
            (t[13] = l),
            (t[14] = C))
          : (C = t[14]),
        C
      );
    }
    l.default = d;
  },
  98,
);
