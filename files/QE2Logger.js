__d(
  "QE2Logger",
  ["Qe2JsExposureFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {};
    function s(e, t, n) {
      H(e, t != null ? t : "", 9, n);
    }
    function u(e, t) {
      H(e, t != null ? t : "", 9, null, "immediate");
    }
    function c(e) {
      H(e, "", 32);
    }
    function d(e) {
      H(e, "", 32, null, "immediate");
    }
    function m(e) {
      H(e, "", 54);
    }
    function p(e, t) {
      H(e, t, 126);
    }
    function _(e, t) {
      H(e, "", 54, t, "immediate");
    }
    function f(e, t) {
      H(e, "", 54, t, "critical");
    }
    function g(e, t) {
      H(e, t, 3);
    }
    function h(e) {
      H(e, "", 5);
    }
    function y(e) {
      H(e, "", 5, null, "immediate");
    }
    function C(e, t) {
      (t === void 0 && (t = null), H(e, "", 5, t, "critical"));
    }
    function b(e) {
      H(e, "", 31);
    }
    function v(e) {
      H(e, "", 98);
    }
    function S(e, t) {
      H(e, t, 7);
    }
    function R(e, t) {
      H(e, t, 7, null, "immediate");
    }
    function L(e, t) {
      H(e, t, 7, null, "critical");
    }
    function E(e, t) {
      H(e, t, 55);
    }
    function k(e, t) {
      H(e, t, 17);
    }
    function I(e, t) {
      H(e, t, 17, null, "critical");
    }
    function T(e, t) {
      H(e, t, 25);
    }
    function D(e, t) {
      H(e, t, 115);
    }
    function x(e, t) {
      H(e, t, 8);
    }
    function $(e, t) {
      H(e, t, 22);
    }
    function P(e, t) {
      H(e, t, 27);
    }
    function N(e, t) {
      H(e, t, 0);
    }
    function M(e, t) {
      H(e, t, 0, null, "immediate");
    }
    function w(e, t) {
      H(e, t, 0, null, "critical");
    }
    function A(e, t, n) {
      H(e, t != null ? t : "", 89, n);
    }
    function F(e, t) {
      H(e, t != null ? t : "", 89, null, "immediate");
    }
    function O(e, t) {
      H(e, t != null ? t : "", 89, null, "critical");
    }
    function B(e, t) {
      H(e, t, 60);
    }
    function W(e, t) {
      H(e, t, 90);
    }
    function q(e, t) {
      H(e, t, 144);
    }
    function U(e, t, n) {
      H(e, t, n);
    }
    function V(e, t, n) {
      H(e, t, n, null, "immediate");
    }
    function H(t, n, o, a, i) {
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
      (l.logExposureForIGUser = c),
      (l.logExposureForIGUserImmediately = d),
      (l.logExposureForIGWebCookie = m),
      (l.logExposureForIGAccountFBIDV2 = p),
      (l.logExposureForIGWebCookieImmediately = _),
      (l.logExposureForIGWebCookieCritical = f),
      (l.logExposureForEmail = g),
      (l.logExposureForDatr = h),
      (l.logExposureForDatrImmediately = y),
      (l.logExposureForDatrCritical = C),
      (l.logExposureForOculusLoggedOut = b),
      (l.logExposureForOculusLoggedOutCookieID = v),
      (l.logExposureForPage = S),
      (l.logExposureForPageImmediately = R),
      (l.logExposureForPageCritical = L),
      (l.logExposureForPaymentAccountID = E),
      (l.logExposureForBusiness = k),
      (l.logExposureForBusinessCritical = I),
      (l.logExposureForGroup = T),
      (l.logExposureForPhabricatorDiff = D),
      (l.logExposureForPhoneNumber = x),
      (l.logExposureForScimCompanyID = $),
      (l.logExposureForAnalyticsEntityID = P),
      (l.logExposureForAdAccountID = N),
      (l.logExposureForAdAccountIDImmediately = M),
      (l.logExposureForAdAccountIDCritical = w),
      (l.logExposureForActingAccount = A),
      (l.logExposureForActingAccountImmediately = F),
      (l.logExposureForActingAccountCritical = O),
      (l.logExposureForMixedUserAndPage = B),
      (l.logExposureForCommerceMerchantSettings = W),
      (l.logExposureForShopifyApplicationInstallationID = q),
      (l.logExposure = U),
      (l.logExposureImmediately = V));
  },
  98,
);
