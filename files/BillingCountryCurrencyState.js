__d(
  "BillingCountryCurrencyState",
  ["BillingCountryCurrencyScreen.react", "BillingWizardDisplayState", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "country_currency_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID,
                n = e.taxCountryVerificationMethod;
              return { paymentAccountID: t, skipVerficationOptions: n == null };
            }),
            (t.query = o("BillingCountryCurrencyScreen.react").query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n, r) {
            var e = function (r, o, a, i, l, s, u, c) {
              return o
                ? n("onChangeCountryCurrency", {
                    country: s,
                    currency: u,
                    defaultCountry: a,
                    defaultCurrency: i,
                    defaultTimezone: l,
                    paymentAccountID: r,
                    timezone: c,
                  })
                : t.developerBillingFlow === !0
                  ? n("onDeveloperNext", { paymentAccountID: r })
                  : n("onNext", { paymentAccountID: r });
            };
            return s.jsx(
              o("BillingCountryCurrencyScreen.react")
                .BillingCountryCurrencyScreen,
              babelHelpers.extends({}, t, {
                onSubmit: e,
                useAccountCredentialCountries:
                  t.taxCountryVerificationMethod === "SHOW_STEPUP_OPTIONS",
              }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
