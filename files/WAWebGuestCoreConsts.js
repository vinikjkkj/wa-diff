__d(
  "WAWebGuestCoreConsts",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum")).Mirrored([
        "ERROR",
        "LANDING",
        "CHAT",
        "DOWNLOAD_CTA",
        "LOADING",
        "CONTACT_INFO",
        "SECURITY_CODE_VERIFICATION",
        "SESSION_CONFLICT",
      ]),
      s = e.Mirrored([
        "IOS_APPCLIP",
        "ANDROID_BROWSER",
        "IOS_BROWSER",
        "UNKNOWN",
      ]),
      u = e({
        AUDIO_CALL: "audio_call",
        VIDEO_CALL: "video_call",
        AUDIO_VIDEO_CALL: "audio_video_call",
        ATTACHMENT: "attachment",
        LANDING_SCREEN: "landing_screen",
        LOADING_SCREEN: "loading_screen",
        DOWNLOAD: "download",
        NEW_INVITE: "new_invite",
        SESSION_REOPEN: "session_reopen",
        PUSH_NOTIF_PRIMER: "push_notif_primer",
      }),
      c = e({
        APPCLIP_LOADING: "app_clip_loading",
        EMPTY: "",
        LANDING: "reg_route_selector",
        TOS: "guest_name_entry_and_tos_popup",
        CHAT: "guest_experience_chat_screen",
        LOADING: "guest_experience_loading",
        ENTER_NAME: "profile_photo",
        ENTER_NUMBER: "enter_number",
        CHOOSE_COUNTRY: "choose_country",
        ENTER_CODE: "verify_sms",
      }),
      d = e({
        REG_ROUTE_SELECTOR_IMPRESSION: "reg_route_selector_impression",
        REG_ROUTE_SELECTOR_DOWNLOAD_WHATSAPP:
          "reg_route_selector_download_whatsapp",
        REG_ROUTE_SELECTOR_CHAT_AS_GUEST: "reg_route_selector_chat_as_guest",
        ENTER_NAME_IMPRESSION: "enter_name_impression",
        ENTER_NAME_NEXT_CLICKED: "enter_name_next_clicked",
        ENTER_NUMBER_IMPRESSION: "enter_number_impression",
        ENTER_NUMBER_NEXT_CLICKED: "enter_number_next_clicked",
        ENTER_NUMBER_ERROR: "enter_number_error",
        ENTER_NUMBER_COUNTRY_PICKER_OPENED:
          "enter_number_country_picker_opened",
        ENTER_NUMBER_COUNTRY_PICKER_SELECTED:
          "enter_number_country_picker_selected",
        SERVER_SENT_INVITE_REGISTRATION_ATTEMPTED:
          "server_sent_invite_registration_attempted",
        SERVER_SENT_INVITE_REGISTRATION_SUCCESS:
          "server_sent_invite_registration_success",
        SERVER_SENT_INVITE_FALLBACK_TO_OTP:
          "server_sent_invite_fallback_to_otp",
        ENTER_CODE_IMPRESSION: "enter_code_impression",
        ENTER_CODE_REG_ATTEMPTED: "enter_code_reg_attempted",
        ENTER_CODE_WRONG_NUMBER_CLICKED: "enter_code_wrong_number_clicked",
        ENTER_CODE_RESEND_CLICKED: "enter_code_resend_clicked",
        ENTER_CODE_ERROR: "enter_code_error",
        ENTER_CODE_REGISTRATION_SUCCESS: "enter_code_registration_success",
        GUEST_EXPERIENCE_LOADING_IMPRESSION:
          "guest_experience_loading_impression",
        GUEST_EXPERIENCE_CHAT_SCREEN_LANDING:
          "guest_experience_chat_screen_landing",
        INVITE_CODE_FETCH_FAILED: "error_invite_code_fetch_failed",
        INVITE_CODE_INVALID: "error_invite_code_invalid",
        STORAGE_INIT_FAILED: "error_storage_init_failed",
        GUEST_BACKEND_BOOTSTRAP_FAILED: "error_guest_backend_bootstrap_failed",
        GUEST_BACKEND_BOOTSTRAP_FAILED_DURING_DB_INIT:
          "error_guest_backend_bootstrap_failed_during_db_init",
        GUEST_BACKEND_LOGOUT_DUE_TO_SESSION_CONFLICT:
          "error_guest_backend_logout_due_to_session_conflict",
        GUEST_BACKEND_LOGOUT_DUE_TO_FAILURE_STANZA:
          "error_guest_backend_logout_due_to_failure_stanza",
        GUEST_LOGOUT_USER_INITIATED: "guest_logout_user_initiated",
      }),
      m = e.Mirrored([
        "GuestActiveInviteCode",
        "GuestDeviceId",
        "GuestSessionId",
        "GuestLastPageLoadTs",
        "GuestNotifPrimerDialogDisabled",
        "GuestNotifPrimerDialogDisplayCount",
        "GuestPNVerificationStep",
        "GuestPNVerificationPhone",
        "GuestPNVerificationName",
        "GuestPNVerificationCountryIso",
        "GuestPNVerificationOtpRequestedAt",
        "GuestPNVerificationRateLimitEligibleAt",
        "GuestExperienceType",
      ]),
      p = 720 * 60 * 1e3,
      _ = 3,
      f = 180 * 1e3;
    ((i.GuestScreens = l),
      (i.GuestMobilePlatform = s),
      (i.AppClipNativeUpsellEntrypoints = u),
      (i.GuestFunnelLoggingScreenName = c),
      (i.GuestFunnelLoggingEvent = d),
      (i.GuestLocalStorageKeys = m),
      (i.GUEST_SESSION_REOPEN_UPSELL_TIMEOUT_IN_MS = p),
      (i.GUEST_NOTIF_PRIMER_MAX_DISPLAY_COUNT = _),
      (i.GUEST_OTP_EXPIRY_MS = f));
  },
  66,
);
