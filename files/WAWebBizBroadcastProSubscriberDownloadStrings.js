__d(
  "WAWebBizBroadcastProSubscriberDownloadStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Customer base");
    }
    function u(e, t) {
      return s._(/*BTDS*/ "{name} ({phone number})", [
        s._param("name", e),
        s._param("phone number", t),
      ]);
    }
    function c(e) {
      return s._(/*BTDS*/ '_j{"*":"{count}"}', [s._param("count", e, [0])]);
    }
    function d(e, t) {
      return s._(/*BTDS*/ '_j{"*":{"*":"{lower bound} - {upper bound}"}}', [
        s._param("lower bound", e, [0]),
        s._param("upper bound", t, [0]),
      ]);
    }
    function m() {
      return s._(/*BTDS*/ "Not available");
    }
    function p() {
      return s._(/*BTDS*/ "Download CSV file");
    }
    function _() {
      return s._(
        /*BTDS*/ "There's nothing to download yet. Your customer base has no subscribed recipients.",
      );
    }
    function f() {
      return s._(/*BTDS*/ "Couldn't load your customer base. Try again later.");
    }
    function g(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Preparing your file \\u00b7 {percentage}\\u0025"}',
        [s._param("percentage", e, [0])],
      );
    }
    function h() {
      return s._(/*BTDS*/ "Your file is ready");
    }
    function y() {
      return s._(/*BTDS*/ "You can keep browsing while we get it ready.");
    }
    function C() {
      return s._(/*BTDS*/ "Couldn't prepare your file");
    }
    function b() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    function v() {
      return s._(/*BTDS*/ "Download");
    }
    function S() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    ((l.getCustomerBaseColumnHeader = e),
      (l.getCustomerBaseLabel = u),
      (l.getRecipientCountExactLabel = c),
      (l.getRecipientCountRangeLabel = d),
      (l.getRecipientCountUnavailableLabel = m),
      (l.getDownloadCSVFileButtonLabel = p),
      (l.getNoSubscribedRecipientsLabel = _),
      (l.getCustomerBaseLoadFailedLabel = f),
      (l.getPreparingFileLabel = g),
      (l.getFileReadyLabel = h),
      (l.getFilePreparingSublabel = y),
      (l.getFileFailedLabel = C),
      (l.getFileFailedSublabel = b),
      (l.getDownloadActionLabel = v),
      (l.getSaveFailedToastLabel = S));
  },
  226,
);
