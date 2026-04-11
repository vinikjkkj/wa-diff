__d(
  "NoOpDGWLoggingContext",
  ["IDGWLoggingContext"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {}
        var t = e.prototype;
        return (
          (t.streamRequested = function (t) {}),
          (t.streamClosed = function (t) {}),
          (t.tabClosed = function () {}),
          (t.getGlobalState = function () {
            return { realtime: 0, lightspeed: 0 };
          }),
          e
        );
      })(),
      s = new e(),
      u = (function () {
        function e() {
          this.sgTransportId = null;
        }
        var t = e.prototype;
        return (
          (t.getGlobalLogger = function () {
            return s;
          }),
          (e.bumpODSKey = function (t, n, r) {}),
          (t.bumpODSKey = function (t, n, r) {}),
          (t.logEvent = function (t, n, r, o, a) {}),
          (t.logError = function (t, n, r, o, a, i) {}),
          (t.logWarn = function (t, n, r, o, a) {}),
          (t.qplMarkerStart = function (t, n) {}),
          (t.qplMarkerEnd = function (t, n, r) {}),
          (t.qplMarkerPoint = function (t, n, r) {}),
          (t.qplMarkerAnnotate = function (t, n, r) {}),
          e
        );
      })();
    ((l.DGWLoggingComponent = o("IDGWLoggingContext").DGWLoggingComponent),
      (l.QPLEvent = o("IDGWLoggingContext").QPLEvent),
      (l.QPLResult = o("IDGWLoggingContext").QPLResult),
      (l.NoOpDGWLoggingContext = u),
      (l.DGWLoggingContext = u));
  },
  98,
);
