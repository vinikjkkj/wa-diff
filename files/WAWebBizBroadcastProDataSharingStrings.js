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
    function h(e) {
      return s._(
        /*BTDS*/ "You agree to share business broadcast event activity data with Meta to help optimize business broadcasts, and agree to the {business tools terms link}. You can manage this at any time in business broadcast settings.",
        [s._param("business tools terms link", e)],
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Meta Business Tools Terms");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Save");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(
        /*BTDS*/ "This is taking longer than usual. Your change may still be saved.",
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Remove recipients from data sharing");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(
        /*BTDS*/ "This prevents their activities from being shared with Meta and used to optimize the performance of business broadcasts in WhatsApp, Ads Manager, and Meta Business Suite campaigns.",
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Phone number");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Remove");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "This phone number isn't in your customer base.");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return s._(/*BTDS*/ "{phone number} has been removed from data sharing", [
        s._param("phone number", e),
      ]);
    }
    ((T.displayName = T.name + " [from " + i.id + "]"),
      (l.getDataSharingTitle = c),
      (l.getDataSharingEnabledLabel = d),
      (l.getDataSharingDisabledLabel = m),
      (l.getDataSharingImprovePerformanceLabel = p),
      (l.getDataSharingDescription = _),
      (l.getDataSharingLearnMoreLabel = f),
      (l.getDataSharingLearnMoreAriaLabel = g),
      (l.getDataSharingConsentDisclosure = h),
      (l.getDataSharingBusinessToolsTermsLabel = y),
      (l.getDataSharingSaveLabel = C),
      (l.getDataSharingSaveError = b),
      (l.getDataSharingSaveDelayedMessage = v),
      (l.getRemoveFromDataSharingTitle = S),
      (l.getRemoveFromDataSharingDescription = R),
      (l.getRemoveFromDataSharingPhoneLabel = L),
      (l.getRemoveFromDataSharingSubmitLabel = E),
      (l.getRemoveFromDataSharingNotFoundError = k),
      (l.getRemoveFromDataSharingGenericError = I),
      (l.getRemoveFromDataSharingSuccessToast = T));
  },
  226,
);
