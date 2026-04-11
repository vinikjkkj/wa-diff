__d(
  "WAWebLid1X1ThreadAccountMigrations",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      N,
      M;
    function w() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "lid_one_on_one_migration_enabled",
        ),
        t = G().state;
      if (
        e &&
        t ===
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .WAITING_PROP
      )
        return V(
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .WAITING_MAPPINGS,
        );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t;
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] setLidMigrationMappings: mappings size=",
                  " offline=",
                  "",
                ])),
              (t = e == null ? void 0 : e.byteLength) != null ? t : 0,
              o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
            );
            var n = o("WATimeUtils").unixTime();
            new (o(
              "WAWebLid11MigrationLifecycleWamEvent",
            ).Lid11MigrationLifecycleWamEvent)({
              migrationStage: o("WAWebWamEnumMigrationStageEnum")
                .MIGRATION_STAGE_ENUM.COMPANION_RECEIVED_PEER_MESSAGE,
            }).commit();
            var r = o("WATimeUtils").unixTime();
            if (
              (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] after sending WAM. is offline: ",
                    ". duration: ",
                    "",
                  ])),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd(),
                r - n,
              ),
              e == null)
            )
              return (
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[LID] peer mapping is null",
                    ])),
                ),
                yield new (o(
                  "WAWebLid11MigrationLifecycleWamEvent",
                ).Lid11MigrationLifecycleWamEvent)({
                  migrationStage: o("WAWebWamEnumMigrationStageEnum")
                    .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
                  stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
                    .STAGE_FAILURE_REASON_ENUM.MALFORMED_PEER_MESSAGE,
                }).commitAndWaitForFlush(!0),
                o("WALogger")
                  .ERROR(
                    h ||
                      (h = babelHelpers.taggedTemplateLiteralLoose([
                        "[LID] setLidMigrationMappings: empty mappings",
                      ])),
                  )
                  .sendLogs("lid-migration-empty-mappings"),
                o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason
                    .LidMigrationPeerMappingsMalformed,
                )
              );
            var a = o("WATimeUtils").unixTime();
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] before update state. is offline: ",
                  "",
                ])),
              o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd(),
            ),
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
                "WALidThreadAccountMigrationStatus",
                {
                  state: o("WAWebLid1X1ThreadAccountMigrations.flow")
                    .LidThreadMigrationStatus.READY,
                  ts: a,
                  lidMappingsFromPrimaryMigration: e,
                },
              ));
            var i = o("WATimeUtils").unixTime(),
              l = G().state;
            (o("WALogger").LOG(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] after updating state. Current state: ",
                  "",
                ])),
              l,
            ),
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] before update cache. is offline: ",
                    ". duration: ",
                    "",
                  ])),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd(),
                i - r,
              ),
              yield o(
                "WAWebLid1x1MigrationPrimaryCache",
              ).lidPnMigrationPrimaryCache.updateCacheIfEmpty(e, a),
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] setLidMigrationMappings: saved mapping, offline=",
                    "",
                  ])),
                o(
                  "WAWebEventsWaitForOfflineDeliveryEnd",
                ).isOfflineDeliveryEnd(),
              ),
              z());
          } catch (e) {
            throw (
              o("WALogger")
                .ERROR(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "[LID] setLidMigrationMappings: failed to save mappings",
                    ])),
                )
                .catching(e)
                .sendLogs("lid-migration-failed-to-save-mappings"),
              e
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O() {
      var e = G().state;
      return (
        e ===
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .READY ||
        e ===
          o("WAWebLid1X1ThreadAccountMigrations.flow").LidThreadMigrationStatus
            .IN_PROGRESS
      );
    }
    function B() {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          new (o(
            "WAWebLid11MigrationLifecycleWamEvent",
          ).Lid11MigrationLifecycleWamEvent)({
            migrationStage: o("WAWebWamEnumMigrationStageEnum")
              .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_STARTED,
            mappingCount: o(
              "WAWebLid1x1MigrationPrimaryCache",
            ).lidPnMigrationPrimaryCache.getAllPnLidMappings().length,
          }).commit();
          try {
            if (!O()) {
              o("WALogger")
                .ERROR(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
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
                yield new (o(
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[Lid] 1x1ThreadMigration started",
                ])),
            ),
              V(
                o("WAWebLid1X1ThreadAccountMigrations.flow")
                  .LidThreadMigrationStatus.IN_PROGRESS,
              ));
            var e = G(),
              t = r("WANullthrows")(
                e == null ? void 0 : e.lidMappingsFromPrimaryMigration,
                "got empty mappings while in lid thread migration",
              ),
              a = r("WANullthrows")(
                e == null ? void 0 : e.ts,
                "received empty sync timestamp while in lid thread migration",
              );
            yield o(
              "WAWebLid1x1MigrationPrimaryCache",
            ).lidPnMigrationPrimaryCache.updateCacheIfEmpty(t, a);
            var i = [],
              l = 0,
              s = 0;
            o("WAWebCurrentUser").isEmployee() &&
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
            var u = null;
            if (
              (yield o("WAWebModelStorageUtils")
                .getStorage()
                .lock(
                  ["chat", "message", "user-prefs"],
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        var t = e[0],
                          c = e[1],
                          d = (yield t.all()).filter(function (e) {
                            var t = e.id,
                              n = o("WAWebWidFactory").createWid(t);
                            return n.isRegularUser();
                          }),
                          m = [],
                          p = [],
                          _ = new Set(
                            d.map(function (e) {
                              var t = e.id;
                              return o("WAWebWidFactory").asUserWidOrThrow(
                                o("WAWebWidFactory").createWid(t),
                              );
                            }),
                          ),
                          f = 0,
                          g = d.map(
                            (function () {
                              var e = n(
                                "asyncToGeneratorRuntime",
                              ).asyncToGenerator(function* (e) {
                                var t;
                                if (u == null) {
                                  var n = o("WAWebWidFactory").createWid(e.id),
                                    d = e.lidOriginType,
                                    g = o("WAWebLid1x1MigrationPrimaryCache")
                                      .lidPnMigrationPrimaryCache.getAllPnLidMappings()
                                      .some(function (e) {
                                        var t = e.primaryProvidedLatestLid;
                                        return r("WAWebWid").equals(t, n);
                                      }),
                                    h =
                                      d ===
                                        o("WAWebUsernameTypes").LidOriginType
                                          .PNH_CTWA && g;
                                  if (n.isLid()) {
                                    i.push({
                                      id: e.id,
                                      accountLid: n.toString(),
                                      lidOriginType: h
                                        ? o("WAWebUsernameTypes").LidOriginType
                                            .GENERAL
                                        : d,
                                    });
                                    return;
                                  }
                                  var y = o("WAWebApiContact").getCurrentLid(
                                    o("WAWebWidFactory").asUserWidOrThrow(n),
                                  );
                                  y == null && s++;
                                  var C = y != null ? _.has(y) : !1,
                                    b = o(
                                      "WAWebLid1x1MigrationPrimaryCache",
                                    ).lidPnMigrationPrimaryCache.getLidForPn(n);
                                  r("WAWebWid").equals(y, b) || l++;
                                  var v = o("WALongInt").maybeNumber(
                                    o(
                                      "WAWebLid1x1MigrationPrimaryCache",
                                    ).lidPnMigrationPrimaryCache.getPrimaryMigrationTsSec(),
                                  );
                                  v == null && f++;
                                  var S = yield q({
                                    mostRecentMsgTs: (t = e.t) != null ? t : 0,
                                    isThreadExistsWithChatJid: C,
                                    primarySyncTs: v != null ? v : a,
                                    primaryProvidedLid: b,
                                    latestLocalLid: y,
                                    chat: e,
                                    MessageTable: c,
                                  });
                                  if (S.deleteChat) {
                                    (m.push(e.id),
                                      p.push.apply(p, S.messagesToDelete));
                                    return;
                                  }
                                  if (S.logoutReason != null) {
                                    u = S.logoutReason;
                                    return;
                                  }
                                  i.push({
                                    id: e.id,
                                    accountLid: S.threadLid.toString(),
                                    lidOriginType: e.lidOriginType,
                                  });
                                }
                              });
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })(),
                          );
                        (yield (M || (M = n("Promise"))).all(g),
                          f > 0 &&
                            o("WALogger")
                              .ERROR(
                                k ||
                                  (k = babelHelpers.taggedTemplateLiteralLoose([
                                    "[LID] migrate1x1Chats: primaryMigrationTsSec overflow ",
                                    "",
                                  ])),
                                f,
                              )
                              .sendLogs("lid-migration-primary-ts-too-large"),
                          u == null &&
                            (o(
                              "WAWebDBChatValidation",
                            ).validateAccountLidInChatRows(
                              i,
                              "lid1X1ThreadAccountMigration",
                            ),
                            yield t.bulkCreateOrMerge(i),
                            yield t.bulkRemove(m),
                            yield c.bulkRemove(p),
                            m.length > 0 &&
                              o("WALogger")
                                .LOG(
                                  I ||
                                    (I =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        " chats deleted on migration instead of logging out",
                                      ])),
                                  m.length,
                                )
                                .sendLogs("lid-migration-chats-deleted", {
                                  sampling: 0,
                                }),
                            V(
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
                              T ||
                                (T = babelHelpers.taggedTemplateLiteralLoose([
                                  "[Lid] 1x1ThreadMigration completed successfully",
                                ])),
                            )));
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              u)
            )
              return (
                yield new (o(
                  "WAWebLid11MigrationLifecycleWamEvent",
                ).Lid11MigrationLifecycleWamEvent)({
                  migrationStage: o("WAWebWamEnumMigrationStageEnum")
                    .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
                  stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
                    .STAGE_FAILURE_REASON_ENUM
                    .INITIATED_LOGOUT_BASED_ON_MAPPING,
                }).commitAndWaitForFlush(!0),
                o("WALogger")
                  .ERROR(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "[LID] Failed to migrate 1x1 chats with reason: ",
                        ". Logging out",
                      ])),
                    u,
                  )
                  .sendLogs("lid-migration-failed"),
                yield o("WAAsyncSleep").asyncSleep(5e3),
                o("WAWebSocketLogoutJob").socketLogout(u)
              );
            yield o(
              "WAWebLid1x1MigrationPrimaryCache",
            ).lidPnMigrationPrimaryCache.learnMappingsInBulk();
            var c = r("sumBy")(
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
              migratedThreadCount: i.length,
              companionHasADifferentMappingCount: l,
              chatNotInMappingCount: s,
              latestMappingCount: c,
            }).commit();
          } catch (e) {
            return (
              yield new (o(
                "WAWebLid11MigrationLifecycleWamEvent",
              ).Lid11MigrationLifecycleWamEvent)({
                migrationStage: o("WAWebWamEnumMigrationStageEnum")
                  .MIGRATION_STAGE_ENUM.COMPANION_LOCAL_MIGRATION_FAILED,
                stageFailureReason: o("WAWebWamEnumStageFailureReasonEnum")
                  .STAGE_FAILURE_REASON_ENUM.INTERNAL_ERROR,
              }).commitAndWaitForFlush(!0),
              o("WALogger")
                .ERROR(
                  x ||
                    (x = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                      $ ||
                        ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                var u = yield j(n, t);
                if (u.result)
                  return (
                    o("WALogger").LOG(
                      P ||
                        (P = babelHelpers.taggedTemplateLiteralLoose([
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
                Y(n, s, r, u.messages, u.reason);
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
                    N ||
                      (N = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        U.apply(this, arguments)
      );
    }
    function V(t) {
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "[LID] setLidThreadMigrationProgress: ",
            "",
          ])),
        t,
      );
      var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
          "WALidThreadAccountMigrationStatus",
        ),
        r = babelHelpers.extends({}, n, {
          state: t,
          ts: o("WATimeUtils").unixTime(),
        });
      o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        "WALidThreadAccountMigrationStatus",
        r,
      );
    }
    function H(e, t) {
      return e == null ? "unknown" : t < e ? "true" : "false";
    }
    function G() {
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
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
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[LID] no migration status, will use default",
              ])),
          ),
          o("WAWebUserPrefsIndexedDBStorage")
            .userPrefsIdb.set("WALidThreadAccountMigrationStatus", t)
            .then(function () {
              return o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[LID] default migration status saved",
                  ])),
              );
            }),
          t
        );
      }
      return e;
    }
    function z() {
      if (!O()) {
        o("WALogger").WARN(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] scheduleLid1x1ThreadAccountMigrationJob: not ready",
            ])),
        );
        return;
      }
      o("WAWebOrchestratorNonPersistedJob")
        .createNonPersistedJob(
          "scheduleLid1x1ThreadAccountMigration",
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[LID] refreshing the page to start 1x1 lid thread migration",
                ])),
            ),
              o("WAWebOfflineResumeUtils").refreshWindow());
          }),
          { priority: o("WAJobOrchestratorTypes").JOB_PRIORITY.BEST_EFFORT },
        )
        .fireAndForget();
    }
    function j(e, t) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebWidFactory").createWid(e.id),
            r = yield t.between(
              ["internalId"],
              o("WAWebDBMessageUtils").beginningOfChat(n),
              o("WAWebDBMessageUtils").endOfChat(n),
              { lowerInclusive: !0, upperInclusive: !0, shouldDecrypt: !1 },
            ),
            a = !1;
          return (
            (te(r) || ne(r)) &&
              H(
                o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
                J(r).oldestMessageTs,
              ) === "false" &&
              (a = !0),
            !a && e.createdLocally !== !0
              ? { result: !1, messages: r, reason: "not created locally" }
              : (e.ephemeralDuration != null ||
                    e.ephemeralSettingTimestamp != null) &&
                  !re(e, r)
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
                          reason:
                            "mute_expiration: " + String(e.muteExpiration),
                        }
                      : r.every(X) || ee(r) || a
                        ? { result: !0, messages: r }
                        : { result: !1, messages: r, reason: "has messages" }
          );
        })),
        K.apply(this, arguments)
      );
    }
    function Q(e) {
      var t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(t);
    }
    function X(e) {
      var t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      return (
        o("WAWebMsgGetters").getIsDisappearingModeSystemMessage(t) ||
        o("WAWebMsgGetters").getIsInitialE2ENotification(t)
      );
    }
    function Y(e, t, n, r, a) {
      var i = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
        l = J(r),
        s = l.count,
        u = l.newestMessageTs,
        c = l.oldestMessageTs,
        d = H(i, c),
        m = e.t,
        _ = Z(m),
        f = Z(t),
        g = Z(i),
        h = e.createdLocally === !0,
        y = Z(c),
        C = Z(u),
        b = {
          reason: a,
          messagesCount: s,
          fromHistSync: d,
          primarySyncT: f,
          pairingT: g,
          oldestMessageT: y,
          newestMessageT: C,
          chatT: _,
          threadExist: n,
        };
      r.length <= 4 &&
        (b.messages = r.map(function (e) {
          return { type: e.type, subtype: e.subtype, ack: e.ack };
        }));
      var v = oe(h, r, a);
      o("WALogger")
        .ERROR(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "[LID] no lid available for chat ",
              ", ",
              "",
            ])),
          e.id,
          JSON.stringify(b),
        )
        .sendLogs(v);
    }
    function J(e) {
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
    function Z(e) {
      return e == null
        ? null
        : o("WATimeUtils").toHttpHeaderDate(o("WATimeUtils").castToUnixTime(e));
    }
    function ee(e) {
      return (
        e.every(function (e) {
          return X(e) || e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        }) &&
        e.some(function (e) {
          return e.type === o("WAWebMsgType").MSG_TYPE.CALL_LOG;
        })
      );
    }
    function te(e) {
      return (
        e.every(function (e) {
          return X(e) || e.broadcast;
        }) &&
        e.some(function (e) {
          return e.broadcast;
        })
      );
    }
    function ne(e) {
      return (
        e.every(function (e) {
          return (
            X(e) ||
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
    function re(e, t) {
      return !!(
        e.disappearingModeTrigger ===
          o("WAWebEphemeralityTypes").DisappearingModeTrigger.AccountSettings &&
        t.some(Q)
      );
    }
    function oe(e, t, n) {
      return te(t)
        ? "lid-migration-no-lid-available-broadcast-chat"
        : ee(t)
          ? "lid-migration-no-lid-available-call-chat"
          : ne(t)
            ? "lid-migration-no-lid-available-contact-info-chat"
            : e
              ? n === "has messages"
                ? "lid-migration-no-lid-available-created-locally-has-messages"
                : "lid-migration-no-lid-available-created-locally"
              : "lid-migration-no-lid-available";
    }
    ((l.checkIfMigrationEnabled = w),
      (l.setLidMigrationMappings = A),
      (l.shouldMigrateNow = O),
      (l.migrate1x1Chats = B),
      (l.getResolvedThreadAccountLid = q),
      (l.getLidThreadMigrationStatus = G));
  },
  98,
);
