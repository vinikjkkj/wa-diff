__d(
  "WAWebDebugVoipInfo",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    var e = !r("gkx")("26258"),
      s = new Set();
    function u() {
      return e;
    }
    function c(t) {
      e !== t &&
        ((e = t),
        s.forEach(function (t) {
          t(e);
        }));
    }
    ((c.doc = "Enable Video/Audio Call debug info"), (c.paramsToExecute = []));
    function d(e) {
      return (
        s.add(e),
        function () {
          s.delete(e);
        }
      );
    }
    ((l.isVoipDebugInfoEnabled = u),
      (l.setVoipDebugInfo = c),
      (l.subscribeToVoipDebugInfo = d));
  },
  98,
);
