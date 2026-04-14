__d(
  "WAWebPanelsMenuTab.react",
  [
    "WAWebFocusTracer",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useRef,
      p = {
        CAROUSEL: "CAROUSEL",
        CAROUSEL_END: "CAROUSEL_END",
        MENU: "MENU",
        NONE: "NONE",
      },
      _ = {
        tab: {
          display: "x78zum5",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x1fx07b1",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          boxSizing: "x9f619",
          $$css: !0,
        },
        menu: {
          boxSizing: "x9f619",
          flex: "x98rzlu",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x181vq82",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          fontSize: "x1nxh6w3 x324065",
          fontWeight: "xk50ysn",
          lineHeight: "x17fgdl5",
          color: "xhslqc4",
          textTransform: "xtvhhri",
          $$css: !0,
        },
        menuHover: { ":hover_color": "xxxijta", $$css: !0 },
        carousel: {
          position: "x10l6tqk",
          top: "x13vifvy",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          opacity: "x1hc1fzr",
          transition: "x17e1izs",
          $$css: !0,
        },
        carouselEnd: { opacity: "xg01cxk", transition: "xktt2wv", $$css: !0 },
        selected: { color: "x14ug900", $$css: !0 },
      };
    function f(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.children,
        l = a.role,
        s = a.selected,
        c = a.showFocusIndicator,
        f = a.testid,
        g = a.theme,
        h = a.title,
        y = m(),
        C = function (t) {
          ((y.current = t), a.onRef == null || a.onRef(t));
        },
        b = function (t) {
          a.onClick == null || a.onClick(a.sectionId, t);
        },
        v = function () {
          return document.activeElement
            ? y.current === document.activeElement
            : !1;
        },
        S = function () {
          y != null &&
            y.current &&
            (v() || r("WAWebFocusTracer").focus(y.current));
        };
      d(n, function () {
        return { hasFocus: v, focus: S };
      });
      var R = {};
      return (
        f != null && (R.testid = f),
        h != null && (R.title = h),
        u.jsx(
          r("WAWebUnstyledButton.react"),
          babelHelpers.extends(
            {
              role: l,
              ref: C,
              xstyle: [
                _.tab,
                g === p.MENU ? _.menu : null,
                g === p.MENU && s !== !0 ? _.menuHover : null,
                g === p.CAROUSEL || g === p.CAROUSEL_END ? _.carousel : null,
                g === p.CAROUSEL_END ? _.carouselEnd : null,
                s === !0 ? _.selected : null,
                c === !0
                  ? o("WDSFocusStateStyles").WDSFocusStateStyles
                      .genericFocusInner
                  : null,
              ],
              onClick: b,
              tabIndex: 0,
              "aria-current": s != null ? s : !1,
            },
            R,
            { children: i },
          ),
        )
      );
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.THEMES = p),
      (l.MenuTab = f));
  },
  98,
);
