__d(
  "WAWebSyncdMMSDownload",
  [
    "WAWebSyncdDecode",
    "WAWebSyncdNetCallbacksApi",
    "WAWebSyncdValidateServerSyncProtobuf",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
              t,
              "snapshot",
              e,
            ),
            a = o("WAWebSyncdDecode").decodeSyncdSnapshot(e, n);
          return r(
            "WAWebSyncdValidateServerSyncProtobuf",
          ).validateSnapshotProtobuf(e, a);
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
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
        })),
        c.apply(this, arguments)
      );
    }
    ((l.downloadSnapshot = e), (l.downloadExternalPatch = u));
  },
  98,
);
