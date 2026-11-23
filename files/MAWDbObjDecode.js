__d(
  "MAWDbObjDecode",
  [
    "FBLogger",
    "MAWArmadilloAppDataTableSchema.pb",
    "MAWArmadilloAppMetaTableSchema.pb",
    "MAWArmadilloCollectionVersionsTableSchema.pb",
    "MAWArmadilloDeletedMessagesTableSchema.pb",
    "MAWArmadilloDeviceChangeAlertsTableSchema.pb",
    "MAWArmadilloDyiBatchTableSchema.pb",
    "MAWArmadilloEBMsgRangesTableSchema.pb",
    "MAWArmadilloEditMsgHistoryTableSchema.pb",
    "MAWArmadilloGroupInfoTableSchema.pb",
    "MAWArmadilloGroupInvitesTableSchema.pb",
    "MAWArmadilloMediaTablesSchema.pb",
    "MAWArmadilloMessagesTableSchema.pb",
    "MAWArmadilloMissingKeysTableSchema.pb",
    "MAWArmadilloParticipantsTableSchema.pb",
    "MAWArmadilloPendingMutationsTableSchema.pb",
    "MAWArmadilloPersonalSenderKeyStatusTableSchema.pb",
    "MAWArmadilloPollTableSchema.pb",
    "MAWArmadilloReactionsTableSchema.pb",
    "MAWArmadilloReceiptTablesSchema.pb",
    "MAWArmadilloReceiverFetchInfoTableSchema.pb",
    "MAWArmadilloSyncActionsTableSchema.pb",
    "MAWArmadilloSyncKeysTableSchema.pb",
    "MAWArmadilloTasksTableSchema.pb",
    "MAWArmadilloThreadsTableSchema.pb",
    "MAWArmadilloUnrenderedMessagesTableSchema.pb",
    "MAWArmadilloXMATableSchema.pb",
    "MAWMsgType",
    "MAWODSProxy",
    "MAWXMACTAUtil",
    "WAOdsEnums",
    "WAServerSync.pb",
    "decodeProtobuf",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      appData: function (t) {
        return R(t);
      },
      appMeta: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloAppMetaTableSchema.pb").AppMetaTableSchemaProtoSpec,
          t,
        );
      },
      chunk: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloMediaTablesSchema.pb").ChunkTableSchemaProtoSpec,
          t,
        );
      },
      collectionVersions: function (t) {
        return $(t);
      },
      deletedMessages: function (t) {
        return _(t);
      },
      deviceChangeAlerts: function (t) {
        return u(t);
      },
      dualSendMedia: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      dyiBatch: function (t) {
        return k(t);
      },
      ebMessageRestoreTasks: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ebMsgRanges: function (t) {
        return I(t);
      },
      ebRestoreQueue: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ebUploadQueue: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      editMsgHistory: function (t) {
        return M(t);
      },
      encryptionMetaV3: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ephemeralSettings: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      existingUsers: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ftsBackloggedMessages: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ftsEncryptionMeta: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ftsIndexV3: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ftsPurgeBacklog: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      ftsPurgeThreadBacklog: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      groupInfo: function (t) {
        return h(t);
      },
      groupInvites: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloGroupInvitesTableSchema.pb")
            .GroupInvitesTableSchemaProtoSpec,
          t,
        );
      },
      historySyncQRCodeData: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      historySyncQRCodeSecretKey: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      igMessageAuxiliaryInfo: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      isDualSend: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      media: function (t) {
        return L(t);
      },
      mediaBackup: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloMediaTablesSchema.pb").MediaBackupSchemaProtoSpec,
          t,
        );
      },
      mediaKeys: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      messages: function (t) {
        return p(t);
      },
      missingKeys: function (t) {
        return D(t);
      },
      participants: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloParticipantsTableSchema.pb")
            .ParticipantsTableSchemaProtoSpec,
          t,
        );
      },
      pendingMessageStanzaQueue: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      pendingMutations: function (t) {
        return x(t);
      },
      pendingReceipts: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloReceiptTablesSchema.pb")
            .PendingReceiptsTableSchemaProtoSpec,
          t,
        );
      },
      pendingStanzas: function (t) {
        throw (
          r("vulture")("cUYKzaZpPQLW84NW5aALXUHIA9E="),
          r("FBLogger")("messenger_web").mustfixThrow(
            "unexpected table for decryption",
          )
        );
      },
      personalSenderKeyStatuses: function (t) {
        return S(t);
      },
      poll: function (t) {
        return A(t);
      },
      reactions: function (t) {
        return E(t);
      },
      receipts: function (t) {
        return b(t);
      },
      receiverFetchInfo: function (t) {
        return w(t);
      },
      sentBytesCache: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      staleQueue: function (t) {
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "unexpected table for decryption",
        );
      },
      syncActions: function (t) {
        return T(t);
      },
      syncKeys: function (t) {
        return P(t);
      },
      tasks: function (t) {
        return o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloTasksTableSchema.pb").TasksTableSchemaProtoSpec,
          t,
        );
      },
      threads: function (t) {
        return v(t);
      },
      unrenderedMessages: function (t) {
        return f(t);
      },
      xma: function (t) {
        return N(t);
      },
    };
    function s(t, n) {
      var o = null;
      if (Object.prototype.hasOwnProperty.call(e, n)) o = e[n](t);
      else
        throw r("FBLogger")("messenger_web").mustfixThrow(
          "not a valid table name",
        );
      return o;
    }
    function u(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloDeviceChangeAlertsTableSchema.pb")
          .DeviceChangeAlertsTableSchemaProtoSpec,
        e,
      );
      return {
        action: t.action,
        deviceJid: t.deviceJid,
        identity: t.identity,
        isArchived: t.isArchived,
        latitude: t.latitude,
        location: t.location,
        loggedOut: t.loggedOut,
        longitude: t.longitude,
        model: t.model,
        platform: t.platform,
        ts: t.ts,
      };
    }
    function c(e) {
      var t = e.quote,
        n;
      if (t != null) {
        if (t.content == null)
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "QuotedMsgContent missing upon decoding",
          );
        var o = t.content,
          a = o.author,
          i = o.expirationTs,
          l = o.externalId,
          s = o.mediaId,
          u = o.msgContent,
          c = o.msgId,
          d = o.plaintextHash,
          m = o.sourceId,
          p = o.specialTextSize,
          _ = o.ts,
          f = o.type,
          g = o.xmaMessageType;
        n = {
          content: babelHelpers.extends({}, t.content, {
            author: a,
            expirationTs: i,
            externalId: l,
            mediaId: s,
            msgContent: u,
            msgId: c,
            plaintextHash: d,
            sourceId: m,
            specialTextSize: p,
            ts: _,
            type: f,
            xmaMessageType: g,
          }),
          remoteJid: t.remoteJid,
        };
      }
      return n;
    }
    function d(e) {
      return e == null ? e : new Uint8Array(e);
    }
    function m(e) {
      return e == null || e.length === 0 ? new Set() : new Set(e);
    }
    function p(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloMessagesTableSchema.pb").MessagesTableSchemaProtoSpec,
          e,
        ),
        n = t.msgContent;
      if (t.type === o("MAWMsgType").MSG_TYPE.FUTUREPROOF) {
        if (n == null)
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "MsgContent missing upon decoding futureproof message",
          );
        n.subtype = n.subtype;
      }
      var a = c(t),
        i = g(t.reportingMeta);
      return babelHelpers.extends({}, t, {
        msgContent: n,
        quote: a,
        reportingMeta: i,
      });
    }
    function _(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloDeletedMessagesTableSchema.pb")
          .DeletedMessagesTableSchemaProtoSpec,
        e,
      );
      return babelHelpers.extends({}, t);
    }
    function f(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloUnrenderedMessagesTableSchema.pb")
            .UnrenderedMessagesTableSchemaProtoSpec,
          e,
        ),
        n = c(t),
        r = g(t.reportingMeta);
      return babelHelpers.extends({}, t, { quote: n, reportingMeta: r });
    }
    function g(e) {
      if (e != null)
        return {
          frankingKey:
            e.frankingKey != null
              ? new Uint8Array(e.frankingKey)
              : e.frankingKey,
          frankingTag:
            e.frankingTag != null
              ? new Uint8Array(e.frankingTag)
              : e.frankingTag,
          frankingVersion: e.frankingVersion,
          reportingContent: e.reportingContent,
          reportingTag:
            e.reportingTag != null
              ? new Uint8Array(e.reportingTag)
              : e.reportingTag,
        };
    }
    function h(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloGroupInfoTableSchema.pb").GroupInfoSchemaProtoSpec,
        e,
      );
      return {
        creationTs: t.creationTs,
        creator: t.creator,
        inviter: t.inviter,
        memberAddMode: t.memberAddMode,
        msgExpiration: t.msgExpiration,
        name: t.name,
        nameOwner: t.nameOwner,
        nameTs: t.nameTs,
        participantVersion: t.participantVersion,
      };
    }
    function y(e) {
      return e.length === 0
        ? null
        : new Map(
            e.map(function (e) {
              var t = e.deviceJid;
              if (t == null || e.serializedPubKey == null)
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Expected deviceJid or serializedPubKey are missing ",
                );
              var n = new Uint8Array(e.serializedPubKey),
                o = d(e.baseKey),
                a = { baseKey: o, pubKey: n };
              return [t, a];
            }),
          );
    }
    function C(e) {
      return e == null
        ? null
        : new Map(
            e.map(function (e) {
              var t;
              if (e.deviceJid == null)
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Expected deviceJID is missing ",
                );
              return [e.deviceJid, (t = e.count) != null ? t : 0];
            }),
          );
    }
    function b(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloReceiptTablesSchema.pb").ReceiptsTableSchemaProtoSpec,
          e,
        ),
        n = t.recipientDevices,
        r = m(n);
      return {
        permittedIdentitiesPerDevice: y(t.permittedIdentitiesPerDevice),
        recipientDevices: r,
        retryCountsPerDevice: C(t.retryCountsPerDevice),
      };
    }
    function v(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloThreadsTableSchema.pb").ThreadsTableSchemaProtoSpec,
        e,
      );
      return {
        archived: t.archived,
        cannotReplyReason: t.cannotReplyReason,
        didInsertDualThreadCutoverAdminMsg:
          t.didInsertDualThreadCutoverAdminMsg,
        folder: t.folder,
        isMigratedLocally: t.isMigratedLocally,
        lastReadMsg: t.lastReadMsg,
        lastReadMsgReceiptSent: t.lastReadMsgReceiptSent,
        muteCallsExpireTimeMs: t.muteCallsExpireTimeMs,
        muteExpireTimeMs: t.muteExpireTimeMs,
        newestMsg: t.newestMsg,
        newestMsgTs: t.newestMsgTs,
        oldestMsg: t.oldestMsg,
        optimisticThreadKey: t.optimisticThreadKey,
        snippetMsg: t.snippetMsg,
        snippetMsgTs: t.snippetMsgTs,
      };
    }
    function S(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloPersonalSenderKeyStatusTableSchema.pb")
            .PersonalSenderKeyStatusTableSchemaProtoSpec,
          e,
        ),
        n = t.hasSenderKey,
        r = m(n);
      return {
        hasSenderKey: r,
        rotateSenderKey: t.rotateSenderKey,
        senderKeyId: t.senderKeyId,
        senderKeyTs: t.senderKeyTs,
      };
    }
    function R(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloAppDataTableSchema.pb").AppDataTableSchemaProtoSpec,
        e,
      );
      return {
        ack: t.ack,
        contents: t.contents,
        permittedIdentitiesPerDevice: y(t.permittedIdentitiesPerDevice),
        recipientDevices: new Set(t.recipientDevices),
        sendPartial: t.sendPartial,
        ts: t.ts,
      };
    }
    function L(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloMediaTablesSchema.pb").MediaTableSchemaProtoSpec,
          e,
        ),
        n,
        a = t.mediaEntries;
      return (
        a == null
          ? (n = new Map())
          : (n = new Map(
              a.map(function (e) {
                if (e.msgId == null || e.mediaEntryData == null)
                  throw r("FBLogger")("messenger_web").mustfixThrow(
                    "Expected msgId or mediaEntryData are missing ",
                  );
                return [e.msgId, new Uint8Array(e.mediaEntryData)];
              }),
            )),
        {
          accessibilitySummaryText: t.accessibilitySummaryText,
          isVideoGif: t.isVideoGif,
          mediaEntries: n,
          mediaType: t.mediaType,
          plaintextHash: t.plaintextHash,
          size: t.size,
          ts: t.ts,
          validatedAudioInfo: t.validatedAudioInfo,
          validatedDocumentFileInfo: t.validatedDocumentFileInfo,
          validatedImageInfo: t.validatedImageInfo,
          validatedResult: t.validatedResult,
          validatedVideoInfo: t.validatedVideoInfo,
        }
      );
    }
    function E(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloReactionsTableSchema.pb").ReactionsTableSchemaProtoSpec,
        e,
      );
      return (
        t.ts != null &&
          o("MAWODSProxy").odsBumpEntityKey({
            entity: o("WAOdsEnums").Entity.MAW_MIGRATE_REACTION_TS_AS_INDEX,
            key: "reaction_ts_encrypted",
          }),
        babelHelpers.extends(
          {
            ack: t.ack,
            author: t.author,
            groupingKey: t.groupingKey,
            reaction: t.reaction,
            reactToAuthor: t.reactToAuthor,
            senderTimestampMs: t.senderTimestampMs,
          },
          t.ts != null ? { ts: t.ts } : {},
        )
      );
    }
    function k(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloDyiBatchTableSchema.pb").DyiBatchTableSchemaProtoSpec,
        e,
      );
      return {
        isThread: t.isThread,
        numMessages: t.numMessages,
        numMessagesRestored: t.numMessagesRestored,
        numThreadsRestored: t.numThreadsRestored,
        oldestTs: t.oldestTs,
        qplFlowDescriptor: t.qplFlowDescriptor,
        qplInstanceKeyE2E: t.qplInstanceKeyE2E,
        qplInstanceKeyForThread: t.qplInstanceKeyForThread,
        threadId: t.threadId,
      };
    }
    function I(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloEBMsgRangesTableSchema.pb")
          .EBMsgRangesTableSchemaProtoSpec,
        e,
      );
      return {
        creationTime: t.creationTime,
        maxMsgExternalId: t.maxMsgExternalId,
        maxMsgSortOrderMs: t.maxMsgSortOrderMs,
        minMsgExternalId: t.minMsgExternalId,
        minMsgSortOrderMs: t.minMsgSortOrderMs,
      };
    }
    function T(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloSyncActionsTableSchema.pb")
          .SyncActionsTableSchemaProtoSpec,
        e,
      );
      return {
        binarySyncData: t.binarySyncData,
        keyId: t.keyId,
        timestamp: t.timestamp,
        valueMac: t.valueMac,
        version: t.version,
      };
    }
    function D(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloMissingKeysTableSchema.pb")
            .MissingKeysTableSchemaProtoSpec,
          e,
        ),
        n;
      return (
        t.deviceResponses == null
          ? (n = new Map())
          : (n = new Map(
              t.deviceResponses.map(function (e) {
                if (e.deviceId == null)
                  throw r("FBLogger")("messenger_web").mustfixThrow(
                    "Expected deviceId is missing",
                  );
                return [e.deviceId, e.deviceResponse];
              }),
            )),
        { deviceResponses: n, keyId: t.keyId, timestamp: t.timestamp }
      );
    }
    function x(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloPendingMutationsTableSchema.pb")
            .PendingMutationsTableSchemaProtoSpec,
          e,
        ),
        n;
      switch (t.operation) {
        case o("MAWArmadilloPendingMutationsTableSchema.pb")
          .SYNCD_MUTATION_SYNCD_OPERATION.SET:
          n = o("WAServerSync.pb").SyncdMutation$SyncdOperation.SET;
          break;
        case o("MAWArmadilloPendingMutationsTableSchema.pb")
          .SYNCD_MUTATION_SYNCD_OPERATION.REMOVE:
          n = o("WAServerSync.pb").SyncdMutation$SyncdOperation.REMOVE;
          break;
        default:
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "operation missing when decoding PendingMutation",
          );
      }
      return {
        binarySyncAction: t.binarySyncAction,
        operation: n,
        timestamp: t.timestamp,
        version: t.version,
      };
    }
    function $(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloCollectionVersionsTableSchema.pb")
          .CollectionVersionsTableSchemaProtoSpec,
        e,
      );
      return {
        finiteFailureStartTime: t.finiteFailureStartTime,
        isCollectionInMacMismatchFatal: t.isCollectionInMacMismatchFatal,
        isCollectionLthashInconsistent: t.isCollectionLthashInconsistent,
        ltHash: t.ltHash,
        state: t.state,
        version: t.version,
      };
    }
    function P(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloSyncKeysTableSchema.pb").SyncKeysTableSchemaProtoSpec,
        e,
      );
      return {
        fingerprint: t.fingerprint,
        keyData: t.keyData,
        timestamp: t.timestamp,
      };
    }
    function N(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloXMATableSchema.pb").XMATableSchemaProtoSpec,
        e,
      );
      return {
        author: t.author,
        ctas: t.ctas.map(function (e) {
          return o("MAWXMACTAUtil").fromMAWCTAEncode(e);
        }),
        defaultCTA:
          t.defaultCTA == null
            ? t.defaultCTA
            : o("MAWXMACTAUtil").fromMAWCTAEncode(t.defaultCTA),
        defaultPreviewMediaPlaintextHash: t.defaultPreviewMediaPlaintextHash,
        faviconPlaintextHash: t.faviconPlaintextHash,
        headerMediaPlaintextHash: t.headerMediaPlaintextHash,
        headerTitle: t.headerTitle,
        isTombstoned: t.isTombstoned,
        maxSubtitleNumOfLines: t.maxSubtitleNumOfLines,
        maxTitleNumOfLines: t.maxTitleNumOfLines,
        msgId: t.msgId,
        overlayDescription: t.overlayDescription,
        overlayIconGlyph: t.overlayIconGlyph,
        overlayTitle: t.overlayTitle,
        previewMediaIds: t.previewMediaIds,
        subtitleText: t.subtitleText,
        targetId: t.targetId,
        targetType: t.targetType,
        targetUsername: t.targetUsername,
        threadJid: t.threadJid,
        titleText: t.titleText,
        xmaLayoutType: t.xmaLayoutType,
      };
    }
    function M(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloEditMsgHistoryTableSchema.pb")
          .EditMsgHistoryTableSchemaProtoSpec,
        e,
      );
      return {
        author: t.author,
        editExternalId: t.editExternalId,
        editTs: t.editTs,
        msgContent: t.msgContent,
        sendStatus: t.sendStatus,
        specialTextSize: t.specialTextSize,
      };
    }
    function w(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
        o("MAWArmadilloReceiverFetchInfoTableSchema.pb")
          .ReceiverFetchInfoTableSchemaProtoSpec,
        e,
      );
      return {
        accessibilitySummaryText: t.accessibilitySummaryText,
        mimetype: t.mimetype,
        previewHeight: t.previewHeight,
        previewUrl: t.previewUrl,
        previewUrlExpirationTimestampMs: t.previewUrlExpirationTimestampMs,
        previewWidth: t.previewWidth,
        type: t.type,
      };
    }
    function A(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("MAWArmadilloPollTableSchema.pb").PollTableSchemaProtoSpec,
          e,
        ),
        n = new Map(
          t.pollOptions
            .map(function (e) {
              var t = e.pollOptionHash;
              if (t == null || e.pollOption == null)
                throw r("FBLogger")("messenger_web").mustfixThrow(
                  "Expected pollOptionHash or pollOption is missing",
                );
              return [
                t,
                {
                  optionText: e.pollOption.optionText,
                  voteAuthors: new Set(e.pollOption.voteAuthors),
                },
              ];
            })
            .filter(Boolean),
        ),
        a = new Map(
          t.latestSenderTimestampsMs.map(function (e) {
            if (e.author == null || e.latestSenderTimestampMs == null)
              throw r("FBLogger")("messenger_web").mustfixThrow(
                "Expected author or latestSenderTimestampMs are missing",
              );
            return [e.author, e.latestSenderTimestampMs];
          }),
        );
      return {
        encKey: t.encKey,
        latestSenderTimestampsMs: a,
        pollAuthor: t.pollAuthor,
        pollOptions: n,
        pollParticipantCount: t.pollParticipantCount,
        pollState: t.pollState,
        selectableOptionsCount: t.selectableOptionsCount,
        title: t.title,
      };
    }
    l.decodeDbObj = s;
  },
  98,
);
