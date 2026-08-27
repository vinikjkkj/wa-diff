__d(
  "WAWebRegisterPassiveTasksForConnectWorkerCompatible",
  ["nullthrows"],
  function (t, n, r, o, a, i, l) {
    var e = null;
    function s(t) {
      e = t;
    }
    function u() {
      return d().registerPassiveTasksForConnect();
    }
    function c() {
      return d().shouldConnectAsPassiveMode();
    }
    function d() {
      return r("nullthrows")(
        e,
        "RegisterPassiveTasksForConnect is not initialised",
      );
    }
    ((l.setInstance = s),
      (l.registerPassiveTasksForConnect = u),
      (l.shouldConnectAsPassiveMode = c));
  },
  98,
);
