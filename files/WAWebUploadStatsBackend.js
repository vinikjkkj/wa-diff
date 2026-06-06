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
    "WAWebStatsUploadJob",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var a = new Uint8Array(o("WABase64").decodeB64(e)),
        i = o("WATimeUtils").unixTime();
      return u(
        t,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var n = yield r("WAWebStatsUploadJob")(a, i);
            if (n != null && n.errorCode) {
              if (n.errorCode >= 500)
                throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  n.errorCode,
                  n.errorText,
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
    function u(t, r) {
      return o("WAPromiseLoop").promiseLoop(
        (function () {
          var a = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (n, a, i) {
              try {
                return (yield m(), yield r(n));
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
                  : c(i);
              }
            },
          );
          return function (e, t, n) {
            return a.apply(this, arguments);
          };
        })(),
      );
    }
    function c(e) {
      return o("WAPromiseDelays").delayMs(
        o("WABackoffUtils").expBackoff(e, 12e4, 1e3, 0.1),
      );
    }
    var d = 30;
    function m() {
      return o("WAPromiseTimeout").promiseTimeout(
        r("WAWebNetworkStatus").waitIfOffline(),
        d * 1e3,
        "wamUploadWaitForOnline",
      );
    }
    l.default = s;
  },
  98,
);
