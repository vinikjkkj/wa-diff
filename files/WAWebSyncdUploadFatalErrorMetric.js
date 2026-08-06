__d(
  "WAWebSyncdUploadFatalErrorMetric",
  [
    "WATimeUtils",
    "WAWebAppTracker",
    "WAWebMdFatalErrorWamEvent",
    "WAWebProtobufSyncAction.pb",
    "WAWebSchemaSyncActions",
    "WAWebSyncBootstrap",
    "WAWebSyncdCollectionsStateMachine",
    "WAWebSyncdMetrics",
    "WAWebSyncdUploadFatalErrorMetricEmitter",
    "WAWebUserPrefsAppStateSync",
    "WAWebUserPrefsMultiDevice",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WATimeUtils").unixTime();
    function s() {
      o(
        "WAWebSyncdUploadFatalErrorMetricEmitter",
      ).listenForUploadFatalErrorMetric(function (e) {
        u(e);
      });
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.collection,
            a = t.didBootstrapFromSnapshot,
            i = t.isFatal,
            l = t.isLastPatchSenderAPrimaryDevice,
            s = t.isLtHashConsistent,
            u = t.isPatchSenderPrimary,
            c = t.isPreviousPatchAnIncomingPatch,
            d = t.isPureSyncdSession,
            m = t.isSenderIndexSameAsPreviousSenderIndex,
            p = t.isThereAnotherSyncdCompanion,
            _ = t.lidMigrationStage,
            f = t.macFatalCollectionNameMismatch,
            g = t.macFatalCurrentLthashMismatch,
            h = t.macFatalDidPreviousPatchFailPostSaveValidation,
            y = t.macFatalDidUseMacFetchFallback,
            C = t.macFatalHasMissingRemove,
            b = t.macFatalNewLthashMismatch,
            v = t.macFatalNewLthashSubtractMismatch,
            S = t.macFatalNumberAddMismatch,
            R = t.macFatalNumberHasOverrideMutation,
            L = t.macFatalNumberNumAddMutation,
            E = t.macFatalNumberNumRemoveMutation,
            k = t.macFatalNumberRemoveMismatch,
            I = t.macFatalPatchVersionMismatch,
            T = t.macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash,
            D =
              t.macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch,
            x = t.mdFatalErrorCode,
            $ = t.patchSnapshotMutationCount,
            P = t.patchVersion,
            N = t.recoveryRequestDurationMs,
            M = t.recoveryStatus,
            w = {
              mdFatalErrorCode: x,
              collection: n
                ? o("WAWebSyncdMetrics").collectionNameToMetric(n)
                : void 0,
              isBootstrap:
                r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess(),
            },
            A = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
            F = A != null ? (o("WATimeUtils").unixTime() - A) * 1e3 : void 0;
          ((w = babelHelpers.extends({}, w, {
            timeSinceRefreshMs: (o("WATimeUtils").unixTime() - e) * 1e3,
            timeSincePairingMs: F,
            patchSnapshotMutationCount: $,
            patchVersion: P,
            isFatal: i,
            isWebLthashConsistent: s,
            macFatalCollectionNameMismatch: f,
            macFatalCurrentLthashMismatch: g,
            macFatalNewLthashMismatch: b,
            macFatalPatchVersionMismatch: I,
            macFatalNewLthashSubtractMismatch: v,
            macFatalNumberHasOverrideMutation: R,
            macFatalNumberNumAddMutation: L,
            macFatalNumberNumRemoveMutation: E,
            macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
              D,
            isPatchSenderPrimary: u,
            macFatalDidUseMacFetchFallback: y,
            macFatalHasMissingRemove: C,
            macFatalNumberAddMismatch: S,
            macFatalNumberRemoveMismatch: k,
            macFatalDidPreviousPatchFailPostSaveValidation: h,
            macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash: T,
            isPreviousPatchAnIncomingPatch: c,
            isPreviousPatchSenderPrimary: l,
            isSenderIndexSameAsPreviousSenderIndex: m,
            didBootstrapFromSnapshot: a,
            isThereAnotherSyncdCompanion: p,
            isPureSyncdSession: d,
            lidMigrationStage: _,
            recoveryRequestDurationMs: N,
            recoveryStatus: M,
          })),
            (w = babelHelpers.extends({}, w, {
              appContext: o("WAWebAppTracker").AppTracker.getAppContext(),
            })));
          var O = yield o(
              "WAWebUserPrefsMultiDevice",
            ).getRecentMailboxAgeDays(),
            B = yield o(
              "WAWebUserPrefsAppStateSync",
            ).getLastPeriodicAppStateSyncTs(),
            W = r(
              "WAWebSyncdCollectionsStateMachine",
            ).getCollectionMinFailureTime();
          w = babelHelpers.extends({}, w, {
            mailboxAgeDays: O == null ? void 0 : O,
            daysSinceLastPeriodicSync:
              B == null
                ? void 0
                : Math.trunc((o("WATimeUtils").unixTime() - B) / 60 / 60 / 24),
            hoursSinceFirstFiniteFailure:
              W == null
                ? void 0
                : Math.trunc(
                    (o("WATimeUtils").unixTimeMs() - W) / 1e3 / 60 / 60,
                  ),
          });
          var q = yield o("WAWebSchemaSyncActions")
              .getSyncActionsTable()
              .get('["primary_version","current"]'),
            U = yield o("WAWebSchemaSyncActions")
              .getSyncActionsTable()
              .get('["primary_version","session_start"]');
          if (q || U) {
            var V,
              H,
              G,
              z,
              j = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                q == null ? void 0 : q.binarySyncData,
              ).value,
              K = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                U == null ? void 0 : U.binarySyncData,
              ).value;
            w = babelHelpers.extends({}, w, {
              currentPrimaryAppVersion:
                (V =
                  j == null || (H = j.primaryVersionAction) == null
                    ? void 0
                    : H.version) != null
                  ? V
                  : void 0,
              sessionStartPrimaryAppVersion:
                (G =
                  K == null || (z = K.primaryVersionAction) == null
                    ? void 0
                    : z.version) != null
                  ? G
                  : void 0,
            });
          }
          yield new (o("WAWebMdFatalErrorWamEvent").MdFatalErrorWamEvent)(
            w,
          ).commitAndWaitForFlush(!0);
        })),
        c.apply(this, arguments)
      );
    }
    ((l.initialiseFatalErrorMetricUploading = s),
      (l.uploadFatalErrorMetric = u));
  },
  98,
);
