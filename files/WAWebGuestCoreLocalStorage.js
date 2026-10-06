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
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestEventsPushEndpoint,
        "",
      );
    }
    function T(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestEventsPushEndpoint,
        e,
      );
    }
    function D() {
      return m(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
      );
    }
    function x(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisabled,
        String(e),
      );
    }
    function $() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        0,
      );
    }
    function P(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestNotifPrimerDialogDisplayCount,
        String(e),
      );
    }
    function N() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
    }
    function M(e) {
      s(o("WAWebUserPrefsKeys").KEYS.LAST_WID_MD, e);
    }
    function w() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, "");
      return e;
    }
    function A(e) {
      s(o("WAWebUserPrefsKeys").KEYS.ME_DISPLAY_NAME, e);
    }
    function F() {
      var e = c(o("WAWebUserPrefsKeys").KEYS.LID, "");
      if (r("WAWebWid").isWid(e)) return o("WAWebWidFactory").createWid(e);
      throw r("err")("Invalid LID");
    }
    function O(e) {
      s(o("WAWebUserPrefsKeys").KEYS.LID, e);
    }
    function B(e) {
      s(o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestVerifiedPn, e);
    }
    function W() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestVerifiedPn,
        "",
      );
    }
    function q() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        "",
      );
    }
    function U(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
        e,
      );
    }
    function V() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        "",
      );
    }
    function H(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationPhone,
        e,
      );
    }
    function G() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        "",
      );
    }
    function z(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationName,
        e,
      );
    }
    function j() {
      return c(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        "",
      );
    }
    function K(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationCountryIso,
        e,
      );
    }
    function Q() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        0,
      );
    }
    function X(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationOtpRequestedAt,
        String(e),
      );
    }
    function Y() {
      return d(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        0,
      );
    }
    function J(e) {
      s(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
        String(e),
      );
    }
    function Z(e, t) {
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
    function ee() {
      u(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys
          .GuestPNVerificationRateLimitEligibleAt,
      );
    }
    function te() {
      (u(
        o("WAWebGuestCoreConsts").GuestLocalStorageKeys.GuestPNVerificationStep,
      ),
        u(
          o("WAWebGuestCoreConsts").GuestLocalStorageKeys
            .GuestPNVerificationPhone,
        ),
        u(
          o("WAWebGuestCoreConsts").GuestLocalStorageKeys
            .GuestPNVerificationOtpRequestedAt,
        ),
        ee());
    }
    function ne() {
      (te(),
        u(
          o("WAWebGuestCoreConsts").GuestLocalStorageKeys
            .GuestPNVerificationName,
        ),
        u(
          o("WAWebGuestCoreConsts").GuestLocalStorageKeys
            .GuestPNVerificationCountryIso,
        ));
    }
    var re = "US";
    function oe(e, t) {
      var n = t.steps,
        r = n[0];
      if (e === "") return r;
      for (var o of n) if (o === e) return o;
      return r;
    }
    function ae(e, t) {
      t === void 0 && (t = re);
      var n = V(),
        r = G(),
        a = j() || t,
        i = q(),
        l = Q(),
        s = Y(),
        u = i === "otp" && n !== "",
        c = u && Date.now() - l < o("WAWebGuestCoreConsts").GUEST_OTP_EXPIRY_MS,
        d = u && s > Date.now();
      if (c || d) {
        var m = d ? Math.max(0, Math.ceil((s - Date.now()) / 1e3)) : 0;
        return {
          initialPhoneNumber: n,
          initialName: r,
          initialCountryIso: a,
          initialStep: oe("otp", e),
          remainingCooldownSeconds: m,
          shouldResume: !0,
        };
      }
      return i !== "" || n !== "" || l !== 0
        ? (ne(),
          {
            initialPhoneNumber: "",
            initialName: "",
            initialCountryIso: t,
            initialStep: oe("", e),
            remainingCooldownSeconds: 0,
            shouldResume: !1,
          })
        : (ee(),
          {
            initialPhoneNumber: "",
            initialName: r,
            initialCountryIso: a,
            initialStep: oe(i, e),
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
      (l.getGuestEventsPushEndpoint = I),
      (l.setGuestEventsPushEndpoint = T),
      (l.isNotifGuestPrimerDialogDisabled = D),
      (l.setNotifGuestPrimerDialogDisabled = x),
      (l.getNotifGuestPrimerDialogDisplayCount = $),
      (l.setNotifGuestPrimerDialogDisplayCount = P),
      (l.getMaybeMeDevicePn = N),
      (l.setMaybeMeDevicePn = M),
      (l.getMaybeMeDisplayName = w),
      (l.setMaybeMeDisplayName = A),
      (l.getMeDeviceLidOrThrow = F),
      (l.setMeDeviceLid = O),
      (l.setGuestVerifiedPn = B),
      (l.getGuestVerifiedPn = W),
      (l.getGuestPNVerificationStep = q),
      (l.setGuestPNVerificationStep = U),
      (l.getGuestPNVerificationPhone = V),
      (l.setGuestPNVerificationPhone = H),
      (l.getGuestPNVerificationName = G),
      (l.setGuestPNVerificationName = z),
      (l.getGuestPNVerificationCountryIso = j),
      (l.setGuestPNVerificationCountryIso = K),
      (l.getGuestPNVerificationOtpRequestedAt = Q),
      (l.setGuestPNVerificationOtpRequestedAt = X),
      (l.getGuestPNVerificationRateLimitEligibleAt = Y),
      (l.setGuestPNVerificationRateLimitEligibleAt = J),
      (l.persistGuestPNVerificationOtpSession = Z),
      (l.clearGuestPNVerificationRateLimitState = ee),
      (l.clearGuestPNVerificationOtpSession = te),
      (l.clearGuestPNVerificationState = ne),
      (l.DEFAULT_RESTORE_COUNTRY_ISO = re),
      (l.getGuestPNVerificationRestoreState = ae));
  },
  98,
);
