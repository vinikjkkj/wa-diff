__d(
  "WASmaxInMessageDeliverUPIMandateWithUpdateMixin",
  ["WASmaxInMessageDeliverUPIMandateUpdateBaseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "mandate");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "mandate-update");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverUPIMandateUpdateBaseMixin",
      ).parseUPIMandateUpdateBaseMixin(n.value);
      return (r.success, r);
    }
    l.parseUPIMandateWithUpdateMixin = e;
  },
  98,
);
