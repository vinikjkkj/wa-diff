__d(
  "BillingWizardRootUtils",
  ["BillingCurrencyAmountUtils", "FBLogger", "isStringNullOrEmpty"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = {};
      if (e === "") return t;
      var n = JSON.parse(e),
        o = u(n == null ? void 0 : n.payment_amount);
      o != null && (t.paymentAmount = o);
      var a = u(n == null ? void 0 : n.full_budget_payment_amount);
      a != null && (t.fullBudgetPaymentAmount = a);
      var i = u(n == null ? void 0 : n.payment_amount_total_charge);
      (i != null && (t.paymentAmountTotalCharge = i),
        (n == null ? void 0 : n.payment_amount_is_budget_derived) != null &&
          (t.paymentAmountIsBudgetDerived = n.payment_amount_is_budget_derived),
        (n == null ? void 0 : n.display_all_fields) != null &&
          (t.displayAllFields = n.display_all_fields),
        (n == null ? void 0 : n.is_single_pm_flow) != null &&
          (t.isSinglePMFlow = n.is_single_pm_flow),
        r("isStringNullOrEmpty")(n == null ? void 0 : n.payment_method_id) ||
          (t.paymentMethodID = n.payment_method_id),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.payment_method_to_remove_id,
        ) || (t.paymentMethodToRemoveID = n.payment_method_to_remove_id),
        s(t, n == null ? void 0 : n.status),
        r("isStringNullOrEmpty")(n == null ? void 0 : n.payment_account_id) ||
          (t.paymentAccountID = n.payment_account_id),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.shared_stored_balance_id,
        ) || (t.sharedStoredBalanceID = n.shared_stored_balance_id),
        (n == null ? void 0 : n.should_turn_on) != null &&
          (t.shouldTurnOn = n.should_turn_on),
        (n == null ? void 0 : n.surface) != null && (t.surface = n.surface),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.boost_duration_in_days,
        ) || (t.boostDurationInDays = n.boost_duration_in_days));
      var l = u(n == null ? void 0 : n.daily_budget_payment_amount);
      return (
        l != null && (t.dailyBudgetPaymentAmount = l),
        (n == null ? void 0 : n.is_missing_pills) != null &&
          (t.isMissingPills = n.is_missing_pills),
        r("isStringNullOrEmpty")(n == null ? void 0 : n.provider_id) ||
          (t.providerID = n.provider_id),
        (n == null ? void 0 : n.payment_method_type) != null &&
          (t.paymentMethodType = n.payment_method_type),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.desired_account_country,
        ) || (t.desiredAccountCountry = n.desired_account_country),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.desired_account_currency,
        ) || (t.desiredAccountCurrency = n.desired_account_currency),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.desired_account_timezone,
        ) || (t.desiredAccountTimezone = n.desired_account_timezone),
        (n == null ? void 0 : n.show_payment_processing_error) != null &&
          (t.showPaymentProcessingError = n.show_payment_processing_error),
        (n == null ? void 0 : n.verification_intent) != null &&
          (t.verificationIntent = n.verification_intent),
        r("isStringNullOrEmpty")(
          n == null ? void 0 : n.ides_enforcement_instance_id,
        ) || (t.idesEnforcementInstanceID = n.ides_enforcement_instance_id),
        t
      );
    }
    function s(e, t) {
      if (
        !(t == null || t.body == null || t.headline == null || t.type == null)
      ) {
        var n;
        if (t.primary_action !== null) {
          var r, o;
          n = {
            href: (r = t.primary_action) == null ? void 0 : r.href,
            label: (o = t.primary_action) == null ? void 0 : o.label,
          };
        }
        var a;
        (t.logging_message != null && (a = t.logging_message),
          (e.status = {
            body: t.body,
            headline: t.headline,
            loggingMessage: a,
            overridePrimaryButton: n,
            title: t.title,
            type: t.type,
          }));
      }
    }
    function u(e) {
      return o("BillingCurrencyAmountUtils").getCurrencyAmountInputFromOffset(
        e == null ? void 0 : e.amount,
        e == null ? void 0 : e.currency,
      );
    }
    function c(t, n) {
      var o = d(t == null ? void 0 : t.paymentAmount),
        a = d(t == null ? void 0 : t.fullBudgetPaymentAmount),
        i = d(t == null ? void 0 : t.paymentAmountTotalCharge),
        l = d(t == null ? void 0 : t.dailyBudgetPaymentAmount),
        s;
      t.paymentMethodID != null &&
        t.paymentMethodID !== "" &&
        (s = t.paymentMethodID);
      var u = {};
      try {
        if (n != null) {
          u = e(n);
          var c = JSON.parse(n);
          u = babelHelpers.extends({}, c, u);
        }
      } catch (e) {
        r("FBLogger")("billing_interfaces_platform").mustfix(
          "wizard json props where not valid json",
        );
      }
      return babelHelpers.extends(
        {},
        t,
        {
          dailyBudgetPaymentAmount: l,
          fullBudgetPaymentAmount: a,
          paymentAmount: o,
          paymentAmountTotalCharge: i,
          paymentMethodID: s,
        },
        u,
      );
    }
    function d(e) {
      if ((e == null ? void 0 : e.amount) !== "0")
        return o("BillingCurrencyAmountUtils").getCurrencyAmountInputFromRaw(
          e == null ? void 0 : e.amount,
          e == null ? void 0 : e.currency,
        );
    }
    l.transformProps = c;
  },
  98,
);
