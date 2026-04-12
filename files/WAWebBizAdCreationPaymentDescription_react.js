__d(
  "WAWebBizAdCreationPaymentDescription.react",
  [
    "CometRelay",
    "WAWebBizAdCreationLoggerContext",
    "WAWebBizAdCreationPaymentDescriptionData.graphql",
    "WAWebBizAdCreationSpecContext",
    "WAWebBizAdLogger",
    "WAWebClickableLink.react",
    "WAWebFlex.react",
    "WDSText.react",
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
      p =
        e !== void 0
          ? e
          : (e = n("WAWebBizAdCreationPaymentDescriptionData.graphql"));
    function _(e, t) {
      return (e == null ? void 0 : e.label) == null
        ? null
        : u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentActionEmphasized",
            children: u.jsxs("span", {
              children: [
                " ",
                u.jsx(r("WAWebClickableLink.react"), {
                  onClick: function () {
                    return void t(e);
                  },
                  children: e.label,
                }),
              ],
            }),
          });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t,
        a = e.openBillingWizard,
        i = e.paymentSectionRef,
        l = o("CometRelay").useFragment(p, i),
        s = m(r("WAWebBizAdCreationLoggerContext")),
        c = m(r("WAWebBizAdCreationSpecContext")),
        f =
          c == null ||
          (t = c.currentValue) == null ||
          (t = t.adAccountData) == null
            ? void 0
            : t.id,
        g = d(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (s != null &&
                  r("WAWebBizAdLogger").log({
                    event: "click_change_payment_link",
                    loggerContext: s,
                    adAccountID: f,
                  }),
                  yield a(e));
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          [f, s, a],
        );
      return l.description == null
        ? null
        : u.jsx(o("WAWebFlex.react").FlexRow, {
            children: u.jsxs(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              children: [
                u.jsx("span", {
                  "aria-label": l.descriptionAx,
                  children: l.description,
                }),
                _(l.inlineAction, g),
              ],
            }),
          });
    }
    ((f.displayName = f.name + " [from " + i.id + "]"), (l.default = f));
  },
  98,
);
