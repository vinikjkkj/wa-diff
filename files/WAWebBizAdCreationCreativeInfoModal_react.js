__d(
  "WAWebBizAdCreationCreativeInfoModal.react",
  [
    "fbt",
    "WAWebBizAdCreationInfoModalShell.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WDSText.react",
    "WDSTextualLink.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = "https://faq.whatsapp.com/512723604104492/";
    function d() {
      var e = function () {
        o("WAWebExternalLink.react").openExternalLink(c);
      };
      return u.jsx(r("WAWebBizAdCreationInfoModalShell.react"), {
        title: s._(/*BTDS*/ "Design your ad"),
        children: u.jsxs(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: [
            s._(
              /*BTDS*/ "Use the ad description to tell customers about your business, the products or services you offer, or special sales or pricing information. Shorter descriptions can perform better.",
            ),
            " ",
            u.jsx(r("WDSTextualLink.react"), {
              onClick: e,
              children: r("WAWebFbtCommon")("Learn more"),
            }),
          ],
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
