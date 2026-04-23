__d(
  "WAWebGenerateBotMetadata",
  [
    "WAWebAiThreadTypeUtils",
    "WAWebBotBaseGating",
    "WAWebBotGating",
    "WAWebBotGroupGatingUtils",
    "WAWebBotModeSelectionProtoUtils",
    "WAWebBotUnifiedResponseGating",
    "WAWebLidMigrationUtils",
    "WAWebMsgType",
    "WAWebProtobufsAICommon.pb",
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
    function c(t) {
      var n = t.botPersonaId != null ? t.botPersonaId : void 0,
        r = m(t),
        o = t.aiThreadInfo != null ? e(t) : void 0,
        a = f(t.botModeSelection, t.botModeOverride),
        i = s(t),
        l = _(t.type),
        c = u(t);
      if (
        !(
          t.botGroupParticipant == null &&
          n == null &&
          r == null &&
          a == null &&
          i == null &&
          l == null &&
          c == null
        )
      )
        return {
          personaId: n,
          invokerJid: r,
          capabilityMetadata: t.id ? p(t.id.remote) : void 0,
          botThreadInfo: o,
          botGroupMetadata: d(t.botGroupParticipant),
          botModeSelectionMetadata: a,
          botMetricsMetadata: i,
          botDocumentMessageMetadata: l,
          aiMediaCollectionMetadata: c,
        };
    }
    function d(e) {
      if (
        !(
          !(
            o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() ||
            o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled()
          ) || e == null
        )
      )
        return {
          participantsMetadata: [{ botFbid: e == null ? void 0 : e.user }],
        };
    }
    function m(e) {
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
    function p(e) {
      var t = [].concat(
        o("WAWebBotGating").isRichStructuredResponseEnabled()
          ? [
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType
                .RICH_RESPONSE_STRUCTURED_RESPONSE,
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_HEADING,
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType
                .RICH_RESPONSE_SUB_HEADING,
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType.RICH_RESPONSE_TABLE,
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType
                .RICH_RESPONSE_INLINE_REELS,
            ].concat(
              o(
                "WAWebBotUnifiedResponseGating",
              ).isUnifiedResponseSendingEnabled()
                ? [
                    o("WAWebProtobufsAICommon.pb")
                      .BotCapabilityMetadata$BotCapabilityType
                      .RICH_RESPONSE_UNIFIED_RESPONSE,
                    o("WAWebProtobufsAICommon.pb")
                      .BotCapabilityMetadata$BotCapabilityType
                      .RICH_RESPONSE_LATEX,
                    o("WAWebProtobufsAICommon.pb")
                      .BotCapabilityMetadata$BotCapabilityType
                      .RICH_RESPONSE_LATEX_INLINE,
                    o("WAWebProtobufsAICommon.pb")
                      .BotCapabilityMetadata$BotCapabilityType
                      .RICH_RESPONSE_CODE,
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
                    o("WAWebBotUnifiedResponseGating").isImagineUrEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_UR_IMAGINE,
                        ]
                      : [],
                    o("WAWebBotUnifiedResponseGating").isUrImagineVideoEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_UR_IMAGINE_VIDEO,
                        ]
                      : [],
                    o(
                      "WAWebBotUnifiedResponseGating",
                    ).isRichResponseGridImageEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_GRID_IMAGE,
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_GRID_IMAGE_3P,
                        ]
                      : [],
                    o("WAWebBotUnifiedResponseGating").isUrBloksEnabled()
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
                    o(
                      "WAWebBotUnifiedResponseGating",
                    ).isRichResponseInlineLinksEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_INLINE_LINKS_ENABLED,
                        ]
                      : [],
                    o("WAWebBotUnifiedResponseGating").isUrMediaGridEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_UR_MEDIA_GRID_ENABLED,
                        ]
                      : [],
                    o(
                      "WAWebBotUnifiedResponseGating",
                    ).isRichResponseInAppSurveyEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_IN_APP_SURVEY,
                        ]
                      : [],
                    o(
                      "WAWebBotUnifiedResponseGating",
                    ).isRichResponseSideBySideSurveyEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_SIDE_BY_SIDE_SURVEY,
                        ]
                      : [],
                    o("WAWebBotGating").isRichResponseReasoningEnabled()
                      ? [
                          o("WAWebProtobufsAICommon.pb")
                            .BotCapabilityMetadata$BotCapabilityType
                            .RICH_RESPONSE_UR_REASONING,
                        ]
                      : [],
                  )
                : [],
            )
          : [],
        o("WAWebBotBaseGating").isAiContinuousSessionTransparencyNoticeEnabled(
          e,
        )
          ? [
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType
                .SESSION_TRANSPARENCY_SYSTEM_MESSAGE,
            ]
          : [],
        o("WAWebBotGating").isDynamicModelBrandingEnabled()
          ? [
              o("WAWebProtobufsAICommon.pb")
                .BotCapabilityMetadata$BotCapabilityType
                .AI_RESPONSE_MODEL_BRANDING,
            ]
          : [],
      );
      return t.length === 0 ? void 0 : { capabilities: t };
    }
    function _(e) {
      if (e === o("WAWebMsgType").MSG_TYPE.DOCUMENT) {
        var t = o("WAWebBotGating").isMetaAiDocumentOcrImageConversionEnabled()
          ? o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.OCR_AND_IMAGES
          : o("WAWebProtobufsAICommon.pb")
              .BotDocumentMessageMetadata$DocumentPluginType.TEXT_EXTRACTION;
        return { pluginType: t };
      }
    }
    function f(e, t) {
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
      (l.generateBotCapabilityMetadata = p),
      (l.generateBotModeSelectionMetadata = f));
  },
  98,
);
