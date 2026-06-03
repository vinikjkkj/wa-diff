__d(
  "WAWebSyncdAntiTampering",
  [
    "Promise",
    "WAArrayBufferUtils",
    "WACryptoLtHash",
    "WACryptoUtils",
    "WAEncodeString",
    "WALogger",
    "WAPromiseEach",
    "WASyncdConst",
    "WASyncdKeyTypes",
    "WATextEncoding",
    "WAWebABProps",
    "WAWebConnModel",
    "WAWebCurrentUser",
    "WAWebEncryptionManagerSelector",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebKeyManagementUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRunInTransaction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering.flow",
    "WAWebSyncdAntiTamperingLtHash",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdSnapshotRecoveryGatingUtils",
    "WAWebWamEnumMdSyncdCriticalEventCode",
    "asyncToGeneratorRuntime",
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
      F = [
        (A = o("WASyncdConst")).Actions.LocaleSetting,
        A.Actions.SettingPushName,
        "generated_wui",
        A.Actions.Sentinel,
        A.Actions.PrimaryVersion,
        A.Actions.TimeFormat,
        A.Actions.Nux,
        A.Actions.BotWelcomeRequest,
        A.Actions.DeviceCapabilities,
        A.Actions.Archive,
        A.Actions.LockChat,
        A.Actions.FavoriteSticker,
        A.Actions.ChatLockSettings,
        A.Actions.MarkChatAsRead,
        A.Actions.NoteEdit,
        A.Actions.Pin,
        A.Actions.PinDEPRECATED,
        A.Actions.RemoveRecentSticker,
        A.Actions.UnarchiveChatsSetting,
        A.Actions.AndroidUnsupportedActions,
      ];
    function O(e, t, n) {
      n === void 0 && (n = !0);
      var r =
          typeof e == "string"
            ? e
            : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e),
        a =
          typeof t == "string"
            ? t
            : o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(t),
        i = n ? -16 : 0;
      return r.slice(i) + ":" + a.slice(i);
    }
    var B = o("WATextEncoding").newTextDecoder();
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = n.keyId,
            i = n.mac,
            l = n.records,
            u = n.version,
            c = yield o("WAWebSyncdKeyCache").getKeyData(a.id);
          if (!c) throw new (o("WAWebSyncdError").SyncdMissingKeyError)();
          var d = new Map(
            l.map(function (e) {
              return [
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(e.index.blob),
                o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(
                  e.value.blob,
                ),
              ];
            }),
          );
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd:\n  ",
                " snapshot macsToAdd:\n      ",
                "",
              ])),
            r,
            t,
            Array.from(d.entries())
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return O(t, n);
              })
              .join("\n	"),
          );
          var m = yield o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.add(
              o("WACryptoLtHash").EMPTY_LT_HASH,
              Array.from(d.values()),
            ),
            p = yield o("WAWebSyncdCrypto").generateEncryptionKeys(c),
            _ = p.snapshotMacKey,
            f = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(u.version),
            g = o("WAEncodeString").toUtf8(t).buffer;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: validating snapshot mac for ",
                " snapshot v",
                ":\n  ltHash: ",
                "\n  encoded version: ",
                "\n  encoded collection: ",
                "\n  expected snapshotMAC: ",
                "\n  ",
              ])),
            r,
            t,
            u.version,
            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(m),
            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(f),
            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(g),
            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(i),
          );
          var h = yield z(
            t,
            i,
            c,
            m,
            f,
            g,
            !0,
            l.length,
            n.version.version,
            null,
            null,
            null,
            null,
            r,
          );
          return { ltHash: m, computedSnapshotMac: h };
        })),
        q.apply(this, arguments)
      );
    }
    function U(e, t, n, r, o) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i) {
            o("WALogger").LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: computeLtHashAndValidatePatch for ",
                  "",
                ])),
              r,
              e,
            );
            var l = t.keyId,
              s = t.mutations,
              m = t.patchMac,
              p = t.snapshotMac,
              _ = t.version,
              f = l.id,
              g = yield o("WAWebSyncdKeyCache").getKeyData(f);
            if (!g) throw new (o("WAWebSyncdError").SyncdMissingKeyError)();
            var h = i.map(function (t) {
                var n = o("WASyncdConst").Actions.cast(
                  o("WAWebSyncdActionUtils").getMutationNameFromIndex(
                    e,
                    t.index,
                  ),
                );
                return n == null
                  ? null
                  : [
                      o("WAArrayBufferUtils").arrayBufferToString(t.indexMac),
                      n,
                    ];
              }),
              y = new Map(h.filter(Boolean)),
              C =
                o("WAWebABProps").getABPropConfigValue(
                  "syncd_use_index_for_lthash_lookup",
                ) === !0,
              b = C
                ? new Map(
                    i.map(function (e) {
                      return [
                        o("WAArrayBufferUtils").arrayBufferToString(e.indexMac),
                        e.index,
                      ];
                    }),
                  )
                : null,
              v = s.map(function (e) {
                var t = o("WAArrayBufferUtils").arrayBufferToString(
                  e.record.index.blob,
                );
                return {
                  operation: e.operation,
                  indexMac: e.record.index.blob,
                  valueMac: o(
                    "WAWebSyncdCrypto",
                  ).valueMacFromIndexAndValueCipherText(e.record.value.blob),
                  action: y.get(t),
                  index: b == null ? void 0 : b.get(t),
                };
              }),
              S = yield o(
                "WAWebGetCollectionVersion",
              ).getCollectionVersionLtHashInTransaction(e),
              R = yield J(
                e,
                v,
                r,
                a,
                t.version.version,
                o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection.Incoming,
                S,
              ),
              L = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(_.version),
              E = o("WAEncodeString").toUtf8(e).buffer;
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: validating snapshot and patch mac for ",
                  " v",
                  ":\n  expected snapshotMAC: ",
                  "\n  expected patchMAC: ",
                  "\n  encoded version: ",
                  "\n  encoded collection: ",
                  "\n  key ID: ",
                  "\n  ",
                ])),
              r,
              e,
              _.version,
              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(p),
              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(m),
              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(L),
              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(E),
              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                o("WASyncdKeyTypes").fromSyncKeyId(f),
              ),
            );
            var k, I;
            try {
              ((k = yield K(
                e,
                m,
                g,
                p,
                v.map(function (e) {
                  return e.valueMac;
                }),
                s.length,
                _.version,
                r,
              )),
                (I = yield z(
                  e,
                  p,
                  g,
                  R.ltHash,
                  L,
                  E,
                  !1,
                  s.length,
                  _.version,
                  t.clientDebugData,
                  S,
                  R,
                  t.deviceIndex,
                  r,
                )));
            } catch (e) {
              throw (yield T(), e);
            }
            return {
              ltHash: R.ltHash,
              computedPatchMac: k,
              computedSnapshotMacAfterPatch: I,
            };
            function T() {
              return D.apply(this, arguments);
            }
            function D() {
              return (
                (D = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var t = yield ae(e, r, "logErrorDiagnostics", !1),
                      n = new Map(
                        t.map(function (e) {
                          var t = e.indexMac,
                            n = e.valueMac;
                          return [
                            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                              t,
                            ),
                            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                              n,
                            ),
                          ];
                        }),
                      );
                    o("WALogger").LOG(
                      d ||
                        (d = babelHelpers.taggedTemplateLiteralLoose(
                          [
                            "[",
                            "] syncd: error on incoming records:\n    	",
                            "",
                          ],
                          [
                            "[",
                            "] syncd: error on incoming records:\n    \\t",
                            "",
                          ],
                        )),
                      r,
                      v
                        .map(function (e) {
                          var t = e.indexMac,
                            r = e.operation,
                            a = e.valueMac;
                          return (
                            (r ===
                            o("WAWebProtobufsServerSync.pb")
                              .SyncdMutation$SyncdOperation.SET
                              ? "set"
                              : "remove") +
                            " | " +
                            O(t, a, !1) +
                            " | " +
                            (n.has(
                              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                                t,
                              ),
                            )
                              ? "found"
                              : "did not find") +
                            " indexMAC in the above logged macs"
                          );
                        })
                        .join("\n	"),
                    );
                  },
                )),
                D.apply(this, arguments)
              );
            }
          },
        )),
        V.apply(this, arguments)
      );
    }
    function H(e, t, n) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebGetCollectionVersion")
            .getCollectionVersionInTransaction(e)
            .then(function (e) {
              var t;
              return (t = e == null ? void 0 : e.version) != null ? t : 0;
            });
          if (r !== t - 1) {
            var a = r > t - 1 ? "greater-than-expected" : "less-than-expected";
            throw (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: ",
                      " received patch v",
                      " !== latest local version (v",
                      ") + 1",
                    ])),
                  n,
                  e,
                  t,
                  r,
                )
                .sendLogs("syncd-version-check-error-local-version-" + a),
              yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "[" +
                  n +
                  "] received patch v" +
                  t +
                  " !== latest local version (v" +
                  r +
                  ") + 1",
              ),
              new (o("WAWebSyncdError").SyncdRetryableError)(
                "syncd-version-check-error-local-version-" + a,
              )
            );
          }
          var i = yield o(
            "WAWebGetCollectionVersion",
          ).getCollectionVersionLtHashInTransaction(e);
          if (
            o("WACryptoUtils").arrayBuffersEqual(
              i,
              o("WACryptoLtHash").EMPTY_LT_HASH,
            ) &&
            t !== 1
          )
            throw (
              o("WALogger")
                .WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: empty local lthash found when processing ",
                      " patch v",
                      "",
                    ])),
                  n,
                  e,
                  t,
                )
                .sendLogs("syncd-empty-lthash-on-mac-mismatch"),
              new (o("WAWebSyncdError").SyncdRetryableError)("empty lthash")
            );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t, n, r, o, a, i, l, s, u, c, d, m, p) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s, u, c, d, m, p, R) {
            var L,
              E = !l,
              k =
                (L = yield o(
                  "WAWebGetCollectionVersion",
                ).getIsCollectionInMacMismatchFatalInTransaction(e)) != null
                  ? L
                  : !1;
            if (E && k)
              return (
                o("WALogger").LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: collection ",
                      " is already in snapshot mac mismatch so not checking again",
                    ])),
                  R,
                  e,
                ),
                null
              );
            var I = o("WAWebEncryptionManagerSelector").syncdEncryptionManager()
                .generateSnapshotMac,
              T = yield I(n, r, u, e),
              D = o("WACryptoUtils").arrayBuffersEqual(T, t),
              x = o(
                "WAWebSyncdSnapshotRecoveryGatingUtils",
              ).shouldPreformSnapshotRecovery(
                e,
                s,
                new (o("WAWebSyncdError").SyncdFatalError)("probe"),
              ),
              $ = !D && l && x.shouldPerformRecovery;
            if (!D) {
              ($ &&
                o("WALogger").ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: snapshot mac mismatch, will perform recovery for ",
                      " v",
                      " with ",
                      " mutations",
                    ])),
                  R,
                  e,
                  u,
                  s,
                ),
                l || (yield H(e, u, R)),
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "[" + R + "] failed validate snapshot mac",
                ));
              var P = yield o("WAWebSyncdAntiTamperingLtHash").checkLtHash(
                  R,
                  e,
                ),
                N = P.isLtHashConsistent,
                M = P.scratchLtHash,
                w = l
                  ? o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                      .SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT
                  : o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                      .SNAPSHOT_MAC_MISMATCH_IN_PATCH,
                A =
                  (c == null ? void 0 : c.collectionName) &&
                  !o("WACryptoUtils").arrayBuffersEqual(
                    i,
                    c == null ? void 0 : c.collectionName,
                  ),
                F =
                  (c == null ? void 0 : c.newLthash) &&
                  !o("WACryptoUtils").arrayBuffersEqual(
                    r,
                    c == null ? void 0 : c.newLthash,
                  ),
                O =
                  (c == null ? void 0 : c.patchVersion) &&
                  !o("WACryptoUtils").arrayBuffersEqual(
                    a,
                    c == null ? void 0 : c.patchVersion,
                  ),
                B =
                  (c == null ? void 0 : c.currentLthash) &&
                  d &&
                  !o("WACryptoUtils").arrayBuffersEqual(
                    d,
                    c == null ? void 0 : c.currentLthash,
                  ),
                W =
                  (c == null ? void 0 : c.newLthashSubtract) &&
                  (m == null ? void 0 : m.subtractResult) &&
                  !o("WACryptoUtils").arrayBuffersEqual(
                    m == null ? void 0 : m.subtractResult,
                    c == null ? void 0 : c.newLthashSubtract,
                  ),
                q = m == null ? void 0 : m.hasOverride,
                U = m == null ? void 0 : m.numAdd,
                V = m == null ? void 0 : m.numRemove,
                G =
                  (c == null ? void 0 : c.currentLthash) &&
                  M &&
                  !o("WACryptoUtils").arrayBuffersEqual(
                    M,
                    c == null ? void 0 : c.currentLthash,
                  ),
                z = p === 0,
                j =
                  (c == null ? void 0 : c.numberAdd) != null &&
                  (m == null ? void 0 : m.numAdd) != null &&
                  (m == null ? void 0 : m.numAdd) !==
                    (c == null ? void 0 : c.numberAdd),
                K =
                  (c == null ? void 0 : c.numberRemove) != null &&
                  (m == null ? void 0 : m.numRemove) != null &&
                  (m == null ? void 0 : m.numRemove) !==
                    (c == null ? void 0 : c.numberRemove),
                Q = m == null ? void 0 : m.didUseFallback,
                X = m == null ? void 0 : m.hasMissingRemove,
                Y =
                  (yield o("WAWebKeyManagementUtils").getPeerDevices()).length >
                  1;
              if (
                (o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                  w,
                  {
                    collection: e,
                    patchSnapshotMutationCount: s,
                    patchVersion: u,
                    isFatal: !E,
                    isLtHashConsistent: N,
                    macFatalCollectionNameMismatch: A,
                    macFatalCurrentLthashMismatch: B,
                    macFatalNewLthashMismatch: F,
                    macFatalPatchVersionMismatch: O,
                    macFatalNewLthashSubtractMismatch: W,
                    macFatalNumberHasOverrideMutation: q,
                    macFatalNumberNumAddMutation: U,
                    macFatalNumberNumRemoveMutation: V,
                    macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
                      G,
                    isPatchSenderPrimary: z,
                    macFatalDidUseMacFetchFallback: Q,
                    macFatalHasMissingRemove: X,
                    macFatalNumberAddMismatch: j,
                    macFatalNumberRemoveMismatch: K,
                    isThereAnotherSyncdCompanion: Y,
                    isPureSyncdSession: yield o(
                      "WAWebSyncdAntiTamperingLtHash",
                    ).getPureSyncDSessionDetails(),
                    lidMigrationStage: o(
                      "WAWebSyncdAntiTamperingLtHash",
                    ).getLidMigrationStage(),
                    recoveryStatus: x.reason,
                  },
                  $,
                ),
                o("WALogger").LOG(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "[",
                      "] syncd: fatal extra details:\n      mdFatalErrorCode: ",
                      ",\n      collection: ",
                      ",\n      mutationCount: ",
                      ",\n      patchVersion: ",
                      ",\n      isLtHashConsistent: ",
                      ",\n      macFatalCollectionNameMismatch: ",
                      ",\n      macFatalCurrentLthashMismatch: ",
                      ",\n      macFatalNewLthashMismatch: ",
                      ",\n      macFatalPatchVersionMismatch: ",
                      ",\n      macFatalNewLthashSubtractMismatch: ",
                      ",\n      macFatalNumberHasOverrideMutation: ",
                      ",\n      macFatalNumberNumAddMutation: ",
                      ",\n      macFatalNumberNumRemoveMutation: ",
                      ",\n      macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch: ",
                      ",\n      isPatchSenderPrimary: ",
                      ",\n      macFatalDidUseMacFetchFallback: ",
                      ",\n      macFatalHasMissingRemove: ",
                      ",\n      macFatalNumberAddMismatch: ",
                      ",\n      macFatalNumberRemoveMismatch: ",
                      ",\n      isThereAnotherSyncdCompanion: ",
                      "\n    ",
                    ])),
                  R,
                  w,
                  e,
                  s,
                  u,
                  N,
                  A,
                  B,
                  F,
                  O,
                  W,
                  q,
                  U,
                  V,
                  G,
                  z,
                  Q,
                  X,
                  j,
                  K,
                  Y,
                ),
                E)
              ) {
                yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
                var J =
                  "syncd: unable to validate snapshot mac. collection: " + e;
                if (o("WAWebCurrentUser").isEmployee())
                  o("WALogger")
                    .ERROR(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[",
                          "] ",
                          "",
                        ])),
                      R,
                      J,
                    )
                    .sendLogs(J, { sampling: 1 });
                else if (c != null) {
                  var Z = J + " (additional info)";
                  o("WALogger")
                    .ERROR(
                      y ||
                        (y = babelHelpers.taggedTemplateLiteralLoose([
                          "[",
                          "] ",
                          "",
                        ])),
                      R,
                      Z,
                    )
                    .sendLogs(Z, { sampling: 1 });
                } else
                  o("WALogger")
                    .ERROR(
                      C ||
                        (C = babelHelpers.taggedTemplateLiteralLoose([
                          "[",
                          "]  ",
                          "",
                        ])),
                      R,
                      J,
                    )
                    .sendLogs(J, { sampling: 0.01 });
                if (
                  (yield o(
                    "WAWebGetCollectionVersion",
                  ).updateIsCollectionInMacMismatchFatalInTransaction(e),
                  o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: skip fatal after snapshot mac mismatch for collection ",
                        "",
                      ])),
                    R,
                    e,
                  ),
                  G === !1 && B === !0)
                ) {
                  var ee;
                  (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: clientDebugData?.currentLthash: ",
                        ",\n        scratchLtHash: ",
                        ",\n        currentLtHash: ",
                        "",
                      ])),
                    R,
                    o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(
                        (ee = c == null ? void 0 : c.currentLthash) != null
                          ? ee
                          : new ArrayBuffer(0),
                      )
                      .slice(-16),
                    o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(
                        M != null ? M : new ArrayBuffer(0),
                      )
                      .slice(-16),
                    o("WAWebSyncdCryptoUtils")
                      .arrayBufferToHexPadded(
                        d != null ? d : new ArrayBuffer(0),
                      )
                      .slice(-16),
                  ),
                    o("WALogger")
                      .ERROR(
                        S ||
                          (S = babelHelpers.taggedTemplateLiteralLoose([
                            "syncd: snapshot_mac_mismatch_in_patch due to cache mismatch",
                          ])),
                      )
                      .sendLogs(
                        "syncd: snapshot_mac_mismatch_in_patch due to cache mismatch",
                      ));
                }
                return T;
              }
              throw new (o("WAWebSyncdError").SyncdFatalError)(
                "unable to validate snapshot mac",
              );
            }
            return T;
          },
        )),
        j.apply(this, arguments)
      );
    }
    function K(e, t, n, r, o, a, i, l) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i, l, s) {
            var u = o("WAWebEncryptionManagerSelector").syncdEncryptionManager()
                .generatePatchMac,
              c = yield u(n, r, a, l, e),
              d = o("WACryptoUtils").arrayBuffersEqual(c, t);
            if (!d)
              throw (
                yield H(e, l, s),
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "failed validate patch mac",
                ),
                o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                  o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                    .MAC_MISMATCH_PATCH,
                  {
                    collection: e,
                    patchSnapshotMutationCount: i,
                    patchVersion: l,
                  },
                ),
                o("WALogger")
                  .WARN(
                    R ||
                      (R = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: unable to validate patch mac.",
                      ])),
                    s,
                  )
                  .sendLogs("syncd: unable to validate patch mac."),
                new (o("WAWebSyncdError").SyncdFatalError)(
                  "unable to validate patch mac",
                )
              );
            return c;
          },
        )),
        Q.apply(this, arguments)
      );
    }
    function X(e, t, n, r) {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a =
                (yield o("WAWebGetCollectionVersion")
                  .getCollectionVersionInTransaction(e)
                  .then(function (e) {
                    var t;
                    return (t = e == null ? void 0 : e.version) != null
                      ? t
                      : o("WASyncdConst").DEFAULT_COLLECTION_VERSION;
                  })) + 1,
              i = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(a),
              l = o("WAEncodeString").toUtf8(e).buffer,
              s = o("WAWebEncryptionManagerSelector").syncdEncryptionManager(),
              u = yield s.generateSnapshotMac(r, t, a, e),
              c = yield s.generatePatchMac(
                r,
                u,
                n.map(function (e) {
                  return e.valueMac;
                }),
                a,
                e,
              ),
              d = yield o("WAWebSyncdCrypto").generateEncryptionKeys(r),
              m = d.patchMacKey,
              p = d.snapshotMacKey;
            return (
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: computing snapshot and patch macs for outgoing patch ",
                    " v",
                    ":\n  encoded version: ",
                    "\n  encoded collection: ",
                    "\n  snapshotMAC: ",
                    "\n  patchMAC: ",
                    "",
                  ])),
                e,
                a,
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(i),
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(l),
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(c),
              ),
              { snapshotMac: u, patchMac: c }
            );
          },
        )),
        Y.apply(this, arguments)
      );
    }
    function J(e, t, n, r, o, a, i) {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a, i, l, s) {
            var u =
                o("WAWebABProps").getABPropConfigValue(
                  "enable_syncd_debug_data_in_patch",
                ) ||
                e === o("WASyncdConst").CollectionName.CriticalBlock ||
                l ===
                  o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection
                    .Outgoing,
              c =
                s != null
                  ? s
                  : yield o(
                      "WAWebGetCollectionVersion",
                    ).getCollectionVersionLtHashInTransaction(e),
              d =
                o("WAWebABProps").getABPropConfigValue(
                  "syncd_use_index_for_lthash_lookup",
                ) === !0 &&
                t.every(function (e) {
                  return e.index != null;
                });
            d &&
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: using index-based ltHash lookup for ",
                    "",
                  ])),
                r,
                e,
              );
            var m = d
                ? yield ne(e, t)
                : yield ee(
                    t.map(function (e) {
                      return e.indexMac;
                    }),
                  ),
              p = new Map(),
              _ = new Map(),
              f = new Map(),
              g = new Set();
            if (d)
              for (var h of t)
                h.operation ===
                  o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                    .REMOVE &&
                  h.index != null &&
                  g.add(h.index);
            var y = !1,
              C = !1;
            if (
              (yield o("WAPromiseEach").promiseEach(
                t,
                (function () {
                  var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (n, a) {
                      var s,
                        u = n.indexMac,
                        c = n.operation,
                        h = n.valueMac,
                        b = d && (s = n.index) != null ? s : B.decode(u),
                        v = m.get(b);
                      if (v)
                        c ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.REMOVE
                          ? _.set(
                              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                                u,
                              ),
                              v.valueMac,
                            )
                          : g.has(b) ||
                            f.set(
                              o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                                u,
                              ),
                              v.valueMac,
                            );
                      else if (
                        c ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.REMOVE
                      ) {
                        var S = d ? null : yield N(u);
                        if (S != null) {
                          var R;
                          (_.set(
                            o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
                              u,
                            ),
                            S,
                          ),
                            (C = !0),
                            o("WALogger")
                              .WARN(
                                k ||
                                  (k = babelHelpers.taggedTemplateLiteralLoose([
                                    "[",
                                    "] syncd: had to use fallbackQueryForValueMac in collection ",
                                    " for platform ",
                                    ": ",
                                    "\n        }",
                                  ])),
                                r,
                                e,
                                (R = o("WAWebConnModel").Conn.platform) != null
                                  ? R
                                  : "[empty]",
                                o("WAWebSyncdCryptoUtils")
                                  .arrayBufferToHexPadded(u)
                                  .slice(-16),
                              )
                              .tags("non-sad")
                              .sendLogs("syncd: fallback query"),
                            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                              e,
                              "[" +
                                r +
                                "] used fallback for " +
                                o(
                                  "WAWebSyncdCryptoUtils",
                                ).arrayBufferToHexPadded(u),
                            ));
                        } else {
                          var L, E, D;
                          ((y = !0),
                            yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                              e,
                              "[" +
                                r +
                                "] incoming REMOVE mutation missing in local snapshot for collection " +
                                e +
                                " version " +
                                ((L = i == null ? void 0 : i.toString()) != null
                                  ? L
                                  : "n/a") +
                                ": " +
                                o(
                                  "WAWebSyncdCryptoUtils",
                                ).arrayBufferToHexPadded(u),
                            ),
                            yield ae(e, r, "REMOVE missing", !1));
                          var x =
                            "\n          syncUseMultipleMacQueries: true\n          input mutations mac:\n          " +
                            t
                              .map(function (e) {
                                return (
                                  (e.operation ===
                                  o("WAWebProtobufsServerSync.pb")
                                    .SyncdMutation$SyncdOperation.SET
                                    ? "SET "
                                    : "REMOVE ") + O(e.indexMac, e.valueMac)
                                );
                              })
                              .join("\n	") +
                            "\n          currentMacs: " +
                            Array.from(m.values())
                              .map(function (e) {
                                return O(e.indexMac, e.valueMac);
                              })
                              .join(", ") +
                            "\n        ";
                          (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                            e,
                            "missing remove additional info: " + x,
                          ),
                            o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(
                              o("WAWebWamEnumMdSyncdCriticalEventCode")
                                .MD_SYNCD_CRITICAL_EVENT_CODE
                                .MISSING_MUTATION_TO_REMOVE,
                              e,
                              n.action,
                            ));
                          var $ =
                            "[" +
                            r +
                            "] syncd: missing indexMAC in sync-actions table for REMOVE mutation in collection " +
                            e +
                            " version " +
                            ((E = i == null ? void 0 : i.toString()) != null
                              ? E
                              : "n/a") +
                            " direction " +
                            (l || "n/a") +
                            " for platform " +
                            ((D = o("WAWebConnModel").Conn.platform) != null
                              ? D
                              : "[empty]") +
                            ": " +
                            o("WAWebSyncdCryptoUtils")
                              .arrayBufferToHexPadded(u)
                              .slice(-16);
                          e === o("WASyncdConst").CollectionName.CriticalBlock
                            ? (yield o(
                                "WAWebSyncdDbCallbacksApi",
                              ).printSyncdLog(e),
                              o("WALogger")
                                .ERROR(
                                  I ||
                                    (I =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        "",
                                      ])),
                                  $,
                                )
                                .sendLogs(
                                  "syncd: missing indexMAC from REMOVE in collection " +
                                    e,
                                ))
                            : o("WALogger")
                                .ERROR(
                                  T ||
                                    (T =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "",
                                        "",
                                      ])),
                                  $,
                                )
                                .sendLogs(
                                  "syncd: missing indexMAC from REMOVE in collection " +
                                    e,
                                  { sampling: 0.01 },
                                );
                        }
                      }
                      c ===
                        o("WAWebProtobufsServerSync.pb")
                          .SyncdMutation$SyncdOperation.SET &&
                        p.set(
                          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                          h,
                        );
                    },
                  );
                  return function (e, t) {
                    return a.apply(this, arguments);
                  };
                })(),
              ),
              y)
            ) {
              var b =
                "\n      syncUseMultipleMacQueries: true\n      input mutations mac:\n      " +
                t
                  .map(function (e) {
                    return (
                      (e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.SET
                        ? "SET "
                        : "REMOVE ") + O(e.indexMac, e.valueMac)
                    );
                  })
                  .join("\n	") +
                "\n      currentMacs: " +
                Array.from(m.values())
                  .map(function (e) {
                    return O(e.indexMac, e.valueMac);
                  })
                  .join(", ") +
                "\n    ";
              o("WALogger").LOG(
                D || (D = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                b,
              );
            }
            var v = yield o(
                "WACryptoLtHash",
              ).LT_HASH_ANTI_TAMPERING.subtractThenAdd(
                c,
                Array.from(p.values()),
                Array.from(_.values()).concat(Array.from(f.values())),
              ),
              S = v.ltHash,
              R = v.subtractResult,
              L =
                "[" +
                r +
                "] syncd: computing ltHash for " +
                e +
                ":\n  mutations length: " +
                t.length +
                "\n  currentLtHash: " +
                o("WAWebSyncdCryptoUtils")
                  .arrayBufferToHexPadded(c)
                  .slice(-16) +
                "\n  subtractResult: " +
                o("WAWebSyncdCryptoUtils")
                  .arrayBufferToHexPadded(R)
                  .slice(-16) +
                "\n  currentMacs length: " +
                m.size +
                "\n  macsToAdd:\n      " +
                Array.from(p.entries())
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return O(t, n);
                  })
                  .join("\n	") +
                "\n  macsToRemove:\n      " +
                Array.from(_.entries())
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return O(t, n);
                  })
                  .join("\n	") +
                "\n  macsToOverwrite (also remove):\n      " +
                Array.from(f.entries())
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return O(t, n);
                  })
                  .join("\n	") +
                "\n  newLtHash: " +
                o("WAWebSyncdCryptoUtils")
                  .arrayBufferToHexPadded(S)
                  .slice(-16) +
                "\n  hasMissingRemove: " +
                y.toString() +
                "\n  didUseFallback: " +
                C.toString();
            if (
              (o("WALogger").LOG(
                x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                L,
              ),
              yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "generate lthash details 1: " + L,
              ),
              u)
            ) {
              var P =
                "\n      input mutations mac:\n      " +
                t
                  .map(function (e) {
                    return (
                      (e.operation ===
                      o("WAWebProtobufsServerSync.pb")
                        .SyncdMutation$SyncdOperation.SET
                        ? "SET "
                        : "REMOVE ") + O(e.indexMac, e.valueMac)
                    );
                  })
                  .join("\n	") +
                "\n      currentMacs: " +
                Array.from(m.values())
                  .map(function (e) {
                    return O(e.indexMac, e.valueMac);
                  })
                  .join(", ") +
                "\n    ";
              (o("WALogger").LOG(
                $ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                P,
              ),
                yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "generate lthash details 2: " + P,
                ));
            }
            return {
              ltHash: S,
              numAdd: p.size,
              numRemove: _.size,
              hasOverride: f.size > 0,
              subtractResult: R,
              hasMissingRemove: y,
              didUseFallback: C,
            };
            function N(e) {
              return a == null ? (w || (w = n("Promise"))).resolve(null) : a(e);
            }
          },
        )),
        Z.apply(this, arguments)
      );
    }
    function ee(e) {
      return te.apply(this, arguments);
    }
    function te() {
      return (
        (te = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t =
            yield o(
              "WAWebGetSyncAction",
            ).getSyncActionsByIndexMacsInTransaction(e);
          return new Map(
            t.map(function (e) {
              return [
                B.decode(e.indexMac),
                { indexMac: e.indexMac, valueMac: e.valueMac },
              ];
            }),
          );
        })),
        te.apply(this, arguments)
      );
    }
    function ne(e, t) {
      return re.apply(this, arguments);
    }
    function re() {
      return (
        (re = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Set();
          for (var r of t) r.index != null && n.add(r.index);
          if (n.size === 0) return new Map();
          var a = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByCollectionAndIndexesInTransaction(e, Array.from(n));
          return new Map(
            a.map(function (e) {
              return [e.index, { indexMac: e.indexMac, valueMac: e.valueMac }];
            }),
          );
        })),
        re.apply(this, arguments)
      );
    }
    function oe(e, t) {
      var n = t.action;
      if (
        n &&
        (o("WAWebCurrentUser").isEmployee() ||
          e === o("WASyncdConst").CollectionName.RegularLow ||
          e === o("WASyncdConst").CollectionName.CriticalBlock ||
          F.includes(n))
      ) {
        if (n === o("WASyncdConst").Actions.DeviceCapabilities) {
          if (o("WAWebCurrentUser").isEmployee()) return t.index;
          var r = t.index.indexOf(":");
          return "device_capabilities:" + t.index.slice(r - 4);
        }
        return n;
      }
    }
    function ae(e, t, n, r) {
      return ie.apply(this, arguments);
    }
    function ie() {
      return (
        (ie = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            a === void 0 && (a = !0);
            var i = a ? 20 : 1;
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: logMacs: ",
                  ": prepare",
                ])),
              e,
            );
            var l = yield o("WAWebRunInTransaction").runInTransaction(
                { SyncActionStore: !0, CollectionVersionStore: !0 },
                function (t) {
                  var r = t.CollectionVersionStore,
                    o = t.SyncActionStore;
                  return (w || (w = n("Promise"))).all([
                    r.get(e).then(function (e) {
                      return e == null ? void 0 : e.version;
                    }),
                    o.getByCollections([e]),
                  ]);
                },
              ),
              s = l[0],
              u = l[1];
            o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: current snapshot ",
                  " v",
                  " with ",
                  " mutations. context ",
                  " mutations:",
                ])),
              t,
              e,
              s,
              u.length,
              r,
            );
            var c = o("WAWebCurrentUser").isEmployee() ? 200 : 120;
            if (a && u.length > c) return u;
            var d = u.reduce(function (t, n, r) {
              var o;
              return (
                r % i === 0 && t.push(""),
                (t[t.length - 1] +=
                  O(n.indexMac, n.valueMac, a) +
                  (" " + ((o = oe(e, n)) != null ? o : "n/a") + " | ")),
                t
              );
            }, []);
            return (
              d.length > 0 &&
                o("WALogger").LOG(
                  M || (M = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                  d
                    .map(function (e) {
                      return "|" + e;
                    })
                    .join("\n"),
                ),
              (e === o("WASyncdConst").CollectionName.CriticalBlock ||
                e === o("WASyncdConst").CollectionName.RegularLow ||
                o("WAWebCurrentUser").isEmployee()) &&
                (yield o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "current local snapshot for " +
                    e +
                    " v" +
                    (s != null ? s : "n/a") +
                    " mutation length " +
                    u.length +
                    " context " +
                    r +
                    ": " +
                    d.join("\n"),
                )),
              u
            );
          },
        )),
        ie.apply(this, arguments)
      );
    }
    ((l.SyncdPatchDirection = o(
      "WAWebSyncdAntiTampering.flow",
    ).SyncdPatchDirection),
      (l.checkLtHash = o("WAWebSyncdAntiTamperingLtHash").checkLtHash),
      (l.getLidMigrationStage = o(
        "WAWebSyncdAntiTamperingLtHash",
      ).getLidMigrationStage),
      (l.reportCollectionInconsistency = o(
        "WAWebSyncdAntiTamperingLtHash",
      ).reportCollectionInconsistency),
      (l.indexAndValueMacToString = O),
      (l.computeLtHashAndValidateSnapshot = W),
      (l.computeLtHashAndValidatePatch = U),
      (l.computeOutgoingSnapshotAndPatchMacs = X),
      (l.computeLtHash = J),
      (l.logMacsInSnapshot = ae));
  },
  98,
);
