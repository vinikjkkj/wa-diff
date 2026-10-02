__d(
  "WASmaxInMessageDeliverGroupDualEncMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverGroupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverGroupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup",
      ).parseGroupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup(
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({
            groupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup:
              n.value,
          })
        : n;
    }
    l.parseGroupDualEncMixin = e;
  },
  98,
);
