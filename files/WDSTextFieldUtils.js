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
        o = t.loading,
        a = t.onEndIconClick,
        i = t.platform,
        l = t.shouldShowError,
        s = t.suffix;
      if (!(!l && n == null && s == null && o == null)) {
        var c = _(i),
          d = c.addOnEndButtonStyle,
          p = c.addOnEndStyle,
          f = c.endIconCointanerStyle,
          g = c.iconContainerStyle,
          h = c.size,
          y = c.suffixTextType,
          C = c.textSuffixNoIconStyle,
          b = [m.iconContainer, g, f],
          v = l
            ? u.jsx(r("WDSIconIcError.react"), {
                colorName: "secondaryNegative",
                xstyle: b,
                height: h,
                width: h,
              })
            : n != null &&
              (function () {
                return a
                  ? u.jsx(
                      "div",
                      babelHelpers.extends(
                        {},
                        (e || (e = r("stylex"))).props.apply(
                          e || (e = r("stylex")),
                          b,
                        ),
                        {
                          children: u.jsx(r("WDSButton.react"), {
                            variant: "borderless",
                            size: i === "android" ? "medium" : "small",
                            onPress: a,
                            Icon: n,
                            xstyle: d,
                            "aria-label": "End icon button",
                            widthMode: "fit",
                          }),
                        },
                      ),
                    )
                  : u.jsx(n, {
                      colorName: "contentDefault",
                      xstyle: [].concat(b, [p]),
                      height: h,
                      width: h,
                    });
              })();
        return (
          o === !0 &&
            (v = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props.apply(e, b),
                { children: u.jsx(r("WDSSpinner.react"), { size: h }) },
              ),
            )),
          u.jsxs(u.Fragment, {
            children: [
              s != null &&
                u.jsx("div", {
                  "aria-hidden": "true",
                  children: u.jsx(r("WDSText.react"), {
                    type: y,
                    colorName: "contentDeemphasized",
                    selectable: !1,
                    xstyle: [m.textAffixes, m.textSuffix, n == null && C],
                    children: s,
                  }),
                }),
              v,
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
