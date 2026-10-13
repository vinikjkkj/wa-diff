__d(
  "WAWebLinkDeviceQplHelpLinkEvent",
  [
    "$InternalEnum",
    "QuickPerformanceLogger",
    "WAWebAltDeviceLinkingApi",
    "WAWebAndroidTabletVisitId",
    "WAWebEnvironment",
    "WAWebLinkDeviceExperience",
    "WAWebPermanentStorage",
    "WAWebQplFlowWrapper",
    "WAWebUserPrefsKeys",
    "WAWebUserPrefsStore",
    "asyncToGeneratorRuntime",
    "isWAWebFeatureDetectionAndroidTablet",
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
        ANDROID_TABLET_OVERLAY_CONTROL: "android_tablet_overlay_control",
        ANDROID_TABLET_OVERLAY_COUNTRY: "android_tablet_overlay_country",
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
      u = r("qpl")._(891430409, "3269"),
      c = /^[A-Z]{2}$/;
    function d(e, t, n, r, o) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, a, i, l) {
            try {
              if (!r("WAWebEnvironment").isWeb) return;
              var s = babelHelpers.extends({}, i != null ? p(t, i, l) : null, {
                  md_link_device_experience_id: o(
                    "WAWebLinkDeviceExperience",
                  ).getWebCompanionLinkDeviceExperienceId(n),
                }),
                c = {
                  source_type: t,
                  code_type: o("WAWebAltDeviceLinkingApi").getPairingType(),
                };
              (a != null && (c.surface = a),
                i != null &&
                  ((
                    e || (e = r("QuickPerformanceLogger"))
                  ).setAlwaysOnSampleRate(u, 1),
                  (c.android_tablet_detection_source = i.detectionSource),
                  (c.android_tablet_model_source = i.modelSource)));
              var d = o("WAWebQplFlowWrapper").QPL.markerStart(u, {
                annotations: { int: s, string: c },
              });
              d.end(2);
            } catch (e) {
              o("WAWebQplFlowWrapper").QPL.markerEnd(u, 3);
            }
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      var r = {
          android_tablet_browser_linked_before: f() ? 1 : 0,
          android_tablet_detector_version: t.detectorVersion,
          android_tablet_visit_id: o(
            "WAWebAndroidTabletVisitId",
          ).getOrCreateAndroidTabletVisitId(),
        },
        a = _(e);
      a != null && (r.android_tablet_overlay_event = a);
      var i = g(n);
      i != null && (r.android_tablet_country = i);
      var l = o(
        "isWAWebFeatureDetectionAndroidTablet",
      ).getWAWebFeatureDetectionAndroidTabletScreenClass();
      return (l != null && (r.android_tablet_screen_class = l), r);
    }
    function _(e) {
      return e === s.ANDROID_TABLET_OVERLAY_SCREEN_LOADED
        ? 1
        : e === s.ANDROID_TABLET_OVERLAY_DOWNLOAD_APP
          ? 2
          : e === s.ANDROID_TABLET_OVERLAY_CONTINUE_TO_WEB
            ? 3
            : e === s.ANDROID_TABLET_OVERLAY_CLOSE
              ? 4
              : e === s.ANDROID_TABLET_OVERLAY_CONTROL
                ? 5
                : e === s.ANDROID_TABLET_OVERLAY_COUNTRY
                  ? 6
                  : null;
    }
    function f() {
      var e = r("WAWebUserPrefsStore").get(
        o("WAWebUserPrefsKeys").KEYS.PRESERVED_USER_KEYS,
        { storage: r("WAWebPermanentStorage") },
      );
      return Array.isArray(e) && e.length > 0;
    }
    function g(e) {
      return e == null || !c.test(e)
        ? null
        : e.charCodeAt(0) * 256 + e.charCodeAt(1);
    }
    ((l.WebcPairingScreenLinkType = s),
      (l.WAWebLinkDeviceQplHelpLinkEvent = d));
  },
  98,
);
