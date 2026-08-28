__d(
  "CAAPasskeyLoggingEvent",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    var e = n("$InternalEnum")({
        PASSKEY_NUX_SHOWN: "passkey_nux_shown",
        PASSKEY_NUX_CONTINUED: "passkey_nux_continued",
        PASSKEY_NUX_CANCELLED: "passkey_nux_cancelled",
        PASSKEY_OS_CREATION_TRIGGERED: "passkey_os_creation_triggered",
        PASSKEY_OS_CREATION_SUCCESS: "passkey_os_creation_success",
        PASSKEY_OS_CREATION_CANCEL: "passkey_os_creation_cancel",
        PASSKEY_OS_CREATION_ERROR: "passkey_os_creation_error",
        PASSKEY_CLIENT_UNSUPPORTED: "passkey_client_unsupported",
        PASSKEY_CREATION_ASYNC_SUCCESS: "passkey_creation_async_success",
        PASSKEY_CREATION_ASYNC_NATIVE_PROP_CALLBACK_INIT:
          "passkey_creation_async_native_prop_callback_init",
        PASSKEY_CREATION_ASYNC_NATIVE_PROP_CALLBACK_SUCCESS:
          "passkey_creation_async_native_prop_callback_success",
        PASSKEY_CREATION_ASYNC_FAIL: "passkey_creation_async_fail",
        PASSKEY_CREATION_TOPGUN_TRIGGERED: "passkey_creation_topgun_triggered",
        PASSKEY_CREATION_TOPGUN_CANCEL: "passkey_creation_topgun_cancel",
        PASSKEY_CREATION_TOPGUN_SKIPPED: "passkey_creation_topgun_skipped",
        PASSKEY_CREATION_TOPGUN_SUCCESS: "passkey_creation_topgun_success",
        PASSKEY_CREATION_TOPGUN_FAILURE: "passkey_creation_topgun_failure",
        PASSKEY_CLIENT_SAVE_ERROR: "passkey_client_save_error",
        PASSKEY_CLIENT_FETCH_CHALLENGE_ERROR:
          "passkey_client_fetch_challenge_error",
        PASSKEY_CREATION_TOPGUN_SERVER_CREATION_TRIGGERED:
          "passkey_creation_topgun_server_creation_triggered",
        PASSKEY_CREATION_TOPGUN_SERVER_CREATION_SKIPPED:
          "passkey_creation_topgun_server_creation_skipped",
        PASSKEY_CREATION_TOPGUN_SERVER_DELETION_TRIGGERED:
          "passkey_creation_topgun_server_deletion_triggered",
        PASSKEY_CREATION_TOPGUN_SERVER_DELETION_SKIPPED:
          "passkey_creation_topgun_server_deletion_skipped",
        PASSKEY_AUTO_INVOKE_ERROR: "passkey_auto_invoke_error",
        INITIATE_SCREEN_RENDER_SUCCESS: "initiate_screen_render_success",
        INITIATE_SCREEN_RENDER_FAIL: "initiate_screen_render_fail",
        AUTO_INVOKE_ACTION_SUCCESS: "auto_invoke_action_success",
        AUTO_INVOKE_ACTION_FAIL: "auto_invoke_action_fail",
        INTEGRITY_ACTION_RENDER_SUCCESS: "integrity_action_render_success",
        INTEGRITY_ACTION_RENDER_FAIL: "integrity_action_render_fail",
        PASSKEY_CREATION_CHALLENGE_GENERATION_TOPGUN_CREATION_TRIGGERED:
          "passkey_creation_challenge_generation_topgun_creation_triggered",
        PASSKEY_CREATION_CHALLENGE_CREATION_FAILURE:
          "passkey_creation_challenge_creation_failure",
        PASSKEY_CREATION_CHALLENGE_CREATION_SUCCESS:
          "passkey_creation_challenge_creation_success",
        CREATE_SCREEN_RENDER_SUCCESS: "create_screen_render_success",
        CREATE_SCREEN_RENDER_FAIL: "create_screen_render_fail",
        CREATE_ACTION_RENDER_SUCCESS: "create_action_render_success",
        CREATE_ACTION_RENDER_FAIL: "create_action_render_fail",
        FINISH_ACTION_RENDER_SUCCESS: "finish_action_render_success",
        FINISH_ACTION_RENDER_FAIL: "finish_action_render_fail",
        PASSKEY_CREATION_SERVER_SUCCESS: "passkey_creation_server_success",
        PASSKEY_CREATION_SERVER_ERROR: "passkey_creation_server_error",
        PASSKEY_CREATION_FETCH_CREDENTIAL_NAME_NULL_WARNING:
          "passkey_creation_fetch_credential_name_null_warning",
        PASSKEY_CREATION_EMPTY_USERNAME: "passkey_creation_empty_username",
        PASSKEY_DELETION_ERROR: "passkey_deletion_error",
        PASSKEY_DELETION_SUCCESS: "passkey_deletion_success",
        PASSKEY_AUTO_INVOKE_TRIGGERED: "passkey_auto_invoke_triggered",
        PASSKEY_AUTO_INVOKE_WITHOUT_NUX_TRIGGERED:
          "passkey_auto_invoke_without_nux_triggered",
        PASSKEY_OS_LOGIN_NOT_SUPPORTED: "passkey_login_not_supported",
        PASSKEY_OS_LOGIN_ASSERTION_TRIGGERED:
          "passkey_login_assertion_triggered",
        PASSKEY_OS_LOGIN_ASSERTION_SUCCESS: "passkey_login_assertion_success",
        PASSKEY_OS_LOGIN_ASSERTION_FAILURE: "passkey_login_assertion_failure",
        PASSKEY_OS_LOGIN_ASSERTION_CANCEL: "passkey_login_assertion_cancel",
        PASSKEY_OS_LOGIN_ASSERTION_NO_IMMEDIATELY_AVAILABLE_CREDENTIALS:
          "passkey_login_assertion_no_immediately_available_credentials",
        PASSKEY_LOGIN_CALL_TO_SERVER_FAILED:
          "passkey_login_call_to_server_failed",
        PASSKEY_LOGIN_SERVER_SUCCESS: "passkey_login_server_success",
        PASSKEY_MEGAPHONE_SHOWN: "passkey_megaphone_shown",
        PASSKEY_MEGAPHONE_CONTINUE: "passkey_megaphone_continue",
        PASSKEY_MEGAPHONE_DISMISS: "passkey_megaphone_dismiss",
        PASSKEY_PAYOUT_INTRO_SHOWN: "passkey_payout_intro_shown",
        PASSKEY_PAYOUT_INTRO_CONTINUE: "passkey_payout_intro_continue",
        PASSKEY_PAYOUT_INTRO_DISMISS: "passkey_payout_intro_dismiss",
        PASSKEY_MODULE_SHOWN: "passkey_module_shown",
        PASSKEY_MODULE_CLICKED: "passkey_module_clicked",
        PASSKEY_CREATION_ELIGIBILITY_CHECK_TRIGGERED:
          "passkey_creation_eligibility_check_triggered",
        PASSKEY_CREATION_ELIGIBILITY_ELIGIBLE:
          "passkey_creation_eligibility_eligible",
        PASSKEY_DEVICE_ELIGIBILITY_ANDROID_VERSION_LOW:
          "passkey_device_eligibility_android_version_low",
        PASSKEY_DEVICE_ELIGIBILITY_FBLITE_EXCLUDED:
          "passkey_device_eligibility_fblite_excluded",
        PASSKEY_DEVICE_ELIGIBILITY_IOS_VERSION_LOW:
          "passkey_device_eligibility_ios_version_low",
        PASSKEY_DEVICE_ELIGIBILITY_OS_VERSION_NULL:
          "passkey_device_eligibility_os_version_null",
        PASSKEY_UPSELL_ELIGIBILITY_NOT_AFTER_LOGIN:
          "passkey_upsell_eligibility_not_after_login",
        PASSKEY_UPSELL_ELIGIBILITY_PASSKEY_USERID_TEST:
          "passkey_upsell_eligibility_passkey_userid_test",
        PASSKEY_UPSELL_ELIGIBILITY_REAUTH_REQUIRED_NEW_CHECKER:
          "passkey_upsell_eligibility_reauth_required_new_checker",
        PASSKEY_UPSELL_ELIGIBILITY_SCF_INELIGIBLE_SHOWN_RECENTLY:
          "passkey_upsell_eligibility_scf_ineligible_shown_recently",
        PASSKEY_UPSELL_ELIGIBILITY_USER_HAS_PASSKEY_ALREADY:
          "passkey_upsell_eligibility_user_has_passkey_already",
        PASSKEY_UPSELL_ELIGIBILITY_SAMSUNG_U18_GATED:
          "passkey_upsell_eligibility_samsung_u18_gated",
        PASSKEY_UPSELL_ELIGIBILITY_SAMSUNG_DEVICE:
          "passkey_upsell_eligibility_samsung_device",
        PASSKEY_INELIGIBLE_UNSUPPORTED_PROFILE_TYPE:
          "passkey_ineligible_unsupported_profile_type",
        PASSKEY_CREATION_INELIGIBLE: "passkey_creation_ineligible",
        PASSKEY_SESSIONLESS_ELIGIBLE: "passkey_sessionless_eligible",
        PASSKEY_SESSIONLESS_INELIGIBLE: "passkey_sessionless_ineligible",
        PASSKEY_LOGIN_ELIGIBILITY_SHADOW_CHECK_TRIGGERED:
          "passkey_login_eligibility_shadow_check_triggered",
        PASSKEY_LOGIN_ELIGIBILITY_SHADOW_WOULD_PROMPT:
          "passkey_login_eligibility_shadow_would_prompt",
        PASSKEY_SIGNAL_UNKNOWN_CREDENTIAL_TRIGGERED:
          "passkey_signal_unknown_credential_triggered",
        PASSKEY_REG_NUX_SHOWN: "passkey_reg_nux_shown",
        PASSKEY_REG_NUX_CONTINUED: "passkey_reg_nux_continued",
        PASSKEY_REG_NUX_CANCELLED: "passkey_reg_nux_cancelled",
        PASSKEY_REG_NUX_SKIPPED: "passkey_reg_nux_skipped",
        PASSKEY_UPSELL_ELIGIBILITY_CHECK_TRIGGERED:
          "passkey_upsell_eligibility_check_triggered",
      }),
      l = e;
    i.default = l;
  },
  66,
);
