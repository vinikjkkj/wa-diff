__d(
  "BillingGuidedExperienceNUXInitState",
  [
    "BillingGuidedExperienceNUXInitScreen.react",
    "BillingWizardDisplayState",
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
            (t.name = "guided_experience_nux_init_state_display"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            return s.jsx(
              o("BillingGuidedExperienceNUXInitScreen.react")
                .BillingGuidedExperienceNUXInitScreen,
              babelHelpers.extends({}, t, {
                onSubmit: function (t) {
                  return n("onNext", { paymentAccountID: t });
                },
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
