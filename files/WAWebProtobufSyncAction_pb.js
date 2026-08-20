__d(
  "WAWebProtobufSyncAction.pb",
  [
    "$InternalEnum",
    "WAProtoConst",
    "WAWebProtobufsChatLockSettings.pb",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebProtobufsProtocol.pb",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (s = n("$InternalEnum"))({
        COLLECTION_NAME_UNKNOWN: 0,
        REGULAR: 1,
        REGULAR_LOW: 2,
        REGULAR_HIGH: 3,
        CRITICAL_BLOCK: 4,
        CRITICAL_UNBLOCK_LOW: 5,
      }),
      c = s({
        STAR_ACTION: 2,
        CONTACT_ACTION: 3,
        MUTE_ACTION: 4,
        PIN_ACTION: 5,
        SECURITY_NOTIFICATION_SETTING: 6,
        PUSH_NAME_SETTING: 7,
        QUICK_REPLY_ACTION: 8,
        RECENT_EMOJI_WEIGHTS_ACTION: 11,
        LABEL_MESSAGE_ACTION: 13,
        LABEL_EDIT_ACTION: 14,
        LABEL_ASSOCIATION_ACTION: 15,
        LOCALE_SETTING: 16,
        ARCHIVE_CHAT_ACTION: 17,
        DELETE_MESSAGE_FOR_ME_ACTION: 18,
        KEY_EXPIRATION: 19,
        MARK_CHAT_AS_READ_ACTION: 20,
        CLEAR_CHAT_ACTION: 21,
        DELETE_CHAT_ACTION: 22,
        UNARCHIVE_CHATS_SETTING: 23,
        PRIMARY_FEATURE: 24,
        ANDROID_UNSUPPORTED_ACTIONS: 26,
        AGENT_ACTION: 27,
        SUBSCRIPTION_ACTION: 28,
        USER_STATUS_MUTE_ACTION: 29,
        TIME_FORMAT_ACTION: 30,
        NUX_ACTION: 31,
        PRIMARY_VERSION_ACTION: 32,
        STICKER_ACTION: 33,
        REMOVE_RECENT_STICKER_ACTION: 34,
        CHAT_ASSIGNMENT: 35,
        CHAT_ASSIGNMENT_OPENED_STATUS: 36,
        PN_FOR_LID_CHAT_ACTION: 37,
        MARKETING_MESSAGE_ACTION: 38,
        MARKETING_MESSAGE_BROADCAST_ACTION: 39,
        EXTERNAL_WEB_BETA_ACTION: 40,
        PRIVACY_SETTING_RELAY_ALL_CALLS: 41,
        CALL_LOG_ACTION: 42,
        UGC_BOT: 43,
        STATUS_PRIVACY: 44,
        BOT_WELCOME_REQUEST_ACTION: 45,
        DELETE_INDIVIDUAL_CALL_LOG: 46,
        LABEL_REORDERING_ACTION: 47,
        PAYMENT_INFO_ACTION: 48,
        CUSTOM_PAYMENT_METHODS_ACTION: 49,
        LOCK_CHAT_ACTION: 50,
        CHAT_LOCK_SETTINGS: 51,
        WAMO_USER_IDENTIFIER_ACTION: 52,
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION: 53,
        DEVICE_CAPABILITIES: 54,
        NOTE_EDIT_ACTION: 55,
        FAVORITES_ACTION: 56,
        MERCHANT_PAYMENT_PARTNER_ACTION: 57,
        WAFFLE_ACCOUNT_LINK_STATE_ACTION: 58,
        USERNAME_CHAT_START_MODE: 59,
        NOTIFICATION_ACTIVITY_SETTING_ACTION: 60,
        LID_CONTACT_ACTION: 61,
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION: 62,
        PAYMENT_TOS_ACTION: 63,
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION: 64,
        BUSINESS_BROADCAST_ASSOCIATION_ACTION: 65,
        DETECTED_OUTCOMES_STATUS_ACTION: 66,
        MAIBA_AI_FEATURES_CONTROL_ACTION: 68,
        BUSINESS_BROADCAST_LIST_ACTION: 69,
        MUSIC_USER_ID_ACTION: 70,
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION: 71,
        AVATAR_UPDATED_ACTION: 72,
        GALAXY_FLOW_ACTION: 73,
        PRIVATE_PROCESSING_SETTING_ACTION: 74,
        NEWSLETTER_SAVED_INTERESTS_ACTION: 75,
        AI_THREAD_RENAME_ACTION: 76,
        INTERACTIVE_MESSAGE_ACTION: 77,
        SETTINGS_SYNC_ACTION: 78,
        OUT_CONTACT_ACTION: 79,
        NCT_SALT_SYNC_ACTION: 80,
        BUSINESS_BROADCAST_CAMPAIGN_ACTION: 81,
        BUSINESS_BROADCAST_INSIGHTS_ACTION: 82,
        CUSTOMER_DATA_ACTION: 83,
        SUBSCRIPTIONS_SYNC_V2_ACTION: 84,
        THREAD_PIN_ACTION: 85,
        AUTO_ORGANIZE_BUSINESS_CHAT_SETTING: 86,
        BIZ_AI_SETTINGS_NUDGE_ACTION: 87,
        COEX_V2_VERSION_ACTION: 88,
        WASA_ROOT_SECRET_ACTION: 89,
        BUBBLE_LOCK_MESSAGE_ACTION: 90,
        LABEL_SUBLIST_ACTION: 91,
        DEVICE_CAPABILITIES_V2: 92,
        CTWA_MESSAGE_RECEIVED_ACTION: 93,
        SHARED_DEVICE_ALLOWLIST_ACTION: 94,
        CONTACT_MANAGER_METADATA_ACTION: 95,
        BUSINESS_FOLDER_ACTIVATION_ACTION: 96,
        SHARE_OWN_PN: 10001,
        BUSINESS_BROADCAST_ACTION: 10002,
        AI_THREAD_DELETE_ACTION: 10003,
      }),
      d = s({ REGULAR: 0, SCHEDULED_CALL: 1, VOICE_CHAT: 2 }),
      m = s({ NONE: 0, SCHEDULED: 1, PRIVACY: 2, LIGHTWEIGHT: 3 }),
      p = s({
        CONNECTED: 0,
        REJECTED: 1,
        CANCELLED: 2,
        ACCEPTEDELSEWHERE: 3,
        MISSED: 4,
        INVALID: 5,
        UNAVAILABLE: 6,
        UPCOMING: 7,
        FAILED: 8,
        ABANDONED: 9,
        ONGOING: 10,
      }),
      _ = s({ INACTIVE: 0, ACTIVE: 1 }),
      f = s({ MEDIA_QUALITY_UNKNOWN: 0, STANDARD: 1, HD: 2 }),
      g = s({
        DISPLAY_MODE_UNKNOWN: 0,
        ALWAYS: 1,
        NEVER: 2,
        ONLY_WHEN_APP_IS_OPEN: 3,
      }),
      h = s({
        SETTING_KEY_UNKNOWN: 0,
        START_AT_LOGIN: 1,
        MINIMIZE_TO_TRAY: 2,
        LANGUAGE: 3,
        REPLACE_TEXT_WITH_EMOJI: 4,
        BANNER_NOTIFICATION_DISPLAY_MODE: 5,
        UNREAD_COUNTER_BADGE_DISPLAY_MODE: 6,
        IS_MESSAGES_NOTIFICATION_ENABLED: 7,
        IS_CALLS_NOTIFICATION_ENABLED: 8,
        IS_REACTIONS_NOTIFICATION_ENABLED: 9,
        IS_STATUS_REACTIONS_NOTIFICATION_ENABLED: 10,
        IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED: 11,
        DEFAULT_NOTIFICATION_TONE_ID: 12,
        GROUP_DEFAULT_NOTIFICATION_TONE_ID: 13,
        APP_THEME: 14,
        WALLPAPER_ID: 15,
        IS_DOODLE_WALLPAPER_ENABLED: 16,
        FONT_SIZE: 17,
        IS_PHOTOS_AUTODOWNLOAD_ENABLED: 18,
        IS_AUDIOS_AUTODOWNLOAD_ENABLED: 19,
        IS_VIDEOS_AUTODOWNLOAD_ENABLED: 20,
        IS_DOCUMENTS_AUTODOWNLOAD_ENABLED: 21,
        DISABLE_LINK_PREVIEWS: 22,
        NOTIFICATION_TONE_ID: 23,
        MEDIA_UPLOAD_QUALITY: 24,
        IS_SPELL_CHECK_ENABLED: 25,
        IS_ENTER_TO_SEND_ENABLED: 26,
        IS_GROUP_MESSAGE_NOTIFICATION_ENABLED: 27,
        IS_GROUP_REACTIONS_NOTIFICATION_ENABLED: 28,
        IS_STATUS_NOTIFICATION_ENABLED: 29,
        STATUS_NOTIFICATION_TONE_ID: 30,
        SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION: 31,
        CHAT_THEME_ID: 32,
        COLOR_SCHEME_ID: 33,
        STOCK_WALLPAPER_IMAGE_ID: 34,
      }),
      y = s({ PLATFORM_UNKNOWN: 0, WEB: 1, HYBRID: 2, WINDOWS: 3, MAC: 4 }),
      C = s({ DISABLE_CTA: 1 }),
      b = s({ UNDEFINED: 0, ENABLED: 1, DISABLED: 2 }),
      v = s({ UPDATED: 0, CREATED: 1, DELETED: 2 }),
      S = s({
        UNKNOWN: 0,
        INSTRUCTIONS: 1,
        RESPONSE_SETTINGS: 2,
        EXAMPLE_RESPONSES: 3,
        KNOWLEDGE: 4,
        LEAD_GEN: 5,
        HANDOFF_REMOVAL_TIMING: 6,
      }),
      R = s({ MUTED: 0, AI_AGENT: 1, SUGGESTIONS: 2 }),
      L = s({ ENABLED: 0, ENABLED_HAS_LEARNING: 1, DISABLED: 2 }),
      E = s({ DRAFT: 1, SCHEDULED: 2, PROCESSING: 3, FAILED: 4, SENT: 5 }),
      k = s({ BR_PAY_PRIVACY_POLICY: 0 }),
      I = s({
        DEFAULT_ALL_MESSAGES: 0,
        ALL_MESSAGES: 1,
        HIGHLIGHTS: 2,
        DEFAULT_HIGHLIGHTS: 3,
      }),
      T = s({ ACTIVE: 0, PAUSED: 1, UNLINKED: 2 }),
      D = s({ ACTIVE: 0, INACTIVE: 1 }),
      x = s({ UNSTRUCTURED: 1, STRUCTURED: 2 }),
      $ = s({
        ALLOW_LIST: 0,
        DENY_LIST: 1,
        CONTACTS: 2,
        CLOSE_FRIENDS: 3,
        CUSTOM_LIST: 4,
      }),
      P = s({ PERSONALIZED: 0 }),
      N = s({ LID: 1, PN: 2 }),
      M = s({
        NONE: 0,
        UNREAD: 1,
        GROUPS: 2,
        FAVORITES: 3,
        PREDEFINED: 4,
        CUSTOM: 5,
        COMMUNITY: 6,
        SERVER_ASSIGNED: 7,
        DRAFTED: 8,
        AI_HANDOFF: 9,
        CHANNELS: 10,
        AI_RESPONDING: 11,
        ARCHIVED: 12,
        LOCKED: 13,
        INVITES: 14,
        THIRD_PARTY: 15,
        LEAD: 16,
        MENTIONS_AND_REPLIES: 17,
      }),
      w = s({
        ANDROID: 0,
        SMBA: 1,
        IPHONE: 2,
        SMBI: 3,
        WEB: 4,
        UWP: 5,
        DARWIN: 6,
        IPAD: 7,
        WEAROS: 8,
        WASG: 9,
        WEARM: 10,
        CAPI: 11,
      }),
      A = s({
        STAR_ACTION: "star",
        CONTACT_ACTION: "contact",
        MUTE_ACTION: "mute",
        PIN_ACTION: "pin_v1",
        SECURITY_NOTIFICATION_SETTING: "setting_securityNotification",
        PUSH_NAME_SETTING: "setting_pushName",
        QUICK_REPLY_ACTION: "quick_reply",
        RECENT_EMOJI_WEIGHTS_ACTION: "recent_emoji_weights_action",
        LABEL_MESSAGE_ACTION: "label_message",
        LABEL_EDIT_ACTION: "label_edit",
        LABEL_ASSOCIATION_ACTION: "label_jid",
        LOCALE_SETTING: "setting_locale",
        ARCHIVE_CHAT_ACTION: "archive",
        DELETE_MESSAGE_FOR_ME_ACTION: "deleteMessageForMe",
        KEY_EXPIRATION: "sentinel",
        MARK_CHAT_AS_READ_ACTION: "markChatAsRead",
        CLEAR_CHAT_ACTION: "clearChat",
        DELETE_CHAT_ACTION: "deleteChat",
        UNARCHIVE_CHATS_SETTING: "setting_unarchiveChats",
        PRIMARY_FEATURE: "primary_feature",
        ANDROID_UNSUPPORTED_ACTIONS: "android_unsupported_actions",
        AGENT_ACTION: "deviceAgent",
        SUBSCRIPTION_ACTION: "subscription",
        USER_STATUS_MUTE_ACTION: "userStatusMute",
        TIME_FORMAT_ACTION: "time_format",
        NUX_ACTION: "nux",
        PRIMARY_VERSION_ACTION: "primary_version",
        STICKER_ACTION: "favoriteSticker",
        REMOVE_RECENT_STICKER_ACTION: "removeRecentSticker",
        CHAT_ASSIGNMENT: "agentChatAssignment",
        CHAT_ASSIGNMENT_OPENED_STATUS: "agentChatAssignmentOpenedStatus",
        PN_FOR_LID_CHAT_ACTION: "pnForLidChat",
        MARKETING_MESSAGE_ACTION: "marketingMessage",
        MARKETING_MESSAGE_BROADCAST_ACTION: "marketingMessageBroadcast",
        EXTERNAL_WEB_BETA_ACTION: "external_web_beta",
        PRIVACY_SETTING_RELAY_ALL_CALLS: "setting_relayAllCalls",
        CALL_LOG_ACTION: "call_log",
        UGC_BOT: "ugc_bot",
        STATUS_PRIVACY: "status_privacy",
        BOT_WELCOME_REQUEST_ACTION: "bot_welcome_request",
        DELETE_INDIVIDUAL_CALL_LOG: "delete_individual_call_log",
        LABEL_REORDERING_ACTION: "label_reordering",
        PAYMENT_INFO_ACTION: "payment_info",
        CUSTOM_PAYMENT_METHODS_ACTION: "custom_payment_methods",
        LOCK_CHAT_ACTION: "lock",
        CHAT_LOCK_SETTINGS: "setting_chatLock",
        WAMO_USER_IDENTIFIER_ACTION: "generated_wui",
        PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION:
          "setting_disableLinkPreviews",
        DEVICE_CAPABILITIES: "device_capabilities",
        NOTE_EDIT_ACTION: "note_edit",
        FAVORITES_ACTION: "favorites",
        MERCHANT_PAYMENT_PARTNER_ACTION: "merchant_payment_partner",
        WAFFLE_ACCOUNT_LINK_STATE_ACTION: "waffle_account_link_state",
        USERNAME_CHAT_START_MODE: "usernameChatStartMode",
        NOTIFICATION_ACTIVITY_SETTING_ACTION: "notificationActivitySetting",
        LID_CONTACT_ACTION: "lid_contact",
        CTWA_PER_CUSTOMER_DATA_SHARING_ACTION: "ctwaPerCustomerDataSharing",
        PAYMENT_TOS_ACTION: "payment_tos",
        PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION:
          "setting_channels_personalised_recommendation_optout",
        BUSINESS_BROADCAST_ASSOCIATION_ACTION: "broadcast_jid",
        DETECTED_OUTCOMES_STATUS_ACTION: "detected_outcomes_status_action",
        MAIBA_AI_FEATURES_CONTROL_ACTION: "maiba_ai_features_control",
        BUSINESS_BROADCAST_LIST_ACTION: "business_broadcast_list",
        MUSIC_USER_ID_ACTION: "music_user_id",
        STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION:
          "status_post_opt_in_notification_preferences_action",
        AVATAR_UPDATED_ACTION: "avatar_updated_action",
        GALAXY_FLOW_ACTION: "galaxy_flow_action",
        PRIVATE_PROCESSING_SETTING_ACTION: "private_processing_setting",
        NEWSLETTER_SAVED_INTERESTS_ACTION: "newsletter_saved_interests",
        AI_THREAD_RENAME_ACTION: "ai_thread_rename",
        INTERACTIVE_MESSAGE_ACTION: "interactive_message_action",
        SETTINGS_SYNC_ACTION: "settings_sync",
        OUT_CONTACT_ACTION: "out_contact",
        NCT_SALT_SYNC_ACTION: "nct_salt_sync",
        BUSINESS_BROADCAST_CAMPAIGN_ACTION: "business_broadcast_campaign",
        BUSINESS_BROADCAST_INSIGHTS_ACTION: "business_broadcast_insights_sync",
        CUSTOMER_DATA_ACTION: "customer_data",
        SUBSCRIPTIONS_SYNC_V2_ACTION: "subscriptions_sync_v2",
        THREAD_PIN_ACTION: "thread_pin",
        AUTO_ORGANIZE_BUSINESS_CHAT_SETTING: "setting_autoOrganizeBusinessChat",
        BIZ_AI_SETTINGS_NUDGE_ACTION: "biz_ai_settings_nudge",
        COEX_V2_VERSION_ACTION: "coexV2Version",
        WASA_ROOT_SECRET_ACTION: "wasa_root_secret",
        BUBBLE_LOCK_MESSAGE_ACTION: "lock_message",
        LABEL_SUBLIST_ACTION: "label_sublist",
        DEVICE_CAPABILITIES_V2: "device_capabilities_v2",
        CTWA_MESSAGE_RECEIVED_ACTION: "ctwa_message_received",
        SHARED_DEVICE_ALLOWLIST_ACTION: "shared_device_allowlist",
        CONTACT_MANAGER_METADATA_ACTION: "contact_manager_metadata",
        BUSINESS_FOLDER_ACTIVATION_ACTION: "business_folder_activation",
        SHARE_OWN_PN: "shareOwnPn",
        BUSINESS_BROADCAST_ACTION: "broadcast",
        AI_THREAD_DELETE_ACTION: "ai_thread_delete",
      });
    function F(e) {
      return e === c.STAR_ACTION
        ? u.REGULAR_HIGH
        : e === c.CONTACT_ACTION
          ? u.CRITICAL_UNBLOCK_LOW
          : e === c.MUTE_ACTION
            ? u.REGULAR_HIGH
            : e === c.PIN_ACTION
              ? u.REGULAR_LOW
              : e === c.SECURITY_NOTIFICATION_SETTING ||
                  e === c.PUSH_NAME_SETTING
                ? u.CRITICAL_BLOCK
                : e === c.QUICK_REPLY_ACTION
                  ? u.REGULAR
                  : e === c.RECENT_EMOJI_WEIGHTS_ACTION
                    ? u.REGULAR_LOW
                    : e === c.LABEL_MESSAGE_ACTION ||
                        e === c.LABEL_EDIT_ACTION ||
                        e === c.LABEL_ASSOCIATION_ACTION
                      ? u.REGULAR
                      : e === c.LOCALE_SETTING
                        ? u.CRITICAL_BLOCK
                        : e === c.ARCHIVE_CHAT_ACTION
                          ? u.REGULAR_LOW
                          : e === c.DELETE_MESSAGE_FOR_ME_ACTION
                            ? u.REGULAR_HIGH
                            : e === c.KEY_EXPIRATION ||
                                e === c.MARK_CHAT_AS_READ_ACTION
                              ? u.REGULAR_LOW
                              : e === c.CLEAR_CHAT_ACTION ||
                                  e === c.DELETE_CHAT_ACTION
                                ? u.REGULAR_HIGH
                                : e === c.UNARCHIVE_CHATS_SETTING
                                  ? u.REGULAR_LOW
                                  : e === c.PRIMARY_FEATURE
                                    ? u.REGULAR
                                    : e === c.ANDROID_UNSUPPORTED_ACTIONS
                                      ? u.REGULAR_LOW
                                      : e === c.AGENT_ACTION ||
                                          e === c.SUBSCRIPTION_ACTION
                                        ? u.REGULAR
                                        : e === c.USER_STATUS_MUTE_ACTION
                                          ? u.REGULAR_HIGH
                                          : e === c.TIME_FORMAT_ACTION ||
                                              e === c.NUX_ACTION ||
                                              e === c.PRIMARY_VERSION_ACTION ||
                                              e === c.STICKER_ACTION ||
                                              e ===
                                                c.REMOVE_RECENT_STICKER_ACTION
                                            ? u.REGULAR_LOW
                                            : e === c.CHAT_ASSIGNMENT ||
                                                e ===
                                                  c.CHAT_ASSIGNMENT_OPENED_STATUS ||
                                                e ===
                                                  c.PN_FOR_LID_CHAT_ACTION ||
                                                e ===
                                                  c.MARKETING_MESSAGE_ACTION ||
                                                e ===
                                                  c.MARKETING_MESSAGE_BROADCAST_ACTION ||
                                                e ===
                                                  c.EXTERNAL_WEB_BETA_ACTION ||
                                                e ===
                                                  c.PRIVACY_SETTING_RELAY_ALL_CALLS ||
                                                e === c.CALL_LOG_ACTION
                                              ? u.REGULAR
                                              : e === c.UGC_BOT ||
                                                  e === c.STATUS_PRIVACY
                                                ? u.REGULAR_HIGH
                                                : e ===
                                                    c.BOT_WELCOME_REQUEST_ACTION
                                                  ? u.REGULAR_LOW
                                                  : e ===
                                                        c.DELETE_INDIVIDUAL_CALL_LOG ||
                                                      e ===
                                                        c.LABEL_REORDERING_ACTION
                                                    ? u.REGULAR
                                                    : e ===
                                                          c.PAYMENT_INFO_ACTION ||
                                                        e ===
                                                          c.CUSTOM_PAYMENT_METHODS_ACTION ||
                                                        e ===
                                                          c.LOCK_CHAT_ACTION ||
                                                        e ===
                                                          c.CHAT_LOCK_SETTINGS
                                                      ? u.REGULAR_LOW
                                                      : e ===
                                                          c.WAMO_USER_IDENTIFIER_ACTION
                                                        ? u.CRITICAL_BLOCK
                                                        : e ===
                                                            c.PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION
                                                          ? u.REGULAR
                                                          : e ===
                                                                c.DEVICE_CAPABILITIES ||
                                                              e ===
                                                                c.NOTE_EDIT_ACTION
                                                            ? u.REGULAR_LOW
                                                            : e ===
                                                                c.FAVORITES_ACTION
                                                              ? u.REGULAR_HIGH
                                                              : e ===
                                                                  c.MERCHANT_PAYMENT_PARTNER_ACTION
                                                                ? u.REGULAR_LOW
                                                                : e ===
                                                                    c.WAFFLE_ACCOUNT_LINK_STATE_ACTION
                                                                  ? u.REGULAR_HIGH
                                                                  : e ===
                                                                        c.USERNAME_CHAT_START_MODE ||
                                                                      e ===
                                                                        c.NOTIFICATION_ACTIVITY_SETTING_ACTION
                                                                    ? u.REGULAR
                                                                    : e ===
                                                                        c.LID_CONTACT_ACTION
                                                                      ? u.CRITICAL_UNBLOCK_LOW
                                                                      : e ===
                                                                          c.CTWA_PER_CUSTOMER_DATA_SHARING_ACTION
                                                                        ? u.REGULAR_HIGH
                                                                        : e ===
                                                                            c.PAYMENT_TOS_ACTION
                                                                          ? u.REGULAR_LOW
                                                                          : e ===
                                                                                c.PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION ||
                                                                              e ===
                                                                                c.BUSINESS_BROADCAST_ASSOCIATION_ACTION ||
                                                                              e ===
                                                                                c.DETECTED_OUTCOMES_STATUS_ACTION
                                                                            ? u.REGULAR
                                                                            : e ===
                                                                                c.MAIBA_AI_FEATURES_CONTROL_ACTION
                                                                              ? u.REGULAR_HIGH
                                                                              : e ===
                                                                                    c.BUSINESS_BROADCAST_LIST_ACTION ||
                                                                                  e ===
                                                                                    c.MUSIC_USER_ID_ACTION
                                                                                ? u.REGULAR
                                                                                : e ===
                                                                                    c.STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION
                                                                                  ? u.REGULAR_HIGH
                                                                                  : e ===
                                                                                        c.AVATAR_UPDATED_ACTION ||
                                                                                      e ===
                                                                                        c.GALAXY_FLOW_ACTION
                                                                                    ? u.REGULAR
                                                                                    : e ===
                                                                                        c.PRIVATE_PROCESSING_SETTING_ACTION
                                                                                      ? u.REGULAR_HIGH
                                                                                      : e ===
                                                                                          c.NEWSLETTER_SAVED_INTERESTS_ACTION
                                                                                        ? u.REGULAR
                                                                                        : e ===
                                                                                              c.AI_THREAD_RENAME_ACTION ||
                                                                                            e ===
                                                                                              c.INTERACTIVE_MESSAGE_ACTION ||
                                                                                            e ===
                                                                                              c.SETTINGS_SYNC_ACTION ||
                                                                                            e ===
                                                                                              c.OUT_CONTACT_ACTION
                                                                                          ? u.REGULAR_LOW
                                                                                          : e ===
                                                                                              c.NCT_SALT_SYNC_ACTION
                                                                                            ? u.REGULAR_HIGH
                                                                                            : e ===
                                                                                                  c.BUSINESS_BROADCAST_CAMPAIGN_ACTION ||
                                                                                                e ===
                                                                                                  c.BUSINESS_BROADCAST_INSIGHTS_ACTION
                                                                                              ? u.REGULAR
                                                                                              : e ===
                                                                                                  c.CUSTOMER_DATA_ACTION
                                                                                                ? u.REGULAR_LOW
                                                                                                : e ===
                                                                                                    c.SUBSCRIPTIONS_SYNC_V2_ACTION
                                                                                                  ? u.REGULAR
                                                                                                  : e ===
                                                                                                        c.THREAD_PIN_ACTION ||
                                                                                                      e ===
                                                                                                        c.AUTO_ORGANIZE_BUSINESS_CHAT_SETTING
                                                                                                    ? u.REGULAR_LOW
                                                                                                    : e ===
                                                                                                        c.BIZ_AI_SETTINGS_NUDGE_ACTION
                                                                                                      ? u.REGULAR_HIGH
                                                                                                      : e ===
                                                                                                          c.COEX_V2_VERSION_ACTION
                                                                                                        ? u.REGULAR_LOW
                                                                                                        : e ===
                                                                                                            c.WASA_ROOT_SECRET_ACTION
                                                                                                          ? u.REGULAR_HIGH
                                                                                                          : e ===
                                                                                                              c.BUBBLE_LOCK_MESSAGE_ACTION
                                                                                                            ? u.REGULAR_LOW
                                                                                                            : e ===
                                                                                                                c.LABEL_SUBLIST_ACTION
                                                                                                              ? u.REGULAR
                                                                                                              : e ===
                                                                                                                  c.DEVICE_CAPABILITIES_V2
                                                                                                                ? u.REGULAR_LOW
                                                                                                                : e ===
                                                                                                                    c.CTWA_MESSAGE_RECEIVED_ACTION
                                                                                                                  ? u.REGULAR
                                                                                                                  : e ===
                                                                                                                      c.SHARED_DEVICE_ALLOWLIST_ACTION
                                                                                                                    ? u.REGULAR_HIGH
                                                                                                                    : e ===
                                                                                                                          c.CONTACT_MANAGER_METADATA_ACTION ||
                                                                                                                        e ===
                                                                                                                          c.BUSINESS_FOLDER_ACTIVATION_ACTION
                                                                                                                      ? u.REGULAR_LOW
                                                                                                                      : e ===
                                                                                                                            c.SHARE_OWN_PN ||
                                                                                                                          e ===
                                                                                                                            c.BUSINESS_BROADCAST_ACTION
                                                                                                                        ? u.REGULAR
                                                                                                                        : e ===
                                                                                                                            c.AI_THREAD_DELETE_ACTION
                                                                                                                          ? u.REGULAR_HIGH
                                                                                                                          : (function () {
                                                                                                                              throw Error(
                                                                                                                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                                                                                                                  e,
                                                                                                                              );
                                                                                                                            })();
    }
    var O = s({
        REGULAR: "regular",
        REGULAR_LOW: "regular_low",
        REGULAR_HIGH: "regular_high",
        CRITICAL_BLOCK: "critical_block",
        CRITICAL_UNBLOCK_LOW: "critical_unblock_low",
      }),
      B = {},
      W = {},
      q = {},
      U = {},
      V = {},
      H = {},
      G = {},
      z = {},
      j = {},
      K = {},
      Q = {},
      X = {},
      Y = {},
      J = {},
      Z = {},
      ee = {},
      te = {},
      ne = {},
      re = {},
      oe = {},
      ae = {},
      ie = {},
      le = {},
      se = {},
      ue = {},
      ce = {},
      de = {},
      me = {},
      pe = {},
      _e = {},
      fe = {},
      ge = {},
      he = {},
      ye = {},
      Ce = {},
      be = {},
      ve = {},
      Se = {},
      Re = {},
      Le = {},
      Ee = {},
      ke = {},
      Ie = {},
      Te = {},
      De = {},
      xe = {},
      $e = {},
      Pe = {},
      Ne = {},
      Me = {},
      we = {},
      Ae = {},
      Fe = {},
      Oe = {},
      Be = {},
      We = {},
      qe = {},
      Ue = {},
      Ve = {},
      He = {},
      Ge = {},
      ze = {},
      je = {},
      Ke = {},
      Qe = {},
      Xe = {},
      Ye = {},
      Je = {},
      Ze = {},
      et = {},
      tt = {},
      nt = {},
      rt = {},
      ot = {},
      at = {},
      it = {},
      lt = {},
      st = {},
      ut = {},
      ct = {},
      dt = {},
      mt = {},
      pt = {},
      _t = {},
      ft = {},
      gt = {},
      ht = {},
      yt = {},
      Ct = {},
      bt = {},
      vt = {},
      St = {},
      Rt = {},
      Lt = {},
      Et = {},
      kt = {},
      It = {},
      Tt = {},
      Dt = {},
      xt = {};
    ((B.name = "RecentEmojiWeight"),
      (B.internalSpec = {
        emoji: [1, (e = o("WAProtoConst")).TYPES.STRING],
        weight: [2, e.TYPES.FLOAT],
      }),
      (W.name = "CallLogRecord"),
      (W.internalSpec = {
        callResult: [1, e.TYPES.ENUM, p],
        isDndMode: [2, e.TYPES.BOOL],
        silenceReason: [3, e.TYPES.ENUM, m],
        duration: [4, e.TYPES.INT64],
        startTime: [5, e.TYPES.INT64],
        isIncoming: [6, e.TYPES.BOOL],
        isVideo: [7, e.TYPES.BOOL],
        isCallLink: [8, e.TYPES.BOOL],
        callLinkToken: [9, e.TYPES.STRING],
        scheduledCallId: [10, e.TYPES.STRING],
        callId: [11, e.TYPES.STRING],
        callCreatorJid: [12, e.TYPES.STRING],
        groupJid: [13, e.TYPES.STRING],
        participants: [14, e.FLAGS.REPEATED | e.TYPES.MESSAGE, q],
        callType: [15, e.TYPES.ENUM, d],
      }),
      (q.name = "CallLogRecord$ParticipantInfo"),
      (q.internalSpec = {
        userJid: [1, e.TYPES.STRING],
        callResult: [2, e.TYPES.ENUM, p],
      }),
      (U.name = "SyncActionValue"),
      (U.internalSpec = {
        timestamp: [1, e.TYPES.INT64],
        starAction: [2, e.TYPES.MESSAGE, Tt],
        contactAction: [3, e.TYPES.MESSAGE, It],
        muteAction: [4, e.TYPES.MESSAGE, Et],
        pinAction: [5, e.TYPES.MESSAGE, Lt],
        pushNameSetting: [7, e.TYPES.MESSAGE, Rt],
        quickReplyAction: [8, e.TYPES.MESSAGE, vt],
        recentEmojiWeightsAction: [11, e.TYPES.MESSAGE, ht],
        labelEditAction: [14, e.TYPES.MESSAGE, yt],
        labelAssociationAction: [15, e.TYPES.MESSAGE, bt],
        localeSetting: [16, e.TYPES.MESSAGE, St],
        archiveChatAction: [17, e.TYPES.MESSAGE, gt],
        deleteMessageForMeAction: [18, e.TYPES.MESSAGE, ft],
        keyExpiration: [19, e.TYPES.MESSAGE, st],
        markChatAsReadAction: [20, e.TYPES.MESSAGE, _t],
        clearChatAction: [21, e.TYPES.MESSAGE, pt],
        deleteChatAction: [22, e.TYPES.MESSAGE, mt],
        unarchiveChatsSetting: [23, e.TYPES.MESSAGE, dt],
        primaryFeature: [24, e.TYPES.MESSAGE, lt],
        androidUnsupportedActions: [26, e.TYPES.MESSAGE, it],
        agentAction: [27, e.TYPES.MESSAGE, at],
        subscriptionAction: [28, e.TYPES.MESSAGE, ot],
        userStatusMuteAction: [29, e.TYPES.MESSAGE, rt],
        timeFormatAction: [30, e.TYPES.MESSAGE, nt],
        nuxAction: [31, e.TYPES.MESSAGE, tt],
        primaryVersionAction: [32, e.TYPES.MESSAGE, et],
        stickerAction: [33, e.TYPES.MESSAGE, Je],
        removeRecentStickerAction: [34, e.TYPES.MESSAGE, Ze],
        chatAssignment: [35, e.TYPES.MESSAGE, Ye],
        chatAssignmentOpenedStatus: [36, e.TYPES.MESSAGE, Xe],
        pnForLidChatAction: [37, e.TYPES.MESSAGE, Qe],
        marketingMessageAction: [38, e.TYPES.MESSAGE, je],
        marketingMessageBroadcastAction: [39, e.TYPES.MESSAGE, ze],
        externalWebBetaAction: [40, e.TYPES.MESSAGE, Ge],
        privacySettingRelayAllCalls: [41, e.TYPES.MESSAGE, Ve],
        callLogAction: [42, e.TYPES.MESSAGE, Ue],
        ugcBot: [43, e.TYPES.MESSAGE, qe],
        statusPrivacy: [44, e.TYPES.MESSAGE, Be],
        botWelcomeRequestAction: [45, e.TYPES.MESSAGE, Ae],
        deleteIndividualCallLog: [46, e.TYPES.MESSAGE, we],
        labelReorderingAction: [47, e.TYPES.MESSAGE, Me],
        paymentInfoAction: [48, e.TYPES.MESSAGE, Ne],
        customPaymentMethodsAction: [49, e.TYPES.MESSAGE, xe],
        lockChatAction: [50, e.TYPES.MESSAGE, De],
        chatLockSettings: [
          51,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsChatLockSettings.pb").ChatLockSettingsSpec,
        ],
        wamoUserIdentifierAction: [52, e.TYPES.MESSAGE, Ie],
        privacySettingDisableLinkPreviewsAction: [53, e.TYPES.MESSAGE, ke],
        deviceCapabilities: [
          54,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilitiesSpec,
        ],
        noteEditAction: [55, e.TYPES.MESSAGE, Le],
        favoritesAction: [56, e.TYPES.MESSAGE, Se],
        merchantPaymentPartnerAction: [57, e.TYPES.MESSAGE, ve],
        waffleAccountLinkStateAction: [58, e.TYPES.MESSAGE, be],
        usernameChatStartMode: [59, e.TYPES.MESSAGE, Ke],
        notificationActivitySettingAction: [60, e.TYPES.MESSAGE, Ce],
        lidContactAction: [61, e.TYPES.MESSAGE, ye],
        ctwaPerCustomerDataSharingAction: [62, e.TYPES.MESSAGE, ge],
        paymentTosAction: [63, e.TYPES.MESSAGE, fe],
        privacySettingChannelsPersonalisedRecommendationAction: [
          64,
          e.TYPES.MESSAGE,
          Ee,
        ],
        detectedOutcomesStatusAction: [66, e.TYPES.MESSAGE, He],
        maibaAiFeaturesControlAction: [68, e.TYPES.MESSAGE, ce],
        businessBroadcastListAction: [69, e.TYPES.MESSAGE, pe],
        musicUserIdAction: [70, e.TYPES.MESSAGE, Oe],
        statusPostOptInNotificationPreferencesAction: [71, e.TYPES.MESSAGE, se],
        avatarUpdatedAction: [72, e.TYPES.MESSAGE, le],
        privateProcessingSettingAction: [74, e.TYPES.MESSAGE, ie],
        newsletterSavedInterestsAction: [75, e.TYPES.MESSAGE, Fe],
        aiThreadRenameAction: [76, e.TYPES.MESSAGE, ae],
        interactiveMessageAction: [77, e.TYPES.MESSAGE, re],
        settingsSyncAction: [78, e.TYPES.MESSAGE, ee],
        outContactAction: [79, e.TYPES.MESSAGE, he],
        nctSaltSyncAction: [80, e.TYPES.MESSAGE, ne],
        businessBroadcastCampaignAction: [81, e.TYPES.MESSAGE, me],
        businessBroadcastInsightsAction: [82, e.TYPES.MESSAGE, Z],
        customerDataAction: [83, e.TYPES.MESSAGE, J],
        subscriptionsSyncV2Action: [84, e.TYPES.MESSAGE, K],
        threadPinAction: [85, e.TYPES.MESSAGE, oe],
        autoOrganizeBusinessChatSetting: [86, e.TYPES.MESSAGE, te],
        bizAiSettingsNudgeAction: [87, e.TYPES.MESSAGE, ue],
        coexV2VersionAction: [88, e.TYPES.MESSAGE, j],
        wasaRootSecretAction: [89, e.TYPES.MESSAGE, G],
        bubbleLockMessageAction: [90, e.TYPES.MESSAGE, Te],
        labelSublistAction: [91, e.TYPES.MESSAGE, Ct],
        deviceCapabilitiesV2: [
          92,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsDeviceCapabilities.pb").DeviceCapabilitiesSpec,
        ],
        ctwaMessageReceivedAction: [93, e.TYPES.MESSAGE, H],
        sharedDeviceAllowlistAction: [94, e.TYPES.MESSAGE, kt],
        contactManagerMetadataAction: [95, e.TYPES.MESSAGE, Y],
        businessFolderActivationAction: [96, e.TYPES.MESSAGE, V],
      }),
      (V.name = "SyncActionValue$BusinessFolderActivationAction"),
      (V.internalSpec = { activated: [1, e.TYPES.BOOL] }),
      (H.name = "SyncActionValue$CtwaMessageReceivedAction"),
      (H.internalSpec = { isCtwaMessageReceived: [1, e.TYPES.BOOL] }),
      (G.name = "SyncActionValue$WASARootSecretAction"),
      (G.internalSpec = {
        secrets: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, z],
      }),
      (z.name = "SyncActionValue$WASARootSecretAction$RootSecretEntry"),
      (z.internalSpec = {
        id: [1, e.TYPES.STRING],
        rootSecret: [2, e.TYPES.BYTES],
        epoch: [3, e.TYPES.INT64],
        status: [4, e.TYPES.ENUM, _],
      }),
      (j.name = "SyncActionValue$CoexV2VersionAction"),
      (j.internalSpec = { version: [1, e.TYPES.UINT64] }),
      (K.name = "SyncActionValue$SubscriptionsSyncV2Action"),
      (K.internalSpec = {
        subscriptions: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, X],
        paidFeature: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Q],
      }),
      (Q.name = "SyncActionValue$SubscriptionsSyncV2Action$PaidFeature"),
      (Q.internalSpec = {
        name: [1, e.TYPES.STRING],
        enabled: [2, e.TYPES.BOOL],
        limit: [3, e.TYPES.INT32],
        expirationTime: [4, e.TYPES.INT64],
      }),
      (X.name = "SyncActionValue$SubscriptionsSyncV2Action$SubscriptionInfo"),
      (X.internalSpec = {
        id: [1, e.TYPES.STRING],
        tier: [2, e.TYPES.INT32],
        status: [3, e.TYPES.STRING],
        startTime: [4, e.TYPES.INT64],
        endTime: [5, e.TYPES.INT64],
        isPlatformChanged: [6, e.TYPES.BOOL],
        source: [7, e.TYPES.STRING],
        creationTime: [8, e.TYPES.INT64],
      }),
      (Y.name = "SyncActionValue$ContactManagerMetadataAction"),
      (Y.internalSpec = { isHidden: [1, e.TYPES.BOOL] }),
      (J.name = "SyncActionValue$CustomerDataAction"),
      (J.internalSpec = {
        chatJid: [1, e.TYPES.STRING],
        contactType: [2, e.TYPES.INT32],
        email: [3, e.TYPES.STRING],
        altPhoneNumbers: [4, e.TYPES.STRING],
        birthday: [5, e.TYPES.INT64],
        address: [6, e.TYPES.STRING],
        acquisitionSource: [7, e.TYPES.INT32],
        leadStage: [8, e.TYPES.INT32],
        lastOrder: [9, e.TYPES.INT64],
        createdAt: [10, e.TYPES.INT64],
        modifiedAt: [11, e.TYPES.INT64],
      }),
      (Z.name = "SyncActionValue$BusinessBroadcastInsightsAction"),
      (Z.internalSpec = {
        recipientCount: [1, e.TYPES.INT32],
        deliveredCount: [2, e.TYPES.INT32],
        readCount: [3, e.TYPES.INT32],
        repliedCount: [4, e.TYPES.INT32],
        quickReplyCount: [5, e.TYPES.INT32],
      }),
      (ee.name = "SyncActionValue$SettingsSyncAction"),
      (ee.internalSpec = {
        startAtLogin: [1, e.TYPES.BOOL],
        minimizeToTray: [2, e.TYPES.BOOL],
        language: [3, e.TYPES.STRING],
        replaceTextWithEmoji: [4, e.TYPES.BOOL],
        bannerNotificationDisplayMode: [5, e.TYPES.ENUM, g],
        unreadCounterBadgeDisplayMode: [6, e.TYPES.ENUM, g],
        isMessagesNotificationEnabled: [7, e.TYPES.BOOL],
        isCallsNotificationEnabled: [8, e.TYPES.BOOL],
        isReactionsNotificationEnabled: [9, e.TYPES.BOOL],
        isStatusReactionsNotificationEnabled: [10, e.TYPES.BOOL],
        isTextPreviewForNotificationEnabled: [11, e.TYPES.BOOL],
        defaultNotificationToneId: [12, e.TYPES.INT32],
        groupDefaultNotificationToneId: [13, e.TYPES.INT32],
        appTheme: [14, e.TYPES.INT32],
        wallpaperId: [15, e.TYPES.INT32],
        isDoodleWallpaperEnabled: [16, e.TYPES.BOOL],
        fontSize: [17, e.TYPES.INT32],
        isPhotosAutodownloadEnabled: [18, e.TYPES.BOOL],
        isAudiosAutodownloadEnabled: [19, e.TYPES.BOOL],
        isVideosAutodownloadEnabled: [20, e.TYPES.BOOL],
        isDocumentsAutodownloadEnabled: [21, e.TYPES.BOOL],
        disableLinkPreviews: [22, e.TYPES.BOOL],
        notificationToneId: [23, e.TYPES.INT32],
        mediaUploadQuality: [24, e.TYPES.ENUM, f],
        isSpellCheckEnabled: [25, e.TYPES.BOOL],
        isEnterToSendEnabled: [26, e.TYPES.BOOL],
        isGroupMessageNotificationEnabled: [27, e.TYPES.BOOL],
        isGroupReactionsNotificationEnabled: [28, e.TYPES.BOOL],
        isStatusNotificationEnabled: [29, e.TYPES.BOOL],
        statusNotificationToneId: [30, e.TYPES.INT32],
        shouldPlaySoundForCallNotification: [31, e.TYPES.BOOL],
        chatThemeId: [32, e.TYPES.STRING],
        colorSchemeId: [33, e.TYPES.STRING],
        stockWallpaperImageId: [34, e.TYPES.STRING],
      }),
      (te.name = "SyncActionValue$AutoOrganizeBusinessChatSetting"),
      (te.internalSpec = { autoOrganize: [1, e.TYPES.BOOL] }),
      (ne.name = "SyncActionValue$NctSaltSyncAction"),
      (ne.internalSpec = { salt: [1, e.TYPES.BYTES] }),
      (re.name = "SyncActionValue$InteractiveMessageAction"),
      (re.internalSpec = {
        type: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, C],
        agmId: [2, e.TYPES.STRING],
      }),
      (oe.name = "SyncActionValue$ThreadPinAction"),
      (oe.internalSpec = { pinned: [1, e.TYPES.BOOL] }),
      (ae.name = "SyncActionValue$AiThreadRenameAction"),
      (ae.internalSpec = { newTitle: [1, e.TYPES.STRING] }),
      (ie.name = "SyncActionValue$PrivateProcessingSettingAction"),
      (ie.internalSpec = { privateProcessingStatus: [1, e.TYPES.ENUM, b] }),
      (le.name = "SyncActionValue$AvatarUpdatedAction"),
      (le.internalSpec = {
        eventType: [1, e.TYPES.ENUM, v],
        recentAvatarStickers: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Je],
      }),
      (se.name =
        "SyncActionValue$StatusPostOptInNotificationPreferencesAction"),
      (se.internalSpec = { enabled: [1, e.TYPES.BOOL] }),
      (ue.name = "SyncActionValue$BizAISettingsNudgeAction"),
      (ue.internalSpec = {
        category: [1, e.TYPES.ENUM, S],
        version: [2, e.TYPES.INT64],
        updatedAtMs: [3, e.TYPES.INT64],
      }),
      (ce.name = "SyncActionValue$MaibaAIFeaturesControlAction"),
      (ce.internalSpec = {
        aiFeatureStatus: [1, e.TYPES.ENUM, L],
        aiReplyMode: [2, e.TYPES.ENUM, R],
      }),
      (de.name = "SyncActionValue$BroadcastListParticipant"),
      (de.internalSpec = {
        lidJid: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        pnJid: [2, e.TYPES.STRING],
      }),
      (me.name = "SyncActionValue$BusinessBroadcastCampaignAction"),
      (me.internalSpec = {
        deviceId: [1, e.TYPES.INT32],
        adId: [2, e.TYPES.STRING],
        name: [3, e.TYPES.STRING],
        msgId: [4, e.TYPES.STRING],
        broadcastJid: [5, e.TYPES.STRING],
        reservedQuota: [6, e.TYPES.INT32],
        scheduledTimestamp: [7, e.TYPES.INT64],
        createTimestamp: [8, e.TYPES.INT64],
        status: [9, e.TYPES.ENUM, E],
      }),
      (pe.name = "SyncActionValue$BusinessBroadcastListAction"),
      (pe.internalSpec = {
        deleted: [1, e.TYPES.BOOL],
        participants: [2, e.FLAGS.REPEATED | e.TYPES.MESSAGE, de],
        listName: [3, e.TYPES.STRING],
        labelIds: [4, e.FLAGS.REPEATED | e.TYPES.STRING],
        audienceExpression: [5, e.TYPES.STRING],
        customAudienceFbid: [6, e.TYPES.STRING],
      }),
      (_e.name = "SyncActionValue$BusinessBroadcastAssociationAction"),
      (_e.internalSpec = { deleted: [1, e.TYPES.BOOL] }),
      (fe.name = "SyncActionValue$PaymentTosAction"),
      (fe.internalSpec = {
        paymentNotice: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, k],
        accepted: [2, e.FLAGS.REQUIRED | e.TYPES.BOOL],
      }),
      (ge.name = "SyncActionValue$CtwaPerCustomerDataSharingAction"),
      (ge.internalSpec = {
        isCtwaPerCustomerDataSharingEnabled: [1, e.TYPES.BOOL],
      }),
      (he.name = "SyncActionValue$OutContactAction"),
      (he.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
      }),
      (ye.name = "SyncActionValue$LidContactAction"),
      (ye.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
        username: [3, e.TYPES.STRING],
      }),
      (Ce.name = "SyncActionValue$NotificationActivitySettingAction"),
      (Ce.internalSpec = { notificationActivitySetting: [1, e.TYPES.ENUM, I] }),
      (be.name = "SyncActionValue$WaffleAccountLinkStateAction"),
      (be.internalSpec = { linkState: [2, e.TYPES.ENUM, T] }),
      (ve.name = "SyncActionValue$MerchantPaymentPartnerAction"),
      (ve.internalSpec = {
        status: [1, e.FLAGS.REQUIRED | e.TYPES.ENUM, D],
        country: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
        gatewayName: [3, e.TYPES.STRING],
        credentialId: [4, e.TYPES.STRING],
      }),
      (Se.name = "SyncActionValue$FavoritesAction"),
      (Se.internalSpec = {
        favorites: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Re],
      }),
      (Re.name = "SyncActionValue$FavoritesAction$Favorite"),
      (Re.internalSpec = { id: [1, e.TYPES.STRING] }),
      (Le.name = "SyncActionValue$NoteEditAction"),
      (Le.internalSpec = {
        type: [1, e.TYPES.ENUM, x],
        chatJid: [2, e.TYPES.STRING],
        createdAt: [3, e.TYPES.INT64],
        deleted: [4, e.TYPES.BOOL],
        unstructuredContent: [5, e.TYPES.STRING],
      }),
      (Ee.name =
        "SyncActionValue$PrivacySettingChannelsPersonalisedRecommendationAction"),
      (Ee.internalSpec = { isUserOptedOut: [1, e.TYPES.BOOL] }),
      (ke.name = "SyncActionValue$PrivacySettingDisableLinkPreviewsAction"),
      (ke.internalSpec = { isPreviewsDisabled: [1, e.TYPES.BOOL] }),
      (Ie.name = "SyncActionValue$WamoUserIdentifierAction"),
      (Ie.internalSpec = { identifier: [1, e.TYPES.STRING] }),
      (Te.name = "SyncActionValue$BubbleLockMessageAction"),
      (Te.internalSpec = { locked: [1, e.TYPES.BOOL] }),
      (De.name = "SyncActionValue$LockChatAction"),
      (De.internalSpec = { locked: [1, e.TYPES.BOOL] }),
      (xe.name = "SyncActionValue$CustomPaymentMethodsAction"),
      (xe.internalSpec = {
        customPaymentMethods: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, $e],
      }),
      ($e.name = "SyncActionValue$CustomPaymentMethod"),
      ($e.internalSpec = {
        credentialId: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        country: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
        type: [3, e.FLAGS.REQUIRED | e.TYPES.STRING],
        metadata: [4, e.FLAGS.REPEATED | e.TYPES.MESSAGE, Pe],
      }),
      (Pe.name = "SyncActionValue$CustomPaymentMethodMetadata"),
      (Pe.internalSpec = {
        key: [1, e.FLAGS.REQUIRED | e.TYPES.STRING],
        value: [2, e.FLAGS.REQUIRED | e.TYPES.STRING],
      }),
      (Ne.name = "SyncActionValue$PaymentInfoAction"),
      (Ne.internalSpec = { cpi: [1, e.TYPES.STRING] }),
      (Me.name = "SyncActionValue$LabelReorderingAction"),
      (Me.internalSpec = {
        sortedLabelIds: [1, e.FLAGS.REPEATED | e.TYPES.INT32],
      }),
      (we.name = "SyncActionValue$DeleteIndividualCallLogAction"),
      (we.internalSpec = {
        peerJid: [1, e.TYPES.STRING],
        isIncoming: [2, e.TYPES.BOOL],
      }),
      (Ae.name = "SyncActionValue$BotWelcomeRequestAction"),
      (Ae.internalSpec = { isSent: [1, e.TYPES.BOOL] }),
      (Fe.name = "SyncActionValue$NewsletterSavedInterestsAction"),
      (Fe.internalSpec = { newsletterSavedInterests: [1, e.TYPES.STRING] }),
      (Oe.name = "SyncActionValue$MusicUserIdAction"),
      (Oe.internalSpec = {
        musicUserId: [1, e.TYPES.STRING],
        music_user_id_map: [2, e.TYPES.MAP, [e.TYPES.STRING, e.TYPES.STRING]],
      }),
      (Be.name = "SyncActionValue$StatusPrivacyAction"),
      (Be.internalSpec = {
        mode: [1, e.TYPES.ENUM, $],
        userJid: [2, e.FLAGS.REPEATED | e.TYPES.STRING],
        shareToFb: [3, e.TYPES.BOOL],
        shareToIg: [4, e.TYPES.BOOL],
        customLists: [5, e.FLAGS.REPEATED | e.TYPES.MESSAGE, We],
        modes: [6, e.FLAGS.REPEATED | e.TYPES.ENUM, $],
      }),
      (We.name = "SyncActionValue$StatusPrivacyAction$CustomList"),
      (We.internalSpec = {
        listId: [1, e.TYPES.STRING],
        name: [2, e.TYPES.STRING],
        emoji: [3, e.TYPES.STRING],
        isSelected: [4, e.TYPES.BOOL],
        userJid: [5, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (qe.name = "SyncActionValue$UGCBot"),
      (qe.internalSpec = { definition: [1, e.TYPES.BYTES] }),
      (Ue.name = "SyncActionValue$CallLogAction"),
      (Ue.internalSpec = { callLogRecord: [1, e.TYPES.MESSAGE, W] }),
      (Ve.name = "SyncActionValue$PrivacySettingRelayAllCalls"),
      (Ve.internalSpec = { isEnabled: [1, e.TYPES.BOOL] }),
      (He.name = "SyncActionValue$DetectedOutcomesStatusAction"),
      (He.internalSpec = { isEnabled: [1, e.TYPES.BOOL] }),
      (Ge.name = "SyncActionValue$ExternalWebBetaAction"),
      (Ge.internalSpec = { isOptIn: [1, e.TYPES.BOOL] }),
      (ze.name = "SyncActionValue$MarketingMessageBroadcastAction"),
      (ze.internalSpec = { repliedCount: [1, e.TYPES.INT32] }),
      (je.name = "SyncActionValue$MarketingMessageAction"),
      (je.internalSpec = {
        name: [1, e.TYPES.STRING],
        message: [2, e.TYPES.STRING],
        type: [3, e.TYPES.ENUM, P],
        createdAt: [4, e.TYPES.INT64],
        lastSentAt: [5, e.TYPES.INT64],
        isDeleted: [6, e.TYPES.BOOL],
        mediaId: [7, e.TYPES.STRING],
      }),
      (Ke.name = "SyncActionValue$UsernameChatStartModeAction"),
      (Ke.internalSpec = { chatStartMode: [1, e.TYPES.ENUM, N] }),
      (Qe.name = "SyncActionValue$PnForLidChatAction"),
      (Qe.internalSpec = { pnJid: [1, e.TYPES.STRING] }),
      (Xe.name = "SyncActionValue$ChatAssignmentOpenedStatusAction"),
      (Xe.internalSpec = { chatOpened: [1, e.TYPES.BOOL] }),
      (Ye.name = "SyncActionValue$ChatAssignmentAction"),
      (Ye.internalSpec = { deviceAgentId: [1, e.TYPES.STRING] }),
      (Je.name = "SyncActionValue$StickerAction"),
      (Je.internalSpec = {
        url: [1, e.TYPES.STRING],
        fileEncSha256: [2, e.TYPES.BYTES],
        mediaKey: [3, e.TYPES.BYTES],
        mimetype: [4, e.TYPES.STRING],
        height: [5, e.TYPES.UINT32],
        width: [6, e.TYPES.UINT32],
        directPath: [7, e.TYPES.STRING],
        fileLength: [8, e.TYPES.UINT64],
        isFavorite: [9, e.TYPES.BOOL],
        deviceIdHint: [10, e.TYPES.UINT32],
        isLottie: [11, e.TYPES.BOOL],
        imageHash: [12, e.TYPES.STRING],
        isAvatarSticker: [13, e.TYPES.BOOL],
      }),
      (Ze.name = "SyncActionValue$RemoveRecentStickerAction"),
      (Ze.internalSpec = { lastStickerSentTs: [1, e.TYPES.INT64] }),
      (et.name = "SyncActionValue$PrimaryVersionAction"),
      (et.internalSpec = { version: [1, e.TYPES.STRING] }),
      (tt.name = "SyncActionValue$NuxAction"),
      (tt.internalSpec = { acknowledged: [1, e.TYPES.BOOL] }),
      (nt.name = "SyncActionValue$TimeFormatAction"),
      (nt.internalSpec = { isTwentyFourHourFormatEnabled: [1, e.TYPES.BOOL] }),
      (rt.name = "SyncActionValue$UserStatusMuteAction"),
      (rt.internalSpec = { muted: [1, e.TYPES.BOOL] }),
      (ot.name = "SyncActionValue$SubscriptionAction"),
      (ot.internalSpec = {
        isDeactivated: [1, e.TYPES.BOOL],
        isAutoRenewing: [2, e.TYPES.BOOL],
        expirationDate: [3, e.TYPES.INT64],
      }),
      (at.name = "SyncActionValue$AgentAction"),
      (at.internalSpec = {
        name: [1, e.TYPES.STRING],
        deviceId: [2, e.TYPES.INT32],
        isDeleted: [3, e.TYPES.BOOL],
      }),
      (it.name = "SyncActionValue$AndroidUnsupportedActions"),
      (it.internalSpec = { allowed: [1, e.TYPES.BOOL] }),
      (lt.name = "SyncActionValue$PrimaryFeature"),
      (lt.internalSpec = { flags: [1, e.FLAGS.REPEATED | e.TYPES.STRING] }),
      (st.name = "SyncActionValue$KeyExpiration"),
      (st.internalSpec = { expiredKeyEpoch: [1, e.TYPES.INT32] }),
      (ut.name = "SyncActionValue$SyncActionMessage"),
      (ut.internalSpec = {
        key: [
          1,
          e.TYPES.MESSAGE,
          o("WAWebProtobufsProtocol.pb").MessageKeySpec,
        ],
        timestamp: [2, e.TYPES.INT64],
      }),
      (ct.name = "SyncActionValue$SyncActionMessageRange"),
      (ct.internalSpec = {
        lastMessageTimestamp: [1, e.TYPES.INT64],
        lastSystemMessageTimestamp: [2, e.TYPES.INT64],
        messages: [3, e.FLAGS.REPEATED | e.TYPES.MESSAGE, ut],
      }),
      (dt.name = "SyncActionValue$UnarchiveChatsSetting"),
      (dt.internalSpec = { unarchiveChats: [1, e.TYPES.BOOL] }),
      (mt.name = "SyncActionValue$DeleteChatAction"),
      (mt.internalSpec = { messageRange: [1, e.TYPES.MESSAGE, ct] }),
      (pt.name = "SyncActionValue$ClearChatAction"),
      (pt.internalSpec = { messageRange: [1, e.TYPES.MESSAGE, ct] }),
      (_t.name = "SyncActionValue$MarkChatAsReadAction"),
      (_t.internalSpec = {
        read: [1, e.TYPES.BOOL],
        messageRange: [2, e.TYPES.MESSAGE, ct],
      }),
      (ft.name = "SyncActionValue$DeleteMessageForMeAction"),
      (ft.internalSpec = {
        deleteMedia: [1, e.TYPES.BOOL],
        messageTimestamp: [2, e.TYPES.INT64],
      }),
      (gt.name = "SyncActionValue$ArchiveChatAction"),
      (gt.internalSpec = {
        archived: [1, e.TYPES.BOOL],
        messageRange: [2, e.TYPES.MESSAGE, ct],
      }),
      (ht.name = "SyncActionValue$RecentEmojiWeightsAction"),
      (ht.internalSpec = {
        weights: [1, e.FLAGS.REPEATED | e.TYPES.MESSAGE, B],
      }),
      (yt.name = "SyncActionValue$LabelEditAction"),
      (yt.internalSpec = {
        name: [1, e.TYPES.STRING],
        color: [2, e.TYPES.INT32],
        predefinedId: [3, e.TYPES.INT32],
        deleted: [4, e.TYPES.BOOL],
        orderIndex: [5, e.TYPES.INT32],
        isActive: [6, e.TYPES.BOOL],
        type: [7, e.TYPES.ENUM, M],
        isImmutable: [8, e.TYPES.BOOL],
        muteEndTimeMs: [9, e.TYPES.INT64],
      }),
      (Ct.name = "SyncActionValue$LabelSublistAction"),
      (Ct.internalSpec = { subListId: [1, e.TYPES.INT32] }),
      (bt.name = "SyncActionValue$LabelAssociationAction"),
      (bt.internalSpec = {
        labeled: [1, e.TYPES.BOOL],
        modelMetaData: [2, e.TYPES.STRING],
      }),
      (vt.name = "SyncActionValue$QuickReplyAction"),
      (vt.internalSpec = {
        shortcut: [1, e.TYPES.STRING],
        message: [2, e.TYPES.STRING],
        keywords: [3, e.FLAGS.REPEATED | e.TYPES.STRING],
        count: [4, e.TYPES.INT32],
        deleted: [5, e.TYPES.BOOL],
        associatedLabelIds: [6, e.FLAGS.REPEATED | e.TYPES.STRING],
      }),
      (St.name = "SyncActionValue$LocaleSetting"),
      (St.internalSpec = { locale: [1, e.TYPES.STRING] }),
      (Rt.name = "SyncActionValue$PushNameSetting"),
      (Rt.internalSpec = { name: [1, e.TYPES.STRING] }),
      (Lt.name = "SyncActionValue$PinAction"),
      (Lt.internalSpec = { pinned: [1, e.TYPES.BOOL] }),
      (Et.name = "SyncActionValue$MuteAction"),
      (Et.internalSpec = {
        muted: [1, e.TYPES.BOOL],
        muteEndTimestamp: [2, e.TYPES.INT64],
        autoMuted: [3, e.TYPES.BOOL],
        muteEveryoneMentionEndTimestamp: [4, e.TYPES.INT64],
      }),
      (kt.name = "SyncActionValue$SharedDeviceAllowlistAction"),
      (kt.internalSpec = { allowed: [1, e.TYPES.BOOL] }),
      (It.name = "SyncActionValue$ContactAction"),
      (It.internalSpec = {
        fullName: [1, e.TYPES.STRING],
        firstName: [2, e.TYPES.STRING],
        lidJid: [3, e.TYPES.STRING],
        saveOnPrimaryAddressbook: [4, e.TYPES.BOOL],
        pnJid: [5, e.TYPES.STRING],
        username: [6, e.TYPES.STRING],
      }),
      (Tt.name = "SyncActionValue$StarAction"),
      (Tt.internalSpec = { starred: [1, e.TYPES.BOOL] }),
      (Dt.name = "SyncActionData"),
      (Dt.internalSpec = {
        index: [1, e.TYPES.BYTES],
        value: [2, e.TYPES.MESSAGE, U],
        padding: [3, e.TYPES.BYTES],
        version: [4, e.TYPES.INT32],
      }),
      (xt.name = "PatchDebugData"),
      (xt.internalSpec = {
        currentLthash: [1, e.TYPES.BYTES],
        newLthash: [2, e.TYPES.BYTES],
        patchVersion: [3, e.TYPES.BYTES],
        collectionName: [4, e.TYPES.BYTES],
        firstFourBytesFromAHashOfSnapshotMacKey: [5, e.TYPES.BYTES],
        newLthashSubtract: [6, e.TYPES.BYTES],
        numberAdd: [7, e.TYPES.INT32],
        numberRemove: [8, e.TYPES.INT32],
        numberOverride: [9, e.TYPES.INT32],
        senderPlatform: [10, e.TYPES.ENUM, w],
        isSenderPrimary: [11, e.TYPES.BOOL],
      }),
      (l.CollectionName = u),
      (l.MutationProps = c),
      (l.CallLogRecord$CallType = d),
      (l.CallLogRecord$SilenceReason = m),
      (l.CallLogRecord$CallResult = p),
      (l.SyncActionValue$WASARootSecretAction$RootSecretEntry$Status = _),
      (l.SyncActionValue$SettingsSyncAction$MediaQualitySetting = f),
      (l.SyncActionValue$SettingsSyncAction$DisplayMode = g),
      (l.SyncActionValue$SettingsSyncAction$SettingKey = h),
      (l.SyncActionValue$SettingsSyncAction$SettingPlatform = y),
      (l.SyncActionValue$InteractiveMessageAction$InteractiveMessageActionMode =
        C),
      (l.SyncActionValue$PrivateProcessingSettingAction$PrivateProcessingStatus =
        b),
      (l.SyncActionValue$AvatarUpdatedAction$AvatarEventType = v),
      (l.SyncActionValue$BizAISettingsNudgeAction$BizAISettingsCategory = S),
      (l.SyncActionValue$MaibaAIFeaturesControlAction$MaibaAIReplyMode = R),
      (l.SyncActionValue$MaibaAIFeaturesControlAction$MaibaAIFeatureStatus = L),
      (l.SyncActionValue$BusinessBroadcastCampaignStatus = E),
      (l.SyncActionValue$PaymentTosAction$PaymentNotice = k),
      (l.SyncActionValue$NotificationActivitySettingAction$NotificationActivitySetting =
        I),
      (l.SyncActionValue$WaffleAccountLinkStateAction$AccountLinkState = T),
      (l.SyncActionValue$MerchantPaymentPartnerAction$Status = D),
      (l.SyncActionValue$NoteEditAction$NoteType = x),
      (l.SyncActionValue$StatusPrivacyAction$StatusDistributionMode = $),
      (l.SyncActionValue$MarketingMessageAction$MarketingMessagePrototypeType =
        P),
      (l.SyncActionValue$UsernameChatStartModeAction$ChatStartMode = N),
      (l.SyncActionValue$LabelEditAction$ListType = M),
      (l.PatchDebugData$Platform = w),
      (l.MutationProps$MutationName = A),
      (l.getMutationProps$CollectionName = F),
      (l.CollectionName$CollectionNameStr = O),
      (l.RecentEmojiWeightSpec = B),
      (l.CallLogRecordSpec = W),
      (l.CallLogRecord$ParticipantInfoSpec = q),
      (l.SyncActionValueSpec = U),
      (l.SyncActionValue$BusinessFolderActivationActionSpec = V),
      (l.SyncActionValue$CtwaMessageReceivedActionSpec = H),
      (l.SyncActionValue$WASARootSecretActionSpec = G),
      (l.SyncActionValue$WASARootSecretAction$RootSecretEntrySpec = z),
      (l.SyncActionValue$CoexV2VersionActionSpec = j),
      (l.SyncActionValue$SubscriptionsSyncV2ActionSpec = K),
      (l.SyncActionValue$SubscriptionsSyncV2Action$PaidFeatureSpec = Q),
      (l.SyncActionValue$SubscriptionsSyncV2Action$SubscriptionInfoSpec = X),
      (l.SyncActionValue$ContactManagerMetadataActionSpec = Y),
      (l.SyncActionValue$CustomerDataActionSpec = J),
      (l.SyncActionValue$BusinessBroadcastInsightsActionSpec = Z),
      (l.SyncActionValue$SettingsSyncActionSpec = ee),
      (l.SyncActionValue$AutoOrganizeBusinessChatSettingSpec = te),
      (l.SyncActionValue$NctSaltSyncActionSpec = ne),
      (l.SyncActionValue$InteractiveMessageActionSpec = re),
      (l.SyncActionValue$ThreadPinActionSpec = oe),
      (l.SyncActionValue$AiThreadRenameActionSpec = ae),
      (l.SyncActionValue$PrivateProcessingSettingActionSpec = ie),
      (l.SyncActionValue$AvatarUpdatedActionSpec = le),
      (l.SyncActionValue$StatusPostOptInNotificationPreferencesActionSpec = se),
      (l.SyncActionValue$BizAISettingsNudgeActionSpec = ue),
      (l.SyncActionValue$MaibaAIFeaturesControlActionSpec = ce),
      (l.SyncActionValue$BroadcastListParticipantSpec = de),
      (l.SyncActionValue$BusinessBroadcastCampaignActionSpec = me),
      (l.SyncActionValue$BusinessBroadcastListActionSpec = pe),
      (l.SyncActionValue$BusinessBroadcastAssociationActionSpec = _e),
      (l.SyncActionValue$PaymentTosActionSpec = fe),
      (l.SyncActionValue$CtwaPerCustomerDataSharingActionSpec = ge),
      (l.SyncActionValue$OutContactActionSpec = he),
      (l.SyncActionValue$LidContactActionSpec = ye),
      (l.SyncActionValue$NotificationActivitySettingActionSpec = Ce),
      (l.SyncActionValue$WaffleAccountLinkStateActionSpec = be),
      (l.SyncActionValue$MerchantPaymentPartnerActionSpec = ve),
      (l.SyncActionValue$FavoritesActionSpec = Se),
      (l.SyncActionValue$FavoritesAction$FavoriteSpec = Re),
      (l.SyncActionValue$NoteEditActionSpec = Le),
      (l.SyncActionValue$PrivacySettingChannelsPersonalisedRecommendationActionSpec =
        Ee),
      (l.SyncActionValue$PrivacySettingDisableLinkPreviewsActionSpec = ke),
      (l.SyncActionValue$WamoUserIdentifierActionSpec = Ie),
      (l.SyncActionValue$BubbleLockMessageActionSpec = Te),
      (l.SyncActionValue$LockChatActionSpec = De),
      (l.SyncActionValue$CustomPaymentMethodsActionSpec = xe),
      (l.SyncActionValue$CustomPaymentMethodSpec = $e),
      (l.SyncActionValue$CustomPaymentMethodMetadataSpec = Pe),
      (l.SyncActionValue$PaymentInfoActionSpec = Ne),
      (l.SyncActionValue$LabelReorderingActionSpec = Me),
      (l.SyncActionValue$DeleteIndividualCallLogActionSpec = we),
      (l.SyncActionValue$BotWelcomeRequestActionSpec = Ae),
      (l.SyncActionValue$NewsletterSavedInterestsActionSpec = Fe),
      (l.SyncActionValue$MusicUserIdActionSpec = Oe),
      (l.SyncActionValue$StatusPrivacyActionSpec = Be),
      (l.SyncActionValue$StatusPrivacyAction$CustomListSpec = We),
      (l.SyncActionValue$UGCBotSpec = qe),
      (l.SyncActionValue$CallLogActionSpec = Ue),
      (l.SyncActionValue$PrivacySettingRelayAllCallsSpec = Ve),
      (l.SyncActionValue$DetectedOutcomesStatusActionSpec = He),
      (l.SyncActionValue$ExternalWebBetaActionSpec = Ge),
      (l.SyncActionValue$MarketingMessageBroadcastActionSpec = ze),
      (l.SyncActionValue$MarketingMessageActionSpec = je),
      (l.SyncActionValue$UsernameChatStartModeActionSpec = Ke),
      (l.SyncActionValue$PnForLidChatActionSpec = Qe),
      (l.SyncActionValue$ChatAssignmentOpenedStatusActionSpec = Xe),
      (l.SyncActionValue$ChatAssignmentActionSpec = Ye),
      (l.SyncActionValue$StickerActionSpec = Je),
      (l.SyncActionValue$RemoveRecentStickerActionSpec = Ze),
      (l.SyncActionValue$PrimaryVersionActionSpec = et),
      (l.SyncActionValue$NuxActionSpec = tt),
      (l.SyncActionValue$TimeFormatActionSpec = nt),
      (l.SyncActionValue$UserStatusMuteActionSpec = rt),
      (l.SyncActionValue$SubscriptionActionSpec = ot),
      (l.SyncActionValue$AgentActionSpec = at),
      (l.SyncActionValue$AndroidUnsupportedActionsSpec = it),
      (l.SyncActionValue$PrimaryFeatureSpec = lt),
      (l.SyncActionValue$KeyExpirationSpec = st),
      (l.SyncActionValue$SyncActionMessageSpec = ut),
      (l.SyncActionValue$SyncActionMessageRangeSpec = ct),
      (l.SyncActionValue$UnarchiveChatsSettingSpec = dt),
      (l.SyncActionValue$DeleteChatActionSpec = mt),
      (l.SyncActionValue$ClearChatActionSpec = pt),
      (l.SyncActionValue$MarkChatAsReadActionSpec = _t),
      (l.SyncActionValue$DeleteMessageForMeActionSpec = ft),
      (l.SyncActionValue$ArchiveChatActionSpec = gt),
      (l.SyncActionValue$RecentEmojiWeightsActionSpec = ht),
      (l.SyncActionValue$LabelEditActionSpec = yt),
      (l.SyncActionValue$LabelSublistActionSpec = Ct),
      (l.SyncActionValue$LabelAssociationActionSpec = bt),
      (l.SyncActionValue$QuickReplyActionSpec = vt),
      (l.SyncActionValue$LocaleSettingSpec = St),
      (l.SyncActionValue$PushNameSettingSpec = Rt),
      (l.SyncActionValue$PinActionSpec = Lt),
      (l.SyncActionValue$MuteActionSpec = Et),
      (l.SyncActionValue$SharedDeviceAllowlistActionSpec = kt),
      (l.SyncActionValue$ContactActionSpec = It),
      (l.SyncActionValue$StarActionSpec = Tt),
      (l.SyncActionDataSpec = Dt),
      (l.PatchDebugDataSpec = xt));
  },
  98,
);
