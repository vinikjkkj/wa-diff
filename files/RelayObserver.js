__d(
  "RelayObserver",
  ["ServerJsRuntimeEnvironment"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 0;
    function s() {
      return "" + e++;
    }
    var u = 6e4,
      c = new Map(),
      d = !1,
      m = null;
    function p() {
      o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime() ||
        d ||
        navigator.userAgent.includes("jsdom") ||
        ((d = !0),
        (m = window.setInterval(function () {
          (c.forEach(function (e) {
            e.time + u < Date.now() && c.delete(e.observabilityID);
          }),
            c.size === 0 &&
              ((d = !1), m && (window.clearInterval(m), (m = null))));
        }, 15e3)));
    }
    function _(e) {
      p();
      var t = s();
      return (
        c.set(t, { queryName: e, observabilityID: t, time: Date.now() }),
        t
      );
    }
    function f(e) {
      var t = c.get(e);
      return (c.delete(e), t);
    }
    ((l.getObservabilityID = s),
      (l.registerRelayQuery = _),
      (l.getAndDeleteRelayData = f));
  },
  98,
);
