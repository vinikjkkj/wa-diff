__d(
  "WAGetUrlSpoofChecksWasm",
  [
    "WALogger",
    "WAPromiseBackoffs",
    "WAPromiseManagement",
    "WARetryPromise",
    "WASuspiciousLinks",
    "WAWasmModuleCache",
    "asyncToGeneratorRuntime",
    "bx",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("bx").getURL(r("bx")("111117")),
      u = { algo: { type: "exponential", first: 1e3 }, max: 3e4, jitter: 0.1 },
      c = o("WAPromiseManagement").cacheWhilePending(
        function () {
          return s;
        },
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield r("WARetryPromise")(
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var n = t.failCount,
                    a = t.retry;
                  try {
                    return yield o("WAWasmModuleCache").loadWasmModule(s);
                  } catch (t) {
                    throw (
                      n === 0 &&
                        o("WALogger")
                          .ERROR(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "Host-check load failed; retrying",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t))
                          .sendLogs("wasm-load-failed"),
                      a(o("WAPromiseBackoffs").getDelay(n + 1, u)),
                      t
                    );
                  }
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
          return (o("WASuspiciousLinks").initializeSuspiciousHostChecks(t), t);
        }),
      ),
      d = c;
    ((l.getUrlSpoofChecksWasm = c), (l.preloadSuspiciousHostChecks = d));
  },
  98,
);
