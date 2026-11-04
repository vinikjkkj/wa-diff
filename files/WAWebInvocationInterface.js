__d(
  "WAWebInvocationInterface",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      e = t;
    }
    function u() {
      return r("nullthrows")(e, "InvocationInterface was not inited");
    }
    function c(e, t) {
      return u().sendLogs(e, t);
    }
    function d(e) {
      return u().setBackgroundPause(e);
    }
    ((l.set = s), (l.get = u), (l.sendLogs = c), (l.setBackgroundPause = d));
  },
  98,
);
