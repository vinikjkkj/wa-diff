__d(
  "WAWebKmpExternalMutationDownloader",
  [
    "WALogger",
    "WAWebKmpBridgeResultWrappers",
    "WAWebKmpKotlinUtils",
    "WAWebKmpSyncdCollectionNameUtils",
    "WAWebSyncdNetCallbacksApi",
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
      downloadSnapshot: function (n, r) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          async function () {
            var t = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(
                n,
              ),
              a = u(r);
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: download snapshot for ",
                  "",
                ])),
              t,
            );
            var i = await o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
              a,
              "snapshot",
              t,
            );
            return new (o("wa-kmp-syncd-engine-api").KmpSyncdSnapshot)(
              o("WAWebKmpKotlinUtils").asKmpByteArray(i),
            );
          },
        );
      },
      downloadMutations: function (t, n) {
        return o("WAWebKmpBridgeResultWrappers").wrapInterfaceKmpSuccess(
          async function () {
            var e = o("WAWebKmpSyncdCollectionNameUtils").asWebCollectionName(
                t,
              ),
              r = u(n);
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: download patch for ",
                  "",
                ])),
              e,
            );
            var a = await o("WAWebSyncdNetCallbacksApi").downloadSyncBlob(
              r,
              "patch",
              e,
            );
            return o(
              "wa-kmp-syncd-engine-api",
            ).KmpServerSyncMutations.fromRawBytes(
              o("WAWebKmpKotlinUtils").asKmpByteArray(a),
            );
          },
        );
      },
    };
    l.externalMutationDownloader = c;
  },
  98,
);
