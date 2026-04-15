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
      u = e,
      c = u.useLayoutEffect,
      d = u.useRef,
      m = 4e3,
      p = {
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
    function _(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== e || n[1] !== t
        ? ((r = function () {
            var n = e.current,
              r = t.current;
            if (!(n == null || r == null)) {
              var o = null,
                a = function () {
                  var e = n.scrollWidth - n.clientWidth;
                  if ((o != null && (o.cancel(), (o = null)), e > 0)) {
                    var t = window.getComputedStyle(n).direction === "rtl",
                      a = t ? e : -e;
                    o = r.animate(
                      [
                        { transform: "translateX(0)", offset: 0 },
                        { transform: "translateX(0)", offset: 0.15 },
                        { transform: "translateX(" + a + "px)", offset: 0.85 },
                        { transform: "translateX(" + a + "px)", offset: 1 },
                      ],
                      { duration: m, iterations: 1 / 0, easing: "linear" },
                    );
                  }
                };
              a();
              var i = new MutationObserver(a);
              return (
                i.observe(n, { childList: !0, subtree: !0, characterData: !0 }),
                function () {
                  (i.disconnect(), o != null && o.cancel());
                }
              );
            }
          }),
          (a = [e, t]),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        c(r, a));
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.children,
        a = e.enableChevronIcon,
        i = e.icon,
        l = e.isCloseFriends,
        u = e.onClick,
        c = d(null),
        m = d(null);
      _(c, m);
      var f;
      t[0] !== i
        ? ((f = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.marginEnd2,
            children: i,
          })),
          (t[0] = i),
          (t[1] = f))
        : (f = t[1]);
      var g;
      t[2] !== n
        ? ((g = s.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: p.truncateText,
            testid: void 0,
            children: s.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "persistentAlwaysWhite",
              maxLines: 1,
              children: n,
            }),
          })),
          (t[2] = n),
          (t[3] = g))
        : (g = t[3]);
      var h;
      t[4] !== a
        ? ((h =
            a &&
            s.jsx(o("WAWebFlex.react").FlexItem, {
              shrink: 0,
              xstyle: p.centerIcon,
              children: s.jsx(o("WAWebChevronIcon.react").ChevronIcon, {
                directional: !0,
                height: 18,
                width: 18,
              }),
            })),
          (t[4] = a),
          (t[5] = h))
        : (h = t[5]);
      var y;
      t[6] !== f || t[7] !== g || t[8] !== h
        ? ((y = s.jsxs(s.Fragment, { children: [f, g, h] })),
          (t[6] = f),
          (t[7] = g),
          (t[8] = h),
          (t[9] = y))
        : (y = t[9]);
      var C = y,
        b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = "xeuugli"), (t[10] = b))
        : (b = t[10]);
      var v;
      return (
        t[11] !== C || t[12] !== l || t[13] !== u
          ? ((v = s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "start",
              className: b,
              children: l
                ? s.jsxs(o("WAWebFlex.react").FlexRow, {
                    align: "center",
                    justify: "start",
                    className: "xeuugli x6ikm8r x10wlt62",
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexItem, {
                        className: "x1wbi8v6 x7g7pl8",
                        children: "\u2022",
                      }),
                      s.jsx(o("WAWebClickable.react").Clickable, {
                        onClick: u,
                        className: "xeuugli",
                        children: s.jsx("div", {
                          ref: c,
                          className: "x6ikm8r x10wlt62",
                          children: s.jsx("div", {
                            ref: m,
                            className: "x3nfvp2 x6s0dn4 xuxw1ft",
                            children: C,
                          }),
                        }),
                      }),
                    ],
                  })
                : s.jsxs(s.Fragment, {
                    children: [
                      s.jsx(o("WAWebFlex.react").FlexItem, {
                        className: "x1wbi8v6 x7g7pl8",
                        children: "\u2022",
                      }),
                      s.jsx(o("WAWebClickable.react").Clickable, {
                        onClick: u,
                        className: "xeuugli",
                        children: s.jsx(o("WAWebFlex.react").FlexRow, {
                          align: "center",
                          className: "xeuugli",
                          children: C,
                        }),
                      }),
                    ],
                  }),
            })),
            (t[11] = C),
            (t[12] = l),
            (t[13] = u),
            (t[14] = v))
          : (v = t[14]),
        v
      );
    }
    l.default = f;
  },
  98,
);
