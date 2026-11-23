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
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("requireDeferred")("WAWebStatsUploadJob").__setRef(
        "WAWebUploadStatsBackend",
      );
    function u(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(e)),
        r = o("WATimeUtils").unixTime();
      return c(t, async function (e) {
        var a = await s.load(),
          i = await a(n, r);
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
    }
    function c(t, n) {
      return o("WAPromiseLoop").promiseLoop(async function (r, a, i) {
        try {
          return (await p(), await n(r));
        } catch (n) {
          return i > 1
            ? (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[wam] sendLogs failure error: ",
                    "",
                  ])),
                String(n),
              ),
              r(t))
            : d(i);
        }
      });
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
