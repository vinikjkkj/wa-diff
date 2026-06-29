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
      return o("WAWebBotUtils").isManusBot(e) ||
        o("WAWebBotUtils").isHatchBot(e)
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
        "ai_ugc_not_an_expert_enabled",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bot_profile_gql_migration_enabled",
      );
    }
    function h() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "ai_home_bot_profile_sync_interval_sec",
        ) * 1e3
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_forward_flow_surface_meta_ai_as_contact_enabled",
      );
    }
    function C(e) {
      return o("WAWebUnifiedResponseUtils").isUnifiedResponseVisible(e.unsafe())
        ? !0
        : e.richResponse.parseState !==
            o("WAWebRichResponse.flow").RichResponseParseState.Unparsed;
    }
    function b(e) {
      return !(
        e.type === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        !o("WAWebMsgGetters").getIsBotSearchResponse(e)
      );
    }
    function v() {
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
    function S() {
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
    function R() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_pdfn_tos_master_notice_id",
      );
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
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_web_msgs_load_limit",
      );
    }
    function $() {
      return (
        E() &&
        o("WAWebABProps").getABPropConfigValue("ai_web_ask_meta_ai_enabled")
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
      return (
        o("WAWebBotBaseGating").isBotEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_historical_messages_migration_enabled",
        )
      );
    }
    function w() {
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
    function A() {
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
    function F() {
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
    function O() {
      return w() || A();
    }
    var B = "pdf";
    function W() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_supported_file_types",
      );
      return e !== "" ? e : B;
    }
    function q() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_count_limit",
      );
    }
    function U() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_send_image_limit",
      );
    }
    function V() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_metabot_document_ocr_image_conversion_enabled",
      );
    }
    function H(e, t) {
      return t != null && o("WAWebBotUtils").isMetaAiBot(e) && T();
    }
    function G(e) {
      return o("WAWebBotUtils").isMetaAiBot(e) && T();
    }
    function z() {
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
    function j() {
      return (
        z() !==
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .NewThread
      );
    }
    function K() {
      return (
        z() ===
        o("WAWebImplicitThreadRoutingStrategy").ImplicitThreadRoutingStrategy
          .DefaultThread
      );
    }
    function Q() {
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
    function X() {
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
    function Y() {
      return (
        T() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_chat_threads_pin_enabled",
        ) === !0
      );
    }
    function J() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_chat_threads_pin_max_count",
      );
    }
    function Z() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_bot_orphan_logic_enabled",
      );
    }
    function ee() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ai_file_upload_size_limit_mb",
      );
      return e * 1024 * 1024;
    }
    function te() {
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
      (l.isUgcNotExpertEnabled = f),
      (l.isBotProfileGqlMigrationEnabled = g),
      (l.ugcBotProfileSyncInterval = h),
      (l.isAiAsContactEnabled = y),
      (l.shouldRenderStructuredRichResponseMsg = C),
      (l.showBotSearchPlugin = b),
      (l.getNonBlockingBotNoticeIds = v),
      (l.getInlineBotNoticeIds = S),
      (l.getMasterBotNoticeId = R),
      (l.isMigrateAwayFromInlineBotTosEnabled = L),
      (l.isMetaAIChatInteractionEnabled = E),
      (l.isAiSearchAskButtonEnabled = k),
      (l.isAiChatThreadsEnabled = T),
      (l.isAiThreadCapabilityEnabled = D),
      (l.getAiThreadMsgsLoadLimit = x),
      (l.isAskMetaAiEnabled = $),
      (l.isAiModeSelectorInteractive = P),
      (l.getAiDynamicModeSelectorTtlSeconds = N),
      (l.isAiChatThreadsHistoricalMessageMigrationEnabled = M),
      (l.isMetaAiImageInputEnabled = w),
      (l.isMetaAiVideoInputEnabled = A),
      (l.isMetaAiDocUploadEnabled = F),
      (l.isAnyMetaAiMediaInputEnabled = O),
      (l.META_AI_DEFAULT_SUPPORTED_FILE_TYPES = B),
      (l.getMetaAiSupportedFileTypes = W),
      (l.getMetaAiFileUploadCountLimit = q),
      (l.getMetaAiImageSendLimit = U),
      (l.isMetaAiDocumentOcrImageConversionEnabled = V),
      (l.shouldSkipMetaAiChatlistHighlight = H),
      (l.isMetaAiChatInThreadsMode = G),
      (l.getImplicitThreadRoutingStrategy = z),
      (l.isImplicitThreadRoutingEnabled = j),
      (l.isDefaultThreadRoutingEnabled = K),
      (l.getManusBotName = Q),
      (l.getManusBotProfileThumb = X),
      (l.isAiThreadPinEnabled = Y),
      (l.getAiThreadPinMaxCount = J),
      (l.isBotOrphanMsgEnabled = Z),
      (l.getMetaAiDocumentUploadSizeLimitBytes = ee),
      (l.getMetaAiVideoUploadSizeLimitBytes = te));
  },
  98,
);
