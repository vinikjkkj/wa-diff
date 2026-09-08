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
    function m() {
      return s._(/*BTDS*/ "Not available");
    }
    function p(e) {
      return s._(/*BTDS*/ '_j{"*":"{count}"}', [s._param("count", e, [0])]);
    }
    function _(e, t) {
      return s._(/*BTDS*/ '_j{"*":{"*":"{lower bound} - {upper bound}"}}', [
        s._param("lower bound", e, [0]),
        s._param("upper bound", t, [0]),
      ]);
    }
    function f() {
      return s._(/*BTDS*/ "Not available");
    }
    function g() {
      return s._(/*BTDS*/ "Download CSV file");
    }
    function h() {
      return s._(
        /*BTDS*/ "There's nothing to download yet. Your customer base has no subscribed recipients.",
      );
    }
    function y() {
      return s._(/*BTDS*/ "We couldn't find a customer base for this account.");
    }
    function C() {
      return s._(
        /*BTDS*/ "Your last download is still being prepared. Try again once it's ready.",
      );
    }
    function b() {
      return s._(/*BTDS*/ "Couldn't load your customer base.");
    }
    function v() {
      return s._(/*BTDS*/ "Loading your customer base");
    }
    function S(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Preparing your file \\u00b7 {percentage}\\u0025"}',
        [s._param("percentage", e, [0])],
      );
    }
    function R() {
      return s._(/*BTDS*/ "Your file is ready");
    }
    function L() {
      return s._(/*BTDS*/ "You can keep browsing while we get it ready.");
    }
    function E() {
      return s._(/*BTDS*/ "Couldn't prepare your file");
    }
    function k() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    function I() {
      return s._(/*BTDS*/ "Download");
    }
    function T() {
      return s._(/*BTDS*/ "Something went wrong. Try downloading again.");
    }
    ((l.getDownloadRecipientsModalTitle = e),
      (l.getDownloadRecipientsModalSubtitle = u),
      (l.getCustomerBaseColumnHeader = c),
      (l.getCustomerBaseLabel = d),
      (l.getCustomerBaseNameUnavailableLabel = m),
      (l.getRecipientCountExactLabel = p),
      (l.getRecipientCountRangeLabel = _),
      (l.getRecipientCountUnavailableLabel = f),
      (l.getDownloadCSVFileButtonLabel = g),
      (l.getNoSubscribedRecipientsLabel = h),
      (l.getCustomerBaseUnavailableLabel = y),
      (l.getDownloadStillPreparingLabel = C),
      (l.getCustomerBaseLoadFailedLabel = b),
      (l.getCustomerBaseLoadingLabel = v),
      (l.getPreparingFileLabel = S),
      (l.getFileReadyLabel = R),
      (l.getFilePreparingSublabel = L),
      (l.getFileFailedLabel = E),
      (l.getFileFailedSublabel = k),
      (l.getDownloadActionLabel = I),
      (l.getSaveFailedToastLabel = T));
  },
  226,
);
