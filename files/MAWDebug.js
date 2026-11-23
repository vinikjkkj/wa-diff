__d(
  "MAWDebug",
  [
    "EBConsoleUtils",
    "EBDBConsistencyApi",
    "EBDeps",
    "EBLS",
    "EBWorkerEBDBApi",
    "FBLogger",
    "MAWAddGroupParticipants",
    "MAWBackend",
    "MAWBridge",
    "MAWConfig",
    "MAWCreateGroupStep",
    "MAWDbDeviceChangeAlerts",
    "MAWDbObjDecode",
    "MAWDbObjEncode",
    "MAWDebugSendMultipleMsgs",
    "MAWDemoteGroupParticipants",
    "MAWExternalId",
    "MAWGroupSetMemberAddMode",
    "MAWHMACPlaintextHash",
    "MAWInMemoryGroupInfoStore",
    "MAWInMemoryThreadStore",
    "MAWKeychainNaClCrypto",
    "MAWLeaveGroups",
    "MAWLoggerUtils",
    "MAWPromoteGroupParticipants",
    "MAWRemoveGroupParticipants",
    "MAWReportUserSpam",
    "MAWRotateDTSG",
    "MAWSetGroupSubject",
    "MAWUnsafeCoerce",
    "MetaPayVaultInitialize",
    "MetaPayVaultLabyrinthDelete",
    "MetaPayVaultLabyrinthFetchAll",
    "MetaPayVaultLabyrinthSave",
    "MpsToBridgeMessageId",
    "MpsTypes",
    "OfflineThreadingId",
    "WAAPI",
    "WAAbPropsInit",
    "WADevicesState",
    "WAExceededStorageQuota",
    "WAGatherMediaInfo",
    "WAGetPlatformFromStanzaId",
    "WAGlobals",
    "WAGzip",
    "WAHandleFailureUtils",
    "WALogger",
    "WAProtocolQueue",
    "WAResultOrError",
    "WARotateSignedPreKey",
    "WARunStorageBenchmark",
    "WASignalDB",
    "WASignalOther",
    "WATimeUtils",
    "WebMps",
    "WebStorageEstimator",
    "WmiMediaService",
    "WmiMetadataAppSettingsWriter",
    "WmiMetadataDb",
    "WmiMetadataDeviceChangeAlertsWriter",
    "WormDbDebuggingUtils",
    "cr:19391",
    "emptyFunction",
    "gkx",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["s2sInstanceKey", "s2sUserFlowQPLEvent"],
      s;
    function u(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps").mps().batchLoadMessage(e)
        : t
            .runMps(
              {
                boundary: "batch_load_message",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.batchLoadMessage(n, e);
              },
            )
            .then(function (e) {
              return e.match({
                err: o("WAResultOrError").makeError,
                ok: o("WAResultOrError").makeResult,
              });
            });
    }
    function c(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps").mps().loadMessages(e)
        : t
            .runMps(
              {
                boundary: "load_messages",
                code: "read_failed",
                subject: e.debug.purpose,
              },
              function (n) {
                return t.loadMessages(n, e);
              },
            )
            .then(function (e) {
              return e.match({
                err: o("WAResultOrError").makeError,
                ok: o("WAResultOrError").makeResult,
              });
            });
    }
    function d(e) {
      var t = n("cr:19391");
      return t == null
        ? o("WebMps").mps().spamReportLoadMessages(e)
        : t
            .runMps(
              { boundary: "spam_report_load_messages", code: "read_failed" },
              function () {
                return t.spamReportLoadMessages(e);
              },
            )
            .then(function (e) {
              return e.getOrThrow();
            });
    }
    var m = {
      addBadProtocolQueueInstruction: function () {
        var e = { instruction: "bad", type: "instruction" };
        return o("WAProtocolQueue").protocolQueue().addAndCommit([e]);
      },
      addDeviceChangeAlerts: function (t) {
        return h(
          o(
            "WmiMetadataDeviceChangeAlertsWriter",
          ).addDeviceChangeAlertToMetadataDb(t),
        );
      },
      addGroupParticipants: function (t, n, r) {
        return o("MAWAddGroupParticipants").addGroupParticipantsImpl({
          group: t,
          instanceKey: r,
          users: n,
        });
      },
      benchmarkStorage: function (t, n, a, i) {
        (t === void 0 && (t = !1),
          n === void 0 && (n = 1),
          a === void 0 && (a = 50),
          i === void 0 && (i = 500),
          o("WARunStorageBenchmark").runStorageBenchmark(
            function (e) {
              return r("FBLogger")("messenger_web_devx").info(
                "[storage benchmark]: %s",
                e,
              );
            },
            t,
            n,
            a,
            i,
          ));
      },
      checkStorageQuota: function () {
        return o("WAExceededStorageQuota").checkStorageQuota();
      },
      createGroup: function (t, n, r) {
        return o("MAWCreateGroupStep").createGroupStep(
          r,
          t,
          n,
          { clientThreadKey: r, platform: "msgr" },
          o("MAWLoggerUtils").createInstanceKey(),
        );
      },
      createOrUpdateThread: function (t) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "createOrUpdateThread", {
            contactFbid: t,
            description: "MAWDebug",
            threadKey: o("OfflineThreadingId").createOfflineThreadingID(),
          });
      },
      decodeEAR: function (t, n) {
        return o("MAWDbObjDecode").decodeDbObj(t, n);
      },
      deflate: function (t) {
        var e = o("WAGzip").createDeflate();
        return (e.push(t, !0), e.result());
      },
      deleteLabyrinthVault: o("MetaPayVaultLabyrinthDelete")
        .deleteLabyrinthVault,
      demoteGroupParticipants: function (t, n) {
        return o("MAWDemoteGroupParticipants").demoteGroupParticipantsImpl({
          group: t,
          users: n,
        });
      },
      deregisterPhone: function () {
        r("promiseDone")(o("WAHandleFailureUtils").deregisterPhone());
      },
      encodeEAR: function (t, n) {
        return o("MAWDbObjEncode").encodeDbObj(t, n);
      },
      encryptEARTweetNaCl: function (t, n, r) {
        return o("MAWKeychainNaClCrypto").encryptTweetNaCl(t, n, r);
      },
      estimateStorage: async function () {
        var e = await o("WebStorageEstimator").estimateStorage();
        return e;
      },
      fetchAllLabyrinthVaultEntries: o("MetaPayVaultLabyrinthFetchAll")
        .fetchAllLabyrinthVaultEntries,
      fetchMessagesForSpamReport: async function (t, n) {
        var e = await d({ numMessages: n != null ? n : 30, threadId: t });
        return e;
      },
      forwardMsg: function (t, n) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "forwardMsg", {
            args: {
              args: {},
              chatJid: t,
              externalId: o("MAWExternalId").generateExternalId(),
              protocolMsgId: n,
            },
            qplEventType: r("qpl")._(25313175, "1551"),
            qplInstanceKey: o("MAWLoggerUtils").createInstanceKey(),
          });
      },
      fromUnixTime: function (t) {
        return o("WATimeUtils").toDate(t);
      },
      gatherMediaInfo: function () {
        r("promiseDone")(o("WAGatherMediaInfo").gatherMediaInfo());
      },
      generateAndUploadPreKeys: function () {
        return r("WAAPI").generateAndUploadPreKeys({ reason: "test" });
      },
      generateAndUploadPreKeysMultipleCalls: function () {
        return Promise.all([
          r("WAAPI").generateAndUploadPreKeys({ reason: "test" }),
          r("WAAPI").generateAndUploadPreKeys({ reason: "test" }),
          r("WAAPI").generateAndUploadPreKeys({ reason: "test" }),
        ]);
      },
      getAbProp: function (t) {
        return o("WAAbPropsInit").getAbProp(t);
      },
      getAbProps: function () {
        return o("WAAbPropsInit").getAbProps();
      },
      getAppMetaByKey: function (t) {
        return h(p(t));
      },
      getClockSkew: function () {
        return o("WATimeUtils").getClockSkew();
      },
      getConfig: function () {
        return Object.fromEntries(
          Object.entries(o("MAWConfig").getConfig()).map(function (e) {
            var t = e[0],
              n = e[1],
              r = n;
            try {
              r = n();
            } catch (e) {
              r = n;
            }
            return [t, r];
          }),
        );
      },
      getCurrentUserDeviceList: function () {
        return r("WAAPI").getCurrentUserDeviceList();
      },
      getDeviceChangeAlertsByOptionsLLA: function (t) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "getDeviceChangeAlertsByOptions", {
            options: t,
          });
      },
      getDevices: function (t, n) {
        return r("WAAPI").getDevices({
          ignoreDhash: n,
          reason: "debug",
          users: new Set(t),
        });
      },
      getDevicesState: function () {
        return o("WADevicesState").getDevicesState();
      },
      getEBDBClientState: function () {
        return o("EBWorkerEBDBApi").getSecureEBClientState();
      },
      getEBDeps: function () {
        return o("EBDeps").getDeps();
      },
      getEBEpochs: function () {
        return o("EBConsoleUtils").getAllEpochsSorted();
      },
      getEBSMConsistency: async function () {
        return o("EBDBConsistencyApi").checkRegistrationConsistency(
          (await o("EBLS").genLSClient()).db,
        );
      },
      getHmacKeyFromGlobals: function () {
        return o("WAGlobals").getHMACKey();
      },
      getKeyTransparencyVerificationStatus: function (t) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("kt", "keyVerificationStatus", { userJid: t });
      },
      getMediaByPlaintextHash: function (t) {
        return h(
          o("WmiMediaService").mediaService().getMessageReferenceForMediaId(t),
        );
      },
      getMessagesByMsgIds: function (t) {
        return h(f(t));
      },
      getNewDTSG: async function () {
        return (await o("MAWRotateDTSG").getNewDTSG()).token;
      },
      getPlatform: function (t) {
        return o("WAGetPlatformFromStanzaId").getPlatformFromStanzaId(t);
      },
      getReceiptByWAMsgId: function (t) {
        return h(g(t));
      },
      getThreadsByChatJids: function (t) {
        return h(
          Promise.resolve(
            o("MAWInMemoryThreadStore")
              .getNonTxReadonlyInMemoryThreadStore()
              .getAll(t),
          ),
        );
      },
      getUnArchivedDeviceChangeAlertsCount: function () {
        return h(_());
      },
      hmacPlaintextHash: function (t) {
        return o("MAWHMACPlaintextHash").genHMACPlaintextHash(t);
      },
      inflate: function (t) {
        return o("WAGzip").inflate(t);
      },
      initializeMetaPayVault: o("MetaPayVaultInitialize")
        .initializeMetaPayVault,
      leaveGroup: function (t) {
        return o("MAWLeaveGroups").leaveGroupImpl(t).then(r("emptyFunction"));
      },
      makeError: function (t) {
        throw r("FBLogger")("messenger_web_devx").mustfixThrow(t);
      },
      makeWAError: function (t) {
        o("WALogger").ERROR(
          s || (s = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          t,
        );
      },
      mpsLoadLatestMsg: function (t) {
        return c({
          debug: { purpose: "getLatestTimestampForDebug" },
          direction: "desc",
          from: [o("MpsTypes").toTimestamp(Number.MAX_SAFE_INTEGER), void 0],
          numMessages: 1,
          threadId: o("MpsTypes").toThreadId(t),
        });
      },
      notifyDeviceChange: function (t) {
        return r("WAAPI").notifyDeviceChange({ users: t });
      },
      overrideAbProp: function (t, n) {
        o("WAAbPropsInit").overrideAbProp(t, n);
      },
      promoteGroupParticipants: function (t, n) {
        return o("MAWPromoteGroupParticipants").promoteGroupParticipantsImpl({
          group: t,
          users: n,
        });
      },
      protocolQueue: function () {
        return o("WAProtocolQueue").protocolQueue();
      },
      readProtocolQueue: function () {
        return o("WAProtocolQueue").protocolQueue().read();
      },
      readWormStore: function (t) {
        return o("WASignalDB")
          .getDb()
          .runInTransaction(
            [t],
            "readonly",
            function (e) {
              return e.stores[t].readAll();
            },
            "Debug - read " + t,
            i.id + ":519",
          );
      },
      removeDevice: function (t, n) {
        return r("WAAPI").removeDevice({ deviceId: t, identity: n });
      },
      removeGroupParticipants: function (t, n) {
        return o("MAWRemoveGroupParticipants").removeGroupParticipantsImpl({
          group: t,
          users: n,
        });
      },
      reportUserSpam: function (t, n) {
        return o("MAWReportUserSpam").reportUserSpamImpl({
          chatJid: n,
          context: "fake debug context",
          frxParams: null,
          frxTags: ["harassment"],
          openMsgs: null,
          reportedMessageId: null,
          spamFlow: "frx",
          userJid: t,
        });
      },
      reregisterPhone: function () {
        return o("WAHandleFailureUtils").reregisterPhone();
      },
      rotateSignedPreKey: function () {
        return o("WARotateSignedPreKey").rotateSignedPreKey();
      },
      runKeyTransparencyVerification: function (t) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("kt", "runKeyVerification", { userJid: t });
      },
      saveLabyrinthVaultEntry: o("MetaPayVaultLabyrinthSave")
        .saveLabyrinthVaultEntry,
      sendEditMsg: function (t, n) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "sendEditMsg", {
            args: {
              editMsgContent: {
                content: t.editMsgContent.content,
                mentionedJids: [],
              },
              originalProtocolMsgId: t.originalProtocolMsgId,
            },
            chatJid: t.originalProtocolMsgId.chat,
            externalId: n,
            qplEventType: r("qpl")._(25313175, "1551"),
            qplInstanceKey: o("MAWLoggerUtils").createInstanceKey(),
          });
      },
      sendMessageTooAllExistingGroups: function () {
        var e = o("MAWInMemoryGroupInfoStore")
            .getCommittedInMemoryGroupInfoStore()
            .getAll(),
          t = [];
        for (var n of e)
          t.push(
            m.sendMsg(n.groupJid, {
              content:
                "message to " + n.groupJid + " at " + new Date().getTime(),
              s2sInstanceKey: o("MAWLoggerUtils").createInstanceKey(),
            }),
          );
        return Promise.resolve(t);
      },
      sendMsg: function (n, a) {
        var t = a.s2sInstanceKey,
          i = a.s2sUserFlowQPLEvent,
          l = babelHelpers.objectWithoutPropertiesLoose(a, e);
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "sendMsg", {
            args: l,
            chatJid: n,
            externalId: o("MAWExternalId").generateExternalId(),
            qplEventType: r("qpl")._(25313175, "1551"),
            qplInstanceKey: t,
          });
      },
      sendMultipleMsgs: o("MAWDebugSendMultipleMsgs").sendMultipleMsgs.execute,
      sendReaction: function (t, n, a, i) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "sendReactionMsg", {
            args: {
              groupingKey: "",
              reaction: i,
              reactToAuthor: a,
              reactToProtocolMsgId: n,
            },
            chatJid: t,
            externalId: n.externalId,
            qplEventType: r("qpl")._(25313175, "1551"),
            qplInstanceKey: o("MAWLoggerUtils").createInstanceKey(),
          });
      },
      setGroupSubject: function (t, n) {
        return o("MAWSetGroupSubject").setGroupSubjectImpl({
          group: t,
          subject: n,
        });
      },
      setMemberAddMode: function (t, n) {
        return o("MAWGroupSetMemberAddMode").setMemberAddModeImpl({
          groupJid: t,
          memberAddMode: n,
        });
      },
      startComms: function () {
        var e;
        (e = o("MAWBackend").getWaComms()) == null || e.startComms();
      },
      stopComms: function () {
        var e;
        (e = o("MAWBackend").getWaComms()) == null || e.stopComms();
      },
      syncAbProps: function (t) {
        var e = t !== !0;
        return r("WAAPI").syncAbProps({ sendHash: e });
      },
      triggerSecureStorageKeyChangeAlert: function () {
        var e = {
          action: o("MAWDbDeviceChangeAlerts").KEY_CHANGE,
          deviceJid: o("WAGlobals").getMyDeviceJid(),
          identity: o("MAWUnsafeCoerce").unsafeCoerce(
            o("WASignalOther").makeBytes(33),
          ),
          isArchived: !1,
          model: "secure_storage",
          platform: "Meta",
          ts: o("WATimeUtils").unixTime(),
        };
        return h(
          o(
            "WmiMetadataDeviceChangeAlertsWriter",
          ).addDeviceChangeAlertToMetadataDb(e),
        );
      },
      updateDeviceChangeAlertsLLA: function (t) {
        return o("MAWBridge")
          .getBridge()
          .sendAndReceive("backend", "updateDeviceChangeAlerts", { alert: t });
      },
      wormGetContact: function (t) {
        return o("WormDbDebuggingUtils").getContact(t);
      },
      wormGetContacts: function () {
        return o("WormDbDebuggingUtils").getContacts();
      },
      wormGetIdentities: function () {
        return o("WormDbDebuggingUtils").getIdentities();
      },
      wormGetIdentitiesForUser: function (t) {
        return o("WormDbDebuggingUtils").getIdentitiesForUser(t);
      },
      wormGetMetaRows: function () {
        return o("WormDbDebuggingUtils").getMetaRows();
      },
      wormGetPrekeyGenerations: function () {
        return o("WormDbDebuggingUtils").getPrekeyGenerations();
      },
      wormGetPrekeys: function () {
        return o("WormDbDebuggingUtils").getPrekeys();
      },
      wormGetSenderKeySessions: function () {
        return o("WormDbDebuggingUtils").getSenderKeySessions();
      },
      wormGetSenderKeySessionsForUser: function (t) {
        return o("WormDbDebuggingUtils").getSenderKeySessionsForUser(t);
      },
      wormGetSessions: function () {
        return o("WormDbDebuggingUtils").getSessions();
      },
      wormGetSessionsForUser: function (t) {
        return o("WormDbDebuggingUtils").getSessionsForUser(t);
      },
      wormGetSignedPrekeys: function () {
        return o("WormDbDebuggingUtils").getSignedPrekeys();
      },
    };
    function p(e) {
      var t = o("WmiMetadataAppSettingsWriter").getAppSettingsKeyFromAppMetaKey(
        e,
      );
      return t == null
        ? Promise.resolve(null)
        : o("WmiMetadataDb")
            .getMetadataDb()
            .runInTransaction(
              ["appSettings"],
              "readonly",
              async function (e) {
                var n = await e.stores.appSettings.get(t);
                return n == null
                  ? null
                  : o("WmiMetadataAppSettingsWriter").appSettingsToDbAppMeta(n);
              },
              "MAWDebug.getAppMetaByKey",
              i.id + ":730",
            );
    }
    function _() {
      return o("WmiMetadataDb")
        .getMetadataDb()
        .runInTransaction(
          ["deviceChangeAlerts"],
          "readonly",
          async function (e) {
            var t = await e.stores.deviceChangeAlerts.readAll({
              filter: function (t) {
                return t.isArchived === !1;
              },
            });
            return t.length;
          },
          "MAWDebug.getUnArchivedDeviceChangeAlertsCount",
          i.id + ":742",
        );
    }
    async function f(e) {
      var t = new Map();
      e.forEach(function (e) {
        var n = o("MpsToBridgeMessageId").bridgeMsgIdToMps(e),
          r = n.messageId,
          a = n.threadId,
          i = t.get(a);
        i == null ? t.set(a, [r]) : i.push(r);
      });
      var n = await Promise.all(
          Array.from(t.entries()).map(async function (e) {
            var t = e[0],
              n = e[1],
              r = await u({
                config: {
                  persistToReverb: "no-persist",
                  shouldFetchSupplementals: !0,
                  shouldFetchTags: !0,
                  strategy: "local-only",
                },
                debug: { purpose: "MAWDebug.getMessagesByMsgIds" },
                messageIds: n,
                threadId: t,
              });
            if (r.success === !1) throw r.error;
            var o = [];
            return (
              r.value.forEach(function (e) {
                e != null && o.push(e);
              }),
              o
            );
          }),
        ),
        r = [];
      return (
        n.forEach(function (e) {
          r.push.apply(r, e);
        }),
        r
      );
    }
    function g(e) {
      return o("WASignalDB")
        .getDb()
        .runInTransaction(
          ["receipts"],
          "readonly",
          function (t) {
            return t.stores.receipts.readIndexRange("waMsgId+deviceJid", {
              only: [e],
            });
          },
          "MAWDebug.getReceiptByWAMsgId",
          i.id + ":809",
        );
    }
    function h(e) {
      return e.then(function (e) {
        return e;
      });
    }
    if (r("gkx")("23903")) {
      var y = o("MAWUnsafeCoerce").unsafeCoerce(self);
      ((y.Debug = m), (y.WAAPI = r("WAAPI")));
    }
    l.MAWDebugFuncs = m;
  },
  98,
);
