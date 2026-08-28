__d(
  "BillingVerifyCountryLocationMismatchState",
  [
    "BillingVerifyCountryLocationMismatchScreen.react",
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
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "verify_country_location_mismatch_state_display"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t) {
                return (
                  r("BillingWizardRootUPLogger") == null ||
                    r("BillingWizardRootUPLogger").logClickEvent(
                      "verify_country_button",
                      { cta_text: t.toString() },
                    ),
                  n("onVerifyCountry", {
                    hasAcknowledgedCountryMismatch: !0,
                    taxCountryVerificationMethod: "SHOW_STEPUP_OPTIONS",
                  })
                );
              },
              o = function () {
                return (
                  r("BillingWizardRootUPLogger") == null ||
                    r("BillingWizardRootUPLogger").logClickEvent(
                      "change_business_location_button",
                      { cta_text: "Change Business Location" },
                    ),
                  n("onSelectDetectedCountry", {
                    taxCountryVerificationMethod: null,
                  })
                );
              };
            return s.jsx(
              r("BillingVerifyCountryLocationMismatchScreen.react"),
              babelHelpers.extends({}, t, {
                onSelectDetectedCountry: o,
                onVerifyCountry: e,
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
