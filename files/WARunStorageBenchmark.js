__d(
  "WARunStorageBenchmark",
  [
    "WAIndexDBStorage",
    "WAOpfsSyncStorage",
    "WATestBenchmark",
    "WAWebCacheStorage",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = async function (t, n, r, a, i) {
      var e = 1024 * r,
        l = new Blob([new Uint8Array(e).fill(255)]),
        s = await l.arrayBuffer();
      t("datapoints: " + a + " repetitions: " + i + " blob size: " + r + "KB");
      var u = await o("WAIndexDBStorage").prepareIDB();
      (await o("WAIndexDBStorage").cleanupIDB({ idb: u }),
        await o("WAWebCacheStorage").cleanupCache());
      var c = await o("WAWebCacheStorage").prepareCache(),
        d = await o("WAOpfsSyncStorage").prepareFileSystem();
      t("start write benchmark...");
      var m = await o("WATestBenchmark").createBenchmark(
        a,
        i,
        async function (e) {
          (await e("IndexedDB write", async function (e, t) {
            await o("WAIndexDBStorage").writeToIDB({
              idb: u,
              fileBuffer: await s,
              key: e + "_" + t,
            });
          }),
            await e("Web Cache write", async function (e, t) {
              await o("WAWebCacheStorage").writeToCache({
                cache: c,
                fileBuffer: s,
                key: e + "_" + t,
              });
            }),
            await e("OPFS Sync write", async function (e, t) {
              await o("WAOpfsSyncStorage").writeToFileSystem({
                directoryHandle: d,
                fileBuffer: s,
                fileName: e + "_" + t,
              });
            }));
        },
      );
      (t("end write benchmark..."),
        n
          ? o("WATestBenchmark").printAsCSVInMS(t, m)
          : o("WATestBenchmark").printReport(t, m),
        t("start read benchmark..."));
      var p = await o("WATestBenchmark").createBenchmark(
        a,
        i,
        async function (e) {
          var t;
          await e("IndexedDB read", async function (e, n) {
            t = await o("WAIndexDBStorage").readFromIDB({
              idb: u,
              key: e + "_" + n,
            });
          });
          var n;
          await e("Web Cache read", async function (e, t) {
            n = await o("WAWebCacheStorage").readFromCache({
              cache: c,
              key: e + "_" + t,
            });
          });
          var r;
          if (
            (await e("OPFS Sync read", async function (e, t) {
              ((r = await o("WAOpfsSyncStorage").readFromFileSystem({
                directoryHandle: d,
                fileName: e + "_" + t,
              })),
                await o("WAOpfsSyncStorage").cleanupFileSystem({
                  directoryHandle: d,
                  fileName: e + "_" + t,
                }));
            }),
            !(
              t instanceof ArrayBuffer &&
              n instanceof ArrayBuffer &&
              r instanceof ArrayBuffer
            ))
          )
            return Promise.reject("read result is not ArrayBuffer");
        },
      );
      (t("end read benchmark..."),
        n
          ? o("WATestBenchmark").printAsCSVInMS(t, p)
          : o("WATestBenchmark").printReport(t, p));
    };
    l.runStorageBenchmark = e;
  },
  98,
);
