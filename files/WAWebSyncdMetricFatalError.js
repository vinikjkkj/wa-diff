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
      o("WAWebSyncdUploadFatalErrorMetricEmitter").emitUploadFatalErrorMetric(
        o("WAWebSyncdMetricFatalErrorListener").convertSyncdErrorCode(e),
        (r = t == null ? void 0 : t.collection) != null ? r : null,
        (a = t == null ? void 0 : t.patchSnapshotMutationCount) != null
          ? a
          : void 0,
        (i = t == null ? void 0 : t.patchVersion) != null ? i : void 0,
        (l = t == null ? void 0 : t.isFatal) != null ? l : void 0,
        (s = t == null ? void 0 : t.isLtHashConsistent) != null ? s : void 0,
        (c = t == null ? void 0 : t.macFatalCollectionNameMismatch) != null
          ? c
          : void 0,
        (m = t == null ? void 0 : t.macFatalCurrentLthashMismatch) != null
          ? m
          : void 0,
        (p = t == null ? void 0 : t.macFatalNewLthashMismatch) != null
          ? p
          : void 0,
        (_ = t == null ? void 0 : t.macFatalPatchVersionMismatch) != null
          ? _
          : void 0,
        (f = t == null ? void 0 : t.macFatalNewLthashSubtractMismatch) != null
          ? f
          : void 0,
        (g = t == null ? void 0 : t.macFatalNumberHasOverrideMutation) != null
          ? g
          : void 0,
        (h = t == null ? void 0 : t.macFatalNumberNumAddMutation) != null
          ? h
          : void 0,
        (y = t == null ? void 0 : t.macFatalNumberNumRemoveMutation) != null
          ? y
          : void 0,
        (C =
          t == null
            ? void 0
            : t.macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch) !=
          null
          ? C
          : void 0,
        (b = t == null ? void 0 : t.isPatchSenderPrimary) != null ? b : void 0,
        (v = t == null ? void 0 : t.macFatalDidUseMacFetchFallback) != null
          ? v
          : void 0,
        (S = t == null ? void 0 : t.macFatalHasMissingRemove) != null
          ? S
          : void 0,
        (R = t == null ? void 0 : t.macFatalNumberAddMismatch) != null
          ? R
          : void 0,
        (L = t == null ? void 0 : t.macFatalNumberRemoveMismatch) != null
          ? L
          : void 0,
        (E =
          t == null
            ? void 0
            : t.macFatalDidPreviousPatchFailPostSaveValidation) != null
          ? E
          : void 0,
        (k =
          t == null
            ? void 0
            : t.macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash) !=
          null
          ? k
          : void 0,
        (I = t == null ? void 0 : t.isPreviousPatchAnIncomingPatch) != null
          ? I
          : void 0,
        (T = t == null ? void 0 : t.isLastPatchSenderAPrimaryDevice) != null
          ? T
          : void 0,
        (D = t == null ? void 0 : t.isSenderIndexSameAsPreviousSenderIndex) !=
          null
          ? D
          : void 0,
        (x = t == null ? void 0 : t.didBootstrapFromSnapshot) != null
          ? x
          : void 0,
        ($ = t == null ? void 0 : t.isThereAnotherSyncdCompanion) != null
          ? $
          : void 0,
        (P = t == null ? void 0 : t.isPureSyncdSession) != null ? P : void 0,
        (N = t == null ? void 0 : t.lidMigrationStage) != null ? N : void 0,
        (M = t == null ? void 0 : t.recoveryRequestDurationMs) != null
          ? M
          : void 0,
        (w = t == null ? void 0 : t.recoveryStatus) != null ? w : void 0,
      );
    }
    ((l.SyncdFatalErrorType = c),
      (l.flushDeferredFatalError = m),
      (l.reportSyncdFatalError = p));
  },
  98,
);
