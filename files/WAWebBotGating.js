__d(
  "WAWebBotGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebImplicitThreadRoutingStrategy",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebRichResponse.flow",
    "WAWebUnifiedResponseUtils",
    "WAWebUserPrefsBot",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return o("WAWebBotUtils").isHatchBot(e)
        ? !0
        : o("WAWebBotBaseGating").isBotEnabled()
          ? o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
              (t = o("WAWebABProps").getABPropConfigValue(
                "ai_ptt_main_gate_supported_languages",
              )) != null
                ? t
                : "en",
            )
          : !1;
    }
    function s(e) {
      return !o("WAWebBotBaseGating").isBotEnabled() ||
        (o("WAWebMsgGetters").getUnifiedResponse(e) != null &&
          o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
            e.t,
          ))
        ? !1
        : !!o("WAWebMsgGetters").getIsMetaBotResponse(e) ||
            e.subtype ===
              o("WAWebBotGenTypingIndicatorMsg")
                .BOT_TYPING_PLACEHOLDER_MSG_SUBTYPE;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_feedback_enabled",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") === 2;
    }
    function d() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function m() {
      return E() && !d();
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_required");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bot_profile_gql_migration_enabled",
      );
    }
    function g() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function y(e) {
      return o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e.unsafe())
        ? !0
        : e.richResponse.parseState !==
            o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function C(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e)
      );
    }
    function b() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_non_blocking_notices",
      );
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return !isNaN(e) && e !== "";
        })
        .map(Number);
    }
    function v() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_inline_notices",
      );
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .filter(function (e) {
          return !isNaN(e) && e !== "";
        })
        .map(Number);
    }
    function S() {
      if (o("WAWebMobilePlatforms").isSMB()) {
        var e = R(
          o("WAWebABProps").getABPropConfigValue(
            "smb_web_ai_tos_master_notice_id",
          ),
        );
        if (e != null) return e;
      }
      return R(
        o("WAWebABProps").getABPropConfigValue("ai_pdfn_tos_master_notice_id"),
      );
    }
    function R(e) {
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function L() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function E() {
      return !(
        o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBotBaseGating").isBotEnabled() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function k() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_ask_button_web_enabled",
        )
      );
    }
    function I() {
      var e =
        o("WAWebUserPrefsBot").getPrimaryAiThreadSupportLevelFromLocalStorage();
      return (
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.INFRA ||
        e ===
          o("WAWebProtobufsDeviceCapabilities.pb")
            .DeviceCapabilities$AiThread$SupportLevel.FULL
      );
    }
    function T() {
      return (
        I() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_thread_capability_enabled",
      );
    }
    function x() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
      );
    }
    function $() {
      return (
        x() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_web_ask_meta_ai_improvement_enabled",
        )
      );
    }
    function P() {
      return (
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled() &&
        o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible")
      );
    }
    function N() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_ttl_seconds",
      );
    }
    function M() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_convo_starter_suggestions_update_interval",
      );
    }
    function w() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function A() {
      var e;
      return !o("WAWebBotBaseGating").isBotEnabled() ||
        !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
          (e = o("WAWebABProps").getABPropConfigValue(
            "ai_metabot_image_input_languages",
          )) != null
            ? e
            : "en",
        )
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_web_meta_ai_image_input_enabled",
          );
    }
    function F() {
      var e;
      return !o("WAWebMobilePlatforms").isSMB() ||
        !o("WAWebBotBaseGating").isBotEnabled()
        ? !1
        : o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
            (e = o("WAWebABProps").getABPropConfigValue(
              "smb_web_meta_ai_image_input_languages",
            )) != null
              ? e
              : "",
          );
    }
    function O(e) {
      return o("WAWebBotUtils").isMetaAiBot(e)
        ? A() || B() || W()
        : o("WAWebBotUtils").isBusinessAssistantBot(e)
          ? F()
          : !1;
    }
    function B() {
      var e;
      return o("WAWebBotBaseGating").isBotEnabled()
        ? o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
            (e = o("WAWebABProps").getABPropConfigValue(
              "ai_video_upload_support_languages",
            )) != null
              ? e
              : "",
          ) &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_video_upload_web_enabled",
            )
        : !1;
    }
    function W() {
      var e;
      return !o("WAWebBotBaseGating").isBotEnabled() ||
        !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
          (e = o("WAWebABProps").getABPropConfigValue(
            "ai_metabot_document_upload_enabled",
          )) != null
            ? e
            : "en",
        )
        ? !1
        : o("WAWebABProps").getABPropConfigValue(
            "ai_web_meta_ai_pdf_document_input_enabled",
          );
    }
    function q() {
      return A() || B();
    }
    var U = "pdf";
    function V() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : U;
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function j(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && T();
    }
    function K(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && T();
    }
    function Q() {
      var e,
        t = o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_implicit_routing_strategy",
        );
      return (e = o(
        "WAWebImplicitThreadRoutingStrategy",
      ).ImplicitThreadRoutingStrategy.cast(t)) != null
        ? e
        : o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
            .NewThread;
    }
    function X() {
      return (
        Q() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function Y() {
      return (
        Q() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function J() {
      return (
        T() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_bot_orphan_logic_enabled",
      );
    }
    function te() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function ne() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_video_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    ((l.isBotPttEnabled = e),
      (l.shouldAnimateAsBotStream = s),
      (l.isBizBot1pFeedbackEnabled = u),
      (l.isBizBot3pAvailable = c),
      (l.isBotShortcutEntryPointEnabled = d),
      (l.isBotNewChatEntryPointEnabled = m),
      (l.bizBotConsentDismissalCooldown = p),
      (l.isBizBotConsentRequired = _),
      (l.isBotProfileGqlMigrationEnabled = f),
      (l.ugcBotProfileSyncInterval = g),
      (l.isAiAsContactEnabled = h),
      (l.shouldRenderStructuredRichResponseMsg = y),
      (l.showBotSearchPlugin = C),
      (l.getNonBlockingBotNoticeIds = b),
      (l.getInlineBotNoticeIds = v),
      (l.getMasterBotNoticeId = S),
      (l.isMigrateAwayFromInlineBotTosEnabled = L),
      (l.isMetaAIChatInteractionEnabled = E),
      (l.isAiSearchAskButtonEnabled = k),
      (l.isAiChatThreadsEnabled = T),
      (l.isAiThreadCapabilityEnabled = D),
      (l.isAskMetaAiEnabled = x),
      (l.isAskMetaAiImprovementEnabled = $),
      (l.isAiModeSelectorInteractive = P),
      (l.getAiDynamicModeSelectorTtlSeconds = N),
      (l.getMetaAiNullStatePromptsUpdateIntervalSeconds = M),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = w),
      (l.isMetaAiImageInputEnabled = A),
      (l.isBusinessAssistantImageInputEnabled = F),
      (l.isMediaInputEnabledForAssistantBotChat = O),
      (l.isMetaAiVideoInputEnabled = B),
      (l.isMetaAiDocUploadEnabled = W),
      (l.isAnyMetaAiMediaInputEnabled = q),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = U),
      (l.getMetaAiSupportedFileTypes = V),
      (l.getMetaAiFileUploadCountLimit = H),
      (l.getMetaAiImageSendLimit = G),
      (l.isMetaAiDocumentOcrImageConversionEnabled = z),
      (l.shouldSkipMetaAiChatlistHighlight = j),
      (l.isMetaAiChatInThreadsMode = K),
      (l.getImplicitThreadRoutingStrategy = Q),
      (l.isImplicitThreadRoutingEnabled = X),
      (l.isDefaultThreadRoutingEnabled = Y),
      (l.isAiThreadPinEnabled = J),
      (l.getAiThreadPinMaxCount = Z),
      (l.isBotOrphanMsgEnabled = ee),
      (l.getMetaAiDocumentUploadSizeLimitBytes = te),
      (l.getMetaAiVideoUploadSizeLimitBytes = ne));
  },
  98,
);
