__d(
  "WAWebRadio.react",
  [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebText.react",
    "WDSBaseRadio.react",
    "react",
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
      var t = e.ariaLabel,
        n = e.checkedValue,
        r = e.name,
        a = e.onChange,
        i = e.options,
        l = e.tabIndex,
        s = e.testid,
        u = e.theme,
        d = !n,
        m = function (t, n) {
          (t != null && t(n.value), a != null && a(n.value));
        };
      return c.jsx(o("WAWebFlex.react").FlexColumn, {
        testid: void 0,
        role: "radiogroup",
        "aria-label": t,
        tabIndex: l,
        children: i.map(function (e, t) {
          var o = n === e.value;
          return c.jsx(
            _,
            {
              value: e.value,
              label: e.label,
              name: r,
              checked: o,
              tabIndex: o || (d && t === 0) ? 0 : -1,
              secondaryLabel: e.secondaryLabel,
              disabled: e.disabled === !0 && !o,
              onDisabledClick: e.onDisabledClick,
              testid: void 0,
              xstyle: e.xstyle,
              onChange: function () {
                return m(e.onChange, e);
              },
              theme: u,
            },
            e.value,
          );
        }),
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.RadioWithLabelThemeEnum = p),
      (l.RadioWithLabel = _),
      (l.RadioGroup = f));
  },
  98,
);
