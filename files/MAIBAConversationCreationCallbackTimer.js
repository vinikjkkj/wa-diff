__d(
  "MAIBAConversationCreationCallbackTimer",
  ["clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("clearTimeout")(e);
    }
    function s(e, t) {
      return r("setTimeout")(e, t);
    }
    ((l.cancelMAIBAConversationCreationCallbackTimer = e),
      (l.scheduleMAIBAConversationCreationCallbackTimer = s));
  },
  98,
);
