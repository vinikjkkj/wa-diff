__d(
  "WAWebMessageQueueImpl",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("gkx")("8791");
    }
    function s() {
      return e() ? "one_queue" : "legacy";
    }
    function u(t, n) {
      return !t || (n && e());
    }
    ((l.isOneQueueAdoptionEnabled = e),
      (l.getMessageQueueImpl = s),
      (l.shouldFlushMessageImmediately = u));
  },
  98,
);
