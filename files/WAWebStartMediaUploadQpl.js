__d(
  "WAWebStartMediaUploadQpl",
  ["WAWebQplFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891428410, "3040"),
      s = 600 * 1e3;
    function u(t) {
      var n = t.entryPoint;
      return o("WAWebQplFlow").startQplFlow(e, {
        annotations: { string: { entryPoint: n } },
        timeoutInMs: s,
      });
    }
    l.startMediaUploadQpl = u;
  },
  98,
);
