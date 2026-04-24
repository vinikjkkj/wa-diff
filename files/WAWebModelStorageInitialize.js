__d(
  "WAWebModelStorageInitialize",
  [
    "WALogger",
    "WAWeb-dexie",
    "WAWebAccountLinkingSchema",
    "WAWebCommentSchema",
    "WAWebCrosspostingSchema",
    "WAWebDbRolloutUtil",
    "WAWebDexieCastTypes",
    "WAWebEventResponsesSchema",
    "WAWebModelStorageUtils",
    "WAWebPinInChatSchema",
    "WAWebPollsVotesSchema",
    "WAWebPremiumMessageSchema",
    "WAWebSchemaACSTokens",
    "WAWebSchemaAbPropConfig",
    "WAWebSchemaAbPropEventSamplingConfig",
    "WAWebSchemaActiveMessageRanges",
    "WAWebSchemaAgent",
    "WAWebSchemaBizBroadcastCampaign",
    "WAWebSchemaBlocklist",
    "WAWebSchemaBotProfile",
    "WAWebSchemaBroadcastMetadata",
    "WAWebSchemaBusinessBroadcastCampaign",
    "WAWebSchemaBusinessBroadcastInsights",
    "WAWebSchemaBusinessProfile",
    "WAWebSchemaCTWASuggestion",
    "WAWebSchemaCart",
    "WAWebSchemaChat",
    "WAWebSchemaChatAssignment",
    "WAWebSchemaChatThreadLoggingPendingEvents",
    "WAWebSchemaCollectionVersion",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaCustomerData",
    "WAWebSchemaDataSharing3pdLid",
    "WAWebSchemaDataSharing3pdLidV2",
    "WAWebSchemaDeviceList",
    "WAWebSchemaDirectConnectionKeys",
    "WAWebSchemaDownload3PDSignals",
    "WAWebSchemaEncryptedMutations",
    "WAWebSchemaFavorite",
    "WAWebSchemaFavoriteStickers",
    "WAWebSchemaFeatureFlag",
    "WAWebSchemaFtsIndexingQueue",
    "WAWebSchemaGroupAbPropConfig",
    "WAWebSchemaGroupHistoryParticipant",
    "WAWebSchemaGroupHistoryReportingTokenInfo",
    "WAWebSchemaGroupInviteV4",
    "WAWebSchemaGroupMemberChanges",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSchemaInAppBanner",
    "WAWebSchemaInactiveReceipt_DEPRECATED",
    "WAWebSchemaLabel",
    "WAWebSchemaLabelAssociation",
    "WAWebSchemaLidChatState",
    "WAWebSchemaLidDisplayNameMapping",
    "WAWebSchemaLidPnMapping_DEPRECATED",
    "WAWebSchemaMediaPlaybackEvent",
    "WAWebSchemaMemberLabel",
    "WAWebSchemaMembershipApprovalRequest",
    "WAWebSchemaMessage",
    "WAWebSchemaMessageAssociation",
    "WAWebSchemaMessageHistory",
    "WAWebSchemaMessageInfo",
    "WAWebSchemaMessageOrphans",
    "WAWebSchemaMissingKeys",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSchemaNewsletterMyVotes",
    "WAWebSchemaNewsletterPollsVotes",
    "WAWebSchemaNewsletterReactions",
    "WAWebSchemaNonMessageDataRequest",
    "WAWebSchemaNote",
    "WAWebSchemaOptOutList",
    "WAWebSchemaOrphanPaymentNotification",
    "WAWebSchemaOrphanReceipt",
    "WAWebSchemaOrphanRevoke",
    "WAWebSchemaOrphanTcToken",
    "WAWebSchemaOutContact",
    "WAWebSchemaParticipant",
    "WAWebSchemaPeerMessage",
    "WAWebSchemaPendingBusinessBroadcast",
    "WAWebSchemaPendingBusinessBroadcastMessage",
    "WAWebSchemaPendingMutations",
    "WAWebSchemaPrivacyDisallowedList",
    "WAWebSchemaProfilePicThumb",
    "WAWebSchemaQuarantineData",
    "WAWebSchemaQuickPromotions",
    "WAWebSchemaQuickReply",
    "WAWebSchemaReactions",
    "WAWebSchemaRecentStickers",
    "WAWebSchemaReportingInfo",
    "WAWebSchemaReportingToken",
    "WAWebSchemaScheduledMsgRevealKey",
    "WAWebSchemaSelfAddonMessageTypeTable",
    "WAWebSchemaStickerDownload",
    "WAWebSchemaSubgroupSuggestion",
    "WAWebSchemaSubgroupSuggestionV2",
    "WAWebSchemaSubscription",
    "WAWebSchemaSyncActions",
    "WAWebSchemaSyncKeys",
    "WAWebSchemaSyncdLogs",
    "WAWebSchemaTasksScheduledTime",
    "WAWebSchemaThreadsMetadata",
    "WAWebSchemaUnifiedAddons",
    "WAWebSchemaUnjoinedSubgroupMetadata",
    "WAWebSchemaUserPrefs",
    "WAWebSchemaVerifiedBusinessName",
    "WAWebSchemaWebTPSharedSession",
    "WAWebStorage",
    "WAWebStorageGatingUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (s == null) {
            yield o("WAWebDbRolloutUtil").loadSchemaVersions();
            var n = yield o("WAWebStorageGatingUtils").columnPackingEnabled(
              !!(t != null && t.canPackColumns),
            );
            (o("WAWebModelStorageUtils").createStorage({ packColumns: n }),
              o("WAWebSchemaAbPropConfig").addTable(),
              o("WAWebSchemaAbPropEventSamplingConfig").addTable(),
              o("WAWebSchemaActiveMessageRanges").addTable(),
              o("WAWebSchemaAgent").addTable(),
              o("WAWebSchemaBlocklist").addTable(),
              o("WAWebSchemaOptOutList").addTable(),
              o("WAWebSchemaBotProfile").addTable(),
              o("WAWebSchemaCart").addTable(),
              o("WAWebSchemaChat").addTable(),
              o("WAWebSchemaChatAssignment").addTable(),
              o("WAWebSchemaChatThreadLoggingPendingEvents").addTable(),
              o("WAWebSchemaCollectionVersion").addTable(),
              o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY").addTable(),
              o("WAWebSchemaDeviceList").addTable(),
              o("WAWebSchemaDirectConnectionKeys").addTable(),
              o("WAWebSchemaEncryptedMutations").addTable(),
              o("WAWebSchemaFavorite").addTable(),
              o("WAWebSchemaFavoriteStickers").addTable(),
              o("WAWebSchemaFtsIndexingQueue").addTable(),
              o("WAWebSchemaGroupInviteV4").addTable(),
              o("WAWebSchemaGroupMemberChanges").addTable(),
              o("WAWebSchemaGroupMetadata").addTable(),
              o("WAWebSchemaHistorySyncNotification").addTable(),
              o("WAWebSchemaInactiveReceipt_DEPRECATED").addTable(),
              o("WAWebSchemaLabelAssociation").addTable(),
              o("WAWebSchemaLabel").addTable(),
              o("WAWebSchemaLidDisplayNameMapping").addTable(),
              o("WAWebSchemaLidPnMapping_DEPRECATED").addTable(),
              o("WAWebSchemaLidChatState").addTable(),
              o("WAWebSchemaMessage").addTable(),
              o("WAWebSchemaMessageHistory").addTable(),
              o("WAWebSchemaMissingKeys").addTable(),
              o("WAWebSchemaMessageInfo").addTable(),
              o("WAWebSchemaOrphanPaymentNotification").addTable(),
              o("WAWebSchemaOrphanReceipt").addTable(),
              o("WAWebSchemaOrphanRevoke").addTable(),
              o("WAWebSchemaOrphanTcToken").addTable(),
              o("WAWebSchemaParticipant").addTable(),
              o("WAWebSchemaPeerMessage").addTable(),
              o("WAWebSchemaPendingMutations").addTable(),
              o("WAWebPollsVotesSchema").addTable(),
              o("WAWebSchemaPrivacyDisallowedList").addTable(),
              o("WAWebSchemaProfilePicThumb").addTable(),
              o("WAWebSchemaQuickReply").addTable(),
              o("WAWebSchemaReactions").addTable(),
              o("WAWebSchemaRecentStickers").addTable(),
              o("WAWebSchemaSubscription").addTable(),
              o("WAWebSchemaSyncActions").addTable(),
              o("WAWebSchemaSyncKeys").addTable(),
              o("WAWebSchemaTasksScheduledTime").addTable(),
              o("WAWebSchemaUnjoinedSubgroupMetadata").addTable(),
              o("WAWebSchemaUserPrefs").addTable(),
              o("WAWebSchemaVerifiedBusinessName").addTable(),
              o("WAWebSchemaMessageOrphans").addTable(),
              o("WAWebSchemaMembershipApprovalRequest").addTable(),
              o("WAWebSchemaNonMessageDataRequest").addTable(),
              o("WAWebSchemaCTWASuggestion").addTable(),
              o("WAWebSchemaDataSharing3pdLid").addTable(),
              o("WAWebSchemaDataSharing3pdLidV2").addTable(),
              o("WAWebPinInChatSchema").addTable(),
              o("WAWebSchemaInAppBanner").addTable(),
              o("WAWebSchemaNewsletterMetadata").addTable(),
              o("WAWebPremiumMessageSchema").addTable(),
              o("WAWebSchemaQuickPromotions").addTable(),
              o("WAWebSchemaSubgroupSuggestion").addTable(),
              o("WAWebSchemaNewsletterReactions").addTable(),
              o("WAWebSchemaSelfAddonMessageTypeTable").addTable(),
              o("WAWebSchemaSubgroupSuggestionV2").addTable(),
              o("WAWebSchemaSyncdLogs").addTable(),
              o("WAWebCommentSchema").addTable(),
              o("WAWebSchemaBusinessProfile").addTable(),
              o("WAWebSchemaNewsletterMyVotes").addTable(),
              o("WAWebSchemaNewsletterPollsVotes").addTable(),
              o("WAWebSchemaReportingToken").addTable(),
              o("WAWebEventResponsesSchema").addTable(),
              o("WAWebSchemaNote").addTable(),
              o("WAWebSchemaCustomerData").addTable(),
              o("WAWebSchemaUnifiedAddons").addTable(),
              o("WAWebSchemaReportingInfo").addTable(),
              o("WAWebSchemaMessageAssociation").addTable(),
              o("WAWebSchemaStickerDownload").addTable(),
              o("WAWebSchemaACSTokens").addTable(),
              o("WAWebSchemaMediaPlaybackEvent").addTable(),
              o("WAWebSchemaDownload3PDSignals").addTable(),
              o("WAWebAccountLinkingSchema").addTable(),
              o("WAWebSchemaMemberLabel").addTable(),
              o("WAWebSchemaThreadsMetadata").addTable(),
              o("WAWebCrosspostingSchema").addTable(),
              o("WAWebSchemaPendingBusinessBroadcast").addTable(),
              o("WAWebSchemaPendingBusinessBroadcastMessage").addTable(),
              o("WAWebSchemaBroadcastMetadata").addTable(),
              o("WAWebSchemaBizBroadcastCampaign").addTable(),
              o("WAWebSchemaBusinessBroadcastCampaign").addTable(),
              o("WAWebSchemaBusinessBroadcastInsights").addTable(),
              o("WAWebSchemaGroupHistoryReportingTokenInfo").addTable(),
              o("WAWebSchemaFeatureFlag").addTable(),
              o("WAWebSchemaQuarantineData").addTable(),
              o("WAWebSchemaWebTPSharedSession").addTable(),
              o("WAWebSchemaGroupAbPropConfig").addTable(),
              o("WAWebSchemaOutContact").addTable(),
              o("WAWebSchemaScheduledMsgRevealKey").addTable(),
              o("WAWebSchemaGroupHistoryParticipant").addTable(),
              (s = o("WAWebModelStorageUtils")
                .getStorage()
                .initialize()
                .catch(function (t) {
                  var n = "Unknown error";
                  throw (
                    t instanceof o("WAWebStorage").AlreadyInitializedError ||
                    t instanceof o("WAWebStorage").NoSuchDatabaseError
                      ? (n = t.toString())
                      : t instanceof r("WAWeb-dexie").DexieError &&
                        (n = "Unknown DexieError"),
                    o("WALogger")
                      .ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Failed to initialize model storage: ",
                            "",
                          ])),
                        n,
                      )
                      .verbose()
                      .sendLogs("failed-to-initialize-model-storage", {
                        sendLogsType:
                          o("WALogger").SendLogsType
                            .CRASH_OR_UNRECOVERABLE_ERROR_SAD,
                      }),
                    t
                  );
                })));
          }
          return s;
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
      return o("WAWebModelStorageUtils")
        .destroyStorage()
        .catch(function () {
          return o("WAWebDexieCastTypes").dexieCastToPromise(
            new (r("WAWeb-dexie"))(
              o("WAWebModelStorageUtils").DATABASE_NAME,
            ).delete(),
          );
        })
        .finally(function () {
          s = null;
        });
    }
    function m() {
      s = null;
    }
    ((l.initializeWithoutGKs = u),
      (l.destroy = d),
      (l.clearInitializePromise = m));
  },
  98,
);
