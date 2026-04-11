__d(
  "WASmaxInMessageDeliverReceiverContentTypeMediaRCATMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "mediatype",
        "url",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytes(r.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { plaintextMediatype: a.value, rcatElementValue: i.value },
              l.value,
            ),
          )
        : l;
    }
    l.parseReceiverContentTypeMediaRCATMixin = e;
  },
  98,
);
