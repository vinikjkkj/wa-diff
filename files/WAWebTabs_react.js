__d(
  "WAWebTabs.react",
  [
    "WAWebKeyboardHotKeys.react",
    "WAWebText.react",
    "WDSFocusStateStyles",
    "react",
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
      var n = t.activateTabOnKeyboardNavigation,
        a = n === void 0 ? !1 : n,
        i = t.getTitleProps,
        l = t.hoveredXStyle,
        s = t.onSelect,
        m = t.selectedId,
        _ = t.selectedXStyle,
        f = t.tabConfigs,
        g = t.tabXstyle,
        h = t.testIdPrefix,
        y = t.wrapperXstyle,
        C = t.xstyle,
        b = c(m),
        v = c([]),
        S = f.map(function (e) {
          var t = e.id;
          return t;
        }),
        R = S.length - 1,
        L = {
          right: function () {
            var e = S.indexOf(b.current),
              t = e === R ? 0 : e + 1,
              n = v.current[t];
            (n && n.focus(), a && s(S[t]));
          },
          left: function () {
            var e = S.indexOf(b.current),
              t = e === 0 ? R : e - 1,
              n = v.current[t];
            (n && n.focus(), a && s(S[t]));
          },
        };
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: L,
        xstyle: y,
        children: u.jsx(
          "div",
          babelHelpers.extends(
            { role: "tablist" },
            (e || (e = r("stylex"))).props(d.tabContainer, C),
            {
              children: f.map(function (e, t) {
                var n = e.id,
                  r = e.title;
                return u.jsx(
                  p,
                  {
                    getTitleProps: i,
                    ref: function (n) {
                      v.current[t] = n;
                    },
                    selected: n === m,
                    onSelect: function () {
                      return s(n);
                    },
                    onFocus: function () {
                      b.current = n;
                    },
                    xstyle: g,
                    testid: void 0,
                    hoveredXStyle: l,
                    selectedXStyle: _,
                    children: r,
                  },
                  n,
                );
              }),
            },
          ),
        ),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.children,
        a = t.getTitleProps,
        i = t.hoveredXStyle,
        l = t.onFocus,
        s = t.onSelect,
        c = t.ref,
        m = t.selected,
        p = t.selectedXStyle,
        _ = t.testid,
        f = t.xstyle,
        g = r("useHoverState")(),
        h = g.isHovered,
        y = g.onMouseEnter,
        C = g.onMouseLeave,
        b = g.setIsHovered,
        v = function () {
          m || s();
        };
      return u.jsx(
        "button",
        babelHelpers.extends(
          {
            ref: c,
            role: "tab",
            tabIndex: m ? 0 : -1,
            "aria-selected": !!m,
            title: n,
          },
          (e || (e = r("stylex"))).props(
            d.tab,
            m && d.selected,
            m && d.selectedRefreshed,
            o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            f,
            h && !m && i,
            m && p,
          ),
          {
            onClick: v,
            onFocus: function () {
              (l(), b(!0));
            },
            onBlur: function () {
              b(!1);
            },
            onMouseEnter: y,
            onMouseLeave: C,
            "data-testid": void 0,
            children: u.jsx(
              o("WAWebText.react").WAWebTextTitleRefreshed,
              babelHelpers.extends(
                { color: m ? "wdsAccent" : "secondary" },
                a == null ? void 0 : a(m, h),
                { children: n },
              ),
            ),
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
