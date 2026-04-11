__d(
  "ServerJsRuntimeEnvironment",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e;
    function u(t, n) {
      (e == null || s(0, 71696), (e = { platform: t, executionContext: n }));
    }
    function c() {
      return e != null;
    }
    function d() {
      var t;
      return (t = e) == null ? void 0 : t.executionContext;
    }
    function m() {
      var t;
      return (t = e) == null ? void 0 : t.platform;
    }
    ((l.init = u),
      (l.isRunningServerJsRuntime = c),
      (l.getExecutionContext = d),
      (l.getPlatform = m));
  },
  98,
);
