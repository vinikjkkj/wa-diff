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
    function c(e, t) {
      return s._(/*BTDS*/ "{name} ({phone number})", [
        s._param("name", e),
        s._param("phone number", t),
      ]);
    }
    function d(e) {
      return s._(/*BTDS*/ '_j{"*":"{count}"}', [s._param("count", e, [0])]);
    }
    function m(e, t) {
      return s._(/*BTDS*/ '_j{"*":{"*":"{lower bound} - {upper bound}"}}', [
        s._param("lower bound", e, [0]),
        s._param("upper bound", t, [0]),
      ]);
    }
    function p() {
      return s._(
        /*BTDS*/ "There's nothing to download yet. Your customer base has no subscribed recipients.",
      );
    }
    function _() {
      return s._(
        /*BTDS*/ "Your last download is still being prepared. Try again once it's ready.",
      );
    }
    function f(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Preparing your file \\u2022 {percentage}\\u0025"}',
        [s._param("percentage", e, [0])],
      );
    }
    function g() {
      return s._(/*BTDS*/ "Your file is ready");
    }
    function h() {
      return s._(
        /*BTDS*/ "Your file with subscribed recipients is ready to download.",
      );
    }
    function y() {
      return s._(/*BTDS*/ "Couldn't prepare your file");
    }
    function C() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    function b() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    ((l.getDownloadRecipientsModalTitle = e),
      (l.getDownloadRecipientsModalSubtitle = u),
      (l.getCustomerBaseLabel = c),
      (l.getRecipientCountExactLabel = d),
      (l.getRecipientCountRangeLabel = m),
      (l.getNoSubscribedRecipientsLabel = p),
      (l.getDownloadStillPreparingLabel = _),
      (l.getPreparingFileLabel = f),
      (l.getFileReadyLabel = g),
      (l.getFileReadySublabel = h),
      (l.getFileFailedLabel = y),
      (l.getFileFailedSublabel = C),
      (l.getSaveFailedToastLabel = b));
  },
  226,
);
