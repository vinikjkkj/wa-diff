__d(
  "WAWebHistorySyncNotificationUtils",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebDBGroupParticipant",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEphemeralityUtils",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantModel",
    "WAWebGroupParticipantsJob",
    "WAWebHistorySyncLogUtils",
    "WAWebLeaveReasonType",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = n("$InternalEnum").Mirrored([
        "NewRecentSyncNotification",
        "NewOnDemandSyncNotification",
        "LastProcessedNotification",
        "InitialSyncComplete",
        "BackendStart",
        "HistorySyncStatusCheck",
        "ManualRestart",
      ]);
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.pastParticipants.map(function (e) {
            return {
              groupId: r("nullthrows")(e.groupJid),
              pastParticipants: e.pastParticipants.map(function (e) {
                return {
                  id: o("WAWebWidFactory").createWid(
                    r("nullthrows")(e.userJid),
                  ),
                  leaveReason:
                    e.leaveReason ===
                    o("WAWebProtobufsHistorySync.pb")
                      .PastParticipant$LeaveReason.LEFT
                      ? o("WAWebLeaveReasonType").LeaveReason.Left
                      : o("WAWebLeaveReasonType").LeaveReason.Removed,
                  leaveTs: o("WALongInt").numberOrThrowIfTooLarge(
                    r("nullthrows")(e.leaveTs),
                  ),
                };
              }),
            };
          });
          (yield o("WAWebDBGroupParticipant").addPastParticipants(n),
            n.forEach(function (e) {
              var t = o("WAWebChatCollection").ChatCollection.gadd(
                  o("WAWebWidFactory").createWid(e.groupId),
                ),
                n = t.groupMetadata;
              n == null ||
                n.pastParticipants.add(e.pastParticipants, { merge: !0 });
            }),
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[history sync] Past Participants completed, ",
                  "",
                ])),
              o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(t),
            ));
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSignalProtocolStore")
            .getPersistSignalProtocolStore()
            .loadIdentityKey(e);
          n != null &&
            n !== t &&
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] get changed self identity key from history sync,\n     existing length: ",
                    ", new length: ",
                    "",
                  ])),
                n.length,
                t.length,
              )
              .tags("history-sync")
              .sendLogs("self-identity-change-from-history-sync");
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n;
          if (t.isGroup()) {
            var a = (n = e.disappearingMode) == null ? void 0 : n.trigger,
              i;
            if (a != null) {
              var l = o(
                "WAWebEphemeralityUtils",
              ).getDisappearingModeTriggerFromProtobuf(a);
              l != null && (i = l);
            }
            if (
              e.suspended != null ||
              e.terminated != null ||
              e.createdBy != null ||
              e.createdAt != null ||
              e.description != null ||
              e.support != null ||
              e.isParentGroup != null ||
              e.isDefaultSubgroup != null ||
              e.parentGroupId != null ||
              e.disappearingMode != null ||
              e.appealStatus != null ||
              e.appealUpdateTime != null
            ) {
              var s,
                u,
                c = {
                  id: t,
                  subject: e.name,
                  suspended: e.suspended,
                  terminated: e.terminated,
                  owner:
                    e.createdBy != null
                      ? o("WAWebWidFactory").createWid(e.createdBy)
                      : void 0,
                  creation: e.createdAt,
                  desc: e.description,
                  support: e.support,
                  isParentGroup: e.isParentGroup,
                  defaultSubgroup: e.isDefaultSubgroup,
                  parentGroup:
                    e.parentGroupId != null
                      ? o("WAWebWidFactory").createWid(e.parentGroupId)
                      : void 0,
                  disappearingModeInitiatedByMe:
                    (s = e.disappearingMode) == null ? void 0 : s.initiatedByMe,
                  disappearingModeTrigger: i,
                  suspendAppealStatus:
                    e.appealStatus != null
                      ? e.appealStatus ===
                        o("WAWebProtobufsHistorySync.pb")
                          .Conversation$GroupAppealStatus.APPEAL_IN_REVIEW
                        ? "IN_REVIEW"
                        : e.appealStatus ===
                            o("WAWebProtobufsHistorySync.pb")
                              .Conversation$GroupAppealStatus.APPEAL_APPROVED
                          ? "APPROVED"
                          : e.appealStatus ===
                              o("WAWebProtobufsHistorySync.pb")
                                .Conversation$GroupAppealStatus.APPEAL_REJECTED
                            ? "REJECTED"
                            : e.appealStatus ===
                                o("WAWebProtobufsHistorySync.pb")
                                  .Conversation$GroupAppealStatus.NO_APPEAL
                              ? null
                              : (function () {
                                  throw Error(
                                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                      e.appealStatus,
                                  );
                                })()
                      : void 0,
                  suspendAppealUpdateTime:
                    e.appealUpdateTime != null
                      ? Number(e.appealUpdateTime)
                      : void 0,
                };
              yield o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
                t,
                babelHelpers.extends({}, c, {
                  id: c.id.toString(),
                  owner: c.owner !== void 0 ? c.owner.toString() : void 0,
                  creation: c.creation !== void 0 ? Number(c.creation) : void 0,
                  parentGroup:
                    c.parentGroup !== void 0 ? String(c.parentGroup) : void 0,
                }),
              );
              var m = r("WAWebGroupMetadataCollection").add(
                  babelHelpers.extends({}, c),
                  { merge: !0 },
                )[0],
                p =
                  (u = e.participant) == null
                    ? void 0
                    : u.map(function (e) {
                        var t =
                            e.rank ===
                            o("WAWebProtobufsHistorySync.pb")
                              .GroupParticipant$Rank.SUPERADMIN,
                          n =
                            e.rank ===
                            o("WAWebProtobufsHistorySync.pb")
                              .GroupParticipant$Rank.ADMIN;
                        return new (r("WAWebGroupParticipantModel"))({
                          id: o("WAWebWidFactory").createWid(e.userJid),
                          isAdmin: n || t,
                          isSuperAdmin: t,
                        });
                      });
              (m == null || m.participants.add(p, { merge: !0 }),
                (e.readOnly === !0 || p.length > 0) &&
                  o("WAWebGroupParticipantsJob")
                    .updateParticipantsJob({
                      group: t,
                      participants: p.map(function (e) {
                        return {
                          id: e.id,
                          isAdmin: e.isAdmin,
                          isSuperAdmin: e.isSuperAdmin,
                        };
                      }),
                      skipDeviceSync: e.readOnly,
                    })
                    .catch(function (e) {
                      o("WALogger").WARN(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "updateParticipantsJob: failed: ",
                            "",
                          ])),
                        e,
                      );
                    }));
            }
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(t) {
      var r = (m || (m = n("Promise"))).resolve(),
        a = m.resolve();
      return (
        t.threadIdUserSecret != null
          ? (r = o("WAWebChatThreadLogging").setThreadIdUserSecret(
              t.threadIdUserSecret,
            ))
          : o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleChatThreadLoggingMetadata: missing threadIdUserSecret",
                  ])),
              )
              .sendLogs("ctl-missing-secret-history-sync"),
        t.threadDsTimeframeOffset != null
          ? (a = o("WAWebChatThreadLogging").setThreadDsTimeframeOffset(
              t.threadDsTimeframeOffset,
            ))
          : o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleChatThreadLoggingMetadata: missing threadDsTimeframeOffset",
                  ])),
              )
              .sendLogs("ctl-missing-offset-history-sync"),
        m.all([r, a])
      );
    }
    function v(e, t, n) {
      ((e.mdTimestamp = n), (e.mdBootstrapStepDuration = n - t), e.commit());
    }
    function S(e) {
      var t = e.chunkDownloadFinishTimestamp,
        n = e.failureReason,
        r = e.historySyncDownloadMetric,
        a = e.isSuccess,
        i = e.startTs;
      ((r.mdTimestamp = t),
        (r.mdBootstrapStepDuration = t - i),
        (r.mdBootstrapStepResult = a
          ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
              .SUCCESS
          : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
              .FAILURE),
        n != null && (r.mdSyncFailureReason = n),
        r.commit());
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.failureReason,
            n = e.forceFlushWamBuffer,
            r = e.historySyncDataAppliedMetric,
            a = e.isSuccess,
            i = e.startTs,
            l = o("WATimeUtils").unixTimeMs();
          return (
            (r.mdTimestamp = l),
            (r.mdBootstrapStepDuration = l - i),
            (r.mdBootstrapStepResult = a
              ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
                  .SUCCESS
              : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
                  .FAILURE),
            t != null && (r.mdSyncFailureReason = t),
            r.commitAndWaitForFlush(n)
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return [
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_BOOTSTRAP,
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
          .INITIAL_STATUS_V3,
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.PUSH_NAME,
        o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType.ON_DEMAND,
      ].includes(e.syncType) &&
        e.initialHistBootstrapInlinePayload != null &&
        (e == null ? void 0 : e.initialHistBootstrapInlinePayload.byteLength) >
          0
        ? e.initialHistBootstrapInlinePayload
        : null;
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebSchemaHistorySyncNotification")
            .getHistorySyncNotificationTable()
            .equals(
              ["processed", "syncType"],
              [
                0,
                o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                  .RECENT,
              ],
              { shouldDecrypt: !1 },
            )
            .then(function (e) {
              return e
                .filter(function (e) {
                  return (
                    !o("WAWebApiHistorySyncNotification").inFlightChunk.has(
                      e.msgKey,
                    ) && !e.reuploadPending
                  );
                })
                .sort(function (e, t) {
                  var n, r;
                  return (
                    ((n = e.chunkOrder) != null ? n : 0) -
                    ((r = t.chunkOrder) != null ? r : 0)
                  );
                });
            });
        })),
        I.apply(this, arguments)
      );
    }
    ((l.HistorySyncScheduleSource = p),
      (l.processPastParticipants = _),
      (l.getHistorySyncBasicChunkInfoString = o(
        "WAWebHistorySyncLogUtils",
      ).getHistorySyncBasicChunkInfoString),
      (l.getHistorySyncLogDetailsString = o(
        "WAWebHistorySyncLogUtils",
      ).getHistorySyncLogDetailsString),
      (l.checkSelfHistorySyncIdentity = g),
      (l.saveGroupMetadataForLeftGroup = y),
      (l.handleChatThreadLoggingMetadata = b),
      (l.commitHistoryStartDownloadingMetric = v),
      (l.commitHistoryDownloadedMetric = S),
      (l.commitHistoryDataAppliedMetric = R),
      (l.maybeGetInlinePayload = E),
      (l.getUnprocessedRecentSyncNotifications = k));
  },
  98,
);
