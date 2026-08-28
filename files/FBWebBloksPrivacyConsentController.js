__d(
  "FBWebBloksPrivacyConsentController",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.experienceCallbacks = {}),
            (this.flowCallbacks = {}),
            (this.promptCounters = {}),
            (this.activeFlowStack = []));
        }
        var t = e.prototype;
        return (
          (t.increasePromptCounterForCurrentFlow = function () {
            var e = this.currentFlowId();
            e != null && (this.promptCounters[e] += 1);
          }),
          (t.decreasePromptCounterForCurrentFlow = function () {
            var e = this.currentFlowId();
            e != null && (this.promptCounters[e] -= 1);
          }),
          (t.promptNumForCurrentFlow = function () {
            var e = this.currentFlowId();
            return e != null ? this.promptCounters[e] : 0;
          }),
          (t.currentFlowId = function () {
            return this.activeFlowStack.length > 0
              ? this.activeFlowStack[this.activeFlowStack.length - 1]
              : null;
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
