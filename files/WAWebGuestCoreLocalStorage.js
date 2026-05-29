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
    function T() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, "");
      return e;
    }
    function D() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LID, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
      throw r("err")("Invalid LID");
    }
    function x() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "",
      );
    }
    function $(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        e,
      );
    }
    function P() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        "",
      );
    }
    function N(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        e,
      );
    }
    function M() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        "",
      );
    }
    function w(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        e,
      );
    }
    function A() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        "",
      );
    }
    function F(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        e,
      );
    }
    function O() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        0,
      );
    }
    function B(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        String(e),
      );
    }
    function W() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        0,
      );
    }
    function q(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        String(e),
      );
    }
    function U(e, t) {
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
    function V() {
      u(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
      );
    }
    function H() {
      var e;
      (u(
        (e = o("WAWebGuestCoreConsts")).GuestLocalStorageKeys
          .GuestPNVerificationStep,
      ),
        u(e.GuestLocalStorageKeys.GuestPNVerificationPhone),
        u(e.GuestLocalStorageKeys.GuestPNVerificationName),
        u(e.GuestLocalStorageKeys.GuestPNVerificationCountryIso),
        u(e.GuestLocalStorageKeys.GuestPNVerificationOtpRequestedAt),
        V());
    }
    var G = "US";
    function z(e, t) {
      var n = t.steps,
        r = n[0];
      if (e === "") return r;
      for (var o of n) if (o === e) return o;
      return r;
    }
    function j(e, t) {
      t === void 0 && (t = G);
      var n = P(),
        r = M(),
        a = A() || t,
        i = x(),
        l = O(),
        s = W(),
        u = i === "otp" && n !== "",
        c = u && Date.now() - l < o("WAWebGuestCoreConsts").GUEST_OTP_EXPIRY_MS,
        d = u && s > Date.now();
      if (c || d) {
        var m = d ? Math.max(0, Math.ceil((s - Date.now()) / 1e3)) : 0;
        return {
          initialPhoneNumber: n,
          initialName: r,
          initialCountryIso: a,
          initialStep: z("otp", e),
          remainingCooldownSeconds: m,
          shouldResume: !0,
        };
      }
      return i !== "" || n !== "" || l !== 0
        ? (H(),
          {
            initialPhoneNumber: "",
            initialName: "",
            initialCountryIso: t,
            initialStep: z("", e),
            remainingCooldownSeconds: 0,
            shouldResume: !1,
          })
        : (V(),
          {
            initialPhoneNumber: "",
            initialName: r,
            initialCountryIso: a,
            initialStep: z(i, e),
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
      (l.getMaybeMeDisplayName = T),
      (l.getMeDeviceLidOrThrow = D),
      (l.getGuestPNVerificationStep = x),
      (l.setGuestPNVerificationStep = $),
      (l.getGuestPNVerificationPhone = P),
      (l.setGuestPNVerificationPhone = N),
      (l.getGuestPNVerificationName = M),
      (l.setGuestPNVerificationName = w),
      (l.getGuestPNVerificationCountryIso = A),
      (l.setGuestPNVerificationCountryIso = F),
      (l.getGuestPNVerificationOtpRequestedAt = O),
      (l.setGuestPNVerificationOtpRequestedAt = B),
      (l.getGuestPNVerificationRateLimitEligibleAt = W),
      (l.setGuestPNVerificationRateLimitEligibleAt = q),
      (l.persistGuestPNVerificationOtpSession = U),
      (l.clearGuestPNVerificationRateLimitState = V),
      (l.clearGuestPNVerificationState = H),
      (l.DEFAULT_RESTORE_COUNTRY_ISO = G),
      (l.getGuestPNVerificationRestoreState = j));
  },
  98,
);
