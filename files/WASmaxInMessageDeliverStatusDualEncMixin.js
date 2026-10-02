__d(
  "WASmaxInMessageDeliverStatusDualEncMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverStatusDualEncNonOrBroadcastDualEncMediaMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverStatusDualEncNonOrBroadcastDualEncMediaMixinGroup",
      ).parseStatusDualEncNonOrBroadcastDualEncMediaMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            statusDualEncNonOrBroadcastDualEncMediaMixinGroup: n.value,
          })
        : n;
    }
    l.parseStatusDualEncMixin = e;
  },
  98,
);
