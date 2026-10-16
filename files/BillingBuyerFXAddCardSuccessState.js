__d(
  "BillingBuyerFXAddCardSuccessState",
  ["BillingBuyerFXAddCardSuccessScreen", "BillingWizardDisplayState", "react"],
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
            (t.name = "buyer_fx_add_card_success_display"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.onDisplay = function (t, n) {
            var e = function () {
              return n("onDone");
            };
            return s.jsx(
              r("BillingBuyerFXAddCardSuccessScreen"),
              babelHelpers.extends({}, t, {
                onDone: e,
                wrapperProps: babelHelpers.extends({}, t.wrapperProps, {
                  status: void 0,
                }),
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
