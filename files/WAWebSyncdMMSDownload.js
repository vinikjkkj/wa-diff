__d(
  "WAWebSyncdMMSDownload",
  [
    "WAWebSyncdDecode",
    "WAWebSyncdNetCallbacksApi",
    "WAWebSyncdValidateServerSyncProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = await o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
          t,
          "snapshot",
          e,
        ),
        a = o("WAWebSyncdDecode").decodeSyncdSnapshot(e, n);
      return r("WAWebSyncdValidateServerSyncProtobuf").validateSnapshotProtobuf(
        e,
        a,
      );
    }
    async function s(e, t) {
      var n = await o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
          t,
          "patch",
          e,
        ),
        a = o("WAWebSyncdDecode").decodeSyncdMutations(e, n).mutations;
      return a.map(function (t) {
        return r(
          "WAWebSyncdValidateServerSyncProtobuf",
        ).validateMutationProtobuf(e, t);
      });
    }
    ((l.downloadSnapshot = e), (l.downloadExternalPatch = s));
  },
  98,
);
