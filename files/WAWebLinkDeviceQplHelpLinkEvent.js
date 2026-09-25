__d(
  "WAWebLinkDeviceQplHelpLinkEvent",
  [
    "$InternalEnum",
    "WAWebAltDeviceLinkingApi",
    "WAWebEnvironment",
    "WAWebLinkDeviceExperience",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        NEED_HELP_GETTING_STARTED: "need_help_getting_started",
        GET_STARTED: "get_started",
        LANDING_PROMO_GET_STARTED: "landing_promo_get_started",
        GET_HELP: "get_help",
        STAY_LOGGED_IN: "stay_logged_in",
        REG_PN_SCREEN_LOADED: "reg_pn_screen_loaded",
        REG_PN_SCREEN_CONTINUE_CLICKED: "reg_pn_screen_continue_clicked",
        REG_WACOM_PN_SCREEN_LOADED: "reg_wacom_pn_screen_loaded",
        REG_WACOM_PN_SCREEN_CONTINUE_CLICKED:
          "reg_wacom_pn_screen_continue_clicked",
        ANDROID_TABLET_OVERLAY_SCREEN_LOADED:
          "android_tablet_overlay_screen_loaded",
        ANDROID_TABLET_OVERLAY_CLOSE: "android_tablet_overlay_close",
        ANDROID_TABLET_OVERLAY_CONTINUE_TO_WEB:
          "android_tablet_overlay_continue_to_web",
        ANDROID_TABLET_OVERLAY_DOWNLOAD_APP:
          "android_tablet_overlay_download_app",
        APPLE_TOUCHSCREEN_OVERLAY_CONTINUE_TO_WEB:
          "apple_touchscreen_overlay_continue_to_web",
        HYBRID_REG_WELCOME_SCREEN_LOADED: "hybrid_reg_welcome_screen_loaded",
        HYBRID_REG_LOGIN_CLICKED: "hybrid_reg_login_clicked",
        HYBRID_REG_SIGNUP_CLICKED: "hybrid_reg_signup_clicked",
        REG_CONFIRMATION_SCREEN_LOADED: "reg_confirmation_screen_loaded",
        REG_CONFIRMATION_CONTINUE_CLICKED: "reg_confirmation_continue_clicked",
        REG_CONFIRMATION_RESEND_SMS_CLICKED:
          "reg_confirmation_resend_sms_clicked",
        REG_CONFIRMATION_WRONG_NUMBER_CLICKED:
          "reg_confirmation_wrong_number_clicked",
        REG_WACOM_CONFIRMATION_SCREEN_LOADED:
          "reg_wacom_confirmation_screen_loaded",
        REG_WACOM_CONFIRMATION_CONTINUE_CLICKED:
          "reg_wacom_confirmation_continue_clicked",
        REG_WACOM_CONFIRMATION_RESEND_SMS_CLICKED:
          "reg_wacom_confirmation_resend_sms_clicked",
        REG_WACOM_CONFIRMATION_WRONG_NUMBER_CLICKED:
          "reg_wacom_confirmation_wrong_number_clicked",
      }),
      s = r("qpl")._(891430409, "3269");
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            try {
              if (!r("WAWebEnvironment").isWeb) return;
              var i = {
                  md_link_device_experience_id: o(
                    "WAWebLinkDeviceExperience",
                  ).getWebCompanionLinkDeviceExperienceId(t),
                },
                l = {
                  source_type: e,
                  code_type: o("WAWebAltDeviceLinkingApi").getPairingType(),
                };
              (n != null && (l.surface = n),
                a != null &&
                  ((i.android_tablet_detector_version = a.detectorVersion),
                  (l.android_tablet_detection_source = a.detectionSource),
                  (l.android_tablet_model_source = a.modelSource)));
              var u = o("WAWebQplFlowWrapper").QPL.markerStart(s, {
                annotations: { int: i, string: l },
              });
              u.end(2);
            } catch (e) {
              o("WAWebQplFlowWrapper").QPL.markerEnd(s, 3);
            }
          },
        )),
        c.apply(this, arguments)
      );
    }
    ((l.WebcPairingScreenLinkType = e),
      (l.WAWebLinkDeviceQplHelpLinkEvent = u));
  },
  98,
);
