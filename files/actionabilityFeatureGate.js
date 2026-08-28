__d(
  "actionabilityFeatureGate",
  ["gkx", "isMAIBAAsyncTaskEnabled"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("25198");
    }
    function s() {
      return r("gkx")("7000");
    }
    function u() {
      return r("isMAIBAAsyncTaskEnabled")() && r("gkx")("5929");
    }
    function c() {
      return r("isMAIBAAsyncTaskEnabled")();
    }
    ((l.isActionabilityToolCallUIEnabled = e),
      (l.isDraftWarningUIEnabled = s),
      (l.isDeterministicTaskPreviewEnabled = u),
      (l.isTaskAuthHandoffEnabled = c));
  },
  98,
);
