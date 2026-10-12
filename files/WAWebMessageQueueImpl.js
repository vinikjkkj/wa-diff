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
    ((l.isOneQueueAdoptionEnabled = e), (l.getMessageQueueImpl = s));
  },
  98,
);
