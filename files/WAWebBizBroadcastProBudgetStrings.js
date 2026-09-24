__d(
  "WAWebBizBroadcastProBudgetStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Budget");
    }
    function u() {
      return s._(/*BTDS*/ "Summary");
    }
    function c() {
      return s._(/*BTDS*/ "Payment details");
    }
    function d() {
      return s._(/*BTDS*/ "Payment method required");
    }
    function m() {
      return s._(
        /*BTDS*/ "Your WhatsApp Business account is missing a payment method. To send your broadcast, add a payment method.",
      );
    }
    function p() {
      return s._(/*BTDS*/ "Add payment method");
    }
    function _() {
      return s._(/*BTDS*/ "Maximum price");
    }
    function f() {
      return s._(
        /*BTDS*/ "Set the highest price you're willing to pay per delivery.",
      );
    }
    function g() {
      return s._(/*BTDS*/ "Maximum price");
    }
    function h() {
      return s._(
        /*BTDS*/ "Set the amount you're willing to spend on this campaign.",
      );
    }
    function y() {
      return s._(/*BTDS*/ "Budget");
    }
    function C() {
      return s._(/*BTDS*/ "Learn more about budget");
    }
    function b() {
      return s._(
        /*BTDS*/ "We work out your budget from your maximum price and the size of your audience. You can change it any time, and we\u2019ll update it again if your audience changes.",
      );
    }
    function v(e) {
      return s._(
        /*BTDS*/ "Suggested budget is {suggested budget} based on your audience size.",
        [s._param("suggested budget", e)],
      );
    }
    function S() {
      return s._(/*BTDS*/ "Learn more about maximum price");
    }
    function R(e) {
      return s._(
        /*BTDS*/ "{cost} is the default cost to send a broadcast to customers in the region associated with your phone number. To reach more customers, we suggest setting a maximum price higher than {cost}.",
        [s._param("cost", e)],
      );
    }
    function L() {
      return s._(/*BTDS*/ "OK");
    }
    function E() {
      return s._(/*BTDS*/ "Region");
    }
    function k(e) {
      return s._(
        /*BTDS*/ "{cost} is the default cost to send a broadcast to customers in your selected region.",
        [s._param("cost", e)],
      );
    }
    function I(e) {
      return s._(
        /*BTDS*/ "To reach more customers, set a maximum price higher than {cost}.",
        [s._param("cost", e)],
      );
    }
    function T(e) {
      return s._(
        /*BTDS*/ "Maximum price can\u2019t be more than {maxBid} for this account.",
        [s._param("maxBid", e)],
      );
    }
    function D() {
      return s._(/*BTDS*/ "Maximum price is required");
    }
    ((l.getBudgetSectionTitle = e),
      (l.getSummarySectionTitle = u),
      (l.getPaymentDetailsTitle = c),
      (l.getPaymentMethodRequiredTitle = d),
      (l.getPaymentMethodRequiredBody = m),
      (l.getAddPaymentMethodLabel = p),
      (l.getMaximumBidTitle = _),
      (l.getMaximumBidDescription = f),
      (l.getMaximumBidInputLabel = g),
      (l.getCampaignBudgetDescription = h),
      (l.getCampaignBudgetInputLabel = y),
      (l.getCampaignBudgetInfoButtonLabel = C),
      (l.getCampaignBudgetInfoBody = b),
      (l.getSuggestedBudgetHelperText = v),
      (l.getMaximumBidInfoButtonLabel = S),
      (l.getMaximumBidInfoBody = R),
      (l.getInfoDialogConfirmLabel = L),
      (l.getDefaultCostRegionLabel = E),
      (l.getDefaultCostHelperText = k),
      (l.getMaxBidHelperText = I),
      (l.getMaxBidTooHighError = T),
      (l.getMaxBidRequiredError = D));
  },
  226,
);
