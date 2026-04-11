__d(
  "WAWebStartMediaDownloadQpl",
  ["WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891429592, "538"),
      s = 600 * 1e3;
    function u(t) {
      var n = t.entryPoint;
      return o("WAWebQplFlow").startQplFlow(e, {
        annotations: { string: { entryPoint: n } },
        timeoutInMs: s,
      });
    }
    l.startMediaDownloadQpl = u;
  },
  98,
);
