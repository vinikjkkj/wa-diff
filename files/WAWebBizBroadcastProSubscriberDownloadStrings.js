__d(
  "WAWebBizBroadcastProSubscriberDownloadStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Download recipients");
    }
    function u() {
      return s._(/*BTDS*/ "Download a CSV file with subscribed recipients.");
    }
    function c() {
      return s._(/*BTDS*/ "Customer base");
    }
    function d(e, t) {
      return s._(/*BTDS*/ "{name} ({phone number})", [
        s._param("name", e),
        s._param("phone number", t),
      ]);
    }
    function m(e) {
      return s._(/*BTDS*/ '_j{"*":"{count}"}', [s._param("count", e, [0])]);
    }
    function p(e, t) {
      return s._(/*BTDS*/ '_j{"*":{"*":"{lower bound} - {upper bound}"}}', [
        s._param("lower bound", e, [0]),
        s._param("upper bound", t, [0]),
      ]);
    }
    function _() {
      return s._(
        /*BTDS*/ "There's nothing to download yet. Your customer base has no subscribed recipients.",
      );
    }
    function f() {
      return s._(
        /*BTDS*/ "Your last download is still being prepared. Try again once it's ready.",
      );
    }
    function g(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Preparing your file \\u2022 {percentage}\\u0025"}',
        [s._param("percentage", e, [0])],
      );
    }
    function h() {
      return s._(/*BTDS*/ "Your file is ready");
    }
    function y() {
      return s._(
        /*BTDS*/ "Your file with subscribed recipients is ready to download.",
      );
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
    ((l.getDownloadRecipientsModalTitle = e),
      (l.getDownloadRecipientsModalSubtitle = u),
      (l.getCustomerBaseColumnHeader = c),
      (l.getCustomerBaseLabel = d),
      (l.getRecipientCountExactLabel = m),
      (l.getRecipientCountRangeLabel = p),
      (l.getNoSubscribedRecipientsLabel = _),
      (l.getDownloadStillPreparingLabel = f),
      (l.getPreparingFileLabel = g),
      (l.getFileReadyLabel = h),
      (l.getFileReadySublabel = y),
      (l.getFileFailedLabel = C),
      (l.getFileFailedSublabel = b),
      (l.getDownloadActionLabel = v),
      (l.getSaveFailedToastLabel = S));
  },
  226,
);
