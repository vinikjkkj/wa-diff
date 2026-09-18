__d(
  "WAWebBizBroadcastProDataSharingStrings",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return s._(/*BTDS*/ "Remove recipients from data sharing");
    }
    function u() {
      return s._(
        /*BTDS*/ "This prevents their activities from being shared with Meta and used to optimize the performance of business broadcasts in WhatsApp, Ads Manager, and Meta Business Suite campaigns.",
      );
    }
    function c() {
      return s._(/*BTDS*/ "Phone number");
    }
    function d() {
      return s._(/*BTDS*/ "Remove");
    }
    function m() {
      return s._(/*BTDS*/ "This phone number isn't in your customer base.");
    }
    function p() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    function _(e) {
      return s._(/*BTDS*/ "{phone number} has been removed from data sharing", [
        s._param("phone number", e),
      ]);
    }
    ((l.getRemoveFromDataSharingTitle = e),
      (l.getRemoveFromDataSharingDescription = u),
      (l.getRemoveFromDataSharingPhoneLabel = c),
      (l.getRemoveFromDataSharingSubmitLabel = d),
      (l.getRemoveFromDataSharingNotFoundError = m),
      (l.getRemoveFromDataSharingGenericError = p),
      (l.getRemoveFromDataSharingSuccessToast = _));
  },
  226,
);
