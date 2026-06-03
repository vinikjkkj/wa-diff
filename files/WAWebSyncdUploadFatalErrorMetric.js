__d(
  "WAWebSyncdUploadFatalErrorMetric",
  [
    "WATimeUtils",
    "WAWebABProps",
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
      ).listenForUploadFatalErrorMetric(function () {
        u.apply(void 0, arguments);
      });
    }
    function u(
      e,
      t,
      n,
      r,
      o,
      a,
      i,
      l,
      s,
      u,
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
    ) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (
            t,
            n,
            a,
            i,
            l,
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
          ) {
            var M = {
                mdFatalErrorCode: t,
                collection: n
                  ? o("WAWebSyncdMetrics").collectionNameToMetric(n)
                  : void 0,
                isBootstrap:
                  r("WAWebSyncBootstrap").isSyncDCriticalDataSyncInProcess(),
              },
              w = o("WAWebUserPrefsMultiDevice").getPairingTimestamp(),
              A = w != null ? (o("WATimeUtils").unixTime() - w) * 1e3 : void 0;
            if (
              ((M = babelHelpers.extends({}, M, {
                timeSinceRefreshMs: (o("WATimeUtils").unixTime() - e) * 1e3,
                timeSincePairingMs: A,
                patchSnapshotMutationCount: a,
                patchVersion: i,
                isFatal: l,
                isWebLthashConsistent: s,
                macFatalCollectionNameMismatch: u,
                macFatalCurrentLthashMismatch: c,
                macFatalNewLthashMismatch: d,
                macFatalPatchVersionMismatch: m,
                macFatalNewLthashSubtractMismatch: p,
                macFatalNumberHasOverrideMutation: _,
                macFatalNumberNumAddMutation: f,
                macFatalNumberNumRemoveMutation: g,
                macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
                  h,
                isPatchSenderPrimary: y,
                macFatalDidUseMacFetchFallback: C,
                macFatalHasMissingRemove: b,
                macFatalNumberAddMismatch: v,
                macFatalNumberRemoveMismatch: S,
                macFatalDidPreviousPatchFailPostSaveValidation: R,
                macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash: L,
                isPreviousPatchAnIncomingPatch: E,
                isPreviousPatchSenderPrimary: k,
                isSenderIndexSameAsPreviousSenderIndex: I,
                didBootstrapFromSnapshot: T,
                isThereAnotherSyncdCompanion: D,
                isPureSyncdSession: x,
                lidMigrationStage: $,
                recoveryRequestDurationMs: P,
                recoveryStatus: N,
              })),
              (M = babelHelpers.extends({}, M, {
                appContext: o("WAWebAppTracker").AppTracker.getAppContext(),
              })),
              o("WAWebABProps").getABPropConfigValue(
                "web_syncd_fatal_fields_from_L1104589PRV2",
              ))
            ) {
              var F = yield o(
                  "WAWebUserPrefsMultiDevice",
                ).getRecentMailboxAgeDays(),
                O = yield o(
                  "WAWebUserPrefsAppStateSync",
                ).getLastPeriodicAppStateSyncTs(),
                B = r(
                  "WAWebSyncdCollectionsStateMachine",
                ).getCollectionMinFailureTime();
              M = babelHelpers.extends({}, M, {
                mailboxAgeDays: F == null ? void 0 : F,
                daysSinceLastPeriodicSync:
                  O == null
                    ? void 0
                    : Math.trunc(
                        (o("WATimeUtils").unixTime() - O) / 60 / 60 / 24,
                      ),
                hoursSinceFirstFiniteFailure:
                  B == null
                    ? void 0
                    : Math.trunc(
                        (o("WATimeUtils").unixTimeMs() - B) / 1e3 / 60 / 60,
                      ),
              });
              var W = yield o("WAWebSchemaSyncActions")
                  .getSyncActionsTable()
                  .get('["primary_version","current"]'),
                q = yield o("WAWebSchemaSyncActions")
                  .getSyncActionsTable()
                  .get('["primary_version","session_start"]');
              if (W || q) {
                var U,
                  V,
                  H,
                  G,
                  z = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    W == null ? void 0 : W.binarySyncData,
                  ).value,
                  j = o("decodeProtobuf").decodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    q == null ? void 0 : q.binarySyncData,
                  ).value;
                M = babelHelpers.extends({}, M, {
                  currentPrimaryAppVersion:
                    (U =
                      z == null || (V = z.primaryVersionAction) == null
                        ? void 0
                        : V.version) != null
                      ? U
                      : void 0,
                  sessionStartPrimaryAppVersion:
                    (H =
                      j == null || (G = j.primaryVersionAction) == null
                        ? void 0
                        : G.version) != null
                      ? H
                      : void 0,
                });
              }
            }
            yield new (o("WAWebMdFatalErrorWamEvent").MdFatalErrorWamEvent)(
              M,
            ).commitAndWaitForFlush(!0);
          },
        )),
        c.apply(this, arguments)
      );
    }
    ((l.initialiseFatalErrorMetricUploading = s),
      (l.uploadFatalErrorMetric = u));
  },
  98,
);
