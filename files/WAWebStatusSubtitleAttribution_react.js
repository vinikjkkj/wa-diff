__d(
  "WAWebStatusSubtitleAttribution.react",
  [
    "WAWebChevronIcon.react",
    "WAWebClickable.react",
    "WAWebFlex.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        marginEnd2: {
          marginInlineEnd: "x16q7b9a",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        truncateText: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
        centerIcon: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.children,
        a = e.enableChevronIcon,
        i = e.icon,
        l = e.onClick,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = "xeuugli"), (t[0] = c))
        : (c = t[0]);
      var d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s.jsx(o("WAWebFlex.react").FlexItem, {
            className: "x1wbi8v6 x7g7pl8",
            children: "\u2022",
          })),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = "xeuugli"), (t[2] = m))
        : (m = t[2]);
      var p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = "xeuugli"), (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== i
        ? ((_ = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: u.marginEnd2,
            children: i,
          })),
          (t[4] = i),
          (t[5] = _))
        : (_ = t[5]);
      var f;
      t[6] !== n
        ? ((f = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: u.truncateText,
            testid: void 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "persistentAlwaysWhite",
              maxLines: 1,
              children: n,
            }),
          })),
          (t[6] = n),
          (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== a
        ? ((g =
            a &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              xstyle: u.centerIcon,
              children: s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                directional: !0,
                height: 18,
                width: 18,
              }),
            })),
          (t[8] = a),
          (t[9] = g))
        : (g = t[9]);
      var h;
      t[10] !== _ || t[11] !== f || t[12] !== g
        ? ((h = s.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "center",
            className: p,
            children: [_, f, g],
          })),
          (t[10] = _),
          (t[11] = f),
          (t[12] = g),
          (t[13] = h))
        : (h = t[13]);
      var y;
      return (
        t[14] !== l || t[15] !== h
          ? ((y = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              className: c,
              children: [
                d,
                s.jsx(o("WAWebClickable.react").Clickable, {
                  onClick: l,
                  className: m,
                  children: h,
                }),
              ],
            })),
            (t[14] = l),
            (t[15] = h),
            (t[16] = y))
          : (y = t[16]),
        y
      );
    }
    l.default = c;
  },
  98,
);
