__d(
  "WASmaxInMessageDeliverMetaScheduledMessageMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "key");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "scheduled_message",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "st",
        1577865600,
        4102473600,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "rkid");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(r.value, 32, 32);
      return s.success
        ? o("WAResultOrError").makeResult({
            metaType: a.value,
            metaSt: i.value,
            metaKeyRkid: l.value,
            metaKeyElementValue: s.value,
          })
        : s;
    }
    l.parseMetaScheduledMessageMixin = e;
  },
  98,
);
