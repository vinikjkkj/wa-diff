__d(
  "WAWebGuestConsts",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e,
      l = (e = n("$InternalEnum")).Mirrored([
        "ERROR",
        "LANDING",
        "FAKE_CHAT_LANDING",
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
      }),
      d = e({
        REG_ROUTE_SELECTOR_IMPRESSION: "reg_route_selector_impression",
        REG_ROUTE_SELECTOR_DOWNLOAD_WHATSAPP:
          "reg_route_selector_download_whatsapp",
        REG_ROUTE_SELECTOR_CHAT_AS_GUEST: "reg_route_selector_chat_as_guest",
        GUEST_NAME_ENTRY_AND_TOS_POPUP_IMPRESSION:
          "guest_name_entry_and_tos_popup_impression",
        GUEST_NAME_ENTRY_AND_TOS_POPUP_ENTER_NAME:
          "guest_name_entry_and_tos_popup_enter_name",
        GUEST_NAME_ENTRY_AND_TOS_POPUP_ACCEPT_TOS:
          "guest_name_entry_and_tos_popup_accept_tos",
        GUEST_EXPERIENCE_LOADING_IMPRESSION:
          "guest_experience_loading_impression",
        GUEST_EXPERIENCE_CHAT_SCREEN_LANDING:
          "guest_experience_chat_screen_landing",
        INVITE_CODE_FETCH_FAILED: "error_invite_code_fetch_failed",
        INVITE_CODE_INVALID: "error_invite_code_invalid",
        GUEST_REG_FAILED: "error_guest_reg_failed",
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
        "GuestPNVerificationOtpRequestedAt",
        "GuestPNVerificationRateLimitEligibleAt",
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
