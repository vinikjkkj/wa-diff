__d(
  "WASmaxInMessageDeliverContentTypePollAddOptionMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "poll",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "polltype",
        "add_option",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "message_association_type",
        "poll_add_option",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            metaPolltype: a.value,
            metaMessageAssociationType: i.value,
          })
        : i;
    }
    l.parseContentTypePollAddOptionMixin = e;
  },
  98,
);
