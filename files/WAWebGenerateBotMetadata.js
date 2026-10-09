__d(
  "WAWebGenerateBotMetadata",
  [
    "WAWebABProps",
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUnifiedResponseMutationUtils",
    "WAWebBotUtils",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebGenerateBotGroupMetadata",
    "WAWebHatchBackendGating",
    "WAWebLidMigrationUtils",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebMsgType",
    "WAWebProtobufsAICommon.pb",
    "WAWebSubscriptionAgeGating",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.aiThreadInfo;
      if (t != null) {
        var n = o("WAWebAiThreadTypeUtils").getProtoTypeFromAiThreadType(
          t.aiThreadType,
        );
        return { clientInfo: { type: n } };
      }
    }
    function s(e) {
      var t = e.botMetricsMetadata;
      if (t != null)
        return {
          destinationId: t.destinationId,
          destinationEntryPoint: t.destinationEntryPoint,
        };
    }
    function u(e) {
      var t,
        n,
        r,
        o = (t = e.aiMediaCollectionInfo) == null ? void 0 : t.collectionId;
      if (!(o == null || e.subtype === "ai_media_collection"))
        return {
          collectionId: o,
          uploadOrderIndex:
            (n =
              (r = e.aiMediaCollectionInfo) == null
                ? void 0
                : r.uploadOrderIndex) != null
              ? n
              : void 0,
        };
    }
    function c(e) {
      var t, n;
      if (
        o("WAWebBotBaseGating").isBotEnabled() ||
        ((t = e.id) == null || (t = t.remote) == null
          ? void 0
          : t.isSupportAgentBot()) === !0 ||
        h((n = e.id) == null ? void 0 : n.remote, e.subtype)
      )
        return d(e);
      if (e.botGroupParticipant != null) return _(e);
    }
    function d(t) {
      var n,
        r,
        a = t.botPersonaId != null ? t.botPersonaId : void 0,
        i = f(t),
        l = t.aiThreadInfo != null ? e(t) : void 0,
        c = R(t.botModeSelection, t.botModeOverride),
        d = s(t),
        _ = S(t.type),
        h = u(t),
        y =
          t.unifiedResponseMutationMediaList != null
            ? o(
                "WAWebBotUnifiedResponseMutationUtils",
              ).generateUnifiedResponseMutation(
                t.unifiedResponseMutationMediaList,
              )
            : void 0,
        C = p(t);
      if (
        !g(
          [t.botGroupParticipant, a, i, c, d, _, h, y, C],
          (n = t.id) == null ? void 0 : n.remote,
          t.subtype,
        )
      )
        return {
          personaId: a,
          invokerJid: i,
          capabilityMetadata: t.id ? v(t.id.remote, t.subtype) : void 0,
          botThreadInfo: l,
          botGroupMetadata: o(
            "WAWebGenerateBotGroupMetadata",
          ).generateBotGroupMetadata(t.botGroupParticipant),
          botModeSelectionMetadata: c,
          botMetricsMetadata: d,
          botDocumentMessageMetadata: _,
          aiMediaCollectionMetadata: h,
          unifiedResponseMutation: y,
          botLinkedAccountsMetadata: C,
          timezone: m((r = t.id) == null ? void 0 : r.remote, t.subtype),
        };
    }
    function m(e, t) {
      if (h(e, t)) {
        var n = Intl.DateTimeFormat().resolvedOptions(),
          r = n.timeZone;
        return r != null && r !== "" ? r : void 0;
      }
    }
    function p(e) {
      if (
        !(
          e.id == null ||
          !o("WAWebBotUtils").isMetaAiBot(e.id.remote) ||
          !o("WAWebBotBaseGating").isAiAccountLinkingEnabled() ||
          e.subtype === "bot_feedback" ||
          e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL
        )
      ) {
        var t = o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).getCachedMetaAiWaffleAuthTokenBlob();
        if (!(t == null || t === ""))
          return {
            accounts: [],
            acAuthTokens: new TextEncoder().encode(t).buffer,
          };
      }
    }
    function _(e) {
      var t = o("WAWebGenerateBotGroupMetadata").generateBotGroupMetadata(
        e.botGroupParticipant,
      );
      return t != null ? { botGroupMetadata: t } : void 0;
    }
    function f(e) {
      if (e.subtype === "bot_feedback") {
        var t;
        return (t = e.botTargetSenderJid) == null ? void 0 : t.toJid();
      }
      if (e.botTargetSenderJid != null) {
        var n;
        return (n = o("WAWebLidMigrationUtils").toLid(e.botTargetSenderJid)) ==
          null
          ? void 0
          : n.toJid();
      }
    }
    function g(e, t, n) {
      return (
        e.every(function (e) {
          return e == null;
        }) && !h(t, n)
      );
    }
    function h(e, t) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome &&
        o("WAWebHatchBackendGating").isHatchIntegrationEnabledOnBackend()
      );
    }
    function y(e, t) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome &&
        o(
          "WAWebHatchBackendGating",
        ).isHatchApprovalNotificationEnabledOnBackend()
      );
    }
    function C(e, t) {
      return h(e, t)
        ? [].concat(
            o("WAWebHatchBackendGating").isHatchConnectorsEnabledOnBackend()
              ? [
                  o("WAWebProtobufsAICommon.pb")
                    .BotCapabilityMetadata$BotCapabilityType
                    .HATCH_CONNECTOR_ACTION_CARD_ENABLED,
                ]
              : [],
            o("WAWebHatchBackendGating").isHatchBrowserEnabledOnBackend()
              ? [
                  o("WAWebProtobufsAICommon.pb")
                    .BotCapabilityMetadata$BotCapabilityType
                    .HATCH_BROWSER_TASK_CARD_ENABLED,
                ]
              : [],
          )
        : [];
    }
    function b(e, t) {
      return (
        e != null &&
        o("WAWebBotUtils").isHatchBot(e) &&
        t !== o("WAWebCommonMsgSubtypeTypes").MsgSubtype.BotRequestWelcome &&
        o("WAWebHatchBackendGating").isHatchSecureCredentialsEnabledOnBackend()
      );
    }
    function v(e, t) {
      var n,
        r = [
          (n = o("WAWebProtobufsAICommon.pb"))
            .BotCapabilityMetadata$BotCapabilityType
            .RICH_RESPONSE_STRUCTURED_RESPONSE,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_HEADING,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_SUB_HEADING,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_TABLE,
          n.BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_INLINE_REELS,
        ].concat(
          o("WAWebBotUnifiedResponseGating").isUnifiedResponseSendingEnabled()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_RESPONSE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_LATEX,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_LATEX_INLINE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_CODE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_NESTED_LIST,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_SOURCES_IN_MESSAGE,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_SOURCES,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_TEXT_COMPONENT,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS,
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .RICH_RESPONSE_UR_INLINE_REELS_ENABLED,
              ].concat(
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_imagine_ur_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_IMAGINE,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_ur_imagine_video_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_IMAGINE_VIDEO,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_grid_image_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_GRID_IMAGE,
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_GRID_IMAGE_3P,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "wa_web_ur_bloks_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_BLOKS_ENABLED,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isUrZeitgeistCitationsEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_ZEITGEIST_CITATIONS,
                    ]
                  : [],
                o(
                  "WAWebBotUnifiedResponseGating",
                ).isUrZeitgeistCarouselEnabled()
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_inline_links_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_INLINE_LINKS_ENABLED,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_ur_media_grid_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_UR_MEDIA_GRID_ENABLED,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "meta_ai_in_app_survey_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_IN_APP_SURVEY,
                    ]
                  : [],
                o("WAWebABProps").getABPropConfigValue(
                  "ai_rich_response_side_by_side_survey_enabled",
                )
                  ? [
                      o("WAWebProtobufsAICommon.pb")
                        .BotCapabilityMetadata$BotCapabilityType
                        .RICH_RESPONSE_SIDE_BY_SIDE_SURVEY,
                    ]
                  : [],
                [
                  o("WAWebProtobufsAICommon.pb")
                    .BotCapabilityMetadata$BotCapabilityType
                    .RICH_RESPONSE_UR_REASONING,
                ],
              )
            : [],
          [
            o("WAWebProtobufsAICommon.pb")
              .BotCapabilityMetadata$BotCapabilityType
              .SESSION_TRANSPARENCY_SYSTEM_MESSAGE,
          ],
          o("WAWebBotBaseGating").isAiSubscriptionMeteringEnabled()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .AI_SUBSCRIPTION_METERING_ENABLED,
              ]
            : [],
          o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
            o("WAWebSubscriptionAgeGating").isEligibleForSubscriptionsByAge()
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .AI_SUBSCRIPTION_ENABLED,
              ]
            : [],
          y(e, t)
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .HATCH_NOTIFICATION_METADATA_EVENT_ENABLED,
              ]
            : [],
          C(e, t),
          b(e, t)
            ? [
                o("WAWebProtobufsAICommon.pb")
                  .BotCapabilityMetadata$BotCapabilityType
                  .HATCH_SECURE_CREDENTIAL_CARD_ENABLED,
              ]
            : [],
        );
      return r.length === 0 ? void 0 : { capabilities: r };
    }
    function S(e) {
      if (e === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
        var t = o("WAWebBotGating").isMetaAiDocumentOcrImageConversionEnabled()
          ? o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.OCR_AND_IMAGES
          : o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.TEXT_EXTRACTION;
        return { pluginType: t };
      }
    }
    function R(e, t) {
      if (
        !(e == null || e.length === 0) &&
        o("WAWebBotBaseGating").isAiModeSelectorMessagingEnabled()
      )
        return {
          mode: e.map(
            o("WAWebBotModeSelectionProtoUtils")
              .getProtoModeFromBotSelectionMode,
          ),
          overrideMode: t != null ? [].concat(t) : [],
        };
    }
    ((l.generateAiThreadInfo = e),
      (l.generateBotMetricsMetadata = s),
      (l.generateAiMediaCollectionMetadata = u),
      (l.generateBotMetadata = c),
      (l.generateBotCapabilityMetadata = v),
      (l.generateBotModeSelectionMetadata = R));
  },
  98,
);
