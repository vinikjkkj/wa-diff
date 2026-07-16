__d(
  "WDSRichTextAddOns",
  [
    "WDSButton.react",
    "WDSIconIcError.react",
    "WDSSpinner.react",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        iconContainer: { height: "x1vqgdyp", width: "x100vrsf", $$css: !0 },
        addOnEnd: { color: "xhslqc4", $$css: !0 },
        StartIconContainer: { marginInlineEnd: "xviac27", $$css: !0 },
        EndIconContainer: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        textSuffixNoIcon: { marginInlineEnd: "xviac27", $$css: !0 },
      },
      d = {
        iconContainer: { height: "x10w6t97", width: "x1td3qas", $$css: !0 },
        StartIconContainer: { marginInlineEnd: "xqf2s3x", $$css: !0 },
        EndIconContainer: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        textSuffixNoIcon: { marginInlineEnd: "x1sa5p1d", $$css: !0 },
      },
      m = {
        iconContainer: {
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          $$css: !0,
        },
        textAffixes: { wordBreak: "x1lldw8n", $$css: !0 },
        textPrefix: { marginInlineEnd: "x7g7pl8", $$css: !0 },
        textSuffix: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        counter: {
          whiteSpace: "xuxw1ft",
          alignSelf: "x1y8v6su",
          marginInlineStart: "xvc5jky",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        bottomTextContainer: {
          flexGrow: "x1iyjqo2",
          flexShrink: "xs83m0k",
          flexBasis: "x1r8uery",
          minWidth: "xeuugli",
          $$css: !0,
        },
        errorIcon: { flexShrink: "x2lah0s", $$css: !0 },
      };
    function p(t) {
      var n = t.StartIcon,
        o = t.platform,
        a = t.prefix;
      if (n == null && a == null) return null;
      var i, l, s;
      return (
        o === "android"
          ? ((i = c.StartIconContainer), (l = 24), (s = "Body1"))
          : ((i = d.StartIconContainer), (l = 20), (s = "Body2")),
        u.jsxs("div", {
          className: "x78zum5 x6s0dn4",
          children: [
            n != null &&
              u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(m.iconContainer, i),
                  {
                    children: u.jsx(n, {
                      height: l,
                      width: l,
                      xstyle: m.iconContainer,
                      colorName: "contentDeemphasized",
                    }),
                  },
                ),
              ),
            a != null &&
              u.jsx("div", {
                "aria-hidden": "true",
                children: u.jsx(r("WDSText.react"), {
                  type: s,
                  colorName: "contentDeemphasized",
                  selectable: !1,
                  xstyle: [m.textAffixes, m.textPrefix],
                  children: a,
                }),
              }),
          ],
        })
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e, t) {
      return e + "/" + t;
    }
    function f(t) {
      var n = t.EmojiIcon,
        o = t.EndIcon,
        a = t.SecondaryIcon,
        i = t.emojiIconAriaLabel,
        l = t.endIconAriaLabel,
        s = t.isDisabled,
        p = t.isFocused,
        _ = t.loading,
        f = t.onEmojiIconClick,
        g = t.onEndIconClick,
        h = t.onSecondaryIconClick,
        y = t.platform,
        C = t.secondaryIconAriaLabel,
        b = t.suffix;
      if (o == null && n == null && a == null && b == null && _ == null)
        return null;
      var v, S, R, L, E, k, I;
      y === "android"
        ? ((v = 24),
          (S = c.iconContainer),
          (R = c.EndIconContainer),
          (L = c.textSuffixNoIcon),
          (E = "Body1"),
          (k = c.addOnEnd),
          (I = c.addOnEnd))
        : ((v = 20),
          (S = d.iconContainer),
          (R = d.EndIconContainer),
          (L = d.textSuffixNoIcon),
          (E = "Body2"));
      var T = [m.iconContainer, S, R],
        D = null;
      a != null &&
        (h != null
          ? (D = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props.apply(e, T),
                {
                  children: u.jsx(r("WDSButton.react"), {
                    variant: "borderless",
                    size: y === "android" ? "medium" : "small",
                    onPress: h,
                    Icon: a,
                    xstyle: k,
                    "aria-label": C != null ? C : void 0,
                    widthMode: "fit",
                    disabled: s === !0,
                  }),
                },
              ),
            ))
          : (D = u.jsx(a, {
              colorName: "contentDefault",
              xstyle: [].concat(T, [I]),
              height: v,
              width: v,
            })));
      var x = null;
      _ === !0
        ? (x = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props.apply(e, T),
              { children: u.jsx(r("WDSSpinner.react"), { size: v }) },
            ),
          ))
        : o != null &&
          (g != null
            ? (x = u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props.apply(e, T),
                  {
                    children: u.jsx(r("WDSButton.react"), {
                      variant: "borderless",
                      size: y === "android" ? "medium" : "small",
                      onPress: g,
                      Icon: o,
                      xstyle: k,
                      "aria-label": l != null ? l : void 0,
                      widthMode: "fit",
                      disabled: s === !0,
                    }),
                  },
                ),
              ))
            : (x = u.jsx(o, {
                colorName: "contentDefault",
                xstyle: [].concat(T, [I]),
                height: v,
                width: v,
              })));
      var $ = null;
      return (
        n != null &&
          f != null &&
          p === !0 &&
          ($ = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props.apply(e, T),
              {
                children: u.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  size: y === "android" ? "medium" : "small",
                  onPress: f,
                  Icon: n,
                  xstyle: k,
                  "aria-label": i != null ? i : void 0,
                  widthMode: "fit",
                  disabled: s === !0,
                }),
              },
            ),
          )),
        u.jsxs(u.Fragment, {
          children: [
            b != null &&
              u.jsx("div", {
                "aria-hidden": "true",
                children: u.jsx(r("WDSText.react"), {
                  type: E,
                  colorName: "contentDeemphasized",
                  selectable: !1,
                  xstyle: [
                    m.textAffixes,
                    m.textSuffix,
                    o == null && a == null && n == null && L,
                  ],
                  children: b,
                }),
              }),
            D,
            $,
            x,
          ],
        })
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.bottomId,
        n = e.bottomText,
        o = e.characterCountRenderer,
        a = o === void 0 ? _ : o,
        i = e.errorText,
        l = e.maxCharacterCount,
        s = e.platform,
        c = e.shouldShowError,
        d = e.testid,
        p = e.textLength;
      if (n == null && l == null && i == null) return null;
      var f;
      c
        ? s === "android"
          ? (f = "secondaryNegative")
          : (f = "secondaryNegativeEmphasized")
        : (f = "contentDeemphasized");
      var g = c ? d + "-error-text" : d + "-bottom-text";
      return u.jsxs(u.Fragment, {
        children: [
          c
            ? i != null &&
              u.jsxs("div", {
                className:
                  "x78zum5 x1iyjqo2 xs83m0k x1r8uery xeuugli x1q0g3np x1cy8zhl x1trrmfo",
                role: "alert",
                id: t,
                "data-testid": void 0,
                children: [
                  u.jsx(r("WDSIconIcError.react"), {
                    colorName: f,
                    xstyle: m.errorIcon,
                    height: 16,
                    width: 16,
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body3",
                    selectable: !1,
                    colorName: f,
                    children: i,
                  }),
                ],
              })
            : n != null &&
              u.jsx(r("WDSText.react"), {
                id: t,
                type: "Body3",
                selectable: !1,
                testid: void 0,
                xstyle: m.bottomTextContainer,
                colorName: "contentDeemphasized",
                children: n,
              }),
          l != null &&
            u.jsx(r("WDSText.react"), {
              type: "Body3",
              selectable: !1,
              xstyle: m.counter,
              testid: void 0,
              colorName: f,
              children: a(p, l),
            }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.RichTextFieldAddOnStart = p),
      (l.RichTextFieldAddOnEnd = f),
      (l.RichTextFieldAddOnBottom = g));
  },
  98,
);
