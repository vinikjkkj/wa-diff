__d(
  "WAWebGuestLocalStorage",
  [
    "WAWebGuestConsts",
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
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestActiveInviteCode,
        "",
      );
    }
    function _(e) {
      s(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestActiveInviteCode, e);
    }
    function f() {
      return c(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestDeviceId, "");
    }
    function g(e) {
      s(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestDeviceId, e);
    }
    function h() {
      return c(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestSessionId, "");
    }
    function y(e) {
      s(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestSessionId, e);
    }
    function C() {
      return d(
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestLastPageLoadTs,
        0,
      );
    }
    function b(e) {
      s(
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestLastPageLoadTs,
        String(e),
      );
    }
    function v() {
      return m(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
      );
    }
    function S(e) {
      s(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
        String(e),
      );
    }
    function R() {
      return d(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        0,
      );
    }
    function L(e) {
      s(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        String(e),
      );
    }
    function E() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
    }
    function k() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, "");
      return e;
    }
    function I() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LID, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
      throw r("err")("Invalid LID");
    }
    function T() {
      return c(
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "",
      );
    }
    function D(e) {
      s(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationStep, e);
    }
    function x() {
      return c(
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationPhone,
        "",
      );
    }
    function $(e) {
      s(
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationPhone,
        e,
      );
    }
    function P() {
      return d(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        0,
      );
    }
    function N(e) {
      s(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        String(e),
      );
    }
    function M() {
      return d(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        0,
      );
    }
    function w(e) {
      s(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        String(e),
      );
    }
    function A(e, t) {
      (s(
        o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "otp",
      ),
        s(
          o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationPhone,
          e,
        ),
        s(
          o("WAWebGuestConsts").GuestLocalStorageKeys
            .GuestPNVerificationOtpRequestedAt,
          String(t),
        ));
    }
    function F() {
      u(
        o("WAWebGuestConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
      );
    }
    function O() {
      (u(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationStep),
        u(o("WAWebGuestConsts").GuestLocalStorageKeys.GuestPNVerificationPhone),
        u(
          o("WAWebGuestConsts").GuestLocalStorageKeys
            .GuestPNVerificationOtpRequestedAt,
        ),
        F());
    }
    function B() {
      var e = x(),
        t = T(),
        n = P(),
        r = M(),
        a = t === "otp" && e !== "",
        i = a && Date.now() - n < o("WAWebGuestConsts").GUEST_OTP_EXPIRY_MS,
        l = a && r > Date.now();
      if (i || l) {
        var s = l ? Math.max(0, Math.ceil((r - Date.now()) / 1e3)) : 0;
        return {
          initialPhoneNumber: e,
          initialStep: "otp",
          remainingCooldownSeconds: s,
          shouldResume: !0,
        };
      }
      return (
        (t !== "" || e !== "" || n !== 0) && O(),
        F(),
        {
          initialPhoneNumber: "",
          initialStep: "phone",
          remainingCooldownSeconds: 0,
          shouldResume: !1,
        }
      );
    }
    ((l.getActiveGuestInviteCode = p),
      (l.setActiveGuestInviteCode = _),
      (l.getGuestDeviceId = f),
      (l.setGuestDeviceId = g),
      (l.getGuestSessionId = h),
      (l.setGuestSessionId = y),
      (l.getGuestLastPageLoadTs = C),
      (l.setGuestLastPageLoadTs = b),
      (l.isNotifGuestPrimerDialogDisabled = v),
      (l.setNotifGuestPrimerDialogDisabled = S),
      (l.getNotifGuestPrimerDialogDisplayCount = R),
      (l.setNotifGuestPrimerDialogDisplayCount = L),
      (l.getMaybeMeDevicePn = E),
      (l.getMaybeMeDisplayName = k),
      (l.getMeDeviceLidOrThrow = I),
      (l.getGuestPNVerificationStep = T),
      (l.setGuestPNVerificationStep = D),
      (l.getGuestPNVerificationPhone = x),
      (l.setGuestPNVerificationPhone = $),
      (l.getGuestPNVerificationOtpRequestedAt = P),
      (l.setGuestPNVerificationOtpRequestedAt = N),
      (l.getGuestPNVerificationRateLimitEligibleAt = M),
      (l.setGuestPNVerificationRateLimitEligibleAt = w),
      (l.persistGuestPNVerificationOtpSession = A),
      (l.clearGuestPNVerificationRateLimitState = F),
      (l.clearGuestPNVerificationState = O),
      (l.getGuestPNVerificationRestoreState = B));
  },
  98,
);
