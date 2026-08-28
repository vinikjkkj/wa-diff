__d(
  "TwoFactorVerificationLogger",
  ["TwoStepVerificationEventFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("TwoStepVerificationEventFalcoEvent").log(function () {
        return e;
      });
    }
    var s = {
      logAlwaysConfirmItsMeClicked: function (n) {
        n != null &&
          e({ encrypted_context: n, event: "always_confirm_clicked" });
      },
      logCodeResponseInvalid: function (t, n) {},
      logCodeResponseValid: function (t) {},
      logCodeSubmitted: function (t) {},
      logIDVVerificationClicked: function (n) {
        (e({ encrypted_context: n, event: "id_verification_clicked" }),
          e({
            encrypted_context: n,
            event: "account_recovery_button_clicked",
          }));
      },
      logMethodPageShown: function (n, r) {
        r != null &&
          e({
            challenge: String(n),
            encrypted_context: r,
            event: "second_factor_screen_viewed",
          });
      },
      logMethodPickerOpened: function (n) {
        n != null &&
          e({ encrypted_context: n, event: "challenge_picker_shown" });
      },
      logMethodSelected: function (t) {},
      logRequestAdminCodeButtonClicked: function () {},
      logRequestAdminCodeFailed: function (t) {},
      logRequestAdminCodeStart: function () {},
      logRequestAdminCodeSuccessful: function () {},
      logSendAdminCodeConfirmSendCodeClicked: function () {},
      logSendAdminCodeFailed: function (t) {},
      logSendAdminCodeStart: function () {},
      logSendAdminCodeSuccessful: function () {},
      logSmsResendClicked: function () {},
      logSmsResendResponseFailed: function (t) {},
      logSmsResendResponseSuccessful: function () {},
      logTrustDevicePageShown: function (n) {
        n != null &&
          e({ encrypted_context: n, event: "trusted_device_screen_viewed" });
      },
      logTrustThisDeviceClicked: function (n) {
        n != null &&
          e({ encrypted_context: n, event: "trust_this_device_clicked" });
      },
      logTwoFactorLoginEnded: function () {},
      logTwoFactorLoginStart: function (t) {},
      logUnexpectedErrorAfterSessionIssued: function (t) {},
      logUnexpectedErrorBeforeSessionIssued: function (t) {},
    };
    l.TwoFactorVerificationLogger = s;
  },
  98,
);
