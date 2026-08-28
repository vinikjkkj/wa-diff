__d(
  "BillingAssignAdCreditsState",
  [
    "BillingAssignAdCreditsScreen.react",
    "BillingAssignAdCreditsStateQuery.graphql",
    "BillingWizardDisplayState",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c =
        e !== void 0 ? e : (e = n("BillingAssignAdCreditsStateQuery.graphql")),
      d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "assign_ad_credits_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID,
                n = e.paymentMethodID;
              return {
                paymentAccountID: t,
                paymentMethodID: n != null ? n : "",
              };
            }),
            (t.query = o("BillingAssignAdCreditsScreen.react").query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.onEnter = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r,
                  o = t.relay,
                  a = yield o.fetchQuery(
                    {
                      query: c,
                      queryName: c.params.name,
                      variables: { id: e.paymentMethodID },
                    },
                    {},
                    void 0,
                    !0,
                    t,
                    this.name,
                  ),
                  i = (
                    (n =
                      a == null || (r = a.node) == null
                        ? void 0
                        : r.campaign_info) != null
                      ? n
                      : []
                  ).map(function (e) {
                    var t;
                    return (t = e == null ? void 0 : e.id) != null ? t : "";
                  });
                return {
                  newProps: babelHelpers.extends({}, e, {
                    originalAssignedCampaigns: i,
                  }),
                };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.onDisplay = function (t, n) {
            var e = function (t, r) {
              return n("onNext", { couponAmount: r, status: t });
            };
            return u.jsx(
              o("BillingAssignAdCreditsScreen.react")
                .BillingAssignAdCreditsScreen,
              babelHelpers.extends({}, t, { onSubmit: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = d;
  },
  98,
);
