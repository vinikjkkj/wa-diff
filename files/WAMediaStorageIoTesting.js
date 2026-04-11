__d(
  "WAMediaStorageIoTesting",
  [
    "WAErrorMessage",
    "WAMediaWasmWorker",
    "WAOpfsSyncStorage",
    "WAResultOrError",
    "WAWebCacheStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = function () {
      return window.performance.now();
    };
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r;
            yield (r = o("WAWebCacheStorage")).cleanupCache();
            var a = e(),
              i = yield r.prepareCache(),
              l = e(),
              s = e();
            yield r.writeToCache({ cache: i, fileBuffer: t, key: String(n) });
            var u = e(),
              c = e();
            yield r.readFromCache({ cache: i, key: String(n) });
            var d = e(),
              m = e();
            yield r.cleanupCache();
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
                numFiles: yield r.getCacheCount({ cache: i }),
                byteLength: t.byteLength,
              },
            });
          } catch (e) {
            return (
              o("WAMediaWasmWorker").sendLogToMainThread(
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
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var r,
              a = e(),
              i = yield (r = o("WAOpfsSyncStorage")).prepareFileSystem(),
              l = e(),
              s = e();
            yield r.writeToFileSystem({
              directoryHandle: i,
              fileBuffer: t,
              fileName: String(n),
            });
            var u = e(),
              c = e();
            yield r.readFromFileSystem({
              directoryHandle: i,
              fileName: String(n),
            });
            var d = e(),
              m = e();
            yield r.cleanupFileSystem({
              directoryHandle: i,
              fileName: String(n),
            });
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
                numFiles: yield r.getFileCount({ directoryHandle: i }),
              },
            });
          } catch (e) {
            return (
              o("WAMediaWasmWorker").sendLogToMainThread(
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
        })),
        d.apply(this, arguments)
      );
    }
    ((l.runIoTestingWebCache = s), (l.runIoTestingOPFS = c));
  },
  98,
);
