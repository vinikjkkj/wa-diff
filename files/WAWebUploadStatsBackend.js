__d(
  "WAWebUploadStatsBackend",
  [
    "WABackoffUtils",
    "WABase64",
    "WALogger",
    "WAPromiseDelays",
    "WAPromiseLoop",
    "WAPromiseTimeout",
    "WATimeUtils",
    "WAWebBackendErrors",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebStatsUploadJob").__setRef(
        "WAWebUploadStatsBackend",
      );
    function u(e, t) {
      var r = new Uint8Array(o("WABase64").decodeB64(e)),
        a = o("WATimeUtils").unixTime();
      return c(
        t,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = yield s.load(),
              i = yield n(r, a);
            if (i != null && i.errorCode) {
              if (i.errorCode >= 500)
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  i.errorCode,
                  i.errorText,
                );
              e(t);
            }
            e(void 0);
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function c(t, r) {
      return o("WAPromiseLoop").promiseLoop(
        (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, a, i) {
              try {
                return (yield p(), yield r(n));
              } catch (r) {
                return i > 1
                  ? (o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[wam] sendLogs failure error: ",
                          "",
                        ])),
                      String(r),
                    ),
                    n(t))
                  : d(i);
              }
            },
          );
          return function (e, t, n) {
            return a.apply(this, arguments);
          };
        })(),
      );
    }
    function d(e) {
      return o("WAPromiseDelays").delayMs(
        o("WABackoffUtils").expBackoff(e, 12e4, 1e3, 0.1),
      );
    }
    var m = 30;
    function p() {
      return o("WAPromiseTimeout").promiseTimeout(
        r("WAWebNetworkStatus").waitIfOffline(),
        m * 1e3,
        "wamUploadWaitForOnline",
      );
    }
    l.default = u;
  },
  98,
);
