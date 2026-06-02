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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = new Uint8Array(o("WABase64").decodeB64(e)),
        a = o("WATimeUtils").unixTime();
      return u(t, async function (e) {
        var i = await r("WAWebStatsUploadJob")(n, a);
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
    function u(t, n) {
      return o("WAPromiseLoop").promiseLoop(async function (r, a, i) {
        try {
          return (await m(), await n(r));
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
            : c(i);
        }
      });
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
