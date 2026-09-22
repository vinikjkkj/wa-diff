__d(
  "WAWebBizBroadcastProDataSharingStrings",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Data sharing");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s._(/*BTDS*/ "Enabled");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Disabled");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Improve performance");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return s._(
        /*BTDS*/ "Sharing activity data can improve the performance of business broadcasts with optimizations. {learn more link}",
        [s._param("learn more link", e)],
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Learn more");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Learn more about how shared activity data is used");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Save");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Remove recipients from data sharing");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(
        /*BTDS*/ "This prevents their activities from being shared with Meta and used to optimize the performance of business broadcasts in WhatsApp, Ads Manager, and Meta Business Suite campaigns.",
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Phone number");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Remove");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "This phone number isn't in your customer base.");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return s._(/*BTDS*/ "{phone number} has been removed from data sharing", [
        s._param("phone number", e),
      ]);
    }
    ((E.displayName = E.name + " [from " + i.id + "]"),
      (l.getDataSharingTitle = c),
      (l.getDataSharingEnabledLabel = d),
      (l.getDataSharingDisabledLabel = m),
      (l.getDataSharingImprovePerformanceLabel = p),
      (l.getDataSharingDescription = _),
      (l.getDataSharingLearnMoreLabel = f),
      (l.getDataSharingLearnMoreAriaLabel = g),
      (l.getDataSharingSaveLabel = h),
      (l.getDataSharingSaveError = y),
      (l.getRemoveFromDataSharingTitle = C),
      (l.getRemoveFromDataSharingDescription = b),
      (l.getRemoveFromDataSharingPhoneLabel = v),
      (l.getRemoveFromDataSharingSubmitLabel = S),
      (l.getRemoveFromDataSharingNotFoundError = R),
      (l.getRemoveFromDataSharingGenericError = L),
      (l.getRemoveFromDataSharingSuccessToast = E));
  },
  226,
);
