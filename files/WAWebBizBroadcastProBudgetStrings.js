__d(
  "WAWebBizBroadcastProBudgetStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Budget");
    }
    function u() {
      return s._(/*BTDS*/ "Not available");
    }
    function c() {
      return s._(/*BTDS*/ "Target audience");
    }
    function d() {
      return s._(/*BTDS*/ "Maximum price");
    }
    function m() {
      return s._(
        /*BTDS*/ "Set the highest price you\u2019re willing to pay per broadcast.",
      );
    }
    function p() {
      return s._(/*BTDS*/ "Maximum price");
    }
    function _(e) {
      return s._(
        /*BTDS*/ "Suggested budget is {suggested budget} based on your audience size.",
        [s._param("suggested budget", e)],
      );
    }
    function f(e) {
      return s._(
        /*BTDS*/ "{cost} is the default cost to send a broadcast to customers in your selected region.",
        [s._param("cost", e)],
      );
    }
    function g(e) {
      return s._(
        /*BTDS*/ "To reach more customers, set a maximum price higher than {cost}.",
        [s._param("cost", e)],
      );
    }
    function h(e) {
      return s._(
        /*BTDS*/ "Maximum price can\u2019t be more than {maxBid} for this account.",
        [s._param("maxBid", e)],
      );
    }
    function y() {
      return s._(/*BTDS*/ "Maximum price is required");
    }
    function C(e) {
      return s._(/*BTDS*/ "Maximum price must be above {minimum}", [
        s._param("minimum", e),
      ]);
    }
    function b(e) {
      return s._(/*BTDS*/ "Budget price must be above {minimum}", [
        s._param("minimum", e),
      ]);
    }
    ((l.getBudgetSectionTitle = e),
      (l.getSummaryValueUnavailableLabel = u),
      (l.getTargetAudienceLabel = c),
      (l.getMaximumBidTitle = d),
      (l.getMaximumBidDescription = m),
      (l.getMaximumBidInputLabel = p),
      (l.getSuggestedBudgetHelperText = _),
      (l.getDefaultCostHelperText = f),
      (l.getMaxBidHelperText = g),
      (l.getMaxBidTooHighError = h),
      (l.getMaxBidRequiredError = y),
      (l.getMaxBidMustBeAboveError = C),
      (l.getBudgetMustBeAboveError = b));
  },
  226,
);
