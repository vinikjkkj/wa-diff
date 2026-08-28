__d(
  "BillingThirdPartyActivateCreditCardState",
  [
    "fbt",
    "BillingError",
    "BillingPaymentMethodDisplayUtils",
    "BillingThirdPartyActivateCreditCardStateQuery.graphql",
    "BillingThirdPartyRedirectMethodEnum",
    "BillingThirdPartyScreen.react",
    "BillingWizardDisplayState",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d =
        e !== void 0
          ? e
          : (e = n("BillingThirdPartyActivateCreditCardStateQuery.graphql")),
      m = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "third_party_activate_credit_card_state_display"),
            (t.eventResult = null),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.onEnter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  a,
                  i,
                  l,
                  s = t.relay.fetchQuery;
                if (e.paymentMethodID == null)
                  throw new (r("BillingError"))(
                    "Billing third party activate credit card state: paymentMethodID is null",
                    "required parameter is missing or invalid",
                    { event_action: "query", event_side: "client_side" },
                    { action: "fetch", document_name: "activate_credit_card" },
                    "critical_error",
                  );
                var u = yield s({
                    options: { fetchPolicy: "store-or-network" },
                    query: d,
                    queryName: d.params.name,
                    variables: { creditCardID: e.paymentMethodID },
                  }),
                  c = o(
                    "BillingPaymentMethodDisplayUtils",
                  ).getPaymentMethodDisplayFromFragment(u.node),
                  m =
                    (n =
                      e == null || (a = e.thirdPartyInitParams) == null
                        ? void 0
                        : a.integrationType) != null
                      ? n
                      : "try_auto_redirect",
                  p = r("BillingThirdPartyRedirectMethodEnum")[
                    m == null ? void 0 : m.toUpperCase()
                  ];
                return {
                  newProps: babelHelpers.extends({}, e, {
                    status: void 0,
                    thirdPartyInitParams: {
                      billingToken:
                        (i = e.thirdPartyInitParams) == null
                          ? void 0
                          : i.billingToken,
                      integrationType: p,
                      pmName: c.toString(),
                      pmType: "CREDIT_CARD",
                      url:
                        (l = e.thirdPartyInitParams) == null ? void 0 : l.url,
                    },
                  }),
                };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.onDisplay = function (t, n) {
            var e = this,
              o = function () {
                return n("onFailure", {
                  status: {
                    body: s._(
                      /*BTDS*/ "We weren't able to complete verification, please try again.",
                    ),
                    headline: s._(
                      /*BTDS*/ "{credit card} hasn't been verified",
                      [s._param("credit card", e.pmDisplay)],
                    ),
                    title: s._(/*BTDS*/ "Couldn't verify card"),
                    type: "ERROR",
                  },
                });
              },
              a = function () {
                return n("onNext");
              };
            return c.jsx(
              r("BillingThirdPartyScreen.react"),
              babelHelpers.extends({}, t, {
                onBack: o,
                onComplete: a,
                onError: o,
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = m;
  },
  226,
);
