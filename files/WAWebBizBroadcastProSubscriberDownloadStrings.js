__d(
  "WAWebBizBroadcastProSubscriberDownloadStrings",
  ["fbt", "WAWebBizBroadcastProDownloadPreparingFileLabel"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Download recipients");
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
      return s._(
        /*BTDS*/ "There's nothing to download yet. Your customer base has no subscribed recipients.",
      );
    }
    function p() {
      return s._(
        /*BTDS*/ "Your last download is still being prepared. Try again once it's ready.",
      );
    }
    function _() {
      return s._(/*BTDS*/ "Your file is ready");
    }
    function f() {
      return s._(
        /*BTDS*/ "Your file with subscribed recipients is ready to download.",
      );
    }
    function g() {
      return s._(/*BTDS*/ "Couldn't prepare your file");
    }
    function h() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    function y() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    ((l.getPreparingFileLabel = r(
      "WAWebBizBroadcastProDownloadPreparingFileLabel",
    )),
      (l.getDownloadRecipientsModalTitle = e),
      (l.getCustomerBaseLabel = u),
      (l.getRecipientCountExactLabel = c),
      (l.getRecipientCountRangeLabel = d),
      (l.getNoSubscribedRecipientsLabel = m),
      (l.getDownloadStillPreparingLabel = p),
      (l.getFileReadyLabel = _),
      (l.getFileReadySublabel = f),
      (l.getFileFailedLabel = g),
      (l.getFileFailedSublabel = h),
      (l.getSaveFailedToastLabel = y));
  },
  226,
);
