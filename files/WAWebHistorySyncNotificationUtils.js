__d(
  "WAWebHistorySyncNotificationUtils",
  [
    "$InternalEnum",
    "Promise",
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
    "asyncToGeneratorRuntime",
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
              groupId: r("WANullthrows")(e.groupJid),
              pastParticipants: e.pastParticipants.map(function (e) {
                return {
                  id: o("WAWebWidFactory").createWid(
                    r("WANullthrows")(e.userJid),
                  ),
                  leaveReason:
                    e.leaveReason ===
                    o("WAWebProtobufsHistorySync.pb")
                      .PastParticipant$LeaveReason.LEFT
                      ? o("WAWebLeaveReasonType").LeaveReason.Left
                      : o("WAWebLeaveReasonType").LeaveReason.Removed,
                  leaveTs: o("WALongInt").numberOrThrowIfTooLarge(
                    r("WANullthrows")(e.leaveTs),
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
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
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
    function y(t, n) {
      var a;
      if (n.isGroup()) {
        var i = (a = t.disappearingMode) == null ? void 0 : a.trigger,
          l;
        if (i != null) {
          var s = o(
            "WAWebEphemeralityUtils",
          ).getDisappearingModeTriggerFromProtobuf(i);
          s != null && (l = s);
        }
        if (
          t.suspended != null ||
          t.terminated != null ||
          t.createdBy != null ||
          t.createdAt != null ||
          t.description != null ||
          t.support != null ||
          t.isParentGroup != null ||
          t.isDefaultSubgroup != null ||
          t.parentGroupId != null ||
          t.disappearingMode != null
        ) {
          var u,
            c,
            d = {
              id: n,
              subject: t.name,
              suspended: t.suspended,
              terminated: t.terminated,
              owner:
                t.createdBy != null
                  ? o("WAWebWidFactory").createWid(t.createdBy)
                  : void 0,
              creation: t.createdAt,
              desc: t.description,
              support: t.support,
              isParentGroup: t.isParentGroup,
              defaultSubgroup: t.isDefaultSubgroup,
              parentGroup:
                t.parentGroupId != null
                  ? o("WAWebWidFactory").createWid(t.parentGroupId)
                  : void 0,
              disappearingModeInitiatedByMe:
                (u = t.disappearingMode) == null ? void 0 : u.initiatedByMe,
              disappearingModeTrigger: l,
            };
          o("WAWebDBGroupsGroupMetadata").persistGroupMetadata(
            n,
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
              (c = t.participant) == null
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
            (t.readOnly === !0 || p.length > 0) &&
              o("WAWebGroupParticipantsJob")
                .updateParticipantsJob({
                  group: n,
                  participants: p.map(function (e) {
                    return {
                      id: e.id,
                      isAdmin: e.isAdmin,
                      isSuperAdmin: e.isSuperAdmin,
                    };
                  }),
                  skipDeviceSync: t.readOnly,
                })
                .catch(function (t) {
                  o("WALogger").WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "updateParticipantsJob: failed: ",
                        "",
                      ])),
                    t,
                  );
                }));
        }
      }
    }
    function C(e) {
      var t = (m || (m = n("Promise"))).resolve(),
        r = m.resolve();
      return (
        e.threadIdUserSecret != null
          ? (t = o("WAWebChatThreadLogging").setThreadIdUserSecret(
              e.threadIdUserSecret,
            ))
          : o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleChatThreadLoggingMetadata: missing threadIdUserSecret",
                  ])),
              )
              .sendLogs("ctl-missing-secret-history-sync"),
        e.threadDsTimeframeOffset != null
          ? (r = o("WAWebChatThreadLogging").setThreadDsTimeframeOffset(
              e.threadDsTimeframeOffset,
            ))
          : o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[history sync] handleChatThreadLoggingMetadata: missing threadDsTimeframeOffset",
                  ])),
              )
              .sendLogs("ctl-missing-offset-history-sync"),
        m.all([t, r])
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n =
              e.syncType ===
              o("WAWebProtobufsHistorySync.pb").HistorySync$HistorySyncType
                .INITIAL_BOOTSTRAP
                ? o("WAWebWamEnumMdBootstrapPayloadType")
                    .MD_BOOTSTRAP_PAYLOAD_TYPE.CRITICAL
                : o("WAWebWamEnumMdBootstrapPayloadType")
                    .MD_BOOTSTRAP_PAYLOAD_TYPE.NON_CRITICAL,
            r = o(
              "WAWebGetMetricHistorySyncPayloadType",
            ).getMetricHistorySyncPayloadType(e.syncType),
            a = yield o(
              "WAWebSyncdMdSyncFieldstatMeta",
            ).MdSyncFieldStatsMeta.getMdSessionId(),
            i = yield o("WAWebGetHistorySyncProgress").getHistorySyncProgress(
              e,
            ),
            l = new (o(
              "WAWebMdBootstrapHistoryDataStartDownloadingWamEvent",
            ).MdBootstrapHistoryDataStartDownloadingWamEvent)({
              mdBootstrapPayloadType: n,
              mdBootstrapPayloadSize: e.historySyncPayloadSize,
              mdBootstrapHistoryPayloadType: r,
              mdSessionId: a,
              historySyncStageProgress: i,
            }),
            s = new (o(
              "WAWebMdBootstrapHistoryDataDownloadedWamEvent",
            ).MdBootstrapHistoryDataDownloadedWamEvent)({
              mdBootstrapPayloadType: n,
              mdBootstrapPayloadSize: e.historySyncPayloadSize,
              mdBootstrapHistoryPayloadType: r,
              mdSessionId: a,
              historySyncStageProgress: i,
            }),
            u = new (o(
              "WAWebMdBootstrapDataAppliedWamEvent",
            ).MdBootstrapDataAppliedWamEvent)({
              mdBootstrapPayloadType: n,
              mdBootstrapSource: o("WAWebWamEnumMdBootstrapSource")
                .MD_BOOTSTRAP_SOURCE.HISTORY,
              mdBootstrapHistoryPayloadType: r,
              mdSessionId: a,
              sentViaMms: t,
              historySyncStageProgress: i,
            });
          e.chunkOrder != null &&
            ((l.historySyncChunkOrder = e.chunkOrder),
            (s.historySyncChunkOrder = e.chunkOrder),
            (u.historySyncChunkOrder = e.chunkOrder));
          var c = yield o(
            "WAWebSyncdMdSyncFieldstatMeta",
          ).MdSyncFieldStatsMeta.getStorageEstimation();
          return (
            c.mdStorageQuotaBytes !==
              o("WAWebSyncdMdSyncFieldstatMeta").STORAGE_QUOTA_UNAVAILABLE &&
              ((s.mdStorageQuotaUsedBytes = c.mdStorageQuotaUsedBytes),
              (s.mdStorageQuotaBytes = c.mdStorageQuotaBytes)),
            {
              historySyncStartDownloadingMetric: l,
              historySyncDownloadedMetric: s,
              historySyncDataAppliedMetric: u,
            }
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      ((e.mdTimestamp = n), (e.mdBootstrapStepDuration = n - t), e.commit());
    }
    function R(e, t, n, r) {
      ((e.mdTimestamp = r),
        (e.mdBootstrapStepDuration = r - t),
        (e.mdBootstrapStepResult = n
          ? o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
              .SUCCESS
          : o("WAWebWamEnumMdBootstrapStepResult").MD_BOOTSTRAP_STEP_RESULT
              .FAILURE),
        e.commit());
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        E.apply(this, arguments)
      );
    }
    function k(e) {
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
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        T.apply(this, arguments)
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
      (l.handleChatThreadLoggingMetadata = C),
      (l.getHistorySyncMetrics = b),
      (l.commitHistoryStartDownloadingMetric = S),
      (l.commitHistoryDownloadedMetric = R),
      (l.commitHistoryDataAppliedMetric = L),
      (l.maybeGetInlinePayload = k),
      (l.getUnprocessedRecentSyncNotifications = I));
  },
  98,
);
