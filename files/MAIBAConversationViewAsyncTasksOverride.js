__d(
  "MAIBAConversationViewAsyncTasksOverride",
  ["MAIBAChatMessageDebuggingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(t) {
      e =
        t === !0 &&
        o("MAIBAChatMessageDebuggingUtils").isMAIBAMessageDebuggingAllowed();
    }
    function u() {
      return e;
    }
    ((l.applyMAIBAConversationViewAsyncTasksOverride = s),
      (l.isMAIBAConversationViewAsyncTasksOverriddenOn = u));
  },
  98,
);
