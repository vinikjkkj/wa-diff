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
    "react-compiler-runtime",
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
        a = o("react-compiler-runtime").c(14),
        i = e.openBillingWizard,
        l = e.paymentSectionRef,
        s = o("CometRelay").useFragment(_, l),
        c = m(r("WAWebBizAdCreationLoggerContext")),
        d = m(r("WAWebBizAdCreationSpecContext")),
        g =
          d == null ||
          (t = d.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        h;
      a[0] !== g || a[1] !== c || a[2] !== i
        ? ((h = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (c != null &&
                  r("WAWebBizAdLogger").log({
                    event: "click_add_payment_button",
                    loggerContext: c,
                    adAccountID: g,
                  }),
                  yield i(e));
              },
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })()),
          (a[0] = g),
          (a[1] = c),
          (a[2] = i),
          (a[3] = h))
        : (h = a[3]);
      var y = h,
        C;
      a[4] !== s
        ? ((C = u.jsx(r("WAWebBizAdCreationPaymentMethodLabel.react"), {
            paymentSectionRef: s,
          })),
          (a[4] = s),
          (a[5] = C))
        : (C = a[5]);
      var b;
      a[6] !== s.primaryAction || a[7] !== y
        ? ((b = f(s.primaryAction, y)),
          (a[6] = s.primaryAction),
          (a[7] = y),
          (a[8] = b))
        : (b = a[8]);
      var v;
      a[9] !== b
        ? ((v = u.jsx(o("WAWebFlex.react").FlexItem, {
            justify: "end",
            children: b,
          })),
          (a[9] = b),
          (a[10] = v))
        : (v = a[10]);
      var S;
      return (
        a[11] !== C || a[12] !== v
          ? ((S = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              justify: "all",
              xstyle: p.container,
              children: [C, v],
            })),
            (a[11] = C),
            (a[12] = v),
            (a[13] = S))
          : (S = a[13]),
        S
      );
    }
    l.default = g;
  },
  98,
);
