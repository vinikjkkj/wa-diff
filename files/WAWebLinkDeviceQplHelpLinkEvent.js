__d(
  "WAWebLinkDeviceQplHelpLinkEvent",
  [
    "$InternalEnum",
    "QuickPerformanceLogger",
    "WAWebAltDeviceLinkingApi",
    "WAWebEnvironment",
    "WAWebLinkDeviceExperience",
    "WAWebQplFlowWrapper",
    "asyncToGeneratorRuntime",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum")({
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
      u = r("qpl")._(891430409, "3269");
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i) {
            try {
              if (!r("WAWebEnvironment").isWeb) return;
              var l = {
                  md_link_device_experience_id: o(
                    "WAWebLinkDeviceExperience",
                  ).getWebCompanionLinkDeviceExperienceId(n),
                },
                s = {
                  source_type: t,
                  code_type: o("WAWebAltDeviceLinkingApi").getPairingType(),
                };
              (a != null && (s.surface = a),
                i != null &&
                  ((
                    e || (e = r("QuickPerformanceLogger"))
                  ).setAlwaysOnSampleRate(u, 1),
                  (l.android_tablet_detector_version = i.detectorVersion),
                  (s.android_tablet_detection_source = i.detectionSource),
                  (s.android_tablet_model_source = i.modelSource)));
              var c = o("WAWebQplFlowWrapper").QPL.markerStart(u, {
                annotations: { int: l, string: s },
              });
              c.end(2);
            } catch (e) {
              o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3);
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    ((l.WebcPairingScreenLinkType = s),
      (l.WAWebLinkDeviceQplHelpLinkEvent = c));
  },
  98,
);
