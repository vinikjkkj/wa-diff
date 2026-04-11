__d(
  "WAWebBizAdCreationPaymentInfoModal.react",
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
      c = "https://www.facebook.com/business/help/716180208457684";
    function d() {
      var e = function () {
        o("WAWebExternalLink.react").openExternalLink(c);
      };
      return u.jsx(r("WAWebBizAdCreationInfoModalShell.react"), {
        title: s._(/*BTDS*/ "Info about your payment"),
        children: u.jsxs(r("WDSText.react"), {
          type: "Body2",
          colorName: "contentDeemphasized",
          children: [
            s._(
              /*BTDS*/ "You may receive more than one bill for this ad but they will never exceed the budget you set.",
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
