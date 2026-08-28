__d(
  "BillingAutoReloadEditAmountState",
  [
    "BillingAutoReloadEditAmountScreen.react",
    "BillingWizardDisplayState",
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
            (t.name = "edit_auto_reload_state_display"),
            (t.mapPropsToQuery = function (e) {
              var t = e.paymentAccountID;
              return { paymentAccountID: t };
            }),
            (t.query = o("BillingAutoReloadEditAmountScreen.react").query),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function (t, r) {
                return n("onNext", {
                  autoReloadSettings: {
                    autoReloadDisabled: !1,
                    autoReloadToggledOn: !0,
                    reloadAmount: t,
                    triggerAmount: r,
                  },
                });
              },
              r = function () {
                return n("onBack");
              };
            return s.jsx(
              o("BillingAutoReloadEditAmountScreen.react")
                .BillingAutoReloadEditAmountScreen,
              babelHelpers.extends({}, t, { onCancel: r, onSubmit: e }),
            );
          }),
          t
        );
      })(o("BillingWizardDisplayState").DisplayState);
    l.default = u;
  },
  98,
);
