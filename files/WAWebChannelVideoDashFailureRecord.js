__d(
  "WAWebChannelVideoDashFailureRecord",
  [],
  function (t, n, r, o, a, i) {
    var e = 200,
      l = new Set();
    function s(t) {
      if ((l.delete(t), l.add(t), l.size > e)) {
        var n = l.values().next().value;
        n != null && l.delete(n);
      }
    }
    function u(e) {
      return l.has(e);
    }
    ((i.rememberChannelVideoDashFailure = s),
      (i.hasChannelVideoDashFailed = u));
  },
  66,
);
