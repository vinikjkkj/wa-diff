__d(
  "BillingVerifyCountrySelectDetectedLocationState",
  [
    "BillingVerifyCountrySelectDetectedLocationScreen.react",
    "BillingWizardDisplayState",
    "BillingWizardRootUPLogger",
    "react",
  ],
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
            (t.name = "verify_country_select_detected_location_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o(
              "BillingVerifyCountrySelectDetectedLocationScreen.react",
            ).query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t, o) {
              return (
                r("BillingWizardRootUPLogger") == null ||
                  r("BillingWizardRootUPLogger").logClickEvent(
                    "submit_button",
                    { country: t, cta_text: "Next" },
                  ),
                n("onSelectLocation", {
                  countryUpdateType: o,
                  forceRecommendedCountry: t,
                  onlyShowRecommendedCountry: !0,
                  shouldRefetchCountryCurrency: !0,
                })
              );
            };
            return s.jsx(
              o("BillingVerifyCountrySelectDetectedLocationScreen.react")
                .BillingVerifyCountrySelectDetectedLocationScreen,
              babelHelpers.extends({}, t, { onSelectLocation: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
