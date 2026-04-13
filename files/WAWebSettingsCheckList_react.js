__d(
  "WAWebSettingsCheckList.react",
  [
    "WAWebKeyboardIsKeyActivation",
    "WAWebTabOrder",
    "WDSSwitch.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        controlRightAligned: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          alignItems: "x6s0dn4",
          marginInlineStart: "x6pxu1d",
          transitionProperty: "x19991ni",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
        control: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          flexBasis: "xdl72j9",
          alignItems: "x6s0dn4",
          marginInlineEnd: "x14mko6t",
          transitionProperty: "x19991ni",
          transitionDuration: "x1d8287x",
          transitionTimingFunction: "xwji4o3",
          $$css: !0,
        },
        controlDisabled: { opacity: "x1iy03kw", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.checkboxRightAligned,
        a = e.children,
        i = e.disabled,
        l = e.onChange,
        s = r("useWAWebIsKeyboardUser")(),
        c = s.isKeyboardUser,
        d = l != null ? "button" : void 0,
        m = i === !0 ? -1 : 0,
        p = i === !0 ? null : o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
        _;
      t[0] !== i || t[1] !== l
        ? ((_ = function (t) {
            l != null &&
              r("WAWebKeyboardIsKeyActivation")(t) &&
              i !== !0 &&
              (t.preventDefault(), l());
          }),
          (t[0] = i),
          (t[1] = l),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] !== n || t[4] !== i || t[5] !== c
        ? ((f = {
            0: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x7vsco6 x1f6kntn x1fc57z9",
            },
            4: {
              className: "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x6prxxf x1fc57z9",
            },
            2: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x7vsco6 x1f6kntn x1fc57z9 x47corl",
            },
            6: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x6prxxf x1fc57z9 x47corl",
            },
            1: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x7vsco6 x1f6kntn x1fc57z9 x1jsj9aw",
            },
            5: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x6prxxf x1fc57z9 x1jsj9aw",
            },
            3: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x7vsco6 x1f6kntn x1fc57z9 x47corl x1jsj9aw",
            },
            7: {
              className:
                "x78zum5 x6s0dn4 x1p57kb1 xvpt6g3 x6prxxf x1fc57z9 x47corl x1jsj9aw",
            },
          }[((n === !0) << 2) | ((i === !0) << 1) | (!!c << 0)]),
          (t[3] = n),
          (t[4] = i),
          (t[5] = c),
          (t[6] = f))
        : (f = t[6]);
      var g;
      return (
        t[7] !== a ||
        t[8] !== d ||
        t[9] !== m ||
        t[10] !== p ||
        t[11] !== _ ||
        t[12] !== f
          ? ((g = u.jsx(
              "div",
              babelHelpers.extends(
                { role: d, tabIndex: m, "data-tab": p, onKeyDown: _ },
                f,
                { children: a },
              ),
            )),
            (t[7] = a),
            (t[8] = d),
            (t[9] = m),
            (t[10] = p),
            (t[11] = _),
            (t[12] = f),
            (t[13] = g))
          : (g = t[13]),
        g
      );
    }
    function m(t) {
      var n = o("react-compiler-runtime").c(31),
        a = t.ariaLabel,
        i = t.checkboxRightAligned,
        l = t.hidden,
        s = i === void 0 ? !1 : i,
        m = l === void 0 ? !1 : l,
        p;
      n[0] !== t.disabled
        ? ((p = {
            0: {
              className:
                "x78zum5 xdt5ytf xl56j7k x1iyjqo2 xs83m0k x1r8uery x19991ni x1d8287x xwji4o3",
            },
            1: {
              className:
                "x78zum5 xdt5ytf xl56j7k x1iyjqo2 xs83m0k x1r8uery x19991ni x1d8287x xwji4o3 xhslqc4 x197sbye",
            },
          }[(t.disabled === !0) << 0]),
          (n[0] = t.disabled),
          (n[1] = p))
        : (p = n[1]);
      var _;
      n[2] !== t.children || n[3] !== t.id || n[4] !== p
        ? ((_ = u.jsx(
            "label",
            babelHelpers.extends({}, p, {
              htmlFor: t.id,
              children: t.children,
            }),
          )),
          (n[2] = t.children),
          (n[3] = t.id),
          (n[4] = p),
          (n[5] = _))
        : (_ = n[5]);
      var f = _,
        g = t.testid,
        h;
      n[6] !== s || n[7] !== t.checkboxXStyle || n[8] !== t.disabled
        ? ((h = (e || (e = r("stylex"))).props(
            s ? c.controlRightAligned : c.control,
            t.disabled === !0 && c.controlDisabled,
            t.checkboxXStyle,
          )),
          (n[6] = s),
          (n[7] = t.checkboxXStyle),
          (n[8] = t.disabled),
          (n[9] = h))
        : (h = n[9]);
      var y;
      n[10] !== a ||
      n[11] !== t.checked ||
      n[12] !== t.disabled ||
      n[13] !== t.id ||
      n[14] !== t.onChange
        ? ((y = u.jsx(r("WDSSwitch.react"), {
            "aria-label": a,
            id: t.id,
            onChange: t.onChange,
            value: t.checked,
            disabled: t.disabled,
            tabIndex: -1,
          })),
          (n[10] = a),
          (n[11] = t.checked),
          (n[12] = t.disabled),
          (n[13] = t.id),
          (n[14] = t.onChange),
          (n[15] = y))
        : (y = n[15]);
      var C;
      n[16] !== t.testid || n[17] !== h || n[18] !== y
        ? ((C = u.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, h, { children: y }),
          )),
          (n[16] = t.testid),
          (n[17] = h),
          (n[18] = y),
          (n[19] = C))
        : (C = n[19]);
      var b = C;
      if (s) {
        if (m) return null;
        var v;
        return (
          n[20] !== s ||
          n[21] !== f ||
          n[22] !== t.disabled ||
          n[23] !== t.onChange ||
          n[24] !== b
            ? ((v = u.jsxs(d, {
                disabled: t.disabled,
                checkboxRightAligned: s,
                onChange: t.onChange,
                children: [f, b],
              })),
              (n[20] = s),
              (n[21] = f),
              (n[22] = t.disabled),
              (n[23] = t.onChange),
              (n[24] = b),
              (n[25] = v))
            : (v = n[25]),
          v
        );
      }
      var S;
      return (
        n[26] !== f ||
        n[27] !== t.disabled ||
        n[28] !== t.onChange ||
        n[29] !== b
          ? ((S = u.jsxs(d, {
              disabled: t.disabled,
              onChange: t.onChange,
              children: [b, f],
            })),
            (n[26] = f),
            (n[27] = t.disabled),
            (n[28] = t.onChange),
            (n[29] = b),
            (n[30] = S))
          : (S = n[30]),
        S
      );
    }
    ((l.SettingsCheckListSection = d), (l.SettingsCheckListItem = m));
  },
  98,
);
