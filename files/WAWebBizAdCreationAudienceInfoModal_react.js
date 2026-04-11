__d(
  "WAWebBizAdCreationAudienceInfoModal.react",
  [
    "fbt",
    "WAWebBizAdCreationInfoModalShell.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = { section: { rowGap: "x129bwdz", $$css: !0 } },
      d = "https://www.facebook.com/business/help/717368264947302",
      m = "https://www.facebook.com/business/help/1665333080167380";
    function p() {
      var e,
        t = function () {
          o("WAWebExternalLink.react").openExternalLink(d);
        },
        n = function () {
          o("WAWebExternalLink.react").openExternalLink(m);
        };
      return u.jsxs(r("WAWebBizAdCreationInfoModalShell.react"), {
        title: s._(/*BTDS*/ "Choosing an audience"),
        children: [
          u.jsx((e = r("WDSText.react")), {
            type: "Body2",
            colorName: "contentDeemphasized",
            children: s._(
              /*BTDS*/ "The audience makes up the people who will see your ad and is determined by characteristics like location, age and interests. We may deliver ads beyond your audience selections if it's likely to improve your performance.",
            ),
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.section,
            children: [
              u.jsx(e, {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Create new audience"),
              }),
              u.jsxs(e, {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: [
                  s._(
                    /*BTDS*/ "Create new audience lets you customize your audience by selecting characteristics like age, gender, and interests.",
                  ),
                  " ",
                  u.jsx(r("WDSTextualLink.react"), {
                    onClick: t,
                    children: r("WAWebFbtCommon")("Learn more"),
                  }),
                ],
              }),
            ],
          }),
          u.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: c.section,
            children: [
              u.jsx(e, {
                type: "Body1",
                colorName: "contentDefault",
                children: s._(/*BTDS*/ "Estimated audience size"),
              }),
              u.jsxs(e, {
                type: "Body3",
                colorName: "contentDeemphasized",
                children: [
                  s._(
                    /*BTDS*/ "Estimated audience size is the number of people who may match your targeting criteria and see your ad.",
                  ),
                  " ",
                  u.jsx(r("WDSTextualLink.react"), {
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
