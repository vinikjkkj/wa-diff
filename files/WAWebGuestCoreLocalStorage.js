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
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestLastPageLoadTs,
        0,
      );
    }
    function S(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestLastPageLoadTs,
        String(e),
      );
    }
    function R() {
      return m(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
      );
    }
    function L(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
        String(e),
      );
    }
    function E() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        0,
      );
    }
    function k(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        String(e),
      );
    }
    function I() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
    }
    function T(e) {
      s(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, e);
    }
    function D() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, "");
      return e;
    }
    function x(e) {
      s(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, e);
    }
    function $() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LID, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
      throw r("err")("Invalid LID");
    }
    function P(e) {
      s(o("WAWebUserPrefsKeys").KEYS.LID, e);
    }
    function N(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestVerifiedPn, e);
    }
    function M() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestVerifiedPn,
        "",
      );
    }
    function w() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "",
      );
    }
    function A(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        e,
      );
    }
    function F() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        "",
      );
    }
    function O(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        e,
      );
    }
    function B() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        "",
      );
    }
    function W(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        e,
      );
    }
    function q() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        "",
      );
    }
    function U(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        e,
      );
    }
    function V() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        0,
      );
    }
    function H(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        String(e),
      );
    }
    function G() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        0,
      );
    }
    function z(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        String(e),
      );
    }
    function j(e, t) {
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
    function K() {
      u(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
      );
    }
    function Q() {
      var e;
      (u(
        (e = o("WAWebGuestCoreConsts")).GuestLocalStorageKeys
          .GuestPNVerificationStep,
      ),
        u(e.GuestLocalStorageKeys.GuestPNVerificationPhone),
        u(e.GuestLocalStorageKeys.GuestPNVerificationName),
        u(e.GuestLocalStorageKeys.GuestPNVerificationCountryIso),
        u(e.GuestLocalStorageKeys.GuestPNVerificationOtpRequestedAt),
        K());
    }
    var X = "US";
    function Y(e, t) {
      var n = t.steps,
        r = n[0];
      if (e === "") return r;
      for (var o of n) if (o === e) return o;
      return r;
    }
    function J(e, t) {
      t === void 0 && (t = X);
      var n = F(),
        r = B(),
        a = q() || t,
        i = w(),
        l = V(),
        s = G(),
        u = i === "otp" && n !== "",
        c = u && Date.now() - l < o("WAWebGuestCoreConsts").GUEST_OTP_EXPIRY_MS,
        d = u && s > Date.now();
      if (c || d) {
        var m = d ? Math.max(0, Math.ceil((s - Date.now()) / 1e3)) : 0;
        return {
          initialPhoneNumber: n,
          initialName: r,
          initialCountryIso: a,
          initialStep: Y("otp", e),
          remainingCooldownSeconds: m,
          shouldResume: !0,
        };
      }
      return i !== "" || n !== "" || l !== 0
        ? (Q(),
          {
            initialPhoneNumber: "",
            initialName: "",
            initialCountryIso: t,
            initialStep: Y("", e),
            remainingCooldownSeconds: 0,
            shouldResume: !1,
          })
        : (K(),
          {
            initialPhoneNumber: "",
            initialName: r,
            initialCountryIso: a,
            initialStep: Y(i, e),
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
      (l.getGuestLastPageLoadTs = v),
      (l.setGuestLastPageLoadTs = S),
      (l.isNotifGuestPrimerDialogDisabled = R),
      (l.setNotifGuestPrimerDialogDisabled = L),
      (l.getNotifGuestPrimerDialogDisplayCount = E),
      (l.setNotifGuestPrimerDialogDisplayCount = k),
      (l.getMaybeMeDevicePn = I),
      (l.setMaybeMeDevicePn = T),
      (l.getMaybeMeDisplayName = D),
      (l.setMaybeMeDisplayName = x),
      (l.getMeDeviceLidOrThrow = $),
      (l.setMeDeviceLid = P),
      (l.setGuestVerifiedPn = N),
      (l.getGuestVerifiedPn = M),
      (l.getGuestPNVerificationStep = w),
      (l.setGuestPNVerificationStep = A),
      (l.getGuestPNVerificationPhone = F),
      (l.setGuestPNVerificationPhone = O),
      (l.getGuestPNVerificationName = B),
      (l.setGuestPNVerificationName = W),
      (l.getGuestPNVerificationCountryIso = q),
      (l.setGuestPNVerificationCountryIso = U),
      (l.getGuestPNVerificationOtpRequestedAt = V),
      (l.setGuestPNVerificationOtpRequestedAt = H),
      (l.getGuestPNVerificationRateLimitEligibleAt = G),
      (l.setGuestPNVerificationRateLimitEligibleAt = z),
      (l.persistGuestPNVerificationOtpSession = j),
      (l.clearGuestPNVerificationRateLimitState = K),
      (l.clearGuestPNVerificationState = Q),
      (l.DEFAULT_RESTORE_COUNTRY_ISO = X),
      (l.getGuestPNVerificationRestoreState = J));
  },
  98,
);
