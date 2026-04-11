__d(
  "WAWebGalaxyFlowDownloadTracker",
  [
    "fbt",
    "Promise",
    "WAWebActionToast.react",
    "WAWebNoop",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = 5e3,
      m = new Map();
    function p() {
      var t = (e || (e = n("Promise"))).reject(
        new (o("WAWebActionToast.react").ActionType)(
          s._(
            /*BTDS*/ "Couldn't download responses. Make sure the device linked to this account is connected to the internet and try again.",
          ),
        ),
      );
      (t.catch(r("WAWebNoop")),
        o("WAWebToastManager").ToastManager.open(
          c.jsx(o("WAWebActionToast.react").ActionToast, {
            initialAction: null,
            pendingAction: t,
          }),
        ));
    }
    var _ = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.registerRequest = function (t) {
            var e = m.get(t);
            e != null && window.clearTimeout(e);
            var n = window.setTimeout(function () {
              (m.delete(t), p());
            }, d);
            m.set(t, n);
          }),
          (t.resolveRequest = function (t) {
            var e = m.get(t);
            e != null && (window.clearTimeout(e), m.delete(t));
          }),
          (t.failRequest = function (t) {
            var e = m.get(t);
            e != null && (window.clearTimeout(e), m.delete(t), p());
          }),
          (t.failAllRequests = function () {
            m.size !== 0 &&
              (m.forEach(function (e) {
                window.clearTimeout(e);
              }),
              m.clear(),
              p());
          }),
          e
        );
      })(),
      f = new _();
    l.GalaxyFlowDownloadTracker = f;
  },
  226,
);
