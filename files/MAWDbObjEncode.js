__d(
  "MAWDbObjEncode",
  [
    "FBLogger",
    "MAWArmadilloAppDataTableSchema.pb",
    "MAWArmadilloAppMetaTableSchema.pb",
    "MAWArmadilloDeletedMessagesTableSchema.pb",
    "MAWArmadilloDeviceChangeAlertsTableSchema.pb",
    "MAWArmadilloDyiBatchTableSchema.pb",
    "MAWArmadilloEBMsgRangesTableSchema.pb",
    "MAWArmadilloEditMsgHistoryTableSchema.pb",
    "MAWArmadilloGroupInfoTableSchema.pb",
    "MAWArmadilloGroupInvitesTableSchema.pb",
    "MAWArmadilloMediaTablesSchema.pb",
    "MAWArmadilloMessagesTableSchema.pb",
    "MAWArmadilloParticipantsTableSchema.pb",
    "MAWArmadilloPollTableSchema.pb",
    "MAWArmadilloReactionsTableSchema.pb",
    "MAWArmadilloReceiptTablesSchema.pb",
    "MAWArmadilloReceiverFetchInfoTableSchema.pb",
    "MAWArmadilloTasksTableSchema.pb",
    "MAWArmadilloThreadsTableSchema.pb",
    "MAWArmadilloUnrenderedMessagesTableSchema.pb",
    "MAWArmadilloXMATableSchema.pb",
    "MAWMsgType",
    "MAWXMACTAUtil",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ack",
        "altIndex",
        "collapsibleId",
        "externalId",
        "messageDeleteTs",
        "messageExpirationTs",
        "msgId",
        "pollStanzaId",
        "protocolMsgId",
        "quoteExpirationTs",
        "quoteExternalId",
        "revokedExternalId",
        "rowId",
        "serverTs",
        "sortOrderMs",
        "threadJid",
        "unsendMsgContentDeleteTs",
      ],
      s = ["author", "chat", "externalId", "rowId"],
      u = {
        appData: E,
        appMeta: k,
        chunk: I,
        deletedMessages: _,
        deviceChangeAlerts: c,
        dualSendMedia: d,
        dyiBatch: $,
        ebMessageRestoreTasks: d,
        ebMsgRanges: P,
        ebRestoreQueue: d,
        ebUploadQueue: d,
        editMsgHistory: M,
        encryptionMetaV3: d,
        ephemeralSettings: d,
        existingUsers: d,
        ftsBackloggedMessages: d,
        ftsEncryptionMeta: d,
        ftsIndexV3: d,
        ftsPurgeBacklog: d,
        ftsPurgeThreadBacklog: d,
        groupInfo: g,
        groupInvites: R,
        historySyncQRCodeData: d,
        historySyncQRCodeSecretKey: d,
        igMessageAuxiliaryInfo: d,
        isDualSend: d,
        media: D,
        mediaBackup: T,
        mediaKeys: d,
        messages: p,
        participants: S,
        pendingMessageStanzaQueue: d,
        pendingReceipts: b,
        pendingStanzas: d,
        personalSenderKeyStatuses: d,
        poll: A,
        reactions: x,
        receipts: C,
        receiverFetchInfo: w,
        sentBytesCache: d,
        staleQueue: d,
        tasks: L,
        threads: v,
        unrenderedMessages: f,
        xma: N,
      };
    function c(e) {
      var t = {
        action: e.action,
        deviceJid: e.deviceJid,
        identity: e.identity,
        isArchived: e.isArchived,
        latitude: e.latitude,
        location: e.location,
        loggedOut: e.loggedOut,
        longitude: e.longitude,
        model: e.model,
        platform: e.platform,
        ts: e.ts,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloDeviceChangeAlertsTableSchema.pb")
              .DeviceChangeAlertsTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function d(e) {
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "unexpected table for encryption",
      );
    }
    function m(e, t) {
      var n = null;
      if (Object.prototype.hasOwnProperty.call(u, t)) n = u[t](e);
      else
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "not a valid table name",
        );
      return n;
    }
    function p(t) {
      var n = t.ack,
        r = t.altIndex,
        a = t.collapsibleId,
        i = t.externalId,
        l = t.messageDeleteTs,
        s = t.messageExpirationTs,
        u = t.msgId,
        c = t.pollStanzaId,
        d = t.protocolMsgId,
        m = t.quoteExpirationTs,
        p = t.quoteExternalId,
        _ = t.revokedExternalId,
        f = t.rowId,
        g = t.serverTs,
        h = t.sortOrderMs,
        y = t.threadJid,
        C = t.unsendMsgContentDeleteTs,
        b = babelHelpers.objectWithoutPropertiesLoose(t, e),
        v = b,
        S;
      if (v.quote == null) S = v.quote;
      else {
        var R,
          L = {
            author: v.quote.content.author,
            expirationTs: v.quote.content.expirationTs,
            externalId: (R = v.quote) == null ? void 0 : R.content.externalId,
            mediaId: v.quote.content.mediaId,
            msgContent: v.quote.content.msgContent,
            msgId: v.quote.content.msgId,
            plaintextHash: v.quote.content.plaintextHash,
            sourceId: v.quote.content.sourceId,
            specialTextSize: v.quote.content.specialTextSize,
            ts: v.quote.content.ts,
            type: v.quote.content.type,
            xmaMessageType: v.quote.content.xmaMessageType,
          },
          E = { content: L, remoteJid: v.quote.remoteJid };
        S = E;
      }
      var k = v.msgContent;
      v.type === o("MAWMsgType").MSG_TYPE.FUTUREPROOF &&
        (k = {
          protobuf: v.msgContent.protobuf,
          subtype: v.msgContent.subtype,
        });
      var I = v.ravenEphemeralType,
        T = v.ravenEphemeralMediaState,
        D = I != null ? I : null,
        x = T != null ? T : null,
        $ = {
          applicationErrorCode: v.applicationErrorCode,
          author: v.author,
          editCount: v.editCount,
          ephemeralCounterStarted: v.ephemeralCounterStarted,
          ephemeralMsgDisappeared: v.ephemeralMsgDisappeared,
          ephemeralSetting: v.ephemeralSetting,
          forwardingScore: v.forwardingScore,
          groupId: v.groupId,
          groupIndex: v.groupIndex,
          groupSize: v.groupSize,
          hdType: v.hdType,
          isCollapsed: v.isCollapsed,
          isExpiredXmaMsg: v.isExpiredXmaMsg,
          isForwarded: v.isForwarded,
          mediaId: v.mediaId,
          msgContent: k,
          originalTs: v.originalTs,
          quote: S,
          ravenEphemeralMediaState: x,
          ravenEphemeralType: D,
          receiverFetchId: v.receiverFetchId,
          reportingMeta: v.reportingMeta,
          resendCount: v.resendCount,
          source: v.source,
          specialTextSize: v.specialTextSize,
          ts: v.ts,
          type: v.type,
          xmaMessageType: v.xmaMessageType,
        };
      return {
        encodedFields: $,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloMessagesTableSchema.pb")
              .MessagesTableSchemaProtoSpec,
            $,
          )
          .readByteArrayView(),
      };
    }
    function _(e) {
      var t = e.author,
        n = e.chat,
        r = e.externalId,
        a = e.rowId,
        i = babelHelpers.objectWithoutPropertiesLoose(e, s),
        l = { reason: String(i.reason) };
      return {
        encodedFields: l,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloDeletedMessagesTableSchema.pb")
              .DeletedMessagesTableSchemaProtoSpec,
            l,
          )
          .readByteArrayView(),
      };
    }
    function f(e) {
      var t;
      if (e.quote == null) t = e.quote;
      else {
        var n,
          r = {
            author: e.quote.content.author,
            expirationTs: e.quote.content.expirationTs,
            externalId: (n = e.quote) == null ? void 0 : n.content.externalId,
            mediaId: e.quote.content.mediaId,
            msgContent: e.quote.content.msgContent,
            msgId: e.quote.content.msgId,
            plaintextHash: e.quote.content.plaintextHash,
            sourceId: e.quote.content.sourceId,
            ts: e.quote.content.ts,
            type: e.quote.content.type,
            xmaMessageType: e.quote.content.xmaMessageType,
          },
          a = { content: r, remoteJid: e.quote.remoteJid };
        t = a;
      }
      var i = {
        ack: e.ack,
        author: e.author,
        ephemeralSetting: e.ephemeralSetting,
        groupName: e.groupName,
        invitedParticipantUserJid: e.invitedParticipantUserJid,
        mediaId: e.mediaId,
        msgContent: e.msgContent,
        quote: t,
        reportingMeta: e.reportingMeta,
        resendCount: e.resendCount,
        ts: e.ts,
        type: e.type,
        xmaMessageType: e.xmaMessageType,
      };
      return {
        encodedFields: i,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloUnrenderedMessagesTableSchema.pb")
              .UnrenderedMessagesTableSchemaProtoSpec,
            i,
          )
          .readByteArrayView(),
      };
    }
    function g(e) {
      var t = {
        creationTs: e.creationTs,
        creator: e.creator,
        inviter: e.inviter,
        memberAddMode: e.memberAddMode,
        msgExpiration: e.msgExpiration,
        name: e.name,
        nameOwner: e.nameOwner,
        nameTs: e.nameTs,
        participantVersion: e.participantVersion,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloGroupInfoTableSchema.pb").GroupInfoSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function h(e) {
      return e == null
        ? e
        : Array.from(e, function (e) {
            var t = e[0],
              n = e[1];
            return {
              baseKey: n.baseKey,
              deviceJid: t,
              serializedPubKey: n.pubKey,
            };
          });
    }
    function y(e) {
      return e == null
        ? null
        : Array.from(e, function (e) {
            var t = e[0],
              n = e[1];
            return { count: n, deviceJid: t };
          });
    }
    function C(e) {
      var t = Array.from(e.recipientDevices),
        n = {
          permittedIdentitiesPerDevice: h(e.permittedIdentitiesPerDevice),
          recipientDevices: t,
          retryCountsPerDevice: y(e.retryCountsPerDevice),
        };
      return {
        encodedFields: n,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloReceiptTablesSchema.pb")
              .ReceiptsTableSchemaProtoSpec,
            n,
          )
          .readByteArrayView(),
      };
    }
    function b(e) {
      var t = {
        author: e.author,
        deliveryReceipts: e.deliveryReceipts,
        externalId: e.externalId,
        readReceipts: e.readReceipts,
        thread: e.thread,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloReceiptTablesSchema.pb")
              .PendingReceiptsTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function v(e) {
      var t = {
        archived: e.archived,
        cannotReplyReason: e.cannotReplyReason,
        didInsertDualThreadCutoverAdminMsg:
          e.didInsertDualThreadCutoverAdminMsg,
        folder: e.folder,
        isMigratedLocally: e.isMigratedLocally,
        lastReadMsg: e.lastReadMsg,
        lastReadMsgReceiptSent: e.lastReadMsgReceiptSent,
        newestMsgTs: e.newestMsgTs,
        oldestMsg: e.oldestMsg,
        optimisticThreadKey: e.optimisticThreadKey,
        snippetMsg: e.snippetMsg,
        snippetMsgTs: e.snippetMsgTs,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloThreadsTableSchema.pb").ThreadsTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function S(e) {
      var t = {
        addressable: e.addressable,
        deliveredWatermarkTs: e.deliveredWatermarkTs,
        lastReadActionTs: e.lastReadActionTs,
        lastReadWatermarkTs: e.lastReadWatermarkTs,
        type: e.type,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloParticipantsTableSchema.pb")
              .ParticipantsTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function R(e) {
      var t = {
        caption: e.caption,
        inviteCode: e.inviteCode,
        inviteExpirationTs: e.inviteExpirationTs,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloGroupInvitesTableSchema.pb")
              .GroupInvitesTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function L(e) {
      var t = { scheduledTime: e.scheduledTime };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloTasksTableSchema.pb").TasksTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function E(e) {
      var t;
      switch (e.contents.type) {
        case "meta_sync": {
          var n = [];
          for (var a of e.contents.actions)
            a.chatAction
              ? n.push({ chatAction: a.chatAction })
              : a.messageAction && n.push({ messageAction: a.messageAction });
          t = { actions: n, type: "meta_sync" };
          break;
        }
        case "backups_secrets": {
          t = {
            encryptedBackupsSecrets: e.contents.encryptedBackupsSecrets,
            type: "backups_secrets",
          };
          break;
        }
        default:
          throw (
            e.contents.type,
            r("FBLogger")("messenger_web").mustfixThrow(
              "Unknown appdata type: " + e.contents.type,
            )
          );
      }
      var i = {
        ack: e.ack,
        contents: t,
        permittedIdentitiesPerDevice: h(e.permittedIdentitiesPerDevice),
        recipientDevices: Array.from(e.recipientDevices),
        sendPartial: e.sendPartial,
        ts: e.ts,
      };
      return {
        encodedFields: i,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloAppDataTableSchema.pb").AppDataTableSchemaProtoSpec,
            i,
          )
          .readByteArrayView(),
      };
    }
    function k(e) {
      var t = { value: e.value };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloAppMetaTableSchema.pb").AppMetaTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function I(e) {
      var t = {
        blobData: e.blobData,
        mimetype: e.mimetype,
        plaintextHash: e.plaintextHash,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloMediaTablesSchema.pb").ChunkTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function T(e) {
      var t = { fbid: e.fbid };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloMediaTablesSchema.pb").MediaBackupSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function D(e) {
      var t = Array.from(e.mediaEntries, function (e) {
          var t = e[0],
            n = e[1];
          return { mediaEntryData: n, msgId: t };
        }),
        n = {
          accessibilitySummaryText: e.accessibilitySummaryText,
          isVideoGif: e.isVideoGif,
          mediaEntries: t,
          mediaType: e.mediaType,
          plaintextHash: e.plaintextHash,
          size: e.size,
          ts: e.ts,
          validatedAudioInfo: e.validatedAudioInfo,
          validatedDocumentFileInfo: e.validatedDocumentFileInfo,
          validatedImageInfo: e.validatedImageInfo,
          validatedResult: e.validatedResult,
          validatedVideoInfo: e.validatedVideoInfo,
        };
      return {
        encodedFields: n,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloMediaTablesSchema.pb").MediaTableSchemaProtoSpec,
            n,
          )
          .readByteArrayView(),
      };
    }
    function x(e) {
      var t = {
        ack: e.ack,
        author: e.author,
        groupingKey: e.groupingKey,
        reaction: e.reaction,
        reactToAuthor: e.reactToAuthor,
        senderTimestampMs: e.senderTimestampMs,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloReactionsTableSchema.pb")
              .ReactionsTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function $(e) {
      var t = {
        isThread: e.isThread,
        numMessages: e.numMessages,
        numMessagesRestored: e.numMessagesRestored,
        numThreadsRestored: e.numThreadsRestored,
        oldestTs: e.oldestTs,
        qplFlowDescriptor: e.qplFlowDescriptor,
        qplInstanceKeyE2E: e.qplInstanceKeyE2E,
        qplInstanceKeyForThread: e.qplInstanceKeyForThread,
        threadId: e.threadId,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloDyiBatchTableSchema.pb")
              .DyiBatchTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function P(e) {
      var t = {
        creationTime: e.creationTime,
        maxMsgExternalId: e.maxMsgExternalId,
        maxMsgSortOrderMs: e.maxMsgSortOrderMs,
        minMsgExternalId: e.minMsgExternalId,
        minMsgSortOrderMs: e.minMsgSortOrderMs,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloEBMsgRangesTableSchema.pb")
              .EBMsgRangesTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function N(e) {
      var t =
          e.ctas == null
            ? []
            : e.ctas.map(function (e) {
                return o("MAWXMACTAUtil").toMAWCTAEncode(e);
              }),
        n = {
          author: e.author,
          ctas: t,
          defaultCTA:
            e.defaultCTA == null
              ? e.defaultCTA
              : o("MAWXMACTAUtil").toMAWCTAEncode(e.defaultCTA),
          defaultPreviewMediaPlaintextHash: e.defaultPreviewMediaPlaintextHash,
          faviconPlaintextHash: e.faviconPlaintextHash,
          headerMediaPlaintextHash: e.headerMediaPlaintextHash,
          headerTitle: e.headerTitle,
          isTombstoned: e.isTombstoned,
          maxSubtitleNumOfLines: e.maxSubtitleNumOfLines,
          maxTitleNumOfLines: e.maxTitleNumOfLines,
          msgId: e.msgId,
          overlayDescription: e.overlayDescription,
          overlayIconGlyph: e.overlayIconGlyph,
          overlayTitle: e.overlayTitle,
          previewMediaIds: e.previewMediaIds,
          subtitleText: e.subtitleText,
          targetId: e.targetId,
          targetType: e.targetType,
          targetUsername: e.targetUsername,
          threadJid: e.threadJid,
          titleText: e.titleText,
          xmaLayoutType: e.xmaLayoutType,
        };
      return {
        encodedFields: n,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloXMATableSchema.pb").XMATableSchemaProtoSpec,
            n,
          )
          .readByteArrayView(),
      };
    }
    function M(e) {
      var t = {
        author: e.author,
        editExternalId: e.editExternalId,
        editTs: e.editTs,
        msgContent: e.msgContent,
        sendStatus: e.sendStatus,
        specialTextSize: e.specialTextSize,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloEditMsgHistoryTableSchema.pb")
              .EditMsgHistoryTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function w(e) {
      var t = {
        accessibilitySummaryText: e.accessibilitySummaryText,
        mimetype: e.mimetype,
        previewHeight: e.previewHeight,
        previewUrl: e.previewUrl,
        previewUrlExpirationTimestampMs: e.previewUrlExpirationTimestampMs,
        previewWidth: e.previewWidth,
        type: e.type,
      };
      return {
        encodedFields: t,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloReceiverFetchInfoTableSchema.pb")
              .ReceiverFetchInfoTableSchemaProtoSpec,
            t,
          )
          .readByteArrayView(),
      };
    }
    function A(e) {
      var t = Array.from(e.pollOptions, function (e) {
          var t = e[0],
            n = e[1];
          return {
            pollOption: {
              optionText: n.optionText,
              voteAuthors: Array.from(n.voteAuthors),
            },
            pollOptionHash: t,
          };
        }),
        n = Array.from(e.latestSenderTimestampsMs, function (e) {
          var t = e[0],
            n = e[1];
          return { author: t, latestSenderTimestampMs: n };
        }),
        r = {
          encKey: e.encKey,
          latestSenderTimestampsMs: n,
          pollAuthor: e.pollAuthor,
          pollOptions: t,
          pollParticipantCount: e.pollParticipantCount,
          pollState: e.pollState,
          selectableOptionsCount: e.selectableOptionsCount,
          title: e.title,
        };
      return {
        encodedFields: r,
        proto: o("encodeProtobuf")
          .encodeProtobuf(
            o("MAWArmadilloPollTableSchema.pb").PollTableSchemaProtoSpec,
            r,
          )
          .readByteArrayView(),
      };
    }
    l.encodeDbObj = m;
  },
  98,
);
