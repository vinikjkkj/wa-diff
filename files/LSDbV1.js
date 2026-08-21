__d(
  "LSDbV1",
  [
    "I64MigrationHelper",
    "LSDbV1.upgrade",
    "ReStoreDefaultValueMigration",
    "ReStoreIndicesMigration",
    "ReStoreVersionedSchemaProviderUtil",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({
        _user_info: {
          autoIncrement: !1,
          defaults: {},
          id: 4,
          indexes: {},
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        acs_request_context: {
          autoIncrement: !1,
          defaults: {},
          id: 310,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        ad_context: {
          autoIncrement: !1,
          defaults: {},
          id: 160,
          indexes: {},
          primaryKey: { fields: ["adId"], ignoreNulls: [] },
        },
        admin_message_ctas: {
          autoIncrement: !1,
          defaults: {
            showAdChoiceIcon: !1,
            timestampMs: (e = o("I64MigrationHelper")).cast([0, 0]),
          },
          id: 27,
          indexes: { ctaId: { fields: ["ctaId"], ignoreNulls: [] } },
          primaryKey: {
            fields: ["threadKey", "messageId", "ctaId"],
            ignoreNulls: [],
          },
        },
        ai_bot_feedback_submission_status: {
          autoIncrement: !1,
          defaults: {},
          id: 315,
          indexes: {},
          primaryKey: { fields: ["botResponseId"], ignoreNulls: [] },
        },
        ai_bot_search_metadata: {
          autoIncrement: !1,
          defaults: {
            contactViewerRelationship: e.cast([0, 0]),
            displayName: "",
            score: 0,
          },
          id: 298,
          indexes: {},
          primaryKey: { fields: ["botId"], ignoreNulls: [] },
        },
        anonymous_task_context: {
          autoIncrement: !1,
          defaults: { failureCount: e.cast([0, 0]) },
          id: 311,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        attachment_conversion: {
          autoIncrement: !1,
          defaults: {},
          id: 164,
          indexes: {},
          primaryKey: { fields: ["attachmentFbid"], ignoreNulls: [] },
        },
        attachment_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 19,
          indexes: {
            fk_attachments: {
              fields: ["threadKey", "messageId", "attachmentFbid", "ctaId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["ctaId"], ignoreNulls: [] },
        },
        attachment_items: {
          autoIncrement: !1,
          defaults: { attachmentIndex: e.cast([0, 0]) },
          id: 18,
          indexes: {
            fk_attachments: {
              fields: [
                "threadKey",
                "messageId",
                "attachmentFbid",
                "attachmentIndex",
              ],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["attachmentFbid", "attachmentIndex"],
            ignoreNulls: [],
          },
        },
        attachments: {
          autoIncrement: !1,
          defaults: {
            attachmentIndex: e.cast([0, 0]),
            attachmentType: e.cast([0, 0]),
            authorityLevel: e.cast([0, 0]),
            hasMedia: !1,
            hasXma: !1,
            isSharable: !1,
            timestampMs: e.cast([0, 0]),
            transportKey: "FBBroker",
          },
          id: 16,
          indexes: {
            fk_messages: {
              fields: [
                "threadKey",
                "timestampMs",
                "messageId",
                "attachmentFbid",
              ],
              ignoreNulls: [],
            },
            idx_attachments_collapsible_id: {
              fields: [
                "threadKey",
                "collapsibleId",
                "messageId",
                "attachmentFbid",
              ],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["threadKey", "messageId", "attachmentFbid"],
            ignoreNulls: [],
          },
        },
        attachments_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {
            hasMoreAfter: !1,
            hasMoreBefore: !1,
            isLoadingAfter: !1,
            isLoadingBefore: !1,
            mediaGroup: e.cast([0, 0]),
          },
          id: 17,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "mediaGroup", "minTimestampMs"],
            ignoreNulls: [],
          },
        },
        audio_channel_events: {
          autoIncrement: !1,
          defaults: {},
          id: 238,
          indexes: {},
          primaryKey: { fields: ["eventId", "roomId"], ignoreNulls: [] },
        },
        available_reactions: {
          autoIncrement: !1,
          defaults: {},
          id: 188,
          indexes: {},
          primaryKey: { fields: ["emojiIdx"], ignoreNulls: [] },
        },
        avatar_settings: {
          autoIncrement: !1,
          defaults: { enableAvatarHotlike: !1 },
          id: 209,
          indexes: {},
          primaryKey: { fields: ["threadId"], ignoreNulls: [] },
        },
        bot_profile_info_v2: {
          autoIncrement: !1,
          defaults: { hasEmbodiment: !1 },
          id: 299,
          indexes: {},
          primaryKey: { fields: ["botId"], ignoreNulls: [] },
        },
        bots: {
          autoIncrement: !1,
          defaults: {},
          id: 230,
          indexes: {},
          primaryKey: { fields: ["threadKey", "botId"], ignoreNulls: [] },
        },
        business_comm_items: {
          autoIncrement: !1,
          defaults: {},
          id: 234,
          indexes: {},
          primaryKey: { fields: ["threadKey", "entId"], ignoreNulls: [] },
        },
        business_support_case_details: {
          autoIncrement: !1,
          defaults: {},
          id: 222,
          indexes: {},
          primaryKey: { fields: ["threadId"], ignoreNulls: [] },
        },
        business_support_notification_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 236,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        business_thread_info: {
          autoIncrement: !1,
          defaults: {},
          id: 260,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        business_thread_suggestions: {
          autoIncrement: !1,
          defaults: {},
          id: 290,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "suggestionType"],
            ignoreNulls: [],
          },
        },
        client_accounts: {
          autoIncrement: !0,
          defaults: {},
          id: 272,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        client_message_translation_info: {
          autoIncrement: !1,
          defaults: {},
          id: 324,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        client_messages: {
          autoIncrement: !0,
          defaults: {
            disabledActionsReason: e.cast([0, 0]),
            isForwarded: !1,
            isHidden: !1,
            isReadonly: !1,
            isReplyOnly: !1,
            isTombstoned: !1,
            messageContentSubtype: e.cast([0, 0]),
            messageContentType: e.cast([0, 0]),
            messageCreationType: e.cast([0, 0]),
            messageEphemeralityType: e.cast([0, 0]),
            messageSource: e.cast([0, 0]),
            replyMessageTextSize: e.cast([0, 0]),
            replyStatus: e.cast([0, 0]),
            replyVicinityStatus: e.cast([0, 0]),
            sendStatus: e.cast([0, 0]),
            shouldHideInSnippet: !1,
            shouldPersist: !1,
            textSize: e.cast([0, 0]),
          },
          id: 273,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        client_participants: {
          autoIncrement: !0,
          defaults: {
            capabilities1: e.cast([0, 0]),
            capabilities2: e.cast([0, 0]),
            isPending: !1,
            readActionTsMs: e.cast([0, 0]),
          },
          id: 274,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        client_thread_proactive_warning_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 241,
          indexes: {},
          primaryKey: { fields: ["threadPk"], ignoreNulls: [] },
        },
        client_threads: {
          autoIncrement: !0,
          defaults: {
            capabilities1: e.cast([0, 0]),
            capabilities2: e.cast([0, 0]),
            groupMemberAddMode: e.cast([0, 0]),
            isAdminSnippet: !1,
            isHidden: !1,
            isHotlikeSnippet: !1,
            isPending: !1,
            isShadowThread: !1,
            isTombstoned: !1,
            pinnedMessagesCount: e.cast([0, 0]),
          },
          id: 276,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        client_web_pinned_messages: {
          autoIncrement: !1,
          defaults: {},
          id: 328,
          indexes: {
            pinnedMessageDisplayOrder: {
              fields: ["threadKey", "pinnedTimestampMs", "offlineThreadingId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["threadKey", "offlineThreadingId", "pinnedTimestampMs"],
            ignoreNulls: [],
          },
        },
        client_xmas: {
          autoIncrement: !0,
          defaults: {},
          id: 314,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        cm_category_list: {
          autoIncrement: !1,
          defaults: {},
          id: 182,
          indexes: {},
          primaryKey: {
            fields: ["communityId", "categoryId"],
            ignoreNulls: [],
          },
        },
        cm_channel_events: {
          autoIncrement: !1,
          defaults: {},
          id: 201,
          indexes: {
            eventsInThread: {
              fields: ["threadId", "eventId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["eventId", "threadId"], ignoreNulls: [] },
        },
        cm_channel_list: {
          autoIncrement: !1,
          defaults: {},
          id: 167,
          indexes: {
            threadIdCommunityId: {
              fields: ["threadId", "communityId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["communityId", "threadId"], ignoreNulls: [] },
        },
        cm_community_list: {
          autoIncrement: !1,
          defaults: {},
          id: 166,
          indexes: {},
          primaryKey: { fields: ["communityId"], ignoreNulls: [] },
        },
        cm_search_nullstate_metadata: {
          autoIncrement: !1,
          defaults: { score: 0 },
          id: 289,
          indexes: {},
          primaryKey: { fields: ["threadKey", "scoreType"], ignoreNulls: [] },
        },
        community_chat_admin_assist_command_sequences: {
          autoIncrement: !1,
          defaults: {},
          id: 291,
          indexes: {},
          primaryKey: { fields: ["commandSequenceId"], ignoreNulls: [] },
        },
        community_chat_message_seen_count: {
          autoIncrement: !1,
          defaults: {},
          id: 221,
          indexes: {},
          primaryKey: { fields: ["threadKey", "messageId"], ignoreNulls: [] },
        },
        community_chat_poll_options: {
          autoIncrement: !1,
          defaults: {
            sortKeyCreationTimestamp: e.cast([0, 0]),
            sortKeyVotingTimestamp: e.cast([0, 0]),
            voteCount: e.cast([0, 0]),
          },
          id: 224,
          indexes: {},
          primaryKey: { fields: ["pollId", "optionId"], ignoreNulls: [] },
        },
        community_chat_poll_votes: {
          autoIncrement: !1,
          defaults: {},
          id: 225,
          indexes: {},
          primaryKey: {
            fields: ["pollId", "optionId", "contactId"],
            ignoreNulls: [],
          },
        },
        community_chat_poll_votes_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {},
          id: 244,
          indexes: {},
          primaryKey: {
            fields: ["pollId", "optionId", "minTimestampMs"],
            ignoreNulls: [],
          },
        },
        community_chat_polls: {
          autoIncrement: !1,
          defaults: { pollType: e.cast([0, 0]) },
          id: 223,
          indexes: {},
          primaryKey: { fields: ["pollId"], ignoreNulls: [] },
        },
        community_direct_invites_presets: {
          autoIncrement: !1,
          defaults: {
            fallbackUrl: "",
            pictureUrlExpirationTimestampMs1: e.cast([0, 0]),
            pictureUrlExpirationTimestampMs2: e.cast([0, 0]),
            presetTypeV2: "ALL_MEMBERS",
          },
          id: 199,
          indexes: {},
          primaryKey: {
            fields: ["communityId", "presetType", "source"],
            ignoreNulls: [],
          },
        },
        community_events: {
          autoIncrement: !1,
          defaults: {},
          id: 202,
          indexes: {},
          primaryKey: { fields: ["eventId", "communityId"], ignoreNulls: [] },
        },
        community_folders: {
          autoIncrement: !1,
          defaults: {
            capabilities: e.cast([0, 0]),
            capabilities2: e.cast([0, 0]),
            capabilities3: e.cast([0, 0]),
            inviteStatus: e.cast([0, 0]),
            notificationMutedUntil: e.cast([0, 0]),
          },
          id: 162,
          indexes: {
            byFbGroupId: { fields: ["fbGroupId", "folderId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["folderId"], ignoreNulls: [] },
        },
        community_members: {
          autoIncrement: !1,
          defaults: {
            adminActions: e.cast([0, 0]),
            channelBadges: e.cast([0, 0]),
            contactCapabilities: e.cast([0, 0]),
            requestId: "",
            source: e.cast([0, 0]),
            threadRoles: e.cast([0, 0]),
          },
          id: 170,
          indexes: {
            communityContact: {
              fields: [
                "communityId",
                "contactId",
                "requestId",
                "source",
                "name",
              ],
              ignoreNulls: [],
            },
            communitySource: {
              fields: [
                "communityId",
                "source",
                "requestId",
                "contactId",
                "name",
              ],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["communityId", "contactId", "source", "requestId"],
            ignoreNulls: [],
          },
        },
        community_members_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {},
          id: 189,
          indexes: {},
          primaryKey: {
            fields: [
              "communityId",
              "isAdmin",
              "minName",
              "source",
              "requestId",
            ],
            ignoreNulls: [],
          },
        },
        community_messaging_aggregated_copresence_counts_for_chat: {
          autoIncrement: !1,
          defaults: {},
          id: 204,
          indexes: {},
          primaryKey: { fields: ["threadId"], ignoreNulls: [] },
        },
        community_messaging_aggregated_user_presence_counts_for_community: {
          autoIncrement: !1,
          defaults: {},
          id: 203,
          indexes: {},
          primaryKey: { fields: ["folderId"], ignoreNulls: [] },
        },
        community_rules: {
          autoIncrement: !1,
          defaults: {},
          id: 254,
          indexes: {},
          primaryKey: { fields: ["communityId", "ruleId"], ignoreNulls: [] },
        },
        community_surface_ranges: {
          autoIncrement: !1,
          defaults: {},
          id: 253,
          indexes: {},
          primaryKey: {
            fields: ["surfaceType", "communityKey"],
            ignoreNulls: [],
          },
        },
        community_thread_sync_info: {
          autoIncrement: !1,
          defaults: {},
          id: 294,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        connectivity_status: {
          autoIncrement: !0,
          defaults: {},
          id: 114,
          indexes: {},
          primaryKey: { fields: ["statusId"], ignoreNulls: [] },
        },
        contact_upload_settings: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 74,
          indexes: {},
          primaryKey: { fields: ["userid"], ignoreNulls: [] },
        },
        contacts: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            blockedByViewerStatus: e.cast([0, 0]),
            canViewerMessage: !0,
            capabilities2: e.cast([0, 0]),
            contactReachabilityStatusType: e.cast([0, 0]),
            contactType: e.cast([0, 0]),
            contactTypeExact: e.cast([0, 0]),
            gender: e.cast([0, 0]),
            isEmployee: !1,
            isMemorialized: !1,
            isMessengerUser: !1,
            optimisticBlockedByViewerStatus: e.cast([0, 0]),
            optimisticBlockedByViewerStatusTimestampMs: e.cast([0, 0]),
            rank: 0,
            restrictionType: e.cast([0, 0]),
            waConnectStatus: e.cast([0, 0]),
          },
          id: 7,
          indexes: {
            blockedByViewerStatusId: {
              fields: ["blockedByViewerStatus", "id"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        contextual_profile_v1: {
          autoIncrement: !1,
          defaults: {},
          id: 216,
          indexes: {
            associatedEntityIdAndOwner: {
              fields: ["associatedEntityId", "ownerId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["ownerId", "associatedEntityId"],
            ignoreNulls: [],
          },
        },
        cowatch_sessions: {
          autoIncrement: !1,
          defaults: {},
          id: 80,
          indexes: {},
          primaryKey: { fields: ["cowatchSessionId"], ignoreNulls: [] },
        },
        ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 15,
          indexes: {},
          primaryKey: { fields: ["ctaId"], ignoreNulls: [] },
        },
        custom_thread_commands: {
          autoIncrement: !1,
          defaults: { isOpenPersistentMenu: !1 },
          id: 296,
          indexes: {
            commandId: { fields: ["commandId"], ignoreNulls: [] },
            rank: { fields: ["threadKey", "rank"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["threadKey", "commandId"], ignoreNulls: [] },
        },
        cutover_threads: {
          autoIncrement: !1,
          defaults: { isMigrated: !1, showOpenMessageHistory: !1 },
          id: 193,
          indexes: {},
          primaryKey: { fields: ["openThreadId"], ignoreNulls: [] },
        },
        data_trace_addon: {
          autoIncrement: !0,
          defaults: { timestampMs: e.cast([0, 0]) },
          id: 154,
          indexes: {
            traceIdAddonId: { fields: ["traceId", "addonId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["addonId"], ignoreNulls: [] },
        },
        data_trace_meta: {
          autoIncrement: !1,
          defaults: {
            foregroundTimestampMs: e.cast([0, 0]),
            initTimestampMs: e.cast([0, 0]),
            shouldFlush: !1,
            traceType: e.cast([0, 0]),
          },
          id: 153,
          indexes: {
            shouldFlushInitTimestampMsTraceId: {
              fields: ["shouldFlush", "initTimestampMs", "traceId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["traceId"], ignoreNulls: [] },
        },
        device_metadata: {
          autoIncrement: !0,
          defaults: {},
          id: 185,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        discoverable_chat_participants: {
          autoIncrement: !1,
          defaults: { source: e.cast([0, 0]) },
          id: 248,
          indexes: {},
          primaryKey: {
            fields: ["threadId", "contactId", "source"],
            ignoreNulls: [],
          },
        },
        discoverable_chat_participants_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {},
          id: 249,
          indexes: {},
          primaryKey: {
            fields: ["threadId", "source", "minName"],
            ignoreNulls: [],
          },
        },
        discoverable_chats_personal_inbox_info: {
          autoIncrement: !1,
          defaults: {},
          id: 326,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        e2ee_composer_draft_link_preview: {
          autoIncrement: !1,
          defaults: {},
          id: 329,
          indexes: {},
          primaryKey: { fields: ["draftId"], ignoreNulls: [] },
        },
        e2ee_dummy_table_for_sync: {
          autoIncrement: !1,
          defaults: {},
          id: 171,
          indexes: {},
          primaryKey: { fields: ["placeholder"], ignoreNulls: [] },
        },
        edit_message_history: {
          autoIncrement: !0,
          defaults: { sendStatus: e.cast([0, 0]) },
          id: 322,
          indexes: {
            originalMsgPkEditTs: {
              fields: ["originalMessagePk", "serverAdjustedEditTsMs"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        emoji_sets: {
          autoIncrement: !1,
          defaults: {},
          id: 151,
          indexes: {},
          primaryKey: {
            fields: ["categoryIdx", "emojiIdx", "type_"],
            ignoreNulls: [],
          },
        },
        encrypted_backup_restore_task_payload_context: {
          autoIncrement: !1,
          defaults: {},
          id: 190,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        encrypted_backups: {
          autoIncrement: !0,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            hasOtcEligibleDevices: !1,
          },
          id: 172,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        encrypted_backups_client_restore_status: {
          autoIncrement: !1,
          defaults: {},
          id: 231,
          indexes: {},
          primaryKey: { fields: ["threadId"], ignoreNulls: [] },
        },
        encrypted_backups_debug_metadata: {
          autoIncrement: !1,
          defaults: {},
          id: 206,
          indexes: {},
          primaryKey: { fields: ["backupId"], ignoreNulls: [] },
        },
        encrypted_backups_debug_metadata_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 217,
          indexes: {},
          primaryKey: { fields: ["backupId"], ignoreNulls: [] },
        },
        encrypted_backups_dyi_backup_restore_status: {
          autoIncrement: !0,
          defaults: {},
          id: 208,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        encrypted_backups_epoch_debug_metadata: {
          autoIncrement: !1,
          defaults: {},
          id: 207,
          indexes: {},
          primaryKey: { fields: ["epochId"], ignoreNulls: [] },
        },
        encrypted_backups_epoch_debug_metadata_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 218,
          indexes: {},
          primaryKey: { fields: ["epochId"], ignoreNulls: [] },
        },
        encrypted_backups_message_backup_status: {
          autoIncrement: !1,
          defaults: {},
          id: 213,
          indexes: {},
          primaryKey: { fields: ["messagePk"], ignoreNulls: [] },
        },
        encrypted_backups_metadata: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 196,
          indexes: {},
          primaryKey: { fields: ["backupId"], ignoreNulls: [] },
        },
        encrypted_backups_otc_devices: {
          autoIncrement: !1,
          defaults: {},
          id: 261,
          indexes: {},
          primaryKey: { fields: ["deviceId"], ignoreNulls: [] },
        },
        encrypted_backups_otc_notification_sending_status: {
          autoIncrement: !0,
          defaults: {},
          id: 285,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        encrypted_backups_status_trigger: {
          autoIncrement: !0,
          defaults: {},
          id: 195,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        encrypted_backups_virtual_devices: {
          autoIncrement: !0,
          defaults: {
            removalStatus: e.cast([0, 1]),
            requiresHsmMigration: !1,
            virtualDeviceType: e.cast([0, 1]),
          },
          id: 184,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        epd_cookie_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 163,
          indexes: {},
          primaryKey: { fields: [], ignoreNulls: [] },
        },
        experiences_shared_state: {
          autoIncrement: !1,
          defaults: {},
          id: 282,
          indexes: {},
          primaryKey: { fields: ["stateKey"], ignoreNulls: [] },
        },
        fb_events: {
          autoIncrement: !1,
          defaults: {},
          id: 200,
          indexes: {},
          primaryKey: { fields: ["eventId"], ignoreNulls: [] },
        },
        fb_transport_contacts: {
          autoIncrement: !0,
          defaults: {},
          id: 240,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        feature_limits: {
          autoIncrement: !1,
          defaults: {},
          id: 150,
          indexes: {},
          primaryKey: { fields: ["type_"], ignoreNulls: [] },
        },
        filtered_messages_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {},
          id: 211,
          indexes: {},
          primaryKey: {
            fields: [
              "threadKey",
              "mailboxType",
              "minTimestampMs",
              "minMessageId",
              "messageRangeFilter",
            ],
            ignoreNulls: [],
          },
        },
        filtered_threads_ranges_v3__generated: {
          autoIncrement: !1,
          defaults: {
            folderName: "inbox",
            hasMoreAfter: !1,
            hasMoreBefore: !1,
            isLoadingAfter: !1,
            isLoadingBefore: !1,
            maxLastActivityTimestampMs: e.cast([0, 0]),
            maxThreadKey: e.cast([0, 0]),
            minLastActivityTimestampMs: e.cast([0, 0]),
            minThreadKey: e.cast([0, 0]),
            secondaryThreadRangeFilter: e.cast([0, 0]),
            threadRangeFilterValue: "",
          },
          id: 247,
          indexes: {},
          primaryKey: {
            fields: [
              "parentThreadKey",
              "minThreadKey",
              "minLastActivityTimestampMs",
              "threadRangeFilter",
              "folderName",
              "secondaryThreadRangeFilter",
              "threadRangeFilterValue",
            ],
            ignoreNulls: [],
          },
        },
        focus_mode_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 30,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "messageId", "ctaId"],
            ignoreNulls: [],
          },
        },
        folder_metadata: {
          autoIncrement: !1,
          defaults: {},
          id: 35,
          indexes: {},
          primaryKey: { fields: ["parentThreadKey"], ignoreNulls: [] },
        },
        forward_content: {
          autoIncrement: !1,
          defaults: {},
          id: 129,
          indexes: {},
          primaryKey: { fields: ["value", "type_"], ignoreNulls: [] },
        },
        gdpr_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 75,
          indexes: {},
          primaryKey: { fields: ["userid"], ignoreNulls: [] },
        },
        gradient_colors: {
          autoIncrement: !1,
          defaults: {},
          id: 117,
          indexes: {},
          primaryKey: {
            fields: ["themeFbid", "gradientIndex"],
            ignoreNulls: [],
          },
        },
        group_invitations_pending: {
          autoIncrement: !1,
          defaults: {
            communityJoinRequestStatus: e.cast([0, 0]),
            communityParticipationControlRequestStatus: e.cast([0, 0]),
            communityParticipationControlSetting: e.cast([0, 0]),
          },
          id: 235,
          indexes: {},
          primaryKey: { fields: ["linkHash"], ignoreNulls: [] },
        },
        group_invites: {
          autoIncrement: !1,
          defaults: {},
          id: 197,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "inviterId", "inviteeId"],
            ignoreNulls: [],
          },
        },
        group_membership_approval_requests: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 26,
          indexes: {},
          primaryKey: { fields: ["threadKey", "contactId"], ignoreNulls: [] },
        },
        horizon_contact_info: {
          autoIncrement: !1,
          defaults: {},
          id: 323,
          indexes: {},
          primaryKey: { fields: ["contactId"], ignoreNulls: [] },
        },
        ig_contact_info: {
          autoIncrement: !1,
          defaults: { e2eeEligibility: e.cast([0, 0]) },
          id: 176,
          indexes: {},
          primaryKey: { fields: ["contactId"], ignoreNulls: [] },
        },
        ig_thread_info: {
          autoIncrement: !1,
          defaults: {
            igDmSettingsMode: e.cast([0, 0]),
            igDmSettingsTtlSec: e.cast([-1, 4294967295]),
          },
          id: 194,
          indexes: { igThreadID: { fields: ["igThreadId"], ignoreNulls: [] } },
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        ig_thread_labels: {
          autoIncrement: !1,
          defaults: { labelTimestampMs: e.cast([0, 0]) },
          id: 318,
          indexes: {},
          primaryKey: { fields: ["threadKey", "labelType"], ignoreNulls: [] },
        },
        igd_xma_receiver_fetch: {
          autoIncrement: !1,
          defaults: {},
          id: 316,
          indexes: {},
          primaryKey: { fields: ["messageId"], ignoreNulls: [] },
        },
        in_thread_banner: {
          autoIncrement: !1,
          defaults: {},
          id: 118,
          indexes: {},
          primaryKey: { fields: ["threadKey", "bannerId"], ignoreNulls: [] },
        },
        in_thread_banner_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 119,
          indexes: {},
          primaryKey: { fields: ["bannerId", "ctaId"], ignoreNulls: [] },
        },
        in_thread_banner_overflow_menu: {
          autoIncrement: !1,
          defaults: {},
          id: 120,
          indexes: {},
          primaryKey: { fields: ["threadKey", "bannerId"], ignoreNulls: [] },
        },
        inbox_threads_ranges: {
          autoIncrement: !1,
          defaults: {
            hasMoreBefore: !1,
            isLoadingBefore: !1,
            minLastActivityTimestampMs: e.cast([0, 0]),
            minThreadKey: e.cast([0, 0]),
          },
          id: 198,
          indexes: {},
          primaryKey: { fields: ["syncGroup"], ignoreNulls: [] },
        },
        inbox_view_state: {
          autoIncrement: !1,
          defaults: { value: "" },
          id: 277,
          indexes: {},
          primaryKey: { fields: ["interface_", "configName"], ignoreNulls: [] },
        },
        inbox_view_state_v2: {
          autoIncrement: !1,
          defaults: { value: "" },
          id: 281,
          indexes: {},
          primaryKey: { fields: ["configName"], ignoreNulls: [] },
        },
        lightspeed_task_context: {
          autoIncrement: !1,
          defaults: { requiresAuthentication: !1 },
          id: 306,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        linked_groups: {
          autoIncrement: !1,
          defaults: {},
          id: 130,
          indexes: { threadKey: { fields: ["threadKey"], ignoreNulls: [] } },
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        live_location_sharers: {
          autoIncrement: !1,
          defaults: {},
          id: 149,
          indexes: {},
          primaryKey: { fields: ["threadKey", "userId"], ignoreNulls: [] },
        },
        local_message_persistence_store: {
          autoIncrement: !0,
          defaults: {},
          id: 301,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        local_message_persistence_store_deleted_messages: {
          autoIncrement: !0,
          defaults: {},
          id: 303,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        local_message_persistence_store_supplemental: {
          autoIncrement: !0,
          defaults: {},
          id: 302,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        local_message_persistence_store_tag_index: {
          autoIncrement: !0,
          defaults: {},
          id: 304,
          indexes: {
            offlineThreadingId: {
              fields: ["offlineThreadingId", "threadId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        m_suggestions: {
          autoIncrement: !1,
          defaults: {},
          id: 21,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "timestampMs", "suggestionId"],
            ignoreNulls: [],
          },
        },
        mailbox_metadata: {
          autoIncrement: !1,
          defaults: {},
          id: 25,
          indexes: {},
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        mailbox_task_completion_api_tasks: {
          autoIncrement: !1,
          defaults: {},
          id: 233,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        mailbox_task_completion_notification_context: {
          autoIncrement: !1,
          defaults: {},
          id: 232,
          indexes: {},
          primaryKey: { fields: ["notificationScopeKey"], ignoreNulls: [] },
        },
        media_send_jobs: {
          autoIncrement: !1,
          defaults: {},
          id: 51,
          indexes: {},
          primaryKey: { fields: ["offlineAttachmentId"], ignoreNulls: [] },
        },
        media_staging: {
          autoIncrement: !1,
          defaults: { progress: 0 },
          id: 161,
          indexes: {},
          primaryKey: { fields: ["offlineAttachmentId"], ignoreNulls: [] },
        },
        message_requests: {
          autoIncrement: !1,
          defaults: {},
          id: 34,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        message_search_queries: {
          autoIncrement: !1,
          defaults: {},
          id: 70,
          indexes: {},
          primaryKey: {
            fields: ["type_", "query", "threadKeyV2"],
            ignoreNulls: [],
          },
        },
        message_search_results: {
          autoIncrement: !1,
          defaults: {},
          id: 69,
          indexes: {},
          primaryKey: {
            fields: ["type_", "query", "threadKey", "globalIndex"],
            ignoreNulls: [],
          },
        },
        messages: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            displayedContentTypes: e.cast([0, 1]),
            hasQuickReplies: !1,
            isAdminMessage: !1,
            isCollapsed: !1,
            isExpired: !1,
            isUnsent: !1,
            messageRenderingType: e.cast([0, 0]),
            primarySortKey: e.cast([0, 0]),
            quickReplyType: e.cast([0, 0]),
            replyAttachmentType: e.cast([0, 0]),
            replyStatus: e.cast([0, 0]),
            secondarySortKey: e.cast([0, 0]),
            sendStatus: e.cast([0, 0]),
            sendStatusV2: e.cast([0, 0]),
            textHasLinks: !1,
            timestampMs: e.cast([0, 0]),
            transportKey: "FBBroker",
            unsentTimestampMs: e.cast([0, 0]),
            viewFlags: e.cast([0, 0]),
          },
          id: 12,
          indexes: {
            ephemeralExpirationTs: {
              fields: ["ephemeralExpirationTs", "messageId"],
              ignoreNulls: ["ephemeralExpirationTs"],
            },
            messageDisplayOrder: {
              fields: [
                "threadKey",
                "primarySortKey",
                "secondarySortKey",
                "messageId",
                "isCollapsed",
              ],
              ignoreNulls: [],
            },
            messageGroupId: {
              fields: ["groupId", "messageId"],
              ignoreNulls: ["groupId"],
            },
            messageId: { fields: ["messageId"], ignoreNulls: [] },
            messageSubthreadKey: {
              fields: [
                "subthreadKey",
                "primarySortKey",
                "secondarySortKey",
                "messageId",
                "isCollapsed",
              ],
              ignoreNulls: ["subthreadKey"],
            },
            optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
            replySourceIdMessageID: {
              fields: ["replySourceId", "messageId"],
              ignoreNulls: ["replySourceId"],
            },
            threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
              fields: [
                "threadKey",
                "primarySortKey",
                "secondarySortKey",
                "botResponseId",
                "messageId",
              ],
              ignoreNulls: ["botResponseId"],
            },
          },
          primaryKey: {
            fields: ["threadKey", "timestampMs", "messageId"],
            ignoreNulls: [],
          },
        },
        messages_optimistic_context: {
          autoIncrement: !1,
          defaults: {},
          id: 31,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        messages_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {
            hasMoreAfter: !1,
            hasMoreBefore: !1,
            isLoadingAfter: !1,
            isLoadingBefore: !1,
          },
          id: 13,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "minTimestampMs", "minMessageId"],
            ignoreNulls: [],
          },
        },
        messages_status: {
          autoIncrement: !1,
          defaults: { timestampMs: e.cast([0, 0]) },
          id: 33,
          indexes: {},
          primaryKey: {
            fields: [
              "messageId",
              "threadKey",
              "timestampMs",
              "threadKeyFromParticipants",
              "contactId",
              "type_",
            ],
            ignoreNulls: [],
          },
        },
        messaging_privacy_settings: {
          autoIncrement: !1,
          defaults: {
            e2eeXmaPreviewsDisabled: !1,
            readReceiptsDisabled: e.cast([0, 0]),
          },
          id: 288,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        messaging_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 83,
          indexes: {},
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        mi_act_mapping_table: {
          autoIncrement: !1,
          defaults: {},
          id: 173,
          indexes: {
            chat_id: { fields: ["clientThreadPk"], ignoreNulls: [] },
            fk_threads: { fields: ["serverThreadKey"], ignoreNulls: [] },
            jid: { fields: ["jid"], ignoreNulls: [] },
          },
          primaryKey: {
            fields: ["serverThreadKey", "clientThreadPk", "jid"],
            ignoreNulls: [],
          },
        },
        msg_pinned_messages_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 205,
          indexes: {
            pinnedMessageDisplayOrder: {
              fields: ["threadKey", "pinnedTimestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["threadKey", "messageId", "pinnedTimestampMs"],
            ignoreNulls: [],
          },
        },
        msgr_quiet_time: {
          autoIncrement: !1,
          defaults: {},
          id: 317,
          indexes: {
            quietTimeId: { fields: ["quietTimeId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["quietTimeId"], ignoreNulls: [] },
        },
        mwb_safety_interventions: {
          autoIncrement: !1,
          defaults: {},
          id: 327,
          indexes: {},
          primaryKey: {
            fields: ["interventionId", "interventionEntId"],
            ignoreNulls: [],
          },
        },
        network_requests: {
          autoIncrement: !1,
          defaults: {},
          id: 3,
          indexes: {},
          primaryKey: {
            fields: ["taskQueueName", "syncDatabaseId"],
            ignoreNulls: [],
          },
        },
        new_payment_credential_option: {
          autoIncrement: !1,
          defaults: {},
          id: 90,
          indexes: {},
          primaryKey: { fields: ["credentialType"], ignoreNulls: [] },
        },
        notification_settings: {
          autoIncrement: !1,
          defaults: {
            includeInSwitchAccountBadges: !1,
            mutePageAccountMessageReminder: !1,
          },
          id: 175,
          indexes: {},
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        occamadillo_most_recent_message_per_thread: {
          autoIncrement: !1,
          defaults: {},
          id: 292,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        offline_queue_thread_status: {
          autoIncrement: !1,
          defaults: {},
          id: 295,
          indexes: {},
          primaryKey: { fields: ["threadJid"], ignoreNulls: [] },
        },
        ohai_gateway_key_configs: {
          autoIncrement: !1,
          defaults: {},
          id: 313,
          indexes: {},
          primaryKey: { fields: ["keyId"], ignoreNulls: [] },
        },
        p2m_charge: {
          autoIncrement: !1,
          defaults: {},
          id: 97,
          indexes: {},
          primaryKey: { fields: ["orderId"], ignoreNulls: [] },
        },
        p2m_invoice: {
          autoIncrement: !1,
          defaults: {},
          id: 94,
          indexes: {},
          primaryKey: { fields: ["orderId"], ignoreNulls: [] },
        },
        p2m_invoice_attachment: {
          autoIncrement: !1,
          defaults: {},
          id: 95,
          indexes: {},
          primaryKey: { fields: ["orderId", "productItemId"], ignoreNulls: [] },
        },
        p2p_request_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 100,
          indexes: {
            optimistic: {
              fields: ["optimisticTransactionId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["timestampMs", "transactionId"],
            ignoreNulls: [],
          },
        },
        p2p_transfer_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 101,
          indexes: {
            optimistic: {
              fields: ["optimisticTransactionId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["timestampMs", "transactionId"],
            ignoreNulls: [],
          },
        },
        pake_messages: {
          autoIncrement: !1,
          defaults: {},
          id: 258,
          indexes: {},
          primaryKey: { fields: ["sessionId"], ignoreNulls: [] },
        },
        participant_list_queries: {
          autoIncrement: !1,
          defaults: {},
          id: 219,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        participant_search_queries: {
          autoIncrement: !1,
          defaults: {},
          id: 214,
          indexes: {},
          primaryKey: { fields: ["query", "threadKey"], ignoreNulls: [] },
        },
        participants: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            deliveredWatermarkTimestampMs: e.cast([0, 0]),
            groupParticipantJoinState: e.cast([0, 0]),
            readActionTimestampMs: e.cast([0, 0]),
            readWatermarkTimestampMs: e.cast([0, 0]),
            threadRoles: e.cast([0, 0]),
          },
          id: 14,
          indexes: {
            contactIdThreadKey: {
              fields: ["contactId", "threadKey"],
              ignoreNulls: [],
            },
            threadKeyDeliveredWatermarkTimestampMs: {
              fields: [
                "threadKey",
                "deliveredWatermarkTimestampMs",
                "contactId",
              ],
              ignoreNulls: [],
            },
            threadKeyReadWatermarkTimestampMs: {
              fields: ["threadKey", "readWatermarkTimestampMs", "contactId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["threadKey", "contactId"], ignoreNulls: [] },
        },
        payment_auth_request_results: {
          autoIncrement: !1,
          defaults: {},
          id: 108,
          indexes: {},
          primaryKey: { fields: ["requestId"], ignoreNulls: [] },
        },
        payment_client_auth_token: {
          autoIncrement: !1,
          defaults: {},
          id: 107,
          indexes: {},
          primaryKey: {
            fields: ["userId", "deviceId", "appId"],
            ignoreNulls: [],
          },
        },
        payment_method: {
          autoIncrement: !1,
          defaults: {},
          id: 89,
          indexes: {},
          primaryKey: { fields: ["paymentMethodId"], ignoreNulls: [] },
        },
        payment_p2p_risk_verification: {
          autoIncrement: !1,
          defaults: {},
          id: 98,
          indexes: {},
          primaryKey: {
            fields: ["requestId", "transactionId"],
            ignoreNulls: [],
          },
        },
        payment_pin_verification_results: {
          autoIncrement: !1,
          defaults: {},
          id: 113,
          indexes: {},
          primaryKey: { fields: ["requestId"], ignoreNulls: [] },
        },
        payment_price_list_item: {
          autoIncrement: !1,
          defaults: {},
          id: 96,
          indexes: {},
          primaryKey: { fields: ["orderId", "id"], ignoreNulls: [] },
        },
        payment_server_request_results: {
          autoIncrement: !1,
          defaults: {},
          id: 109,
          indexes: {},
          primaryKey: { fields: ["requestId"], ignoreNulls: [] },
        },
        payment_transaction_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 99,
          indexes: {
            optimistic: {
              fields: ["optimisticTransactionId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["timestampMs", "transactionId"],
            ignoreNulls: [],
          },
        },
        payment_type_bank_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 88,
          indexes: {},
          primaryKey: { fields: ["paymentMethodId"], ignoreNulls: [] },
        },
        payment_type_card: {
          autoIncrement: !1,
          defaults: {},
          id: 86,
          indexes: {},
          primaryKey: { fields: ["paymentCredentialId"], ignoreNulls: [] },
        },
        payment_type_paypal: {
          autoIncrement: !1,
          defaults: {},
          id: 85,
          indexes: {},
          primaryKey: { fields: ["paymentCredentialId"], ignoreNulls: [] },
        },
        payment_user_auth: {
          autoIncrement: !1,
          defaults: {},
          id: 106,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        payments_eligibility: {
          autoIncrement: !1,
          defaults: {},
          id: 92,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        payments_ofac_blacklisted_countries: {
          autoIncrement: !1,
          defaults: {},
          id: 93,
          indexes: {},
          primaryKey: { fields: ["isoCountryCode"], ignoreNulls: [] },
        },
        payments_transaction_details_core: {
          autoIncrement: !1,
          defaults: {},
          id: 103,
          indexes: {},
          primaryKey: { fields: ["transactionId"], ignoreNulls: [] },
        },
        payments_transaction_details_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 104,
          indexes: {},
          primaryKey: { fields: ["transactionId", "ctaId"], ignoreNulls: [] },
        },
        payments_transaction_details_rows: {
          autoIncrement: !1,
          defaults: {},
          id: 105,
          indexes: {},
          primaryKey: {
            fields: ["transactionId", "rowOrder"],
            ignoreNulls: [],
          },
        },
        paypal_funding_options: {
          autoIncrement: !1,
          defaults: {},
          id: 91,
          indexes: {},
          primaryKey: { fields: ["optionId"], ignoreNulls: [] },
        },
        pending_backups_context_v2: {
          autoIncrement: !0,
          defaults: { isInstamadillo: !1 },
          id: 177,
          indexes: {
            fk_pending_tasks: {
              fields: ["pendingBackupTaskId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        pending_fire_and_forget_tasks: {
          autoIncrement: !0,
          defaults: {
            enqueueTimestampMs: e.cast([0, 0]),
            priority: e.cast([0, 0]),
          },
          id: 5,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        pending_protobuf_backups_context: {
          autoIncrement: !0,
          defaults: {},
          id: 305,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        pending_tasks: {
          autoIncrement: !0,
          defaults: {
            enqueueTimestampMs: e.cast([0, 0]),
            failureCount: e.cast([0, 0]),
            firstExecutedTimestampMs: e.cast([0, 0]),
            minTimeToSyncTimestampMs: e.cast([0, 0]),
            pluginType: e.cast([0, 0]),
            priority: e.cast([0, 0]),
            taskDispatchPriority: e.cast([0, 0]),
          },
          id: 2,
          indexes: {
            queueNameTaskId: {
              fields: ["queueName", "taskId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        persistent_menu_ctas: {
          autoIncrement: !1,
          defaults: { ctaType: "fallback" },
          id: 251,
          indexes: {},
          primaryKey: { fields: ["threadKey", "ctaId"], ignoreNulls: [] },
        },
        persistent_menu_items: {
          autoIncrement: !1,
          defaults: {},
          id: 77,
          indexes: {},
          primaryKey: { fields: ["threadKey", "ctaId"], ignoreNulls: [] },
        },
        pinned_messages_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 155,
          indexes: {},
          primaryKey: { fields: ["threadKey", "messageId"], ignoreNulls: [] },
        },
        pinned_threads: {
          autoIncrement: !1,
          defaults: {},
          id: 82,
          indexes: {
            pinnedTimestamp: {
              fields: ["pinnedTimestamp", "threadKey"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        poll_options_v2: {
          autoIncrement: !1,
          defaults: {
            sortKeyCreationTimestamp: e.cast([0, 0]),
            sortKeyVotingTimestamp: e.cast([0, 0]),
            voteCount: e.cast([0, 0]),
          },
          id: 39,
          indexes: {},
          primaryKey: { fields: ["pollId", "optionId"], ignoreNulls: [] },
        },
        poll_votes_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 40,
          indexes: {},
          primaryKey: {
            fields: ["pollId", "optionId", "contactId"],
            ignoreNulls: [],
          },
        },
        polls: {
          autoIncrement: !1,
          defaults: { pollType: e.cast([0, 0]) },
          id: 38,
          indexes: {},
          primaryKey: { fields: ["pollId"], ignoreNulls: [] },
        },
        presence_settings: {
          autoIncrement: !1,
          defaults: {
            hasConvertedToViewSideSettings: !1,
            isActiveStatusViewable: !1,
            isActiveStatusViewableOnFb: !1,
            isActiveStatusViewableOnMessenger: !1,
          },
          id: 187,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        presence_states: {
          autoIncrement: !1,
          defaults: {},
          id: 186,
          indexes: {
            statusContactId: {
              fields: ["status", "contactId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["contactId"], ignoreNulls: [] },
        },
        profile_sheet_information: {
          autoIncrement: !1,
          defaults: {},
          id: 256,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        quick_reply_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 20,
          indexes: {},
          primaryKey: {
            fields: ["threadKey", "messageId", "ctaId"],
            ignoreNulls: [],
          },
        },
        ranking_requests: {
          autoIncrement: !1,
          defaults: {},
          id: 135,
          indexes: {},
          primaryKey: { fields: ["scoreType"], ignoreNulls: [] },
        },
        ranking_scores: {
          autoIncrement: !1,
          defaults: { score: 0, scoreIndex: e.cast([0, 0]) },
          id: 134,
          indexes: {
            scoreTypeContactId: {
              fields: ["scoreType", "contactId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["contactId", "scoreType"], ignoreNulls: [] },
        },
        reachability_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 148,
          indexes: {},
          primaryKey: { fields: ["audience"], ignoreNulls: [] },
        },
        reaction_v2_types: {
          autoIncrement: !1,
          defaults: {},
          id: 229,
          indexes: {},
          primaryKey: { fields: ["reactionFbid"], ignoreNulls: [] },
        },
        reactions: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            reactionCreationTimestampMs: e.cast([0, 0]),
            timestampMs: e.cast([0, 0]),
            transportKey: "FBBroker",
          },
          id: 8,
          indexes: {
            fk_messages: {
              fields: ["threadKey", "timestampMs", "messageId", "actorId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["threadKey", "messageId", "actorId"],
            ignoreNulls: [],
          },
        },
        reactions_v2: {
          autoIncrement: !1,
          defaults: {
            lastUpdatedTimestampMs: e.cast([0, 0]),
            viewerReactionTimestampMs: e.cast([0, 0]),
          },
          id: 226,
          indexes: {
            optimistic: {
              fields: ["threadKey", "messageId", "reactionFbid"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: [
              "threadKey",
              "messageId",
              "reactionFbid",
              "messageTimestamp",
            ],
            ignoreNulls: [],
          },
        },
        reactions_v2_details: {
          autoIncrement: !1,
          defaults: {},
          id: 239,
          indexes: {},
          primaryKey: {
            fields: ["threadId", "messageId", "reactorId", "reactionFbid"],
            ignoreNulls: [],
          },
        },
        reactions_v2_details_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {},
          id: 243,
          indexes: {},
          primaryKey: {
            fields: ["threadId", "messageId", "reactionFbid", "minTimestampMs"],
            ignoreNulls: [],
          },
        },
        reactions_v2_details_users: {
          autoIncrement: !1,
          defaults: {},
          id: 227,
          indexes: {},
          primaryKey: {
            fields: ["reactorId", "reactionFbid"],
            ignoreNulls: [],
          },
        },
        reactions_v2_details_users_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {},
          id: 228,
          indexes: {},
          primaryKey: {
            fields: ["reactorId", "reactionFbid", "minTimestampMs"],
            ignoreNulls: [],
          },
        },
        roll_call_contributions_v2: {
          autoIncrement: !1,
          defaults: {
            contributionSource: e.cast([0, 0]),
            contributorId: e.cast([0, 0]),
          },
          id: 255,
          indexes: {
            optimistic: {
              fields: [
                "rollCallContributionId",
                "rollCallId",
                "messageId",
                "messageTimestampMs",
              ],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: [
              "rollCallContributionId",
              "rollCallId",
              "messageId",
              "messageTimestampMs",
              "threadKey",
            ],
            ignoreNulls: [],
          },
        },
        roll_calls: {
          autoIncrement: !1,
          defaults: {
            canViewWithoutContributing: !1,
            isBlurred: !1,
            viewerCanEditPrompt: !1,
            viewerHasContributed: !1,
          },
          id: 250,
          indexes: {},
          primaryKey: { fields: ["rollCallId", "threadKey"], ignoreNulls: [] },
        },
        room_participants: {
          autoIncrement: !1,
          defaults: {},
          id: 64,
          indexes: {
            optimistic: {
              fields: ["roomId", "participantId"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["roomId", "participantId", "type_"],
            ignoreNulls: [],
          },
        },
        rooms: {
          autoIncrement: !1,
          defaults: { notificationMutedUntilMs: e.cast([0, 0]) },
          id: 63,
          indexes: {
            optimistic: { fields: ["optimisticClientToken"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["roomId"], ignoreNulls: [] },
        },
        rtc_call_events: {
          autoIncrement: !0,
          defaults: { isProcessed: !1 },
          id: 245,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        rtc_multiway_call_initiation_conference_names: {
          autoIncrement: !1,
          defaults: {},
          id: 24,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        rtc_ongoing_calls_on_threads_v2: {
          autoIncrement: !1,
          defaults: {},
          id: 23,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        rtc_rooms_on_threads: {
          autoIncrement: !1,
          defaults: {},
          id: 181,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        rtc_signals: {
          autoIncrement: !1,
          defaults: {},
          id: 22,
          indexes: {},
          primaryKey: { fields: ["timestampMs", "type_"], ignoreNulls: [] },
        },
        saved_messages: {
          autoIncrement: !1,
          defaults: {},
          id: 165,
          indexes: {},
          primaryKey: { fields: ["threadKey", "messageId"], ignoreNulls: [] },
        },
        screen_time: {
          autoIncrement: !0,
          defaults: {},
          id: 321,
          indexes: {},
          primaryKey: { fields: ["recordId"], ignoreNulls: [] },
        },
        search_queries: {
          autoIncrement: !1,
          defaults: { surfaceType: e.cast([0, 1]) },
          id: 67,
          indexes: {},
          primaryKey: { fields: ["query", "surfaceType"], ignoreNulls: [] },
        },
        secure_acs_blinded_tokens: {
          autoIncrement: !0,
          defaults: {},
          id: 308,
          indexes: {},
          primaryKey: { fields: ["tokenId"], ignoreNulls: [] },
        },
        secure_acs_configurations: {
          autoIncrement: !1,
          defaults: {},
          id: 307,
          indexes: {},
          primaryKey: { fields: ["configId"], ignoreNulls: [] },
        },
        secure_acs_tokens: {
          autoIncrement: !1,
          defaults: {},
          id: 309,
          indexes: {},
          primaryKey: { fields: ["tokenId"], ignoreNulls: [] },
        },
        secure_encrypted_backups_client_state: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            encryptionVersion: e.cast([0, 0]),
            revisionVersion: e.cast([0, 0]),
          },
          id: 168,
          indexes: {},
          primaryKey: { fields: ["backupId"], ignoreNulls: [] },
        },
        secure_encrypted_backups_device_supported_versions: {
          autoIncrement: !1,
          defaults: {},
          id: 192,
          indexes: {
            fk_secure_encrypted_backups_device_supported_versions_device_id: {
              fields: ["deviceId", "supportedVersion"],
              ignoreNulls: [],
            },
          },
          primaryKey: {
            fields: ["deviceId", "supportedVersion"],
            ignoreNulls: [],
          },
        },
        secure_encrypted_backups_devices: {
          autoIncrement: !1,
          defaults: {},
          id: 191,
          indexes: {},
          primaryKey: { fields: ["deviceId"], ignoreNulls: [] },
        },
        secure_encrypted_backups_epochs: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 169,
          indexes: {
            fk_secure_encrypted_backups_client_state: {
              fields: ["backupId", "epochId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["epochId"], ignoreNulls: [] },
        },
        secure_encrypted_backups_generated_recovery_code: {
          autoIncrement: !1,
          defaults: { virtualDeviceType: e.cast([0, 1]) },
          id: 174,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        secure_encrypted_backups_message_thread_id_context: {
          autoIncrement: !1,
          defaults: {},
          id: 180,
          indexes: {
            fk_pending_tasks: { fields: ["taskId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["taskId", "listId"], ignoreNulls: [] },
        },
        secure_encrypted_backups_recovery_code_status: {
          autoIncrement: !1,
          defaults: {},
          id: 178,
          indexes: {},
          primaryKey: { fields: ["pk"], ignoreNulls: [] },
        },
        secure_get_secrets_context: {
          autoIncrement: !1,
          defaults: {},
          id: 259,
          indexes: {},
          primaryKey: { fields: ["deviceRegistrationId"], ignoreNulls: [] },
        },
        secure_recovery_code_data: {
          autoIncrement: !1,
          defaults: {},
          id: 179,
          indexes: {
            fk_pending_tasks: { fields: ["taskId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        self_profile: {
          autoIncrement: !1,
          defaults: {},
          id: 81,
          indexes: {},
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
        server_search_results: {
          autoIncrement: !1,
          defaults: {},
          id: 65,
          indexes: {},
          primaryKey: {
            fields: ["query", "resultId", "globalIndex"],
            ignoreNulls: [],
          },
        },
        server_search_sections: {
          autoIncrement: !1,
          defaults: {},
          id: 66,
          indexes: {},
          primaryKey: { fields: ["query", "globalIndex"], ignoreNulls: [] },
        },
        shared_album_contributions: {
          autoIncrement: !1,
          defaults: {
            creationTimestampMs: e.cast([0, 0]),
            creatorId: e.cast([0, 0]),
          },
          id: 280,
          indexes: {},
          primaryKey: {
            fields: [
              "sharedAlbumId",
              "sharedAlbumContributionId",
              "threadKey",
              "messageId",
            ],
            ignoreNulls: [],
          },
        },
        shared_albums: {
          autoIncrement: !1,
          defaults: {
            contributionCount: e.cast([0, 0]),
            lastActivityTimestampMs: e.cast([0, 0]),
          },
          id: 279,
          indexes: {},
          primaryKey: {
            fields: ["sharedAlbumId", "threadKey"],
            ignoreNulls: [],
          },
        },
        shared_albums_multimedia_upload_jobs: {
          autoIncrement: !1,
          defaults: {},
          id: 283,
          indexes: {},
          primaryKey: { fields: ["offlineThreadingId"], ignoreNulls: [] },
        },
        shared_albums_multimedia_upload_subjobs_status: {
          autoIncrement: !1,
          defaults: {},
          id: 284,
          indexes: {},
          primaryKey: {
            fields: ["offlineThreadingId", "jobId"],
            ignoreNulls: [],
          },
        },
        status: {
          autoIncrement: !1,
          defaults: {},
          id: 62,
          indexes: {
            optimistic: { fields: ["optimisticClientId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["statusId"], ignoreNulls: [] },
        },
        sticker_pack_details: {
          autoIncrement: !1,
          defaults: {},
          id: 127,
          indexes: {},
          primaryKey: { fields: ["packId"], ignoreNulls: [] },
        },
        sticker_packs: {
          autoIncrement: !1,
          defaults: {},
          id: 122,
          indexes: {},
          primaryKey: { fields: ["packId"], ignoreNulls: [] },
        },
        sticker_search_featured_tags: {
          autoIncrement: !1,
          defaults: {},
          id: 125,
          indexes: {},
          primaryKey: { fields: ["tagIndex"], ignoreNulls: [] },
        },
        sticker_search_queries: {
          autoIncrement: !1,
          defaults: {},
          id: 124,
          indexes: {},
          primaryKey: { fields: ["query"], ignoreNulls: [] },
        },
        sticker_search_results: {
          autoIncrement: !1,
          defaults: {},
          id: 123,
          indexes: {},
          primaryKey: {
            fields: ["resultIndex", "query", "type_"],
            ignoreNulls: [],
          },
        },
        sticker_store_pack_indices: {
          autoIncrement: !1,
          defaults: {},
          id: 128,
          indexes: {},
          primaryKey: { fields: ["packId"], ignoreNulls: [] },
        },
        sticker_to_collection: {
          autoIncrement: !1,
          defaults: {},
          id: 126,
          indexes: {},
          primaryKey: {
            fields: ["stickerId", "collectionId"],
            ignoreNulls: [],
          },
        },
        stickers: {
          autoIncrement: !1,
          defaults: {},
          id: 121,
          indexes: {
            stickerPackId: {
              fields: ["stickerPackId", "stickerId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["stickerId"], ignoreNulls: [] },
        },
        stories: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 54,
          indexes: {
            optimistic: { fields: ["optimisticClientId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["storyId"], ignoreNulls: [] },
        },
        story_ad_card: {
          autoIncrement: !1,
          defaults: {},
          id: 58,
          indexes: {},
          primaryKey: {
            fields: ["adPosition", "clientToken", "cardId"],
            ignoreNulls: [],
          },
        },
        story_ad_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 59,
          indexes: {},
          primaryKey: { fields: ["ctaId"], ignoreNulls: [] },
        },
        story_ad_unit: {
          autoIncrement: !1,
          defaults: { shouldShowAdChoice: !1 },
          id: 57,
          indexes: {},
          primaryKey: {
            fields: ["adPosition", "clientToken"],
            ignoreNulls: [],
          },
        },
        story_buckets: {
          autoIncrement: !1,
          defaults: { pageNum: e.cast([0, 0]), readState: e.cast([0, 0]) },
          id: 53,
          indexes: {
            optimistic: { fields: ["ownerId", "bucketType"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["bucketId"], ignoreNulls: [] },
        },
        story_buckets_paginated_queries: {
          autoIncrement: !1,
          defaults: {},
          id: 61,
          indexes: {},
          primaryKey: { fields: ["queryId"], ignoreNulls: [] },
        },
        story_overlays: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 60,
          indexes: {},
          primaryKey: {
            fields: ["storyId", "storyOverlayId"],
            ignoreNulls: [],
          },
        },
        story_reactions: {
          autoIncrement: !1,
          defaults: { authorityLevel: e.cast([0, 0]) },
          id: 56,
          indexes: {
            optimistic: { fields: ["optimisticClientId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["reactionId"], ignoreNulls: [] },
        },
        story_viewers: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            interactionType: e.cast([0, 1]),
          },
          id: 55,
          indexes: {},
          primaryKey: {
            fields: ["storyId", "viewerContactId", "interactionType"],
            ignoreNulls: [],
          },
        },
        supervision_edge: {
          autoIncrement: !1,
          defaults: {},
          id: 319,
          indexes: {},
          primaryKey: { fields: ["edgeId"], ignoreNulls: [] },
        },
        supervision_metadata: {
          autoIncrement: !1,
          defaults: {},
          id: 320,
          indexes: {},
          primaryKey: { fields: ["supervisionMetadataId"], ignoreNulls: [] },
        },
        support_translations: {
          autoIncrement: !1,
          defaults: {},
          id: 300,
          indexes: {},
          primaryKey: {
            fields: ["messageId", "targetLocale"],
            ignoreNulls: [],
          },
        },
        sync_group_threads_ranges: {
          autoIncrement: !1,
          defaults: {
            hasMoreBefore: !1,
            isLoadingBefore: !1,
            minLastActivityTimestampMs: e.cast([0, 0]),
            minThreadKey: e.cast([0, 0]),
          },
          id: 220,
          indexes: {},
          primaryKey: {
            fields: ["syncGroup", "parentThreadKey"],
            ignoreNulls: [],
          },
        },
        sync_groups: {
          autoIncrement: !1,
          defaults: {
            canIgnoreTimestamp: !1,
            lastSyncCompletedTimestampMs: e.cast([0, 0]),
            lastSyncRequestTimestampMs: e.cast([0, 0]),
            minTimeToSyncTimestampMs: e.cast([0, 0]),
            priority: e.cast([0, 0]),
            sendSyncParams: !1,
            syncChannel: e.cast([0, 1]),
            syncStatus: e.cast([0, 0]),
          },
          id: 1,
          indexes: {},
          primaryKey: { fields: ["groupId"], ignoreNulls: [] },
        },
        taken_down_threads: {
          autoIncrement: !1,
          defaults: {},
          id: 212,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        third_party_id_store: {
          autoIncrement: !1,
          defaults: {},
          id: 242,
          indexes: {},
          primaryKey: { fields: ["platform"], ignoreNulls: [] },
        },
        thread_bans: {
          autoIncrement: !1,
          defaults: {},
          id: 297,
          indexes: {},
          primaryKey: { fields: ["threadKey", "contactId"], ignoreNulls: [] },
        },
        thread_creation_status: {
          autoIncrement: !1,
          defaults: {},
          id: 278,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        thread_label_mappings: {
          autoIncrement: !1,
          defaults: { sortKey: e.cast([0, 0]) },
          id: 237,
          indexes: {},
          primaryKey: { fields: ["threadKey", "labelId"], ignoreNulls: [] },
        },
        thread_labels: {
          autoIncrement: !1,
          defaults: {},
          id: 215,
          indexes: {},
          primaryKey: { fields: ["labelId"], ignoreNulls: [] },
        },
        thread_limits: {
          autoIncrement: !1,
          defaults: {},
          id: 287,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        thread_nullstate: {
          autoIncrement: !1,
          defaults: {
            ctaType: e.cast([0, 0]),
            privacyTextCtaType: e.cast([0, 0]),
          },
          id: 28,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        thread_nullstate_ctas: {
          autoIncrement: !1,
          defaults: {},
          id: 29,
          indexes: {
            threadKeyCtaId: { fields: ["threadKey", "ctaId"], ignoreNulls: [] },
          },
          primaryKey: { fields: ["ctaId"], ignoreNulls: [] },
        },
        thread_point_query_ttrc: {
          autoIncrement: !1,
          defaults: {},
          id: 286,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        thread_proactive_warning_settings: {
          autoIncrement: !1,
          defaults: {},
          id: 183,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        thread_seen_heads_queries: {
          autoIncrement: !1,
          defaults: {},
          id: 325,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        thread_themes: {
          autoIncrement: !1,
          defaults: {
            backgroundUrl: "",
            iconUrl: "",
            iconUrlFallback: "",
            isDeprecated: !1,
          },
          id: 116,
          indexes: {},
          primaryKey: { fields: ["fbid"], ignoreNulls: [] },
        },
        threads: {
          autoIncrement: !1,
          defaults: {
            authorityLevel: e.cast([0, 0]),
            capabilities: e.cast([0, 0]),
            capabilities2: e.cast([0, 0]),
            capabilities3: e.cast([0, 0]),
            capabilities4: e.cast([0, 0]),
            disableComposerInput: !1,
            hasPersistentMenu: !1,
            isAdminSnippet: !1,
            isCustomThreadPicture: !1,
            isDisappearingMode: !1,
            isHidden: !1,
            isReadReceiptsDisabled: !1,
            lastActivityTimestampMs: e.cast([0, 0]),
            lastReadWatermarkTimestampMs: e.cast([0, 0]),
            muteCallsExpireTimeMs: e.cast([0, 0]),
            muteExpireTimeMs: e.cast([0, 0]),
            muteMentionExpireTimeMs: e.cast([0, 0]),
            ongoingCallState: e.cast([0, 0]),
            readReceiptsDisabledV2: e.cast([0, 0]),
            removeWatermarkTimestampMs: e.cast([0, 0]),
            snippetHasEmoji: !1,
            threadInvitesEnabled: e.cast([0, 0]),
            threadInvitesEnabledV2: e.cast([0, 0]),
            unreadDisappearingMessageCount: e.cast([0, 0]),
            unsendLimitMs: e.cast([0, 0]),
          },
          id: 9,
          indexes: {
            clientThreadKey: {
              fields: ["clientThreadKey", "threadKey"],
              ignoreNulls: ["clientThreadKey"],
            },
            lastActivityTimestampMs: {
              fields: ["lastActivityTimestampMs", "threadKey"],
              ignoreNulls: [],
            },
            parentThreadKeyLastActivityTimestampMs: {
              fields: [
                "parentThreadKey",
                "lastActivityTimestampMs",
                "threadKey",
              ],
              ignoreNulls: [],
            },
            secondaryParentThreadKeyLastActivityTimestampMs: {
              fields: [
                "secondaryParentThreadKey",
                "lastActivityTimestampMs",
                "threadKey",
              ],
              ignoreNulls: ["secondaryParentThreadKey"],
            },
            syncGroupParentThreadKeyLastActivityTimestampMs: {
              fields: [
                "syncGroup",
                "parentThreadKey",
                "lastActivityTimestampMs",
                "threadKey",
              ],
              ignoreNulls: [],
            },
            threadTypeLastActivityTimestampMs: {
              fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        threads_optimistic_context: {
          autoIncrement: !1,
          defaults: {},
          id: 32,
          indexes: {},
          primaryKey: { fields: ["taskId"], ignoreNulls: [] },
        },
        threads_optimistic_metadata: {
          autoIncrement: !1,
          defaults: {},
          id: 312,
          indexes: {},
          primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
        },
        threads_ranges_v2__generated: {
          autoIncrement: !1,
          defaults: {
            hasMoreAfter: !1,
            hasMoreBefore: !1,
            isLoadingAfter: !1,
            isLoadingBefore: !1,
            maxLastActivityTimestampMs: e.cast([0, 0]),
            maxThreadKey: e.cast([0, 0]),
            minLastActivityTimestampMs: e.cast([0, 0]),
            minThreadKey: e.cast([0, 0]),
          },
          id: 10,
          indexes: {},
          primaryKey: {
            fields: [
              "parentThreadKey",
              "minThreadKey",
              "minLastActivityTimestampMs",
            ],
            ignoreNulls: [],
          },
        },
        transaction_history: {
          autoIncrement: !1,
          defaults: { timestampMs: e.cast([0, 0]) },
          id: 102,
          indexes: {},
          primaryKey: { fields: ["transactionId"], ignoreNulls: [] },
        },
        typing_indicator: {
          autoIncrement: !1,
          defaults: {},
          id: 52,
          indexes: {},
          primaryKey: { fields: ["threadKey", "senderId"], ignoreNulls: [] },
        },
        universal_search_recent_searches: {
          autoIncrement: !1,
          defaults: { lastAccessedTimestampMs: e.cast([0, 0]) },
          id: 68,
          indexes: {},
          primaryKey: { fields: ["resultId"], ignoreNulls: [] },
        },
        user_visible_errors: {
          autoIncrement: !0,
          defaults: {},
          id: 6,
          indexes: {},
          primaryKey: { fields: ["errorId"], ignoreNulls: [] },
        },
        user_visible_network_connectivity_error: {
          autoIncrement: !0,
          defaults: {},
          id: 115,
          indexes: {},
          primaryKey: { fields: ["statusId"], ignoreNulls: [] },
        },
        value_model_features: {
          autoIncrement: !1,
          defaults: {},
          id: 137,
          indexes: {},
          primaryKey: { fields: ["feature"], ignoreNulls: [] },
        },
        value_model_output: {
          autoIncrement: !1,
          defaults: {},
          id: 138,
          indexes: {},
          primaryKey: { fields: ["product", "contactId"], ignoreNulls: [] },
        },
        value_model_rules: {
          autoIncrement: !1,
          defaults: {},
          id: 136,
          indexes: {},
          primaryKey: { fields: ["product", "ruleIndex"], ignoreNulls: [] },
        },
        video_chat_links_attempted_joiners: {
          autoIncrement: !1,
          defaults: {},
          id: 79,
          indexes: {},
          primaryKey: { fields: ["userId", "url"], ignoreNulls: [] },
        },
        video_chat_links_joining: {
          autoIncrement: !1,
          defaults: { canAnonymousUsersJoin: !1 },
          id: 78,
          indexes: {
            optimistic: { fields: ["optimisticClientToken"], ignoreNulls: [] },
          },
          primaryKey: {
            fields: ["url", "optimisticClientToken"],
            ignoreNulls: [],
          },
        },
        work_contact_info: {
          autoIncrement: !1,
          defaults: {},
          id: 210,
          indexes: {},
          primaryKey: { fields: ["id"], ignoreNulls: [] },
        },
        work_genai: {
          autoIncrement: !1,
          defaults: {},
          id: 293,
          indexes: {},
          primaryKey: { fields: ["threadKey", "messageId"], ignoreNulls: [] },
        },
        workroom_creation_requests: {
          autoIncrement: !1,
          defaults: {},
          id: 252,
          indexes: {},
          primaryKey: { fields: ["creationId"], ignoreNulls: [] },
        },
        workroom_invites: {
          autoIncrement: !1,
          defaults: {},
          id: 257,
          indexes: {},
          primaryKey: { fields: ["inviteId"], ignoreNulls: [] },
        },
        workrooms_co_presence_states: {
          autoIncrement: !1,
          defaults: {},
          id: 246,
          indexes: {
            userCoPresence: {
              fields: ["userId", "coPresenceObjectId"],
              ignoreNulls: [],
            },
          },
          primaryKey: { fields: ["userId"], ignoreNulls: [] },
        },
      }),
      u = Object.freeze(
        babelHelpers.extends({}, s, {
          e2ee_composer_draft_link_preview: {
            autoIncrement: !1,
            defaults: {},
            id: 329,
            indexes: {},
            primaryKey: { fields: ["draftId"], ignoreNulls: [] },
          },
        }),
      ),
      c = Object.freeze(
        babelHelpers.extends({}, u, {
          occamadillo_most_recent_message_per_thread: {
            autoIncrement: !1,
            defaults: {},
            id: 292,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      d = Object.freeze(
        babelHelpers.extends({}, c, {
          occamadillo_most_recent_message_per_thread: {
            autoIncrement: !1,
            defaults: {},
            id: 292,
            indexes: {
              fetchTimestamp: { fields: ["fetchTimestampMs"], ignoreNulls: [] },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      m = Object.freeze(
        babelHelpers.extends({}, d, {
          messages_optimistic_context: {
            autoIncrement: !1,
            defaults: {},
            id: 31,
            indexes: {},
            primaryKey: { fields: ["taskId"], ignoreNulls: [] },
          },
        }),
      ),
      p = Object.freeze(
        babelHelpers.extends({}, m, {
          auto_restore_opt_out: {
            autoIncrement: !1,
            defaults: {},
            id: 330,
            indexes: {},
            primaryKey: { fields: ["optOutKey"], ignoreNulls: [] },
          },
        }),
      ),
      _ = Object.freeze(
        babelHelpers.extends({}, p, {
          messages_optimistic_context: {
            autoIncrement: !1,
            defaults: { transportKey: "FBBroker" },
            id: 31,
            indexes: {},
            primaryKey: { fields: ["taskId"], ignoreNulls: [] },
          },
        }),
      ),
      f = Object.freeze(
        babelHelpers.extends({}, _, {
          messenger_fts_threads: {
            autoIncrement: !1,
            defaults: {
              nextMessageTimestamp: e.cast([-1, 4294967295]),
              status: e.cast([0, 0]),
            },
            id: 331,
            indexes: {},
            primaryKey: { fields: ["threadId"], ignoreNulls: [] },
          },
          messenger_fts_threads_queries: {
            autoIncrement: !1,
            defaults: { sessionId: "" },
            id: 332,
            indexes: {},
            primaryKey: { fields: ["queryId"], ignoreNulls: [] },
          },
        }),
      ),
      g = Object.freeze(
        babelHelpers.extends({}, f, {
          messenger_fts_threads: {
            autoIncrement: !1,
            defaults: {
              nextMessageTimestamp: e.cast([-1, 4294967295]),
              status: e.cast([0, 0]),
              threadType: e.cast([0, 0]),
            },
            id: 331,
            indexes: {},
            primaryKey: { fields: ["threadId"], ignoreNulls: [] },
          },
        }),
      ),
      h = Object.freeze(
        babelHelpers.extends({}, g, {
          filtered_threads_ranges_v3__generated: {
            autoIncrement: !1,
            defaults: {
              folderName: "inbox",
              hasMoreAfter: !1,
              hasMoreBefore: !1,
              isLoadingAfter: !1,
              isLoadingBefore: !1,
              maxLastActivityTimestampMs: e.cast([0, 0]),
              maxThreadKey: e.cast([0, 0]),
              minLastActivityTimestampMs: e.cast([0, 0]),
              minThreadKey: e.cast([0, 0]),
              secondaryThreadRangeFilter: e.cast([0, 0]),
              syncGroup: e.cast([0, 1]),
              threadRangeFilterValue: "",
            },
            id: 247,
            indexes: {},
            primaryKey: {
              fields: [
                "parentThreadKey",
                "minThreadKey",
                "minLastActivityTimestampMs",
                "threadRangeFilter",
                "folderName",
                "secondaryThreadRangeFilter",
                "threadRangeFilterValue",
              ],
              ignoreNulls: [],
            },
          },
        }),
      ),
      y = Object.freeze(
        babelHelpers.extends({}, h, {
          messages_optimistic_context: {
            autoIncrement: !1,
            defaults: { transportKey: "FBBroker" },
            id: 31,
            indexes: {},
            primaryKey: { fields: ["taskId"], ignoreNulls: [] },
          },
        }),
      ),
      C = Object.freeze(
        babelHelpers.extends({}, y, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      b = Object.freeze(
        babelHelpers.extends({}, C, {
          media_receiver_fetch_transport_mappings: {
            autoIncrement: !1,
            defaults: {},
            id: 333,
            indexes: {},
            primaryKey: { fields: ["receiverFetchId"], ignoreNulls: [] },
          },
        }),
      ),
      v = Object.freeze(
        babelHelpers.extends({}, b, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              disableComposerInput: !1,
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      S = Object.freeze(
        babelHelpers.extends({}, v, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      R = Object.freeze(
        babelHelpers.extends({}, S, {
          attachment_items: {
            autoIncrement: !1,
            defaults: { attachmentIndex: e.cast([0, 0]) },
            id: 18,
            indexes: {
              fk_attachments: {
                fields: [
                  "threadKey",
                  "messageId",
                  "attachmentFbid",
                  "attachmentIndex",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["attachmentFbid", "attachmentIndex"],
              ignoreNulls: [],
            },
          },
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      L = Object.freeze(
        babelHelpers.extends({}, R, {
          client_thread_proactive_warning_settings: {
            autoIncrement: !1,
            defaults: {},
            id: 241,
            indexes: {},
            primaryKey: { fields: ["threadPk"], ignoreNulls: [] },
          },
        }),
      ),
      E = Object.freeze(
        babelHelpers.extends({}, L, {
          pake_messages: {
            autoIncrement: !1,
            defaults: {},
            id: 258,
            indexes: {},
            primaryKey: { fields: ["sessionId"], ignoreNulls: [] },
          },
        }),
      ),
      k = Object.freeze(
        babelHelpers.extends({}, E, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              disableComposerInput: !1,
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      I = Object.freeze(
        babelHelpers.extends({}, k, {
          contacts: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              blockedByViewerStatus: e.cast([0, 0]),
              canViewerMessage: !0,
              capabilities2: e.cast([0, 0]),
              contactReachabilityStatusType: e.cast([0, 0]),
              contactType: e.cast([0, 0]),
              contactTypeExact: e.cast([0, 0]),
              gender: e.cast([0, 0]),
              isEmployee: !1,
              isMemorialized: !1,
              isMessengerUser: !1,
              optimisticBlockedByViewerStatus: e.cast([0, 0]),
              optimisticBlockedByViewerStatusTimestampMs: e.cast([0, 0]),
              rank: 0,
              restrictionType: e.cast([0, 0]),
              waConnectStatus: e.cast([0, 0]),
            },
            id: 7,
            indexes: {
              blockedByViewerStatusId: {
                fields: ["blockedByViewerStatus", "id"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["id"], ignoreNulls: [] },
          },
        }),
      ),
      T = Object.freeze(
        babelHelpers.extends({}, I, {
          encrypted_backups_otc_devices: {
            autoIncrement: !1,
            defaults: {},
            id: 261,
            indexes: {},
            primaryKey: { fields: ["deviceId"], ignoreNulls: [] },
          },
        }),
      ),
      D = Object.freeze(
        babelHelpers.extends({}, T, {
          business_thread_info: {
            autoIncrement: !1,
            defaults: {},
            id: 260,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      x = Object.freeze(
        babelHelpers.extends({}, D, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      $ = Object.freeze(
        babelHelpers.extends({}, x, {
          account_synced_fields: {
            autoIncrement: !1,
            defaults: {},
            id: 334,
            indexes: {},
            primaryKey: {
              fields: ["accountId", "syncedField"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      P = Object.freeze(
        babelHelpers.extends({}, $, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      N = Object.freeze(
        babelHelpers.extends({}, P, {
          encrypted_backup_user_preferences: {
            autoIncrement: !0,
            defaults: {},
            id: 335,
            indexes: {},
            primaryKey: { fields: ["pk"], ignoreNulls: [] },
          },
        }),
      ),
      M = Object.freeze(
        babelHelpers.extends({}, N, {
          support_translation_feedback: {
            autoIncrement: !1,
            defaults: {},
            id: 336,
            indexes: {},
            primaryKey: {
              fields: ["messageId", "targetLocale"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      w = Object.freeze(
        babelHelpers.extends({}, M, {
          support_translations: {
            autoIncrement: !1,
            defaults: {},
            id: 300,
            indexes: {},
            primaryKey: {
              fields: ["messageId", "targetLocale"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      A = Object.freeze(
        babelHelpers.extends({}, w, {
          ig_thread_info: {
            autoIncrement: !1,
            defaults: {
              igDmSettingsMode: e.cast([0, 0]),
              igDmSettingsTtlSec: e.cast([-1, 4294967295]),
            },
            id: 194,
            indexes: {
              igThreadID: { fields: ["igThreadId"], ignoreNulls: [] },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      F = Object.freeze(
        babelHelpers.extends({}, A, {
          e2ee_composer_draft_link_preview: {
            autoIncrement: !1,
            defaults: {},
            id: 329,
            indexes: {},
            primaryKey: { fields: ["draftId"], ignoreNulls: [] },
          },
        }),
      ),
      O = Object.freeze(
        babelHelpers.extends({}, F, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      B = Object.freeze(
        babelHelpers.extends({}, O, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              disableComposerInput: !1,
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      W = Object.freeze(
        babelHelpers.extends({}, B, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      q = Object.freeze(
        babelHelpers.extends({}, W, {
          admin_message_ctas: {
            autoIncrement: !1,
            defaults: { showAdChoiceIcon: !1, timestampMs: e.cast([0, 0]) },
            id: 27,
            indexes: { ctaId: { fields: ["ctaId"], ignoreNulls: [] } },
            primaryKey: {
              fields: ["threadKey", "messageId", "ctaId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      U = Object.freeze(
        babelHelpers.extends({}, q, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              isVideoQuickSend: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      V = Object.freeze(
        babelHelpers.extends({}, U, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      H = Object.freeze(
        babelHelpers.extends({}, V, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              capabilities5: e.cast([0, 0]),
              disableComposerInput: !1,
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      G = Object.freeze(
        babelHelpers.extends({}, H, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      z = Object.freeze(
        babelHelpers.extends({}, G, {
          messaging_privacy_settings: {
            autoIncrement: !1,
            defaults: {
              e2eeHdMediaEnabled: !1,
              e2eeXmaPreviewsDisabled: !1,
              readReceiptsDisabled: e.cast([0, 0]),
            },
            id: 288,
            indexes: {},
            primaryKey: { fields: ["userId"], ignoreNulls: [] },
          },
        }),
      ),
      j = Object.freeze(
        babelHelpers.extends({}, z, {
          media_staging: {
            autoIncrement: !1,
            defaults: { progress: 0 },
            id: 161,
            indexes: {},
            primaryKey: { fields: ["offlineAttachmentId"], ignoreNulls: [] },
          },
        }),
      ),
      K = Object.freeze(
        babelHelpers.extends({}, j, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Q = Object.freeze(
        babelHelpers.extends({}, K, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      X = Object.freeze(
        babelHelpers.extends({}, Q, {
          community_folders: {
            autoIncrement: !1,
            defaults: {
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              inviteStatus: e.cast([0, 0]),
              notificationMutedUntil: e.cast([0, 0]),
            },
            id: 162,
            indexes: {
              byFbGroupId: {
                fields: ["fbGroupId", "folderId"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["folderId"], ignoreNulls: [] },
          },
        }),
      ),
      Y = Object.freeze(
        babelHelpers.extends({}, X, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      J = Object.freeze(
        babelHelpers.extends({}, Y, {
          ctx_ad_context: {
            autoIncrement: !1,
            defaults: {},
            id: 337,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      Z = Object.freeze(
        babelHelpers.extends({}, J, {
          server_search_results: {
            autoIncrement: !1,
            defaults: {},
            id: 65,
            indexes: {},
            primaryKey: {
              fields: ["query", "resultId", "globalIndex"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      ee = Object.freeze(
        babelHelpers.extends({}, Z, {
          horizon_groups_key_mapping: {
            autoIncrement: !1,
            defaults: {},
            id: 338,
            indexes: {},
            primaryKey: { fields: ["threadKey", "groupKey"], ignoreNulls: [] },
          },
        }),
      ),
      te = Object.freeze(
        babelHelpers.extends({}, ee, {
          ctx_ad_context: {
            autoIncrement: !1,
            defaults: {},
            id: 337,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      ne = Object.freeze(
        babelHelpers.extends({}, te, {
          rtc_ongoing_calls_on_threads_v2: {
            autoIncrement: !1,
            defaults: {},
            id: 23,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              capabilities5: e.cast([0, 0]),
              disableComposerInput: !1,
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      re = Object.freeze(
        babelHelpers.extends({}, ne, {
          horizon_party_members: {
            autoIncrement: !1,
            defaults: {},
            id: 339,
            indexes: {},
            primaryKey: { fields: ["partyKey", "userId"], ignoreNulls: [] },
          },
        }),
      ),
      oe = Object.freeze(
        babelHelpers.extends({}, re, {
          thread_theme_search_queries: {
            autoIncrement: !1,
            defaults: {},
            id: 340,
            indexes: {},
            primaryKey: { fields: ["query"], ignoreNulls: [] },
          },
          thread_theme_search_results: {
            autoIncrement: !1,
            defaults: {},
            id: 341,
            indexes: {},
            primaryKey: { fields: ["resultIndex", "query"], ignoreNulls: [] },
          },
        }),
      ),
      ae = Object.freeze(
        babelHelpers.extends({}, oe, {
          client_media_status: {
            autoIncrement: !1,
            defaults: {},
            id: 342,
            indexes: {},
            primaryKey: { fields: ["id"], ignoreNulls: [] },
          },
        }),
      ),
      ie = Object.freeze(
        babelHelpers.extends({}, ae, {
          secure_encrypted_backups_epochs: {
            autoIncrement: !1,
            defaults: { authorityLevel: e.cast([0, 0]) },
            id: 169,
            indexes: {
              fk_secure_encrypted_backups_client_state: {
                fields: ["backupId", "epochId"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["epochId"], ignoreNulls: [] },
          },
        }),
      ),
      le = Object.freeze(
        babelHelpers.extends({}, ie, {
          contacts: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              blockedByViewerStatus: e.cast([0, 0]),
              canViewerMessage: !0,
              capabilities2: e.cast([0, 0]),
              contactReachabilityStatusType: e.cast([0, 0]),
              contactType: e.cast([0, 0]),
              contactTypeExact: e.cast([0, 0]),
              friendshipStatus: e.cast([0, 5]),
              gender: e.cast([0, 0]),
              isEmployee: !1,
              isMemorialized: !1,
              isMessengerUser: !1,
              optimisticBlockedByViewerStatus: e.cast([0, 0]),
              optimisticBlockedByViewerStatusTimestampMs: e.cast([0, 0]),
              rank: 0,
              restrictionType: e.cast([0, 0]),
              waConnectStatus: e.cast([0, 0]),
            },
            id: 7,
            indexes: {
              blockedByViewerStatusId: {
                fields: ["blockedByViewerStatus", "id"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["id"], ignoreNulls: [] },
          },
        }),
      ),
      se = Object.freeze(
        babelHelpers.extends({}, le, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      ue = Object.freeze(
        babelHelpers.extends({}, se, {
          encrypted_backups_reenrollment_trigger: {
            autoIncrement: !0,
            defaults: {},
            id: 343,
            indexes: {},
            primaryKey: { fields: ["pk"], ignoreNulls: [] },
          },
        }),
      ),
      ce = Object.freeze(
        babelHelpers.extends({}, ue, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      de = Object.freeze(
        babelHelpers.extends({}, ce, {
          business_thread_info: {
            autoIncrement: !1,
            defaults: {},
            id: 260,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      me = Object.freeze(
        babelHelpers.extends({}, de, {
          thread_label_mappings: {
            autoIncrement: !1,
            defaults: { sortKey: e.cast([0, 0]) },
            id: 237,
            indexes: {
              labelId: { fields: ["labelId", "threadKey"], ignoreNulls: [] },
            },
            primaryKey: { fields: ["threadKey", "labelId"], ignoreNulls: [] },
          },
        }),
      ),
      pe = Object.freeze(
        babelHelpers.extends({}, me, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      _e = Object.freeze(
        babelHelpers.extends({}, pe, {
          messages_optimistic_context: {
            autoIncrement: !1,
            defaults: { transportKey: "FBBroker" },
            id: 31,
            indexes: {},
            primaryKey: { fields: ["taskId"], ignoreNulls: [] },
          },
        }),
      ),
      fe = Object.freeze(
        babelHelpers.extends({}, _e, {
          pending_protobuf_backups_context: {
            autoIncrement: !0,
            defaults: {},
            id: 305,
            indexes: {},
            primaryKey: { fields: ["pk"], ignoreNulls: [] },
          },
        }),
      ),
      ge = Object.freeze(
        babelHelpers.extends({}, fe, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              capabilities5: e.cast([0, 0]),
              disableComposerInput: !1,
              draftMessage: "",
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      he = Object.freeze(
        babelHelpers.extends({}, ge, {
          server_search_results: {
            autoIncrement: !1,
            defaults: {},
            id: 65,
            indexes: {},
            primaryKey: {
              fields: ["query", "resultId", "globalIndex"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      ye = Object.freeze(
        babelHelpers.extends({}, he, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Ce = Object.freeze(
        babelHelpers.extends({}, ye, {
          messages_optimistic_context: {
            autoIncrement: !1,
            defaults: { transportKey: "FBBroker" },
            id: 31,
            indexes: {},
            primaryKey: { fields: ["taskId"], ignoreNulls: [] },
          },
        }),
      ),
      be = Object.freeze(
        babelHelpers.extends({}, Ce, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              messageSubthreadParentMessageId: {
                fields: [
                  "threadKey",
                  "subthreadParentMessageId",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
          subthread_message_ranges: {
            autoIncrement: !1,
            defaults: {},
            id: 347,
            indexes: {},
            primaryKey: {
              fields: ["parentThreadKey", "parentMessageId"],
              ignoreNulls: [],
            },
          },
          subthread_ranges: {
            autoIncrement: !1,
            defaults: {},
            id: 346,
            indexes: {},
            primaryKey: { fields: ["parentThreadKey"], ignoreNulls: [] },
          },
          subthread_senders: {
            autoIncrement: !1,
            defaults: {},
            id: 345,
            indexes: {},
            primaryKey: {
              fields: ["subthreadParentMessageId", "contactId"],
              ignoreNulls: [],
            },
          },
          subthreads: {
            autoIncrement: !1,
            defaults: {},
            id: 344,
            indexes: {},
            primaryKey: {
              fields: ["parentThreadKey", "parentMessageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      ve = Object.freeze(
        babelHelpers.extends({}, be, {
          subthread_senders: {
            autoIncrement: !1,
            defaults: {},
            id: 345,
            indexes: {
              lastActivityTimestampMsOrder: {
                fields: [
                  "subthreadParentMessageId",
                  "lastActivityTimestampMs",
                  "contactId",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["subthreadParentMessageId", "contactId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Se = Object.freeze(
        babelHelpers.extends({}, ve, {
          subthreads: {
            autoIncrement: !1,
            defaults: {},
            id: 344,
            indexes: {
              lastActivityTimestampMsOrder: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "parentMessageId",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["parentThreadKey", "parentMessageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Re = Object.freeze(
        babelHelpers.extends({}, Se, {
          subthread_message_ranges_v2: {
            autoIncrement: !1,
            defaults: {},
            id: 348,
            indexes: {},
            primaryKey: {
              fields: ["parentThreadKey", "parentMessageId", "minTimestampMs"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Le = Object.freeze(
        babelHelpers.extends({}, Re, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyMessageHiddenState: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              messageSubthreadParentMessageId: {
                fields: [
                  "threadKey",
                  "subthreadParentMessageId",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Ee = Object.freeze(
        babelHelpers.extends({}, Le, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      ke = Object.freeze(
        babelHelpers.extends({}, Ee, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyMessageHiddenState: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              collapsibleId: {
                fields: ["collapsibleId", "messageId"],
                ignoreNulls: ["collapsibleId"],
              },
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              messageSubthreadParentMessageId: {
                fields: [
                  "threadKey",
                  "subthreadParentMessageId",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Ie = Object.freeze(
        babelHelpers.extends({}, ke, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Te = Object.freeze(
        babelHelpers.extends({}, Ie, {
          business_thread_info: {
            autoIncrement: !1,
            defaults: {},
            id: 260,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      De = Object.freeze(
        babelHelpers.extends({}, Te, {
          attachments: {
            autoIncrement: !1,
            defaults: {
              attachmentIndex: e.cast([0, 0]),
              attachmentType: e.cast([0, 0]),
              authorityLevel: e.cast([0, 0]),
              hasMedia: !1,
              hasXma: !1,
              isSharable: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
            },
            id: 16,
            indexes: {
              fk_messages: {
                fields: [
                  "threadKey",
                  "timestampMs",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
              idx_attachments_collapsible_id: {
                fields: [
                  "threadKey",
                  "collapsibleId",
                  "messageId",
                  "attachmentFbid",
                ],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      xe = Object.freeze(
        babelHelpers.extends({}, De, {
          multi_step_replies: {
            autoIncrement: !1,
            defaults: {},
            id: 349,
            indexes: {},
            primaryKey: {
              fields: [
                "threadKey",
                "messageId",
                "automationRuleId",
                "mailboxType",
              ],
              ignoreNulls: [],
            },
          },
        }),
      ),
      $e = Object.freeze(
        babelHelpers.extends({}, xe, {
          contacts: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              blockedByViewerStatus: e.cast([0, 0]),
              canViewerMessage: !0,
              capabilities2: e.cast([0, 0]),
              contactReachabilityStatusType: e.cast([0, 0]),
              contactType: e.cast([0, 0]),
              contactTypeExact: e.cast([0, 0]),
              friendshipStatus: e.cast([0, 5]),
              gender: e.cast([0, 0]),
              isEmployee: !1,
              isMemorialized: !1,
              isMessengerUser: !1,
              optimisticBlockedByViewerStatus: e.cast([0, 0]),
              optimisticBlockedByViewerStatusTimestampMs: e.cast([0, 0]),
              rank: 0,
              restrictionType: e.cast([0, 0]),
              waConnectStatus: e.cast([0, 0]),
            },
            id: 7,
            indexes: {
              blockedByViewerStatusId: {
                fields: ["blockedByViewerStatus", "id"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["id"], ignoreNulls: [] },
          },
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              capabilities5: e.cast([0, 0]),
              disableComposerInput: !1,
              draftMessage: "",
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      Pe = Object.freeze(
        babelHelpers.extends({}, $e, {
          business_thread_info: {
            autoIncrement: !1,
            defaults: {},
            id: 260,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      Ne = Object.freeze(
        babelHelpers.extends({}, Pe, {
          thread_themes: {
            autoIncrement: !1,
            defaults: {
              backgroundUrl: "",
              iconUrl: "",
              iconUrlFallback: "",
              isDeprecated: !1,
              themeType: e.cast([0, 0]),
            },
            id: 116,
            indexes: {},
            primaryKey: { fields: ["fbid"], ignoreNulls: [] },
          },
        }),
      ),
      Me = Object.freeze(
        babelHelpers.extends({}, Ne, {
          media_send_jobs: {
            autoIncrement: !1,
            defaults: {},
            id: 51,
            indexes: {},
            primaryKey: { fields: ["offlineAttachmentId"], ignoreNulls: [] },
          },
          pending_tasks: {
            autoIncrement: !0,
            defaults: {
              enqueueTimestampMs: e.cast([0, 0]),
              failureCount: e.cast([0, 0]),
              firstExecutedTimestampMs: e.cast([0, 0]),
              minTimeToSyncTimestampMs: e.cast([0, 0]),
              pluginType: e.cast([0, 0]),
              priority: e.cast([0, 0]),
              taskDispatchPriority: e.cast([0, 0]),
            },
            id: 2,
            indexes: {
              queueNameTaskId: {
                fields: ["queueName", "taskId"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["taskId"], ignoreNulls: [] },
          },
        }),
      ),
      we = Object.freeze(
        babelHelpers.extends({}, Me, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyMessageHiddenState: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              collapsibleId: {
                fields: ["collapsibleId", "messageId"],
                ignoreNulls: ["collapsibleId"],
              },
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              messageSubthreadParentMessageId: {
                fields: [
                  "threadKey",
                  "subthreadParentMessageId",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Ae = Object.freeze(
        babelHelpers.extends({}, we, {
          vtm_thread_classifications: {
            autoIncrement: !1,
            defaults: {},
            id: 350,
            indexes: {},
            primaryKey: {
              fields: ["threadKey", "filterType"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Fe = Object.freeze(
        babelHelpers.extends({}, Ae, {
          business_thread_info: {
            autoIncrement: !1,
            defaults: {},
            id: 260,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      Oe = Object.freeze(
        babelHelpers.extends({}, Fe, {
          attachment_reactions: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              reactionCreationTimestampMs: e.cast([0, 0]),
              timestampMs: e.cast([0, 0]),
            },
            id: 351,
            indexes: {
              fk_messages: {
                fields: ["threadKey", "messageId", "attachmentFbid", "actorId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "messageId", "attachmentFbid", "actorId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Be = Object.freeze(
        babelHelpers.extends({}, Oe, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              capabilities5: e.cast([0, 0]),
              capabilities6: e.cast([0, 0]),
              disableComposerInput: !1,
              draftMessage: "",
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      We = Object.freeze(
        babelHelpers.extends({}, Be, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyMessageHiddenState: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              collapsibleId: {
                fields: ["collapsibleId", "messageId"],
                ignoreNulls: ["collapsibleId"],
              },
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              messageSubthreadParentMessageId: {
                fields: [
                  "threadKey",
                  "subthreadParentMessageId",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      qe = Object.freeze(
        babelHelpers.extends({}, We, {
          messages: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              displayedContentTypes: e.cast([0, 1]),
              hasQuickReplies: !1,
              isAdminMessage: !1,
              isCollapsed: !1,
              isExpired: !1,
              isUnsent: !1,
              messageHiddenState: e.cast([0, 0]),
              messageRenderingType: e.cast([0, 0]),
              primarySortKey: e.cast([0, 0]),
              quickReplyType: e.cast([0, 0]),
              replyAttachmentType: e.cast([0, 0]),
              replyMessageHiddenState: e.cast([0, 0]),
              replyStatus: e.cast([0, 0]),
              secondarySortKey: e.cast([0, 0]),
              sendStatus: e.cast([0, 0]),
              sendStatusV2: e.cast([0, 0]),
              textHasLinks: !1,
              timestampMs: e.cast([0, 0]),
              transportKey: "FBBroker",
              unsentTimestampMs: e.cast([0, 0]),
              viewFlags: e.cast([0, 0]),
            },
            id: 12,
            indexes: {
              collapsibleId: {
                fields: ["collapsibleId", "messageId"],
                ignoreNulls: ["collapsibleId"],
              },
              ephemeralExpirationTs: {
                fields: ["ephemeralExpirationTs", "messageId"],
                ignoreNulls: ["ephemeralExpirationTs"],
              },
              messageDisplayOrder: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderAuthority: {
                fields: [
                  "threadKey",
                  "authorityLevel",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageDisplayOrderOfflineThreadingId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              messageGroupId: {
                fields: ["groupId", "messageId"],
                ignoreNulls: ["groupId"],
              },
              messageId: { fields: ["messageId"], ignoreNulls: [] },
              messageSubthreadKey: {
                fields: [
                  "subthreadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: ["subthreadKey"],
              },
              messageSubthreadParentMessageId: {
                fields: [
                  "threadKey",
                  "subthreadParentMessageId",
                  "primarySortKey",
                  "offlineThreadingId",
                  "messageId",
                  "isCollapsed",
                ],
                ignoreNulls: [],
              },
              optimistic: { fields: ["offlineThreadingId"], ignoreNulls: [] },
              replySourceIdMessageID: {
                fields: ["replySourceId", "messageId"],
                ignoreNulls: ["replySourceId"],
              },
              threadKeyPrimarySortKeySecondarySortKeyBotResponseId: {
                fields: [
                  "threadKey",
                  "primarySortKey",
                  "secondarySortKey",
                  "botResponseId",
                  "messageId",
                ],
                ignoreNulls: ["botResponseId"],
              },
              timestampMs: {
                fields: ["timestampMs", "messageId"],
                ignoreNulls: [],
              },
            },
            primaryKey: {
              fields: ["threadKey", "timestampMs", "messageId"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Ue = Object.freeze(
        babelHelpers.extends({}, qe, {
          latent_thread_preview: {
            autoIncrement: !1,
            defaults: {},
            id: 352,
            indexes: {},
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      Ve = Object.freeze(
        babelHelpers.extends({}, Ue, {
          threads: {
            autoIncrement: !1,
            defaults: {
              authorityLevel: e.cast([0, 0]),
              capabilities: e.cast([0, 0]),
              capabilities2: e.cast([0, 0]),
              capabilities3: e.cast([0, 0]),
              capabilities4: e.cast([0, 0]),
              capabilities5: e.cast([0, 0]),
              capabilities6: e.cast([0, 0]),
              disableComposerInput: !1,
              draftMessage: "",
              hasPersistentMenu: !1,
              isAdminSnippet: !1,
              isCustomThreadPicture: !1,
              isDisappearingMode: !1,
              isHidden: !1,
              isReadReceiptsDisabled: !1,
              lastActivityTimestampMs: e.cast([0, 0]),
              lastReadWatermarkTimestampMs: e.cast([0, 0]),
              muteCallsExpireTimeMs: e.cast([0, 0]),
              muteExpireTimeMs: e.cast([0, 0]),
              muteMentionExpireTimeMs: e.cast([0, 0]),
              ongoingCallState: e.cast([0, 0]),
              readReceiptsDisabledV2: e.cast([0, 0]),
              removeWatermarkTimestampMs: e.cast([0, 0]),
              snippetHasEmoji: !1,
              threadInvitesEnabled: e.cast([0, 0]),
              threadInvitesEnabledV2: e.cast([0, 0]),
              typingIndicatorDisabled: e.cast([0, 0]),
              unreadDisappearingMessageCount: e.cast([0, 0]),
              unsendLimitMs: e.cast([0, 0]),
            },
            id: 9,
            indexes: {
              clientThreadKey: {
                fields: ["clientThreadKey", "threadKey"],
                ignoreNulls: ["clientThreadKey"],
              },
              lastActivityTimestampMs: {
                fields: ["lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
              parentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              secondaryParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "secondaryParentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: ["secondaryParentThreadKey"],
              },
              syncGroupParentThreadKeyLastActivityTimestampMs: {
                fields: [
                  "syncGroup",
                  "parentThreadKey",
                  "lastActivityTimestampMs",
                  "threadKey",
                ],
                ignoreNulls: [],
              },
              threadTypeLastActivityTimestampMs: {
                fields: ["threadType", "lastActivityTimestampMs", "threadKey"],
                ignoreNulls: [],
              },
            },
            primaryKey: { fields: ["threadKey"], ignoreNulls: [] },
          },
        }),
      ),
      He = Object.freeze(
        babelHelpers.extends({}, Ve, {
          ai_agent_animation_media_info: {
            autoIncrement: !1,
            defaults: {},
            id: 353,
            indexes: {},
            primaryKey: {
              fields: ["agentId", "activityStatus"],
              ignoreNulls: [],
            },
          },
        }),
      ),
      Ge = Object.freeze({
        afterUpgrade: o("LSDbV1.upgrade").afterUpgrade,
        revision: 90,
        tables: He,
        upgrade: {
          1: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(u),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          2: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(c),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          3: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(d),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          4: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(m),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          5: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(p),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          6: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(_),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          7: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(f),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          8: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(g),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          9: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(h),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          10: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(y),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          11: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(C),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          12: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(b),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          13: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(v),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          14: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(S),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          15: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(R),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          16: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(L),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          17: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(E),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          18: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(k),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          19: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(I),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          20: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(T),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          21: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(D),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          22: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(x),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          23: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData($),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          24: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(P),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          25: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(N),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          26: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(M),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          27: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(w),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          28: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(A),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          29: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(F),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          30: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(O),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          31: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(B),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          32: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(W),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          33: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(q),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          34: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(U),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          35: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(V),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          36: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(H),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          37: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(G),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          38: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(z),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          39: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(j),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          40: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(K),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          41: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(Q),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          42: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(X),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          43: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(Y),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          44: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(J),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          45: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(Z),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          46: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ee,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          47: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    te,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          48: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ne,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          49: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    re,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          50: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    oe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          51: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ae,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          52: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ie,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          53: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    le,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          54: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    se,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          55: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ue,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          56: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ce,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          57: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    de,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          58: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    me,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          59: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    pe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          60: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    _e,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          61: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    fe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          62: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ge,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          63: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    he,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          64: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ye,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          65: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ce,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          66: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    be,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          67: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ve,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          68: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Se,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          69: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Re,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          70: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Le,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          71: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ee,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          72: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    ke,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          73: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ie,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          74: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Te,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          75: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    De,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          76: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    xe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          77: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    $e,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          78: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Pe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          79: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ne,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          80: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Me,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          81: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    we,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          82: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ae,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          83: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Fe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          84: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Oe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          85: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Be,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          86: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    We,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          87: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    qe,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          88: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ue,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          89: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    Ve,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                yield o(
                  "ReStoreDefaultValueMigration",
                ).runMigrationForTableDefaultValuesIfNeeded(
                  e.transaction,
                  r,
                  !1,
                  n,
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          90: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("ReStoreVersionedSchemaProviderUtil").getTableData(
                    He,
                  ),
                  n = t.defaults,
                  r = t.tableData;
                (yield o(
                  "ReStoreIndicesMigration",
                ).runMigrationForIndicesIfNeeded(e, r, n, !1),
                  yield o(
                    "ReStoreDefaultValueMigration",
                  ).runMigrationForTableDefaultValuesIfNeeded(
                    e.transaction,
                    r,
                    !1,
                    n,
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })(),
        },
      });
    l.LSDbV1 = Ge;
  },
  98,
);
