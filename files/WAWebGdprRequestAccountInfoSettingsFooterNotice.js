__d(
  "WAWebGdprRequestAccountInfoSettingsFooterNotice",
  [
    "fbt",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        availability: { marginBottom: "x1e56ztr", $$css: !0 },
        footer: {
          paddingInlineStart: "x162tt16",
          paddingInlineEnd: "x5zjp28",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.daysDelta,
        i = t.isPending,
        l = t.newsletterBodyText,
        u = a === void 0 ? 3 : a,
        m = u < 1 ? 1 : u,
        p;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(
            /*BTDS*/ "Your request will be canceled if you make changes to your account such as changing your number or deleting your account.",
          )),
          (n[0] = p))
        : (p = n[0]);
      var _ = p;
      if (o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()) {
        var f;
        n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (e || (e = r("stylex"))).props([
              d.footer,
              o("WAWebUISpacing").uiPadding.top18,
            ])),
            (n[1] = f))
          : (f = n[1]);
        var g;
        return (
          n[2] !== i || n[3] !== l
            ? ((g = c.jsx(
                "div",
                babelHelpers.extends({}, f, {
                  children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    children: i ? _ : c.jsx(c.Fragment, { children: l }),
                  }),
                }),
              )),
              (n[2] = i),
              (n[3] = l),
              (n[4] = g))
            : (g = n[4]),
          g
        );
      }
      var h;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e || (e = r("stylex"))).props([
            d.footer,
            o("WAWebUISpacing").uiPadding.top30,
          ])),
          (n[5] = h))
        : (h = n[5]);
      var y;
      n[6] !== m
        ? ((y = c.jsx(o("WAWebText.react").WAWebTextMuted, {
            xstyle: d.availability,
            children: s._(
              /*BTDS*/ '_j{"*":"Your report will be ready in about {number} days. You\'ll have a few weeks to download your report after it\'s available.","_1":"Your report will be ready in about 1 day. You\'ll have a few weeks to download your report after it\'s available."}',
              [s._plural(m, "number", m)],
            ),
          })),
          (n[6] = m),
          (n[7] = y))
        : (y = n[7]);
      var C;
      n[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = c.jsx(o("WAWebText.react").WAWebTextMuted, { children: _ })),
          (n[8] = C))
        : (C = n[8]);
      var b;
      return (
        n[9] !== y
          ? ((b = c.jsxs(
              "div",
              babelHelpers.extends({}, h, { children: [y, C] }),
            )),
            (n[9] = y),
            (n[10] = b))
          : (b = n[10]),
        b
      );
    }
    l.default = m;
  },
  226,
);
