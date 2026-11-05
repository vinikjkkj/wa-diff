__d(
  "WDSTextFieldUtils",
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
          $$css: !0,
        },
      };
    function p(t) {
      var n = t.StartIcon,
        o = t.platform,
        a = t.prefix;
      if (!(n == null && a == null)) {
        var i, l, s;
        return (
          o === "android"
            ? ((i = c.StartIconContainer), (l = 24), (s = "Body1"))
            : ((i = d.StartIconContainer), (l = 20), (s = "Body2")),
          u.jsxs("div", {
            className: "x78zum5 x6s0dn4",
            children: [
              n != null &&
                (function () {
                  return u.jsx(
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
                  );
                })(),
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
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return e === "android"
        ? {
            size: 24,
            iconContainerStyle: c.iconContainer,
            endIconCointanerStyle: c.EndIconContainer,
            textSuffixNoIconStyle: c.textSuffixNoIcon,
            suffixTextType: "Body1",
            addOnEndButtonStyle: c.addOnEnd,
            addOnEndStyle: c.addOnEnd,
          }
        : {
            size: 20,
            iconContainerStyle: d.iconContainer,
            endIconCointanerStyle: d.EndIconContainer,
            textSuffixNoIconStyle: d.textSuffixNoIcon,
            suffixTextType: "Body2",
          };
    }
    function f(t) {
      var n = t.EndIcon,
        o = t.endIconAriaLabel,
        a = t.endIconAriaPressed,
        i = t.loading,
        l = t.onEndIconClick,
        s = t.platform,
        c = t.shouldShowError,
        d = t.suffix;
      if (!(!c && n == null && d == null && i == null)) {
        var p = _(s),
          f = p.addOnEndButtonStyle,
          g = p.addOnEndStyle,
          h = p.endIconCointanerStyle,
          y = p.iconContainerStyle,
          C = p.size,
          b = p.suffixTextType,
          v = p.textSuffixNoIconStyle,
          S = [m.iconContainer, y, h],
          R = c
            ? u.jsx(r("WDSIconIcError.react"), {
                colorName: "secondaryNegative",
                xstyle: S,
                height: C,
                width: C,
              })
            : n != null &&
              (function () {
                return l
                  ? u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props.apply(
                          e || (e = r("stylex")),
                          S,
                        ),
                        {
                          children: u.jsx(r("WDSButton.react"), {
                            variant: "borderless",
                            size: s === "android" ? "medium" : "small",
                            onPress: l,
                            Icon: n,
                            xstyle: f,
                            "aria-label": o != null ? o : void 0,
                            "aria-pressed": a != null ? a : void 0,
                            widthMode: "fit",
                          }),
                        },
                      ),
                    )
                  : u.jsx(n, {
                      colorName: "contentDefault",
                      xstyle: [].concat(S, [g]),
                      height: C,
                      width: C,
                    });
              })();
        return (
          i === !0 &&
            (R = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props.apply(e, S),
                { children: u.jsx(r("WDSSpinner.react"), { size: C }) },
              ),
            )),
          u.jsxs(u.Fragment, {
            children: [
              d != null &&
                u.jsx("div", {
                  "aria-hidden": "true",
                  children: u.jsx(r("WDSText.react"), {
                    type: b,
                    colorName: "contentDeemphasized",
                    selectable: !1,
                    xstyle: [m.textAffixes, m.textSuffix, n == null && v],
                    children: d,
                  }),
                }),
              R,
            ],
          })
        );
      }
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t = e.bottomId,
        n = e.bottomText,
        o = e.errorText,
        a = e.maxCharacterCount,
        i = e.platform,
        l = e.shouldShowError,
        s = e.value;
      if (!(n == null && a == null && o == null)) {
        var c;
        return (
          l
            ? i === "android"
              ? (c = "secondaryNegative")
              : (c = "secondaryNegativeEmphasized")
            : (c = "contentDeemphasized"),
          u.jsxs(u.Fragment, {
            children: [
              (l ? o : n) != null &&
                u.jsx(r("WDSText.react"), {
                  id: t,
                  type: "Body3",
                  selectable: !1,
                  colorName: l
                    ? "secondaryNegativeEmphasized"
                    : "contentDeemphasized",
                  children: l ? o : n,
                }),
              a != null &&
                u.jsxs(r("WDSText.react"), {
                  type: "Body3",
                  selectable: !1,
                  xstyle: m.counter,
                  colorName: c,
                  children: [s.length, "/", a],
                }),
            ],
          })
        );
      }
    }
    ((g.displayName = g.name + " [from " + i.id + "]"),
      (l.TextFieldAddOnStart = p),
      (l.TextFieldAddOnEnd = f),
      (l.TextFieldAddOnBottom = g));
  },
  98,
);
