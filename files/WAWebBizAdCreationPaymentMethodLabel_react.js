__d(
  "WAWebBizAdCreationPaymentMethodLabel.react",
  [
    "CometRelay",
    "WAWebBizAdCreationPaymentMethodLabelData.graphql",
    "WAWebBizPaymentMethodLabelContent.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.containerXstyle,
        a = e.paymentSectionRef,
        i = e.titleColor,
        l = e.titleType,
        s = i === void 0 ? "contentDefault" : i,
        d = l === void 0 ? "Body1" : l,
        m = o("CometRelay").useFragment(c, a),
        p;
      t[0] !== m
        ? ((p =
            m != null
              ? { label: m.label, labelAx: m.labelAx, logos: m.logos }
              : null),
          (t[0] = m),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      return (
        t[2] !== n || t[3] !== _ || t[4] !== s || t[5] !== d
          ? ((f = u.jsx(r("WAWebBizPaymentMethodLabelContent.react"), {
              containerXstyle: n,
              data: _,
              titleColor: s,
              titleType: d,
            })),
            (t[2] = n),
            (t[3] = _),
            (t[4] = s),
            (t[5] = d),
            (t[6] = f))
          : (f = t[6]),
        f
      );
    }
    l.default = d;
  },
  98,
);
