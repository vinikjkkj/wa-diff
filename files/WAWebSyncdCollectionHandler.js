__d(
  "WAWebSyncdCollectionHandler",
  [
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
      Se = 0,
      Re = new ArrayBuffer(128);
    async function Le(t) {
      if (t.length === 0) return Promise.resolve();
      var n = Math.random().toString(36).substr(2, 5),
        r = t.sort(function (e, t) {
          return e.timestamp - t.timestamp;
        });
      o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
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
        l = Array.from(i.keys(), async function (e) {
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: apply individual mutations for collection ",
                "",
              ])),
            n,
            e,
          );
          var r = i.get(e);
          if (r !== void 0) {
            var a = await Oe(
                e,
                r,
                o("WASyncdConst").SyncDataType.Local,
                n,
                null,
                null,
              ),
              l = a.pendingSetMutationsToDrop,
              p = a.setMutationsToPersist,
              _ = p.map(function (e) {
                return {
                  actionState: e.actionState,
                  index: e.index,
                  modelId: e.modelId,
                  modelType: e.modelType,
                };
              }),
              f = _;
            (o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: filter individual mutations for collection ",
                  ", mutations: ",
                  ", mutationsWithoutMacs: ",
                  "",
                ])),
              n,
              e,
              t.length,
              _.length,
            ),
              (f = _.filter(function (e) {
                var n = t.find(function (t) {
                  return t.index === e.index;
                });
                return n == null
                  ? (o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: could not find original individual mutation",
                          ])),
                      )
                      .sendLogs(
                        "syncd: could not find original individual mutation",
                      ),
                    !0)
                  : e.actionState !== n.actionState ||
                      e.modelId !== n.modelId ||
                      e.modelType !== n.modelType;
              })),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: end apply individual mutations for collection ",
                    "",
                  ])),
                n,
                e,
              ),
              await o("WAWebRunInTransaction").runInTransaction(
                { SyncActionStore: !0, PendingMutationStore: !0 },
                async function (e) {
                  var t = e.PendingMutationStore,
                    n = e.SyncActionStore;
                  (f.length > 0 && (await n.bulkUpdate(f)),
                    l.length > 0 && (await t.bulkRemove(l)));
                },
              ),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " syncd: end update db after apply individual mutations for collection ",
                    "",
                  ])),
                n,
                e,
              ));
          }
        });
      (await Promise.all(l),
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " syncd: end applyIndividualMutations",
            ])),
          n,
        ));
    }
    async function Ee(e, t, n, a) {
      var i = e.name,
        l = e.patches,
        s = e.snapshot,
        u = e.syncedEncryptedMutations,
        c = e.syncedPendingMutationsId,
        d = e.version;
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        var k = await xe(i, l, s, n),
          I = k[0],
          T = k[1];
        a == null ||
          a.mark("external_mutations_download_end", {
            patchesWithMutationsCount: T == null ? void 0 : T.length,
            snapshotRecordsCount: I == null ? void 0 : I.records.length,
          });
        var D = performance.now();
        if (I != null)
          (await Ne(
            i,
            I,
            T,
            a,
            t,
            o("WAWebSyncdCollectionUtils").isBootstrap(n)
              ? "bootstrap"
              : "non_bootstrap",
          ),
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: ",
                  " snapshot and patches applied successfully",
                ])),
              t,
              i,
            ));
        else if (T != null) {
          var x = Math.min.apply(
              Math,
              T.map(function (e) {
                return e.version.version;
              }),
            ),
            $ = n != null && x > n + 1 && T.length > 0;
          if ($) {
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              i,
              t + " has missing patches",
            );
            var P =
              await o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
            throw (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
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
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " syncd: has missing patches. collection: ",
                    ", localVersion: ",
                    `,
           minPatch: `,
                    "",
                  ])),
                t,
                i,
                n,
                x,
              ),
              await ke(i, T[0]),
              await o("WAWebSyncdDbCallbacksApi").printSyncdLog(i),
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
          (await we(
            i,
            T,
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
                  " patches applied successfully",
                ])),
              t,
              i,
            ));
        } else if (d != null) {
          var N = r("countWhere")(u, function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .SET
              );
            }),
            M = r("countWhere")(u, function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE
              );
            }),
            w = Array.from(
              new Set(
                u.map(function (e) {
                  return e.index;
                }),
              ),
            ).length;
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            i,
            t +
              " start upload patch. version: " +
              d +
              ". mutation count: " +
              u.length +
              `,
        numSet: ` +
              N +
              ", numRemove: " +
              M +
              ", numUniqueIndex: " +
              w,
          ),
            await Ie(i, d, c, u, t));
          var A = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
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
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE,
              !0,
              A,
              e.patchMac ? o("WABase64").encodeB64UrlSafe(e.patchMac) : void 0,
            );
          }),
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              i,
              t + " end upload patches",
            ),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
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
              (await o(
                "WAWebGetCollectionVersion",
              ).updateCollectionVersionAndLtHashInTransaction(i, Se, Re)),
            u.length > 0)
          ) {
            var F = await o(
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
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: sync ",
                " but there are no updates",
              ])),
            i,
          );
        }
        var O = Math.floor(performance.now() - D);
        if (
          (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: applyAppStateSyncResponse: finished applying ",
                " in ",
                "ms",
              ])),
            i,
            O,
          ),
          (T || I) &&
            o("WAWebSyncdCollectionUtils").isBootstrap(n) &&
            !o("WAWebSyncdCollectionUtils").isCriticalCollection(i))
        ) {
          var B = I != null;
          o("WAWebSyncdMetrics").reportSyncdBootstrapDataApplied(
            i,
            B
              ? o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed
                  .SNAPSHOT_USED
              : o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed
                  .SNAPSHOT_NOT_USED,
            O,
          );
        }
        return e;
      } catch (e) {
        var W = r("getErrorSafe")(e).message;
        if (
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            i,
            "error (maybe retryable): " + W,
          ),
          u.length > 0)
        ) {
          var q = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key error: ",
                  " missing keys",
                ])),
              i,
            ),
            { name: i, state: o("WASyncdConst").CollectionState.Blocked })
          : e instanceof o("WAWebSyncdError").SyncdFatalError
            ? (o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: fatal error: ",
                      " throws ",
                      "",
                    ])),
                  i,
                  W,
                )
                .sendLogs("syncd: fatal error: " + String(i) + " throws " + W),
              { name: i, state: o("WASyncdConst").CollectionState.ErrorFatal })
            : (o("WALogger")
                .WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
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
              { name: i, state: o("WASyncdConst").CollectionState.ErrorRetry });
      }
    }
    async function ke(e, t) {
      try {
        var n = await o("WAWebSyncdDecryptMutationsWrapper").tryDecryptPatch(
            e,
            t,
          ),
          r = n.filter(function (e) {
            return (
              e.operation ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
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
        await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          "max timestamp in first patch: " +
            (l != null ? l : "n/a") +
            " days ago",
        );
      } catch (e) {
        o("WALogger").WARN(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: could not log max timestamp: ",
              "",
            ])),
          e,
        );
      }
    }
    async function Ie(e, t, n, r, a) {
      var i,
        l =
          o("WAWebABProps").getABPropConfigValue(
            "syncd_use_index_for_lthash_lookup",
          ) === !0,
        s = r.map(function (e) {
          return {
            indexMac: e.indexMac,
            valueMac: e.valueMac,
            operation: e.operation,
            action: e.action || void 0,
            index: l ? e.index : void 0,
          };
        });
      await Te(a, e, r, s);
      var u = await o("WAWebSyncdAntiTampering").computeLtHash(
          e,
          s,
          a,
          null,
          t,
          o("WAWebSyncdAntiTampering").SyncdPatchDirection.Outgoing,
        ),
        c = u.ltHash,
        d = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
      o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(e, t, c, r, d);
      var m = o(
        "WAWebSyncdCollectionHandlerTypesConverter",
      ).encryptedUploadMutationsToSyncActions(
        r.filter(function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
          );
        }),
        o("WASyncdConst").SyncActionState.Success,
      );
      await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
        e,
        "[" +
          a +
          "] set mutation during upload: " +
          m.map(function (e) {
            return o("WAWebSyncdAntiTampering").indexAndValueMacToString(
              e.indexMac,
              e.valueMac,
            );
          }).join(`
	`),
      );
      var p = new Set(
          m.map(function (e) {
            return e.index;
          }),
        ),
        _ = r
          .filter(function (e) {
            return (
              e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE && !p.has(e.index)
            );
          })
          .map(function (e) {
            return e.index;
          });
      await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
        e,
        "[" + a + "] count removed during upload: " + _.length,
      );
      var f =
        (i = await o("WAWebGetCollectionVersion")
          .getCollectionVersionInTransaction(e)
          .then(function (e) {
            return e == null ? void 0 : e.version;
          })) != null
          ? i
          : 0;
      (t !== f + 1 &&
        o("WALogger")
          .ERROR(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: uploadSuccessful: unexpected server version (",
                ") after patch upload, expected ",
                "",
              ])),
            t,
            f + 1,
          )
          .sendLogs("syncd: unexpected server version after patch upload"),
        o("WALogger").LOG(
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: uploadSuccessful: write to db for ",
              "",
            ])),
          a,
          e,
        ),
        await o("WAWebSyncdAntiTampering").logMacsInSnapshot(
          e,
          a,
          "pre-processing outgoing patch v" + t,
        ),
        await o("WAWebSyncdAntiTampering").reportCollectionInconsistency(
          e,
          "pre-processing outgoing patch " + t + ".",
          a,
        ),
        await Ae(e, t, r, a));
      var g = null;
      if (
        (await o("WAWebRunInTransaction").runInTransaction(
          {
            SyncActionStore: !0,
            PendingMutationStore: !0,
            CollectionVersionStore: !0,
          },
          async function (r) {
            var i = r.CollectionVersionStore,
              l = r.PendingMutationStore,
              s = r.SyncActionStore;
            ((g = await He(e, t, "outgoing patch", i, a)),
              g == null
                ? (await s.bulkRemove(_),
                  await s.bulkSet(m),
                  await l.bulkRemove(n),
                  await i.update(e, { version: t, ltHash: c }))
                : o("WALogger").LOG(
                    D ||
                      (D = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: [",
                        "] skip applying syncd old version ",
                        "",
                      ])),
                    a,
                    t,
                  ));
          },
        ),
        g != null)
      ) {
        var h = g;
        (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, h),
          await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
          o("WALogger")
            .ERROR(
              x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              h,
            )
            .sendLogs("syncd: processing old version for " + e));
      }
      o("WALogger").LOG(
        $ ||
          ($ = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: end uploadSuccessful for ",
            "",
          ])),
        a,
        e,
      );
    }
    async function Te(e, t, n, r) {
      try {
        var a = await Promise.all([
            (
              await Promise.all(
                n
                  .filter(function (e) {
                    return (
                      e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.REMOVE
                    );
                  })
                  .map(function (e) {
                    return o("WAWebGetSyncAction").getSyncActionInTransaction(
                      e.index,
                    );
                  }),
              )
            ).filter(Boolean),
            (
              await Promise.all(
                n
                  .filter(function (e) {
                    return (
                      e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.SET
                    );
                  })
                  .map(function (e) {
                    return o("WAWebGetSyncAction").getSyncActionInTransaction(
                      e.index,
                    );
                  }),
              )
            ).filter(Boolean),
            (
              await Promise.all(
                n
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
              )
            ).filter(Boolean),
          ]),
          i = a[0],
          l = a[1],
          s = a[2],
          u = null;
        l.length === 1 &&
          s.length === 1 &&
          s[0].length === 1 &&
          (u = l[0].index === s[0][0].index);
        var c =
          "[" +
          e +
          "] patch uploaded with mutations mac for " +
          t +
          `:

      SET: ` +
          r
            .filter(function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .SET
              );
            })
            .map(function (e) {
              return o("WAWebSyncdAntiTampering").indexAndValueMacToString(
                e.indexMac,
                e.valueMac,
              );
            }).join(`
	`) +
          `
      REMOVE: ` +
          r
            .filter(function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE
              );
            })
            .map(function (e) {
              return o("WAWebSyncdAntiTampering").indexAndValueMacToString(
                e.indexMac,
                e.valueMac,
              );
            }).join(`
	`) +
          `

      REMOVE fetch by index: ` +
          i.map(function (e) {
            return De(e);
          }).join(`
	`) +
          `
      SET fetch by index: ` +
          l.map(function (e) {
            return De(e);
          }).join(`
	`) +
          `
      SET fetch by mac: ` +
          s.map(function (e) {
            return e.map(function (e) {
              return De(e);
            });
          }).join(`
	`) +
          `
      isSameIndex: ` +
          (u == null ? "n/a" : u.toString()) +
          `
      `;
        (o("WALogger").LOG(
          P || (P = babelHelpers.taggedTemplateLiteralLoose(["syncd: ", " "])),
          c,
        ),
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(t, c));
      } catch (e) {
        o("WALogger").LOG(
          N ||
            (N = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: failed to debug upload: ",
              "",
            ])),
          e,
        );
      }
    }
    function De(e) {
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
    async function xe(e, t, n, a) {
      var i = Promise.resolve(),
        l = 0,
        s = o("WATimeUtils").unixTimeMs();
      if (n != null) {
        var u,
          c = r(
            "WAWebSyncdValidateServerSyncProtobuf",
          ).validateExternalBlobReference(e, n);
        ((l += o("WALongInt").numberOrThrowIfTooLarge(
          (u = c.fileSizeBytes) != null ? u : 0,
        )),
          o("WALogger").LOG(
            M ||
              (M = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: download snapshot for ",
                "",
              ])),
            e,
          ),
          (i = o("WAWebSyncdMMSDownload").downloadSnapshot(e, c)));
      }
      var d = Promise.resolve();
      if (t != null && t.length > 0) {
        var m = t.map(function (t) {
          return r(
            "WAWebSyncdValidateServerSyncProtobuf",
          ).validatePatchProtobuf(e, t);
        });
        d = Promise.all(
          m.map(async function (t) {
            var n = t.mutations || [],
              r = t.externalMutations;
            if (r) {
              var a;
              (o("WALogger").LOG(
                w ||
                  (w = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: download patch for ",
                    "",
                  ])),
                e,
              ),
                (n = await o("WAWebSyncdMMSDownload").downloadExternalPatch(
                  e,
                  r,
                )),
                o("WALogger").LOG(
                  A ||
                    (A = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: ",
                      "'s external patch downloaded",
                    ])),
                  e,
                ),
                (l += o("WALongInt").numberOrThrowIfTooLarge(
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
          }),
        );
      }
      var p, _;
      try {
        var f = await Promise.all([i, d]);
        ((p = f[0]),
          (_ = f[1]),
          o("WAWebSyncdCollectionUtils").isBootstrap(a) &&
            o("WAWebSyncdMetrics").reportSyncdBootstrapAppStateDownloadMetric({
              collection: e,
              downloadStartTs: s,
              downloadSize: l,
              isSuccess: "success",
            }));
      } catch (t) {
        throw (
          o("WAWebSyncdCollectionUtils").isBootstrap(a) &&
            o("WAWebSyncdMetrics").reportSyncdBootstrapAppStateDownloadMetric({
              collection: e,
              downloadStartTs: s,
              downloadSize: l,
              isSuccess: "failure",
            }),
          t
        );
      }
      return [p, _];
    }
    function $e(e, t) {
      var n = async function (r, a) {
          e == null ||
            e.mark("anti_tampering_start", {
              source: o("WASyncdConst").SyncDataType.Snapshot,
            });
          var n = await o(
            "WAWebSyncdAntiTampering",
          ).computeLtHashAndValidateSnapshot(r, a, t);
          return (
            e == null ||
              e.mark("anti_tampering_end", {
                source: o("WASyncdConst").SyncDataType.Snapshot,
              }),
            n
          );
        },
        r = async function (n, r) {
          e == null ||
            e.mark("decryption_start", {
              source: o("WASyncdConst").SyncDataType.Snapshot,
            });
          var t = await o(
            "WAWebSyncdDecryptMutationsWrapper",
          ).tryDecryptSnapshot(n, r);
          return (
            e == null ||
              e.mark("decryption_end", {
                source: o("WASyncdConst").SyncDataType.Snapshot,
              }),
            t
          );
        };
      return {
        measuredComputeLtHashAndValidateSnapshot: n,
        measuredTryDecryptSnapshot: r,
      };
    }
    function Pe(e) {
      var t = async function (n, r, a, i, l) {
          e == null ||
            e.mark("anti_tampering_start", {
              source: o("WASyncdConst").SyncDataType.Patch,
            });
          var t = await o(
            "WAWebSyncdAntiTampering",
          ).computeLtHashAndValidatePatch(n, r, a, i, l);
          return (
            e == null ||
              e.mark("anti_tampering_end", {
                source: o("WASyncdConst").SyncDataType.Patch,
              }),
            t
          );
        },
        n = async function (n, r) {
          e == null ||
            e.mark("decryption_start", {
              source: o("WASyncdConst").SyncDataType.Patch,
            });
          var t = await o("WAWebSyncdDecryptMutationsWrapper").tryDecryptPatch(
            n,
            r,
          );
          return (
            e == null ||
              e.mark("decryption_end", {
                source: o("WASyncdConst").SyncDataType.Patch,
              }),
            t
          );
        };
      return {
        measuredComputeLtHashAndValidatePatch: t,
        measuredTryDecryptPatch: n,
      };
    }
    async function Ne(e, t, n, a, i, l) {
      var s, u;
      await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
        e,
        "[" +
          i +
          "] start applySnapshotAndPatches. mutation count: " +
          t.records.length +
          ", version: " +
          t.version.version,
      );
      var c = !1,
        d = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
        m = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator(
          e,
          "incoming",
          "snapshot",
          l,
          d,
        );
      ((m.version = t.version.version),
        (m.bundleSize = t.records.length),
        (m.keyId =
          (s = (u = t.keyId) == null ? void 0 : u.id) != null ? s : null),
        (m.wireSnapshotMac = t.mac));
      try {
        var p = $e(a, i),
          _ = p.measuredComputeLtHashAndValidateSnapshot,
          f = p.measuredTryDecryptSnapshot;
        (a == null ||
          a.mark("apply_start", {
            source: o("WASyncdConst").SyncDataType.Snapshot,
            snapshotRecordsCount: t.records.length,
          }),
          o("WALogger").LOG(
            F ||
              (F = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: start validate ",
                "'s snapshot",
              ])),
            i,
            e,
          ));
        var g = new ArrayBuffer(0),
          h = null;
        try {
          var y = await _(e, t);
          ((g = y.ltHash),
            (m.computedLtHash = g),
            (m.computedSnapshotMac = y.computedSnapshotMac));
        } catch (n) {
          var C = o(
            "WAWebSyncdSnapshotRecoveryGatingUtils",
          ).shouldPreformSnapshotRecovery(e, t.records.length, n);
          if (C.shouldPerformRecovery)
            ((c = !0),
              await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "[" + i + "] attempt to recovery failed validate snapshot mac",
              ),
              o("WALogger").LOG(
                O ||
                  (O = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: ",
                    " failed validate snapshot mac, attempt to recovery",
                  ])),
                i,
                e,
              ));
          else throw n;
        }
        o("WALogger").LOG(
          B ||
            (B = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: collection ",
              "'s snapshot validated",
            ])),
          i,
          e,
        );
        var b = [];
        if (!c)
          ((b = await f(e, t)),
            o("WALogger").LOG(
              W ||
                (W = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: collection ",
                  "'s snapshot decrypted",
                ])),
              i,
              e,
            ));
        else {
          (o("WALogger").LOG(
            q ||
              (q = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd recovery: ",
                " requesting recovery from primary",
              ])),
            i,
            e,
          ),
            r("gkx")("26258") ||
              o("WALogger")
                .ERROR(
                  U ||
                    (U = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd recovery: ",
                      " requesting recovery from primary",
                    ])),
                  i,
                  e,
                )
                .sendLogs("syncd-recover-fatal"));
          var v = o("WATimeUtils").unixTimeMs(),
            S = await o(
              "WAWebRequestSyncdSnapshotRecovery",
            ).SyncdSnapshotRecoveryModule.requestRecoveryWithTimeout(e);
          o("WALogger").LOG(
            V ||
              (V = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd recovery: ",
                " recovery request resolved",
              ])),
            i,
            e,
          );
          var R = o("WATimeUtils").unixTimeMs() - v;
          if (S == null)
            throw (
              o("WAWebSyncdMetricFatalError").flushDeferredFatalError(R),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "unable to validate snapshot mac",
              )
            );
          (o("WAWebSyncdMetricFatalError").flushDeferredFatalError(R, !1),
            (b = S.decryptedMutations),
            (g = S.collectionLthash),
            (h = S.version));
        }
        c ||
          ((m.mutations = b),
          b.forEach(function (n) {
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
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE,
              !1,
              d,
              o("WABase64").encodeB64UrlSafe(t.mac),
            );
          }),
          o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
            babelHelpers.extends({}, m),
          ),
          await Ae(e, t.version.version, b, i),
          o("WAWebSyncdWamAppState").addMutationCount(t.records.length),
          o(
            "WAWebSyncdMetricCriticalBootstrapStage",
          ).reportSyncdDecryptedMutations(b),
          o(
            "WAWebSyncdValidateMutations",
          ).validateNoSameIndexForMultipleMutations(
            e,
            b,
            o("WASyncdConst").SyncDataType.Snapshot,
          ));
        var L = c && h != null ? h : t.version.version,
          E = await Oe(e, b, o("WASyncdConst").SyncDataType.Snapshot, i, a, L),
          k = E.pendingSetMutationsToDrop,
          I = E.setMutationsToPersist;
        (o("WALogger").LOG(
          H ||
            (H = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: processed ",
              " mutations in snapshot of collection ",
              " v",
              "",
            ])),
          i,
          b.length,
          e,
          L,
        ),
          o("WALogger").LOG(
            G ||
              (G = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: collection ",
                "'s snapshot v",
                " applied",
              ])),
            i,
            e,
            L,
          ));
        var T = null;
        if (
          (a == null ||
            a.mark("update_DB_start", {
              source: o("WASyncdConst").SyncDataType.Snapshot,
              setMutationsToPersistCount: I.length,
              pendingMutationsToDropCount: k.length,
            }),
          await o("WAWebRunInTransaction").runInTransaction(
            {
              SyncActionStore: !0,
              PendingMutationStore: !0,
              CollectionVersionStore: !0,
            },
            async function (t) {
              var n = t.CollectionVersionStore,
                r = t.PendingMutationStore,
                a = t.SyncActionStore;
              ((T = await He(e, L, "snapshot", n, i)),
                T == null
                  ? (await a.bulkSet(I),
                    await r.bulkRemove(k),
                    await n.update(e, { version: L, ltHash: g }))
                  : o("WALogger").LOG(
                      z ||
                        (z = babelHelpers.taggedTemplateLiteralLoose([
                          "syncd: [",
                          "] skip applying syncd old version ",
                          "",
                        ])),
                      i,
                      L,
                    ));
            },
          ),
          a == null ||
            a.mark("update_DB_end", {
              source: o("WASyncdConst").SyncDataType.Snapshot,
            }),
          T != null)
        ) {
          var D = T;
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, D),
            await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
            o("WALogger")
              .ERROR(
                j || (j = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                D,
              )
              .sendLogs("syncd: processing old version for " + e));
        }
        (o("WALogger").LOG(
          K ||
            (K = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: completed applying snapshot for ",
              "",
            ])),
          i,
          e,
        ),
          a == null ||
            a.mark("apply_end", {
              source: o("WASyncdConst").SyncDataType.Snapshot,
              decryptedMutationsCount: b.length,
            }));
      } catch (n) {
        throw (
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "exception " + r("getErrorSafe")(n).message,
          ),
          o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
            babelHelpers.extends({}, m, {
              errorMessage: r("getErrorSafe")(n).message,
            }),
          ),
          n instanceof o("WAWebSyncdError").SyncdMissingKeyError &&
            (await o("WAWebSyncdHandleMissingKeys").handleMissingKeysInSnapshot(
              e,
              t,
            )),
          n
        );
      }
      (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
        e,
        "[" + i + "] done applying snapshot",
      ),
        n &&
          !c &&
          (a == null ||
            a.mark("apply_start", {
              source: o("WASyncdConst").SyncDataType.Patch,
              patchCount: n.length,
            }),
          await we(e, n, a, i, l),
          a == null ||
            a.mark("apply_end", {
              source: o("WASyncdConst").SyncDataType.Patch,
              patchCount: n.length,
            })));
    }
    async function Me(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_syncd_max_mutations_to_process_during_resume",
      );
      if (e > t) {
        var n = Date.now();
        (o("WALogger").LOG(
          Q ||
            (Q = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: patches have ",
              " mutations, wait for UI unblock",
            ])),
          e,
        ),
          await o(
            "WAWebSyncdDbCallbacksApi",
          ).handleSyncDelayApplyingPatchUntilUIUnblocks(),
          o("WALogger").LOG(
            X ||
              (X = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: UI is unblocked, waited for ",
                "ms",
              ])),
            Date.now() - n,
          ));
      }
    }
    async function we(e, t, n, a, i) {
      var l = t.length === 0 ? "n/a" : t[t.length - 1].version.version;
      if (
        (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          "[" +
            a +
            "] start apply patches. count: " +
            t.length +
            ", last patch version: " +
            l,
        ),
        t.length === 0)
      )
        return (
          o("WALogger").LOG(
            Y ||
              (Y = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: no patches for collection ",
                "",
              ])),
            a,
            e,
          ),
          Promise.resolve()
        );
      (o(
        "WAWebSyncdValidateMutations",
      ).validateNoDuplicatePatchVersionInCollection(e, t),
        t.sort(function (e, t) {
          return e.version.version > t.version.version ? 1 : -1;
        }));
      try {
        var s = r("sumBy")(t, function (e) {
          return e.mutations.length;
        });
        await Me(s);
        for (var u = 0; u < t.length; u++) {
          if (u <= 4 || u % 10 === 0) {
            var c;
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              e,
              "[" +
                a +
                "] start applying " +
                e +
                " patch " +
                t[u].version.version +
                " with " +
                t[u].mutations.length +
                " mutations from device " +
                ((c = t[u].deviceIndex) != null ? c : "n/a"),
            );
          }
          (await Fe(e, t[u], n, u <= 1, i, a),
            (u <= 4 || u % 10 === 0) &&
              (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "[" +
                  a +
                  "] finished applying patch " +
                  t[u].version.version +
                  " with " +
                  t[u].mutations.length +
                  " mutations",
              )));
        }
        await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          "[" +
            a +
            "] after apply patches for " +
            e +
            " (last patch: v" +
            l +
            " total mutations: " +
            s +
            ")",
        );
      } catch (n) {
        throw (
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "exception" + r("getErrorSafe")(n).message,
          ),
          n instanceof o("WAWebSyncdError").SyncdMissingKeyError &&
            (await o("WAWebSyncdHandleMissingKeys").handleMissingKeysInPatches(
              e,
              t,
            )),
          n
        );
      }
    }
    async function Ae(e, t, n, r) {
      if (
        e === o("WASyncdConst").CollectionName.CriticalBlock ||
        e === o("WASyncdConst").CollectionName.RegularLow
      ) {
        var a = n
            .map(function (e) {
              var t =
                  e.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .SET
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
          J ||
            (J = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: ",
              "",
            ])),
          r,
          i,
        ),
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, i));
      }
    }
    async function Fe(e, t, n, a, i, l) {
      var s, u;
      a === void 0 && (a = !1);
      var c =
        o("WAWebABProps").getABPropConfigValue(
          "enable_syncd_debug_data_in_patch",
        ) ||
        e === o("WASyncdConst").CollectionName.CriticalBlock ||
        e === o("WASyncdConst").CollectionName.RegularLow ||
        o("WAWebCurrentUser").isEmployee();
      if (c) {
        var d, m, p, _;
        (await o("WAWebSyncdAntiTampering").logMacsInSnapshot(
          e,
          l,
          "pre-processing incoming patch " + t.version.version + ".",
        ),
          await o("WAWebSyncdAntiTampering").reportCollectionInconsistency(
            e,
            "[" +
              l +
              "] pre-processing incoming patch " +
              t.version.version +
              `.
      incoming current lthash: ` +
              o("WAWebSyncdCryptoUtils")
                .arrayBufferToHexPadded(
                  (d =
                    t == null || (m = t.clientDebugData) == null
                      ? void 0
                      : m.currentLthash) != null
                    ? d
                    : new ArrayBuffer(0),
                )
                .slice(-16) +
              `,
      incoming new lthash: ` +
              o("WAWebSyncdCryptoUtils")
                .arrayBufferToHexPadded(
                  (p =
                    t == null || (_ = t.clientDebugData) == null
                      ? void 0
                      : _.newLthash) != null
                    ? p
                    : new ArrayBuffer(0),
                )
                .slice(-16),
            l,
            250,
          ));
      }
      if (t.exitCode) {
        var f,
          g = t.exitCode.code;
        await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          "patch exit code " + (g != null ? g : ""),
        );
        e: {
          if (g === 100) {
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .TERMINAL_PATCH_MISSING_DATA,
              { collection: e },
            );
            break e;
          }
          if (g === 101) {
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
            String(g) +
            " text: " +
            String((f = t.exitCode) == null ? void 0 : f.text) +
            "  ",
        );
      }
      await o("WAWebSyncdDbCallbacksApi").handleSyncBeforeApplyPatch(t);
      var h = r("countWhere")(t.mutations, function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
          );
        }),
        y = t.mutations.length - h;
      (o("WALogger").LOG(
        Z ||
          (Z = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: applying patch ",
            " v",
            " from device ",
            `
    SET count: `,
            `
    REMOVE count: `,
            "",
          ])),
        l,
        e,
        t.version.version,
        t.deviceIndex,
        h,
        y,
      ),
        h === 0 &&
          y === 0 &&
          o("WALogger")
            .WARN(
              ee ||
                (ee = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: ",
                  ": empty patch found",
                ])),
              e,
            )
            .sendLogs("syncd: " + e + ": empty patch found"));
      var C = Pe(n),
        b = C.measuredComputeLtHashAndValidatePatch,
        v = C.measuredTryDecryptPatch,
        S = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
        R = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator(
          e,
          "incoming",
          "patch",
          i,
          S,
        );
      ((R.version = t.version.version),
        (R.bundleSize = t.mutations.length),
        (R.keyId =
          (s = (u = t.keyId) == null ? void 0 : u.id) != null ? s : null),
        (R.wireSnapshotMac = t.snapshotMac),
        (R.wirePatchMac = t.patchMac));
      var L = await v(e, t);
      (o(
        "WAWebSyncdMetricCriticalBootstrapStage",
      ).reportSyncdDecryptedMutations(L),
        (R.mutations = L),
        L.forEach(function (n) {
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
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE,
            !0,
            S,
            t.patchMac ? o("WABase64").encodeB64UrlSafe(t.patchMac) : void 0,
          );
        }),
        await Ae(e, t.version.version, L, l),
        a &&
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "[" + l + "] after decrypt patch " + t.version.version,
          )));
      var E;
      try {
        var k = await b(e, t, l, B, L);
        ((E = k.ltHash),
          (R.computedLtHash = E),
          (R.computedPatchMac = k.computedPatchMac),
          (R.computedSnapshotMac = k.computedSnapshotMacAfterPatch));
      } catch (e) {
        throw (
          o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
            babelHelpers.extends({}, R, {
              errorMessage: r("getErrorSafe")(e).message,
            }),
          ),
          e
        );
      }
      (o("WALogger").LOG(
        te ||
          (te = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: completed computeLtHashAndValidatePatch for ",
            " v",
            "",
          ])),
        l,
        e,
        t.version.version,
      ),
        o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
          babelHelpers.extends({}, R),
        ),
        o("WAWebSyncdWamAppState").addMutationCount(L.length),
        o(
          "WAWebSyncdValidateMutations",
        ).validateNoSameIndexForMultipleMutations(
          e,
          L,
          o("WASyncdConst").SyncDataType.Patch,
        ));
      var I = qe(L),
        T = I.filter(function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          );
        }),
        D = await Be(e, T, l),
        x = D.pendingRemoveMutationsToDrop;
      o("WALogger").LOG(
        ne ||
          (ne = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: completed applyRemoveMutations for ",
            " v",
            "",
          ])),
        l,
        e,
        t.version.version,
      );
      var $ = I.filter(function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
          );
        }),
        P = await Oe(
          e,
          $,
          o("WASyncdConst").SyncDataType.Patch,
          l,
          n,
          t.version.version,
          a,
        ),
        N = P.pendingSetMutationsToDrop,
        M = P.setMutationsToPersist;
      o("WALogger").LOG(
        re ||
          (re = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: processed ",
            " mutations in patch version ",
            " of collection ",
            "",
          ])),
        l,
        L.length,
        t.version.version,
        e,
      );
      var w = x.concat(N);
      n == null ||
        n.mark("update_DB_start", {
          source: o("WASyncdConst").SyncDataType.Patch,
          setMutationsToPersistCount: M.length,
          pendingMutationsToDropCount: w.length,
        });
      var A = t.version.version,
        F = null;
      if (
        (await o("WAWebRunInTransaction").runInTransaction(
          {
            SyncActionStore: !0,
            PendingMutationStore: !0,
            CollectionVersionStore: !0,
          },
          async function (t) {
            var n = t.CollectionVersionStore,
              r = t.PendingMutationStore,
              a = t.SyncActionStore;
            ((F = await He(e, A, "incoming patch", n, l)),
              F == null
                ? (await a.bulkRemove(
                    T.map(function (e) {
                      return e.index;
                    }),
                  ),
                  await a.bulkSet(M),
                  await r.bulkRemove(w),
                  await n.update(e, { version: A, ltHash: E }))
                : o("WALogger").LOG(
                    oe ||
                      (oe = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: [",
                        "] skip applying syncd old version ",
                        "",
                      ])),
                    l,
                    A,
                  ));
          },
        ),
        F != null)
      ) {
        var O = F;
        (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, O),
          await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
          o("WALogger")
            .ERROR(
              ae || (ae = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
              O,
            )
            .sendLogs("syncd: processing old version for " + e));
      }
      ((c ||
        e === o("WASyncdConst").CollectionName.RegularLow ||
        o("WAWebCurrentUser").isEmployee()) &&
        (await o("WAWebSyncdAntiTampering").logMacsInSnapshot(
          e,
          l,
          "post-processing incoming patch " + t.version.version + ".",
        )),
        n == null ||
          n.mark("update_DB_end", {
            source: o("WASyncdConst").SyncDataType.Patch,
          }),
        o("WALogger").LOG(
          ie ||
            (ie = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: completed final transaction in applyPatch for ",
              " v",
              "",
            ])),
          l,
          e,
          t.version.version,
        ),
        a &&
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "[" +
              l +
              "] after final transaction for patch " +
              t.version.version +
              ". new lthash: " +
              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(E).slice(-16),
          )));
      async function B(t) {
        var n;
        return (n = (
          await o(
            "WAWebGetSyncAction",
          ).getSyncActionsByCollectionsInTransaction([e])
        )
          .filter(function (e) {
            return o("WACryptoUtils").arrayBuffersEqual(t, e.indexMac);
          })
          .pop()) == null
          ? void 0
          : n.valueMac;
      }
    }
    async function Oe(e, t, n, a, i, l, s) {
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
        d = o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(e, t),
        m = Ue(e, d),
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
          le ||
            (le = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: before resolveConflict for ",
              " v",
              "",
            ])),
          a,
          e,
          l,
        ));
      var f = await o("WAWebSyncdResolveConflict").resolveConflict(e, p),
        g = f.pendingSetMutationsToDrop,
        h = f.remoteMutationsToApply;
      o("WALogger").LOG(
        se ||
          (se = babelHelpers.taggedTemplateLiteralLoose([
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
      for (var C = Ve(h), b = null, v = 0; v < C.length; v++) {
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
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            a + " after deserialize. mutationsToApply length: " + L.length,
          ));
        var E = [],
          k = !1;
        try {
          (o("WAWebCurrentUser").isEmployee() &&
            o("WALogger").LOG(
              ue ||
                (ue = babelHelpers.taggedTemplateLiteralLoose([
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
              ce ||
                (ce = babelHelpers.taggedTemplateLiteralLoose([
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
            (E = await R.applyMutations(
              L,
              { setMutationsPendingToPersist: c, allSupportedSetMutations: h },
              S,
            )));
          var I = o("WAWebCurrentUser").isEmployee() ? R.getAction() : "-";
          (o("WALogger").LOG(
            de ||
              (de = babelHelpers.taggedTemplateLiteralLoose([
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
              (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
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
              me ||
                (me = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: catching error during applySetMutations: ",
                  "",
                ])),
              t,
            ));
        }
        o("WALogger").LOG(
          pe ||
            (pe = babelHelpers.taggedTemplateLiteralLoose([
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
            $ = k ? o("WASyncdConst").SyncActionState.Failed : E[T].actionState;
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
        _e ||
          (_e = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: max timestamp from recent patch: ",
            " days agp",
          ])),
        N != null ? N : "n/a",
      ),
        s &&
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
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
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
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
          fe ||
            (fe = babelHelpers.taggedTemplateLiteralLoose([
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
    }
    async function Be(e, t, n) {
      var a = We(t),
        i = a.supportedMutations,
        l = Ve(i),
        s = new Set(
          t.map(function (e) {
            return e.index;
          }),
        ),
        u = (
          await o(
            "WAWebGetPendingMutation",
          ).getSyncPendingMutationsByCollectionInTransaction(e)
        ).filter(function (e) {
          return (
            e.operation ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE && s.has(e.index)
          );
        }),
        c = r("compactMap")(u, function (e) {
          return e.id;
        });
      o("WALogger").LOG(
        ge ||
          (ge = babelHelpers.taggedTemplateLiteralLoose([
            "",
            " syncd: before apply remove mutations for ",
            "",
          ])),
        n,
        e,
      );
      for (var d = 0; d < l.length; d++) {
        var m = l[d][0].actionHandler;
        await m.applyMutations(
          l[d].map(function (t) {
            return { operation: "remove", indexParts: Ge(e, t.index) };
          }),
          { setMutationsPendingToPersist: [], allSupportedSetMutations: [] },
        );
      }
      return (
        o("WALogger").LOG(
          he ||
            (he = babelHelpers.taggedTemplateLiteralLoose([
              "",
              " syncd: after apply remove mutations for ",
              "",
            ])),
          n,
          e,
        ),
        await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          n +
            " after apply remove mutations for " +
            e +
            ". mutation count: " +
            t.length,
        ),
        { pendingRemoveMutationsToDrop: c }
      );
    }
    function We(e) {
      var t = [],
        n = 0,
        r = [],
        a = 0,
        i = e.map(function (e) {
          if (e.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion())
            return { unsupported: e };
          var i = Ge(e.collection, e.index),
            l = o("WASyncdConst").Actions.cast(i[0]);
          if (!l)
            return (n++, t.length < 3 && t.push(i[0]), { unsupported: e });
          var s = o("WAWebSyncdGetActionHandler").getActionHandler(l);
          if (!s) return (a++, r.length < 3 && r.push(l), { unsupported: e });
          var u = {
            collection: e.collection,
            index: e.index,
            indexMac: e.indexMac,
            keyId: e.keyId,
            binarySyncData: e.binarySyncData,
            valueMac: e.valueMac,
            version: e.version,
            indexArr: i,
            actionName: l,
            actionHandler: s,
          };
          return { supported: u };
        });
      (n > 0 &&
        o("WALogger").WARN(
          ye ||
            (ye = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: ",
              " invalid actions => ",
              "",
            ])),
          n,
          t,
        ),
        a > 0 &&
          o("WALogger").WARN(
            Ce ||
              (Ce = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no handler for ",
                " actions => ",
                "",
              ])),
            a,
            r,
          ));
      var l = [],
        s = [];
      return (
        i.map(function (e) {
          var t = e.supported,
            n = e.unsupported;
          t != null ? l.push(t) : n != null && s.push(n);
        }),
        { supportedMutations: l, unsupportedMutations: s }
      );
    }
    function qe(e) {
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
    function Ue(e, t) {
      var n = [],
        r = 0,
        a = [],
        i = 0,
        l = t.map(function (t) {
          if (t.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion())
            return { unsupported: t };
          var l = Ge(e, t.index),
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
          be ||
            (be = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: ",
              " invalid actions => ",
              "",
            ])),
          r,
          n,
        ),
        i > 0 &&
          o("WALogger").WARN(
            ve ||
              (ve = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no handler for ",
                " actions => ",
                "",
              ])),
            i,
            a,
          ));
      var s = [],
        u = [];
      return (
        l.map(function (e) {
          var t = e.supported,
            n = e.unsupported;
          t != null ? s.push(t) : n != null && u.push(n);
        }),
        { supportedMutations: s, unsupportedMutations: u }
      );
    }
    function Ve(e) {
      return e.reduce(function (e, t) {
        return (
          e.length !== 0 && t.actionName === e[e.length - 1][0].actionName
            ? e[e.length - 1].push(t)
            : e.push([t]),
          e
        );
      }, []);
    }
    async function He(e, t, n, r, o) {
      var a = await r.get(e);
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
    }
    function Ge(e, t) {
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
    ((l.applyIndividualMutations = Le), (l.applyAppStateSyncResponse = Ee));
  },
  98,
);
