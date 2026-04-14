__d(
  "WAWebSettingsCheckList.react",
  [
    "WAWebKeyboardIsKeyActivation",
    "WAWebTabOrder",
    "WDSSwitch.react",
    "react",
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
      var t = e.checkboxRightAligned,
        n = e.children,
        a = e.disabled,
        i = e.onChange,
        l = r("useWAWebIsKeyboardUser")(),
        s = l.isKeyboardUser;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {
            role: i != null ? "button" : void 0,
            tabIndex: a === !0 ? -1 : 0,
            "data-tab":
              a === !0 ? null : o("WAWebTabOrder").TAB_ORDER.DRAWER_CONTENT,
            onKeyDown: function (t) {
              i != null &&
                r("WAWebKeyboardIsKeyActivation")(t) &&
                a !== !0 &&
                (t.preventDefault(), i());
            },
          },
          {
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
          }[((t === !0) << 2) | ((a === !0) << 1) | (!!s << 0)],
          { children: n },
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.ariaLabel,
        o = t.checkboxRightAligned,
        a = o === void 0 ? !1 : o,
        i = t.hidden,
        l = i === void 0 ? !1 : i,
        s = u.jsx(
          "label",
          babelHelpers.extends(
            {},
            {
              0: {
                className:
                  "x78zum5 xdt5ytf xl56j7k x1iyjqo2 xs83m0k x1r8uery x19991ni x1d8287x xwji4o3",
              },
              1: {
                className:
                  "x78zum5 xdt5ytf xl56j7k x1iyjqo2 xs83m0k x1r8uery x19991ni x1d8287x xwji4o3 xhslqc4 x197sbye",
              },
            }[(t.disabled === !0) << 0],
            { htmlFor: t.id, children: t.children },
          ),
        ),
        m = u.jsx(
          "div",
          babelHelpers.extends(
            { "data-testid": void 0 },
            (e || (e = r("stylex"))).props(
              a ? c.controlRightAligned : c.control,
              t.disabled === !0 && c.controlDisabled,
              t.checkboxXStyle,
            ),
            {
              children: u.jsx(r("WDSSwitch.react"), {
                "aria-label": n,
                id: t.id,
                onChange: t.onChange,
                value: t.checked,
                disabled: t.disabled,
                tabIndex: -1,
              }),
            },
          ),
        );
      return a
        ? l
          ? null
          : u.jsxs(d, {
              disabled: t.disabled,
              checkboxRightAligned: a,
              onChange: t.onChange,
              children: [s, m],
            })
        : u.jsxs(d, {
            disabled: t.disabled,
            onChange: t.onChange,
            children: [m, s],
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.SettingsCheckListSection = d),
      (l.SettingsCheckListItem = m));
  },
  98,
);
