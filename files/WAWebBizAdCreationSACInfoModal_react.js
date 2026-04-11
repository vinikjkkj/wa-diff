__d(
  "WAWebBizAdCreationSACInfoModal.react",
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
      c = "https://www.facebook.com/business/help/298000447747885";
    function d() {
      var e = function () {
        o("WAWebExternalLink.react").openExternalLink(c);
      };
      return u.jsx(r("WAWebBizAdCreationInfoModalShell.react"), {
        title: s._(/*BTDS*/ "Special Ad Category"),
        children: u.jsxs(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: [
            s._(
              /*BTDS*/ "Special Ad Categories apply to ads that have specific requirements in certain countries.",
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
