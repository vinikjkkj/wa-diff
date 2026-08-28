__d(
  "BillingExitConfirmationDialogConstants",
  [
    "fbt",
    "XPaymentsCareAdsPaymentsUnicornSupportControllerRouteBuilder",
    "fbs",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      switch (e) {
        case "account_information_state_display":
          return s._(/*BTDS*/ "Your business info won't be saved if you exit.");
        case "add_credit_card_state_display":
          return s._(
            /*BTDS*/ "Your credit card info won't be saved if you exit.",
          );
        case "add_funds_landing_state_display":
        case "alt_pay_add_funds_state_display":
          return s._(
            /*BTDS*/ "To resume ads, you need to add funds or verify a payment method. If you don't want to add funds, submit a support request for account review.",
          );
        case "verify_identity_stepup_options_state_display":
          return s._(
            /*BTDS*/ "You won't be able to run ads until you verify your account information.",
          );
        case "placeholder":
        default:
          return s._(/*BTDS*/ "Your progress may not be saved if you exit.");
      }
    }
    function u(e) {
      switch (e) {
        case "add_funds_landing_state_display":
        case "alt_pay_add_funds_state_display":
          return r(
            "XPaymentsCareAdsPaymentsUnicornSupportControllerRouteBuilder",
          )
            .buildUri({ support_topic: "INACTIONABLE_RISK_DISABLED" })
            .toString();
        default:
          return null;
      }
    }
    function c(e) {
      switch (e) {
        case "add_funds_landing_state_display":
        case "alt_pay_add_funds_state_display":
          return r("fbs")._(/*BTDS*/ "Submit support request");
        default:
          return r("fbs")._(/*BTDS*/ "Go back");
      }
    }
    function d(e) {
      return r("fbs")._(/*BTDS*/ "Exit");
    }
    function m(e) {
      switch (e) {
        case "add_funds_landing_state_display":
        case "alt_pay_add_funds_state_display":
          return s._(/*BTDS*/ "Cancel");
        default:
          return s._(/*BTDS*/ "Are you sure you want to exit?");
      }
    }
    var p = {
        exitConfirmationDialogProps: function (n, r) {
          return (
            r === void 0 && (r = !1),
            {
              body: e(n),
              primaryButtonUrl: u(n),
              primaryLabel: c(n),
              secondaryLabel: d(n),
              shouldCheckExitConfirmationQe: r != null ? r : !1,
              title: m(n),
            }
          );
        },
      },
      _ = p;
    l.default = _;
  },
  226,
);
