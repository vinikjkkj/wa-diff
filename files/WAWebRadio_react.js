__d(
  "WAWebRadio.react",
  [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSBaseRadio.react",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = [
        "label",
        "secondaryLabel",
        "disabled",
        "onDisabledClick",
        "xstyle",
        "testid",
        "checked",
        "theme",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useId,
      m = {
        option: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          cursor: "x1ypdohk",
          $$css: !0,
        },
        optionText: { lineHeight: "x132q4wb", display: "x1rg5ohu", $$css: !0 },
        themeNormal: { fontSize: "x1f6kntn", minHeight: "x1ba4aug", $$css: !0 },
        themeLarge: {
          backgroundColor: "x1ubxc9n",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          boxSizing: "x9f619",
          fontSize: "x1jchvi3",
          minHeight: "xbktkl8",
          paddingInlineStart: "x12w63v0",
          paddingInlineEnd: "x1nzty39",
          paddingLeft: null,
          paddingRight: null,
          width: "xh8yej3",
          $$css: !0,
        },
        disabledText: { opacity: "xbyyjgo", $$css: !0 },
        paddingStart20: { paddingInlineStart: "x1phvje8", $$css: !0 },
        paddingStart12: { paddingInlineStart: "x1iw51ew", $$css: !0 },
      },
      p = n("$InternalEnum")({ NORMAL: "normal", LARGE: "large" });
    function _(t) {
      var n = t.label,
        a = t.secondaryLabel,
        i = t.disabled,
        l = t.onDisabledClick,
        u = t.xstyle,
        _ = t.testid,
        f = t.checked,
        g = t.theme,
        h = g === void 0 ? (a != null ? p.LARGE : p.NORMAL) : g,
        y = babelHelpers.objectWithoutPropertiesLoose(t, e),
        C = d(),
        b = function (t) {
          i === !0 &&
            l != null &&
            (t.preventDefault(), t.stopPropagation(), l());
        },
        v = function (t) {
          (t.key === "Enter" || t.key === " ") && b(t);
        },
        S,
        R;
      switch (h) {
        case p.LARGE:
          ((S = [m.themeLarge]), (R = m.paddingStart20));
          break;
        case p.NORMAL:
          ((S = [m.themeNormal]), (R = m.paddingStart12));
      }
      return c.jsxs(
        "label",
        babelHelpers.extends(
          {},
          (s || (s = r("stylex"))).props(
            m.option,
            S,
            u,
            i === !0 && m.disabledText,
          ),
          {
            onClick: b,
            onKeyDown: v,
            "data-testid": void 0,
            children: [
              c.jsx(
                r("WDSBaseRadio.react"),
                babelHelpers.extends({}, y, {
                  disabled: i,
                  "aria-labelledby": C,
                  checked: f,
                  testid: void 0,
                }),
              ),
              c.jsxs(
                "span",
                babelHelpers.extends(
                  {},
                  s.props(m.optionText, m.paddingStart20, R),
                  {
                    id: C,
                    "data-testid": void 0,
                    children: [
                      n,
                      c.jsx(o("WAWebText.react").WAWebTextMuted, {
                        color: "secondary",
                        as: "div",
                        children: a,
                      }),
                    ],
                  },
                ),
              ),
            ],
          },
        ),
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = o("react-compiler-runtime").c(20),
        n = e.ariaLabel,
        r = e.checkedValue,
        a = e.name,
        i = e.onChange,
        l = e.options,
        s = e.tabIndex,
        u = e.testid,
        d = e.theme,
        m = !r,
        p;
      t[0] !== i
        ? ((p = function (t, n) {
            (t != null && t(n.value), i != null && i(n.value));
          }),
          (t[0] = i),
          (t[1] = p))
        : (p = t[1]);
      var f = p,
        g;
      if (
        t[2] !== r ||
        t[3] !== f ||
        t[4] !== a ||
        t[5] !== m ||
        t[6] !== l ||
        t[7] !== d
      ) {
        var h;
        (t[9] !== r || t[10] !== f || t[11] !== a || t[12] !== m || t[13] !== d
          ? ((h = function (t, n) {
              var e = r === t.value;
              return c.jsx(
                _,
                {
                  value: t.value,
                  label: t.label,
                  name: a,
                  checked: e,
                  tabIndex: e || (m && n === 0) ? 0 : -1,
                  secondaryLabel: t.secondaryLabel,
                  disabled: t.disabled === !0 && !e,
                  onDisabledClick: t.onDisabledClick,
                  testid: void 0,
                  xstyle: t.xstyle,
                  onChange: function () {
                    return f(t.onChange, t);
                  },
                  theme: d,
                },
                t.value,
              );
            }),
            (t[9] = r),
            (t[10] = f),
            (t[11] = a),
            (t[12] = m),
            (t[13] = d),
            (t[14] = h))
          : (h = t[14]),
          (g = l.map(h)),
          (t[2] = r),
          (t[3] = f),
          (t[4] = a),
          (t[5] = m),
          (t[6] = l),
          (t[7] = d),
          (t[8] = g));
      } else g = t[8];
      var y;
      return (
        t[15] !== n || t[16] !== g || t[17] !== s || t[18] !== u
          ? ((y = c.jsx(o("WAWebFlex.react").FlexColumn, {
              testid: void 0,
              role: "radiogroup",
              "aria-label": n,
              tabIndex: s,
              children: g,
            })),
            (t[15] = n),
            (t[16] = g),
            (t[17] = s),
            (t[18] = u),
            (t[19] = y))
          : (y = t[19]),
        y
      );
    }
    ((l.RadioWithLabelThemeEnum = p),
      (l.RadioWithLabel = _),
      (l.RadioGroup = f));
  },
  98,
);
