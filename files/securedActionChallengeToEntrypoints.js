__d(
  "securedActionChallengeToEntrypoints",
  [
    "SecuredActionBlockDialog.entrypoint",
    "SecuredActionChallengeCDSPasswordDialog.entrypoint",
    "SecuredActionChallengePasswordDialog.entrypoint",
    "SecuredActionNoChallengeAvailableCDSDialog.entrypoint",
    "SecuredActionReauthDialog.entrypoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      switch (e) {
        case "block":
          return {
            CDS: r("SecuredActionBlockDialog.entrypoint"),
            default: r("SecuredActionBlockDialog.entrypoint"),
          };
        case "no_challenge_available":
          return {
            CDS: r("SecuredActionNoChallengeAvailableCDSDialog.entrypoint"),
            default: r("SecuredActionNoChallengeAvailableCDSDialog.entrypoint"),
          };
        case "password":
          return {
            CDS: r("SecuredActionChallengeCDSPasswordDialog.entrypoint"),
            default: r("SecuredActionChallengePasswordDialog.entrypoint"),
          };
        case "allow_but_deny_auto_confirm":
        case "captcha_cardnumber":
        case "captcha_comment":
        case "captcha_email":
        case "captcha_security_key":
        case "captcha_sms":
        case "captcha_smsscarce":
        case "captcha_templar":
        case "captcha_whatsapp":
        case "captcha_work_email":
        case "established_device":
        case "fido":
        case "first_factor":
        case "mfs_totp":
        case "mwa_business":
        case "new_account":
        case "two_fac_passkey_only":
        case "password_continue_only":
        case "password_redirect":
        case "post_login_delta":
        case "reauth":
        case "step_up":
        case "test":
        case "two_fac_with_password_fallback":
        case "2fac":
        case "2fac_for_biz":
        case "2fac_setup":
        case "work_sso":
        case "work_sso_embedded":
          return null;
      }
    }
    function s(e) {
      switch (e) {
        case "reauth":
          return {
            CDS: r("SecuredActionReauthDialog.entrypoint"),
            default: r("SecuredActionReauthDialog.entrypoint"),
          };
        case "allow_but_deny_auto_confirm":
        case "block":
        case "captcha_cardnumber":
        case "captcha_comment":
        case "captcha_email":
        case "captcha_security_key":
        case "captcha_sms":
        case "captcha_smsscarce":
        case "captcha_templar":
        case "captcha_whatsapp":
        case "captcha_work_email":
        case "established_device":
        case "fido":
        case "first_factor":
        case "mfs_totp":
        case "mwa_business":
        case "new_account":
        case "no_challenge_available":
        case "two_fac_passkey_only":
        case "password":
        case "password_continue_only":
        case "password_redirect":
        case "post_login_delta":
        case "step_up":
        case "test":
        case "two_fac_with_password_fallback":
        case "2fac":
        case "2fac_for_biz":
        case "2fac_setup":
        case "work_sso":
        case "work_sso_embedded":
          return null;
      }
    }
    ((l.securedActionChallengeToEntrypointsWithAccountID = e),
      (l.securedActionChallengeToEntrypointsWithEncryptedContext = s));
  },
  98,
);
