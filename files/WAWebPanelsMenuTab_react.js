__d(
  "WAWebPanelsMenuTab.react",
  [
    "WAWebFocusTracer",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(28),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        s = l.children,
        c = l.role,
        f = l.selected,
        g = l.showFocusIndicator,
        h = l.testid,
        y = l.theme,
        C = l.title,
        b = m(),
        v;
      n[3] !== a
        ? ((v = function (t) {
            ((b.current = t), a.onRef == null || a.onRef(t));
          }),
          (n[3] = a),
          (n[4] = v))
        : (v = n[4]);
      var S = v,
        R;
      n[5] !== a
        ? ((R = function (t) {
            a.onClick == null || a.onClick(a.sectionId, t);
          }),
          (n[5] = a),
          (n[6] = R))
        : (R = n[6]);
      var L = R,
        E;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            return document.activeElement
              ? b.current === document.activeElement
              : !1;
          }),
          (n[7] = E))
        : (E = n[7]);
      var k = E,
        I;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = function () {
            b != null &&
              b.current &&
              (k() || r("WAWebFocusTracer").focus(b.current));
          }),
          (n[8] = I))
        : (I = n[8]);
      var T = I,
        D;
      (n[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = function () {
            return { hasFocus: k, focus: T };
          }),
          (n[9] = D))
        : (D = n[9]),
        d(i, D));
      var x;
      n[10] !== h || n[11] !== C
        ? ((x = {}),
          h != null && (x.testid = h),
          C != null && (x.title = C),
          (n[10] = h),
          (n[11] = C),
          (n[12] = x))
        : (x = n[12]);
      var $ = y === p.MENU ? _.menu : null,
        P = y === p.MENU && f !== !0 ? _.menuHover : null,
        N = y === p.CAROUSEL || y === p.CAROUSEL_END ? _.carousel : null,
        M = y === p.CAROUSEL_END ? _.carouselEnd : null,
        w = f === !0 ? _.selected : null,
        A =
          g === !0
            ? o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusInner
            : null,
        F;
      n[13] !== w ||
      n[14] !== A ||
      n[15] !== $ ||
      n[16] !== P ||
      n[17] !== N ||
      n[18] !== M
        ? ((F = [_.tab, $, P, N, M, w, A]),
          (n[13] = w),
          (n[14] = A),
          (n[15] = $),
          (n[16] = P),
          (n[17] = N),
          (n[18] = M),
          (n[19] = F))
        : (F = n[19]);
      var O = f != null ? f : !1,
        B;
      return (
        n[20] !== s ||
        n[21] !== L ||
        n[22] !== x ||
        n[23] !== c ||
        n[24] !== S ||
        n[25] !== F ||
        n[26] !== O
          ? ((B = u.jsx(
              r("WAWebUnstyledButton.react"),
              babelHelpers.extends(
                {
                  role: c,
                  ref: S,
                  xstyle: F,
                  onClick: L,
                  tabIndex: 0,
                  "aria-current": O,
                },
                x,
                { children: s },
              ),
            )),
            (n[20] = s),
            (n[21] = L),
            (n[22] = x),
            (n[23] = c),
            (n[24] = S),
            (n[25] = F),
            (n[26] = O),
            (n[27] = B))
          : (B = n[27]),
        B
      );
    }
    ((l.THEMES = p), (l.MenuTab = f));
  },
  98,
);
