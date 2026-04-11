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
        GET_HELP: "get_help",
        STAY_LOGGED_IN: "stay_logged_in",
        REG_PN_SCREEN_LOADED: "reg_pn_screen_loaded",
        REG_PN_SCREEN_CONTINUE_CLICKED: "reg_pn_screen_continue_clicked",
        REG_WACOM_PN_SCREEN_LOADED: "reg_wacom_pn_screen_loaded",
        REG_WACOM_PN_SCREEN_CONTINUE_CLICKED:
          "reg_wacom_pn_screen_continue_clicked",
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
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            if (!r("WAWebEnvironment").isWeb) return;
            var n = o("WAWebQplFlowWrapper").QPL.markerStart(s, {
              annotations: {
                int: {
                  md_link_device_experience_id: o(
                    "WAWebLinkDeviceExperience",
                  ).getWebCompanionLinkDeviceExperienceId(t),
                },
                string: {
                  source_type: e,
                  code_type: o("WAWebAltDeviceLinkingApi").getPairingType(),
                },
              },
            });
            n.end(2);
          } catch (e) {
            o("WAWebQplFlowWrapper").QPL.markerEnd(s, 3);
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.WebcPairingScreenLinkType = e),
      (l.WAWebLinkDeviceQplHelpLinkEvent = u));
  },
  98,
);
