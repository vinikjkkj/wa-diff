__d(
  "QE2Logger",
  ["Qe2JsExposureFalcoEvent", "cr:19308"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return (t =
        n("cr:19308") == null
          ? void 0
          : n("cr:19308").subscribeExposureQueue(e)) != null
        ? t
        : function () {};
    }
    var s = {};
    function u(e, t, n) {
      z(e, t != null ? t : "", 9, n);
    }
    function c(e, t) {
      z(e, t != null ? t : "", 9, null, "immediate");
    }
    function d(e, t) {
      z(e, t != null ? t : "", 9, null, "critical");
    }
    function m(e) {
      z(e, "", 32);
    }
    function p(e) {
      z(e, "", 32, null, "immediate");
    }
    function _(e) {
      z(e, "", 54);
    }
    function f(e, t) {
      z(e, t, 126);
    }
    function g(e, t) {
      z(e, "", 54, t, "immediate");
    }
    function h(e, t) {
      z(e, "", 54, t, "critical");
    }
    function y(e, t) {
      z(e, t, 3);
    }
    function C(e) {
      z(e, "", 5);
    }
    function b(e) {
      z(e, "", 5, null, "immediate");
    }
    function v(e, t) {
      (t === void 0 && (t = null), z(e, "", 5, t, "critical"));
    }
    function S(e) {
      z(e, "", 31);
    }
    function R(e) {
      z(e, "", 98);
    }
    function L(e, t) {
      z(e, t, 7);
    }
    function E(e, t) {
      z(e, t, 7, null, "immediate");
    }
    function k(e, t) {
      z(e, t, 7, null, "critical");
    }
    function I(e, t) {
      z(e, t, 55);
    }
    function T(e, t) {
      z(e, t, 17);
    }
    function D(e, t) {
      z(e, t, 17, null, "critical");
    }
    function x(e, t) {
      z(e, t, 25);
    }
    function $(e, t) {
      z(e, t, 115);
    }
    function P(e, t) {
      z(e, t, 8);
    }
    function N(e, t) {
      z(e, t, 22);
    }
    function M(e, t) {
      z(e, t, 27);
    }
    function w(e, t) {
      z(e, t, 0);
    }
    function A(e, t) {
      z(e, t, 0, null, "immediate");
    }
    function F(e, t) {
      z(e, t, 0, null, "critical");
    }
    function O(e, t, n) {
      z(e, t != null ? t : "", 89, n);
    }
    function B(e, t, n) {
      z(e, t != null ? t : "", 89, n, "immediate");
    }
    function W(e, t) {
      z(e, t != null ? t : "", 89, null, "critical");
    }
    function q(e, t) {
      z(e, t, 60);
    }
    function U(e, t) {
      z(e, t, 90);
    }
    function V(e, t) {
      z(e, t, 144);
    }
    function H(e, t, n) {
      z(e, t, n);
    }
    function G(e, t, n) {
      z(e, t, n, null, "immediate");
    }
    function z(e, t, o, a, i) {
      var l = e + "|" + t;
      (a != null && (l = l + "|" + a),
        !s[l] &&
          (i === "immediate"
            ? r("Qe2JsExposureFalcoEvent").logImmediately(function () {
                return { universe: e, unit_id: t, unit_type: o, param: a };
              })
            : i === "critical"
              ? r("Qe2JsExposureFalcoEvent").logCritical(function () {
                  return { universe: e, unit_id: t, unit_type: o, param: a };
                })
              : r("Qe2JsExposureFalcoEvent").log(function () {
                  return { universe: e, unit_id: t, unit_type: o, param: a };
                }),
          (s[l] = !0),
          n("cr:19308") == null ||
            n("cr:19308").notifyManualExposure({
              universe: e,
              unit_id: t,
              unit_type: o,
              param: a,
            })));
    }
    ((l.subscribeToExposures = e),
      (l.logExposureForUser = u),
      (l.logExposureForUserImmediately = c),
      (l.logExposureForUserCritical = d),
      (l.logExposureForIGUser = m),
      (l.logExposureForIGUserImmediately = p),
      (l.logExposureForIGWebCookie = _),
      (l.logExposureForIGAccountFBIDV2 = f),
      (l.logExposureForIGWebCookieImmediately = g),
      (l.logExposureForIGWebCookieCritical = h),
      (l.logExposureForEmail = y),
      (l.logExposureForDatr = C),
      (l.logExposureForDatrImmediately = b),
      (l.logExposureForDatrCritical = v),
      (l.logExposureForOculusLoggedOut = S),
      (l.logExposureForOculusLoggedOutCookieID = R),
      (l.logExposureForPage = L),
      (l.logExposureForPageImmediately = E),
      (l.logExposureForPageCritical = k),
      (l.logExposureForPaymentAccountID = I),
      (l.logExposureForBusiness = T),
      (l.logExposureForBusinessCritical = D),
      (l.logExposureForGroup = x),
      (l.logExposureForPhabricatorDiff = $),
      (l.logExposureForPhoneNumber = P),
      (l.logExposureForScimCompanyID = N),
      (l.logExposureForAnalyticsEntityID = M),
      (l.logExposureForAdAccountID = w),
      (l.logExposureForAdAccountIDImmediately = A),
      (l.logExposureForAdAccountIDCritical = F),
      (l.logExposureForActingAccount = O),
      (l.logExposureForActingAccountImmediately = B),
      (l.logExposureForActingAccountCritical = W),
      (l.logExposureForMixedUserAndPage = q),
      (l.logExposureForCommerceMerchantSettings = U),
      (l.logExposureForShopifyApplicationInstallationID = V),
      (l.logExposure = H),
      (l.logExposureImmediately = G));
  },
  98,
);
