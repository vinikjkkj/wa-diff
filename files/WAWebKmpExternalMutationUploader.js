__d(
  "WAWebKmpExternalMutationUploader",
  [
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebSyncdMMSUpload",
    "WAWebSyncdNetCallbacksApi",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      upload: function (t) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e,
              n = (e = o("WAWebKmpKotlinUtils")).asUint8Array(
                t.toByteArray(),
              ).buffer,
              r = yield o("WAWebSyncdNetCallbacksApi").uploadSyncExternalPatch(
                n,
              ),
              a = yield o("WAWebSyncdMMSUpload").buildExternalBlobReference(
                r,
                n,
              ),
              i = a.directPath,
              l = a.fileEncSha256,
              s = a.fileSha256,
              u = a.fileSizeBytes,
              c = a.handle,
              d = a.mediaKey;
            return new (o(
              "wa-kmp-syncd-engine-api",
            ).KmpSyncdUploadedExternalBlobReferenceData)(
              e.asKmpByteArray(new Uint8Array(d)),
              i,
              c,
              e.kmpLongFromLongInt(u),
              e.asKmpByteArray(new Uint8Array(s)),
              e.asKmpByteArray(new Uint8Array(l)),
            );
          }),
        );
      },
    };
    l.externalMutationUploader = e;
  },
  98,
);
