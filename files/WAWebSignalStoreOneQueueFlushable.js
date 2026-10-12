__d(
  "WAWebSignalStoreOneQueueFlushable",
  [
    "WALogger",
    "WAWebOfflineResumeCounters",
    "WAWebSignalProtocolStore",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        flush: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = o("WAWebSignalProtocolStore").getSignalProtocolStore();
            if (t.hasPendingPersistWrites())
              try {
                yield t.flushBufferToDiskIfNotMemOnlyMode();
              } catch (t) {
                (o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "signalStoreOneQueueFlushable: flush failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .tags("messaging"),
                  o("WAWebOfflineResumeCounters").logOneQueueFlushFailed());
              }
          });
          function a() {
            return t.apply(this, arguments);
          }
          return a;
        })(),
      };
    l.signalStoreOneQueueFlushable = s;
  },
  98,
);
