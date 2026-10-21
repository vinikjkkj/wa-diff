__d(
  "WAWebBizBroadcastProSubscriberDownloadStrings",
  ["fbt", "WAWebBizBroadcastProDownloadPreparingFileLabel"],
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
    function f() {
      return s._(/*BTDS*/ "Your file is ready");
    }
    function g() {
      return s._(
        /*BTDS*/ "Your file with subscribed recipients is ready to download.",
      );
    }
    function h() {
      return s._(/*BTDS*/ "Couldn't prepare your file");
    }
    function y() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    function C() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    ((l.getPreparingFileLabel = r(
      "WAWebBizBroadcastProDownloadPreparingFileLabel",
    )),
      (l.getDownloadRecipientsModalTitle = e),
      (l.getDownloadRecipientsModalSubtitle = u),
      (l.getCustomerBaseLabel = c),
      (l.getRecipientCountExactLabel = d),
      (l.getRecipientCountRangeLabel = m),
      (l.getNoSubscribedRecipientsLabel = p),
      (l.getDownloadStillPreparingLabel = _),
      (l.getFileReadyLabel = f),
      (l.getFileReadySublabel = g),
      (l.getFileFailedLabel = h),
      (l.getFileFailedSublabel = y),
      (l.getSaveFailedToastLabel = C));
  },
  226,
);
