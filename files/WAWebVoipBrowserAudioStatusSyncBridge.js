__d(
  "WAWebVoipBrowserAudioStatusSyncBridge",
  ["WAWebVoipBrowserAudioStatus"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0,
      s = 1,
      u = 8,
      c = 1e3,
      d = Reflect.get(globalThis, "Atomics"),
      m = function (t, n, r, o) {
        return d.wait(t, n, r, o);
      },
      p = null;
    function _() {
      var e = new SharedArrayBuffer(u),
        t = new Int32Array(e);
      return { buffer: t.buffer, view: t };
    }
    function f(t) {
      var n = t.onTimeout,
        r = t.onUnknown,
        a = t.postMessage,
        i = t.timeoutMs,
        l = i === void 0 ? c : i,
        u = t.waitFn,
        f = u === void 0 ? m : u;
      if (p != null) return p;
      var g = _(),
        h = g.buffer,
        y = g.view;
      (d.store(y, e, 0),
        d.store(
          y,
          s,
          o("WAWebVoipBrowserAudioStatus")
            .BROWSER_AUDIO_PROCESSING_STATUS_UNKNOWN,
        ),
        a({
          type: "waWasmWorkerCompatibleCallback",
          __name: "browserAudioProcessingStatusSyncRequest",
          buffer: h,
        }));
      var C = f(y, e, 0, l);
      if (C === "timed-out") {
        var b = o(
          "WAWebVoipBrowserAudioStatus",
        ).BROWSER_AUDIO_PROCESSING_STATUS_ALL;
        return (
          (p = b),
          n == null || n({ fallbackStatus: b, timeoutMs: l }),
          b
        );
      }
      var v = d.load(y, s);
      if (
        v ===
        o("WAWebVoipBrowserAudioStatus").BROWSER_AUDIO_PROCESSING_STATUS_UNKNOWN
      ) {
        var S = o(
          "WAWebVoipBrowserAudioStatus",
        ).BROWSER_AUDIO_PROCESSING_STATUS_ALL;
        return (r == null || r({ fallbackStatus: S }), S);
      }
      return ((p = v), v);
    }
    function g() {
      p = null;
    }
    ((l.resolveBrowserAudioProcessingStatusSync = f),
      (l.resetBrowserAudioProcessingStatusSyncCacheForTests = g));
  },
  98,
);
