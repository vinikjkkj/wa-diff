__d(
  "WAWebCryptoCalculateFilehash",
  [
    "WALogger",
    "WAMediaCalculateFilehash",
    "WAWebFileUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaOpaqueData",
    "WAWebMediaWorkerProxy",
    "WAWebPREGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      try {
        var n;
        if (
          (t instanceof r("WAWebMediaOpaqueData")
            ? (n = await o("WAWebMediaDataUtils").opaqueDataToArrayBuffer(t))
            : (n = await o("WAWebFileUtils").blobToArrayBuffer(t)),
          o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(
            n.byteLength,
          ))
        ) {
          var a = await o("WAWebMediaWorkerProxy").calculateFilehashInWorker(n),
            i = a.result,
            l = a.transferredBuffer;
          if (((n = l), i.success)) return i.value.filehash;
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "calculateFilehashInWorker: size:",
                  " failed: ",
                  "",
                ])),
              n.byteLength,
              i.error,
            )
            .sendLogs("worker-calculate-filehash-failed");
        }
        return await o("WAMediaCalculateFilehash").calculateFilehash(n);
      } catch (e) {
        var u = t instanceof r("WAWebMediaOpaqueData"),
          c = t instanceof r("WAWebMediaOpaqueData") ? t.size() : t.size;
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "calculateFilehashFromBlob failed: ",
                ", size:",
                ", isOpaqueData:",
                "",
              ])),
            e,
            c,
            u,
          )
          .sendLogs("calculate-filehash-from-blob-error");
        return;
      }
    }
    l.calculateFilehashFromBlob = u;
  },
  98,
);
