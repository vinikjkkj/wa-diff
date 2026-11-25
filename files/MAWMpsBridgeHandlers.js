__d(
  "MAWMpsBridgeHandlers",
  [
    "Base64Utils",
    "IgnitionE2EEMpsCompareChecker",
    "MAWBridgeParticipants",
    "MAWExternalId",
    "MAWInMemoryParticipantStore",
    "MAWJids",
    "MAWP2pPaymentCardSaveLogger",
    "MAWP2pPaymentMessage",
    "MAWProtobufDeserializers",
    "MpsErrors",
    "MpsReadResult",
    "MpsTypes",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WABuildMpsPayload",
    "WAGlobals",
    "WAJids",
    "WAStanzaUtils",
    "WATimeUtils",
    "WebMps",
    "WmiReportIfFails",
    "WmiWireRoute",
    "cr:19391",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t, n) {
      return (await e.runMps(t, n)).getOrThrow();
    }
    function s(e, t) {
      return { boundary: e, code: "read_failed", subject: t };
    }
    async function u(t, r) {
      var a = n("cr:19391");
      if (a == null) return o("WebMps").mps().saveNewMessage(t, r);
      await e(
        a,
        { boundary: "save", code: "write_failed", subject: r.source },
        function (e) {
          return a.saveMessage(e, t, "admin", r);
        },
      );
    }
    async function c(e, t, n, r) {
      var a = o("WABuildMpsPayload").buildMpsMessage(
        { miTransportAdminMessage: e },
        {
          externalId: o("WAStanzaUtils").toStanzaId(t.externalId),
          millisServerTs: o("WATimeUtils").castToMillisTime(t.timestampMs),
          senderJid: t.senderJid,
          threadId: t.chatJid,
        },
      );
      (r === "TABIGNITION" &&
        o("IgnitionE2EEMpsCompareChecker").recordTabIgnitionSide(a),
        await u(
          {
            insertionSource: o("MpsTypes").InsertionSource.Receive,
            message: a,
            writerTag: r,
          },
          { source: n },
        ));
    }
    function d(e, t, n) {
      return function (r) {
        return o("WmiReportIfFails").wmiReportIfFails(
          function () {
            return t(r);
          },
          function (e, t) {
            return o("MpsErrors").MpsErrors.classify(e, t, "write_failed");
          },
          "bridge/" + e,
          n,
        );
      };
    }
    var m = {
      mpsApplyGroupParticipantRolesFromSnapshot: function (t) {
        var e = t.chatJid,
          n = t.demotedIds,
          r = t.participants,
          a = t.promotedAdmins;
        o("MAWInMemoryParticipantStore").hydrateParticipantsStoreFromSnapshot(
          e,
          r,
        );
        var i = new Set(
            r.map(function (e) {
              return o("WAJids").extractUserId(e.userJid);
            }),
          ),
          l = a
            .filter(function (e) {
              var t = e.fbid;
              return i.has(t);
            })
            .flatMap(function (t) {
              var n = t.fbid,
                r = t.type;
              return o(
                "MAWInMemoryParticipantStore",
              ).updateInMemoryParticipantTypes(
                e,
                [o("WAJids").toMsgrUserJid(n)],
                r,
              );
            });
        return (
          l.push.apply(
            l,
            o("MAWInMemoryParticipantStore").updateInMemoryParticipantTypes(
              e,
              n
                .filter(function (e) {
                  return i.has(e);
                })
                .map(function (e) {
                  return o("WAJids").toMsgrUserJid(e);
                }),
              "participant",
            ),
          ),
          Promise.resolve(
            o("MAWBridgeParticipants").createBridgeParticipants(l),
          )
        );
      },
      mpsBatchLoadMessage: function (r) {
        return o("WmiWireRoute").wmiWireRoute(
          o("MpsErrors").MpsErrors,
          "mpsBatchLoadMessage",
          r,
          function (t) {
            var r = n("cr:19391");
            return r == null
              ? o("WebMps")
                  .mps()
                  .batchLoadMessage(t)
                  .then(o("MpsReadResult").unwrapReadResult)
              : e(r, s("batch_load_message", t.debug.purpose), function (e) {
                  return r.batchLoadMessage(e, t);
                });
          },
          "read_failed",
        );
      },
      mpsBatchLoadMessages: function (r) {
        return o("WmiWireRoute").wmiWireRoute(
          o("MpsErrors").MpsErrors,
          "mpsBatchLoadMessages",
          r,
          function (t) {
            var r = n("cr:19391");
            return r == null
              ? o("WebMps")
                  .mps()
                  .batchLoadMessages(t)
                  .then(o("MpsReadResult").unwrapReadResult)
              : e(r, s("batch_load_messages", t.debug.purpose), function (e) {
                  return r.batchLoadMessages(e, t);
                });
          },
          "read_failed",
        );
      },
      mpsDebugDbDump: function () {
        var t = n("cr:19391");
        return t == null
          ? o("WebMps").mps().debugDbDump()
          : e(
              t,
              { boundary: "debug_db_dump", code: "read_failed" },
              function (e) {
                return e.debug();
              },
            );
      },
      mpsGetMigrationStatus: function () {
        return { isMigrated: !0 };
      },
      mpsHandleGroupEphemeralSettingFromMI: d(
        "mpsHandleGroupEphemeralSettingFromMI",
        async function (e) {
          var t = e.groupUpdateDedupeKey,
            n = e.threadFbid,
            r = e.timestamp,
            a = e.ttlSeconds,
            i = e.updatedByFbid,
            l =
              t != null
                ? o("WAStanzaUtils").toStanzaId(t)
                : o("MAWExternalId").generateExternalId(),
            s =
              i != null
                ? o("WAJids").toMsgrUserJid(i)
                : o("WAJids").toMsgrUserJid("0"),
            c = o("WABuildMpsPayload").buildMpsDisappearingSettingChanged(
              o("WAJids").toGroupJid(n),
              s,
              a,
              o("WATimeUtils").castMilliSecondsToUnixTime(r),
              l,
            );
          await u(
            {
              insertionSource: o("MpsTypes").InsertionSource.Receive,
              message: c,
            },
            { source: "handle_group_ephemeral_setting_from_mi" },
          );
        },
      ),
      mpsHandleGroupMemberAddModeFromMI: d(
        "mpsHandleGroupMemberAddModeFromMI",
        async function (e) {
          var t = e.groupUpdateDedupeKey,
            n = e.memberAddMode,
            r = e.setterFbid,
            a = e.threadFbid,
            i =
              t != null
                ? o("WAStanzaUtils").toStanzaId(t)
                : o("MAWExternalId").generateExternalId(),
            l =
              n === "all_member_add"
                ? o("WAArmadilloMiTransportAdminMessage.pb")
                    .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
                    .ALL_MEMBERS
                : o("WAArmadilloMiTransportAdminMessage.pb")
                    .MiTransportAdminMessage$GroupMembershipAddModeChanged$Mode
                    .ADMINS_ONLY,
            s = o("WABuildMpsPayload").buildMpsGroupMemberAddType(
              o("WAJids").toGroupJid(a),
              o("WAJids").toMsgrUserJid(r),
              l,
              o("WATimeUtils").unixTime(),
              i,
            );
          await u(
            {
              insertionSource: o("MpsTypes").InsertionSource.Receive,
              message: s,
            },
            { source: "handle_group_member_add_mode_from_mi" },
          );
        },
      ),
      mpsHandleGroupParticipantsAddFromMI: d(
        "mpsHandleGroupParticipantsAddFromMI",
        async function (e) {
          var t = e.adderFbid,
            n = e.groupUpdateDedupeKey,
            r = e.participantFbids,
            a = e.threadFbid,
            i = e.timestamp,
            l =
              n != null
                ? o("WAStanzaUtils").toStanzaId(n)
                : o("MAWExternalId").generateExternalId(),
            s = o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
              o("WAJids").toGroupJid(a),
              o("WAJids").toMsgrUserJid(t),
              r.map(function (e) {
                return o("WAJids").toMsgrUserJid(e);
              }),
              o("WAArmadilloMiTransportAdminMessage.pb")
                .MiTransportAdminMessage$GroupParticipantChanged$Action.ADDED,
              o("WATimeUtils").castMilliSecondsToUnixTime(i),
              l,
            );
          await u(
            {
              insertionSource: o("MpsTypes").InsertionSource.Receive,
              message: s,
            },
            { source: "handle_group_participants_add_from_mi" },
          );
        },
      ),
      mpsHandleGroupParticipantsDemoteFromMI: d(
        "mpsHandleGroupParticipantsDemoteFromMI",
        async function (e) {
          var t = e.demotorFbid,
            n = e.groupUpdateDedupeKey,
            r = e.participantFbids,
            a = e.threadFbid,
            i = e.timestamp,
            l =
              n != null
                ? o("WAStanzaUtils").toStanzaId(n)
                : o("MAWExternalId").generateExternalId(),
            s = o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
              o("WAJids").toGroupJid(a),
              o("WAJids").toMsgrUserJid(t),
              r.map(function (e) {
                return o("WAJids").toMsgrUserJid(e);
              }),
              o("WAArmadilloMiTransportAdminMessage.pb")
                .MiTransportAdminMessage$GroupAdminChanged$Action.REMOVED,
              o("WATimeUtils").castMilliSecondsToUnixTime(i),
              l,
            );
          await u(
            {
              insertionSource: o("MpsTypes").InsertionSource.Receive,
              message: s,
            },
            { source: "handle_group_participants_demote_from_mi" },
          );
        },
      ),
      mpsHandleGroupParticipantsPromoteFromMI: d(
        "mpsHandleGroupParticipantsPromoteFromMI",
        async function (e) {
          var t = e.groupUpdateDedupeKey,
            n = e.participantFbids,
            r = e.promoterFbid,
            a = e.threadFbid,
            i = e.timestamp,
            l =
              t != null
                ? o("WAStanzaUtils").toStanzaId(t)
                : o("MAWExternalId").generateExternalId(),
            s = o("WABuildMpsPayload").buildMpsGroupAdminChangedMsg(
              o("WAJids").toGroupJid(a),
              o("WAJids").toMsgrUserJid(r),
              n.map(function (e) {
                return o("WAJids").toMsgrUserJid(e);
              }),
              o("WAArmadilloMiTransportAdminMessage.pb")
                .MiTransportAdminMessage$GroupAdminChanged$Action.ADDED,
              o("WATimeUtils").castMilliSecondsToUnixTime(i),
              l,
            );
          await u(
            {
              insertionSource: o("MpsTypes").InsertionSource.Receive,
              message: s,
            },
            { source: "handle_group_participants_promote_from_mi" },
          );
        },
      ),
      mpsHandleGroupParticipantsRemoveFromMI: d(
        "mpsHandleGroupParticipantsRemoveFromMI",
        async function (e) {
          var t = e.groupUpdateDedupeKey,
            n = e.participantFbids,
            r = e.removerFbid,
            a = e.threadFbid,
            i = e.timestamp,
            l =
              t != null
                ? o("WAStanzaUtils").toStanzaId(t)
                : o("MAWExternalId").generateExternalId(),
            s = o("WABuildMpsPayload").buildMpsGroupParticipantsChanged(
              o("WAJids").toGroupJid(a),
              o("WAJids").toMsgrUserJid(r),
              n.map(function (e) {
                return o("WAJids").toMsgrUserJid(e);
              }),
              o("WAArmadilloMiTransportAdminMessage.pb")
                .MiTransportAdminMessage$GroupParticipantChanged$Action.REMOVED,
              o("WATimeUtils").castMilliSecondsToUnixTime(i),
              l,
            );
          await u(
            {
              insertionSource: o("MpsTypes").InsertionSource.Receive,
              message: s,
            },
            { source: "handle_group_participants_remove_from_mi" },
          );
        },
      ),
      mpsHandleGroupSetSubjectFromMI: d(
        "mpsHandleGroupSetSubjectFromMI",
        async function (e) {
          var t = e.groupUpdateDedupeKey,
            n = e.subject,
            r = e.subjectChangerFbid,
            a = e.threadFbid,
            i = e.timestamp;
          if (n != null) {
            var l =
                t != null
                  ? o("WAStanzaUtils").toStanzaId(t)
                  : o("MAWExternalId").generateExternalId(),
              s = o("WABuildMpsPayload").buildMpsGroupNameChangedMsg(
                o("WAJids").toGroupJid(a),
                o("WAJids").toMsgrUserJid(r),
                n,
                o("WATimeUtils").castMilliSecondsToUnixTime(i),
                l,
              );
            await u(
              {
                insertionSource: o("MpsTypes").InsertionSource.Receive,
                message: s,
              },
              { source: "handle_group_set_subject_from_mi" },
            );
          }
        },
      ),
      mpsHandleLsAdminMessage: d("mpsHandleLsAdminMessage", async function (e) {
        var t = e.actorFbid,
          n = e.chatJid,
          r = e.externalId,
          a = e.protobuf,
          i = e.timestampMs,
          l = e.writerTag;
        await c(
          { payload: a, version: 3 },
          {
            chatJid: n,
            externalId: r,
            senderJid: o("MAWJids").toUserJid(t),
            timestampMs: i,
          },
          "handle_ls_admin_message",
          l,
        );
      }),
      mpsHandleP2pPaymentFromMI: d(
        "mpsHandleP2pPaymentFromMI",
        function (e) {
          return o("MAWP2pPaymentCardSaveLogger").logP2pPaymentCardSave(
            e.initiatingUserWalletType,
            function () {
              var t = o("WAJids").extractUserId(o("WAGlobals").getMyUserJid()),
                n = o("MAWP2pPaymentMessage").buildP2pPaymentMessage(e, t);
              if (n == null)
                throw o("MpsErrors").MpsErrors.error(
                  "write_failed",
                  "Dropped a payment card that could not be built: wallet %s, type %s, has offline threading id %s",
                  e.initiatingUserWalletType,
                  e.transactionType,
                  String(e.offlineThreadingId !== ""),
                );
              return { isSelfSend: e.initiatingUserFbid === t, message: n };
            },
            function (e) {
              var t = e.isSelfSend,
                n = e.message;
              return (
                o("IgnitionE2EEMpsCompareChecker").recordP2pPaymentCardSide(
                  n,
                  t,
                ),
                u(
                  {
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    isAlreadyUploadedToEB: !0,
                    message: n,
                  },
                  {
                    loggerProject: "p2p_payment",
                    source: "handle_p2p_payment_from_mi",
                  },
                )
              );
            },
          );
        },
        { loggerProject: "p2p_payment" },
      ),
      mpsHandleUnencryptedAdminMessageFromMI: d(
        "mpsHandleUnencryptedAdminMessageFromMI",
        async function (e) {
          var t,
            n,
            r,
            a = e.backupMessageProtoB64,
            i = e.chatJid,
            l = e.timestampMs,
            s = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
              o("Base64Utils").toArrayBuffer(a),
            ).proto,
            u = (t = s.miTransportAdminMessage) == null ? void 0 : t.payload,
            d = (n = s.metadata) == null ? void 0 : n.senderId,
            m = (r = s.metadata) == null ? void 0 : r.messageId;
          u == null ||
            d == null ||
            m == null ||
            (await c(
              { payload: u, version: 3 },
              {
                chatJid: i,
                externalId: m,
                senderJid: o("WAJids").toMsgrUserJid(d),
                timestampMs: l,
              },
              "handle_unencrypted_admin_message_from_mi",
              "TABIGNITION",
            ));
        },
      ),
      mpsLoadMessage: function (r) {
        return o("WmiWireRoute").wmiWireRoute(
          o("MpsErrors").MpsErrors,
          "mpsLoadMessage",
          r,
          function (t) {
            var r = n("cr:19391");
            return r == null
              ? o("WebMps")
                  .mps()
                  .loadMessage(t)
                  .then(o("MpsReadResult").unwrapReadResult)
              : e(r, s("load_message", t.debug.purpose), function (e) {
                  return r.loadMessage(e, t);
                });
          },
          "read_failed",
        );
      },
      mpsLoadMessages: function (r) {
        return o("WmiWireRoute").wmiWireRoute(
          o("MpsErrors").MpsErrors,
          "mpsLoadMessages",
          r,
          function (t) {
            var r = n("cr:19391");
            return r == null
              ? o("WebMps")
                  .mps()
                  .loadMessages(t)
                  .then(o("MpsReadResult").unwrapReadResult)
              : e(r, s("load_messages", t.debug.purpose), function (e) {
                  return r.loadMessages(e, t);
                });
          },
          "read_failed",
        );
      },
      mpsLoadSnippet: function (r) {
        return o("WmiWireRoute").wmiWireRoute(
          o("MpsErrors").MpsErrors,
          "mpsLoadSnippet",
          r,
          function (t) {
            var r = n("cr:19391");
            return r == null
              ? o("WebMps")
                  .mps()
                  .loadSnippet(t)
                  .then(o("MpsReadResult").unwrapReadResult)
              : e(r, s("load_snippet", t.debug.purpose), function (e) {
                  return e.loadSnippet(t);
                });
          },
          "read_failed",
        );
      },
    };
    l.mpsBridgeHandlers = m;
  },
  98,
);
