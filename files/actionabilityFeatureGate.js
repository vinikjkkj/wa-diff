__d(
  "actionabilityFeatureGate",
  [
    "gkx",
    "isMAIBAAsyncTaskEnabled",
    "isMAIBAConversationViewPage",
    "isMAIBAMBSAsyncTaskEnabled",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("7000");
    }
    function s(e) {
      return r("isMAIBAConversationViewPage")() ||
        r("isMAIBAMBSAsyncTaskEnabled")()
        ? !1
        : r("isMAIBAAsyncTaskEnabled")(e);
    }
    function u(e) {
      return r("isMAIBAConversationViewPage")() ||
        r("isMAIBAMBSAsyncTaskEnabled")()
        ? !1
        : c(e) || (r("isMAIBAAsyncTaskEnabled")(e) && r("gkx")("21740"));
    }
    function c(e) {
      return r("isMAIBAConversationViewPage")()
        ? !0
        : r("isMAIBAMBSAsyncTaskEnabled")()
          ? r("isMAIBAAsyncTaskEnabled")(e)
          : r("gkx")("27004");
    }
    ((l.isDraftWarningUIEnabled = e),
      (l.isTaskAuthHandoffEnabled = s),
      (l.isTaskAuthPreparationEnabled = u),
      (l.isTaskCreationAfterTextEnabled = c));
  },
  98,
);
