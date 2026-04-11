__d(
  "WAWebSyncdDecode",
  [
    "WALogger",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "decodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d;
    function m(t, n) {
      try {
        return o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsServerSync.pb").ExternalBlobReferenceSpec,
          n,
        );
      } catch (n) {
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .EXTERNAL_BLOB_REFERENCE_PROTOBUF_DESERIALIZATION_FAILED,
          { collection: t },
        );
        var r = n instanceof Error ? n.message : String(n);
        throw (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] ext blob ref decode failed: ",
                "",
              ])),
            r,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "syncd: external blob reference protobuf deserialization failed: " +
              r,
          )
        );
      }
    }
    function p(e, t) {
      try {
        return o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsServerSync.pb").SyncdSnapshotSpec,
          t,
        );
      } catch (t) {
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .SNAPSHOT_PROTOBUF_DESERIALIZATION_FAILED,
          { collection: e },
        );
        var n = t instanceof Error ? t.message : String(t);
        throw (
          o("WALogger").ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: snapshot protobuf deserialization failed: ",
                "",
              ])),
            n,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "syncd: snapshot protobuf deserialization failed: " + n,
          )
        );
      }
    }
    function _(e, t) {
      try {
        return o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsServerSync.pb").SyncdPatchSpec,
          t,
        );
      } catch (t) {
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .PATCH_PROTOBUF_DESERIALIZATION_FAILED,
          { collection: e },
        );
        var n = t instanceof Error ? t.message : String(t);
        throw (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: patch protobuf deserialization failed: ",
                "",
              ])),
            n,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "syncd: patch protobuf deserialization failed: " + n,
          )
        );
      }
    }
    function f(e, t) {
      try {
        return o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufsServerSync.pb").SyncdMutationsSpec,
          t,
        );
      } catch (t) {
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .MUTATIONS_PROTOBUF_DESERIALIZATION_FAILED,
          { collection: e },
        );
        var n = t instanceof Error ? t.message : String(t);
        throw (
          o("WALogger").ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: mutations protobuf deserialization failed: ",
                "",
              ])),
            n,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "syncd: mutations protobuf deserialization failed: " + n,
          )
        );
      }
    }
    function g(e, t) {
      try {
        return o("decodeProtobuf").decodeProtobuf(
          o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
          t,
        );
      } catch (t) {
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .ACTION_DATA_PROTOBUF_DESERIALIZATION_FAILED,
          { collection: e },
        );
        var n = t instanceof Error ? t.message : String(t);
        throw (
          o("WALogger").ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: data protobuf deserialization failed: ",
                "",
              ])),
            n,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "syncd: data protobuf deserialization failed: " + n,
          )
        );
      }
    }
    ((l.decodeExternalBlobReference = m),
      (l.decodeSyncdSnapshot = p),
      (l.decodeSyncdPatch = _),
      (l.decodeSyncdMutations = f),
      (l.decodeSyncActionData = g));
  },
  98,
);
