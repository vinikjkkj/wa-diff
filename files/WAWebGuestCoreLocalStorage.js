__d(
  "WAWebGuestCoreLocalStorage",
  [
    "WAWebGuestCoreConsts",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "WAWebWid",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      try {
        var t,
          n =
            (t =
              r("WAWebLocalStorage") == null
                ? void 0
                : r("WAWebLocalStorage").getItem(e)) != null
              ? t
              : null;
        if (n == null) return null;
        try {
          return String(JSON.parse(n));
        } catch (e) {
          return n;
        }
      } catch (e) {
        return null;
      }
    }
    function s(e, t) {
      try {
        r("WAWebLocalStorage") == null ||
          r("WAWebLocalStorage").setItem(e, JSON.stringify(t));
      } catch (e) {}
    }
    function u(e) {
      try {
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(e);
      } catch (e) {}
    }
    function c(t, n) {
      var r = e(t);
      return r != null ? r : n;
    }
    function d(t, n) {
      var r = e(t);
      if (r == null) return n;
      var o = Number(r);
      return Number.isFinite(o) ? o : n;
    }
    function m(t) {
      return e(t) === "true";
    }
    function p() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestActiveInviteCode,
        "",
      );
    }
    function _(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestActiveInviteCode,
        e,
      );
    }
    function f() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestDeviceId,
        "",
      );
    }
    function g(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestDeviceId, e);
    }
    function h() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestSessionId,
        "",
      );
    }
    function y(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestSessionId, e);
    }
    function C() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestExperienceType,
        "",
      );
    }
    function b(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestExperienceType, e);
    }
    function v() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestDeviceCountry,
        "",
      );
    }
    function S(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestDeviceCountry, e);
    }
    function R() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestCampaign,
        "",
      );
    }
    function L(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestCampaign, e);
    }
    function E() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestLastPageLoadTs,
        0,
      );
    }
    function k(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestLastPageLoadTs,
        String(e),
      );
    }
    function I() {
      return m(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
      );
    }
    function T(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
        String(e),
      );
    }
    function D() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        0,
      );
    }
    function x(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        String(e),
      );
    }
    function $() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
    }
    function P(e) {
      s(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, e);
    }
    function N() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, "");
      return e;
    }
    function M(e) {
      s(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, e);
    }
    function w() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LID, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
      throw r("err")("Invalid LID");
    }
    function A(e) {
      s(o("WAWebUserPrefsKeys").KEYS.LID, e);
    }
    function F(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestVerifiedPn, e);
    }
    function O() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestVerifiedPn,
        "",
      );
    }
    function B() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "",
      );
    }
    function W(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        e,
      );
    }
    function q() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        "",
      );
    }
    function U(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        e,
      );
    }
    function V() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        "",
      );
    }
    function H(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        e,
      );
    }
    function G() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        "",
      );
    }
    function z(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        e,
      );
    }
    function j() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        0,
      );
    }
    function K(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        String(e),
      );
    }
    function Q() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        0,
      );
    }
    function X(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        String(e),
      );
    }
    function Y(e, t) {
      (s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "otp",
      ),
        s(
          o("WAWebGuestCoreConsts").GuestLocalStorageKeys
            .GuestPNVerificationPhone,
          e,
        ),
        s(
          o("WAWebGuestCoreConsts").GuestLocalStorageKeys
            .GuestPNVerificationOtpRequestedAt,
          String(t),
        ));
    }
    function J() {
      u(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
      );
    }
    function Z() {
      var e;
      (u(
        (e = o("WAWebGuestCoreConsts")).GuestLocalStorageKeys
          .GuestPNVerificationStep,
      ),
        u(e.GuestLocalStorageKeys.GuestPNVerificationPhone),
        u(e.GuestLocalStorageKeys.GuestPNVerificationName),
        u(e.GuestLocalStorageKeys.GuestPNVerificationCountryIso),
        u(e.GuestLocalStorageKeys.GuestPNVerificationOtpRequestedAt),
        J());
    }
    var ee = "US";
    function te(e, t) {
      var n = t.steps,
        r = n[0];
      if (e === "") return r;
      for (var o of n) if (o === e) return o;
      return r;
    }
    function ne(e, t) {
      t === void 0 && (t = ee);
      var n = q(),
        r = V(),
        a = G() || t,
        i = B(),
        l = j(),
        s = Q(),
        u = i === "otp" && n !== "",
        c = u && Date.now() - l < o("WAWebGuestCoreConsts").GUEST_OTP_EXPIRY_MS,
        d = u && s > Date.now();
      if (c || d) {
        var m = d ? Math.max(0, Math.ceil((s - Date.now()) / 1e3)) : 0;
        return {
          initialPhoneNumber: n,
          initialName: r,
          initialCountryIso: a,
          initialStep: te("otp", e),
          remainingCooldownSeconds: m,
          shouldResume: !0,
        };
      }
      return i !== "" || n !== "" || l !== 0
        ? (Z(),
          {
            initialPhoneNumber: "",
            initialName: "",
            initialCountryIso: t,
            initialStep: te("", e),
            remainingCooldownSeconds: 0,
            shouldResume: !1,
          })
        : (J(),
          {
            initialPhoneNumber: "",
            initialName: r,
            initialCountryIso: a,
            initialStep: te(i, e),
            remainingCooldownSeconds: 0,
            shouldResume: !1,
          });
    }
    ((l.getActiveGuestInviteCode = p),
      (l.setActiveGuestInviteCode = _),
      (l.getGuestDeviceId = f),
      (l.setGuestDeviceId = g),
      (l.getGuestSessionId = h),
      (l.setGuestSessionId = y),
      (l.getGuestExperienceType = C),
      (l.setGuestExperienceType = b),
      (l.getGuestDeviceCountry = v),
      (l.setGuestDeviceCountry = S),
      (l.getGuestCampaign = R),
      (l.setGuestCampaign = L),
      (l.getGuestLastPageLoadTs = E),
      (l.setGuestLastPageLoadTs = k),
      (l.isNotifGuestPrimerDialogDisabled = I),
      (l.setNotifGuestPrimerDialogDisabled = T),
      (l.getNotifGuestPrimerDialogDisplayCount = D),
      (l.setNotifGuestPrimerDialogDisplayCount = x),
      (l.getMaybeMeDevicePn = $),
      (l.setMaybeMeDevicePn = P),
      (l.getMaybeMeDisplayName = N),
      (l.setMaybeMeDisplayName = M),
      (l.getMeDeviceLidOrThrow = w),
      (l.setMeDeviceLid = A),
      (l.setGuestVerifiedPn = F),
      (l.getGuestVerifiedPn = O),
      (l.getGuestPNVerificationStep = B),
      (l.setGuestPNVerificationStep = W),
      (l.getGuestPNVerificationPhone = q),
      (l.setGuestPNVerificationPhone = U),
      (l.getGuestPNVerificationName = V),
      (l.setGuestPNVerificationName = H),
      (l.getGuestPNVerificationCountryIso = G),
      (l.setGuestPNVerificationCountryIso = z),
      (l.getGuestPNVerificationOtpRequestedAt = j),
      (l.setGuestPNVerificationOtpRequestedAt = K),
      (l.getGuestPNVerificationRateLimitEligibleAt = Q),
      (l.setGuestPNVerificationRateLimitEligibleAt = X),
      (l.persistGuestPNVerificationOtpSession = Y),
      (l.clearGuestPNVerificationRateLimitState = J),
      (l.clearGuestPNVerificationState = Z),
      (l.DEFAULT_RESTORE_COUNTRY_ISO = ee),
      (l.getGuestPNVerificationRestoreState = ne));
  },
  98,
);
