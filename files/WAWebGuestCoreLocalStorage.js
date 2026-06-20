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
    function N() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "",
      );
    }
    function M(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        e,
      );
    }
    function w() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        "",
      );
    }
    function A(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        e,
      );
    }
    function F() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        "",
      );
    }
    function O(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        e,
      );
    }
    function B() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        "",
      );
    }
    function W(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        e,
      );
    }
    function q() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        0,
      );
    }
    function U(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        String(e),
      );
    }
    function V() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        0,
      );
    }
    function H(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        String(e),
      );
    }
    function G(e, t) {
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
    function z() {
      u(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
      );
    }
    function j() {
      var e;
      (u(
        (e = o("WAWebGuestCoreConsts")).GuestLocalStorageKeys
          .GuestPNVerificationStep,
      ),
        u(e.GuestLocalStorageKeys.GuestPNVerificationPhone),
        u(e.GuestLocalStorageKeys.GuestPNVerificationName),
        u(e.GuestLocalStorageKeys.GuestPNVerificationCountryIso),
        u(e.GuestLocalStorageKeys.GuestPNVerificationOtpRequestedAt),
        z());
    }
    var K = "US";
    function Q(e, t) {
      var n = t.steps,
        r = n[0];
      if (e === "") return r;
      for (var o of n) if (o === e) return o;
      return r;
    }
    function X(e, t) {
      t === void 0 && (t = K);
      var n = w(),
        r = F(),
        a = B() || t,
        i = N(),
        l = q(),
        s = V(),
        u = i === "otp" && n !== "",
        c = u && Date.now() - l < o("WAWebGuestCoreConsts").GUEST_OTP_EXPIRY_MS,
        d = u && s > Date.now();
      if (c || d) {
        var m = d ? Math.max(0, Math.ceil((s - Date.now()) / 1e3)) : 0;
        return {
          initialPhoneNumber: n,
          initialName: r,
          initialCountryIso: a,
          initialStep: Q("otp", e),
          remainingCooldownSeconds: m,
          shouldResume: !0,
        };
      }
      return i !== "" || n !== "" || l !== 0
        ? (j(),
          {
            initialPhoneNumber: "",
            initialName: "",
            initialCountryIso: t,
            initialStep: Q("", e),
            remainingCooldownSeconds: 0,
            shouldResume: !1,
          })
        : (z(),
          {
            initialPhoneNumber: "",
            initialName: r,
            initialCountryIso: a,
            initialStep: Q(i, e),
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
      (l.getGuestPNVerificationStep = N),
      (l.setGuestPNVerificationStep = M),
      (l.getGuestPNVerificationPhone = w),
      (l.setGuestPNVerificationPhone = A),
      (l.getGuestPNVerificationName = F),
      (l.setGuestPNVerificationName = O),
      (l.getGuestPNVerificationCountryIso = B),
      (l.setGuestPNVerificationCountryIso = W),
      (l.getGuestPNVerificationOtpRequestedAt = q),
      (l.setGuestPNVerificationOtpRequestedAt = U),
      (l.getGuestPNVerificationRateLimitEligibleAt = V),
      (l.setGuestPNVerificationRateLimitEligibleAt = H),
      (l.persistGuestPNVerificationOtpSession = G),
      (l.clearGuestPNVerificationRateLimitState = z),
      (l.clearGuestPNVerificationState = j),
      (l.DEFAULT_RESTORE_COUNTRY_ISO = K),
      (l.getGuestPNVerificationRestoreState = X));
  },
  98,
);
