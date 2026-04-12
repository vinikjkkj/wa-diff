__d(
  "WAWebGdprRequestAccountInfoSettingsFooterNotice",
  [
    "fbt",
    "WAWebNewsletterCommonGatingUtils",
    "WAWebText.react",
    "WAWebUISpacing",
    "react",
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
      var n = t.daysDelta,
        a = n === void 0 ? 3 : n,
        i = t.isPending,
        l = t.newsletterBodyText,
        u = a < 1 ? 1 : a,
        m = s._(
          /*BTDS*/ "Your request will be canceled if you make changes to your account such as changing your number or deleting your account.",
        );
      return o("WAWebNewsletterCommonGatingUtils").isNewsletterEnabled()
        ? c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                d.footer,
                o("WAWebUISpacing").uiPadding.top18,
              ]),
              {
                children: c.jsx(o("WAWebText.react").WAWebTextMuted, {
                  children: i ? m : c.jsx(c.Fragment, { children: l }),
                }),
              },
            ),
          )
        : c.jsxs(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props([
                d.footer,
                o("WAWebUISpacing").uiPadding.top30,
              ]),
              {
                children: [
                  c.jsx(o("WAWebText.react").WAWebTextMuted, {
                    xstyle: d.availability,
                    children: s._(
                      /*BTDS*/ '_j{"*":"Your report will be ready in about {number} days. You\'ll have a few weeks to download your report after it\'s available.","_1":"Your report will be ready in about 1 day. You\'ll have a few weeks to download your report after it\'s available."}',
                      [s._plural(u, "number", u)],
                    ),
                  }),
                  c.jsx(o("WAWebText.react").WAWebTextMuted, { children: m }),
                ],
              },
            ),
          );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
