__d(
  "WAWebLid1X1ThreadAccountMigrations",
  [
    "WAAsyncSleep",
    "WAJobOrchestratorTypes",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebCurrentUser",
    "WAWebDBChatValidation",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebEphemeralityTypes",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebLid11MigrationLifecycleWamEvent",
    "WAWebLid1X1MigrationGating",
    "WAWebLid1X1ThreadAccountMigrations.flow",
    "WAWebLid1x1MigrationPrimaryCache",
    "WAWebLogoutReasonConstants",
    "WAWebModelStorageUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebOfflineResumeUtils",
    "WAWebOrchestratorNonPersistedJob",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsTypes",
    "WAWebUsernameTypes",
    "WAWebWamEnumMigrationStageEnum",
    "WAWebWamEnumStageFailureReasonEnum",
    "WAWebWid",
    "WAWebWidFactory",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P,
      N;
    function M() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "lid_one_on_one_migration_enabled",
        ),
        t = q().state;
      if (
        e &&
        t ===
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .WAITING_PROP
      )
        return B(
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .WAITING_MAPPINGS,
        );
    }
    async function w(t) {
      try {
        var n;
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] setLidMigrationMappings: mappings size=",
              " offline=",
              "",
            ])),
          (n = t == null ? void 0 : t.byteLength) != null ? n : 0,
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
        );
        var r = o("WATimeUtils").unixTime();
        new (o(
          "WAWebLid11MigrationLifecycleWamEvent",
        ).Lid11MigrationLifecycleWamEvent)({
          migrationStage: o("WAWebWamEnumMigrationStageEnum")
            .MIGRATION_STAGE_ENUM.COMPANION_RECEIVED_PEER_MESSAGE,
        }).commit();
        var a = o("WATimeUtils").unixTime();
        if (
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[LID] after sending WAM. is offline: ",
                ". duration: ",
                "",
              ])),
            o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
            a - r,
          ),
          t == null)
        )
          return (
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] peer mapping is null",
                ])),
            ),
            await new (o(
              "WAWebLid11MigrationLifecycleWamEvent",
            ).Lid11MigrationLifecycleWamEvent)({
              migrationStage: o("WAWebWamEnumMigrationStageEnum")
                .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
              stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
                .STAGE_FAILURE_REASON_ENUM.MALFORMED_PEER_MESSAGE,
            }).commitAndWaitForFlush(!0),
            o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] setLidMigrationMappings: empty mappings",
                  ])),
              )
              .sendLogs("lid-migration-empty-mappings"),
            o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .LidMigrationPeerMappingsMalformed,
            )
          );
        var i = o("WATimeUtils").unixTime();
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] before update state. is offline: ",
              "",
            ])),
          o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
        ),
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
            "WALidThreadAccountMigrationStatus",
            {
              state: o("WAWebLid1X1ThreadAccountMigrations.flow")
                .LidThreadMigrationStatus.READY,
              ts: i,
              lidMappingsFromPrimaryMigration: t,
            },
          ));
        var l = o("WATimeUtils").unixTime(),
          g = q().state;
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] after updating state. Current state: ",
              "",
            ])),
          g,
        ),
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[LID] before update cache. is offline: ",
                ". duration: ",
                "",
              ])),
            o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
            l - a,
          ),
          await o(
            "WAWebLid1x1MigrationPrimaryCache",
          ).lidPnMigrationPrimaryCache.updateCacheIfEmpty(t, i),
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[LID] setLidMigrationMappings: saved mapping, offline=",
                "",
              ])),
            o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
          ),
          U());
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] setLidMigrationMappings: failed to save mappings",
                ])),
            )
            .catching(e)
            .sendLogs("lid-migration-failed-to-save-mappings"),
          e
        );
      }
    }
    function A() {
      var e = q().state;
      return (
        e ===
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .READY ||
        e ===
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .IN_PROGRESS
      );
    }
    async function F() {
      new (o(
        "WAWebLid11MigrationLifecycleWamEvent",
      ).Lid11MigrationLifecycleWamEvent)({
        migrationStage: o("WAWebWamEnumMigrationStageEnum").MIGRATION_STAGE_ENUM
          .COMPANION_LOCAL_MIGRATION_STARTED,
        mappingCount: o(
          "WAWebLid1x1MigrationPrimaryCache",
        ).lidPnMigrationPrimaryCache.getAllPnLidMappings().length,
      }).commit();
      try {
        if (!A()) {
          o("WALogger")
            .ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] migrate1x1Chats: migration is not ready",
                ])),
            )
            .sendLogs("lid-migration-not-ready");
          return;
        }
        if (
          !o("WAWebABProps").getABPropConfigValue(
            "lid_one_on_one_migration_compatible",
          )
        )
          return (
            await new (o(
              "WAWebLid11MigrationLifecycleWamEvent",
            ).Lid11MigrationLifecycleWamEvent)({
              migrationStage: o("WAWebWamEnumMigrationStageEnum")
                .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
              stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
                .STAGE_FAILURE_REASON_ENUM.COMPANION_UNSUPPORTED_VERSION,
            }).commitAndWaitForFlush(!0),
            o("WAWebSocketLogoutJob").socketLogout(
              o("WAWebLogoutReasonConstants").LogoutReason
                .LidMigrationCompanionIncompatibleKillswitch,
            )
          );
        (o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[Lid] 1x1ThreadMigration started",
            ])),
        ),
          B(
            o("WAWebLid1X1ThreadAccountMigrations.flow")
              .LidThreadMigrationStatus.IN_PROGRESS,
          ));
        var e = q(),
          t = r("WANullthrows")(
            e == null ? void 0 : e.lidMappingsFromPrimaryMigration,
            "got empty mappings while in lid thread migration",
          ),
          n = r("WANullthrows")(
            e == null ? void 0 : e.ts,
            "received empty sync timestamp while in lid thread migration",
          );
        await o(
          "WAWebLid1x1MigrationPrimaryCache",
        ).lidPnMigrationPrimaryCache.updateCacheIfEmpty(t, n);
        var a = [],
          i = 0,
          l = 0;
        o("WAWebCurrentUser").isEmployee() &&
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[Lid] 1x1ThreadMigration Primary Mappings: ",
                "",
              ])),
            o("WAWebLid1x1MigrationPrimaryCache")
              .lidPnMigrationPrimaryCache.getAllPnLidMappings()
              .map(function (e) {
                var t, n;
                return (
                  e.primaryProvidedPn.toString() +
                  ":" +
                  e.primaryProvidedLid.toString() +
                  ":" +
                  ((t =
                    (n = e.primaryProvidedLatestLid) == null
                      ? void 0
                      : n.toString()) != null
                    ? t
                    : "")
                );
              })
              .join(", "),
          );
        var s = null;
        if (
          (await o("WAWebModelStorageUtils")
            .getStorage()
            .lock(["chat", "message", "user-prefs"], async function (e) {
              var t = e[0],
                u = e[1],
                c = (await t.all()).filter(function (e) {
                  var t = e.id,
                    n = o("WAWebWidFactory").createWid(t);
                  return n.isRegularUser();
                }),
                d = [],
                m = [],
                p = new Set(
                  c.map(function (e) {
                    var t = e.id;
                    return o("WAWebWidFactory").asUserWidOrThrow(
                      o("WAWebWidFactory").createWid(t),
                    );
                  }),
                ),
                _ = 0,
                f = c.map(async function (e) {
                  var t;
                  if (s == null) {
                    var c = o("WAWebWidFactory").createWid(e.id),
                      f = e.lidOriginType,
                      g = o("WAWebLid1x1MigrationPrimaryCache")
                        .lidPnMigrationPrimaryCache.getAllPnLidMappings()
                        .some(function (e) {
                          var t = e.primaryProvidedLatestLid;
                          return r("WAWebWid").equals(t, c);
                        }),
                      h =
                        f === o("WAWebUsernameTypes").LidOriginType.PNH_CTWA &&
                        g;
                    if (c.isLid()) {
                      a.push({
                        id: e.id,
                        accountLid: c.toString(),
                        lidOriginType: h
                          ? o("WAWebUsernameTypes").LidOriginType.GENERAL
                          : f,
                      });
                      return;
                    }
                    var y = o("WAWebApiContact").getCurrentLid(
                      o("WAWebWidFactory").asUserWidOrThrow(c),
                    );
                    y == null && l++;
                    var C = y != null ? p.has(y) : !1,
                      b = o(
                        "WAWebLid1x1MigrationPrimaryCache",
                      ).lidPnMigrationPrimaryCache.getLidForPn(c);
                    r("WAWebWid").equals(y, b) || i++;
                    var v = o("WALongInt").maybeNumber(
                      o(
                        "WAWebLid1x1MigrationPrimaryCache",
                      ).lidPnMigrationPrimaryCache.getPrimaryMigrationTsSec(),
                    );
                    v == null && _++;
                    var S = await O({
                      mostRecentMsgTs: (t = e.t) != null ? t : 0,
                      isThreadExistsWithChatJid: C,
                      primarySyncTs: v != null ? v : n,
                      primaryProvidedLid: b,
                      latestLocalLid: y,
                      chat: e,
                      MessageTable: u,
                    });
                    if (S.deleteChat) {
                      (d.push(e.id), m.push.apply(m, S.messagesToDelete));
                      return;
                    }
                    if (S.logoutReason != null) {
                      s = S.logoutReason;
                      return;
                    }
                    a.push({
                      id: e.id,
                      accountLid: S.threadLid.toString(),
                      lidOriginType: e.lidOriginType,
                    });
                  }
                });
              (await Promise.all(f),
                _ > 0 &&
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[LID] migrate1x1Chats: primaryMigrationTsSec overflow ",
                          "",
                        ])),
                      _,
                    )
                    .sendLogs("lid-migration-primary-ts-too-large"),
                s == null &&
                  (o("WAWebDBChatValidation").validateAccountLidInChatRows(
                    a,
                    "lid1X1ThreadAccountMigration",
                  ),
                  await t.bulkCreateOrMerge(a),
                  await t.bulkRemove(d),
                  await u.bulkRemove(m),
                  d.length > 0 &&
                    o("WALogger")
                      .LOG(
                        b ||
                          (b = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " chats deleted on migration instead of logging out",
                          ])),
                        d.length,
                      )
                      .sendLogs("lid-migration-chats-deleted", { sampling: 0 }),
                  B(
                    o("WAWebLid1X1ThreadAccountMigrations.flow")
                      .LidThreadMigrationStatus.COMPLETE,
                  ),
                  o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.setIsLidMigrated(
                    !0,
                    o("WAWebUserPrefsTypes").LidMigrationSource.PEER,
                    !1,
                  ),
                  o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[Lid] 1x1ThreadMigration completed successfully",
                      ])),
                  )));
            }),
          s)
        )
          return (
            await new (o(
              "WAWebLid11MigrationLifecycleWamEvent",
            ).Lid11MigrationLifecycleWamEvent)({
              migrationStage: o("WAWebWamEnumMigrationStageEnum")
                .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
              stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
                .STAGE_FAILURE_REASON_ENUM.INITIATED_LOGOUT_BASED_ON_MAPPING,
            }).commitAndWaitForFlush(!0),
            o("WALogger")
              .ERROR(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] Failed to migrate 1x1 chats with reason: ",
                    ". Logging out",
                  ])),
                s,
              )
              .sendLogs("lid-migration-failed"),
            await o("WAAsyncSleep").asyncSleep(5e3),
            o("WAWebSocketLogoutJob").socketLogout(s)
          );
        await o(
          "WAWebLid1x1MigrationPrimaryCache",
        ).lidPnMigrationPrimaryCache.learnMappingsInBulk();
        var u = r("sumBy")(
          o(
            "WAWebLid1x1MigrationPrimaryCache",
          ).lidPnMigrationPrimaryCache.getAllPnLidMappings(),
          function (e) {
            return e.primaryProvidedLatestLid != null ? 1 : 0;
          },
        );
        new (o(
          "WAWebLid11MigrationLifecycleWamEvent",
        ).Lid11MigrationLifecycleWamEvent)({
          migrationStage: o("WAWebWamEnumMigrationStageEnum")
            .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_ENDED,
          mappingCount: o(
            "WAWebLid1x1MigrationPrimaryCache",
          ).lidPnMigrationPrimaryCache.getAllPnLidMappings().length,
          migratedThreadCount: a.length,
          companionHasADifferentMappingCount: i,
          chatNotInMappingCount: l,
          latestMappingCount: u,
        }).commit();
      } catch (e) {
        return (
          await new (o(
            "WAWebLid11MigrationLifecycleWamEvent",
          ).Lid11MigrationLifecycleWamEvent)({
            migrationStage: o("WAWebWamEnumMigrationStageEnum")
              .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
            stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
              .STAGE_FAILURE_REASON_ENUM.INTERNAL_ERROR,
          }).commitAndWaitForFlush(!0),
          o("WALogger")
            .ERROR(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] Failed to migrate 1x1 chats",
                ])),
            )
            .catching(e)
            .sendLogs("lid-thread-migration"),
          o("WAWebSocketLogoutJob").socketLogout(
            o("WAWebLogoutReasonConstants").LogoutReason
              .LidMigrationOneOnOneThreadMigrationInternalError,
          )
        );
      }
    }
    async function O(e) {
      var t = e.MessageTable,
        n = e.chat,
        r = e.isThreadExistsWithChatJid,
        a = e.latestLocalLid,
        i = e.mostRecentMsgTs,
        l = e.primaryProvidedLid,
        s = e.primarySyncTs;
      if (l == null) {
        if (a == null) {
          if (n) {
            try {
              if (n.originalLid != null)
                return {
                  threadLid: o("WAWebWidFactory").createUserLidOrThrow(
                    n.originalLid,
                  ),
                };
            } catch (e) {
              o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "getResolvedThreadAccountLid: failed to get lid for ",
                      "",
                    ])),
                  n.id,
                )
                .catching(e)
                .sendLogs(
                  "createChat-lid-offline-resume-workaround-failed-migration",
                );
            }
            var u = await V(n, t);
            if (u.result)
              return (
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "[LID] chat can be deleted, deleting chat ",
                      "",
                    ])),
                  n.id,
                ),
                {
                  deleteChat: !0,
                  messagesToDelete: u.messages.map(function (e) {
                    return e.id;
                  }),
                }
              );
            z(n, s, r, u.messages, u.reason);
          }
          return {
            logoutReason: o("WAWebLogoutReasonConstants").LogoutReason
              .LidMigrationNoLidAvailiable,
          };
        }
        return r
          ? {
              logoutReason: o("WAWebLogoutReasonConstants").LogoutReason
                .LidMigrationSplitThreadMismatch,
            }
          : { threadLid: a };
      }
      var c = o("WAWebABProps").getABPropConfigValue(
        "lid_one_on_one_migration_log_out_on_mismatch",
      );
      return c
        ? a == null || a.equals(l)
          ? (a == null &&
              o("WALogger").WARN(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] getResolvedThreadAccountLid: latestLocalLid is null",
                  ])),
              ),
            { threadLid: l })
          : i >= s
            ? {
                logoutReason: o("WAWebLogoutReasonConstants").LogoutReason
                  .LidMigrationPrimaryMappingsObsolete,
              }
            : { threadLid: l }
        : { threadLid: l };
    }
    function B(e) {
      o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "[LID] setLidThreadMigrationProgress: ",
            "",
          ])),
        e,
      );
      var t = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          "WALidThreadAccountMigrationStatus",
        ),
        n = babelHelpers.extends({}, t, {
          state: e,
          ts: o("WATimeUtils").unixTime(),
        });
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        "WALidThreadAccountMigrationStatus",
        n,
      );
    }
    function W(e, t) {
      return e == null ? "unknown" : t < e ? "true" : "false";
    }
    function q() {
      o("WALogger").LOG(
        T ||
          (T = babelHelpers.taggedTemplateLiteralLoose([
            "[LID] getLidThreadMigrationStatus, isWorker: ",
            "",
          ])),
        o("WAWebRuntimeEnvironmentUtils").isWorker(),
      );
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        "WALidThreadAccountMigrationStatus",
      );
      if (e == null) {
        var t = {
          state: o("WAWebLid1X1ThreadAccountMigrations.flow")
            .LidThreadMigrationStatus.WAITING_PROP,
          ts: o("WATimeUtils").unixTime(),
        };
        return (
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[LID] no migration status, will use default",
              ])),
          ),
          o("WAWebUserPrefsIndexedDBStorage")
            .userPrefsIdb.set("WALidThreadAccountMigrationStatus", t)
            .then(function () {
              return o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] default migration status saved",
                  ])),
              );
            }),
          t
        );
      }
      return e;
    }
    function U() {
      if (!A()) {
        o("WALogger").WARN(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] scheduleLid1x1ThreadAccountMigrationJob: not ready",
            ])),
        );
        return;
      }
      o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "scheduleLid1x1ThreadAccountMigration",
          async function () {
            (o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] refreshing the page to start 1x1 lid thread migration",
                ])),
            ),
              o("WAWebOfflineResumeUtils").refreshWindow());
          },
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .fireAndForget();
    }
    async function V(e, t) {
      var n = o("WAWebWidFactory").createWid(e.id),
        r = await t.between(
          ["internalId"],
          o("WAWebDBMessageUtils").beginningOfChat(n),
          o("WAWebDBMessageUtils").endOfChat(n),
          { lowerInclusive: !0, upperInclusive: !0, shouldDecrypt: !1 },
        ),
        a = !1;
      return (
        (X(r) || Y(r)) &&
          W(
            o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
            j(r).oldestMessageTs,
          ) === "false" &&
          (a = !0),
        !a && e.createdLocally !== !0
          ? { result: !1, messages: r, reason: "not created locally" }
          : (e.ephemeralDuration != null ||
                e.ephemeralSettingTimestamp != null) &&
              !J(e, r)
            ? { result: !1, messages: r, reason: "ephemeral_duration" }
            : e.isLocked
              ? {
                  result: !1,
                  messages: r,
                  reason: "locked: " + String(e.isLocked),
                }
              : e.archive
                ? {
                    result: !1,
                    messages: r,
                    reason: "archived: " + String(e.archive),
                  }
                : e.muteExpiration
                  ? {
                      result: !1,
                      messages: r,
                      reason: "mute_expiration: " + String(e.muteExpiration),
                    }
                  : r.every(G) || Q(r) || a
                    ? { result: !0, messages: r }
                    : { result: !1, messages: r, reason: "has messages" }
      );
    }
    function H(e) {
      var t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(t);
    }
    function G(e) {
      var t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return (
        o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(t) ||
        o("WAWebMsgGetters").getIsInitialE2ENotification(t)
      );
    }
    function z(e, t, n, r, a) {
      var i = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
        l = j(r),
        s = l.count,
        u = l.newestMessageTs,
        c = l.oldestMessageTs,
        d = W(i, c),
        m = e.t,
        p = K(m),
        _ = K(t),
        f = K(i),
        g = e.createdLocally === !0,
        h = K(c),
        y = K(u),
        C = {
          reason: a,
          messagesCount: s,
          fromHistSync: d,
          primarySyncT: _,
          pairingT: f,
          oldestMessageT: h,
          newestMessageT: y,
          chatT: p,
          threadExist: n,
        };
      r.length <= 4 &&
        (C.messages = r.map(function (e) {
          return { type: e.type, subtype: e.subtype, ack: e.ack };
        }));
      var b = Z(g, r, a);
      o("WALogger")
        .ERROR(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] no lid available for chat ",
              ", ",
              "",
            ])),
          e.id,
          JSON.stringify(C),
        )
        .sendLogs(b);
    }
    function j(e) {
      var t = Math.min.apply(
          Math,
          e.map(function (e) {
            return e.t;
          }),
        ),
        n = Math.max.apply(
          Math,
          e.map(function (e) {
            return e.t;
          }),
        ),
        r = e.length;
      return { oldestMessageTs: t, newestMessageTs: n, count: r };
    }
    function K(e) {
      return e == null
        ? null
        : o("WATimeUtils").toHttpHeaderDate(o("WATimeUtils").castToUnixTime(e));
    }
    function Q(e) {
      return (
        e.every(function (e) {
          return G(e) || e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        }) &&
        e.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        })
      );
    }
    function X(e) {
      return (
        e.every(function (e) {
          return G(e) || e.broadcast;
        }) &&
        e.some(function (e) {
          return e.broadcast;
        })
      );
    }
    function Y(e) {
      return (
        e.every(function (e) {
          return (
            G(e) ||
            e.subtype ===
              o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
          );
        }) &&
        e.some(function (e) {
          return (
            e.subtype ===
            o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ContactInfoCard
          );
        })
      );
    }
    function J(e, t) {
      return !!(
        e.disappearingModeTrigger ===
          o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings &&
        t.some(H)
      );
    }
    function Z(e, t, n) {
      return X(t)
        ? "lid-migration-no-lid-available-broadcast-chat"
        : Q(t)
          ? "lid-migration-no-lid-available-call-chat"
          : Y(t)
            ? "lid-migration-no-lid-available-contact-info-chat"
            : e
              ? n === "has messages"
                ? "lid-migration-no-lid-available-created-locally-has-messages"
                : "lid-migration-no-lid-available-created-locally"
              : "lid-migration-no-lid-available";
    }
    ((l.checkIfMigrationEnabled = M),
      (l.setLidMigrationMappings = w),
      (l.shouldMigrateNow = A),
      (l.migrate1x1Chats = F),
      (l.getResolvedThreadAccountLid = O),
      (l.getLidThreadMigrationStatus = q));
  },
  98,
);
