__d(
  "WDSRichTextAddOns",
  [
    "WDSButton.react",
    "WDSIconIcCheckCircleFilled.react",
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
      m = { x1st70lr: "x1rvo2s5 x1st70lr", $$css: !0 },
      p = {
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
    function _(t) {
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
                  (e || (e = r("stylex"))).props(p.iconContainer, i),
                  {
                    children: u.jsx(n, {
                      height: l,
                      width: l,
                      xstyle: p.iconContainer,
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
                  xstyle: [p.textAffixes, p.textPrefix],
                  children: a,
                }),
              }),
          ],
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e, t) {
      return e + "/" + t;
    }
    function g(t) {
      var n = t.EmojiIcon,
        o = t.EndIcon,
        a = t.SecondaryIcon,
        i = t.emojiIconAriaLabel,
        l = t.endIconAriaLabel,
        s = t.isDisabled,
        _ = t.isFocused,
        f = t.isWithinDisabledField,
        g = t.loading,
        h = t.onEmojiIconClick,
        y = t.onEndIconClick,
        C = t.onSecondaryIconClick,
        b = t.platform,
        v = t.secondaryIconAriaLabel,
        S = t.statusIconState,
        R = t.suffix,
        L = t.testid;
      if (
        o == null &&
        n == null &&
        a == null &&
        R == null &&
        g == null &&
        S == null
      )
        return null;
      var E, k, I, T, D, x, $;
      b === "android"
        ? ((E = 24),
          (k = c.iconContainer),
          (I = c.EndIconContainer),
          (T = c.textSuffixNoIcon),
          (D = "Body1"),
          (x = c.addOnEnd),
          ($ = c.addOnEnd))
        : ((E = 20),
          (k = d.iconContainer),
          (I = d.EndIconContainer),
          (T = d.textSuffixNoIcon),
          (D = "Body2"));
      var P = [p.iconContainer, k, I, f === !0 && m],
        N = null;
      a != null &&
        (C != null
          ? (N = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props.apply(e, P),
                {
                  children: u.jsx(r("WDSButton.react"), {
                    variant: "borderless",
                    size: b === "android" ? "medium" : "small",
                    onPress: C,
                    Icon: a,
                    xstyle: x,
                    "aria-label": v != null ? v : void 0,
                    widthMode: "fit",
                    disabled: s === !0,
                  }),
                },
              ),
            ))
          : (N = u.jsx(a, {
              colorName: "contentDefault",
              xstyle: [].concat(P, [$]),
              height: E,
              width: E,
            })));
      var M = null;
      if (g === !0)
        M = u.jsx(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, P), {
            children: u.jsx(r("WDSSpinner.react"), { size: E }),
          }),
        );
      else if (S != null) {
        var w = r(
          S === "success"
            ? "WDSIconIcCheckCircleFilled.react"
            : "WDSIconIcError.react",
        );
        M = u.jsx(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props.apply(e, P), {
            children: u.jsx(w, {
              colorName:
                S === "success" ? "secondaryPositive" : "contentDeemphasized",
              height: E,
              testid: void 0,
              width: E,
            }),
          }),
        );
      } else
        o != null &&
          (y != null
            ? (M = u.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props.apply(e, P),
                  {
                    children: u.jsx(r("WDSButton.react"), {
                      variant: "borderless",
                      size: b === "android" ? "medium" : "small",
                      onPress: y,
                      Icon: o,
                      xstyle: x,
                      "aria-label": l != null ? l : void 0,
                      widthMode: "fit",
                      disabled: s === !0,
                    }),
                  },
                ),
              ))
            : (M = u.jsx(o, {
                colorName: "contentDefault",
                xstyle: [].concat(P, [$]),
                height: E,
                width: E,
              })));
      var A = null;
      return (
        n != null &&
          h != null &&
          _ === !0 &&
          (A = u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props.apply(e, P),
              {
                children: u.jsx(r("WDSButton.react"), {
                  variant: "borderless",
                  size: b === "android" ? "medium" : "small",
                  onPress: h,
                  Icon: n,
                  xstyle: x,
                  "aria-label": i != null ? i : void 0,
                  widthMode: "fit",
                  disabled: s === !0,
                }),
              },
            ),
          )),
        u.jsxs(u.Fragment, {
          children: [
            R != null &&
              u.jsx("div", {
                "aria-hidden": "true",
                children: u.jsx(r("WDSText.react"), {
                  type: D,
                  colorName: "contentDeemphasized",
                  selectable: !1,
                  xstyle: [
                    p.textAffixes,
                    p.textSuffix,
                    o == null && a == null && n == null && S == null && T,
                  ],
                  children: R,
                }),
              }),
            N,
            A,
            M,
          ],
        })
      );
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.bottomId,
        n = e.bottomText,
        o = e.characterCountRenderer,
        a = o === void 0 ? f : o,
        i = e.errorText,
        l = e.maxCharacterCount,
        s = e.platform,
        c = e.semanticState,
        d = e.testid,
        m = e.textLength;
      if (n == null && l == null && i == null) return null;
      var _ = c === "error",
        g;
      _
        ? s === "android"
          ? (g = "secondaryNegative")
          : (g = "secondaryNegativeEmphasized")
        : (g = "contentDeemphasized");
      var h = _ ? d + "-error-text" : d + "-bottom-text";
      return u.jsxs(u.Fragment, {
        children: [
          _
            ? i != null &&
              u.jsxs("div", {
                className:
                  "x78zum5 x1iyjqo2 xs83m0k x1r8uery xeuugli x1q0g3np x1cy8zhl x1trrmfo",
                role: "alert",
                id: t,
                "data-testid": void 0,
                children: [
                  u.jsx(r("WDSIconIcError.react"), {
                    colorName: g,
                    xstyle: p.errorIcon,
                    height: 16,
                    width: 16,
                  }),
                  u.jsx(r("WDSText.react"), {
                    type: "Body3",
                    selectable: !1,
                    colorName: g,
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
                xstyle: p.bottomTextContainer,
                colorName:
                  c === "success"
                    ? "contentActionEmphasized"
                    : "contentDeemphasized",
                children: n,
              }),
          l != null &&
            u.jsx(r("WDSText.react"), {
              type: "Body3",
              selectable: !1,
              xstyle: p.counter,
              testid: void 0,
              colorName: g,
              children: a(m, l),
            }),
        ],
      });
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.RichTextFieldAddOnStart = _),
      (l.RichTextFieldAddOnEnd = g),
      (l.RichTextFieldAddOnBottom = h));
  },
  98,
);
