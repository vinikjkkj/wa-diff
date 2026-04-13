__d(
  "WAWebTabs.react",
  [
    "WAWebKeyboardHotKeys.react",
    "WAWebText.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useHoverState",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef,
      d = {
        tabContainer: {
          display: "x78zum5",
          backgroundColor: "xhjsbib",
          $$css: !0,
        },
        tab: {
          boxSizing: "x9f619",
          display: "x78zum5",
          flexGrow: "x1iyjqo2",
          flexDirection: "xdt5ytf",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          height: "x10wjd1d",
          color: "xhslqc4",
          "::first-letter_textTransform": "x16bgscq",
          fontSize: "x1f6kntn",
          $$css: !0,
        },
        selected: {
          paddingTop: "x1tiyuxx",
          color: "xo1mcw5",
          borderBottomWidth: "x1dmim90",
          borderBottomStyle: "x1q0q8m5",
          borderBottomColor: "x1ydeqjr",
          $$css: !0,
        },
        selectedRefreshed: {
          color: "x1v5yvga",
          borderBottomColor: "x1rrvw3c",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(6),
        a = t.activateTabOnKeyboardNavigation,
        i = t.getTitleProps,
        l = t.hoveredXStyle,
        s = t.onSelect,
        m = t.selectedId,
        f = t.selectedXStyle,
        g = t.tabConfigs,
        h = t.tabXstyle,
        y = t.testIdPrefix,
        C = t.wrapperXstyle,
        b = t.xstyle,
        v = a === void 0 ? !1 : a,
        S = c(m),
        R;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = []), (n[0] = R))
        : (R = n[0]);
      var L = c(R),
        E = g.map(p),
        k = E.length - 1,
        I = {
          right: function () {
            var e = E.indexOf(S.current),
              t = e === k ? 0 : e + 1,
              n = L.current[t];
            (n && n.focus(), v && s(E[t]));
          },
          left: function () {
            var e = E.indexOf(S.current),
              t = e === 0 ? k : e - 1,
              n = L.current[t];
            (n && n.focus(), v && s(E[t]));
          },
        },
        T = "tablist",
        D;
      n[1] !== b
        ? ((D = (e || (e = r("stylex"))).props(d.tabContainer, b)),
          (n[1] = b),
          (n[2] = D))
        : (D = n[2]);
      var x = g.map(function (e, t) {
          var n = e.id,
            r = e.title;
          return u.jsx(
            _,
            {
              getTitleProps: i,
              ref: function (n) {
                L.current[t] = n;
              },
              selected: n === m,
              onSelect: function () {
                return s(n);
              },
              onFocus: function () {
                S.current = n;
              },
              xstyle: h,
              testid: void 0,
              hoveredXStyle: l,
              selectedXStyle: f,
              children: r,
            },
            n,
          );
        }),
        $;
      return (
        n[3] !== D || n[4] !== x
          ? (($ = u.jsx(
              "div",
              babelHelpers.extends({ role: T }, D, { children: x }),
            )),
            (n[3] = D),
            (n[4] = x),
            (n[5] = $))
          : ($ = n[5]),
        u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: I,
          xstyle: C,
          children: $,
        })
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.id;
      return t;
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(35),
        a = t.children,
        i = t.getTitleProps,
        l = t.hoveredXStyle,
        s = t.onFocus,
        c = t.onSelect,
        m = t.ref,
        p = t.selected,
        _ = t.selectedXStyle,
        f = t.testid,
        g = t.xstyle,
        h = r("useHoverState")(),
        y = h.isHovered,
        C = h.onMouseEnter,
        b = h.onMouseLeave,
        v = h.setIsHovered,
        S;
      n[0] !== c || n[1] !== p
        ? ((S = function () {
            p || c();
          }),
          (n[0] = c),
          (n[1] = p),
          (n[2] = S))
        : (S = n[2]);
      var R = S,
        L = p ? 0 : -1,
        E = !!p,
        k;
      n[3] !== l || n[4] !== y || n[5] !== p || n[6] !== _ || n[7] !== g
        ? ((k = (e || (e = r("stylex"))).props(
            d.tab,
            p && d.selected,
            p && d.selectedRefreshed,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            g,
            y && !p && l,
            p && _,
          )),
          (n[3] = l),
          (n[4] = y),
          (n[5] = p),
          (n[6] = _),
          (n[7] = g),
          (n[8] = k))
        : (k = n[8]);
      var I;
      n[9] !== s || n[10] !== v
        ? ((I = function () {
            (s(), v(!0));
          }),
          (n[9] = s),
          (n[10] = v),
          (n[11] = I))
        : (I = n[11]);
      var T;
      n[12] !== v
        ? ((T = function () {
            v(!1);
          }),
          (n[12] = v),
          (n[13] = T))
        : (T = n[13]);
      var D = p ? "wdsAccent" : "secondary",
        x;
      n[14] !== i || n[15] !== y || n[16] !== p
        ? ((x = i == null ? void 0 : i(p, y)),
          (n[14] = i),
          (n[15] = y),
          (n[16] = p),
          (n[17] = x))
        : (x = n[17]);
      var $;
      n[18] !== a || n[19] !== D || n[20] !== x
        ? (($ = u.jsx(
            o("WAWebText.react").WAWebTextTitleRefreshed,
            babelHelpers.extends({ color: D }, x, { children: a }),
          )),
          (n[18] = a),
          (n[19] = D),
          (n[20] = x),
          (n[21] = $))
        : ($ = n[21]);
      var P;
      return (
        n[22] !== a ||
        n[23] !== C ||
        n[24] !== b ||
        n[25] !== m ||
        n[26] !== R ||
        n[27] !== L ||
        n[28] !== E ||
        n[29] !== k ||
        n[30] !== I ||
        n[31] !== T ||
        n[32] !== $ ||
        n[33] !== f
          ? ((P = u.jsx(
              "button",
              babelHelpers.extends(
                {
                  ref: m,
                  role: "tab",
                  tabIndex: L,
                  "aria-selected": E,
                  title: a,
                },
                k,
                {
                  onClick: R,
                  onFocus: I,
                  onBlur: T,
                  onMouseEnter: C,
                  onMouseLeave: b,
                  "data-testid": void 0,
                  children: $,
                },
              ),
            )),
            (n[22] = a),
            (n[23] = C),
            (n[24] = b),
            (n[25] = m),
            (n[26] = R),
            (n[27] = L),
            (n[28] = E),
            (n[29] = k),
            (n[30] = I),
            (n[31] = T),
            (n[32] = $),
            (n[33] = f),
            (n[34] = P))
          : (P = n[34]),
        P
      );
    }
    l.default = m;
  },
  98,
);
