__d(
  "WAWebSyncdCollectionHandler",
  [
    "Promise",
    "WABase64",
    "WACryptoUtils",
    "WALogger",
    "WALongInt",
    "WANullthrows",
    "WASyncdConst",
    "WASyncdKeyTypes",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebGetCollectionVersion",
    "WAWebGetMissingKey",
    "WAWebGetPendingMutation",
    "WAWebGetSyncAction",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestSyncdSnapshotRecovery",
    "WAWebRunInTransaction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdCollectionHandlerTypesConverter",
    "WAWebSyncdCollectionUtils",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDecryptMutationsWrapper",
    "WAWebSyncdError",
    "WAWebSyncdGetActionHandler",
    "WAWebSyncdHandleMissingKeys",
    "WAWebSyncdMMSDownload",
    "WAWebSyncdMetricCriticalBootstrapStage",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdResolveConflict",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebSyncdValidateMutations",
    "WAWebSyncdValidateServerSyncProtobuf",
    "WAWebSyncdWamAppState",
    "WAWebSyncdWamReportingUtils",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime",
    "compactMap",
    "countWhere",
    "decodeProtobuf",
    "getErrorSafe",
    "gkx",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      M,
      w,
      A,
      F,
      O,
      B,
      W,
      q,
      U,
      V,
      H,
      G,
      z,
      j,
      K,
      Q,
      X,
      Y,
      J,
      Z,
      ee,
      te,
      ne,
      re,
      oe,
      ae,
      ie,
      le,
      se,
      ue,
      ce,
      de,
      me,
      pe,
      _e,
      fe,
      ge,
      he,
      ye,
      Ce,
      be,
      ve,
      Se,
      Re = 0,
      Le = new ArrayBuffer(128);
    function Ee(e) {
      return ke.apply(this, arguments);
    }
    function ke() {
      return (
        (ke = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return (Se || (Se = n("Promise"))).resolve();
          var t = Math.random().toString(36).substr(2, 5),
            r = e.sort(function (e, t) {
              return e.timestamp - t.timestamp;
            });
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start applyIndividualMutations",
              ])),
          );
          var a = o(
              "WAWebSyncdCollectionHandlerTypesConverter",
            ).syncActionsToDecryptedMutation(r),
            i = a.reduce(function (e, t) {
              var n,
                r = (n = e.get(t.collection)) != null ? n : [];
              return (r.push(t), e.set(t.collection, r), e);
            }, new Map()),
            l = Array.from(
              i.keys(),
              (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (r) {
                    o("WALogger").LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " syncd: apply individual mutations for collection ",
                          "",
                        ])),
                      t,
                      r,
                    );
                    var a = i.get(r);
                    if (a !== void 0) {
                      var l = yield Xe(
                          r,
                          a,
                          o("WASyncdConst").SyncDataType.Local,
                          t,
                          null,
                          null,
                        ),
                        s = l.pendingSetMutationsToDrop,
                        u = l.setMutationsToPersist,
                        c = u.map(function (e) {
                          return {
                            actionState: e.actionState,
                            index: e.index,
                            modelId: e.modelId,
                            modelType: e.modelType,
                          };
                        }),
                        d = c;
                      (o("WALogger").LOG(
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd: filter individual mutations for collection ",
                            ", mutations: ",
                            ", mutationsWithoutMacs: ",
                            "",
                          ])),
                        t,
                        r,
                        e.length,
                        c.length,
                      ),
                        (d = c.filter(function (t) {
                          var n = e.find(function (e) {
                            return e.index === t.index;
                          });
                          return n == null
                            ? (o("WALogger")
                                .ERROR(
                                  _ ||
                                    (_ =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "syncd: could not find original individual mutation",
                                      ])),
                                )
                                .sendLogs(
                                  "syncd: could not find original individual mutation",
                                ),
                              !0)
                            : t.actionState !== n.actionState ||
                                t.modelId !== n.modelId ||
                                t.modelType !== n.modelType;
                        })),
                        o("WALogger").LOG(
                          f ||
                            (f = babelHelpers.taggedTemplateLiteralLoose([
                              "[",
                              "] syncd: end apply individual mutations for collection ",
                              "",
                            ])),
                          t,
                          r,
                        ),
                        yield o("WAWebRunInTransaction").runInTransaction(
                          { SyncActionStore: !0, PendingMutationStore: !0 },
                          (function () {
                            var e = n(
                              "asyncToGeneratorRuntime",
                            ).asyncToGenerator(function* (e) {
                              var t = e.PendingMutationStore,
                                n = e.SyncActionStore;
                              (d.length > 0 && (yield n.bulkUpdate(d)),
                                s.length > 0 && (yield t.bulkRemove(s)));
                            });
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })(),
                        ),
                        o("WALogger").LOG(
                          g ||
                            (g = babelHelpers.taggedTemplateLiteralLoose([
                              "",
                              " syncd: end update db after apply individual mutations for collection ",
                              "",
                            ])),
                          t,
                          r,
                        ));
                    }
                  },
                );
                return function (e) {
                  return r.apply(this, arguments);
                };
              })(),
            );
          (yield (Se || (Se = n("Promise"))).all(l),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " syncd: end applyIndividualMutations",
                ])),
              t,
            ));
        })),
        ke.apply(this, arguments)
      );
    }
    function Ie(e, t, n, r) {
      return Te.apply(this, arguments);
    }
    function Te() {
      return (
        (Te = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = e.name,
              l = e.patches,
              s = e.snapshot,
              u = e.syncedEncryptedMutations,
              c = e.syncedPendingMutationsId,
              d = e.version;
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: start applying collection ",
                  "",
                ])),
              t,
              i,
            );
            try {
              var m, p;
              a == null ||
                a.mark("external_mutations_download_start", {
                  patchCount: (m = e.patches) == null ? void 0 : m.length,
                  snapshotSizeBytes:
                    (p = e.snapshot) == null ? void 0 : p.fileSizeBytes,
                });
              var _ = yield Ae(i, l, s, n),
                f = _[0],
                g = _[1];
              a == null ||
                a.mark("external_mutations_download_end", {
                  patchesWithMutationsCount: g == null ? void 0 : g.length,
                  snapshotRecordsCount: f == null ? void 0 : f.records.length,
                });
              var h = performance.now();
              if (f != null)
                (yield We(
                  i,
                  f,
                  g,
                  a,
                  t,
                  o("WAWebSyncdCollectionUtils").isBootstrap(n)
                    ? "bootstrap"
                    : "non_bootstrap",
                ),
                  o("WALogger").LOG(
                    C ||
                      (C = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: ",
                        " snapshot and patches applied successfully",
                      ])),
                    t,
                    i,
                  ));
              else if (g != null) {
                var x = Math.min.apply(
                    Math,
                    g.map(function (e) {
                      return e.version.version;
                    }),
                  ),
                  $ = n != null && x > n + 1 && g.length > 0;
                if ($) {
                  yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                    i,
                    t + " has missing patches",
                  );
                  var P =
                    yield o(
                      "WAWebGetMissingKey",
                    ).getAllMissingKeysInTransaction();
                  throw (
                    o("WALogger").LOG(
                      b ||
                        (b = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " syncd: missing keys: [",
                          "]",
                        ])),
                      t,
                      P.map(function (e) {
                        return e.keyHex + ":" + e.timestamp;
                      }),
                    ),
                    o("WALogger").LOG(
                      v ||
                        (v = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " syncd: has missing patches. collection: ",
                          ", localVersion: ",
                          ",\n           minPatch: ",
                          "",
                        ])),
                      t,
                      i,
                      n,
                      x,
                    ),
                    yield De(i, g[0]),
                    yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(i),
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "",
                            " syncd: has missing patches. collection: ",
                            "",
                          ])),
                        t,
                        i,
                      )
                      .sendLogs("syncd: has missing patches"),
                    o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                      o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                        .SERVER_DID_NOT_SEND_ALL_PATCHES,
                      { collection: i, patchVersion: n != null ? n : 0 },
                    ),
                    new (o("WAWebSyncdError").SyncdFatalError)(
                      "syncd: has missing patches",
                    )
                  );
                }
                (yield He(
                  i,
                  g,
                  a,
                  t,
                  o("WAWebSyncdCollectionUtils").isBootstrap(n)
                    ? "bootstrap"
                    : "non_bootstrap",
                ),
                  o("WALogger").LOG(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: ",
                        " patches applied successfully",
                      ])),
                    t,
                    i,
                  ));
              } else if (d != null) {
                var N = r("countWhere")(u, function (e) {
                    return (
                      e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.SET
                    );
                  }),
                  M = r("countWhere")(u, function (e) {
                    return (
                      e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE
                    );
                  }),
                  w = Array.from(
                    new Set(
                      u.map(function (e) {
                        return e.index;
                      }),
                    ),
                  ).length;
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  i,
                  t +
                    " start upload patch. version: " +
                    d +
                    ". mutation count: " +
                    u.length +
                    ",\n        numSet: " +
                    N +
                    ", numRemove: " +
                    M +
                    ", numUniqueIndex: " +
                    w,
                ),
                  yield $e(i, d, c, u, t));
                var A = yield o(
                  "WAWebSyncdWamReportingUtils",
                ).getShortMdSessionId();
                (u.forEach(function (e) {
                  var t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                    e.collection,
                    e.index,
                  );
                  o("WAWebSyncdWamReportingUtils").syncReportMutationToWam(
                    i,
                    d,
                    !1,
                    o("WABase64").encodeB64UrlSafe(e.indexMac),
                    t,
                    e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE,
                    !0,
                    A,
                    e.patchMac
                      ? o("WABase64").encodeB64UrlSafe(e.patchMac)
                      : void 0,
                  );
                }),
                  yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                    i,
                    t + " end upload patches",
                  ),
                  o("WALogger").LOG(
                    L ||
                      (L = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: ",
                        " v",
                        " uploaded successfully",
                      ])),
                    t,
                    i,
                    d,
                  ));
              } else {
                if (
                  (o("WAWebSyncdCollectionUtils").isBootstrap(n) &&
                    (yield o(
                      "WAWebGetCollectionVersion",
                    ).updateCollectionVersionAndLtHashInTransaction(i, Re, Le)),
                  u.length > 0)
                ) {
                  var F = yield o(
                    "WAWebSyncdWamReportingUtils",
                  ).getShortMdSessionId();
                  o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(
                    i,
                    n != null ? n : 0,
                    new ArrayBuffer(0),
                    u,
                    F,
                    "error: no response from server for collection",
                  );
                }
                o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: sync ",
                      " but there are no updates",
                    ])),
                  i,
                );
              }
              var O = Math.floor(performance.now() - h);
              if (
                (o("WALogger").LOG(
                  k ||
                    (k = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: applyAppStateSyncResponse: finished applying ",
                      " in ",
                      "ms",
                    ])),
                  i,
                  O,
                ),
                (g || f) &&
                  o("WAWebSyncdCollectionUtils").isBootstrap(n) &&
                  !o("WAWebSyncdCollectionUtils").isCriticalCollection(i))
              ) {
                var B = f != null;
                o("WAWebSyncdMetrics").reportSyncdBootstrapDataApplied(
                  i,
                  B
                    ? o("WAWebSyncdMetrics")
                        .SyncdBootstrapDataAppliedSnapshotUsed.SNAPSHOT_USED
                    : o("WAWebSyncdMetrics")
                        .SyncdBootstrapDataAppliedSnapshotUsed
                        .SNAPSHOT_NOT_USED,
                  O,
                );
              }
              return e;
            } catch (e) {
              var W = r("getErrorSafe")(e).message;
              if (
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  i,
                  "error (maybe retryable): " + W,
                ),
                u.length > 0)
              ) {
                var q = yield o(
                  "WAWebSyncdWamReportingUtils",
                ).getShortMdSessionId();
                o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(
                  i,
                  n != null ? n : 0,
                  new ArrayBuffer(0),
                  u,
                  q,
                  "error: " + W,
                );
              }
              return e instanceof o("WAWebSyncdError").SyncdMissingKeyError
                ? (o("WALogger").WARN(
                    I ||
                      (I = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: key error: ",
                        " missing keys",
                      ])),
                    i,
                  ),
                  { name: i, state: o("WASyncdConst").CollectionState.Blocked })
                : e instanceof o("WAWebSyncdError").SyncdFatalError
                  ? (o("WALogger")
                      .ERROR(
                        T ||
                          (T = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: fatal error: ",
                            " throws ",
                            "",
                          ])),
                        i,
                        W,
                      )
                      .sendLogs(
                        "syncd: fatal error: " + String(i) + " throws " + W,
                      ),
                    {
                      name: i,
                      state: o("WASyncdConst").CollectionState.ErrorFatal,
                    })
                  : (o("WALogger")
                      .WARN(
                        D ||
                          (D = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: retryable error: ",
                            " throws ",
                            "",
                          ])),
                        i,
                        W,
                      )
                      .sendLogs(
                        "syncd: retryable error: " + String(i) + " throws " + W,
                      ),
                    {
                      name: i,
                      state: o("WASyncdConst").CollectionState.ErrorRetry,
                    });
            }
          },
        )),
        Te.apply(this, arguments)
      );
    }
    function De(e, t) {
      return xe.apply(this, arguments);
    }
    function xe() {
      return (
        (xe = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o(
                "WAWebSyncdDecryptMutationsWrapper",
              ).tryDecryptPatch(e, t),
              r = n.filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
                );
              }),
              a = o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(
                e,
                r,
              ),
              i = a.length > 0 ? a[0].timestamp : null,
              l =
                i == null
                  ? null
                  : o("WATimeUtils").daysDiff(o("WATimeUtils").unixTimeMs(), i);
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "max timestamp in first patch: " +
                (l != null ? l : "n/a") +
                " days ago",
            );
          } catch (e) {
            o("WALogger").WARN(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: could not log max timestamp: ",
                  "",
                ])),
              e,
            );
          }
        })),
        xe.apply(this, arguments)
      );
    }
    function $e(e, t, n, r, o) {
      return Pe.apply(this, arguments);
    }
    function Pe() {
      return (
        (Pe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            var l,
              s =
                o("WAWebABProps").getABPropConfigValue(
                  "syncd_use_index_for_lthash_lookup",
                ) === !0,
              u = a.map(function (e) {
                return {
                  indexMac: e.indexMac,
                  valueMac: e.valueMac,
                  operation: e.operation,
                  action: e.action || void 0,
                  index: s ? e.index : void 0,
                };
              });
            yield Ne(i, e, a, u);
            var c = yield o("WAWebSyncdAntiTampering").computeLtHash(
                e,
                u,
                i,
                null,
                t,
                o("WAWebSyncdAntiTampering").SyncdPatchDirection.Outgoing,
              ),
              d = c.ltHash,
              m = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
            o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(
              e,
              t,
              d,
              a,
              m,
            );
            var p = o(
              "WAWebSyncdCollectionHandlerTypesConverter",
            ).encryptedUploadMutationsToSyncActions(
              a.filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
                );
              }),
              o("WASyncdConst").SyncActionState.Success,
            );
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "[" +
                i +
                "] set mutation during upload: " +
                p
                  .map(function (e) {
                    return o(
                      "WAWebSyncdAntiTampering",
                    ).indexAndValueMacToString(e.indexMac, e.valueMac);
                  })
                  .join("\n	"),
            );
            var _ = new Set(
                p.map(function (e) {
                  return e.index;
                }),
              ),
              f = a
                .filter(function (e) {
                  return (
                    e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE && !_.has(e.index)
                  );
                })
                .map(function (e) {
                  return e.index;
                });
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "[" + i + "] count removed during upload: " + f.length,
            );
            var g =
              (l = yield o("WAWebGetCollectionVersion")
                .getCollectionVersionInTransaction(e)
                .then(function (e) {
                  return e == null ? void 0 : e.version;
                })) != null
                ? l
                : 0;
            (t !== g + 1 &&
              o("WALogger")
                .ERROR(
                  $ ||
                    ($ = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: _uploadSuccessful: unexpected server version (",
                      ") after patch upload, expected ",
                      "",
                    ])),
                  t,
                  g + 1,
                )
                .sendLogs(
                  "syncd: unexpected server version after patch upload",
                ),
              o("WALogger").LOG(
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: _uploadSuccessful: write to db for ",
                    "",
                  ])),
                i,
                e,
              ),
              yield o("WAWebSyncdAntiTampering").logMacsInSnapshot(
                e,
                i,
                "pre-processing outgoing patch v" + t,
              ),
              yield o("WAWebSyncdAntiTampering").reportCollectionInconsistency(
                e,
                "pre-processing outgoing patch " + t + ".",
                i,
              ),
              yield ze(e, t, a, i));
            var h = null;
            if (
              (yield o("WAWebRunInTransaction").runInTransaction(
                {
                  SyncActionStore: !0,
                  PendingMutationStore: !0,
                  CollectionVersionStore: !0,
                },
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n) {
                      var a = n.CollectionVersionStore,
                        l = n.PendingMutationStore,
                        s = n.SyncActionStore;
                      ((h = yield ot(e, t, "outgoing patch", a, i)),
                        h == null
                          ? (yield s.bulkRemove(f),
                            yield s.bulkSet(p),
                            yield l.bulkRemove(r),
                            yield a.update(e, { version: t, ltHash: d }))
                          : o("WALogger").LOG(
                              N ||
                                (N = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: [",
                                  "] skip applying syncd old version ",
                                  "",
                                ])),
                              i,
                              t,
                            ));
                    },
                  );
                  return function (e) {
                    return a.apply(this, arguments);
                  };
                })(),
              ),
              h != null)
            ) {
              var y = h;
              (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, y),
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
                o("WALogger")
                  .ERROR(
                    M ||
                      (M = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    y,
                  )
                  .sendLogs("syncd: processing old version for " + e));
            }
            o("WALogger").LOG(
              w ||
                (w = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: end _uploadSuccessful for ",
                  "",
                ])),
              i,
              e,
            );
          },
        )),
        Pe.apply(this, arguments)
      );
    }
    function Ne(e, t, n, r) {
      return Me.apply(this, arguments);
    }
    function Me() {
      return (
        (Me = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            try {
              var i = yield (Se || (Se = n("Promise"))).all([
                  (yield Se.all(
                    r
                      .filter(function (e) {
                        return (
                          e.operation ===
                          o("WAWebProtobufsServerSync.pb")
                            .SyncdMutation$SyncdOperation.REMOVE
                        );
                      })
                      .map(function (e) {
                        return o(
                          "WAWebGetSyncAction",
                        ).getSyncActionInTransaction(e.index);
                      }),
                  )).filter(Boolean),
                  (yield Se.all(
                    r
                      .filter(function (e) {
                        return (
                          e.operation ===
                          o("WAWebProtobufsServerSync.pb")
                            .SyncdMutation$SyncdOperation.SET
                        );
                      })
                      .map(function (e) {
                        return o(
                          "WAWebGetSyncAction",
                        ).getSyncActionInTransaction(e.index);
                      }),
                  )).filter(Boolean),
                  (yield Se.all(
                    r
                      .filter(function (e) {
                        return (
                          e.operation ===
                          o("WAWebProtobufsServerSync.pb")
                            .SyncdMutation$SyncdOperation.SET
                        );
                      })
                      .map(function (e) {
                        return o(
                          "WAWebGetSyncAction",
                        ).getSyncActionsByIndexMacsInTransaction([e.indexMac]);
                      }),
                  )).filter(Boolean),
                ]),
                l = i[0],
                s = i[1],
                u = i[2],
                c = null;
              s.length === 1 &&
                u.length === 1 &&
                u[0].length === 1 &&
                (c = s[0].index === u[0][0].index);
              var d =
                "[" +
                e +
                "] patch uploaded with mutations mac for " +
                t +
                ":\n\n      SET: " +
                a
                  .filter(function (e) {
                    return (
                      e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.SET
                    );
                  })
                  .map(function (e) {
                    return o(
                      "WAWebSyncdAntiTampering",
                    ).indexAndValueMacToString(e.indexMac, e.valueMac);
                  })
                  .join("\n	") +
                "\n      REMOVE: " +
                a
                  .filter(function (e) {
                    return (
                      e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE
                    );
                  })
                  .map(function (e) {
                    return o(
                      "WAWebSyncdAntiTampering",
                    ).indexAndValueMacToString(e.indexMac, e.valueMac);
                  })
                  .join("\n	") +
                "\n\n      REMOVE fetch by index: " +
                l
                  .map(function (e) {
                    return we(e);
                  })
                  .join("\n	") +
                "\n      SET fetch by index: " +
                s
                  .map(function (e) {
                    return we(e);
                  })
                  .join("\n	") +
                "\n      SET fetch by mac: " +
                u
                  .map(function (e) {
                    return e.map(function (e) {
                      return we(e);
                    });
                  })
                  .join("\n	") +
                "\n      isSameIndex: " +
                (c == null ? "n/a" : c.toString()) +
                "\n      ";
              (o("WALogger").LOG(
                A ||
                  (A = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " ",
                  ])),
                d,
              ),
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(t, d));
            } catch (e) {
              o("WALogger").LOG(
                F ||
                  (F = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: failed to debug upload: ",
                    "",
                  ])),
                e,
              );
            }
          },
        )),
        Me.apply(this, arguments)
      );
    }
    function we(e) {
      var t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
        e.collection,
        e.index,
      );
      return (
        e.collection +
        ":" +
        o("WAWebSyncdAntiTampering").indexAndValueMacToString(
          e.indexMac,
          e.valueMac,
        ) +
        ":" +
        (t != null ? t : "no-mutation-name")
      );
    }
    function Ae(e, t, n, r) {
      return Fe.apply(this, arguments);
    }
    function Fe() {
      return (
        (Fe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l = (Se || (Se = n("Promise"))).resolve(),
              s = 0,
              u = o("WATimeUtils").unixTimeMs();
            if (a != null) {
              var c,
                d = r(
                  "WAWebSyncdValidateServerSyncProtobuf",
                ).validateExternalBlobReference(e, a);
              ((s += o("WALongInt").numberOrThrowIfTooLarge(
                (c = d.fileSizeBytes) != null ? c : 0,
              )),
                o("WALogger").LOG(
                  O ||
                    (O = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: download snapshot for ",
                      "",
                    ])),
                  e,
                ),
                (l = o("WAWebSyncdMMSDownload").downloadSnapshot(e, d)));
            }
            var m = Se.resolve();
            if (t != null && t.length > 0) {
              var p = t.map(function (t) {
                return r(
                  "WAWebSyncdValidateServerSyncProtobuf",
                ).validatePatchProtobuf(e, t);
              });
              m = (Se || (Se = n("Promise"))).all(
                p.map(
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = t.mutations || [],
                          r = t.externalMutations;
                        if (r) {
                          var a;
                          (o("WALogger").LOG(
                            B ||
                              (B = babelHelpers.taggedTemplateLiteralLoose([
                                "syncd: download patch for ",
                                "",
                              ])),
                            e,
                          ),
                            (n = yield o(
                              "WAWebSyncdMMSDownload",
                            ).downloadExternalPatch(e, r)),
                            o("WALogger").LOG(
                              W ||
                                (W = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: ",
                                  "'s external patch downloaded",
                                ])),
                              e,
                            ),
                            (s += o("WALongInt").numberOrThrowIfTooLarge(
                              (a = r.fileSizeBytes) != null ? a : 0,
                            )));
                        }
                        return {
                          mutations: n,
                          version: t.version,
                          snapshotMac: t.snapshotMac,
                          patchMac: t.patchMac,
                          keyId: t.keyId,
                          exitCode: t.exitCode,
                          deviceIndex: t.deviceIndex,
                          clientDebugData: t.clientDebugData,
                        };
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
              );
            }
            var _, f;
            try {
              var g = yield (Se || (Se = n("Promise"))).all([l, m]);
              ((_ = g[0]),
                (f = g[1]),
                o("WAWebSyncdCollectionUtils").isBootstrap(i) &&
                  o(
                    "WAWebSyncdMetrics",
                  ).reportSyncdBootstrapAppStateDownloadMetric({
                    collection: e,
                    downloadStartTs: u,
                    downloadSize: s,
                    isSuccess: "success",
                  }));
            } catch (t) {
              throw (
                o("WAWebSyncdCollectionUtils").isBootstrap(i) &&
                  o(
                    "WAWebSyncdMetrics",
                  ).reportSyncdBootstrapAppStateDownloadMetric({
                    collection: e,
                    downloadStartTs: u,
                    downloadSize: s,
                    isSuccess: "failure",
                  }),
                t
              );
            }
            return [_, f];
          },
        )),
        Fe.apply(this, arguments)
      );
    }
    function Oe(e, t) {
      var r = (function () {
          var r = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, r) {
              e == null ||
                e.mark("anti_tampering_start", {
                  source: o("WASyncdConst").SyncDataType.Snapshot,
                });
              var a = yield o(
                "WAWebSyncdAntiTampering",
              ).computeLtHashAndValidateSnapshot(n, r, t);
              return (
                e == null ||
                  e.mark("anti_tampering_end", {
                    source: o("WASyncdConst").SyncDataType.Snapshot,
                  }),
                a
              );
            },
          );
          return function (t, n) {
            return r.apply(this, arguments);
          };
        })(),
        a = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              e == null ||
                e.mark("decryption_start", {
                  source: o("WASyncdConst").SyncDataType.Snapshot,
                });
              var r = yield o(
                "WAWebSyncdDecryptMutationsWrapper",
              ).tryDecryptSnapshot(t, n);
              return (
                e == null ||
                  e.mark("decryption_end", {
                    source: o("WASyncdConst").SyncDataType.Snapshot,
                  }),
                r
              );
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })();
      return {
        measuredComputeLtHashAndValidateSnapshot: r,
        measuredTryDecryptSnapshot: a,
      };
    }
    function Be(e) {
      var t = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n, r, a, i) {
              e == null ||
                e.mark("anti_tampering_start", {
                  source: o("WASyncdConst").SyncDataType.Patch,
                });
              var l = yield o(
                "WAWebSyncdAntiTampering",
              ).computeLtHashAndValidatePatch(t, n, r, a, i);
              return (
                e == null ||
                  e.mark("anti_tampering_end", {
                    source: o("WASyncdConst").SyncDataType.Patch,
                  }),
                l
              );
            },
          );
          return function (n, r, o, a, i) {
            return t.apply(this, arguments);
          };
        })(),
        r = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              e == null ||
                e.mark("decryption_start", {
                  source: o("WASyncdConst").SyncDataType.Patch,
                });
              var r = yield o(
                "WAWebSyncdDecryptMutationsWrapper",
              ).tryDecryptPatch(t, n);
              return (
                e == null ||
                  e.mark("decryption_end", {
                    source: o("WASyncdConst").SyncDataType.Patch,
                  }),
                r
              );
            },
          );
          return function (n, r) {
            return t.apply(this, arguments);
          };
        })();
      return {
        measuredComputeLtHashAndValidatePatch: t,
        measuredTryDecryptPatch: r,
      };
    }
    function We(e, t, n, r, o, a) {
      return qe.apply(this, arguments);
    }
    function qe() {
      return (
        (qe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u, c;
            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "[" +
                l +
                "] start _applySnapshotAndPatches. mutation count: " +
                t.records.length +
                ", version: " +
                t.version.version,
            );
            var d = !1,
              m = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
              p = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator(
                e,
                "incoming",
                "snapshot",
                s,
                m,
              );
            ((p.version = t.version.version),
              (p.bundleSize = t.records.length),
              (p.keyId =
                (u = (c = t.keyId) == null ? void 0 : c.id) != null ? u : null),
              (p.wireSnapshotMac = t.mac));
            try {
              var _ = Oe(i, l),
                f = _.measuredComputeLtHashAndValidateSnapshot,
                g = _.measuredTryDecryptSnapshot;
              (i == null ||
                i.mark("apply_start", {
                  source: o("WASyncdConst").SyncDataType.Snapshot,
                  snapshotRecordsCount: t.records.length,
                }),
                o("WALogger").LOG(
                  q ||
                    (q = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: start validate ",
                      "'s snapshot",
                    ])),
                  l,
                  e,
                ));
              var h = new ArrayBuffer(0),
                y = null;
              try {
                var C = yield f(e, t);
                ((h = C.ltHash),
                  (p.computedLtHash = h),
                  (p.computedSnapshotMac = C.computedSnapshotMac));
              } catch (n) {
                var b = o(
                  "WAWebSyncdSnapshotRecoveryGatingUtils",
                ).shouldPreformSnapshotRecovery(e, t.records.length, n);
                if (b.shouldPerformRecovery)
                  ((d = !0),
                    yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                      e,
                      "[" +
                        l +
                        "] attempt to recovery failed validate snapshot mac",
                    ),
                    o("WALogger").LOG(
                      U ||
                        (U = babelHelpers.taggedTemplateLiteralLoose([
                          "[",
                          "] syncd: ",
                          " failed validate snapshot mac, attempt to recovery",
                        ])),
                      l,
                      e,
                    ));
                else throw n;
              }
              o("WALogger").LOG(
                V ||
                  (V = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: collection ",
                    "'s snapshot validated",
                  ])),
                l,
                e,
              );
              var v = [];
              if (!d)
                ((v = yield g(e, t)),
                  o("WALogger").LOG(
                    H ||
                      (H = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: collection ",
                        "'s snapshot decrypted",
                      ])),
                    l,
                    e,
                  ));
              else {
                (o("WALogger").LOG(
                  G ||
                    (G = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd recovery: ",
                      " requesting recovery from primary",
                    ])),
                  l,
                  e,
                ),
                  r("gkx")("26258") ||
                    o("WALogger")
                      .ERROR(
                        z ||
                          (z = babelHelpers.taggedTemplateLiteralLoose([
                            "[",
                            "] syncd recovery: ",
                            " requesting recovery from primary",
                          ])),
                        l,
                        e,
                      )
                      .sendLogs("syncd-recover-fatal"));
                var S = o("WATimeUtils").unixTimeMs(),
                  R = yield o(
                    "WAWebRequestSyncdSnapshotRecovery",
                  ).SyncdSnapshotRecoveryModule.requestRecoveryWithTimeout(e);
                o("WALogger").LOG(
                  j ||
                    (j = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd recovery: ",
                      " recovery request resolved",
                    ])),
                  l,
                  e,
                );
                var L = o("WATimeUtils").unixTimeMs() - S;
                if (R == null)
                  throw (
                    o("WAWebSyncdMetricFatalError").flushDeferredFatalError(L),
                    new (o("WAWebSyncdError").SyncdFatalError)(
                      "unable to validate snapshot mac",
                    )
                  );
                (o("WAWebSyncdMetricFatalError").flushDeferredFatalError(L, !1),
                  (v = R.decryptedMutations),
                  (h = R.collectionLthash),
                  (y = R.version));
              }
              d ||
                ((p.mutations = v),
                v.forEach(function (n) {
                  var r = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                    n.collection,
                    n.index,
                  );
                  o("WAWebSyncdWamReportingUtils").syncReportMutationToWam(
                    e,
                    t.version.version,
                    !0,
                    o("WABase64").encodeB64UrlSafe(n.indexMac),
                    r,
                    n.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE,
                    !1,
                    m,
                    o("WABase64").encodeB64UrlSafe(t.mac),
                  );
                }),
                o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
                  babelHelpers.extends({}, p),
                ),
                yield ze(e, t.version.version, v, l),
                o("WAWebSyncdWamAppState").addMutationCount(t.records.length),
                o(
                  "WAWebSyncdMetricCriticalBootstrapStage",
                ).reportSyncdDecryptedMutations(v),
                o(
                  "WAWebSyncdValidateMutations",
                ).validateNoSameIndexForMultipleMutations(
                  e,
                  v,
                  o("WASyncdConst").SyncDataType.Snapshot,
                ));
              var E = d && y != null ? y : t.version.version,
                k = yield Xe(
                  e,
                  v,
                  o("WASyncdConst").SyncDataType.Snapshot,
                  l,
                  i,
                  E,
                ),
                I = k.pendingSetMutationsToDrop,
                T = k.setMutationsToPersist;
              (o("WALogger").LOG(
                K ||
                  (K = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: processed ",
                    " mutations in snapshot of collection ",
                    " v",
                    "",
                  ])),
                l,
                v.length,
                e,
                E,
              ),
                o("WALogger").LOG(
                  Q ||
                    (Q = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: collection ",
                      "'s snapshot v",
                      " applied",
                    ])),
                  l,
                  e,
                  E,
                ));
              var D = null;
              if (
                (i == null ||
                  i.mark("update_DB_start", {
                    source: o("WASyncdConst").SyncDataType.Snapshot,
                    setMutationsToPersistCount: T.length,
                    pendingMutationsToDropCount: I.length,
                  }),
                yield o("WAWebRunInTransaction").runInTransaction(
                  {
                    SyncActionStore: !0,
                    PendingMutationStore: !0,
                    CollectionVersionStore: !0,
                  },
                  (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (t) {
                        var n = t.CollectionVersionStore,
                          r = t.PendingMutationStore,
                          a = t.SyncActionStore;
                        ((D = yield ot(e, E, "snapshot", n, l)),
                          D == null
                            ? (yield a.bulkSet(T),
                              yield r.bulkRemove(I),
                              yield n.update(e, { version: E, ltHash: h }))
                            : o("WALogger").LOG(
                                X ||
                                  (X = babelHelpers.taggedTemplateLiteralLoose([
                                    "syncd: [",
                                    "] skip applying syncd old version ",
                                    "",
                                  ])),
                                l,
                                E,
                              ));
                      },
                    );
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })(),
                ),
                i == null ||
                  i.mark("update_DB_end", {
                    source: o("WASyncdConst").SyncDataType.Snapshot,
                  }),
                D != null)
              ) {
                var x = D;
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, x),
                  yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
                  o("WALogger")
                    .ERROR(
                      Y ||
                        (Y = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      x,
                    )
                    .sendLogs("syncd: processing old version for " + e));
              }
              (o("WALogger").LOG(
                J ||
                  (J = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: completed applying snapshot for ",
                    "",
                  ])),
                l,
                e,
              ),
                i == null ||
                  i.mark("apply_end", {
                    source: o("WASyncdConst").SyncDataType.Snapshot,
                    decryptedMutationsCount: v.length,
                  }));
            } catch (n) {
              throw (
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "exception " + r("getErrorSafe")(n).message,
                ),
                o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
                  babelHelpers.extends({}, p, {
                    errorMessage: r("getErrorSafe")(n).message,
                  }),
                ),
                n instanceof o("WAWebSyncdError").SyncdMissingKeyError &&
                  (yield o(
                    "WAWebSyncdHandleMissingKeys",
                  ).handleMissingKeysInSnapshot(e, t)),
                n
              );
            }
            (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "[" + l + "] done applying snapshot",
            ),
              a &&
                !d &&
                (i == null ||
                  i.mark("apply_start", {
                    source: o("WASyncdConst").SyncDataType.Patch,
                    patchCount: a.length,
                  }),
                yield He(e, a, i, l, s),
                i == null ||
                  i.mark("apply_end", {
                    source: o("WASyncdConst").SyncDataType.Patch,
                    patchCount: a.length,
                  })));
          },
        )),
        qe.apply(this, arguments)
      );
    }
    function Ue(e) {
      return Ve.apply(this, arguments);
    }
    function Ve() {
      return (
        (Ve = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebABProps").getABPropConfigValue(
            "web_syncd_max_mutations_to_process_during_resume",
          );
          if (e > t) {
            var n = Date.now();
            (o("WALogger").LOG(
              Z ||
                (Z = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: patches have ",
                  " mutations, wait for UI unblock",
                ])),
              e,
            ),
              yield o(
                "WAWebSyncdDbCallbacksApi",
              ).handleSyncDelayApplyingPatchUntilUIUnblocks(),
              o("WALogger").LOG(
                ee ||
                  (ee = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: UI is unblocked, waited for ",
                    "ms",
                  ])),
                Date.now() - n,
              ));
          }
        })),
        Ve.apply(this, arguments)
      );
    }
    function He(e, t, n, r, o) {
      return Ge.apply(this, arguments);
    }
    function Ge() {
      return (
        (Ge = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l) {
            var s = t.length === 0 ? "n/a" : t[t.length - 1].version.version;
            if (
              (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "[" +
                  i +
                  "] start apply patches. count: " +
                  t.length +
                  ", last patch version: " +
                  s,
              ),
              t.length === 0)
            )
              return (
                o("WALogger").LOG(
                  te ||
                    (te = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: no patches for collection ",
                      "",
                    ])),
                  i,
                  e,
                ),
                (Se || (Se = n("Promise"))).resolve()
              );
            (o(
              "WAWebSyncdValidateMutations",
            ).validateNoDuplicatePatchVersionInCollection(e, t),
              t.sort(function (e, t) {
                return e.version.version > t.version.version ? 1 : -1;
              }));
            try {
              var u = r("sumBy")(t, function (e) {
                return e.mutations.length;
              });
              yield Ue(u);
              for (var c = 0; c < t.length; c++) {
                if (c <= 4 || c % 10 === 0) {
                  var d;
                  yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                    e,
                    "[" +
                      i +
                      "] start applying " +
                      e +
                      " patch " +
                      t[c].version.version +
                      " with " +
                      t[c].mutations.length +
                      " mutations from device " +
                      ((d = t[c].deviceIndex) != null ? d : "n/a"),
                  );
                }
                (yield Ke(e, t[c], a, c <= 1, l, i),
                  (c <= 4 || c % 10 === 0) &&
                    (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                      e,
                      "[" +
                        i +
                        "] finished applying patch " +
                        t[c].version.version +
                        " with " +
                        t[c].mutations.length +
                        " mutations",
                    )));
              }
              yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "[" +
                  i +
                  "] after apply patches for " +
                  e +
                  " (last patch: v" +
                  s +
                  " total mutations: " +
                  u +
                  ")",
              );
            } catch (n) {
              throw (
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "exception" + r("getErrorSafe")(n).message,
                ),
                n instanceof o("WAWebSyncdError").SyncdMissingKeyError &&
                  (yield o(
                    "WAWebSyncdHandleMissingKeys",
                  ).handleMissingKeysInPatches(e, t)),
                n
              );
            }
          },
        )),
        Ge.apply(this, arguments)
      );
    }
    function ze(e, t, n, r) {
      return je.apply(this, arguments);
    }
    function je() {
      return (
        (je = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (
              e === o("WASyncdConst").CollectionName.CriticalBlock ||
              e === o("WASyncdConst").CollectionName.RegularLow
            ) {
              var a = n
                  .map(function (e) {
                    var t =
                        e.operation ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.SET
                          ? "SET"
                          : "REMOVE",
                      n = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                        e.collection,
                        e.index,
                      );
                    return (
                      t +
                      " " +
                      (n != null ? n : "no-mutation-name") +
                      " index mac: " +
                      o("WAWebSyncdCryptoUtils")
                        .arrayBufferToHexPadded(e.indexMac)
                        .slice(-16) +
                      ", key id: " +
                      o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                        o("WASyncdKeyTypes").fromSyncKeyId(e.keyId),
                      )
                    );
                  })
                  .join("  || "),
                i =
                  "mutations in patch for collection " +
                  e +
                  " version " +
                  t +
                  ": " +
                  a;
              (o("WALogger").LOG(
                ne ||
                  (ne = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: ",
                    "",
                  ])),
                r,
                i,
              ),
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, i));
            }
          },
        )),
        je.apply(this, arguments)
      );
    }
    function Ke(e, t, n, r, o, a) {
      return Qe.apply(this, arguments);
    }
    function Qe() {
      return (
        (Qe = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i, l, s) {
            var u, c;
            i === void 0 && (i = !1);
            var d =
              o("WAWebABProps").getABPropConfigValue(
                "enable_syncd_debug_data_in_patch",
              ) ||
              e === o("WASyncdConst").CollectionName.CriticalBlock ||
              e === o("WASyncdConst").CollectionName.RegularLow ||
              o("WAWebCurrentUser").isEmployee();
            if (d) {
              var m, p, _, f;
              (yield o("WAWebSyncdAntiTampering").logMacsInSnapshot(
                e,
                s,
                "pre-processing incoming patch " + t.version.version + ".",
              ),
                yield o(
                  "WAWebSyncdAntiTampering",
                ).reportCollectionInconsistency(
                  e,
                  "[" +
                    s +
                    "] pre-processing incoming patch " +
                    t.version.version +
                    ".\n      incoming current lthash: " +
                    o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(
                        (m =
                          t == null || (p = t.clientDebugData) == null
                            ? void 0
                            : p.currentLthash) != null
                          ? m
                          : new ArrayBuffer(0),
                      )
                      .slice(-16) +
                    ",\n      incoming new lthash: " +
                    o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(
                        (_ =
                          t == null || (f = t.clientDebugData) == null
                            ? void 0
                            : f.newLthash) != null
                          ? _
                          : new ArrayBuffer(0),
                      )
                      .slice(-16),
                  s,
                  250,
                ));
            }
            if (t.exitCode) {
              var g,
                h = t.exitCode.code;
              yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "patch exit code " + (h != null ? h : ""),
              );
              e: {
                if (h === 100) {
                  o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                    o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                      .TERMINAL_PATCH_MISSING_DATA,
                    { collection: e },
                  );
                  break e;
                }
                if (h === 101) {
                  o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                    o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                      .TERMINAL_PATCH_DESERIALIZATION_ERROR,
                    { collection: e },
                  );
                  break e;
                }
                {
                  o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                    o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                      .TERMINAL_PATCH_UNKNOWN,
                    { collection: e },
                  );
                  break e;
                }
              }
              throw new (o("WAWebSyncdError").SyncdFatalError)(
                "received terminal patch with exit code:  " +
                  String(h) +
                  " text: " +
                  String((g = t.exitCode) == null ? void 0 : g.text) +
                  "  ",
              );
            }
            yield o("WAWebSyncdDbCallbacksApi").handleSyncBeforeApplyPatch(t);
            var y = r("countWhere")(t.mutations, function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
                );
              }),
              C = t.mutations.length - y;
            (o("WALogger").LOG(
              re ||
                (re = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: applying patch ",
                  " v",
                  " from device ",
                  "\n    SET count: ",
                  "\n    REMOVE count: ",
                  "",
                ])),
              s,
              e,
              t.version.version,
              t.deviceIndex,
              y,
              C,
            ),
              y === 0 &&
                C === 0 &&
                o("WALogger")
                  .WARN(
                    oe ||
                      (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: ",
                        ": empty patch found",
                      ])),
                    e,
                  )
                  .sendLogs("syncd: " + e + ": empty patch found"));
            var b = Be(a),
              v = b.measuredComputeLtHashAndValidatePatch,
              S = b.measuredTryDecryptPatch,
              R = yield o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
              L = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator(
                e,
                "incoming",
                "patch",
                l,
                R,
              );
            ((L.version = t.version.version),
              (L.bundleSize = t.mutations.length),
              (L.keyId =
                (u = (c = t.keyId) == null ? void 0 : c.id) != null ? u : null),
              (L.wireSnapshotMac = t.snapshotMac),
              (L.wirePatchMac = t.patchMac));
            var E = yield S(e, t);
            (o(
              "WAWebSyncdMetricCriticalBootstrapStage",
            ).reportSyncdDecryptedMutations(E),
              (L.mutations = E),
              E.forEach(function (n) {
                var r = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                  n.collection,
                  n.index,
                );
                o("WAWebSyncdWamReportingUtils").syncReportMutationToWam(
                  e,
                  t.version.version,
                  !0,
                  o("WABase64").encodeB64UrlSafe(n.indexMac),
                  r,
                  n.operation ===
                    o("WAWebProtobufsServerSync.pb")
                      .SyncdMutation$SyncdOperation.REMOVE,
                  !0,
                  R,
                  t.patchMac
                    ? o("WABase64").encodeB64UrlSafe(t.patchMac)
                    : void 0,
                );
              }),
              yield ze(e, t.version.version, E, s),
              i &&
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "[" + s + "] after decrypt patch " + t.version.version,
                )));
            var k;
            try {
              var I = yield v(e, t, s, W, E);
              ((k = I.ltHash),
                (L.computedLtHash = k),
                (L.computedPatchMac = I.computedPatchMac),
                (L.computedSnapshotMac = I.computedSnapshotMacAfterPatch));
            } catch (e) {
              throw (
                o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
                  babelHelpers.extends({}, L, {
                    errorMessage: r("getErrorSafe")(e).message,
                  }),
                ),
                e
              );
            }
            (o("WALogger").LOG(
              ae ||
                (ae = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: completed computeLtHashAndValidatePatch for ",
                  " v",
                  "",
                ])),
              s,
              e,
              t.version.version,
            ),
              o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
                babelHelpers.extends({}, L),
              ),
              o("WAWebSyncdWamAppState").addMutationCount(E.length),
              o(
                "WAWebSyncdValidateMutations",
              ).validateNoSameIndexForMultipleMutations(
                e,
                E,
                o("WASyncdConst").SyncDataType.Patch,
              ));
            var T = tt(E),
              D = T.filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE
                );
              }),
              x = yield Je(e, D, s),
              $ = x.pendingRemoveMutationsToDrop;
            o("WALogger").LOG(
              ie ||
                (ie = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: completed _applyRemoveMutations for ",
                  " v",
                  "",
                ])),
              s,
              e,
              t.version.version,
            );
            var P = T.filter(function (e) {
                return (
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
                );
              }),
              N = yield Xe(
                e,
                P,
                o("WASyncdConst").SyncDataType.Patch,
                s,
                a,
                t.version.version,
                i,
              ),
              M = N.pendingSetMutationsToDrop,
              w = N.setMutationsToPersist;
            o("WALogger").LOG(
              le ||
                (le = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: processed ",
                  " mutations in patch version ",
                  " of collection ",
                  "",
                ])),
              s,
              E.length,
              t.version.version,
              e,
            );
            var A = $.concat(M);
            a == null ||
              a.mark("update_DB_start", {
                source: o("WASyncdConst").SyncDataType.Patch,
                setMutationsToPersistCount: w.length,
                pendingMutationsToDropCount: A.length,
              });
            var F = t.version.version,
              O = null;
            if (
              (yield o("WAWebRunInTransaction").runInTransaction(
                {
                  SyncActionStore: !0,
                  PendingMutationStore: !0,
                  CollectionVersionStore: !0,
                },
                (function () {
                  var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (t) {
                      var n = t.CollectionVersionStore,
                        r = t.PendingMutationStore,
                        a = t.SyncActionStore;
                      ((O = yield ot(e, F, "incoming patch", n, s)),
                        O == null
                          ? (yield a.bulkRemove(
                              D.map(function (e) {
                                return e.index;
                              }),
                            ),
                            yield a.bulkSet(w),
                            yield r.bulkRemove(A),
                            yield n.update(e, { version: F, ltHash: k }))
                          : o("WALogger").LOG(
                              se ||
                                (se = babelHelpers.taggedTemplateLiteralLoose([
                                  "syncd: [",
                                  "] skip applying syncd old version ",
                                  "",
                                ])),
                              s,
                              F,
                            ));
                    },
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })(),
              ),
              O != null)
            ) {
              var B = O;
              (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, B),
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
                o("WALogger")
                  .ERROR(
                    ue ||
                      (ue = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                    B,
                  )
                  .sendLogs("syncd: processing old version for " + e));
            }
            ((d ||
              e === o("WASyncdConst").CollectionName.RegularLow ||
              o("WAWebCurrentUser").isEmployee()) &&
              (yield o("WAWebSyncdAntiTampering").logMacsInSnapshot(
                e,
                s,
                "post-processing incoming patch " + t.version.version + ".",
              )),
              a == null ||
                a.mark("update_DB_end", {
                  source: o("WASyncdConst").SyncDataType.Patch,
                }),
              o("WALogger").LOG(
                ce ||
                  (ce = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: completed final transaction in _applyPatch for ",
                    " v",
                    "",
                  ])),
                s,
                e,
                t.version.version,
              ),
              i &&
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "[" +
                    s +
                    "] after final transaction for patch " +
                    t.version.version +
                    ". new lthash: " +
                    o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(k)
                      .slice(-16),
                )));
            function W(e) {
              return q.apply(this, arguments);
            }
            function q() {
              return (
                (q = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (t) {
                    var n;
                    return (n = (yield o(
                      "WAWebGetSyncAction",
                    ).getSyncActionsByCollectionsInTransaction([e]))
                      .filter(function (e) {
                        return o("WACryptoUtils").arrayBuffersEqual(
                          t,
                          e.indexMac,
                        );
                      })
                      .pop()) == null
                      ? void 0
                      : n.valueMac;
                  },
                )),
                q.apply(this, arguments)
              );
            }
          },
        )),
        Qe.apply(this, arguments)
      );
    }
    function Xe(e, t, n, r, o, a, i) {
      return Ye.apply(this, arguments);
    }
    function Ye() {
      return (
        (Ye = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a, i, l, s) {
            (s === void 0 && (s = !1),
              o(
                "WAWebSyncdCriticalBootstrapProcessingApi",
              ).logCriticalBootstrapStageIfNecessary(
                o("WAWebWamEnumBootstrapAppStateDataStageCode")
                  .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ABOUT_TO_APPLY_MUTATIONS,
              ));
            var u =
                n === o("WASyncdConst").SyncDataType.Local
                  ? " (individual mutations)"
                  : "",
              c = [],
              d = o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(
                e,
                t,
              ),
              m = nt(e, d),
              p = m.supportedMutations,
              _ = m.unsupportedMutations;
            (_.forEach(function (e) {
              return c.push(
                o(
                  "WAWebSyncdCollectionHandlerTypesConverter",
                ).setMutationToSyncAction(
                  e,
                  o("WASyncdConst").SyncActionState.Unsupported,
                ),
              );
            }),
              i == null ||
                i.mark("conflict_resolution_start", {
                  source: n,
                  collectionName: e,
                  count: p.length,
                }),
              o("WALogger").LOG(
                de ||
                  (de = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: before resolveConflict for ",
                    " v",
                    "",
                  ])),
                a,
                e,
                l,
              ));
            var f = yield o("WAWebSyncdResolveConflict").resolveConflict(e, p),
              g = f.pendingSetMutationsToDrop,
              h = f.remoteMutationsToApply;
            o("WALogger").LOG(
              me ||
                (me = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: after resolveConflict for ",
                  " v",
                  "",
                ])),
              a,
              e,
              l,
            );
            var y = p.filter(function (e) {
              return !h.includes(e);
            });
            (i == null ||
              i.mark("conflict_resolution_end", {
                source: n,
                collectionName: e,
                apply: h.length,
                drop: y.length,
              }),
              y.forEach(function (e) {
                return c.push(
                  o(
                    "WAWebSyncdCollectionHandlerTypesConverter",
                  ).setMutationToSyncAction(
                    e,
                    o("WASyncdConst").SyncActionState.Skipped,
                    e.actionName,
                  ),
                );
              }),
              i == null ||
                i.mark("apply_set_mutations_start", {
                  source: n,
                  collectionName: e,
                  count: h.length,
                }));
            for (var C = rt(h), b = null, v = 0; v < C.length; v++) {
              var S = s && v <= 1,
                R = C[v][0].actionHandler,
                L = C[v].map(function (e) {
                  var t;
                  return (
                    e.binarySyncData
                      ? (t = r("WANullthrows")(
                          o("decodeProtobuf").decodeProtobuf(
                            o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                            e.binarySyncData,
                          ).value,
                        ))
                      : (t = o("decodeProtobuf").decodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                          e.binarySyncAction,
                        )),
                    (b == null || b < e.timestamp) && (b = e.timestamp),
                    {
                      operation: "set",
                      indexParts: e.indexArr,
                      value: t,
                      timestamp: e.timestamp,
                    }
                  );
                });
              S &&
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  a +
                    " after deserialize. mutationsToApply length: " +
                    L.length,
                ));
              var E = [],
                k = !1;
              try {
                (o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    pe ||
                      (pe = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: applying mutations ",
                        " for handler ",
                        " ",
                        "",
                      ])),
                    JSON.stringify(L.slice(0, 3), null, 2),
                    R.getAction(),
                    u,
                  ),
                  o("WALogger").LOG(
                    _e ||
                      (_e = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: before apply mutation batch for ",
                        " v",
                        ", mutations count: ",
                        " ",
                        "",
                      ])),
                    a,
                    e,
                    l,
                    L.length,
                    u,
                  ),
                  (E = yield R.applyMutations(
                    L,
                    {
                      setMutationsPendingToPersist: c,
                      allSupportedSetMutations: h,
                    },
                    S,
                  )));
                var I = o("WAWebCurrentUser").isEmployee()
                  ? R.getAction()
                  : "-";
                (o("WALogger").LOG(
                  fe ||
                    (fe = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: after apply mutation batch for ",
                      " v",
                      ", mutations count: ",
                      ", handler: ",
                      " ",
                      "",
                    ])),
                  a,
                  e,
                  l,
                  L.length,
                  I,
                  u,
                ),
                  S &&
                    (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                      e,
                      "[" +
                        a +
                        "] after apply group " +
                        v +
                        "/" +
                        C.length +
                        " for " +
                        e +
                        " " +
                        (l != null ? l : "") +
                        ". result length: " +
                        E.length,
                    )));
              } catch (t) {
                if (
                  t instanceof o("WAWebSyncdError").SyncdFatalError ||
                  e === o("WASyncdConst").CollectionName.CriticalBlock
                )
                  throw t;
                ((k = !0),
                  o("WALogger").WARN(
                    ge ||
                      (ge = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: catching error during _applySetMutations: ",
                        "",
                      ])),
                    t,
                  ));
              }
              o("WALogger").LOG(
                he ||
                  (he = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: after apply mutation batch for ",
                    " ",
                    "",
                  ])),
                a,
                e,
                u,
              );
              for (var T = 0; T < C[v].length; T++) {
                var D,
                  x,
                  $ = k
                    ? o("WASyncdConst").SyncActionState.Failed
                    : E[T].actionState;
                c.push(
                  o(
                    "WAWebSyncdCollectionHandlerTypesConverter",
                  ).setMutationToSyncAction(
                    C[v][T],
                    $,
                    C[v][T].actionName,
                    k || (D = E[T].orphanModel) == null ? void 0 : D.modelId,
                    k || (x = E[T].orphanModel) == null ? void 0 : x.modelType,
                  ),
                );
              }
            }
            var P = b,
              N =
                P == null
                  ? null
                  : o("WATimeUtils").daysDiff(o("WATimeUtils").unixTimeMs(), P);
            (o("WALogger").LOG(
              ye ||
                (ye = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: max timestamp from recent patch: ",
                  " days agp",
                ])),
              N != null ? N : "n/a",
            ),
              s &&
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  a +
                    " max timestamp from recent patch: " +
                    (N != null ? N : "n/a") +
                    " days ago",
                )));
            var M = c.reduce(function (e, t) {
              var n = t.actionState;
              return (e[n] == null && (e[n] = 0), e[n]++, e);
            }, {});
            return (
              i == null ||
                i.mark(
                  "apply_set_mutations_end",
                  babelHelpers.extends(
                    { source: n, collectionName: e, count: h.length },
                    M,
                  ),
                ),
              o(
                "WAWebSyncdCriticalBootstrapProcessingApi",
              ).logCriticalBootstrapStageIfNecessary(
                o("WAWebWamEnumBootstrapAppStateDataStageCode")
                  .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.APPLIED_MUTATIONS,
              ),
              e === o("WASyncdConst").CollectionName.CriticalBlock &&
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  a +
                    " apply states for " +
                    e +
                    " v" +
                    (l != null ? l : "n/a") +
                    ": " +
                    c
                      .map(function (e) {
                        return e.actionState;
                      })
                      .join(", "),
                )),
              o("WALogger").LOG(
                Ce ||
                  (Ce = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " syncd: completed apply set mutations for ",
                    " ",
                    "",
                  ])),
                a,
                e,
                u,
              ),
              { setMutationsToPersist: c, pendingSetMutationsToDrop: g }
            );
          },
        )),
        Ye.apply(this, arguments)
      );
    }
    function Je(e, t, n) {
      return Ze.apply(this, arguments);
    }
    function Ze() {
      return (
        (Ze = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n) {
            var a = et(t),
              i = a.supportedMutations,
              l = rt(i),
              s = new Set(
                t.map(function (e) {
                  return e.index;
                }),
              ),
              u = (yield o(
                "WAWebGetPendingMutation",
              ).getSyncPendingMutationsByCollectionInTransaction(e)).filter(
                function (e) {
                  return (
                    e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE && s.has(e.index)
                  );
                },
              ),
              c = r("compactMap")(u, function (e) {
                return e.id;
              });
            o("WALogger").LOG(
              be ||
                (be = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " syncd: before apply remove mutations for ",
                  "",
                ])),
              n,
              e,
            );
            for (var d = 0; d < l.length; d++) {
              var m = l[d][0].actionHandler;
              yield m.applyMutations(
                l[d].map(function (t) {
                  return { operation: "remove", indexParts: it(e, t.index) };
                }),
                {
                  setMutationsPendingToPersist: [],
                  allSupportedSetMutations: [],
                },
              );
            }
            return (
              o("WALogger").LOG(
                ve ||
                  (ve = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " syncd: after apply remove mutations for ",
                    "",
                  ])),
                n,
                e,
              ),
              yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                n +
                  " after apply remove mutations for " +
                  e +
                  ". mutation count: " +
                  t.length,
              ),
              { pendingRemoveMutationsToDrop: c }
            );
          },
        )),
        Ze.apply(this, arguments)
      );
    }
    function et(t) {
      var n = [],
        r = 0,
        a = [],
        i = 0,
        l = t.map(function (e) {
          if (e.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion())
            return { unsupported: e };
          var t = it(e.collection, e.index),
            l = o("WASyncdConst").Actions.cast(t[0]);
          if (!l)
            return (r++, n.length < 3 && n.push(t[0]), { unsupported: e });
          var s = o("WAWebSyncdGetActionHandler").getActionHandler(l);
          if (!s) return (i++, a.length < 3 && a.push(l), { unsupported: e });
          var u = {
            collection: e.collection,
            index: e.index,
            indexMac: e.indexMac,
            keyId: e.keyId,
            binarySyncData: e.binarySyncData,
            valueMac: e.valueMac,
            version: e.version,
            indexArr: t,
            actionName: l,
            actionHandler: s,
          };
          return { supported: u };
        });
      (r > 0 &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: ",
              " invalid actions => ",
              "",
            ])),
          r,
          n,
        ),
        i > 0 &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no handler for ",
                " actions => ",
                "",
              ])),
            i,
            a,
          ));
      var u = [],
        c = [];
      return (
        l.map(function (e) {
          var t = e.supported,
            n = e.unsupported;
          t != null ? u.push(t) : n != null && c.push(n);
        }),
        { supportedMutations: u, unsupportedMutations: c }
      );
    }
    function tt(e) {
      var t = e.filter(function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
          );
        }),
        n = new Set(
          t.map(function (e) {
            return e.index;
          }),
        ),
        r = e.filter(function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          );
        });
      return (
        r.forEach(function (e) {
          n.has(e.index) || t.push(e);
        }),
        t
      );
    }
    function nt(e, t) {
      var n = [],
        r = 0,
        a = [],
        i = 0,
        l = t.map(function (t) {
          if (t.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion())
            return { unsupported: t };
          var l = it(e, t.index),
            s = o("WASyncdConst").Actions.cast(l[0]);
          if (!s)
            return (r++, n.length < 3 && n.push(l[0]), { unsupported: t });
          var u = o("WAWebSyncdGetActionHandler").getActionHandler(s);
          return u
            ? {
                supported: {
                  collection: t.collection,
                  index: t.index,
                  indexMac: t.indexMac,
                  keyId: t.keyId,
                  timestamp: t.timestamp,
                  binarySyncData: t.binarySyncData,
                  valueMac: t.valueMac,
                  version: t.version,
                  indexArr: l,
                  actionName: s,
                  actionHandler: u,
                },
              }
            : (i++, a.length < 3 && a.push(s), { unsupported: t });
        });
      (r > 0 &&
        o("WALogger").WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: ",
              " invalid actions => ",
              "",
            ])),
          r,
          n,
        ),
        i > 0 &&
          o("WALogger").WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no handler for ",
                " actions => ",
                "",
              ])),
            i,
            a,
          ));
      var s = [],
        d = [];
      return (
        l.map(function (e) {
          var t = e.supported,
            n = e.unsupported;
          t != null ? s.push(t) : n != null && d.push(n);
        }),
        { supportedMutations: s, unsupportedMutations: d }
      );
    }
    function rt(e) {
      return e.reduce(function (e, t) {
        return (
          e.length !== 0 && t.actionName === e[e.length - 1][0].actionName
            ? e[e.length - 1].push(t)
            : e.push([t]),
          e
        );
      }, []);
    }
    function ot(e, t, n, r, o) {
      return at.apply(this, arguments);
    }
    function at() {
      return (
        (at = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            var a = yield r.get(e);
            if ((a == null ? void 0 : a.version) != null && a.version >= t)
              return (
                "[" +
                o +
                "] syncd: processing old version for " +
                e +
                ". processing: " +
                t +
                " already persisted: " +
                a.version +
                ". context: " +
                n
              );
          },
        )),
        at.apply(this, arguments)
      );
    }
    function it(e, t) {
      var n = o("WAWebSyncdActionUtils").parseIndex(e, t);
      if (n == null)
        throw (
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .INVALID_ACTION_INDEX,
            { collection: e },
          ),
          new (o("WAWebSyncdError").SyncdFatalError)("invalid action index")
        );
      return n;
    }
    ((l.applyIndividualMutations = Ee), (l.applyAppStateSyncResponse = Ie));
  },
  98,
);
