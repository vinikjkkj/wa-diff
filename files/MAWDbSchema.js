__d(
  "MAWDbSchema",
  ["MAWDbVersionList"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        {
          autoIncrement: !0,
          indexes: { externalId: { columns: ["externalId"] } },
          name: "e2ee_appData",
          primaryKey: ["appDataId"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_appMeta",
          primaryKey: ["key"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_tasks",
          primaryKey: ["taskName"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_personalSenderKeyStatuses",
          primaryKey: ["groupJid"],
        },
        {
          autoIncrement: !0,
          indexes: {
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            externalId: { columns: ["externalId"], unique: !1 },
            msgId: { columns: ["msgId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
          },
          name: "e2ee_unrenderedMessages",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            externalIdWithType: { columns: ["externalIdWithType"], unique: !1 },
          },
          name: "e2ee_pendingStanzas",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !1,
          indexes: {
            threadId: { columns: ["threadId"], unique: !1 },
            userJid: { columns: ["userJid"], unique: !1 },
          },
          name: "e2ee_participants",
          primaryKey: ["id"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_receipts",
          primaryKey: ["msgId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            "*msgIds": { columns: ["msgIds"], multiEntry_DO_NOT_USE: !0 },
            hashedPlaintextHash: { columns: ["hashedPlaintextHash"] },
          },
          name: "e2ee_media",
          primaryKey: ["mediaId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            externalId: { columns: ["externalId"], unique: !1 },
            reactionId: { columns: ["reactionId"], unique: !1 },
            reactToExternalId: { columns: ["reactToExternalId"], unique: !1 },
            reactToMsgId: { columns: ["reactToMsgId"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
          },
          name: "e2ee_reactions",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            hashedPlaintextHash: { columns: ["hashedPlaintextHash"] },
          },
          name: "e2ee_chunk",
          primaryKey: ["chunkId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            jid: { columns: ["jid"] },
            threadOrder: { columns: ["threadOrder"], unique: !1 },
          },
          name: "e2ee_threads",
          primaryKey: ["chatId"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_existingUsers",
          primaryKey: ["id"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_pendingReceipts",
          primaryKey: ["id"],
        },
        {
          autoIncrement: !0,
          indexes: { version: { columns: ["version"] } },
          name: "e2ee_browserEncryptionMeta",
          primaryKey: ["id"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsBackloggedMessages",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsEncryptionMeta",
          primaryKey: ["key"],
        },
        {
          autoIncrement: !0,
          indexes: {
            "*prefixes": {
              columns: ["prefixes"],
              multiEntry_DO_NOT_USE: !0,
              unique: !1,
            },
            chatId: { columns: ["chatId"], unique: !1 },
            id: { columns: ["id"], unique: !1 },
          },
          name: "e2ee_ftsIndexV3",
          primaryKey: ["ftsRowId"],
        },
        {
          autoIncrement: !1,
          indexes: { threadId: { columns: ["threadId"], unique: !1 } },
          name: "e2ee_groupInfo",
          primaryKey: ["groupJid"],
        },
      ],
      u = [
        {
          autoIncrement: !0,
          indexes: {
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      c = [
        {
          autoIncrement: !0,
          indexes: {
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            revokedExternalId: { columns: ["revokedExternalId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      d = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_isDualSend",
          primaryKey: ["rowId"],
        },
      ],
      m = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_historySyncQRCodeSecretKey",
          primaryKey: ["key"],
        },
      ],
      p = [
        {
          autoIncrement: !0,
          indexes: {
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteForMeTs: {
              columns: ["messageDeleteForMeTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
          },
          name: "e2ee_unrenderedMessages",
          primaryKey: ["rowId"],
        },
      ],
      _ = [
        {
          autoIncrement: !0,
          indexes: {
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            revokedExternalId: { columns: ["revokedExternalId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteForMeTs: {
              columns: ["messageDeleteForMeTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
          },
          name: "e2ee_unrenderedMessages",
          primaryKey: ["rowId"],
        },
      ],
      f = [
        {
          autoIncrement: !1,
          indexes: { inviterJid: { columns: ["inviterJid"], unique: !1 } },
          name: "e2ee_groupInvites",
          primaryKey: ["invitedParticipantId"],
        },
      ],
      g = [
        {
          autoIncrement: !0,
          indexes: {
            deleteTs: { columns: ["deleteTs"], unique: !1 },
            externalIdWithType: { columns: ["externalIdWithType"], unique: !1 },
          },
          name: "e2ee_pendingStanzas",
          primaryKey: ["rowId"],
        },
      ],
      h = [
        {
          autoIncrement: !0,
          indexes: {
            "*msgIds": { columns: ["msgIds"], multiEntry_DO_NOT_USE: !0 },
            fbid: { columns: ["fbid"] },
            hashedPlaintextHash: { columns: ["hashedPlaintextHash"] },
            objectId: { columns: ["objectId"] },
          },
          name: "e2ee_media",
          primaryKey: ["mediaId"],
        },
      ],
      y = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_dualSendMedia",
          primaryKey: ["id"],
        },
      ],
      C = [
        {
          autoIncrement: !0,
          indexes: {
            associatedMessageId: {
              columns: ["associatedMessageId"],
              unique: !1,
            },
            defaultPreviewMediaId: {
              columns: ["defaultPreviewMediaId"],
              unique: !1,
            },
            faviconMediaId: { columns: ["faviconMediaId"], unique: !1 },
            headerMediaId: { columns: ["headerMediaId"], unique: !1 },
            targetExpiringAtSec: {
              columns: ["targetExpiringAtSec"],
              unique: !1,
            },
          },
          name: "e2ee_xma",
          primaryKey: ["xmaId"],
        },
      ],
      b = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_historySyncQRCodeData",
          primaryKey: ["rowId"],
        },
      ],
      v = [
        {
          autoIncrement: !0,
          indexes: {
            associatedMessageId: {
              columns: ["associatedMessageId"],
              unique: !1,
            },
            defaultPreviewMediaId: {
              columns: ["defaultPreviewMediaId"],
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            faviconMediaId: { columns: ["faviconMediaId"], unique: !1 },
            headerMediaId: { columns: ["headerMediaId"], unique: !1 },
            targetExpiringAtSec: {
              columns: ["targetExpiringAtSec"],
              unique: !1,
            },
          },
          name: "e2ee_xma",
          primaryKey: ["xmaId"],
        },
      ],
      S = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_dyiBatch",
          primaryKey: ["batchId"],
        },
      ],
      R = [
        {
          autoIncrement: !1,
          indexes: {
            correspondingOpenThreadKey: {
              columns: ["correspondingOpenThreadKey"],
              unique: !1,
            },
            threadId: { columns: ["threadId"], unique: !1 },
          },
          name: "e2ee_groupInfo",
          primaryKey: ["groupJid"],
        },
      ],
      L = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_groupInvites",
          primaryKey: ["invitedParticipantId", "inviterJid"],
          removed: !0,
        },
      ],
      E = [
        {
          autoIncrement: !1,
          indexes: { inviterJid: { columns: ["inviterJid"], unique: !1 } },
          name: "e2ee_groupInvites",
          primaryKey: ["invitedParticipantId", "inviterJid"],
        },
      ],
      k = [
        {
          autoIncrement: !0,
          indexes: {
            "[thread+sortOrderMs]": {
              columns: ["thread", "sortOrderMs"],
              unique: !1,
            },
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            revokedExternalId: { columns: ["revokedExternalId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            "[thread+sortOrderMs]": {
              columns: ["thread", "sortOrderMs"],
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteForMeTs: {
              columns: ["messageDeleteForMeTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
          },
          name: "e2ee_unrenderedMessages",
          primaryKey: ["rowId"],
        },
      ],
      I = [
        {
          autoIncrement: !1,
          indexes: {
            "[modelId+modelType+actionState]": {
              columns: ["modelId", "modelType", "actionState"],
              unique: !1,
            },
            action: { columns: ["action"], unique: !1 },
            actionState: { columns: ["actionState"], unique: !1 },
            collection: { columns: ["collection"], unique: !1 },
            indexMac: { columns: ["indexMac"], unique: !1 },
          },
          name: "e2ee_syncActions",
          primaryKey: ["index"],
        },
      ],
      T = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_missingKeys",
          primaryKey: ["keyHex"],
        },
      ],
      D = [
        {
          autoIncrement: !0,
          indexes: {
            action: { columns: ["action"], unique: !1 },
            collection: { columns: ["collection"], unique: !1 },
            index: { columns: ["index"], unique: !1 },
          },
          name: "e2ee_pendingMutations",
          primaryKey: ["id"],
        },
      ],
      x = [
        {
          autoIncrement: !0,
          indexes: { collection: { columns: ["collection"] } },
          name: "e2ee_collectionVersions",
          primaryKey: ["id"],
        },
      ],
      $ = [
        {
          autoIncrement: !0,
          indexes: {
            keyEpoch: { columns: ["keyEpoch"], unique: !1 },
            keyId: { columns: ["keyId"] },
          },
          name: "e2ee_syncKeys",
          primaryKey: ["id"],
        },
      ],
      P = [],
      N = [
        {
          autoIncrement: !1,
          indexes: {
            externalId: { columns: ["externalId"], unique: !1 },
            lastRetryTs: { columns: ["lastRetryTs"], unique: !1 },
            traceId: { columns: ["traceId"], unique: !1 },
          },
          name: "e2ee_uploadRetryStatus",
          primaryKey: ["externalId", "lastRetryTs"],
        },
      ],
      M = [
        {
          autoIncrement: !0,
          indexes: {
            jid: { columns: ["jid"], unique: !1 },
            stanzaId: { columns: ["stanzaId"], unique: !1 },
            type: { columns: ["type"], unique: !1 },
          },
          name: "e2ee_stanzaQueue",
          primaryKey: ["stanzaQueueId"],
        },
      ],
      w = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_deviceChangeAlerts",
          primaryKey: ["deviceChangeAlertsId"],
        },
      ],
      A = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_retroactiveBackupsState",
          primaryKey: ["threadId"],
        },
      ],
      F = [
        {
          autoIncrement: !0,
          indexes: {
            deduplicationKey: {
              columns: ["deduplicationKey"],
              predicate: function (t) {
                return t.deduplicationKey != null;
              },
            },
            jid: { columns: ["jid"] },
            threadOrder: { columns: ["threadOrder"], unique: !1 },
          },
          name: "e2ee_threads",
          primaryKey: ["chatId"],
        },
      ],
      O = [
        {
          autoIncrement: !0,
          indexes: {
            mediaId: { columns: ["mediaId"], unique: !1 },
            msgId: { columns: ["msgId"], unique: !1 },
            objectId: { columns: ["objectId"] },
          },
          name: "e2ee_mediaBackup",
          primaryKey: ["mediaBackupId"],
        },
      ],
      B = [
        {
          autoIncrement: !0,
          indexes: {
            authoritativeThreadKey: { columns: ["authoritativeThreadKey"] },
            deduplicationKey: {
              columns: ["deduplicationKey"],
              predicate: function (t) {
                return t.deduplicationKey != null;
              },
            },
            jid: { columns: ["jid"] },
            threadOrder: { columns: ["threadOrder"], unique: !1 },
          },
          name: "e2ee_threads",
          primaryKey: ["chatId"],
        },
      ],
      W = [
        {
          autoIncrement: !0,
          indexes: {
            "[jid+type]": { columns: ["jid", "type"], unique: !1 },
            jid: { columns: ["jid"], unique: !1 },
            stanzaId: { columns: ["stanzaId"], unique: !1 },
            type: { columns: ["type"], unique: !1 },
          },
          name: "e2ee_stanzaQueue",
          primaryKey: ["stanzaQueueId"],
        },
      ],
      q = [
        {
          autoIncrement: !0,
          indexes: {
            originalMsgExternalId: {
              columns: ["originalMsgExternalId"],
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
          },
          name: "e2ee_editMsgHistory",
          primaryKey: ["editMsgHistoryId"],
        },
      ],
      U = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsBackloggedMessages",
          primaryKey: ["rowId"],
          removed: !0,
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsEncryptionMeta",
          primaryKey: ["key"],
          removed: !0,
        },
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_ftsIndexV3",
          primaryKey: ["ftsRowId"],
          removed: !0,
        },
      ],
      V = [
        {
          autoIncrement: !0,
          indexes: {
            "*msgIds": { columns: ["msgIds"], multiEntry_DO_NOT_USE: !0 },
            fbid: { columns: ["fbid"], unique: !1 },
            hashedPlaintextHash: { columns: ["hashedPlaintextHash"] },
            objectId: { columns: ["objectId"], unique: !1 },
          },
          name: "e2ee_media",
          primaryKey: ["mediaId"],
        },
      ],
      H = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_ebRestoreQueue",
          primaryKey: ["queueId"],
        },
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_ebUploadQueue",
          primaryKey: ["queueId"],
        },
      ],
      G = [
        {
          autoIncrement: !0,
          indexes: {
            "[uploadStatus+uploadTsSec]": {
              columns: ["uploadStatus", "uploadTsSec"],
              unique: !1,
            },
            uploadStatus: { columns: ["uploadStatus"], unique: !1 },
            uploadTsSec: { columns: ["uploadTsSec"], unique: !1 },
          },
          name: "e2ee_ebRestoreQueue",
          primaryKey: ["queueId"],
        },
        {
          autoIncrement: !0,
          indexes: {
            "[uploadStatus+uploadTsSec]": {
              columns: ["uploadStatus", "uploadTsSec"],
              unique: !1,
            },
            uploadStatus: { columns: ["uploadStatus"], unique: !1 },
            uploadTsSec: { columns: ["uploadTsSec"], unique: !1 },
          },
          name: "e2ee_ebUploadQueue",
          primaryKey: ["queueId"],
        },
      ],
      z = [
        {
          autoIncrement: !0,
          indexes: {
            "[thread+serverTs]": {
              columns: ["thread", "serverTs"],
              unique: !1,
            },
            "[thread+sortOrderMs]": {
              columns: ["thread", "sortOrderMs"],
              unique: !1,
            },
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            revokedExternalId: { columns: ["revokedExternalId"], unique: !1 },
            thread: { columns: ["thread"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      j = [],
      K = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_danglingQueue",
          primaryKey: ["queueId"],
        },
      ],
      Q = [
        {
          autoIncrement: !0,
          indexes: { dbVersion: { columns: ["dbVersion"], unique: !1 } },
          name: "e2ee_staleQueue",
          primaryKey: ["staleQueueId"],
        },
      ],
      X = [
        {
          autoIncrement: !0,
          indexes: {
            "[offlineThreadingId+backupActionType]": {
              columns: ["offlineThreadingId", "backupActionType"],
              unique: !1,
            },
            "[uploadStatus+uploadTsSec]": {
              columns: ["uploadStatus", "uploadTsSec"],
              unique: !1,
            },
            backupActionType: { columns: ["backupActionType"], unique: !1 },
            msgIdKey: { columns: ["msgIdKey"], unique: !1 },
            offlineThreadingId: { columns: ["offlineThreadingId"], unique: !1 },
            uploadStatus: { columns: ["uploadStatus"], unique: !1 },
            uploadTsSec: { columns: ["uploadTsSec"], unique: !1 },
          },
          name: "e2ee_ebUploadQueue",
          primaryKey: ["queueId"],
        },
      ],
      Y = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsBackloggedMessages",
          primaryKey: ["rowId"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsEncryptionMeta",
          primaryKey: ["key"],
        },
        {
          autoIncrement: !0,
          indexes: {
            "*prefixes": {
              columns: ["prefixes"],
              multiEntry_DO_NOT_USE: !0,
              unique: !1,
            },
            chatId: { columns: ["chatId"], unique: !1 },
            id: { columns: ["id"], unique: !1 },
          },
          name: "e2ee_ftsIndexV3",
          primaryKey: ["ftsRowId"],
        },
      ],
      J = [
        {
          autoIncrement: !1,
          indexes: {
            "[threadJid+userJid]": {
              columns: ["threadJid", "userJid"],
              unique: !1,
            },
            threadId: { columns: ["threadId"], unique: !1 },
            userJid: { columns: ["userJid"], unique: !1 },
          },
          name: "e2ee_participants",
          primaryKey: ["id"],
        },
      ],
      Z = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_pendingMessageStanzaQueue",
          primaryKey: ["pendingMessageStanzaQueueId"],
        },
      ],
      ee = [
        {
          autoIncrement: !0,
          indexes: {
            author: { columns: ["author"], unique: !1 },
            chat: { columns: ["chat"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
          },
          name: "e2ee_deletedMessages",
          primaryKey: ["rowId"],
        },
      ],
      te = [
        {
          autoIncrement: !0,
          indexes: { threadJid: { columns: ["threadJid"], unique: !1 } },
          name: "e2ee_ebMsgRanges",
          primaryKey: ["rangeId"],
        },
      ],
      ne = [
        {
          autoIncrement: !1,
          indexes: {
            inviterJid: { columns: ["inviterJid"], unique: !1 },
            threadJid: { columns: ["threadJid", "inviteeJid"], unique: !1 },
          },
          name: "e2ee_groupInvites",
          primaryKey: ["invitedParticipantId", "inviterJid"],
        },
      ],
      re = [
        {
          autoIncrement: !1,
          indexes: { waMsgId: { columns: ["waMsgId"] } },
          name: "e2ee_receipts",
          primaryKey: ["msgId"],
        },
      ],
      oe = [
        {
          autoIncrement: !0,
          indexes: {
            "[jid+priority]": { columns: ["jid", "priority"], unique: !1 },
            "[jid+type]": { columns: ["jid", "type"], unique: !1 },
            jid: { columns: ["jid"], unique: !1 },
            priority: { columns: ["priority"], unique: !1 },
            stanzaId: { columns: ["stanzaId"], unique: !1 },
            type: { columns: ["type"], unique: !1 },
          },
          name: "e2ee_stanzaQueue",
          primaryKey: ["stanzaQueueId"],
        },
      ],
      ae = [
        {
          autoIncrement: !0,
          indexes: {
            "[thread+serverTs]": {
              columns: ["thread", "serverTs"],
              unique: !1,
            },
            "[thread+sortOrderMs]": {
              columns: ["thread", "sortOrderMs"],
              unique: !1,
            },
            altIndex: { columns: ["altIndex"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: { columns: ["messageDeleteTs"], unique: !1 },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: { columns: ["quoteExternalId"], unique: !1 },
            revokedExternalId: { columns: ["revokedExternalId"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      ie = [
        {
          autoIncrement: !0,
          indexes: {
            "[thread+serverTs]": {
              columns: ["thread", "serverTs"],
              predicate: function (t) {
                return t.serverTs != null;
              },
              unique: !1,
            },
            "[thread+sortOrderMs]": {
              columns: ["thread", "sortOrderMs"],
              unique: !1,
            },
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      le = [
        {
          autoIncrement: !1,
          dexieOnly_primaryKeyUnique: !0,
          indexes: { ts: { columns: ["ts"], unique: !1 } },
          name: "e2ee_sentBytesCache",
          primaryKey: ["waMsgId"],
        },
      ],
      se = [
        {
          autoIncrement: !0,
          indexes: {
            "[thread+serverTs]": {
              columns: ["thread", "serverTs"],
              predicate: function (t) {
                return t.serverTs != null;
              },
              unique: !1,
            },
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      ue = [
        {
          autoIncrement: !0,
          indexes: {
            "[originalMsgExternalId+threadJid]": {
              columns: ["originalMsgExternalId", "threadJid"],
              unique: !1,
            },
          },
          name: "e2ee_editMsgHistory",
          primaryKey: ["editMsgHistoryId"],
        },
      ],
      ce = [
        {
          autoIncrement: !0,
          indexes: {
            deviceJid: { columns: ["deviceJid"], unique: !1 },
            displayOrder: { columns: ["isArchived", "ts"], unique: !1 },
            isConfirmedActionTs: {
              columns: ["isConfirmed", "action", "ts"],
              unique: !1,
            },
            isNotifiedTs: { columns: ["isNotified", "ts"], unique: !1 },
          },
          name: "e2ee_deviceChangeAlerts",
          primaryKey: ["deviceChangeAlertsId"],
        },
        {
          autoIncrement: !1,
          indexes: { threadId: { columns: ["threadId"], unique: !1 } },
          name: "e2ee_groupInfo",
          primaryKey: ["groupJid"],
        },
      ],
      de = [
        {
          autoIncrement: !0,
          indexes: {
            "[uploadStatus+uploadTsSec]": {
              columns: ["uploadStatus", "uploadTsSec"],
              unique: !1,
            },
            backupActionType: { columns: ["backupActionType"], unique: !1 },
            msgIdKey: { columns: ["msgIdKey"], unique: !1 },
            uploadStatus: { columns: ["uploadStatus"], unique: !1 },
            uploadTsSec: { columns: ["uploadTsSec"], unique: !1 },
          },
          name: "e2ee_ebUploadQueue",
          primaryKey: ["queueId"],
        },
      ],
      me = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ephemeralSettings",
          primaryKey: ["userJid"],
        },
      ],
      pe = [
        {
          autoIncrement: !1,
          indexes: {
            ebClientRequired: {
              columns: ["ebClientRequired", "timestampMs"],
              unique: !1,
            },
            restorable: { columns: ["restorable", "timestampMs"], unique: !1 },
          },
          name: "e2ee_ebMessageRestoreTasks",
          primaryKey: ["messageId"],
        },
      ],
      _e = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_igMessageAuxiliaryInfo",
          primaryKey: ["messageId"],
        },
      ],
      fe = [
        {
          autoIncrement: !1,
          indexes: {
            plaintextHash: { columns: ["plaintextHash"], unique: !1 },
          },
          name: "e2ee_mediaKeys",
          primaryKey: ["ciphertextHash"],
        },
      ],
      ge = [
        {
          autoIncrement: !0,
          indexes: {
            "[jid+priority]": { columns: ["jid", "priority"], unique: !1 },
            jid: { columns: ["jid"], unique: !1 },
            priority: { columns: ["priority"], unique: !1 },
          },
          name: "e2ee_stanzaQueue",
          primaryKey: ["stanzaQueueId"],
        },
      ],
      he = [
        {
          autoIncrement: !1,
          indexes: {
            "[threadJid+userJid]": {
              columns: ["threadJid", "userJid"],
              unique: !1,
            },
            userJid: { columns: ["userJid"], unique: !1 },
          },
          name: "e2ee_participants",
          primaryKey: ["id"],
        },
      ],
      ye = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_groupInfo",
          primaryKey: ["groupJid"],
        },
      ],
      Ce = [
        {
          autoIncrement: !0,
          indexes: {},
          name: "e2ee_ebRestoreQueue",
          primaryKey: ["queueId"],
        },
      ],
      be = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsPurgeBacklog",
          primaryKey: ["externalId"],
        },
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_ftsPurgeThreadBacklog",
          primaryKey: ["chatJid"],
        },
      ],
      ve = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      Se = [
        {
          autoIncrement: !0,
          indexes: {
            "*prefixes": {
              columns: ["prefixes"],
              multiEntry_DO_NOT_USE: !0,
              unique: !1,
            },
            chatId: { columns: ["chatId"], unique: !1 },
            id: { columns: ["id"], unique: !1 },
          },
          name: "e2ee_ftsIndexV3",
          primaryKey: ["ftsRowId"],
          removed: !0,
        },
      ],
      Re = [
        {
          autoIncrement: !0,
          indexes: {
            fbid: { columns: ["fbid"], unique: !1 },
            hashedPlaintextHash: { columns: ["hashedPlaintextHash"] },
            objectId: { columns: ["objectId"], unique: !1 },
          },
          name: "e2ee_media",
          primaryKey: ["mediaId"],
        },
      ],
      Le = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_retroactiveBackupsState",
          primaryKey: ["threadId"],
          removed: !0,
        },
      ],
      Ee = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_uploadRetryStatus",
          primaryKey: [],
          removed: !0,
        },
      ],
      ke = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_receiverFetchInfo",
          primaryKey: ["receiverFetchId"],
        },
      ],
      Ie = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+ts]": { columns: ["threadJid", "ts"], unique: !1 },
            externalId: { columns: ["externalId"], unique: !1 },
            reactionId: { columns: ["reactionId"], unique: !1 },
            reactToExternalId: { columns: ["reactToExternalId"], unique: !1 },
            reactToMsgId: { columns: ["reactToMsgId"], unique: !1 },
            threadJid: { columns: ["threadJid"], unique: !1 },
            ts: { columns: ["ts"], unique: !1 },
          },
          name: "e2ee_reactions",
          primaryKey: ["rowId"],
        },
      ],
      Te = [
        {
          autoIncrement: !0,
          indexes: {
            "*msgIds": { columns: ["msgIds"], multiEntry_DO_NOT_USE: !0 },
            fbid: { columns: ["fbid"], unique: !1 },
            hashedPlaintextHash: { columns: ["hashedPlaintextHash"] },
            objectId: { columns: ["objectId"], unique: !1 },
          },
          name: "e2ee_media",
          primaryKey: ["mediaId"],
        },
      ],
      De = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExpirationTs: {
              columns: ["quoteExpirationTs"],
              predicate: function (t) {
                return t.quoteExpirationTs != null;
              },
              unique: !1,
            },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      xe = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            ack: { columns: ["ack"], unique: !1 },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            quoteExpirationTs: {
              columns: ["quoteExpirationTs"],
              predicate: function (t) {
                return t.quoteExpirationTs != null;
              },
              unique: !1,
            },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      $e = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            ack: { columns: ["ack"], unique: !1 },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            protocolMsgId: { columns: ["protocolMsgId"], unique: !0 },
            quoteExpirationTs: {
              columns: ["quoteExpirationTs"],
              predicate: function (t) {
                return t.quoteExpirationTs != null;
              },
              unique: !1,
            },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      Pe = [
        {
          autoIncrement: !0,
          indexes: { version: { columns: ["version"], unique: !0 } },
          name: "e2ee_encryptionMetaV3",
          primaryKey: ["id"],
        },
      ],
      Ne = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            ack: { columns: ["ack"], unique: !1 },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            protocolMsgId: { columns: ["protocolMsgId"], unique: !0 },
            quoteExpirationTs: {
              columns: ["quoteExpirationTs"],
              predicate: function (t) {
                return t.quoteExpirationTs != null;
              },
              unique: !1,
            },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages_deduped",
          primaryKey: ["rowId"],
        },
      ],
      Me = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_poll",
          primaryKey: ["chatJid", "pollStanzaId"],
        },
      ],
      we = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+pollStanzaId+sortOrderMs]": {
              columns: ["threadJid", "pollStanzaId", "sortOrderMs"],
              predicate: function (t) {
                return t.pollStanzaId != null;
              },
              unique: !1,
            },
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            ack: { columns: ["ack"], unique: !1 },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            protocolMsgId: { columns: ["protocolMsgId"], unique: !0 },
            quoteExpirationTs: {
              columns: ["quoteExpirationTs"],
              predicate: function (t) {
                return t.quoteExpirationTs != null;
              },
              unique: !1,
            },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      Ae = [
        {
          autoIncrement: !0,
          indexes: {
            "[threadJid+collapsibleId+sortOrderMs]": {
              columns: ["threadJid", "collapsibleId", "sortOrderMs"],
              unique: !1,
            },
            "[threadJid+pollStanzaId+sortOrderMs]": {
              columns: ["threadJid", "pollStanzaId", "sortOrderMs"],
              predicate: function (t) {
                return t.pollStanzaId != null;
              },
              unique: !1,
            },
            "[threadJid+sortOrderMs]": {
              columns: ["threadJid", "sortOrderMs"],
              unique: !1,
            },
            ack: { columns: ["ack"], unique: !1 },
            altIndex: {
              columns: ["altIndex"],
              predicate: function (t) {
                return t.altIndex != null;
              },
              unique: !1,
            },
            externalId: { columns: ["externalId"], unique: !1 },
            messageDeleteTs: {
              columns: ["messageDeleteTs"],
              predicate: function (t) {
                return t.messageDeleteTs != null;
              },
              unique: !1,
            },
            messageExpirationTs: {
              columns: ["messageExpirationTs"],
              predicate: function (t) {
                return t.messageExpirationTs != null;
              },
              unique: !1,
            },
            msgId: { columns: ["msgId"], unique: !1 },
            protocolMsgId: { columns: ["protocolMsgId"], unique: !0 },
            quoteExpirationTs: {
              columns: ["quoteExpirationTs"],
              predicate: function (t) {
                return t.quoteExpirationTs != null;
              },
              unique: !1,
            },
            quoteExternalId: {
              columns: ["quoteExternalId"],
              predicate: function (t) {
                return t.quoteExternalId != null;
              },
              unique: !1,
            },
            revokedExternalId: {
              columns: ["revokedExternalId"],
              predicate: function (t) {
                return t.revokedExternalId != null;
              },
              unique: !1,
            },
            threadJid: { columns: ["threadJid"], unique: !1 },
            unsendMsgContentDeleteTs: {
              columns: ["unsendMsgContentDeleteTs"],
              predicate: function (t) {
                return t.unsendMsgContentDeleteTs != null;
              },
              unique: !1,
            },
          },
          name: "e2ee_messages",
          primaryKey: ["rowId"],
        },
      ],
      Fe = [
        {
          autoIncrement: !1,
          indexes: {},
          name: "e2ee_messages_deduped",
          primaryKey: [],
          removed: !0,
        },
      ],
      Oe = new Map([
        [(e = o("MAWDbVersionList")).VERSION.V21, s],
        [e.VERSION.V22, u],
        [e.VERSION.V23, c],
        [e.VERSION.V24, d],
        [e.VERSION.V25, m],
        [e.VERSION.V30, p],
        [e.VERSION.V31, _],
        [e.VERSION.V32, f],
        [e.VERSION.V33, g],
        [e.VERSION.V34, h],
        [e.VERSION.V35, y],
        [e.VERSION.V36, C],
        [e.VERSION.V37, b],
        [e.VERSION.V38, v],
        [e.VERSION.V39, S],
        [e.VERSION.V40, R],
        [e.VERSION.V41, L],
        [e.VERSION.V42, E],
        [e.VERSION.V45, k],
        [e.VERSION.V48, I],
        [e.VERSION.V49, T],
        [e.VERSION.V50, D],
        [e.VERSION.V51, x],
        [e.VERSION.V52, $],
        [e.VERSION.V57, P],
        [e.VERSION.V59, N],
        [e.VERSION.V61, M],
        [e.VERSION.V62, w],
        [e.VERSION.V63, A],
        [e.VERSION.V64, F],
        [e.VERSION.V65, O],
        [e.VERSION.V67, B],
        [e.VERSION.V69, W],
        [e.VERSION.V70, q],
        [e.VERSION.V73, U],
        [e.VERSION.V74, V],
        [e.VERSION.V75, H],
        [e.VERSION.V77, G],
        [e.VERSION.V78, z],
        [e.VERSION.V79, j],
        [e.VERSION.V80, K],
        [e.VERSION.V81, Q],
        [e.VERSION.V83, X],
        [e.VERSION.V84, Y],
        [e.VERSION.V85, J],
        [e.VERSION.V86, Z],
        [e.VERSION.V88, ee],
        [e.VERSION.V89, te],
        [e.VERSION.V90, ne],
        [e.VERSION.V91, re],
        [e.VERSION.V92, oe],
        [e.VERSION.V93, ae],
        [e.VERSION.V94, ie],
        [e.VERSION.V95, le],
        [e.VERSION.V96, se],
        [e.VERSION.V97, ue],
        [e.VERSION.V98, ce],
        [e.VERSION.V99, de],
        [e.VERSION.V100, me],
        [e.VERSION.V102, pe],
        [e.VERSION.V103, _e],
        [e.VERSION.V104, fe],
        [e.VERSION.V105, ge],
        [e.VERSION.V106, he],
        [e.VERSION.V107, ye],
        [e.VERSION.V108, Ce],
        [e.VERSION.V109, be],
        [e.VERSION.V110, ve],
        [e.VERSION.V111, Se],
        [e.VERSION.V112, Re],
        [e.VERSION.V113, Le],
        [e.VERSION.V114, Ee],
        [e.VERSION.V115, ke],
        [e.VERSION.V116, Ie],
        [e.VERSION.V117, Te],
        [e.VERSION.V118, De],
        [e.VERSION.V119, xe],
        [e.VERSION.V120, $e],
        [e.VERSION.V121, Pe],
        [e.VERSION.V122, Ne],
        [e.VERSION.V123, Me],
        [e.VERSION.V124, we],
        [e.VERSION.V125, Ae],
        [e.VERSION.V126, Fe],
      ]),
      Be = [
        "messages",
        "unrenderedMessages",
        "groupInfo",
        "receipts",
        "pendingReceipts",
        "threads",
        "participants",
        "tasks",
        "personalSenderKeyStatuses",
        "appData",
        "appMeta",
        "chunk",
        "mediaBackup",
        "media",
        "reactions",
        "groupInvites",
        "dyiBatch",
        "syncActions",
        "missingKeys",
        "pendingMutations",
        "collectionVersions",
        "syncKeys",
        "deviceChangeAlerts",
        "xma",
        "editMsgHistory",
        "deletedMessages",
        "ebMsgRanges",
        "receiverFetchInfo",
        "poll",
      ];
    ((l.dbSchema = Oe), (l.TABLES_TO_ENCRYPT = Be));
  },
  98,
);
