__d(
  "WAWebAppRatingStarButton.react",
  [
    "WAWebBox.react",
    "WAWebStarIcon.react",
    "WAWebStarOutlineIcon.react",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        starButton: {
          display: "x1rg5ohu",
          paddingTop: "x1y1aw1k",
          paddingInlineEnd: "xf159sx",
          paddingBottom: "xwib8y2",
          paddingInlineStart: "x1c1uobl",
          borderTopStyle: "x1ejq31n",
          borderInlineEndStyle: "x18oe1m7",
          borderBottomStyle: "x1sy0etr",
          borderInlineStartStyle: "xstzfhl",
          borderTopColor: "x1v8p93f",
          borderInlineEndColor: "x1o3jo1z",
          borderBottomColor: "x16stqrj",
          borderInlineStartColor: "xv5lvn5",
          background: "x1md70p1",
          cursor: "x1ypdohk",
          width: "x100vrsf",
          height: "x1vqgdyp",
          position: "x1n2onr6",
          verticalAlign: "x16dsc37",
          outline: "x1a2a7pz",
          $$css: !0,
        },
        buttonWrapper: {
          position: "x1n2onr6",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          width: "xh8yej3",
          height: "x5yr21d",
          $$css: !0,
        },
        hoverCircle: {
          content: "x14axycx",
          position: "x10l6tqk",
          width: "x100vrsf",
          height: "x1vqgdyp",
          borderStartStartRadius: "x1ekkm8c",
          borderStartEndRadius: "x1143rjc",
          borderEndEndRadius: "xum4auv",
          borderEndStartRadius: "xj21bgg",
          background: "x127nobb",
          opacity: "xg01cxk",
          transition: "xzdg38j",
          $$css: !0,
        },
        hoverCircleVisible: { opacity: "x1hc1fzr", $$css: !0 },
        starButtonActive: { color: "x1v5yvga", $$css: !0 },
        starButtonInactive: { color: "xhslqc4", $$css: !0 },
        starIconOutline: { width: "xvy4d1p", height: "xxk0z11", $$css: !0 },
        starContent: {
          position: "x1n2onr6",
          zIndex: "x1vjfegm",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        dot: {
          width: "xvy4d1p",
          height: "xxk0z11",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        dotInner: {
          width: "x1xc55vz",
          height: "xdk7pt",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          backgroundColor: "x1518k6t",
          $$css: !0,
        },
      };
    function d() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s.jsx(r("WAWebBox.react"), {
              xstyle: c.dot,
              children: s.jsx(r("WAWebBox.react"), { xstyle: c.dotInner }),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.currentRating,
        r = e.hoveredRating,
        a = e.value;
      if (r >= a || n >= a) {
        var i;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s.jsx(o("WAWebStarIcon.react").StarIcon, {
                width: 35,
                height: 35,
              })),
              (t[0] = i))
            : (i = t[0]),
          i
        );
      }
      if (n > 0 && a > n) {
        var l;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = s.jsx(d, {})), (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      var u;
      return (
        t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = s.jsx(o("WAWebStarOutlineIcon.react").StarOutlineIcon, {
              iconXstyle: c.starIconOutline,
            })),
            (t[2] = u))
          : (u = t[2]),
        u
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(27),
        n = e.ariaLabel,
        a = e.currentRating,
        i = e.hoveredRating,
        l = e.onClick,
        d = e.onHover,
        p = e.onHoverEnd,
        _ = e.testid,
        f = e.value,
        g = u(!1),
        h = g[0],
        y = g[1],
        C;
      t[0] !== l || t[1] !== f
        ? ((C = function () {
            l(f);
          }),
          (t[0] = l),
          (t[1] = f),
          (t[2] = C))
        : (C = t[2]);
      var b = C,
        v;
      t[3] !== d || t[4] !== f
        ? ((v = function () {
            (y(!0), d && d(f));
          }),
          (t[3] = d),
          (t[4] = f),
          (t[5] = v))
        : (v = t[5]);
      var S = v,
        R;
      t[6] !== p
        ? ((R = function () {
            (y(!1), p && p());
          }),
          (t[6] = p),
          (t[7] = R))
        : (R = t[7]);
      var L = R,
        E = a >= f || i >= f,
        k = E ? c.starButtonActive : c.starButtonInactive,
        I;
      t[8] !== k
        ? ((I = [c.starButton, k]), (t[8] = k), (t[9] = I))
        : (I = t[9]);
      var T = h && c.hoverCircleVisible,
        D;
      t[10] !== T
        ? ((D = s.jsx(r("WAWebBox.react"), { xstyle: [c.hoverCircle, T] })),
          (t[10] = T),
          (t[11] = D))
        : (D = t[11]);
      var x;
      t[12] !== a || t[13] !== i || t[14] !== f
        ? ((x = s.jsx(r("WAWebBox.react"), {
            xstyle: c.starContent,
            children: s.jsx(m, {
              currentRating: a,
              hoveredRating: i,
              value: f,
            }),
          })),
          (t[12] = a),
          (t[13] = i),
          (t[14] = f),
          (t[15] = x))
        : (x = t[15]);
      var $;
      t[16] !== D || t[17] !== x
        ? (($ = s.jsxs(r("WAWebBox.react"), {
            xstyle: c.buttonWrapper,
            children: [D, x],
          })),
          (t[16] = D),
          (t[17] = x),
          (t[18] = $))
        : ($ = t[18]);
      var P;
      return (
        t[19] !== n ||
        t[20] !== b ||
        t[21] !== S ||
        t[22] !== L ||
        t[23] !== I ||
        t[24] !== $ ||
        t[25] !== _
          ? ((P = s.jsx(r("WAWebUnstyledButton.react"), {
              type: "button",
              onClick: b,
              testid: void 0,
              "aria-label": n,
              tabIndex: -1,
              xstyle: I,
              onMouseEnter: S,
              onMouseLeave: L,
              children: $,
            })),
            (t[19] = n),
            (t[20] = b),
            (t[21] = S),
            (t[22] = L),
            (t[23] = I),
            (t[24] = $),
            (t[25] = _),
            (t[26] = P))
          : (P = t[26]),
        P
      );
    }
    l.default = p;
  },
  98,
);
