__d(
  "WAWebSyncdRequestEncode",
  [
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      try {
        return o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufsServerSync.pb").SyncdPatchSpec, e)
          .readBuffer();
      } catch (e) {
        throw (
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .PATCH_PROTOBUF_SERIALIZATION_FAILED,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "patch protobuf serialization failed",
          )
        );
      }
    }
    function s(e) {
      try {
        return o("encodeProtobuf")
          .encodeProtobuf(
            o("WAWebProtobufsServerSync.pb").SyncdMutationsSpec,
            e,
          )
          .readBuffer();
      } catch (e) {
        throw (
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .MUTATIONS_PROTOBUF_SERIALIZATION_FAILED,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "mutations protobuf serialization failed",
          )
        );
      }
    }
    function u(e) {
      try {
        return o("encodeProtobuf")
          .encodeProtobuf(o("WAWebProtobufSyncAction.pb").SyncActionDataSpec, e)
          .readBuffer();
      } catch (e) {
        throw (
          o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
            o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
              .ACTION_DATA_PROTOBUF_SERIALIZATION_FAILED,
          ),
          new (o("WAWebSyncdError").SyncdFatalError)(
            "action data protobuf serialization failed",
          )
        );
      }
    }
    ((l.encodeSyncdPatch = e),
      (l.encodeSyncdMutations = s),
      (l.encodeSyncActionData = u));
  },
  98,
);
