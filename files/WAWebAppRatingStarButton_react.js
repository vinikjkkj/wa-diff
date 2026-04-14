__d(
  "WAWebAppRatingStarButton.react",
  [
    "WAWebBox.react",
    "WAWebStarIcon.react",
    "WAWebStarOutlineIcon.react",
    "WAWebUnstyledButton.react",
    "react",
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
      return s.jsx(r("WAWebBox.react"), {
        xstyle: c.dot,
        children: s.jsx(r("WAWebBox.react"), { xstyle: c.dotInner }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.currentRating,
        n = e.hoveredRating,
        r = e.value;
      return n >= r || t >= r
        ? s.jsx(o("WAWebStarIcon.react").StarIcon, { width: 35, height: 35 })
        : t > 0 && r > t
          ? s.jsx(d, {})
          : s.jsx(o("WAWebStarOutlineIcon.react").StarOutlineIcon, {
              iconXstyle: c.starIconOutline,
            });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.ariaLabel,
        n = e.currentRating,
        o = e.hoveredRating,
        a = e.onClick,
        i = e.onHover,
        l = e.onHoverEnd,
        d = e.testid,
        p = e.value,
        _ = u(!1),
        f = _[0],
        g = _[1],
        h = function () {
          a(p);
        },
        y = function () {
          (g(!0), i && i(p));
        },
        C = function () {
          (g(!1), l && l());
        },
        b = n >= p || o >= p;
      return s.jsx(r("WAWebUnstyledButton.react"), {
        type: "button",
        onClick: h,
        testid: void 0,
        "aria-label": t,
        tabIndex: -1,
        xstyle: [c.starButton, b ? c.starButtonActive : c.starButtonInactive],
        onMouseEnter: y,
        onMouseLeave: C,
        children: s.jsxs(r("WAWebBox.react"), {
          xstyle: c.buttonWrapper,
          children: [
            s.jsx(r("WAWebBox.react"), {
              xstyle: [c.hoverCircle, f && c.hoverCircleVisible],
            }),
            s.jsx(r("WAWebBox.react"), {
              xstyle: c.starContent,
              children: s.jsx(m, {
                currentRating: n,
                hoveredRating: o,
                value: p,
              }),
            }),
          ],
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
