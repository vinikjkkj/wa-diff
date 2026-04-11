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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n;
            if (
              (t instanceof r("WAWebMediaOpaqueData")
                ? (n = yield o("WAWebMediaDataUtils").opaqueDataToArrayBuffer(
                    t,
                  ))
                : (n = yield o("WAWebFileUtils").blobToArrayBuffer(t)),
              o("WAWebPREGatingUtils").shouldUseWorkerForFileSizeBytes(
                n.byteLength,
              ))
            ) {
              var a = yield o(
                  "WAWebMediaWorkerProxy",
                ).calculateFilehashInWorker(n),
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
            return yield o("WAMediaCalculateFilehash").calculateFilehash(n);
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
        })),
        c.apply(this, arguments)
      );
    }
    l.calculateFilehashFromBlob = u;
  },
  98,
);
