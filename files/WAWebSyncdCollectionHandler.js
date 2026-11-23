__d(
  "WAWebSyncdCollectionHandler",
  [
    "WABase64",
    "WACryptoUtils",
    "WALogger",
    "WALongInt",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebCurrentUser",
    "WAWebGetCollectionVersion",
    "WAWebGetMissingKey",
    "WAWebGetSyncAction",
    "WAWebMdSyncDownloadFailureReason",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebRequestSyncdSnapshotRecovery",
    "WAWebRunInTransaction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdAntiTampering.flow",
    "WAWebSyncdAntiTamperingLtHash",
    "WAWebSyncdCollectionHandlerTypesConverter",
    "WAWebSyncdCollectionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDecryptMutationsWrapper",
    "WAWebSyncdError",
    "WAWebSyncdGetActionHandler",
    "WAWebSyncdHandleMissingKeys",
    "WAWebSyncdKeyTypes",
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
    "countWhere",
    "decodeProtobuf",
    "getErrorSafe",
    "gkx",
    "nullthrows",
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
    async function Le(t, n, r) {
      if ((n === void 0 && (n = []), r === void 0 && (r = !1), t.length === 0))
        return Promise.resolve();
      var a = Math.random().toString(36).substr(2, 5),
        i = t.sort(function (e, t) {
          return e.timestamp - t.timestamp;
        }),
        l = ke(i);
      Ee(r, function () {
        return o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: start applyIndividualMutations",
            ])),
        );
      });
      var _ = o(
          "WAWebSyncdCollectionHandlerTypesConverter",
        ).syncActionsToDecryptedMutation(i),
        f = We(_),
        g = We(
          o(
            "WAWebSyncdCollectionHandlerTypesConverter",
          ).syncActionsToDecryptedMutation([].concat(n)),
        ),
        h = Array.from(f.keys(), async function (e) {
          Ee(r, function () {
            return o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " syncd: apply individual mutations for collection ",
                  "",
                ])),
              a,
              e,
            );
          });
          var n = f.get(e);
          if (n !== void 0) {
            var i = await Ue(
                e,
                n,
                o("WAWebSyncdConst").SyncDataType.Local,
                a,
                null,
                null,
                !1,
                g.get(e),
                r,
              ),
              p = i.pendingSetMutationsToDrop,
              _ = i.setMutationsToPersist,
              h = _.map(function (e) {
                return {
                  actionState: e.actionState,
                  index: e.index,
                  modelId: e.modelId,
                  modelType: e.modelType,
                };
              }),
              y = h;
            (Ee(r, function () {
              return o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: filter individual mutations for collection ",
                    ", mutations: ",
                    ", mutationsWithoutMacs: ",
                    "",
                  ])),
                a,
                e,
                t.length,
                h.length,
              );
            }),
              (y = h.filter(function (e) {
                var t = l(e.index);
                return t == null
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
                  : e.actionState !== t.actionState ||
                      e.modelId !== t.modelId ||
                      e.modelType !== t.modelType;
              })),
              Ee(r, function () {
                return o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: end apply individual mutations for collection ",
                      "",
                    ])),
                  a,
                  e,
                );
              }),
              await o("WAWebRunInTransaction").runInTransaction(
                { SyncActionStore: !0, PendingMutationStore: !0 },
                async function (e) {
                  var t = e.PendingMutationStore,
                    n = e.SyncActionStore;
                  (y.length > 0 && (await n.bulkUpdate(y)),
                    p.length > 0 && (await t.bulkRemove(p)));
                },
              ),
              Ee(r, function () {
                return o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " syncd: end update db after apply individual mutations for collection ",
                      "",
                    ])),
                  a,
                  e,
                );
              }));
          }
        });
      (await Promise.all(h),
        Ee(r, function () {
          return o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: end applyIndividualMutations",
              ])),
            a,
          );
        }));
    }
    function Ee(e, t) {
      e || t();
    }
    function ke(e) {
      if (
        o("WAWebABProps").getABPropConfigValue(
          "web_syncd_individual_mutation_index_lookup",
        ) !== !0
      )
        return function (t) {
          return e.find(function (e) {
            return e.index === t;
          });
        };
      var t = new Map();
      for (var n of e) t.has(n.index) || t.set(n.index, n);
      return function (e) {
        return t.get(e);
      };
    }
    async function Ie(e) {
      var t = e.collectionDetails,
        n = e.localVersion,
        a = e.session,
        i = e.syncdEventFlow,
        l = t.name,
        s = t.patches,
        u = t.snapshot,
        c = t.syncedEncryptedMutations,
        d = t.syncedPendingMutationsId,
        m = t.version;
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: start applying collection ",
            "",
          ])),
        a,
        l,
      );
      try {
        var p, k;
        i == null ||
          i.mark("external_mutations_download_start", {
            patchCount: (p = t.patches) == null ? void 0 : p.length,
            snapshotSizeBytes:
              (k = t.snapshot) == null ? void 0 : k.fileSizeBytes,
          });
        var I = await Pe(l, s, u, n),
          T = I[0],
          D = I[1];
        i == null ||
          i.mark("external_mutations_download_end", {
            patchesWithMutationsCount: D == null ? void 0 : D.length,
            snapshotRecordsCount: T == null ? void 0 : T.records.length,
          });
        var x = performance.now();
        if (T != null)
          (await we(
            l,
            T,
            D,
            i,
            a,
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
              a,
              l,
            ));
        else if (D != null) {
          var $ = Math.min.apply(
              Math,
              D.map(function (e) {
                return e.version.version;
              }),
            ),
            P = n != null && $ > n + 1 && D.length > 0;
          if (P) {
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              l,
              a + " has missing patches",
            );
            var N =
              await o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
            throw (
              o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " syncd: missing keys: [",
                    "]",
                  ])),
                a,
                N.map(function (e) {
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
                a,
                l,
                n,
                $,
              ),
              await Te(l, D[0]),
              await o("WAWebSyncdDbCallbacksApi").printSyncdLog(l),
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " syncd: has missing patches. collection: ",
                      "",
                    ])),
                  a,
                  l,
                )
                .sendLogs("syncd: has missing patches"),
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .SERVER_DID_NOT_SEND_ALL_PATCHES,
                { collection: l, patchVersion: n != null ? n : 0 },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "syncd: has missing patches",
              )
            );
          }
          (await Fe(
            l,
            D,
            i,
            a,
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
              a,
              l,
            ));
        } else if (m != null) {
          var M = r("countWhere")(c, function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .SET
              );
            }),
            w = r("countWhere")(c, function (e) {
              return (
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE
              );
            }),
            A = Array.from(
              new Set(
                c.map(function (e) {
                  return e.index;
                }),
              ),
            ).length;
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            l,
            a +
              " start upload patch. version: " +
              m +
              ". mutation count: " +
              c.length +
              `,
        numSet: ` +
              M +
              ", numRemove: " +
              w +
              ", numUniqueIndex: " +
              A,
          ),
            await De(l, m, d, c, a));
          var F = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
          (c.forEach(function (e) {
            var t = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
              e.collection,
              e.index,
            );
            o("WAWebSyncdWamReportingUtils").syncReportMutationToWam({
              action: t,
              collection: l,
              indexMac: o("WABase64").encodeB64UrlSafe(e.indexMac),
              isIncoming: !1,
              isPatch: !0,
              isRemove:
                e.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE,
              mdSessionId: F,
              patchMac: e.patchMac
                ? o("WABase64").encodeB64UrlSafe(e.patchMac)
                : void 0,
              version: m,
            });
          }),
            await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
              l,
              a + " end upload patches",
            ),
            o("WALogger").LOG(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: ",
                  " v",
                  " uploaded successfully",
                ])),
              a,
              l,
              m,
            ));
        } else {
          if (
            (o("WAWebSyncdCollectionUtils").isBootstrap(n) &&
              (await o(
                "WAWebGetCollectionVersion",
              ).updateCollectionVersionAndLtHashInTransaction(l, Se, Re)),
            c.length > 0)
          ) {
            var O = await o(
              "WAWebSyncdWamReportingUtils",
            ).getShortMdSessionId();
            o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(
              l,
              n != null ? n : 0,
              new ArrayBuffer(0),
              c,
              O,
              "error: no response from server for collection",
            );
          }
          o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: sync ",
                " but there are no updates",
              ])),
            l,
          );
        }
        var B = Math.floor(performance.now() - x);
        if (
          (o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: applyAppStateSyncResponse: finished applying ",
                " in ",
                "ms",
              ])),
            l,
            B,
          ),
          (D || T) &&
            o("WAWebSyncdCollectionUtils").isBootstrap(n) &&
            !o("WAWebSyncdCollectionUtils").isCriticalCollection(l))
        ) {
          var W = T != null;
          o("WAWebSyncdMetrics").reportSyncdBootstrapDataApplied(
            l,
            W
              ? o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed
                  .SNAPSHOT_USED
              : o("WAWebSyncdMetrics").SyncdBootstrapDataAppliedSnapshotUsed
                  .SNAPSHOT_NOT_USED,
            B,
          );
        }
        return t;
      } catch (e) {
        var q = r("getErrorSafe")(e).message;
        if (
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            l,
            "error (maybe retryable): " + q,
          ),
          c.length > 0)
        ) {
          var U = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
          o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(
            l,
            n != null ? n : 0,
            new ArrayBuffer(0),
            c,
            U,
            "error: " + q,
          );
        }
        return e instanceof o("WAWebSyncdError").SyncdMissingKeyError
          ? (o("WALogger").WARN(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: key error: ",
                  " missing keys",
                ])),
              l,
            ),
            { name: l, state: o("WAWebSyncdConst").CollectionState.Blocked })
          : e instanceof o("WAWebSyncdError").SyncdFatalError
            ? (o("WALogger")
                .ERROR(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: fatal error: ",
                      " throws ",
                      "",
                    ])),
                  l,
                  q,
                )
                .sendLogs("syncd: fatal error: " + String(l) + " throws " + q),
              {
                name: l,
                state: o("WAWebSyncdConst").CollectionState.ErrorFatal,
              })
            : (o("WALogger")
                .WARN(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: retryable error: ",
                      " throws ",
                      "",
                    ])),
                  l,
                  q,
                )
                .sendLogs(
                  "syncd: retryable error: " + String(l) + " throws " + q,
                ),
              {
                name: l,
                state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
              });
      }
    }
    async function Te(e, t) {
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
    async function De(e, t, n, r, a) {
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
      await xe(a, e, r, s);
      var u = await o("WAWebSyncdAntiTampering").computeLtHash({
          collection: e,
          direction: o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection
            .Outgoing,
          fallbackQueryForValueMac: null,
          mutations: s,
          session: a,
          version: t,
        }),
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
        o("WAWebSyncdConst").SyncActionState.Success,
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
        await o("WAWebSyncdAntiTamperingLtHash").reportCollectionInconsistency(
          e,
          "pre-processing outgoing patch " + t + ".",
          a,
        ),
        await Oe(e, t, r, a));
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
            ((g = await Ke(e, t, "outgoing patch", i, a)),
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
    async function xe(e, t, n, r) {
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
            return $e(e);
          }).join(`
	`) +
          `
      SET fetch by index: ` +
          l.map(function (e) {
            return $e(e);
          }).join(`
	`) +
          `
      SET fetch by mac: ` +
          s.map(function (e) {
            return e.map(function (e) {
              return $e(e);
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
    function $e(e) {
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
    async function Pe(e, t, n, a) {
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
              failureReason: null,
            }));
      } catch (t) {
        throw (
          o("WAWebSyncdCollectionUtils").isBootstrap(a) &&
            o("WAWebSyncdMetrics").reportSyncdBootstrapAppStateDownloadMetric({
              collection: e,
              downloadStartTs: s,
              downloadSize: l,
              isSuccess: "failure",
              failureReason: o(
                "WAWebMdSyncDownloadFailureReason",
              ).getMdSyncDownloadFailureReason(t),
            }),
          t
        );
      }
      return [p, _];
    }
    function Ne(e, t) {
      var n = async function (r, a) {
          e == null ||
            e.mark("anti_tampering_start", {
              source: o("WAWebSyncdConst").SyncDataType.Snapshot,
            });
          var n = await o(
            "WAWebSyncdAntiTampering",
          ).computeLtHashAndValidateSnapshot(r, a, t);
          return (
            e == null ||
              e.mark("anti_tampering_end", {
                source: o("WAWebSyncdConst").SyncDataType.Snapshot,
              }),
            n
          );
        },
        r = async function (n, r) {
          e == null ||
            e.mark("decryption_start", {
              source: o("WAWebSyncdConst").SyncDataType.Snapshot,
            });
          var t = await o(
            "WAWebSyncdDecryptMutationsWrapper",
          ).tryDecryptSnapshot(n, r);
          return (
            e == null ||
              e.mark("decryption_end", {
                source: o("WAWebSyncdConst").SyncDataType.Snapshot,
              }),
            t
          );
        };
      return {
        measuredComputeLtHashAndValidateSnapshot: n,
        measuredTryDecryptSnapshot: r,
      };
    }
    function Me(e) {
      var t = async function (n, r, a, i, l) {
          e == null ||
            e.mark("anti_tampering_start", {
              source: o("WAWebSyncdConst").SyncDataType.Patch,
            });
          var t = await o(
            "WAWebSyncdAntiTampering",
          ).computeLtHashAndValidatePatch(n, r, a, i, l);
          return (
            e == null ||
              e.mark("anti_tampering_end", {
                source: o("WAWebSyncdConst").SyncDataType.Patch,
              }),
            t
          );
        },
        n = async function (n, r) {
          e == null ||
            e.mark("decryption_start", {
              source: o("WAWebSyncdConst").SyncDataType.Patch,
            });
          var t = await o("WAWebSyncdDecryptMutationsWrapper").tryDecryptPatch(
            n,
            r,
          );
          return (
            e == null ||
              e.mark("decryption_end", {
                source: o("WAWebSyncdConst").SyncDataType.Patch,
              }),
            t
          );
        };
      return {
        measuredComputeLtHashAndValidatePatch: t,
        measuredTryDecryptPatch: n,
      };
    }
    async function we(e, t, n, a, i, l) {
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
        m = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator({
          bootstrapState: l,
          bundleType: "snapshot",
          collection: e,
          direction: "incoming",
          mdSessionId: d,
        });
      ((m.version = t.version.version),
        (m.bundleSize = t.records.length),
        (m.keyId =
          (s = (u = t.keyId) == null ? void 0 : u.id) != null ? s : null),
        (m.wireSnapshotMac = t.mac));
      try {
        var p = Ne(a, i),
          _ = p.measuredComputeLtHashAndValidateSnapshot,
          f = p.measuredTryDecryptSnapshot;
        (a == null ||
          a.mark("apply_start", {
            source: o("WAWebSyncdConst").SyncDataType.Snapshot,
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
            o("WAWebSyncdWamReportingUtils").syncReportMutationToWam({
              action: r,
              collection: e,
              indexMac: o("WABase64").encodeB64UrlSafe(n.indexMac),
              isIncoming: !0,
              isPatch: !1,
              isRemove:
                n.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE,
              mdSessionId: d,
              patchMac: o("WABase64").encodeB64UrlSafe(t.mac),
              version: t.version.version,
            });
          }),
          o("WAWebSyncdWamReportingUtils").reportSyncdWamAccumulator(
            babelHelpers.extends({}, m),
          ),
          await Oe(e, t.version.version, b, i),
          o("WAWebSyncdWamAppState").addMutationCount(t.records.length),
          o(
            "WAWebSyncdMetricCriticalBootstrapStage",
          ).reportSyncdDecryptedMutations(b),
          o(
            "WAWebSyncdValidateMutations",
          ).validateNoSameIndexForMultipleMutations(
            e,
            b,
            o("WAWebSyncdConst").SyncDataType.Snapshot,
          ));
        var L = c && h != null ? h : t.version.version;
        o(
          "WAWebSyncdCriticalBootstrapProcessingApi",
        ).recordCriticalCollectionMutations(e, b.length);
        var E = await Ue(
            e,
            b,
            o("WAWebSyncdConst").SyncDataType.Snapshot,
            i,
            a,
            L,
          ),
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
              source: o("WAWebSyncdConst").SyncDataType.Snapshot,
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
              ((T = await Ke(e, L, "snapshot", n, i)),
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
              source: o("WAWebSyncdConst").SyncDataType.Snapshot,
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
              source: o("WAWebSyncdConst").SyncDataType.Snapshot,
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
              source: o("WAWebSyncdConst").SyncDataType.Patch,
              patchCount: n.length,
            }),
          await Fe(e, n, a, i, l),
          a == null ||
            a.mark("apply_end", {
              source: o("WAWebSyncdConst").SyncDataType.Patch,
              patchCount: n.length,
            })));
    }
    async function Ae(e) {
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
    async function Fe(e, t, n, a, i) {
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
        await Ae(s);
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
          (await Be(e, t[u], n, u <= 1, i, a),
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
    async function Oe(e, t, n, r) {
      if (
        e === o("WAWebSyncdConst").CollectionName.CriticalBlock ||
        e === o("WAWebSyncdConst").CollectionName.RegularLow
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
                  o("WAWebSyncdKeyTypes").fromSyncKeyId(e.keyId),
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
    async function Be(e, t, n, a, i, l) {
      var s, u;
      a === void 0 && (a = !1);
      var c =
        o("WAWebABProps").getABPropConfigValue(
          "enable_syncd_debug_data_in_patch",
        ) ||
        e === o("WAWebSyncdConst").CollectionName.CriticalBlock ||
        e === o("WAWebSyncdConst").CollectionName.RegularLow ||
        o("WAWebCurrentUser").isEmployee();
      if (c) {
        var d, m, p, _;
        (await o("WAWebSyncdAntiTampering").logMacsInSnapshot(
          e,
          l,
          "pre-processing incoming patch " + t.version.version + ".",
        ),
          await o(
            "WAWebSyncdAntiTamperingLtHash",
          ).reportCollectionInconsistency(
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
      var C = Me(n),
        b = C.measuredComputeLtHashAndValidatePatch,
        v = C.measuredTryDecryptPatch,
        S = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId(),
        R = o("WAWebSyncdWamReportingUtils").createSyncdWamAccumulator({
          bootstrapState: i,
          bundleType: "patch",
          collection: e,
          direction: "incoming",
          mdSessionId: S,
        });
      ((R.version = t.version.version),
        (R.bundleSize = t.mutations.length),
        (R.keyId =
          (s = (u = t.keyId) == null ? void 0 : u.id) != null ? s : null),
        (R.wireSnapshotMac = t.snapshotMac),
        (R.wirePatchMac = t.patchMac));
      var L = await v(e, t);
      (o(
        "WAWebSyncdCriticalBootstrapProcessingApi",
      ).recordCriticalCollectionMutations(e, L.length),
        o(
          "WAWebSyncdMetricCriticalBootstrapStage",
        ).reportSyncdDecryptedMutations(L),
        (R.mutations = L),
        L.forEach(function (n) {
          var r = o("WAWebSyncdActionUtils").getMutationNameFromIndex(
            n.collection,
            n.index,
          );
          o("WAWebSyncdWamReportingUtils").syncReportMutationToWam({
            action: r,
            collection: e,
            indexMac: o("WABase64").encodeB64UrlSafe(n.indexMac),
            isIncoming: !0,
            isPatch: !0,
            isRemove:
              n.operation ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                .REMOVE,
            mdSessionId: S,
            patchMac: t.patchMac
              ? o("WABase64").encodeB64UrlSafe(t.patchMac)
              : void 0,
            version: t.version.version,
          });
        }),
        await Oe(e, t.version.version, L, l),
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
          o("WAWebSyncdConst").SyncDataType.Patch,
        ));
      var I = Ge(L),
        T = I.filter(function (e) {
          return (
            e.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          );
        }),
        D = await Ve(e, T, l),
        x = D.pendingMutationsToDrop;
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
        P = await Ue(
          e,
          $,
          o("WAWebSyncdConst").SyncDataType.Patch,
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
          source: o("WAWebSyncdConst").SyncDataType.Patch,
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
            ((F = await Ke(e, A, "incoming patch", n, l)),
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
        e === o("WAWebSyncdConst").CollectionName.RegularLow ||
        o("WAWebCurrentUser").isEmployee()) &&
        (await o("WAWebSyncdAntiTampering").logMacsInSnapshot(
          e,
          l,
          "post-processing incoming patch " + t.version.version + ".",
        )),
        n == null ||
          n.mark("update_DB_end", {
            source: o("WAWebSyncdConst").SyncDataType.Patch,
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
    function We(e) {
      return e.reduce(function (e, t) {
        var n,
          r = (n = e.get(t.collection)) != null ? n : [];
        return (r.push(t), e.set(t.collection, r), e);
      }, new Map());
    }
    async function qe(e, t) {
      var n = ze(
          e,
          o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(e, t),
        ),
        r = n.supportedMutations,
        a = r.filter(function (e) {
          return e.actionName === o("WAWebSyncdConst").Actions.Star;
        });
      if (a.length === 0) return [];
      var i = await o("WAWebSyncdResolveConflict").resolveConflict(e, a),
        l = i.remoteMutationsToApply;
      return l;
    }
    async function Ue(e, t, n, a, i, l, s, u, c) {
      (s === void 0 && (s = !1),
        u === void 0 && (u = null),
        c === void 0 && (c = !1),
        o(
          "WAWebSyncdCriticalBootstrapProcessingApi",
        ).logCriticalBootstrapStageIfNecessary(
          o("WAWebWamEnumBootstrapAppStateDataStageCode")
            .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ABOUT_TO_APPLY_MUTATIONS,
        ));
      var d =
          n === o("WAWebSyncdConst").SyncDataType.Local
            ? " (individual mutations)"
            : "",
        m = [],
        p = o("WAWebSyncdValidateMutations").validateAndTypeSetMutations(e, t),
        _ = ze(e, p),
        f = _.supportedMutations,
        g = _.unsupportedMutations;
      (g.forEach(function (e) {
        return m.push(
          o(
            "WAWebSyncdCollectionHandlerTypesConverter",
          ).setMutationToSyncAction({
            actionState: o("WAWebSyncdConst").SyncActionState.Unsupported,
            setMutation: e,
          }),
        );
      }),
        i == null ||
          i.mark("conflict_resolution_start", {
            source: n,
            collectionName: e,
            count: f.length,
          }),
        Ee(c, function () {
          return o("WALogger").LOG(
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
          );
        }));
      var h = await o("WAWebSyncdResolveConflict").resolveConflict(e, f),
        y = h.pendingSetMutationsToDrop,
        C = h.remoteMutationsToApply;
      Ee(c, function () {
        return o("WALogger").LOG(
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
      });
      var b = f.filter(function (e) {
        return !C.includes(e);
      });
      (i == null ||
        i.mark("conflict_resolution_end", {
          source: n,
          collectionName: e,
          apply: C.length,
          drop: b.length,
        }),
        b.forEach(function (e) {
          return m.push(
            o(
              "WAWebSyncdCollectionHandlerTypesConverter",
            ).setMutationToSyncAction({
              action: e.actionName,
              actionState: o("WAWebSyncdConst").SyncActionState.Skipped,
              setMutation: e,
            }),
          );
        }),
        i == null ||
          i.mark("apply_set_mutations_start", {
            source: n,
            collectionName: e,
            count: C.length,
          }));
      for (
        var v = u == null ? [] : await qe(e, u),
          S = v.length > 0 ? [].concat(C, v) : C,
          R = je(C),
          L = null,
          E = async function () {
            var t = s && k <= 1,
              n = R[k][0].actionHandler,
              i = R[k].map(function (e) {
                var t;
                return (
                  e.binarySyncData
                    ? (t = r("nullthrows")(
                        o("decodeProtobuf").decodeProtobuf(
                          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                          e.binarySyncData,
                        ).value,
                      ))
                    : (t = o("decodeProtobuf").decodeProtobuf(
                        o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                        e.binarySyncAction,
                      )),
                  (L == null || L < e.timestamp) && (L = e.timestamp),
                  {
                    operation: "set",
                    indexParts: e.indexArr,
                    value: t,
                    timestamp: e.timestamp,
                  }
                );
              });
            t &&
              (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                a + " after deserialize. mutationsToApply length: " + i.length,
              ));
            var u = [],
              p = !1;
            try {
              (Ee(c, function () {
                o("WAWebCurrentUser").isEmployee() &&
                  o("WALogger").LOG(
                    de ||
                      (de = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: applying mutations ",
                        " for handler ",
                        " ",
                        "",
                      ])),
                    JSON.stringify(i.slice(0, 3), null, 2),
                    n.getAction(),
                    d,
                  );
              }),
                Ee(c, function () {
                  return o("WALogger").LOG(
                    me ||
                      (me = babelHelpers.taggedTemplateLiteralLoose([
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
                    i.length,
                    d,
                  );
                }),
                (u = await n.applyMutations(
                  i,
                  {
                    setMutationsPendingToPersist: m,
                    allSupportedSetMutations: S,
                  },
                  t,
                )));
              var _ = o("WAWebCurrentUser").isEmployee() ? n.getAction() : "-";
              (Ee(c, function () {
                return o("WALogger").LOG(
                  pe ||
                    (pe = babelHelpers.taggedTemplateLiteralLoose([
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
                  i.length,
                  _,
                  d,
                );
              }),
                t &&
                  (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                    e,
                    "[" +
                      a +
                      "] after apply group " +
                      k +
                      "/" +
                      R.length +
                      " for " +
                      e +
                      " " +
                      (l != null ? l : "") +
                      ". result length: " +
                      u.length,
                  )));
            } catch (t) {
              if (
                t instanceof o("WAWebSyncdError").SyncdFatalError ||
                e === o("WAWebSyncdConst").CollectionName.CriticalBlock
              )
                throw t;
              ((p = !0),
                o("WALogger").WARN(
                  _e ||
                    (_e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: catching error during applySetMutations: ",
                      "",
                    ])),
                  t,
                ));
            }
            Ee(c, function () {
              return o("WALogger").LOG(
                fe ||
                  (fe = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: after apply mutation batch for ",
                    " ",
                    "",
                  ])),
                a,
                e,
                d,
              );
            });
            for (var f = 0; f < R[k].length; f++) {
              var g,
                h,
                y = p
                  ? o("WAWebSyncdConst").SyncActionState.Failed
                  : u[f].actionState;
              m.push(
                o(
                  "WAWebSyncdCollectionHandlerTypesConverter",
                ).setMutationToSyncAction({
                  action: R[k][f].actionName,
                  actionState: y,
                  modelId:
                    p || (g = u[f].orphanModel) == null ? void 0 : g.modelId,
                  modelType:
                    p || (h = u[f].orphanModel) == null ? void 0 : h.modelType,
                  setMutation: R[k][f],
                }),
              );
            }
          },
          k = 0;
        k < R.length;
        k++
      )
        await E();
      var I = L,
        T =
          I == null
            ? null
            : o("WATimeUtils").daysDiff(o("WATimeUtils").unixTimeMs(), I);
      (Ee(c, function () {
        return o("WALogger").LOG(
          ue ||
            (ue = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: max timestamp from recent patch: ",
              " days agp",
            ])),
          T != null ? T : "n/a",
        );
      }),
        s &&
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            a +
              " max timestamp from recent patch: " +
              (T != null ? T : "n/a") +
              " days ago",
          )));
      var D = m.reduce(function (e, t) {
        var n = t.actionState;
        return (e[n] == null && (e[n] = 0), e[n]++, e);
      }, {});
      return (
        i == null ||
          i.mark(
            "apply_set_mutations_end",
            babelHelpers.extends(
              { source: n, collectionName: e, count: C.length },
              D,
            ),
          ),
        o(
          "WAWebSyncdCriticalBootstrapProcessingApi",
        ).logCriticalBootstrapStageIfNecessary(
          o("WAWebWamEnumBootstrapAppStateDataStageCode")
            .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.APPLIED_MUTATIONS,
        ),
        e === o("WAWebSyncdConst").CollectionName.CriticalBlock &&
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            a +
              " apply states for " +
              e +
              " v" +
              (l != null ? l : "n/a") +
              ": " +
              m
                .map(function (e) {
                  return e.actionState;
                })
                .join(", "),
          )),
        Ee(c, function () {
          return o("WALogger").LOG(
            ce ||
              (ce = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " syncd: completed apply set mutations for ",
                " ",
                "",
              ])),
            a,
            e,
            d,
          );
        }),
        { setMutationsToPersist: m, pendingSetMutationsToDrop: y }
      );
    }
    async function Ve(e, t, n) {
      var r = He(t),
        a = r.supportedMutations,
        i = je(a),
        l = await o("WAWebSyncdResolveConflict").resolveRemoveConflicts(e, a);
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
      for (var s = 0; s < i.length; s++) {
        var u = i[s][0].actionHandler;
        await u.applyMutations(
          i[s].map(function (t) {
            return { operation: "remove", indexParts: Qe(e, t.index) };
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
        { pendingMutationsToDrop: l }
      );
    }
    function He(e) {
      var t = [],
        n = 0,
        r = [],
        a = 0,
        i = e.map(function (e) {
          if (e.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion())
            return { unsupported: e };
          var i = Qe(e.collection, e.index),
            l = o("WAWebSyncdConst").Actions.cast(i[0]);
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
    function Ge(e) {
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
    function ze(e, t) {
      var n = [],
        r = 0,
        a = [],
        i = 0,
        l = t.map(function (t) {
          if (t.version > o("WAWebSyncdGetActionHandler").maxSupportedVersion())
            return { unsupported: t };
          var l = Qe(e, t.index),
            s = o("WAWebSyncdConst").Actions.cast(l[0]);
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
    function je(e) {
      return e.reduce(function (e, t) {
        return (
          e.length !== 0 && t.actionName === e[e.length - 1][0].actionName
            ? e[e.length - 1].push(t)
            : e.push([t]),
          e
        );
      }, []);
    }
    async function Ke(e, t, n, r, o) {
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
    function Qe(e, t) {
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
    ((l.applyIndividualMutations = Le), (l.applyAppStateSyncResponse = Ie));
  },
  98,
);
