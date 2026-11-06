__d(
  "WAWebCanonicalEntRecoveryWam",
  [
    "WAWebCanonicalEntRecoveryCompanionWamEvent",
    "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
    "WAWebCanonicalGating",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebUserPrefsCanonical",
    "WAWebUserUtils",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2,
      s = "",
      u = !1;
    function c() {
      u ||
        ((u = !0),
        (s = o("WAWebUserPrefsCanonical").getCanonicalRegistrationTraceId()),
        s === "" &&
          ((s = d()),
          o("WAWebUserPrefsCanonical").setCanonicalRegistrationTraceId(s)));
    }
    function d() {
      return r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function m() {
      return r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function p() {
      var e = o("WAWebUserUtils").getMaybeMeDeviceId();
      return e != null ? String(e) : "";
    }
    function _(t, n, r, a, i, l) {
      c();
      var u = new (o(
        "WAWebCanonicalEntRecoveryCompanionWamEvent",
      ).CanonicalEntRecoveryCompanionWamEvent)({
        canonicalEntRecoveryCompanionEvent: t,
        canonicalEntEventCompanionMarker: n,
        canonicalEntRegistrationTraceId: s,
        canonicalEntRecoveryEventMetadata: JSON.stringify({ purpose: r }),
        deviceId: p(),
        familyDeviceId: "",
      });
      (o("WAWebCanonicalGating").isCanonicalAuthV2Enabled() &&
        (u.canonicalEntAuthVersion = e),
        a != null && (u.canonicalEntRequestId = a),
        i != null && (u.canonicalEntFeatureName = i),
        l != null && (u.canonicalEntRecoveryTimeoutSeconds = l),
        u.commit());
    }
    function f() {
      ((s = d()),
        o("WAWebUserPrefsCanonical").setCanonicalRegistrationTraceId(s),
        _(
          o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
            .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.COMPANION_REGISTERED,
          o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
            .START,
          "registration",
        ));
    }
    function g() {
      _(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.REQUEST_NONCE_FROM_PRIMARY,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        "recovery",
      );
    }
    function h() {
      _(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
          .RECEIVED_COMPANION_NONCE_FROM_PRIMARY,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        "recovery",
      );
    }
    function y(e, t) {
      _(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        e,
        t,
      );
    }
    function C(e, t) {
      _(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        e,
        t,
      );
    }
    function b(e, t) {
      _(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .ERROR,
        e,
        t,
      );
    }
    function v(e) {
      _(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CREDENTIALS_STORED,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        e,
      );
    }
    function S(t, n, r, a) {
      try {
        c();
        var i = new (o(
            "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
          ).CanonicalEntRecoveryCriticalEventWamEvent)({
            canonicalEntRecoveryCriticalEventName: t,
            canonicalEntRegistrationTraceId: s,
            deviceId: p(),
            familyDeviceId: "",
          }),
          l = { purpose: n };
        (r != null && (l.error = r),
          (i.canonicalEntRecoveryCriticalEventMetadata = JSON.stringify(l)),
          o("WAWebCanonicalGating").isCanonicalAuthV2Enabled() &&
            (i.canonicalEntAuthVersion = e),
          a != null && (i.canonicalEntRequestId = a),
          i.commit());
      } catch (e) {}
    }
    ((l.generateRequestId = m),
      (l.logCompanionEvent = _),
      (l.logCompanionRegistered = f),
      (l.logRequestNonceFromPrimary = g),
      (l.logReceivedNonceFromPrimary = h),
      (l.logExchangeNonceStart = y),
      (l.logExchangeNonceSuccess = C),
      (l.logExchangeNonceError = b),
      (l.logCredentialsStored = v),
      (l.logCriticalRecoveryEvent = S));
  },
  98,
);
