__d(
  "WAWebBizAdCreationBudgetInfoModal.react",
  [
    "fbt",
    "WAWebBizAdCreationInfoModalShell.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { section: { rowGap: "x129bwdz", $$css: !0 } },
      d = "https://www.facebook.com/business/help/287134230502229",
      m = "https://www.facebook.com/business/help/675615482516035";
    function p() {
      var e = r("justknobx")._("3992"),
        t = function () {
          o("WAWebExternalLink.react").openExternalLink(d);
        },
        n = function () {
          o("WAWebExternalLink.react").openExternalLink(m);
        };
      return u.jsxs(r("WAWebBizAdCreationInfoModalShell.react"), {
        title: s._(/*BTDS*/ "Budget and duration"),
        children: [
          u.jsxs(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: [
              s._(
                /*BTDS*/ "Budget is the maximum amount you spend over the course of a campaign. It excludes any Apple service fees, taxes, and local fees.",
              ),
              " ",
              e
                ? u.jsx(r("WDSTextualLink.react"), {
                    href: d,
                    children: r("WAWebFbtCommon")("Learn more"),
                  })
                : u.jsx(r("WDSTextualLink.react"), {
                    onClick: t,
                    children: r("WAWebFbtCommon")("Learn more"),
                  }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.section,
            children: [
              u.jsx(r("WDSText.react"), {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Impressions"),
              }),
              u.jsxs(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: [
                  s._(
                    /*BTDS*/ "This is the estimated number of impressions your ad may receive each day based on your bid, budget, and audience. Your actual impressions may be higher or lower than this estimate. This metric is estimated.",
                  ),
                  " ",
                  e
                    ? u.jsx(r("WDSTextualLink.react"), {
                        href: m,
                        children: r("WAWebFbtCommon")("Learn more"),
                      })
                    : u.jsx(r("WDSTextualLink.react"), {
                        onClick: n,
                        children: r("WAWebFbtCommon")("Learn more"),
                      }),
                ],
              }),
            ],
          }),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
