__d(
  "WAWebSyncdMetricFatalError",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebSyncdMetricFatalErrorListener",
    "WAWebSyncdUploadFatalErrorMetricEmitter",
    "WAWebWamEnumRecoveryStatusEnum",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["type"],
      s,
      u,
      c = n("$InternalEnum").Mirrored([
        "PATCH_PROTOBUF_SERIALIZATION_FAILED",
        "MUTATIONS_PROTOBUF_SERIALIZATION_FAILED",
        "ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED",
        "ENCRYPTION_FAILED",
        "MISSING_SNAPSHOT_VERSION",
        "MISSING_SNAPSHOT_MAC",
        "MISSING_SNAPSHOT_KEY_ID",
        "MISSING_PATCH_VERSION",
        "PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS",
        "MISSING_PATCH_SNAPSHOT_MAC",
        "MISSING_PATCH_MAC",
        "MISSING_PATCH_KEY_ID",
        "MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY",
        "MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH",
        "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256",
        "MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256",
        "MISSING_MUTATION_OPERATION",
        "MISSING_MUTATION_RECORD",
        "MISSING_MUTATION_INDEX",
        "MISSING_MUTATION_VALUE",
        "MISSING_MUTATION_KEY_ID",
        "EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED",
        "SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED",
        "PATCH_PROTOBUF_DESERIALIZATION_FAILED",
        "MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED",
        "ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED",
        "MISSING_ACTION_INDEX",
        "MISSING_ACTION_VERSION",
        "SNAPSHOT_MAC_MISMATCH_IN_SNAPSHOT",
        "SNAPSHOT_MAC_MISMATCH_IN_PATCH",
        "MAC_MISMATCH_PATCH",
        "DECRYPTION_FAILED",
        "DUPLICATE_PATCH_VERSION_IN_COLLECTION",
        "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_PATCH",
        "SAME_INDEX_FOR_MULTIPLE_MUTATIONS_IN_SNAPSHOT",
        "MISSING_ACTION_VALUE",
        "MISSING_ACTION_TIMESTAMP",
        "XMPP_BAD_REQUEST_FOR_COLLECTION",
        "XMPP_NOT_FOUND_FOR_COLLECTION",
        "CYCLIC_MUTATION_DEPENDENCY_IN_PATCH",
        "SERVER_DID_NOT_SEND_ALL_PATCHES",
        "TERMINAL_PATCH_MISSING_DATA",
        "TERMINAL_PATCH_DESERIALIZATION_ERROR",
        "TERMINAL_PATCH_UNKNOWN",
        "INVALID_ACTION_INDEX",
        "XMPP_BAD_REQUEST_GLOBAL_ERROR",
        "XMPP_NOT_FOUND_GLOBAL_ERROR",
        "XMPP_BAD_METHOD_GLOBAL_ERROR",
        "XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR",
        "TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D",
        "TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY",
        "MISSING_KEY_ON_ALL_CLIENTS",
        "MALFORMED_MUTATION_CLEAR_CHAT",
        "FAILED_MUTATION_CLEAR_CHAT",
      ]),
      d = [];
    function m(t, n) {
      for (n === void 0 && (n = !0); d.length > 0; ) {
        var r = d.pop();
        if (r != null) {
          (n &&
            (r.recoveryStatus = o(
              "WAWebWamEnumRecoveryStatusEnum",
            ).RECOVERY_STATUS_ENUM.PRIMARY_DID_NOT_RESPOND),
            (r.recoveryRequestDurationMs = t),
            (r.isFatal = n),
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: flush fatal error after failed shapshot recovery: ",
                  "",
                ])),
              r.type,
            ));
          var a = r.type,
            i = babelHelpers.objectWithoutPropertiesLoose(r, e);
          p(a, i, !1);
        }
      }
    }
    function p(e, t, n) {
      var r,
        a,
        i,
        l,
        s,
        c,
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
        w;
      if (n === !0) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] defer fatal err, inflight recovery: ",
              "",
            ])),
          e,
        ),
          d.push(babelHelpers.extends({ type: e }, t)));
        return;
      }
      o("WAWebSyncdUploadFatalErrorMetricEmitter").emitUploadFatalErrorMetric({
        collection: (r = t == null ? void 0 : t.collection) != null ? r : null,
        didBootstrapFromSnapshot:
          (a = t == null ? void 0 : t.didBootstrapFromSnapshot) != null
            ? a
            : void 0,
        isFatal: (i = t == null ? void 0 : t.isFatal) != null ? i : void 0,
        isLastPatchSenderAPrimaryDevice:
          (l = t == null ? void 0 : t.isLastPatchSenderAPrimaryDevice) != null
            ? l
            : void 0,
        isLtHashConsistent:
          (s = t == null ? void 0 : t.isLtHashConsistent) != null ? s : void 0,
        isPatchSenderPrimary:
          (c = t == null ? void 0 : t.isPatchSenderPrimary) != null
            ? c
            : void 0,
        isPreviousPatchAnIncomingPatch:
          (m = t == null ? void 0 : t.isPreviousPatchAnIncomingPatch) != null
            ? m
            : void 0,
        isPureSyncdSession:
          (p = t == null ? void 0 : t.isPureSyncdSession) != null ? p : void 0,
        isSenderIndexSameAsPreviousSenderIndex:
          (_ = t == null ? void 0 : t.isSenderIndexSameAsPreviousSenderIndex) !=
          null
            ? _
            : void 0,
        isThereAnotherSyncdCompanion:
          (f = t == null ? void 0 : t.isThereAnotherSyncdCompanion) != null
            ? f
            : void 0,
        lidMigrationStage:
          (g = t == null ? void 0 : t.lidMigrationStage) != null ? g : void 0,
        macFatalCollectionNameMismatch:
          (h = t == null ? void 0 : t.macFatalCollectionNameMismatch) != null
            ? h
            : void 0,
        macFatalCurrentLthashMismatch:
          (y = t == null ? void 0 : t.macFatalCurrentLthashMismatch) != null
            ? y
            : void 0,
        macFatalDidPreviousPatchFailPostSaveValidation:
          (C =
            t == null
              ? void 0
              : t.macFatalDidPreviousPatchFailPostSaveValidation) != null
            ? C
            : void 0,
        macFatalDidUseMacFetchFallback:
          (b = t == null ? void 0 : t.macFatalDidUseMacFetchFallback) != null
            ? b
            : void 0,
        macFatalHasMissingRemove:
          (v = t == null ? void 0 : t.macFatalHasMissingRemove) != null
            ? v
            : void 0,
        macFatalNewLthashMismatch:
          (S = t == null ? void 0 : t.macFatalNewLthashMismatch) != null
            ? S
            : void 0,
        macFatalNewLthashSubtractMismatch:
          (R = t == null ? void 0 : t.macFatalNewLthashSubtractMismatch) != null
            ? R
            : void 0,
        macFatalNumberAddMismatch:
          (L = t == null ? void 0 : t.macFatalNumberAddMismatch) != null
            ? L
            : void 0,
        macFatalNumberHasOverrideMutation:
          (E = t == null ? void 0 : t.macFatalNumberHasOverrideMutation) != null
            ? E
            : void 0,
        macFatalNumberNumAddMutation:
          (k = t == null ? void 0 : t.macFatalNumberNumAddMutation) != null
            ? k
            : void 0,
        macFatalNumberNumRemoveMutation:
          (I = t == null ? void 0 : t.macFatalNumberNumRemoveMutation) != null
            ? I
            : void 0,
        macFatalNumberRemoveMismatch:
          (T = t == null ? void 0 : t.macFatalNumberRemoveMismatch) != null
            ? T
            : void 0,
        macFatalPatchVersionMismatch:
          (D = t == null ? void 0 : t.macFatalPatchVersionMismatch) != null
            ? D
            : void 0,
        macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash:
          (x =
            t == null
              ? void 0
              : t.macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash) !=
          null
            ? x
            : void 0,
        macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch:
          ($ =
            t == null
              ? void 0
              : t.macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch) !=
          null
            ? $
            : void 0,
        mdFatalErrorCode: o(
          "WAWebSyncdMetricFatalErrorListener",
        ).convertSyncdErrorCode(e),
        patchSnapshotMutationCount:
          (P = t == null ? void 0 : t.patchSnapshotMutationCount) != null
            ? P
            : void 0,
        patchVersion:
          (N = t == null ? void 0 : t.patchVersion) != null ? N : void 0,
        recoveryRequestDurationMs:
          (M = t == null ? void 0 : t.recoveryRequestDurationMs) != null
            ? M
            : void 0,
        recoveryStatus:
          (w = t == null ? void 0 : t.recoveryStatus) != null ? w : void 0,
      });
    }
    ((l.SyncdFatalErrorType = c),
      (l.flushDeferredFatalError = m),
      (l.reportSyncdFatalError = p));
  },
  98,
);
