__d(
  "WASmaxInMessageDeliverTriggerMessageCSATMixin",
  [
    "WASmaxInMessageDeliverTriggerMessageCSATAttributesMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverTriggerMessageCSATAttributesMixin",
      ).parseTriggerMessageCSATAttributesMixin(n.value);
      return (r.success, r);
    }
    l.parseTriggerMessageCSATMixin = e;
  },
  98,
);
