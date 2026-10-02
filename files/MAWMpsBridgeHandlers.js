__d(
  "MAWMpsBridgeHandlers",
  [
    "Base64Utils",
    "IgnitionE2EEMpsCompareChecker",
    "MAWExternalId",
    "MAWJids",
    "MAWProtobufDeserializers",
    "MpsTypes",
    "WAArmadilloMiTransportAdminMessage.pb",
    "WABuildMpsPayload",
    "WAJids",
    "WAResultOrError",
    "WAStanzaUtils",
    "WATimeUtils",
    "WebMps",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = o("WABuildMpsPayload").buildMpsMessage(
              { miTransportAdminMessage: e },
              {
                externalId: o("WAStanzaUtils").toStanzaId(t.externalId),
                millisServerTs: o("WATimeUtils").castToMillisTime(
                  t.timestampMs,
                ),
                senderJid: t.senderJid,
                threadId: t.chatJid,
              },
            );
            (r === "TABIGNITION" &&
              o("IgnitionE2EEMpsCompareChecker").recordTabIgnitionSide(a),
              yield o("WebMps")
                .mps()
                .saveNewMessages(
                  [
                    {
                      directive: null,
                      insertionSource: o("MpsTypes").InsertionSource.Receive,
                      message: a,
                      writerTag: r,
                    },
                  ],
                  { source: n },
                ));
          },
        )),
        s.apply(this, arguments)
      );
    }
    var u = {
      mpsBatchLoadMessage: function (t) {
        return o("WebMps").mps().batchLoadMessage(t);
      },
      mpsBatchLoadMessages: function (t) {
        return o("WebMps").mps().batchLoadMessages(t);
      },
      mpsDebugDbDump: function () {
        return o("WebMps").mps().debugDbDump();
      },
      mpsGetMigrationStatus: function () {
        return { isMigrated: !0 };
      },
      mpsHandleGroupEphemeralSettingFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            u = o("WABuildMpsPayload").buildMpsDisappearingSettingChanged(
              o("WAJids").toGroupJid(n),
              s,
              a,
              o("WATimeUtils").castMilliSecondsToUnixTime(r),
              l,
            );
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: u,
                  },
                ],
                { source: "handle_group_ephemeral_setting_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleGroupMemberAddModeFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: s,
                  },
                ],
                { source: "handle_group_member_add_mode_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleGroupParticipantsAddFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: s,
                  },
                ],
                { source: "handle_group_participants_add_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleGroupParticipantsDemoteFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: s,
                  },
                ],
                { source: "handle_group_participants_demote_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleGroupParticipantsPromoteFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: s,
                  },
                ],
                { source: "handle_group_participants_promote_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleGroupParticipantsRemoveFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: s,
                  },
                ],
                { source: "handle_group_participants_remove_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleGroupSetSubjectFromMI: (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupUpdateDedupeKey,
            n = e.subject,
            r = e.subjectChangerFbid,
            a = e.threadFbid,
            i = e.timestamp;
          if (n == null) return o("WAResultOrError").makeResult();
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
          return (
            yield o("WebMps")
              .mps()
              .saveNewMessages(
                [
                  {
                    directive: null,
                    insertionSource: o("MpsTypes").InsertionSource.Receive,
                    message: s,
                  },
                ],
                { source: "handle_group_set_subject_from_mi" },
              ),
            o("WAResultOrError").makeResult()
          );
        });
        function t(t) {
          return e.apply(this, arguments);
        }
        return t;
      })(),
      mpsHandleLsAdminMessage: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.actorFbid,
            r = t.chatJid,
            a = t.externalId,
            i = t.protobuf,
            l = t.timestampMs,
            s = t.writerTag;
          return (
            yield e(
              { payload: i, version: 3 },
              {
                chatJid: r,
                externalId: a,
                senderJid: o("MAWJids").toUserJid(n),
                timestampMs: l,
              },
              "handle_ls_admin_message",
              s,
            ),
            o("WAResultOrError").makeResult()
          );
        });
        function r(e) {
          return t.apply(this, arguments);
        }
        return r;
      })(),
      mpsHandleUnencryptedAdminMessageFromMI: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r,
            a,
            i = t.backupMessageProtoB64,
            l = t.chatJid,
            s = t.timestampMs,
            u = o("MAWProtobufDeserializers").DeserializedBackupMessage.create(
              o("Base64Utils").toArrayBuffer(i),
            ).proto,
            c = (n = u.miTransportAdminMessage) == null ? void 0 : n.payload,
            d = (r = u.metadata) == null ? void 0 : r.senderId,
            m = (a = u.metadata) == null ? void 0 : a.messageId;
          return (
            c == null ||
              d == null ||
              m == null ||
              (yield e(
                { payload: c, version: 3 },
                {
                  chatJid: l,
                  externalId: m,
                  senderJid: o("WAJids").toMsgrUserJid(d),
                  timestampMs: s,
                },
                "handle_unencrypted_admin_message_from_mi",
                "TABIGNITION",
              )),
            o("WAResultOrError").makeResult()
          );
        });
        function r(e) {
          return t.apply(this, arguments);
        }
        return r;
      })(),
      mpsLoadMessage: function (t) {
        return o("WebMps").mps().loadMessage(t);
      },
      mpsLoadMessages: function (t) {
        return o("WebMps").mps().loadMessages(t);
      },
      mpsLoadSnippet: function (t) {
        return o("WebMps").mps().loadSnippet(t);
      },
    };
    l.mpsBridgeHandlers = u;
  },
  98,
);
