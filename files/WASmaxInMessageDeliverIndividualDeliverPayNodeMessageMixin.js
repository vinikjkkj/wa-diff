__d(
  "WASmaxInMessageDeliverIndividualDeliverPayNodeMessageMixin",
  ["WASmaxInMessageDeliverIndividualDeliverPayNodeMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pay");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverIndividualDeliverPayNodeMixin",
      ).parseIndividualDeliverPayNodeMixin(n.value);
      return (r.success, r);
    }
    l.parseIndividualDeliverPayNodeMessageMixin = e;
  },
  98,
);
