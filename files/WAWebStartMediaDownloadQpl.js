__d(
  "WAWebStartMediaDownloadQpl",
  ["WAWebQplFlow", "gkx", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891429592, "538"),
      s = 600 * 1e3;
    function u(t) {
      var n = t.entryPoint;
      return o("WAWebQplFlow").startQplFlow(e, {
        annotations: {
          bool: { wa_web_media_wasm_worker_split: r("gkx")("24042") },
          string: { entryPoint: n },
        },
        timeoutInMs: s,
      });
    }
    l.startMediaDownloadQpl = u;
  },
  98,
);
