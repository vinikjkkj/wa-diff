__d(
  "WAWebKmpExternalMutationDownloader",
  [
    "WALogger",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebKmpSyncdCollectionNameUtils",
    "WAWebSyncdNetCallbacksApi",
    "asyncToGeneratorRuntime",
    "wa-kmp-syncd-engine-api",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return {
        mediaKey: o("WAWebKmpKotlinUtils").asUint8Array(e.mediaKey).buffer,
        directPath: e.directPath,
        handle: e.handle || void 0,
        fileSizeBytes: e.fileSizeBytes
          ? o("WAWebKmpKotlinUtils").longIntFromKmpLong(e.fileSizeBytes)
          : void 0,
        fileSha256: o("WAWebKmpKotlinUtils").asUint8Array(e.fileSha256).buffer,
        fileEncSha256: o("WAWebKmpKotlinUtils").asUint8Array(e.fileEncSha256)
          .buffer,
      };
    }
    var c = {
      downloadSnapshot: function (r, a) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(
                r,
              ),
              n = u(a);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: download snapshot for ",
                  "",
                ])),
              t,
            );
            var i = yield o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
              n,
              "snapshot",
              t,
            );
            return new (o("wa-kmp-syncd-engine-api").KmpSyncdSnapshot)(
              o("WAWebKmpKotlinUtils").asKmpByteArray(i),
            );
          }),
        );
      },
      downloadMutations: function (t, r) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(
                t,
              ),
              n = u(r);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: download patch for ",
                  "",
                ])),
              e,
            );
            var a = yield o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
              n,
              "patch",
              e,
            );
            return o(
              "wa-kmp-syncd-engine-api",
            ).KmpServerSyncMutations.fromRawBytes(
              o("WAWebKmpKotlinUtils").asKmpByteArray(a),
            );
          }),
        );
      },
    };
    l.externalMutationDownloader = c;
  },
  98,
);
