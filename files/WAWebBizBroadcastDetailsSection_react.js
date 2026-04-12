__d(
  "WAWebBizBroadcastDetailsSection.react",
  [
    "WAWebBizAdCard.react",
    "WAWebBizBroadcastPaymentMethodSection.react",
    "WAWebBizBroadcastsCreationStrings",
    "WAWebFlex.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.entryPoint,
        n = e.onBillingInfoChanged;
      return s.jsx("div", {
        className: "x19aeb6u xh8yej3",
        children: s.jsx(r("WAWebBizAdCard.react"), {
          header: o(
            "WAWebBizBroadcastsCreationStrings",
          ).getDetailsSectionTitle(),
          children: s.jsx(o("WAWebFlex.react").FlexColumn, {
            children: s.jsx(r("WAWebBizBroadcastPaymentMethodSection.react"), {
              entryPoint: t,
              onBillingInfoChanged: n,
            }),
          }),
        }),
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
