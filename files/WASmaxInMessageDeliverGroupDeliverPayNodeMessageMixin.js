__d(
  "WASmaxInMessageDeliverGroupDeliverPayNodeMessageMixin",
  ["WASmaxInMessageDeliverGroupDeliverPayNodeMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pay");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverGroupDeliverPayNodeMixin",
      ).parseGroupDeliverPayNodeMixin(n.value);
      return (r.success, r);
    }
    l.parseGroupDeliverPayNodeMessageMixin = e;
  },
  98,
);
