__d(
  "WAWebBotGating",
  [
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotGenTypingIndicatorMsg",
    "WAWebBotTos",
    "WAWebBotTosIds",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUtils",
    "WAWebCommonMsgUtils",
    "WAWebImplicitThreadRoutingStrategy",
    "WAWebMobilePlatforms",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsDeviceCapabilities.pb",
    "WAWebRichResponse.flow",
    "WAWebUserPrefsBot",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue("bonsai_entry_point_enabled") ===
        !0
      );
    }
    function s(e) {
      var t;
      return o("WAWebBotUtils").isManusBot(e) ||
        o("WAWebBotUtils").isHatchBot(e)
        ? !0
        : !o("WAWebBotBaseGating").isBotEnabled() ||
            !o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
              (t = o("WAWebABProps").getABPropConfigValue(
                "ai_ptt_main_gate_supported_languages",
              )) != null
                ? t
                : "en",
            )
          ? !1
          : o("WAWebABProps").getABPropConfigValue("bonsai_ptt_enabled") === !0;
    }
    function u(e) {
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
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wabai_message_feedback_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("bot_3p_status") === 2;
    }
    function m() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function p() {
      return M() && !m();
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_cooldown");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("wabai_consent_required");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue("bonsai_fp_ugc_sender");
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_ugc_not_an_expert_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bot_profile_gql_migration_enabled",
      );
    }
    function C() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function b() {
      return o("WAWebBotBaseGating").isBotEnabled()
        ? o("WAWebABProps").getABPropConfigValue("ai_web_forward_flow_enabled")
        : !1;
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function S() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_main_gate_enabled",
      );
    }
    function R() {
      return S()
        ? !o("WAWebMobilePlatforms").isSMB() &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_rich_response_web_structured_response_enabled",
            )
        : !1;
    }
    function L(e) {
      return (
        e.richResponse.parseState !==
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed &&
        o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()
      );
    }
    function E(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e) ||
        (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type) &&
          !o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled())
      );
    }
    function k() {
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
    function I() {
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
    function T() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_master_notice_id",
      );
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function D() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function x() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_experiment_graphql_config",
      );
      if (e.trim() !== "") {
        var t = e
          .split(",")
          .map(function (e) {
            return parseInt(e, 10);
          })
          .filter(function (e) {
            return !isNaN(e);
          });
        if (t.length !== 0) return t;
      }
    }
    function $() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_null_state_update_interval",
        ) * 1e3
      );
    }
    function P() {
      return o("WATimeUtils").DAY_MILLISECONDS;
    }
    function N() {
      return 1e3;
    }
    function M() {
      return !(
        !o("WAWebBotBaseGating").isBotEnabled() ||
        !e() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function w() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_experience_web_enabled",
        )
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_row_count",
      );
    }
    function F() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_max_num_suggestions",
      );
    }
    function O(e) {
      return e.trimmed().length >= 3 && !e.hasFilter();
    }
    function B() {
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
    function W() {
      return (
        B() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_thread_capability_enabled",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_web_msgs_load_limit",
      );
    }
    function V() {
      return (
        M() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
      );
    }
    function H() {
      return (
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled() &&
        o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible")
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_reasoning_enabled",
      );
    }
    function z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_mode_selector_ttl_seconds",
      );
    }
    function j() {
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function K() {
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
    function Q() {
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
    var X = "pdf";
    function Y() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : X;
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function ee() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function te(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && W();
    }
    function ne(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && W();
    }
    function re() {
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
    function oe() {
      return (
        re() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function ae() {
      return (
        re() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function ie() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_bot_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.name == "string") return t.name;
        } catch (e) {
          return "";
        }
      return "";
    }
    function le() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_bot_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.profile_thumb == "string") return t.profile_thumb;
        } catch (e) {
          return "";
        }
      return "";
    }
    function se() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.name == "string") return t.name;
        } catch (e) {
          return "";
        }
      return "";
    }
    function ue() {
      return (
        W() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_commands_enabled",
      );
    }
    function me() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_upload_enabled",
      );
    }
    function pe() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function _e() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function fe() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_integration_bot_profile",
      );
      if (e !== "")
        try {
          var t = JSON.parse(e);
          if (typeof t.profile_thumb == "string") return t.profile_thumb;
        } catch (e) {
          return "";
        }
      return "";
    }
    ((l.isBotPttEnabled = s),
      (l.shouldAnimateAsBotStream = u),
      (l.isBizBot1pFeedbackEnabled = c),
      (l.isBizBot3pAvailable = d),
      (l.isBotShortcutEntryPointEnabled = m),
      (l.isBotNewChatEntryPointEnabled = p),
      (l.bizBotConsentDismissalCooldown = _),
      (l.isBizBotConsentRequired = f),
      (l.isFbidBotEnabled = g),
      (l.isUgcNotExpertEnabled = h),
      (l.isBotProfileGqlMigrationEnabled = y),
      (l.ugcBotProfileSyncInterval = C),
      (l.isAiWebForwardEnabled = b),
      (l.isAiAsContactEnabled = v),
      (l.isRichStructuredResponseEnabled = R),
      (l.shouldRenderStructuredRichResponseMsg = L),
      (l.showBotSearchPlugin = E),
      (l.getNonBlockingBotNoticeIds = k),
      (l.getInlineBotNoticeIds = I),
      (l.getMasterBotNoticeId = T),
      (l.isMigrateAwayFromInlineBotTosEnabled = D),
      (l.getAiExperimentGraphqlConfig = x),
      (l.getMetaAISearchNullStateSuggestionsUpdateIntervalMs = $),
      (l.getMetaAISearchTypeAheadSuggestionsUpdateIntervalMs = P),
      (l.getMetaAISearchTypeAheadSuggestionsLRUCacheCapacity = N),
      (l.isMetaAIChatInteractionEnabled = M),
      (l.isMetaAISearchExperienceEnabled = w),
      (l.getMetaAISearchNullStateRowCount = A),
      (l.getMetaAISearchTypeAheadMaxSuggestionsCount = F),
      (l.canSearchMetaAiSuggestions = O),
      (l.isAiChatThreadsEnabled = W),
      (l.isAiThreadCapabilityEnabled = q),
      (l.getAiThreadMsgsLoadLimit = U),
      (l.isAskMetaAiEnabled = V),
      (l.isAiModeSelectorInteractive = H),
      (l.isRichResponseReasoningEnabled = G),
      (l.getAiDynamicModeSelectorTtlSeconds = z),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = j),
      (l.isMetaAiImageInputEnabled = K),
      (l.isMetaAiDocUploadEnabled = Q),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = X),
      (l.getMetaAiSupportedFileTypes = Y),
      (l.getMetaAiFileUploadCountLimit = J),
      (l.getMetaAiImageSendLimit = Z),
      (l.isMetaAiDocumentOcrImageConversionEnabled = ee),
      (l.shouldSkipMetaAiChatlistHighlight = te),
      (l.isMetaAiChatInThreadsMode = ne),
      (l.getImplicitThreadRoutingStrategy = re),
      (l.isImplicitThreadRoutingEnabled = oe),
      (l.isDefaultThreadRoutingEnabled = ae),
      (l.getManusBotName = ie),
      (l.getManusBotProfileThumb = le),
      (l.getHatchBotName = se),
      (l.isAiThreadPinEnabled = ue),
      (l.getAiThreadPinMaxCount = ce),
      (l.isHatchCommandsEnabled = de),
      (l.isHatchVideoUploadEnabled = me),
      (l.getHatchDocumentUploadSizeLimitBytes = pe),
      (l.getMetaAiDocumentUploadSizeLimitBytes = _e),
      (l.getHatchBotProfileThumb = fe));
  },
  98,
);
