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
        EVENTS_GUEST_LIST: "events_guest_list",
        EVENTS_DETAILS: "events_details",
        EVENTS_HEADER_BANNER: "events_header_banner",
        EVENTS_DOWNLOAD: "events_download",
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
        ACCOUNT_LINKING: "account_linking",
        USERNAME_CLAIMED: "username_claimed",
        ERROR_POPUP: "error_popup",
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
        ENTER_NUMBER_SERVER_ERROR_RESPONSE:
          "enter_number_server_error_response",
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
        ENTER_CODE_SERVER_ERROR_RESPONSE: "enter_code_server_error_response",
        ENTER_CODE_REGISTRATION_SUCCESS: "enter_code_registration_success",
        GUEST_EXPERIENCE_LOADING_IMPRESSION:
          "guest_experience_loading_impression",
        GUEST_EXPERIENCE_CHAT_SCREEN_LANDING:
          "guest_experience_chat_screen_landing",
        GUEST_EXPERIENCE_CHAT_SCREEN_RESTORE:
          "guest_experience_chat_screen_restore",
        INVITE_CODE_FETCH_FAILED: "error_invite_code_fetch_failed",
        INVITE_CODE_INVALID: "error_invite_code_invalid",
        UNRELATED_GUEST_SESSION_DETECTED: "unrelated_guest_session_detected",
        UNRELATED_GUEST_SESSION_NUKING_ERROR:
          "error_unrelated_guest_session_nuking_error",
        GUEST_CLIENT_STATE_DIRTY_BIT_RECOVERY_SUCCESS:
          "guest_client_state_dirty_bit_recovery_success",
        GUEST_CLIENT_STATE_DIRTY_BIT_RECOVERY_ERROR:
          "error_guest_client_state_dirty_bit_recovery_error",
        STORAGE_INIT_FAILED: "error_storage_init_failed",
        GUEST_BACKEND_BOOTSTRAP_FAILED: "error_guest_backend_bootstrap_failed",
        GUEST_BACKEND_BOOTSTRAP_FAILED_DURING_DB_INIT:
          "error_guest_backend_bootstrap_failed_during_db_init",
        GUEST_BACKEND_LOGOUT_DUE_TO_SESSION_CONFLICT:
          "error_guest_backend_logout_due_to_session_conflict",
        GUEST_BACKEND_LOGOUT_DUE_TO_FAILURE_STANZA:
          "error_guest_backend_logout_due_to_failure_stanza",
        GUEST_LOGOUT_USER_INITIATED: "guest_logout_user_initiated",
        EVENTS_LANDING_IMPRESSION: "guest_events_landing_impression",
        EVENTS_DOWNLOAD_CTA_REDIRECT: "guest_events_download_cta_redirect",
        EVENTS_RSVP_CTA_CLICKED: "guest_events_rsvp_cta_clicked",
        EVENTS_RSVP_OPTION_SELECTED: "guest_events_rsvp_option_selected",
        EVENTS_RSVP_SUBMIT_ATTEMPTED: "guest_events_rsvp_submit_attempted",
        EVENTS_RSVP_SUBMIT_ENDED: "guest_events_rsvp_submit_ended",
        EVENTS_UPSELL_INTERACTION: "guest_events_upsell_interaction",
        EVENTS_RSVP_WA_WEB_CONFLICT: "guest_events_rsvp_wa_web_conflict",
        EVENTS_LOCATION_DIRECTIONS_CLICKED:
          "guest_events_location_directions_clicked",
        EVENTS_ADD_TO_CALENDAR_CLICKED: "guest_events_add_to_calendar_clicked",
        EVENTS_DESCRIPTION_READ_MORE_CLICKED:
          "guest_events_description_read_more_clicked",
        EVENTS_NOTIFICATION_PRIMER_SHOWN:
          "guest_events_notification_primer_shown",
        EVENTS_NOTIFICATION_PRIMER_ACTION:
          "guest_events_notification_primer_action",
        EVENTS_NOTIFICATION_PERMISSION_RESULT:
          "guest_events_notification_permission_result",
        EVENTS_REPORT_CTA_CLICKED: "guest_events_report_cta_clicked",
        EVENTS_REPORT_SUCCESS: "guest_events_report_success",
        EVENTS_REPORT_FAILURE: "guest_events_report_failure",
        EVENTS_REPORT_ABANDON: "guest_events_report_abandon",
        USERNAME_RESERVATION_RESOLVE_PROFILE_ERROR:
          "username_reservation_resolve_profile_error",
        USERNAME_RESERVATION_ACCOUNT_LINKING_IMPRESSION:
          "username_reservation_account_linking_impression",
        USERNAME_RESERVATION_ACCOUNT_LINKING_SUCCESS:
          "username_reservation_account_linking_success",
        USERNAME_RESERVATION_ACCOUNT_LINKING_ERROR:
          "username_reservation_account_linking_error",
        USERNAME_RESERVATION_ERROR_POPUP_OK_CLICKED:
          "username_reservation_error_popup_ok_clicked",
        USERNAME_RESERVATION_CLAIMED_IMPRESSION:
          "username_reservation_claimed_impression",
        USERNAME_RESERVATION_CLAIMED_GET_WHATSAPP_CLICKED:
          "username_reservation_claimed_get_whatsapp_clicked",
        USERNAME_RESERVATION_CLAIMED_REMIND_LATER_CLICKED:
          "username_reservation_claimed_remind_later_clicked",
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
        "GuestVerifiedPn",
        "GuestDeviceCountry",
        "GuestCampaign",
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
