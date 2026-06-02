__d(
  "WAMediaStorageIoTesting",
  [
    "WAErrorMessage",
    "WAMediaWasmWorkerMainThreadBridge",
    "WAOpfsSyncStorage",
    "WAResultOrError",
    "WAWebCacheStorage",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {
      return window.performance.now();
    };
    async function s(t, n) {
      try {
        var r;
        await (r = o("WAWebCacheStorage")).cleanupCache();
        var a = e(),
          i = await r.prepareCache(),
          l = e(),
          s = e();
        await r.writeToCache({ cache: i, fileBuffer: t, key: String(n) });
        var u = e(),
          c = e();
        await r.readFromCache({ cache: i, key: String(n) });
        var d = e(),
          m = e();
        await r.cleanupCache();
        var p = e(),
          _ = {
            setupLatency: l - a,
            readLatency: d - c,
            writeLatency: u - s,
            cleanupLatency: p - m,
          };
        return o("WAResultOrError").makeResult({
          latency: _,
          metadata: {
            numFiles: await r.getCacheCount({ cache: i }),
            byteLength: t.byteLength,
          },
        });
      } catch (e) {
        return (
          o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
            "error",
            "failed to read/write storage operation for web cache, error: " +
              o("WAErrorMessage").maybeGetMessageFromError(e),
          ),
          o("WAResultOrError").makeError({
            errorName: "runtime-error",
            errorMessage: o("WAErrorMessage").maybeGetMessageFromError(e),
          })
        );
      }
    }
    async function u(t, n) {
      try {
        var r,
          a = e(),
          i = await (r = o("WAOpfsSyncStorage")).prepareFileSystem(),
          l = e(),
          s = e();
        await r.writeToFileSystem({
          directoryHandle: i,
          fileBuffer: t,
          fileName: String(n),
        });
        var u = e(),
          c = e();
        await r.readFromFileSystem({ directoryHandle: i, fileName: String(n) });
        var d = e(),
          m = e();
        await r.cleanupFileSystem({ directoryHandle: i, fileName: String(n) });
        var p = e(),
          _ = {
            setupLatency: l - a,
            readLatency: d - c,
            writeLatency: u - s,
            cleanupLatency: p - m,
          };
        return o("WAResultOrError").makeResult({
          latency: _,
          metadata: {
            byteLength: t.byteLength,
            numFiles: await r.getFileCount({ directoryHandle: i }),
          },
        });
      } catch (e) {
        return (
          o("WAMediaWasmWorkerMainThreadBridge").sendLogToMainThread(
            "error",
            "failed to read/write storage operation for opfs, error: " +
              o("WAErrorMessage").maybeGetMessageFromError(e),
          ),
          o("WAResultOrError").makeError({
            errorName: "runtime-error",
            errorMessage: o("WAErrorMessage").maybeGetMessageFromError(e),
          })
        );
      }
    }
    ((l.runIoTestingWebCache = s), (l.runIoTestingOPFS = u));
  },
  98,
);
