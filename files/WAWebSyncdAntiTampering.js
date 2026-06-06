__d(
  "WAWebSyncdAntiTampering",
  [
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
      A = [
        (w = o("WASyncdConst")).Actions.LocaleSetting,
        w.Actions.SettingPushName,
        "generated_wui",
        w.Actions.Sentinel,
        w.Actions.PrimaryVersion,
        w.Actions.TimeFormat,
        w.Actions.Nux,
        w.Actions.BotWelcomeRequest,
        w.Actions.DeviceCapabilities,
        w.Actions.Archive,
        w.Actions.LockChat,
        w.Actions.FavoriteSticker,
        w.Actions.ChatLockSettings,
        w.Actions.MarkChatAsRead,
        w.Actions.NoteEdit,
        w.Actions.Pin,
        w.Actions.PinDEPRECATED,
        w.Actions.RemoveRecentSticker,
        w.Actions.UnarchiveChatsSetting,
        w.Actions.AndroidUnsupportedActions,
      ];
    function F(e, t, n) {
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
    var O = o("WATextEncoding").newTextDecoder();
    async function B(t, n, r) {
      var a = n.keyId,
        i = n.mac,
        l = n.records,
        u = n.version,
        c = await o("WAWebSyncdKeyCache").getKeyData(a.id);
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
            `] syncd:
  `,
            ` snapshot macsToAdd:
      `,
            "",
          ])),
        r,
        t,
        Array.from(d.entries()).map(function (e) {
          var t = e[0],
            n = e[1];
          return F(t, n);
        }).join(`
	`),
      );
      var m = await o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.add(
          o("WACryptoLtHash").EMPTY_LT_HASH,
          Array.from(d.values()),
        ),
        p = await o("WAWebSyncdCrypto").generateEncryptionKeys(c),
        _ = p.snapshotMacKey,
        f = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(u.version),
        g = o("WAEncodeString").toUtf8(t).buffer;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: validating snapshot mac for ",
            " snapshot v",
            `:
  ltHash: `,
            `
  encoded version: `,
            `
  encoded collection: `,
            `
  expected snapshotMAC: `,
            `
  `,
          ])),
        r,
        t,
        u.version,
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(m),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(f),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(g),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(i),
      );
      var h = await U(
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
    }
    async function W(e, t, n, r, a) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: computeLtHashAndValidatePatch for ",
            "",
          ])),
        n,
        e,
      );
      var i = t.keyId,
        l = t.mutations,
        s = t.patchMac,
        m = t.snapshotMac,
        p = t.version,
        _ = i.id,
        f = await o("WAWebSyncdKeyCache").getKeyData(_);
      if (!f) throw new (o("WAWebSyncdError").SyncdMissingKeyError)();
      var g = a.map(function (t) {
          var n = o("WASyncdConst").Actions.cast(
            o("WAWebSyncdActionUtils").getMutationNameFromIndex(e, t.index),
          );
          return n == null
            ? null
            : [o("WAArrayBufferUtils").arrayBufferToString(t.indexMac), n];
        }),
        h = new Map(g.filter(Boolean)),
        y =
          o("WAWebABProps").getABPropConfigValue(
            "syncd_use_index_for_lthash_lookup",
          ) === !0,
        C = y
          ? new Map(
              a.map(function (e) {
                return [
                  o("WAArrayBufferUtils").arrayBufferToString(e.indexMac),
                  e.index,
                ];
              }),
            )
          : null,
        b = l.map(function (e) {
          var t = o("WAArrayBufferUtils").arrayBufferToString(
            e.record.index.blob,
          );
          return {
            operation: e.operation,
            indexMac: e.record.index.blob,
            valueMac: o("WAWebSyncdCrypto").valueMacFromIndexAndValueCipherText(
              e.record.value.blob,
            ),
            action: h.get(t),
            index: C == null ? void 0 : C.get(t),
          };
        }),
        v = await o(
          "WAWebGetCollectionVersion",
        ).getCollectionVersionLtHashInTransaction(e),
        S = await G(
          e,
          b,
          n,
          r,
          t.version.version,
          o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection.Incoming,
          v,
        ),
        R = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(p.version),
        L = o("WAEncodeString").toUtf8(e).buffer;
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "[",
            "] syncd: validating snapshot and patch mac for ",
            " v",
            `:
  expected snapshotMAC: `,
            `
  expected patchMAC: `,
            `
  encoded version: `,
            `
  encoded collection: `,
            `
  key ID: `,
            `
  `,
          ])),
        n,
        e,
        p.version,
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(m),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(s),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(R),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(L),
        o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(
          o("WASyncdKeyTypes").fromSyncKeyId(_),
        ),
      );
      var E, k;
      try {
        ((E = await V(
          e,
          s,
          f,
          m,
          b.map(function (e) {
            return e.valueMac;
          }),
          l.length,
          p.version,
          n,
        )),
          (k = await U(
            e,
            m,
            f,
            S.ltHash,
            R,
            L,
            !1,
            l.length,
            p.version,
            t.clientDebugData,
            v,
            S,
            t.deviceIndex,
            n,
          )));
      } catch (e) {
        throw (await I(), e);
      }
      return {
        ltHash: S.ltHash,
        computedPatchMac: E,
        computedSnapshotMacAfterPatch: k,
      };
      async function I() {
        var t = await Q(e, n, "logErrorDiagnostics", !1),
          r = new Map(
            t.map(function (e) {
              var t = e.indexMac,
                n = e.valueMac;
              return [
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(t),
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(n),
              ];
            }),
          );
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose(
              [
                "[",
                `] syncd: error on incoming records:
    	`,
                "",
              ],
              [
                "[",
                `] syncd: error on incoming records:
    \\t`,
                "",
              ],
            )),
          n,
          b.map(function (e) {
            var t = e.indexMac,
              n = e.operation,
              a = e.valueMac;
            return (
              (n ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
                ? "set"
                : "remove") +
              " | " +
              F(t, a, !1) +
              " | " +
              (r.has(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(t))
                ? "found"
                : "did not find") +
              " indexMAC in the above logged macs"
            );
          }).join(`
	`),
        );
      }
    }
    async function q(e, t, n) {
      var r = await o("WAWebGetCollectionVersion")
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
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
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
      var i = await o(
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
    }
    async function U(e, t, n, r, a, i, l, s, u, c, d, m, p, R) {
      var L,
        E = !l,
        k =
          (L = await o(
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
        T = await I(n, r, u, e),
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
          l || (await q(e, u, R)),
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "[" + R + "] failed validate snapshot mac",
          ));
        var P = await o("WAWebSyncdAntiTamperingLtHash").checkLtHash(R, e),
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
          U = m == null ? void 0 : m.hasOverride,
          V = m == null ? void 0 : m.numAdd,
          H = m == null ? void 0 : m.numRemove,
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
          Y = (await o("WAWebKeyManagementUtils").getPeerDevices()).length > 1;
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
              macFatalNumberHasOverrideMutation: U,
              macFatalNumberNumAddMutation: V,
              macFatalNumberNumRemoveMutation: H,
              macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
                G,
              isPatchSenderPrimary: z,
              macFatalDidUseMacFetchFallback: Q,
              macFatalHasMissingRemove: X,
              macFatalNumberAddMismatch: j,
              macFatalNumberRemoveMismatch: K,
              isThereAnotherSyncdCompanion: Y,
              isPureSyncdSession: await o(
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
                `] syncd: fatal extra details:
      mdFatalErrorCode: `,
                `,
      collection: `,
                `,
      mutationCount: `,
                `,
      patchVersion: `,
                `,
      isLtHashConsistent: `,
                `,
      macFatalCollectionNameMismatch: `,
                `,
      macFatalCurrentLthashMismatch: `,
                `,
      macFatalNewLthashMismatch: `,
                `,
      macFatalPatchVersionMismatch: `,
                `,
      macFatalNewLthashSubtractMismatch: `,
                `,
      macFatalNumberHasOverrideMutation: `,
                `,
      macFatalNumberNumAddMutation: `,
                `,
      macFatalNumberNumRemoveMutation: `,
                `,
      macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch: `,
                `,
      isPatchSenderPrimary: `,
                `,
      macFatalDidUseMacFetchFallback: `,
                `,
      macFatalHasMissingRemove: `,
                `,
      macFatalNumberAddMismatch: `,
                `,
      macFatalNumberRemoveMismatch: `,
                `,
      isThereAnotherSyncdCompanion: `,
                `
    `,
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
            U,
            V,
            H,
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
          await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
          var J = "syncd: unable to validate snapshot mac. collection: " + e;
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
            (await o(
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
                  `,
        scratchLtHash: `,
                  `,
        currentLtHash: `,
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
                .arrayBufferToHexPadded(M != null ? M : new ArrayBuffer(0))
                .slice(-16),
              o("WAWebSyncdCryptoUtils")
                .arrayBufferToHexPadded(d != null ? d : new ArrayBuffer(0))
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
    }
    async function V(e, t, n, r, a, i, l, s) {
      var u = o("WAWebEncryptionManagerSelector").syncdEncryptionManager()
          .generatePatchMac,
        c = await u(n, r, a, l, e),
        d = o("WACryptoUtils").arrayBuffersEqual(c, t);
      if (!d)
        throw (
          await q(e, l, s),
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "failed validate patch mac",
          ),
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .MAC_MISMATCH_PATCH,
            { collection: e, patchSnapshotMutationCount: i, patchVersion: l },
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
    }
    async function H(e, t, n, r) {
      var a =
          (await o("WAWebGetCollectionVersion")
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
        u = await s.generateSnapshotMac(r, t, a, e),
        c = await s.generatePatchMac(
          r,
          u,
          n.map(function (e) {
            return e.valueMac;
          }),
          a,
          e,
        ),
        d = await o("WAWebSyncdCrypto").generateEncryptionKeys(r),
        m = d.patchMacKey,
        p = d.snapshotMacKey;
      return (
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: computing snapshot and patch macs for outgoing patch ",
              " v",
              `:
  encoded version: `,
              `
  encoded collection: `,
              `
  snapshotMAC: `,
              `
  patchMAC: `,
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
    }
    async function G(e, t, n, r, a, i, l) {
      var s =
          o("WAWebABProps").getABPropConfigValue(
            "enable_syncd_debug_data_in_patch",
          ) ||
          e === o("WASyncdConst").CollectionName.CriticalBlock ||
          i === o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection.Outgoing,
        u =
          l != null
            ? l
            : await o(
                "WAWebGetCollectionVersion",
              ).getCollectionVersionLtHashInTransaction(e),
        c =
          o("WAWebABProps").getABPropConfigValue(
            "syncd_use_index_for_lthash_lookup",
          ) === !0 &&
          t.every(function (e) {
            return e.index != null;
          });
      c &&
        o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              "] syncd: using index-based ltHash lookup for ",
              "",
            ])),
          n,
          e,
        );
      var d = c
          ? await j(e, t)
          : await z(
              t.map(function (e) {
                return e.indexMac;
              }),
            ),
        m = new Map(),
        p = new Map(),
        _ = new Map(),
        f = new Set();
      if (c)
        for (var g of t)
          g.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
              .REMOVE &&
            g.index != null &&
            f.add(g.index);
      var h = !1,
        y = !1;
      if (
        (await o("WAPromiseEach").promiseEach(t, async function (r, l) {
          var s,
            u = r.indexMac,
            g = r.operation,
            C = r.valueMac,
            b = c && (s = r.index) != null ? s : O.decode(u),
            v = d.get(b);
          if (v)
            g ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
              ? p.set(
                  o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                  v.valueMac,
                )
              : f.has(b) ||
                _.set(
                  o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                  v.valueMac,
                );
          else if (
            g ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          ) {
            var S = c ? null : await P(u);
            if (S != null) {
              var R;
              (p.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u), S),
                (y = !0),
                o("WALogger")
                  .WARN(
                    k ||
                      (k = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: had to use fallbackQueryForValueMac in collection ",
                        " for platform ",
                        ": ",
                        `
        }`,
                      ])),
                    n,
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
                await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "[" +
                    n +
                    "] used fallback for " +
                    o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                ));
            } else {
              var L, E, D;
              ((h = !0),
                await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  e,
                  "[" +
                    n +
                    "] incoming REMOVE mutation missing in local snapshot for collection " +
                    e +
                    " version " +
                    ((L = a == null ? void 0 : a.toString()) != null
                      ? L
                      : "n/a") +
                    ": " +
                    o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                ),
                await Q(e, n, "REMOVE missing", !1));
              var x =
                `
          syncUseMultipleMacQueries: true
          input mutations mac:
          ` +
                t.map(function (e) {
                  return (
                    (e.operation ===
                    o("WAWebProtobufsServerSync.pb")
                      .SyncdMutation$SyncdOperation.SET
                      ? "SET "
                      : "REMOVE ") + F(e.indexMac, e.valueMac)
                  );
                }).join(`
	`) +
                `
          currentMacs: ` +
                Array.from(d.values())
                  .map(function (e) {
                    return F(e.indexMac, e.valueMac);
                  })
                  .join(", ") +
                `
        `;
              (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                e,
                "missing remove additional info: " + x,
              ),
                o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(
                  o("WAWebWamEnumMdSyncdCriticalEventCode")
                    .MD_SYNCD_CRITICAL_EVENT_CODE.MISSING_MUTATION_TO_REMOVE,
                  e,
                  r.action,
                ));
              var $ =
                "[" +
                n +
                "] syncd: missing indexMAC in sync-actions table for REMOVE mutation in collection " +
                e +
                " version " +
                ((E = a == null ? void 0 : a.toString()) != null ? E : "n/a") +
                " direction " +
                (i || "n/a") +
                " for platform " +
                ((D = o("WAWebConnModel").Conn.platform) != null
                  ? D
                  : "[empty]") +
                ": " +
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u).slice(-16);
              e === o("WASyncdConst").CollectionName.CriticalBlock
                ? (await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e),
                  o("WALogger")
                    .ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      $,
                    )
                    .sendLogs(
                      "syncd: missing indexMAC from REMOVE in collection " + e,
                    ))
                : o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      $,
                    )
                    .sendLogs(
                      "syncd: missing indexMAC from REMOVE in collection " + e,
                      { sampling: 0.01 },
                    );
            }
          }
          g ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET &&
            m.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u), C);
        }),
        h)
      ) {
        var C =
          `
      syncUseMultipleMacQueries: true
      input mutations mac:
      ` +
          t.map(function (e) {
            return (
              (e.operation ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
                ? "SET "
                : "REMOVE ") + F(e.indexMac, e.valueMac)
            );
          }).join(`
	`) +
          `
      currentMacs: ` +
          Array.from(d.values())
            .map(function (e) {
              return F(e.indexMac, e.valueMac);
            })
            .join(", ") +
          `
    `;
        o("WALogger").LOG(
          D || (D = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          C,
        );
      }
      var b = await o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.subtractThenAdd(
          u,
          Array.from(m.values()),
          Array.from(p.values()).concat(Array.from(_.values())),
        ),
        v = b.ltHash,
        S = b.subtractResult,
        R =
          "[" +
          n +
          "] syncd: computing ltHash for " +
          e +
          `:
  mutations length: ` +
          t.length +
          `
  currentLtHash: ` +
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u).slice(-16) +
          `
  subtractResult: ` +
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(S).slice(-16) +
          `
  currentMacs length: ` +
          d.size +
          `
  macsToAdd:
      ` +
          Array.from(m.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return F(t, n);
          }).join(`
	`) +
          `
  macsToRemove:
      ` +
          Array.from(p.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return F(t, n);
          }).join(`
	`) +
          `
  macsToOverwrite (also remove):
      ` +
          Array.from(_.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return F(t, n);
          }).join(`
	`) +
          `
  newLtHash: ` +
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(v).slice(-16) +
          `
  hasMissingRemove: ` +
          h.toString() +
          `
  didUseFallback: ` +
          y.toString();
      if (
        (o("WALogger").LOG(
          x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          R,
        ),
        await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          e,
          "generate lthash details 1: " + R,
        ),
        s)
      ) {
        var L =
          `
      input mutations mac:
      ` +
          t.map(function (e) {
            return (
              (e.operation ===
              o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET
                ? "SET "
                : "REMOVE ") + F(e.indexMac, e.valueMac)
            );
          }).join(`
	`) +
          `
      currentMacs: ` +
          Array.from(d.values())
            .map(function (e) {
              return F(e.indexMac, e.valueMac);
            })
            .join(", ") +
          `
    `;
        (o("WALogger").LOG(
          $ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          L,
        ),
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "generate lthash details 2: " + L,
          ));
      }
      return {
        ltHash: v,
        numAdd: m.size,
        numRemove: p.size,
        hasOverride: _.size > 0,
        subtractResult: S,
        hasMissingRemove: h,
        didUseFallback: y,
      };
      function P(e) {
        return r == null ? Promise.resolve(null) : r(e);
      }
    }
    async function z(e) {
      var t =
        await o("WAWebGetSyncAction").getSyncActionsByIndexMacsInTransaction(e);
      return new Map(
        t.map(function (e) {
          return [
            O.decode(e.indexMac),
            { indexMac: e.indexMac, valueMac: e.valueMac },
          ];
        }),
      );
    }
    async function j(e, t) {
      var n = new Set();
      for (var r of t) r.index != null && n.add(r.index);
      if (n.size === 0) return new Map();
      var a = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByCollectionAndIndexesInTransaction(e, Array.from(n));
      return new Map(
        a.map(function (e) {
          return [e.index, { indexMac: e.indexMac, valueMac: e.valueMac }];
        }),
      );
    }
    function K(e, t) {
      var n = t.action;
      if (
        n &&
        (o("WAWebCurrentUser").isEmployee() ||
          e === o("WASyncdConst").CollectionName.RegularLow ||
          e === o("WASyncdConst").CollectionName.CriticalBlock ||
          A.includes(n))
      ) {
        if (n === o("WASyncdConst").Actions.DeviceCapabilities) {
          if (o("WAWebCurrentUser").isEmployee()) return t.index;
          var r = t.index.indexOf(":");
          return "device_capabilities:" + t.index.slice(r - 4);
        }
        return n;
      }
    }
    async function Q(e, t, n, r) {
      r === void 0 && (r = !0);
      var a = r ? 20 : 1;
      o("WALogger").LOG(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: logMacs: ",
            ": prepare",
          ])),
        e,
      );
      var i = await o("WAWebRunInTransaction").runInTransaction(
          { SyncActionStore: !0, CollectionVersionStore: !0 },
          function (t) {
            var n = t.CollectionVersionStore,
              r = t.SyncActionStore;
            return Promise.all([
              n.get(e).then(function (e) {
                return e == null ? void 0 : e.version;
              }),
              r.getByCollections([e]),
            ]);
          },
        ),
        l = i[0],
        s = i[1];
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
        l,
        s.length,
        n,
      );
      var u = o("WAWebCurrentUser").isEmployee() ? 200 : 120;
      if (r && s.length > u) return s;
      var c = s.reduce(function (t, n, o) {
        var i;
        return (
          o % a === 0 && t.push(""),
          (t[t.length - 1] +=
            F(n.indexMac, n.valueMac, r) +
            (" " + ((i = K(e, n)) != null ? i : "n/a") + " | ")),
          t
        );
      }, []);
      return (
        c.length > 0 &&
          o("WALogger").LOG(
            M || (M = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
            c.map(function (e) {
              return "|" + e;
            }).join(`
`),
          ),
        (e === o("WASyncdConst").CollectionName.CriticalBlock ||
          e === o("WASyncdConst").CollectionName.RegularLow ||
          o("WAWebCurrentUser").isEmployee()) &&
          (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            e,
            "current local snapshot for " +
              e +
              " v" +
              (l != null ? l : "n/a") +
              " mutation length " +
              s.length +
              " context " +
              n +
              ": " +
              c.join(`
`),
          )),
        s
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
      (l.indexAndValueMacToString = F),
      (l.computeLtHashAndValidateSnapshot = B),
      (l.computeLtHashAndValidatePatch = W),
      (l.computeOutgoingSnapshotAndPatchMacs = H),
      (l.computeLtHash = G),
      (l.logMacsInSnapshot = Q));
  },
  98,
);
