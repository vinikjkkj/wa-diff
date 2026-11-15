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
      return s._(/*BTDS*/ "On");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Off");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      return e === !0
        ? s._(/*BTDS*/ "Data sharing is on")
        : e === !1
          ? s._(/*BTDS*/ "Data sharing is off")
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function _() {
      return s._(/*BTDS*/ "Share activity data");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return s._(
        /*BTDS*/ "Sharing activity data can improve the performance of business broadcasts. {learn more link}",
        [s._param("learn more link", e)],
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Learn more");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Learn more about how shared activity data is used");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      return e
        ? s._(/*BTDS*/ "Data sharing is on")
        : s._(/*BTDS*/ "Data sharing is off");
    }
    function C() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(
        /*BTDS*/ "This is taking longer than usual. Your change may still be saved.",
      );
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Remove recipients from data sharing");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(
        /*BTDS*/ "This prevents their activities from being shared with Meta and used to optimize the performance of business broadcasts in WhatsApp, Ads Manager, and Meta Business Suite campaigns.",
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "Phone number");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Remove");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "This phone number isn't in your customer base.");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "Something went wrong. Try again.");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return s._(/*BTDS*/ "{phone number} has been removed from data sharing", [
        s._param("phone number", e),
      ]);
    }
    ((I.displayName = I.name + " [from " + i.id + "]"),
      (l.getDataSharingTitle = c),
      (l.getDataSharingEnabledLabel = d),
      (l.getDataSharingDisabledLabel = m),
      (l.getDataSharingToggleLabel = p),
      (l.getDataSharingToggleAriaLabel = _),
      (l.getDataSharingDescription = f),
      (l.getDataSharingLearnMoreLabel = g),
      (l.getDataSharingLearnMoreAriaLabel = h),
      (l.getDataSharingSuccessToast = y),
      (l.getDataSharingSaveError = C),
      (l.getDataSharingSaveDelayedMessage = b),
      (l.getRemoveFromDataSharingTitle = v),
      (l.getRemoveFromDataSharingDescription = S),
      (l.getRemoveFromDataSharingPhoneLabel = R),
      (l.getRemoveFromDataSharingSubmitLabel = L),
      (l.getRemoveFromDataSharingNotFoundError = E),
      (l.getRemoveFromDataSharingGenericError = k),
      (l.getRemoveFromDataSharingSuccessToast = I));
  },
  226,
);
