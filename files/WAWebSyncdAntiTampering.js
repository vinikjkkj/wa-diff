__d(
  "WAWebSyncdAntiTampering",
  [
    "WAArrayBufferUtils",
    "WACryptoLtHash",
    "WACryptoUtils",
    "WAEncodeString",
    "WALogger",
    "WAPromiseEach",
    "WATextEncoding",
    "WAWebABProps",
    "WAWebConnModel",
    "WAWebCurrentUser",
    "WAWebGetCollectionVersion",
    "WAWebGetSyncAction",
    "WAWebKeyManagementUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebRunInTransaction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdAntiTampering.flow",
    "WAWebSyncdAntiTamperingLtHash",
    "WAWebSyncdConst",
    "WAWebSyncdCrypto",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdEncryptionManager",
    "WAWebSyncdError",
    "WAWebSyncdKeyCache",
    "WAWebSyncdKeyTypes",
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
        (w = o("WAWebSyncdConst")).Actions.LocaleSetting,
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
          var n = o("WAWebSyncdConst").Actions.cast(
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
        S = await G({
          collection: e,
          direction: o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection
            .Incoming,
          fallbackQueryForValueMac: r,
          ltHashHint: v,
          mutations: b,
          session: n,
          version: t.version.version,
        }),
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
          o("WAWebSyncdKeyTypes").fromSyncKeyId(_),
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
      var I = await o(
          "WAWebSyncdEncryptionManager",
        ).WASyncdEncryptionManager.generateSnapshotMac(n, r, u, e),
        T = o("WACryptoUtils").arrayBuffersEqual(I, t),
        D = o(
          "WAWebSyncdSnapshotRecoveryGatingUtils",
        ).shouldPreformSnapshotRecovery(
          e,
          s,
          new (o("WAWebSyncdError").SyncdFatalError)("probe"),
        ),
        x = !T && l && D.shouldPerformRecovery;
      if (!T) {
        (x &&
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
        var $ = await o("WAWebSyncdAntiTamperingLtHash").checkLtHash(R, e),
          P = $.isLtHashConsistent,
          N = $.scratchLtHash,
          M = l
            ? o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT
            : o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .SNAPSHOT_MAC_MISMATCH_IN_PATCH,
          w =
            (c == null ? void 0 : c.collectionName) &&
            !o("WACryptoUtils").arrayBuffersEqual(
              i,
              c == null ? void 0 : c.collectionName,
            ),
          A =
            (c == null ? void 0 : c.newLthash) &&
            !o("WACryptoUtils").arrayBuffersEqual(
              r,
              c == null ? void 0 : c.newLthash,
            ),
          F =
            (c == null ? void 0 : c.patchVersion) &&
            !o("WACryptoUtils").arrayBuffersEqual(
              a,
              c == null ? void 0 : c.patchVersion,
            ),
          O =
            (c == null ? void 0 : c.currentLthash) &&
            d &&
            !o("WACryptoUtils").arrayBuffersEqual(
              d,
              c == null ? void 0 : c.currentLthash,
            ),
          B =
            (c == null ? void 0 : c.newLthashSubtract) &&
            (m == null ? void 0 : m.subtractResult) &&
            !o("WACryptoUtils").arrayBuffersEqual(
              m == null ? void 0 : m.subtractResult,
              c == null ? void 0 : c.newLthashSubtract,
            ),
          W = m == null ? void 0 : m.hasOverride,
          U = m == null ? void 0 : m.numAdd,
          V = m == null ? void 0 : m.numRemove,
          H =
            (c == null ? void 0 : c.currentLthash) &&
            N &&
            !o("WACryptoUtils").arrayBuffersEqual(
              N,
              c == null ? void 0 : c.currentLthash,
            ),
          G = p === 0,
          z =
            (c == null ? void 0 : c.numberAdd) != null &&
            (m == null ? void 0 : m.numAdd) != null &&
            (m == null ? void 0 : m.numAdd) !==
              (c == null ? void 0 : c.numberAdd),
          j =
            (c == null ? void 0 : c.numberRemove) != null &&
            (m == null ? void 0 : m.numRemove) != null &&
            (m == null ? void 0 : m.numRemove) !==
              (c == null ? void 0 : c.numberRemove),
          K = m == null ? void 0 : m.didUseFallback,
          Q = m == null ? void 0 : m.hasMissingRemove,
          X = (await o("WAWebKeyManagementUtils").getPeerDevices()).length > 1;
        if (
          (o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            M,
            {
              collection: e,
              patchSnapshotMutationCount: s,
              patchVersion: u,
              isFatal: !E,
              isLtHashConsistent: P,
              macFatalCollectionNameMismatch: w,
              macFatalCurrentLthashMismatch: O,
              macFatalNewLthashMismatch: A,
              macFatalPatchVersionMismatch: F,
              macFatalNewLthashSubtractMismatch: B,
              macFatalNumberHasOverrideMutation: W,
              macFatalNumberNumAddMutation: U,
              macFatalNumberNumRemoveMutation: V,
              macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
                H,
              isPatchSenderPrimary: G,
              macFatalDidUseMacFetchFallback: K,
              macFatalHasMissingRemove: Q,
              macFatalNumberAddMismatch: z,
              macFatalNumberRemoveMismatch: j,
              isThereAnotherSyncdCompanion: X,
              isPureSyncdSession: await o(
                "WAWebSyncdAntiTamperingLtHash",
              ).getPureSyncDSessionDetails(),
              lidMigrationStage: o(
                "WAWebSyncdAntiTamperingLtHash",
              ).getLidMigrationStage(),
              recoveryStatus: D.reason,
            },
            x,
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
            M,
            e,
            s,
            u,
            P,
            w,
            O,
            A,
            F,
            B,
            W,
            U,
            V,
            H,
            G,
            K,
            Q,
            z,
            j,
            X,
          ),
          E)
        ) {
          await o("WAWebSyncdDbCallbacksApi").printSyncdLog(e);
          var Y = "syncd: unable to validate snapshot mac. collection: " + e;
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
                Y,
              )
              .sendLogs(Y, { sampling: 1 });
          else if (c != null) {
            var J = Y + " (additional info)";
            o("WALogger")
              .ERROR(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] ",
                    "",
                  ])),
                R,
                J,
              )
              .sendLogs(J, { sampling: 1 });
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
                Y,
              )
              .sendLogs(Y, { sampling: 0.01 });
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
            H === !1 && O === !0)
          ) {
            var Z;
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
                  (Z = c == null ? void 0 : c.currentLthash) != null
                    ? Z
                    : new ArrayBuffer(0),
                )
                .slice(-16),
              o("WAWebSyncdCryptoUtils")
                .arrayBufferToHexPadded(N != null ? N : new ArrayBuffer(0))
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
          return I;
        }
        throw new (o("WAWebSyncdError").SyncdFatalError)(
          "unable to validate snapshot mac",
        );
      }
      return I;
    }
    async function V(e, t, n, r, a, i, l, s) {
      var u = await o(
          "WAWebSyncdEncryptionManager",
        ).WASyncdEncryptionManager.generatePatchMac({
          collection: e,
          keyData: n,
          patchVersion: l,
          snapshotMac: r,
          valueMacs: a,
        }),
        c = o("WACryptoUtils").arrayBuffersEqual(u, t);
      if (!c)
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
      return u;
    }
    async function H(e, t, n, r) {
      var a =
          (await o("WAWebGetCollectionVersion")
            .getCollectionVersionInTransaction(e)
            .then(function (e) {
              var t;
              return (t = e == null ? void 0 : e.version) != null
                ? t
                : o("WAWebSyncdConst").DEFAULT_COLLECTION_VERSION;
            })) + 1,
        i = o("WAWebSyncdCryptoUtils").to64BitNetworkOrder(a),
        l = o("WAEncodeString").toUtf8(e).buffer,
        s = await o(
          "WAWebSyncdEncryptionManager",
        ).WASyncdEncryptionManager.generateSnapshotMac(r, t, a, e),
        u = await o(
          "WAWebSyncdEncryptionManager",
        ).WASyncdEncryptionManager.generatePatchMac({
          collection: e,
          keyData: r,
          patchVersion: a,
          snapshotMac: s,
          valueMacs: n.map(function (e) {
            return e.valueMac;
          }),
        }),
        c = await o("WAWebSyncdCrypto").generateEncryptionKeys(r),
        d = c.patchMacKey,
        m = c.snapshotMacKey;
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
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(s),
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
        ),
        { snapshotMac: s, patchMac: u }
      );
    }
    async function G(e) {
      var t = e.collection,
        n = e.direction,
        r = e.fallbackQueryForValueMac,
        a = e.ltHashHint,
        i = e.mutations,
        l = e.session,
        s = e.version,
        u =
          o("WAWebABProps").getABPropConfigValue(
            "enable_syncd_debug_data_in_patch",
          ) ||
          t === o("WAWebSyncdConst").CollectionName.CriticalBlock ||
          n === o("WAWebSyncdAntiTampering.flow").SyncdPatchDirection.Outgoing,
        c =
          a != null
            ? a
            : await o(
                "WAWebGetCollectionVersion",
              ).getCollectionVersionLtHashInTransaction(t),
        d =
          o("WAWebABProps").getABPropConfigValue(
            "syncd_use_index_for_lthash_lookup",
          ) === !0 &&
          i.every(function (e) {
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
          l,
          t,
        );
      var m = d
          ? await j(t, i)
          : await z(
              i.map(function (e) {
                return e.indexMac;
              }),
            ),
        p = new Map(),
        _ = new Map(),
        f = new Map(),
        g = new Set();
      if (d)
        for (var h of i)
          h.operation ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
              .REMOVE &&
            h.index != null &&
            g.add(h.index);
      var y = !1,
        C = !1;
      if (
        (await o("WAPromiseEach").promiseEach(i, async function (e, r) {
          var a,
            u = e.indexMac,
            c = e.operation,
            h = e.valueMac,
            b = d && (a = e.index) != null ? a : O.decode(u),
            v = m.get(b);
          if (v)
            c ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
              ? _.set(
                  o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                  v.valueMac,
                )
              : g.has(b) ||
                f.set(
                  o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                  v.valueMac,
                );
          else if (
            c ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.REMOVE
          ) {
            var S = d ? null : await N(u);
            if (S != null) {
              var R;
              (_.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u), S),
                (C = !0),
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
                    l,
                    t,
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
                  t,
                  "[" +
                    l +
                    "] used fallback for " +
                    o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                ));
            } else {
              var L, E, D;
              ((y = !0),
                await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                  t,
                  "[" +
                    l +
                    "] incoming REMOVE mutation missing in local snapshot for collection " +
                    t +
                    " version " +
                    ((L = s == null ? void 0 : s.toString()) != null
                      ? L
                      : "n/a") +
                    ": " +
                    o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u),
                ),
                await Q(t, l, "REMOVE missing", !1));
              var x =
                `
          syncUseMultipleMacQueries: true
          input mutations mac:
          ` +
                i.map(function (e) {
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
                Array.from(m.values())
                  .map(function (e) {
                    return F(e.indexMac, e.valueMac);
                  })
                  .join(", ") +
                `
        `;
              (await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
                t,
                "missing remove additional info: " + x,
              ),
                o("WAWebSyncdMetrics").uploadMdCriticalEventMetric(
                  o("WAWebWamEnumMdSyncdCriticalEventCode")
                    .MD_SYNCD_CRITICAL_EVENT_CODE.MISSING_MUTATION_TO_REMOVE,
                  t,
                  e.action,
                ));
              var $ =
                "[" +
                l +
                "] syncd: missing indexMAC in sync-actions table for REMOVE mutation in collection " +
                t +
                " version " +
                ((E = s == null ? void 0 : s.toString()) != null ? E : "n/a") +
                " direction " +
                (n || "n/a") +
                " for platform " +
                ((D = o("WAWebConnModel").Conn.platform) != null
                  ? D
                  : "[empty]") +
                ": " +
                o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u).slice(-16);
              t === o("WAWebSyncdConst").CollectionName.CriticalBlock
                ? (await o("WAWebSyncdDbCallbacksApi").printSyncdLog(t),
                  o("WALogger")
                    .ERROR(
                      I ||
                        (I = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      $,
                    )
                    .sendLogs(
                      "syncd: missing indexMAC from REMOVE in collection " + t,
                    ))
                : o("WALogger")
                    .ERROR(
                      T ||
                        (T = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
                      $,
                    )
                    .sendLogs(
                      "syncd: missing indexMAC from REMOVE in collection " + t,
                      { sampling: 0.01 },
                    );
            }
          }
          c ===
            o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation.SET &&
            p.set(o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(u), h);
        }),
        y)
      ) {
        var b =
          `
      syncUseMultipleMacQueries: true
      input mutations mac:
      ` +
          i.map(function (e) {
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
          Array.from(m.values())
            .map(function (e) {
              return F(e.indexMac, e.valueMac);
            })
            .join(", ") +
          `
    `;
        o("WALogger").LOG(
          D || (D = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          b,
        );
      }
      var v = await o("WACryptoLtHash").LT_HASH_ANTI_TAMPERING.subtractThenAdd(
          c,
          Array.from(p.values()),
          Array.from(_.values()).concat(Array.from(f.values())),
        ),
        S = v.ltHash,
        R = v.subtractResult,
        L =
          "[" +
          l +
          "] syncd: computing ltHash for " +
          t +
          `:
  mutations length: ` +
          i.length +
          `
  currentLtHash: ` +
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(c).slice(-16) +
          `
  subtractResult: ` +
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(R).slice(-16) +
          `
  currentMacs length: ` +
          m.size +
          `
  macsToAdd:
      ` +
          Array.from(p.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return F(t, n);
          }).join(`
	`) +
          `
  macsToRemove:
      ` +
          Array.from(_.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return F(t, n);
          }).join(`
	`) +
          `
  macsToOverwrite (also remove):
      ` +
          Array.from(f.entries()).map(function (e) {
            var t = e[0],
              n = e[1];
            return F(t, n);
          }).join(`
	`) +
          `
  newLtHash: ` +
          o("WAWebSyncdCryptoUtils").arrayBufferToHexPadded(S).slice(-16) +
          `
  hasMissingRemove: ` +
          y.toString() +
          `
  didUseFallback: ` +
          C.toString();
      if (
        (o("WALogger").LOG(
          x || (x = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          L,
        ),
        await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
          t,
          "generate lthash details 1: " + L,
        ),
        u)
      ) {
        var P =
          `
      input mutations mac:
      ` +
          i.map(function (e) {
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
          Array.from(m.values())
            .map(function (e) {
              return F(e.indexMac, e.valueMac);
            })
            .join(", ") +
          `
    `;
        (o("WALogger").LOG(
          $ || ($ = babelHelpers.taggedTemplateLiteralLoose(["", ""])),
          P,
        ),
          await o("WAWebSyncdDbCallbacksApi").writeSyncdLog(
            t,
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
          e === o("WAWebSyncdConst").CollectionName.RegularLow ||
          e === o("WAWebSyncdConst").CollectionName.CriticalBlock ||
          A.includes(n))
      ) {
        if (
          n === o("WAWebSyncdConst").Actions.DeviceCapabilities ||
          n === o("WAWebSyncdConst").Actions.DeviceCapabilitiesV2
        ) {
          if (o("WAWebCurrentUser").isEmployee()) return t.index;
          var r = t.index.indexOf(":");
          return n + ":" + t.index.slice(r - 4);
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
        (e === o("WAWebSyncdConst").CollectionName.CriticalBlock ||
          e === o("WAWebSyncdConst").CollectionName.RegularLow ||
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
    ((l.indexAndValueMacToString = F),
      (l.computeLtHashAndValidateSnapshot = B),
      (l.computeLtHashAndValidatePatch = W),
      (l.computeOutgoingSnapshotAndPatchMacs = H),
      (l.computeLtHash = G),
      (l.logMacsInSnapshot = Q));
  },
  98,
);
