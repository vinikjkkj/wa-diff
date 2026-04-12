__d(
  "WAWebBizAdCreationPaymentMethodRow.react",
  [
    "CometRelay",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentMethodLabel.react",
    "WAWebBizAdCreationPaymentMethodRowData.graphql",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebFlex.react",
    "WDSButton.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useContext,
      p = { container: { height: "xnnlda6", width: "xh8yej3", $$css: !0 } },
      _ =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationPaymentMethodRowData.graphql"));
    function f(e, t) {
      return (e == null ? void 0 : e.label) == null
        ? null
        : u.jsx(r("WDSButton.react"), {
            variant: "borderless",
            size: "medium",
            label: e.label,
            onPress: function () {
              return void t(e);
            },
          });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      var t,
        a = e.openBillingWizard,
        i = e.paymentSectionRef,
        l = o("CometRelay").useFragment(_, i),
        s = m(r("WAWebBizAdCreationLoggerContext")),
        c = m(r("WAWebBizAdCreationSpecContext")),
        g =
          c == null ||
          (t = c.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        h = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (s != null &&
                  r("WAWebBizAdLogger").log({
                    event: "click_add_payment_button",
                    loggerContext: s,
                    adAccountID: g,
                  }),
                  yield a(e));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [g, s, a],
        );
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        justify: "all",
        xstyle: p.container,
        children: [
          u.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), {
            paymentSectionRef: l,
          }),
          u.jsx(o("WAWebFlex.react").FlexItem, {
            justify: "end",
            children: f(l.primaryAction, h),
          }),
        ],
      });
    }
    ((g.displayName = g.name + " [from " + i.id + "]"), (l.default = g));
  },
  98,
);
