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
      return s._(/*BTDS*/ "Payment method added");
    }
    function f() {
      return s._(/*BTDS*/ "Maximum price");
    }
    function g() {
      return s._(
        /*BTDS*/ "Set the highest price you\u2019re willing to pay per broadcast.",
      );
    }
    function h() {
      return s._(/*BTDS*/ "Maximum price");
    }
    function y() {
      return s._(
        /*BTDS*/ "Set the amount you\u2019re willing to spend on this broadcast.",
      );
    }
    function C() {
      return s._(/*BTDS*/ "Budget");
    }
    function b(e) {
      return s._(
        /*BTDS*/ "Suggested budget is {suggested budget} based on your audience size.",
        [s._param("suggested budget", e)],
      );
    }
    function v() {
      return s._(/*BTDS*/ "Region");
    }
    function S(e) {
      return s._(
        /*BTDS*/ "{cost} is the default cost to send a broadcast to customers in your selected region.",
        [s._param("cost", e)],
      );
    }
    function R(e) {
      return s._(
        /*BTDS*/ "To reach more customers, set a maximum price higher than {cost}.",
        [s._param("cost", e)],
      );
    }
    function L(e) {
      return s._(
        /*BTDS*/ "Maximum price can\u2019t be more than {maxBid} for this account.",
        [s._param("maxBid", e)],
      );
    }
    function E() {
      return s._(/*BTDS*/ "Maximum price is required");
    }
    function k(e) {
      return s._(/*BTDS*/ "Maximum price must be above {minimum}", [
        s._param("minimum", e),
      ]);
    }
    function I(e) {
      return s._(/*BTDS*/ "Budget price must be above {minimum}", [
        s._param("minimum", e),
      ]);
    }
    ((l.getBudgetSectionTitle = e),
      (l.getSummarySectionTitle = u),
      (l.getPaymentDetailsTitle = c),
      (l.getPaymentMethodRequiredTitle = d),
      (l.getPaymentMethodRequiredBody = m),
      (l.getAddPaymentMethodLabel = p),
      (l.getPaymentMethodAddedToastMessage = _),
      (l.getMaximumBidTitle = f),
      (l.getMaximumBidDescription = g),
      (l.getMaximumBidInputLabel = h),
      (l.getCampaignBudgetDescription = y),
      (l.getCampaignBudgetInputLabel = C),
      (l.getSuggestedBudgetHelperText = b),
      (l.getDefaultCostRegionLabel = v),
      (l.getDefaultCostHelperText = S),
      (l.getMaxBidHelperText = R),
      (l.getMaxBidTooHighError = L),
      (l.getMaxBidRequiredError = E),
      (l.getMaxBidMustBeAboveError = k),
      (l.getBudgetMustBeAboveError = I));
  },
  226,
);
