__d(
  "WAWebCanonicalEntRecoveryWam",
  [
    "WAWebCanonicalEntRecoveryCompanionWamEvent",
    "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
    "WAWebUserPrefsCanonical",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "",
      s = !1;
    function u() {
      s ||
        ((s = !0),
        (e = o("WAWebUserPrefsCanonical").getCanonicalRegistrationTraceId()),
        e === "" &&
          ((e = c()),
          o("WAWebUserPrefsCanonical").setCanonicalRegistrationTraceId(e)));
    }
    function c() {
      return crypto.randomUUID();
    }
    function d() {
      return crypto.randomUUID();
    }
    function m() {
      var e = o("WAWebUserPrefsMeUser").getMaybeMeDeviceId();
      return e != null ? String(e) : "";
    }
    function p(t, n, r, a, i) {
      u();
      var l = new (o(
        "WAWebCanonicalEntRecoveryCompanionWamEvent",
      ).CanonicalEntRecoveryCompanionWamEvent)({
        canonicalEntRecoveryCompanionEvent: t,
        canonicalEntEventCompanionMarker: n,
        canonicalEntRegistrationTraceId: e,
        deviceId: m(),
        familyDeviceId: "",
      });
      (r != null && (l.canonicalEntRequestId = r),
        a != null && (l.canonicalEntFeatureName = a),
        i != null && (l.canonicalEntRecoveryTimeoutSeconds = i),
        l.commit());
    }
    function _() {
      ((e = c()),
        o("WAWebUserPrefsCanonical").setCanonicalRegistrationTraceId(e),
        p(
          o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
            .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.COMPANION_REGISTERED,
          o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
            .START,
        ));
    }
    function f() {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.REQUEST_NONCE_FROM_PRIMARY,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
      );
    }
    function g() {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
          .RECEIVED_COMPANION_NONCE_FROM_PRIMARY,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
      );
    }
    function h(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        e,
      );
    }
    function y(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        e,
      );
    }
    function C(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.EXCHANGE_NONCE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .ERROR,
        e,
      );
    }
    function b() {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CREDENTIALS_STORED,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
      );
    }
    function v(t, n, r, a) {
      try {
        u();
        var i = new (o(
            "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
          ).CanonicalEntRecoveryCriticalEventWamEvent)({
            canonicalEntRecoveryCriticalEventName: t,
            canonicalEntRegistrationTraceId: e,
            deviceId: m(),
            familyDeviceId: "",
          }),
          l = { purpose: n };
        (r != null && (l.error = r),
          (i.canonicalEntRecoveryCriticalEventMetadata = JSON.stringify(l)),
          a != null && (i.canonicalEntRequestId = a),
          i.commit());
      } catch (e) {}
    }
    ((l.generateRequestId = d),
      (l.logCompanionRegistered = _),
      (l.logRequestNonceFromPrimary = f),
      (l.logReceivedNonceFromPrimary = g),
      (l.logExchangeNonceStart = h),
      (l.logExchangeNonceSuccess = y),
      (l.logExchangeNonceError = C),
      (l.logCredentialsStored = b),
      (l.logCriticalRecoveryEvent = v));
  },
  98,
);
