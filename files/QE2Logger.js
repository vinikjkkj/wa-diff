__d(
  "QE2Logger",
  ["Qe2JsExposureFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(e, t, n) {
      G(e, t != null ? t : "", 9, n);
    }
    function u(e, t) {
      G(e, t != null ? t : "", 9, null, "immediate");
    }
    function c(e, t) {
      G(e, t != null ? t : "", 9, null, "critical");
    }
    function d(e) {
      G(e, "", 32);
    }
    function m(e) {
      G(e, "", 32, null, "immediate");
    }
    function p(e) {
      G(e, "", 54);
    }
    function _(e, t) {
      G(e, t, 126);
    }
    function f(e, t) {
      G(e, "", 54, t, "immediate");
    }
    function g(e, t) {
      G(e, "", 54, t, "critical");
    }
    function h(e, t) {
      G(e, t, 3);
    }
    function y(e) {
      G(e, "", 5);
    }
    function C(e) {
      G(e, "", 5, null, "immediate");
    }
    function b(e, t) {
      (t === void 0 && (t = null), G(e, "", 5, t, "critical"));
    }
    function v(e) {
      G(e, "", 31);
    }
    function S(e) {
      G(e, "", 98);
    }
    function R(e, t) {
      G(e, t, 7);
    }
    function L(e, t) {
      G(e, t, 7, null, "immediate");
    }
    function E(e, t) {
      G(e, t, 7, null, "critical");
    }
    function k(e, t) {
      G(e, t, 55);
    }
    function I(e, t) {
      G(e, t, 17);
    }
    function T(e, t) {
      G(e, t, 17, null, "critical");
    }
    function D(e, t) {
      G(e, t, 25);
    }
    function x(e, t) {
      G(e, t, 115);
    }
    function $(e, t) {
      G(e, t, 8);
    }
    function P(e, t) {
      G(e, t, 22);
    }
    function N(e, t) {
      G(e, t, 27);
    }
    function M(e, t) {
      G(e, t, 0);
    }
    function w(e, t) {
      G(e, t, 0, null, "immediate");
    }
    function A(e, t) {
      G(e, t, 0, null, "critical");
    }
    function F(e, t, n) {
      G(e, t != null ? t : "", 89, n);
    }
    function O(e, t) {
      G(e, t != null ? t : "", 89, null, "immediate");
    }
    function B(e, t) {
      G(e, t != null ? t : "", 89, null, "critical");
    }
    function W(e, t) {
      G(e, t, 60);
    }
    function q(e, t) {
      G(e, t, 90);
    }
    function U(e, t) {
      G(e, t, 144);
    }
    function V(e, t, n) {
      G(e, t, n);
    }
    function H(e, t, n) {
      G(e, t, n, null, "immediate");
    }
    function G(t, n, o, a, i) {
      var l = t + "|" + n;
      (a != null && (l = l + "|" + a),
        !e[l] &&
          (i === "immediate"
            ? r("Qe2JsExposureFalcoEvent").logImmediately(function () {
                return { universe: t, unit_id: n, unit_type: o, param: a };
              })
            : i === "critical"
              ? r("Qe2JsExposureFalcoEvent").logCritical(function () {
                  return { universe: t, unit_id: n, unit_type: o, param: a };
                })
              : r("Qe2JsExposureFalcoEvent").log(function () {
                  return { universe: t, unit_id: n, unit_type: o, param: a };
                }),
          (e[l] = !0)));
    }
    ((l.logExposureForUser = s),
      (l.logExposureForUserImmediately = u),
      (l.logExposureForUserCritical = c),
      (l.logExposureForIGUser = d),
      (l.logExposureForIGUserImmediately = m),
      (l.logExposureForIGWebCookie = p),
      (l.logExposureForIGAccountFBIDV2 = _),
      (l.logExposureForIGWebCookieImmediately = f),
      (l.logExposureForIGWebCookieCritical = g),
      (l.logExposureForEmail = h),
      (l.logExposureForDatr = y),
      (l.logExposureForDatrImmediately = C),
      (l.logExposureForDatrCritical = b),
      (l.logExposureForOculusLoggedOut = v),
      (l.logExposureForOculusLoggedOutCookieID = S),
      (l.logExposureForPage = R),
      (l.logExposureForPageImmediately = L),
      (l.logExposureForPageCritical = E),
      (l.logExposureForPaymentAccountID = k),
      (l.logExposureForBusiness = I),
      (l.logExposureForBusinessCritical = T),
      (l.logExposureForGroup = D),
      (l.logExposureForPhabricatorDiff = x),
      (l.logExposureForPhoneNumber = $),
      (l.logExposureForScimCompanyID = P),
      (l.logExposureForAnalyticsEntityID = N),
      (l.logExposureForAdAccountID = M),
      (l.logExposureForAdAccountIDImmediately = w),
      (l.logExposureForAdAccountIDCritical = A),
      (l.logExposureForActingAccount = F),
      (l.logExposureForActingAccountImmediately = O),
      (l.logExposureForActingAccountCritical = B),
      (l.logExposureForMixedUserAndPage = W),
      (l.logExposureForCommerceMerchantSettings = q),
      (l.logExposureForShopifyApplicationInstallationID = U),
      (l.logExposure = V),
      (l.logExposureImmediately = H));
  },
  98,
);
