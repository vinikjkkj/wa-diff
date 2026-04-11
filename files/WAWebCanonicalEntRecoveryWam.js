__d(
  "WAWebCanonicalEntRecoveryWam",
  [
    "WAWebCanonicalEntRecoveryCompanionWamEvent",
    "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
    "WAWebWamEnumCanonicalEntEventMarker",
    "WAWebWamEnumCanonicalEntRecoveryCompanionEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "",
      s = 0,
      u = "";
    function c() {
      return crypto.randomUUID();
    }
    function d(e) {
      u = e;
    }
    function m() {
      return s++;
    }
    function p(t, n, r, a, i) {
      var l = new (o(
        "WAWebCanonicalEntRecoveryCompanionWamEvent",
      ).CanonicalEntRecoveryCompanionWamEvent)({
        canonicalEntRecoveryCompanionEvent: t,
        canonicalEntEventCompanionMarker: n,
        canonicalEntRegistrationTraceId: e,
        canonicalEntSequenceNumberSinceLastRegistration: m(),
        deviceId: u,
        familyDeviceId: "",
      });
      (r != null && (l.canonicalEntRequestId = r),
        a != null && (l.canonicalEntFeatureName = a),
        i != null && (l.canonicalEntRecoveryTimeoutSeconds = i),
        l.commit());
    }
    function _() {
      ((e = c()),
        (s = 0),
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
    function v(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        e,
      );
    }
    function S(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        e,
      );
    }
    function R(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.VALIDATE_ACCESS_TOKEN,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .ERROR,
        e,
      );
    }
    function L(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CRED_REQUEST_STARTED,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .START,
        e,
      );
    }
    function E(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
          .CRED_REQUEST_SUCCEEDED_FROM_STORAGE,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        e,
      );
    }
    function k(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT
          .CRED_REQUEST_SUCCEEDED_VIA_RECOVERY,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .SUCCESS,
        e,
      );
    }
    function I(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CRED_REQUEST_FAILED_TIMEOUT,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .ERROR,
        e,
      );
    }
    function T(e) {
      p(
        o("WAWebWamEnumCanonicalEntRecoveryCompanionEvent")
          .CANONICAL_ENT_RECOVERY_COMPANION_EVENT.CRED_REQUEST_FAILED_ERROR,
        o("WAWebWamEnumCanonicalEntEventMarker").CANONICAL_ENT_EVENT_MARKER
          .ERROR,
        e,
      );
    }
    function D(t, n, r) {
      var a = new (o(
        "WAWebCanonicalEntRecoveryCriticalEventWamEvent",
      ).CanonicalEntRecoveryCriticalEventWamEvent)({
        canonicalEntRecoveryCriticalEventName: t,
        canonicalEntRegistrationTraceId: e,
        canonicalEntSequenceNumberSinceLastRegistration: m(),
        deviceId: u,
        familyDeviceId: "",
      });
      (n != null && (a.canonicalEntRecoveryCriticalEventMetadata = n),
        r != null && (a.canonicalEntRequestId = r),
        a.commit());
    }
    ((l.setDeviceId = d),
      (l.logCompanionRegistered = _),
      (l.logRequestNonceFromPrimary = f),
      (l.logReceivedNonceFromPrimary = g),
      (l.logExchangeNonceStart = h),
      (l.logExchangeNonceSuccess = y),
      (l.logExchangeNonceError = C),
      (l.logCredentialsStored = b),
      (l.logValidateAccessTokenStart = v),
      (l.logValidateAccessTokenSuccess = S),
      (l.logValidateAccessTokenError = R),
      (l.logCredRequestStarted = L),
      (l.logCredRequestSucceededFromStorage = E),
      (l.logCredRequestSucceededViaRecovery = k),
      (l.logCredRequestFailedTimeout = I),
      (l.logCredRequestFailedError = T),
      (l.logCriticalRecoveryEvent = D));
  },
  98,
);
