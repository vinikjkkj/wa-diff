__d(
  "WAWebMessageQueueImpl",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return r("qex")._("6048") === !0;
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
