__d(
  "WDSTextFieldUtils.iOS",
  [
    "CheckmarkCircleFillIOS.svg.react",
    "ExclamationmarkCircleFillIOS.svg.react",
    "WDSButton.react",
    "WDSFlex.stylex",
    "WDSSpinner.react",
    "WDSSvgComponentBase.react",
    "WDSText.react",
    "XmarkCircleFillIOS.svg.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: { height: "x17rw0jw", width: "x17z2i9w", $$css: !0 },
        clearButton: { color: "xhslqc4", $$css: !0 },
        textPrefix: { wordBreak: "x1lldw8n", $$css: !0 },
        counter: { whiteSpace: "xuxw1ft", $$css: !0 },
      };
    function d(e) {
      var t = e.prefix;
      if (t != null)
        return u.jsx("div", {
          "aria-hidden": "true",
          children: u.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            selectable: !1,
            xstyle: c.textPrefix,
            children: t,
          }),
        });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(t) {
      var n = t.isFocused,
        a = t.loading,
        i = t.maxCharacterCount,
        l = t.onClearInput,
        s = t.shouldShowError,
        d = t.shouldShowSuccess,
        m = t.value,
        p = i != null && m.length > i,
        _ = i != null ? i - m.length : 0,
        f = i != null && (_ <= 10 || p);
      if (!(!s && !d && !a && !f && m.length === 0)) {
        var g;
        return (
          s
            ? (g = u.jsx(r("WDSSvgComponentBase.react"), {
                xstyle: c.icon,
                colorName: "secondaryNegative",
                children: u.jsx(r("ExclamationmarkCircleFillIOS.svg.react"), {
                  height: 22,
                  width: 22,
                  className: "x17rw0jw x17z2i9w",
                }),
              }))
            : d
              ? (g = u.jsx(r("WDSSvgComponentBase.react"), {
                  xstyle: c.icon,
                  colorName: "secondaryPositive",
                  children: u.jsx(r("CheckmarkCircleFillIOS.svg.react"), {
                    height: 22,
                    width: 22,
                    className: "x17rw0jw x17z2i9w",
                  }),
                }))
              : a === !0
                ? (g = u.jsx(r("WDSSpinner.react"), { size: 22 }))
                : m.length > 0 &&
                  n &&
                  (g = u.jsx(r("WDSButton.react"), {
                    variant: "borderless",
                    size: "small",
                    onPressIn: l,
                    Icon: r("XmarkCircleFillIOS.svg.react"),
                    "aria-label": "End icon button",
                    widthMode: "fit",
                    xstyle: [c.clearButton, c.icon],
                  })),
          u.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(
                o("WDSFlex.stylex").wdsFlex.flex,
                o("WDSFlex.stylex").wdsFlex.alignCenter,
                o("WDSFlex.stylex").wdsFlex.columnGapSingle,
              ),
              {
                children: [
                  f &&
                    u.jsx("div", {
                      "aria-hidden": "true",
                      children: u.jsx(r("WDSText.react"), {
                        type: "Body1",
                        selectable: !1,
                        xstyle: c.counter,
                        colorName: p
                          ? "secondaryNegative"
                          : "contentDeemphasized",
                        children: p ? "-" + Math.abs(_) : "" + _,
                      }),
                    }),
                  g != null &&
                    u.jsx("div", {
                      className: "x17rw0jw x17z2i9w",
                      children: g,
                    }),
                ],
              },
            ),
          )
        );
      }
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.errorText,
        n = e.loading,
        o = e.loadingText,
        a = e.shouldShowError,
        i = e.shouldShowSuccess,
        l = e.successText;
      if (!(t == null && l == null && o == null)) {
        var s, c;
        if (
          (a
            ? ((c = t), (s = "secondaryNegative"))
            : i
              ? ((c = l), (s = "contentActionEmphasized"))
              : n && ((c = o), (s = "contentDeemphasized")),
          !(c == null || s == null))
        )
          return u.jsx(r("WDSText.react"), {
            type: "Body2",
            selectable: !1,
            colorName: s,
            children: c,
          });
      }
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.TextFieldAddOnStart = d),
      (l.TextFieldAddOnEnd = m),
      (l.TextFieldAddOnBottom = p));
  },
  98,
);
