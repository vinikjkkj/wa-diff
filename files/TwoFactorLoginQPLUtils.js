__d(
  "TwoFactorLoginQPLUtils",
  ["QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      ADMIN_CODES_CODE_SUBMIT_INVALID: "ADMIN_CODES_CODE_SUBMIT_INVALID",
      ADMIN_CODES_CODE_SUBMIT_SUCCESS: "ADMIN_CODES_CODE_SUBMIT_SUCCESS",
      ADMIN_CODES_SCREEN_RENDERED: "ADMIN_CODES_SCREEN_RENDERED",
      AFAD_EXPIRED: "AFAD_EXPIRED",
      AFAD_LOGIN_ALLOWED: "AFAD_LOGIN_ALLOWED",
      AFAD_LOGIN_DENIED: "AFAD_LOGIN_DENIED",
      AFAD_REQUESTOR_SCREEN_RENDERED: "AFAD_REQUESTOR_SCREEN_RENDERED",
      BACKUP_CODES_CODE_SUBMIT_INVALID: "BACKUP_CODES_CODE_SUBMIT_INVALID",
      BACKUP_CODES_CODE_SUBMIT_SUCCESS: "BACKUP_CODES_CODE_SUBMIT_SUCCESS",
      BACKUP_CODES_SCREEN_RENDERED: "BACKUP_CODES_SCREEN_RENDERED",
      SECURITY_KEY_SCREEN_RENDERED: "SECURITY_KEY_SCREEN_RENDERED",
      SECURITY_KEY_SUBMIT_INVALID: "SECURITY_KEY_SUBMIT_INVALID",
      SECURITY_KEY_SUBMIT_SUCCESS: "SECURITY_KEY_SUBMIT_SUCCESS",
      SMS_CODE_SUBMIT_INVALID: "SMS_CODE_SUBMIT_INVALID",
      SMS_CODE_SUBMIT_SUCCESS: "SMS_CODE_SUBMIT_SUCCESS",
      SMS_SCREEN_RENDERED: "SMS_SCREEN_RENDERED",
      TOTP_CODE_SUBMIT_INVALID: "TOTP_CODE_SUBMIT_INVALID",
      TOTP_CODE_SUBMIT_SUCCESS: "TOTP_CODE_SUBMIT_SUCCESS",
      TOTP_SCREEN_RENDERED: "TOTP_SCREEN_RENDERED",
      TRY_ANOTHER_WAY_BUTTON_CLICKED: "TRY_ANOTHER_WAY_BUTTON_CLICKED",
      WHATSAPP_CODE_SUBMIT_INVALID: "WHATSAPP_CODE_SUBMIT_INVALID",
      WHATSAPP_CODE_SUBMIT_SUCCESS: "WHATSAPP_CODE_SUBMIT_SUCCESS",
      WHATSAPP_SCREEN_RENDERED: "WHATSAPP_SCREEN_RENDERED",
    };
    function s(e) {
      r("QPLUserFlow").start(r("qpl")._(241973805, "2841"), {
        annotations: {
          string: {
            encrypted_context: e,
            reason: "TWO_FACTOR_LOGIN_FLOW_STARTED",
          },
        },
      });
    }
    function u(e) {
      (r("QPLUserFlow").addPoint(r("qpl")._(241973805, "2841"), e),
        r("QPLUserFlow").endSuccess(r("qpl")._(241973805, "2841")));
    }
    function c(e) {
      r("QPLUserFlow").addPoint(r("qpl")._(241973805, "2841"), e);
    }
    function d(e, t) {
      (r("QPLUserFlow").addPoint(r("qpl")._(241973805, "2841"), e),
        r("QPLUserFlow").endFailure(r("qpl")._(241973805, "2841"), t));
    }
    function m(t) {
      return t === "ADMIN_CODES"
        ? {
            failed: e.ADMIN_CODES_CODE_SUBMIT_INVALID,
            success: e.ADMIN_CODES_CODE_SUBMIT_SUCCESS,
          }
        : t === "BACKUP_CODES"
          ? {
              failed: e.BACKUP_CODES_CODE_SUBMIT_INVALID,
              success: e.BACKUP_CODES_CODE_SUBMIT_SUCCESS,
            }
          : t === "SMS"
            ? {
                failed: e.SMS_CODE_SUBMIT_INVALID,
                success: e.SMS_CODE_SUBMIT_SUCCESS,
              }
            : t === "TOTP"
              ? {
                  failed: e.TOTP_CODE_SUBMIT_INVALID,
                  success: e.TOTP_CODE_SUBMIT_SUCCESS,
                }
              : t === "WHATSAPP"
                ? {
                    failed: e.WHATSAPP_CODE_SUBMIT_INVALID,
                    success: e.WHATSAPP_CODE_SUBMIT_SUCCESS,
                  }
                : null;
    }
    ((l.QPL_POINTS = e),
      (l.startQPLFlow = s),
      (l.addQPLPointWithSuccessMarkerEnd = u),
      (l.addQPLPoint = c),
      (l.addQPLPointWithFailureMarkerEnd = d),
      (l.getQPLPointsForMethod = m));
  },
  98,
);
