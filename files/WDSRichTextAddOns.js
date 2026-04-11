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
          $$css: !0,
        },
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
    function _(t) {
      var n = t.EndIcon,
        o = t.loading,
        a = t.onEndIconClick,
        i = t.platform,
        l = t.shouldShowError,
        s = t.suffix;
      if (!l && n == null && s == null && o == null) return null;
      var p, _, f, g, h, y, C;
      i === "android"
        ? ((p = 24),
          (_ = c.iconContainer),
          (f = c.EndIconContainer),
          (g = c.textSuffixNoIcon),
          (h = "Body1"),
          (y = c.addOnEnd),
          (C = c.addOnEnd))
        : ((p = 20),
          (_ = d.iconContainer),
          (f = d.EndIconContainer),
          (g = d.textSuffixNoIcon),
          (h = "Body2"));
      var b = [m.iconContainer, _, f],
        v = null;
      return (
        o === !0
          ? (v = u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props.apply(e, b),
                { children: u.jsx(r("WDSSpinner.react"), { size: p }) },
              ),
            ))
          : l
            ? (v = u.jsx(r("WDSIconIcError.react"), {
                colorName: "secondaryNegative",
                xstyle: b,
                height: p,
                width: p,
              }))
            : n != null &&
              (a != null
                ? (v = u.jsx(
                    "div",
                    babelHelpers.extends(
                      {},
                      (e || (e = r("stylex"))).props.apply(e, b),
                      {
                        children: u.jsx(r("WDSButton.react"), {
                          variant: "borderless",
                          size: i === "android" ? "medium" : "small",
                          onPress: a,
                          Icon: n,
                          xstyle: y,
                          "aria-label": "End icon button",
                          widthMode: "fit",
                        }),
                      },
                    ),
                  ))
                : (v = u.jsx(n, {
                    colorName: "contentDefault",
                    xstyle: [].concat(b, [C]),
                    height: p,
                    width: p,
                  }))),
        u.jsxs(u.Fragment, {
          children: [
            s != null &&
              u.jsx("div", {
                "aria-hidden": "true",
                children: u.jsx(r("WDSText.react"), {
                  type: h,
                  colorName: "contentDeemphasized",
                  selectable: !1,
                  xstyle: [m.textAffixes, m.textSuffix, n == null && g],
                  children: s,
                }),
              }),
            v,
          ],
        })
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.bottomId,
        n = e.bottomText,
        o = e.errorText,
        a = e.maxCharacterCount,
        i = e.platform,
        l = e.shouldShowError,
        s = e.testid,
        c = e.textLength;
      if (n == null && a == null && o == null) return null;
      var d;
      l
        ? i === "android"
          ? (d = "secondaryNegative")
          : (d = "secondaryNegativeEmphasized")
        : (d = "contentDeemphasized");
      var p = l ? s + "-error-text" : s + "-bottom-text";
      return u.jsxs(u.Fragment, {
        children: [
          (l ? o : n) != null &&
            u.jsx(r("WDSText.react"), {
              id: t,
              type: "Body3",
              selectable: !1,
              testid: void 0,
              colorName: d,
              children: l ? o : n,
            }),
          a != null &&
            u.jsxs(r("WDSText.react"), {
              type: "Body3",
              selectable: !1,
              xstyle: m.counter,
              testid: void 0,
              colorName: d,
              children: [c, "/", a],
            }),
        ],
      });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"),
      (l.RichTextFieldAddOnStart = p),
      (l.RichTextFieldAddOnEnd = _),
      (l.RichTextFieldAddOnBottom = f));
  },
  98,
);
