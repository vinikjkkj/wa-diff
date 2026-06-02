__d(
  "WAWebHistorySyncNotificationUtils",
  [
    "$InternalEnum",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WATimeUtils",
    "WAWebApiHistorySyncNotification",
    "WAWebChatCollection",
    "WAWebChatThreadLogging",
    "WAWebDBGroupParticipant",
    "WAWebDBGroupsGroupMetadata",
    "WAWebEphemeralityUtils",
    "WAWebGetHistorySyncProgress",
    "WAWebGetMetricHistorySyncPayloadType",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantModel",
    "WAWebGroupParticipantsJob",
    "WAWebHistorySyncLogUtils",
    "WAWebLeaveReasonType",
    "WAWebMdBootstrapDataAppliedWamEvent",
    "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
    "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
    "WAWebProtobufsHistorySync.pb",
    "WAWebSchemaHistorySyncNotification",
    "WAWebSignalProtocolStore",
    "WAWebSyncdMdSyncFieldstatMeta",
    "WAWebWamEnumMdBootstrapPayloadType",
    "WAWebWamEnumMdBootstrapSource",
    "WAWebWamEnumMdBootstrapStepResult",
    "WAWebWidFactory",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum").Mirrored([
        "NewRecentSyncNotification",
        "NewOnDemandSyncNotification",
        "LastProcessedNotification",
        "InitialSyncComplete",
        "BackendStart",
        "HistorySyncStatusCheck",
        "ManualRestart",
      ]);
    async function p(t, n) {
      var a = t.pastParticipants.map(function (e) {
        return {
          groupId: r("WANullthrows")(e.groupJid),
          pastParticipants: e.pastParticipants.map(function (e) {
            return {
              id: o("WAWebWidFactory").createWid(r("WANullthrows")(e.userJid)),
              leaveReason:
                e.leaveReason ===
                o("WAWebProtobufsHistorySync.pb").PastParticipant$LeaveReason
                  .LEFT
                  ? o("WAWebLeaveReasonType").LeaveReason.Left
                  : o("WAWebLeaveReasonType").LeaveReason.Removed,
              leaveTs: o("WALongInt").numberOrThrowIfTooLarge(
                r("WANullthrows")(e.leaveTs),
              ),
            };
          }),
        };
      });
      (await o("WAWebDBGroupParticipant").addPastParticipants(a),
        a.forEach(function (e) {
          var t = o("WAWebChatCollection").ChatCollection.gadd(
              o("WAWebWidFactory").createWid(e.groupId),
            ),
            n = t.groupMetadata;
          n == null ||
            n.pastParticipants.add(e.pastParticipants, { merge: !0 });
        }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[history sync] Past Participants completed, ",
              "",
            ])),
          o("WAWebHistorySyncLogUtils").getHistorySyncLogDetailsString(n),
        ));
    }
    async function _(e, t) {
      var n = await o("WAWebSignalProtocolStore")
        .getPersistSignalProtocolStore()
        .loadIdentityKey(e);
      n != null &&
        n !== t &&
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                `[history sync] get changed self identity key from history sync,
     existing length: `,
                ", new length: ",
                "",
              ])),
            n.length,
            t.length,
          )
          .tags("history-sync")
          .sendLogs("self-identity-change-from-history-sync");
    }
    function f(e, t) {
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
            c,
            d = {
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
          o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            t,
            babelHelpers.extends({}, d, {
              id: d.id.toString(),
              owner: d.owner !== void 0 ? d.owner.toString() : void 0,
              creation: d.creation !== void 0 ? Number(d.creation) : void 0,
              parentGroup:
                d.parentGroup !== void 0 ? String(d.parentGroup) : void 0,
            }),
          );
          var m = r("WAWebGroupMetadataCollection").add(
              babelHelpers.extends({}, d),
              { merge: !0 },
            )[0],
            p =
              (c = e.participant) == null
                ? void 0
                : c.map(function (e) {
                    var t =
                        e.rank ===
                        o("WAWebProtobufsHistorySync.pb").GroupParticipant$Rank
                          .SUPERADMIN,
                      n =
                        e.rank ===
                        o("WAWebProtobufsHistorySync.pb").GroupParticipant$Rank
                          .ADMIN;
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "updateParticipantsJob: failed: ",
                        "",
                      ])),
                    e,
                  );
                }));
        }
      }
    }
    function g(e) {
      var t = Promise.resolve(),
        n = Promise.resolve();
      return (
        e.threadIdUserSecret != null
          ? (t = o("WAWebChatThreadLogging").setThreadIdUserSecret(
              e.threadIdUserSecret,
            ))
          : o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleChatThreadLoggingMetadata: missing threadIdUserSecret",
                  ])),
              )
              .sendLogs("ctl-missing-secret-history-sync"),
        e.threadDsTimeframeOffset != null
          ? (n = o("WAWebChatThreadLogging").setThreadDsTimeframeOffset(
              e.threadDsTimeframeOffset,
            ))
          : o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleChatThreadLoggingMetadata: missing threadDsTimeframeOffset",
                  ])),
              )
              .sendLogs("ctl-missing-offset-history-sync"),
        Promise.all([t, n])
      );
    }
    async function h(e, t) {
      var n =
          e.syncType ===
          o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
            .INITIAL_BOOTSTRAP
            ? o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE
                .CRITICAL
            : o("WAWebWamEnumMdBootstrapPayloadType").MD_BOOTSTRAP_PAYLOAD_TYPE
                .NON_CRITICAL,
        a = o(
          "WAWebGetMetricHistorySyncPayloadType",
        ).getMetricHistorySyncPayloadType(e.syncType),
        i = await o(
          "WAWebSyncdMdSyncFieldstatMeta",
        ).MdSyncFieldStatsMeta.getMdSessionId(),
        l = await o("WAWebGetHistorySyncProgress").getHistorySyncProgress(e),
        s = new (o(
          "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
        ).MdBootstrapHistoryDataStartDownloadingWamEvent)({
          mdBootstrapPayloadType: n,
          mdBootstrapPayloadSize: e.historySyncPayloadSize,
          mdBootstrapHistoryPayloadType: a,
          mdSessionId: i,
          historySyncStageProgress: l,
        }),
        u = new (o(
          "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
        ).MdBootstrapHistoryDataDownloadedWamEvent)({
          mdBootstrapPayloadType: n,
          mdBootstrapPayloadSize: e.historySyncPayloadSize,
          mdBootstrapHistoryPayloadType: a,
          mdSessionId: i,
          historySyncStageProgress: l,
        }),
        c = new (o(
          "WAWebMdBootstrapDataAppliedWamEvent",
        ).MdBootstrapDataAppliedWamEvent)(
          babelHelpers.extends(
            {
              mdBootstrapPayloadType: n,
              mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
                .MD_BOOTSTRAP_SOURCE.HISTORY,
              mdBootstrapHistoryPayloadType: a,
              mdSessionId: i,
              sentViaMms: t,
              historySyncStageProgress: l,
            },
            r("gkx")("17524")
              ? {
                  gkContext:
                    r("gkx")("20033") === !0 ? "workerV2:1" : "workerV2:0",
                }
              : {},
          ),
        );
      e.chunkOrder != null &&
        ((s.historySyncChunkOrder = e.chunkOrder),
        (u.historySyncChunkOrder = e.chunkOrder),
        (c.historySyncChunkOrder = e.chunkOrder));
      var d = await o(
        "WAWebSyncdMdSyncFieldstatMeta",
      ).MdSyncFieldStatsMeta.getStorageEstimation();
      return (
        d.mdStorageQuotaBytes !==
          o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
          ((u.mdStorageQuotaUsedBytes = d.mdStorageQuotaUsedBytes),
          (u.mdStorageQuotaBytes = d.mdStorageQuotaBytes)),
        {
          historySyncStartDownloadingMetric: s,
          historySyncDownloadedMetric: u,
          historySyncDataAppliedMetric: c,
        }
      );
    }
    function y(e, t, n) {
      ((e.mdTimestamp = n), (e.mdBootstrapStepDuration = n - t), e.commit());
    }
    function C(e) {
      var t = e.chunkDownloadFinishTimestamp,
        n = e.historySyncDownloadMetric,
        r = e.isSuccess,
        a = e.startTs;
      ((n.mdTimestamp = t),
        (n.mdBootstrapStepDuration = t - a),
        (n.mdBootstrapStepResult = r
          ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
              .SUCCESS
          : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
              .FAILURE),
        n.commit());
    }
    async function b(e) {
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
    }
    function v(e) {
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
    async function S() {
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
    }
    ((l.HistorySyncScheduleSource = m),
      (l.processPastParticipants = p),
      (l.getHistorySyncBasicChunkInfoString = o(
        "WAWebHistorySyncLogUtils",
      ).getHistorySyncBasicChunkInfoString),
      (l.getHistorySyncLogDetailsString = o(
        "WAWebHistorySyncLogUtils",
      ).getHistorySyncLogDetailsString),
      (l.checkSelfHistorySyncIdentity = _),
      (l.saveGroupMetadataForLeftGroup = f),
      (l.handleChatThreadLoggingMetadata = g),
      (l.getHistorySyncMetrics = h),
      (l.commitHistoryStartDownloadingMetric = y),
      (l.commitHistoryDownloadedMetric = C),
      (l.commitHistoryDataAppliedMetric = b),
      (l.maybeGetInlinePayload = v),
      (l.getUnprocessedRecentSyncNotifications = S));
  },
  98,
);
