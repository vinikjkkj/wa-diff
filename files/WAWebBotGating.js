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
        : o("WAWebBotBaseGating").isBotEnabled() &&
            o("WAWebABProps").getABPropConfigValue("bonsai_ptt_enabled") ===
              !0 &&
            o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
              (t = o("WAWebABProps").getABPropConfigValue(
                "ai_ptt_main_gate_supported_languages",
              )) != null
                ? t
                : "en",
            );
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
        N() &&
        o("WAWebABProps").getABPropConfigValue(
          "bonsai_chat_list_entry_point_enabled",
        )
      );
    }
    function p() {
      return N() && !m();
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
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function C() {
      return o("WAWebBotBaseGating").isBotEnabled()
        ? o("WAWebABProps").getABPropConfigValue("ai_web_forward_flow_enabled")
        : !1;
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_main_gate_enabled",
      );
    }
    function S() {
      return v()
        ? !o("WAWebMobilePlatforms").isSMB() &&
            o("WAWebABProps").getABPropConfigValue(
              "ai_rich_response_web_structured_response_enabled",
            )
        : !1;
    }
    function R(e) {
      return (
        e.richResponse.parseState !==
          o("WAWebRichResponse.flow").RichResponseParseState.Unparsed &&
        o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()
      );
    }
    function L(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e) ||
        (o("WAWebCommonMsgUtils").isRichResponseMsg(e.type) &&
          !o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled())
      );
    }
    function E() {
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
    function k() {
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
    function I() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_master_notice_id",
      );
      if (e.trim() === "") return null;
      var t = Number(e);
      return isNaN(t) ? null : t;
    }
    function T() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_migrate_away_from_inline_tos_enabled",
      );
    }
    function D() {
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
    function x() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_null_state_update_interval",
        ) * 1e3
      );
    }
    function $() {
      return o("WATimeUtils").DAY_MILLISECONDS;
    }
    function P() {
      return 1e3;
    }
    function N() {
      return !(
        !o("WAWebBotBaseGating").isBotEnabled() ||
        !e() ||
        (!o("WAWebBotTos").hasSeenShortcutTos() &&
          !o("WAWebBotTos").canShowBotTos(
            o("WAWebBotTosIds").getBotShortcutTosId(),
          ))
      );
    }
    function M() {
      return (
        N() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_search_experience_web_enabled",
        )
      );
    }
    function w() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_null_state_row_count",
      );
    }
    function A() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_search_max_num_suggestions",
      );
    }
    function F(e) {
      return e.trimmed().length >= 3 && !e.hasFilter();
    }
    function O() {
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
    function B() {
      return (
        O() &&
        o("WAWebABProps").getABPropConfigValue("ai_chat_threads_web_enabled")
      );
    }
    function W() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_thread_capability_enabled",
      );
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_web_msgs_load_limit",
      );
    }
    function U() {
      return (
        N() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
      );
    }
    function V() {
      return (
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled() &&
        o("WAWebABProps").getABPropConfigValue("is_ai_mode_selector_visible")
      );
    }
    function H() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_reasoning_enabled",
      );
    }
    function G() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_dynamic_model_branding_enabled",
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
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_web_meta_ai_image_input_enabled",
        ) &&
        o("WAWebBotBaseGating").isDeviceLanguageInLanguages(
          (e = o("WAWebABProps").getABPropConfigValue(
            "ai_metabot_image_input_languages",
          )) != null
            ? e
            : "en",
        )
      );
    }
    function Q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_web_meta_ai_pdf_document_input_enabled",
      );
    }
    function X() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
    }
    function Y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function ee(e, t) {
      return B() && t != null && o("WAWebBotUtils").isMetaAiBot(e);
    }
    function te(e) {
      return B() && o("WAWebBotUtils").isMetaAiBot(e);
    }
    function ne() {
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
    function re() {
      return (
        ne() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function oe() {
      return (
        ne() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function ae() {
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
    function ie() {
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
    function le() {
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
    function se() {
      return (
        B() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function ue() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function ce() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_commands_enabled",
      );
    }
    function de() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_video_upload_enabled",
      );
    }
    function me() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_hatch_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function pe() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function _e() {
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
      (l.ugcBotProfileSyncInterval = y),
      (l.isAiWebForwardEnabled = C),
      (l.isAiAsContactEnabled = b),
      (l.isRichStructuredResponseEnabled = S),
      (l.shouldRenderStructuredRichResponseMsg = R),
      (l.showBotSearchPlugin = L),
      (l.getNonBlockingBotNoticeIds = E),
      (l.getInlineBotNoticeIds = k),
      (l.getMasterBotNoticeId = I),
      (l.isMigrateAwayFromInlineBotTosEnabled = T),
      (l.getAiExperimentGraphqlConfig = D),
      (l.getMetaAISearchNullStateSuggestionsUpdateIntervalMs = x),
      (l.getMetaAISearchTypeAheadSuggestionsUpdateIntervalMs = $),
      (l.getMetaAISearchTypeAheadSuggestionsLRUCacheCapacity = P),
      (l.isMetaAIChatInteractionEnabled = N),
      (l.isMetaAISearchExperienceEnabled = M),
      (l.getMetaAISearchNullStateRowCount = w),
      (l.getMetaAISearchTypeAheadMaxSuggestionsCount = A),
      (l.canSearchMetaAiSuggestions = F),
      (l.isAiChatThreadsEnabled = B),
      (l.isAiThreadCapabilityEnabled = W),
      (l.getAiThreadMsgsLoadLimit = q),
      (l.isAskMetaAiEnabled = U),
      (l.isAiModeSelectorInteractive = V),
      (l.isRichResponseReasoningEnabled = H),
      (l.isDynamicModelBrandingEnabled = G),
      (l.getAiDynamicModeSelectorTtlSeconds = z),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = j),
      (l.isMetaAiImageInputEnabled = K),
      (l.isMetaAiDocUploadEnabled = Q),
      (l.getMetaAiSupportedFileTypes = X),
      (l.getMetaAiFileUploadCountLimit = Y),
      (l.getMetaAiImageSendLimit = J),
      (l.isMetaAiDocumentOcrImageConversionEnabled = Z),
      (l.shouldSkipMetaAiChatlistHighlight = ee),
      (l.isMetaAiChatInThreadsMode = te),
      (l.getImplicitThreadRoutingStrategy = ne),
      (l.isImplicitThreadRoutingEnabled = re),
      (l.isDefaultThreadRoutingEnabled = oe),
      (l.getManusBotName = ae),
      (l.getManusBotProfileThumb = ie),
      (l.getHatchBotName = le),
      (l.isAiThreadPinEnabled = se),
      (l.getAiThreadPinMaxCount = ue),
      (l.isHatchCommandsEnabled = ce),
      (l.isHatchVideoUploadEnabled = de),
      (l.getHatchDocumentUploadSizeLimitBytes = me),
      (l.getMetaAiDocumentUploadSizeLimitBytes = pe),
      (l.getHatchBotProfileThumb = _e));
  },
  98,
);
