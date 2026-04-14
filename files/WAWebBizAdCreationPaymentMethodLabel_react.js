__d(
  "WAWebBizAdCreationPaymentMethodLabel.react",
  [
    "CometRelay",
    "WAWebBizAdCreationPaymentMethodLabelData.graphql",
    "WAWebBizPaymentMethodLabelContent.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationPaymentMethodLabelData.graphql"));
    function d(e) {
      var t = e.containerXstyle,
        n = e.paymentSectionRef,
        a = e.titleColor,
        i = a === void 0 ? "contentDefault" : a,
        l = e.titleType,
        s = l === void 0 ? "Body1" : l,
        d = o("CometRelay").useFragment(c, n),
        m =
          d != null
            ? { label: d.label, labelAx: d.labelAx, logos: d.logos }
            : null;
      return u.jsx(r("WAWebBizPaymentMethodLabelContent.react"), {
        containerXstyle: t,
        data: m,
        titleColor: i,
        titleType: s,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
