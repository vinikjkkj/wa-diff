__d(
  "MAIBAGovernedActionStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "");
    }
    function u() {
      return s._(/*BTDS*/ "");
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _() {
      return s._(/*BTDS*/ "");
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y() {
      return s._(/*BTDS*/ "");
    }
    function C(e) {
      return e === "CUSTOM_AUDIENCE"
        ? s._(/*BTDS*/ "")
        : e === "PRODUCT_CATALOG"
          ? s._(/*BTDS*/ "")
          : e === "BUSINESS"
            ? s._(/*BTDS*/ "")
            : e === "AD_ACCOUNT"
              ? s._(/*BTDS*/ "")
              : null;
    }
    function b(e, t) {
      var n = C(t);
      return n == null
        ? e
        : String(
            s._(/*BTDS*/ "", [
              s._param("object name", e),
              s._param("object type", n),
            ]),
          );
    }
    function v() {
      return s._(/*BTDS*/ "");
    }
    function S() {
      return s._(/*BTDS*/ "");
    }
    function R() {
      return s._(/*BTDS*/ "");
    }
    function L() {
      return s._(/*BTDS*/ "");
    }
    function E() {
      return s._(/*BTDS*/ "");
    }
    function k() {
      return s._(/*BTDS*/ "");
    }
    function I() {
      return s._(/*BTDS*/ "");
    }
    function T() {
      return s._(/*BTDS*/ "");
    }
    function D() {
      return s._(/*BTDS*/ "");
    }
    function x() {
      return s._(/*BTDS*/ "");
    }
    function $(e) {
      return s._(/*BTDS*/ "", [s._param("number", e, [0])]);
    }
    function P(e, t) {
      return s._(/*BTDS*/ "", [
        s._param("page", e, [0]),
        s._param("page count", t, [0]),
      ]);
    }
    function N() {
      return s._(/*BTDS*/ "");
    }
    function M(e, t, n) {
      return n == null
        ? s._(/*BTDS*/ "", [s._param("action", e), s._param("target", t)])
        : s._(/*BTDS*/ "", [
            s._param("action", e),
            s._param("target", t),
            s._param("changes", n),
          ]);
    }
    function w() {
      return s._(/*BTDS*/ "");
    }
    function A() {
      return s._(/*BTDS*/ "");
    }
    function F() {
      return s._(/*BTDS*/ "");
    }
    function O() {
      return s._(/*BTDS*/ "");
    }
    function B(e, t) {
      return s._(/*BTDS*/ "", [
        s._param("step", e, [0]),
        s._param("step count", t, [0]),
      ]);
    }
    function W() {
      return s._(/*BTDS*/ "");
    }
    function q() {
      return s._(/*BTDS*/ "");
    }
    function U() {
      return s._(/*BTDS*/ "");
    }
    function V() {
      return s._(/*BTDS*/ "");
    }
    function H() {
      return s._(/*BTDS*/ "");
    }
    function G() {
      return s._(/*BTDS*/ "");
    }
    function z() {
      return s._(/*BTDS*/ "");
    }
    function j() {
      return s._(/*BTDS*/ "");
    }
    ((l.applyingStatus = e),
      (l.appliedStatus = u),
      (l.notAppliedStatus = c),
      (l.staleStatus = d),
      (l.expiredStatus = m),
      (l.failedStatus = p),
      (l.reviewUnavailable = _),
      (l.decisionFailed = f),
      (l.approveLabel = g),
      (l.cancelLabel = h),
      (l.openReviewLabel = y),
      (l.formatTargetCaption = b),
      (l.expiredStepTitle = v),
      (l.appliedStepTitle = S),
      (l.applyingStepTitle = R),
      (l.notAppliedStepTitle = L),
      (l.staleStepTitle = E),
      (l.failedStepTitle = k),
      (l.outcomeUnknownStepTitle = I),
      (l.unknownOutcomeError = T),
      (l.blockedStepTitle = D),
      (l.reviewStepTitle = x),
      (l.seeMoreRows = $),
      (l.collectionPage = P),
      (l.prepareNewReviewLabel = N),
      (l.prepareNewReviewMessage = M),
      (l.reviewSelectionLabel = w),
      (l.chatMoreLabel = A),
      (l.openFullPreviewLabel = F),
      (l.waitingForPreviousStatus = O),
      (l.sequenceStep = B),
      (l.itemReadyStatus = W),
      (l.itemUpdatedStatus = q),
      (l.itemCreatedStatus = U),
      (l.itemSentStatus = V),
      (l.itemUnconfirmedStatus = H),
      (l.itemUnchangedStatus = G),
      (l.itemFailedStatus = z),
      (l.legalDisclaimer = j));
  },
  226,
);
