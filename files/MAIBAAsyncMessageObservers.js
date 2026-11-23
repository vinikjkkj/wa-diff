__d(
  "MAIBAAsyncMessageObservers",
  ["FBLogger", "MAIBAChatStreamingStateUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set();
    function s(t) {
      return (
        e.add(t),
        function () {
          e.delete(t);
        }
      );
    }
    function u(t, n, a) {
      t == null ||
        a == null ||
        n == null ||
        o("MAIBAChatStreamingStateUtils").isStreamingStateLoading(n) ||
        e.forEach(function (e) {
          try {
            e.onConversationConfirmed == null || e.onConversationConfirmed(t);
          } catch (e) {
            var n = r("FBLogger")("axp_maiba_foundations_ux");
            e instanceof Error
              ? n.catching(e).warn("An async message observer failed")
              : n.warn("An async message observer failed: %s", String(e));
          }
        });
    }
    ((l.addMAIBAAsyncMessageObserver = s),
      (l.notifyMAIBAAsyncMessageObserversOfReply = u));
  },
  98,
);
