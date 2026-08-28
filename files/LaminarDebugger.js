__d(
  "LaminarDebugger",
  ["EventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "DEBUGGER",
      s = (function () {
        function t() {
          ((this.$1 = []),
            (this.$6 = {}),
            (this.$3 = 100),
            (this.$2 = new Array(this.$3)),
            (this.$4 = new (r("EventEmitter"))()),
            (this.$5 = !1));
        }
        var n = t.prototype;
        return (
          (n.getDebuggerActionDispatchQueue = function () {
            return this.$2;
          }),
          (n.addSnapshotToDebuggerActionDispatchQueue = function (n) {
            ((this.$6 = n.newState),
              this.$4.emit(e, n),
              this.$2.push(n),
              this.$2.shift());
          }),
          (n.updateCaptureRate = function (t) {
            t > 0 && ((this.$2.length += t - this.$3), (this.$3 = t));
          }),
          (n.addDebugListener = function (n) {
            return this.$4.addListener(e, n);
          }),
          (n.removeAllDebugListeners = function () {
            this.$4.removeAllListeners(e);
          }),
          (n.getPauseActionDispatches = function () {
            return this.$5;
          }),
          (n.getAlteredStateSnapshot = function () {
            return this.$6;
          }),
          (n.setPauseActionDispatches = function (t) {
            this.$5 = t;
          }),
          (n.enqueueActionToDispatch = function (t, n) {
            this.$1.push([t, n]);
          }),
          (n.dequeueActionToDispatch = function () {
            return this.$1.shift();
          }),
          (n.clearActionDispatchQueue = function () {
            this.$1 = [];
          }),
          (n.isActionDispatchQueueEmpty = function () {
            return this.$1.length === 0;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
