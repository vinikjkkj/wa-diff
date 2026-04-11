__d(
  "WAWebSyncdValidateServerSyncProtobuf",
  [
    "WALongInt",
    "WASyncdKeyTypes",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      return (
        (e.validateSnapshotProtobuf = function (n, r) {
          var t = r.keyId,
            a = r.mac,
            i = r.records,
            l = r.version,
            s = l == null ? void 0 : l.version;
          if (!l || s == null)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_SNAPSHOT_VERSION,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing snapshot version",
              )
            );
          var u = i.map(function (t) {
            return e.validateRecordProtobuf(n, t);
          });
          if (!a)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_SNAPSHOT_MAC,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)("missing snapshot mac")
            );
          var c = e.validateKeyIdProtobuf(
            n,
            t,
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .MISSING_SNAPSHOT_KEY_ID,
          );
          return {
            version: { version: o("WALongInt").numberOrThrowIfTooLarge(s) },
            records: u,
            mac: a,
            keyId: c,
          };
        }),
        (e.validatePatchProtobuf = function (n, r) {
          var t = r.clientDebugData,
            a = r.deviceIndex,
            i = r.exitCode,
            l = r.externalMutations,
            s = r.keyId,
            u = r.mutations,
            c = r.patchMac,
            d = r.snapshotMac,
            m = r.version,
            p = m == null ? void 0 : m.version;
          if (!m || p == null)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_PATCH_VERSION,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing patch version",
              )
            );
          if (u && u.length > 0 && l)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .PATCH_WITH_BOTH_INLINE_AND_EXTERNAL_MUTATIONS,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "patch with both inline and external mutations",
              )
            );
          if (!d)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_PATCH_SNAPSHOT_MAC,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing patch snapshot mac",
              )
            );
          if (!c)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_PATCH_MAC,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)("missing patch mac")
            );
          var _ = e.validateKeyIdProtobuf(
              n,
              s,
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .MISSING_PATCH_KEY_ID,
            ),
            f = void 0;
          if (
            (t != null &&
              (f = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").PatchDebugDataSpec,
                t,
              )),
            l)
          ) {
            var g = e.validateExternalBlobReference(n, l);
            return {
              version: { version: o("WALongInt").numberOrThrowIfTooLarge(p) },
              mutations: void 0,
              externalMutations: g,
              snapshotMac: d,
              patchMac: c,
              keyId: _,
              deviceIndex: a,
              clientDebugData: f,
            };
          }
          var h = u.map(function (t) {
            return e.validateMutationProtobuf(n, t);
          });
          return {
            version: { version: o("WALongInt").numberOrThrowIfTooLarge(p) },
            mutations: h,
            externalMutations: void 0,
            exitCode: i,
            snapshotMac: d,
            patchMac: c,
            keyId: _,
            deviceIndex: a,
            clientDebugData: f,
          };
        }),
        (e.validateExternalBlobReference = function (t, n) {
          var e = n.directPath,
            r = n.fileEncSha256,
            a = n.fileSha256,
            i = n.fileSizeBytes,
            l = n.handle,
            s = n.mediaKey;
          if (!s)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_EXTERNAL_BLOB_REFERENCE_MEDIA_KEY,
                { collection: t },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing external blob reference media key",
              )
            );
          if (e == null)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_EXTERNAL_BLOB_REFERENCE_DIRECT_PATH,
                { collection: t },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing external blob reference direct path",
              )
            );
          if (!a)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_EXTERNAL_BLOB_REFERENCE_FILE_SHA256,
                { collection: t },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing external blob reference file SHA256",
              )
            );
          if (!r)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_EXTERNAL_BLOB_REFERENCE_FILE_ENC_SHA256,
                { collection: t },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing external blob reference file enc SHA256",
              )
            );
          return {
            mediaKey: s,
            directPath: e,
            handle: l,
            fileSizeBytes: i,
            fileSha256: a,
            fileEncSha256: r,
          };
        }),
        (e.validateMutationProtobuf = function (n, r) {
          var t = r.operation,
            a = r.record;
          if (t == null)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_MUTATION_OPERATION,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing mutation operation",
              )
            );
          if (!a)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_MUTATION_RECORD,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing mutation record",
              )
            );
          var i = e.validateRecordProtobuf(n, a);
          return { operation: t, record: i };
        }),
        (e.validateRecordProtobuf = function (n, r) {
          var t = r.index,
            a = r.keyId,
            i = r.value,
            l = t == null ? void 0 : t.blob,
            s = i == null ? void 0 : i.blob;
          if (!t || !l)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_MUTATION_INDEX,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing mutation index",
              )
            );
          if (!i || !s)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .MISSING_MUTATION_VALUE,
                { collection: n },
              ),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing mutation value",
              )
            );
          var u = e.validateKeyIdProtobuf(
            n,
            a,
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .MISSING_MUTATION_KEY_ID,
          );
          return { index: { blob: l }, value: { blob: s }, keyId: u };
        }),
        (e.validateKeyIdProtobuf = function (t, n, r) {
          var e = n == null ? void 0 : n.id;
          if (!n || !e)
            throw (
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(r, {
                collection: t,
              }),
              new (o("WAWebSyncdError").SyncdFatalError)(
                "missing mutation key id",
              )
            );
          return { id: o("WASyncdKeyTypes").toSyncKeyId(e) };
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
