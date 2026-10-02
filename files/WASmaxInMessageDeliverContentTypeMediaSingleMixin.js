__d(
  "WASmaxInMessageDeliverContentTypeMediaSingleMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaOrMedianotifyMixinGroup",
    "WASmaxInMessageDeliverEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "enc");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "rcat", e);
      if (!a.success) return a;
      var i = o(
          "WASmaxInMessageDeliverEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup",
        ).parseEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup(
          r.value,
        ),
        l = o(
          "WASmaxInMessageDeliverContentTypeMediaOrMedianotifyMixinGroup",
        ).parseContentTypeMediaOrMedianotifyMixinGroup(t);
      return l.success
        ? o("WAResultOrError").makeResult({
            encEncMediaTypeEncMediaTypeOrEncMediaTypeFutureproofMixinGroup:
              i.success ? i.value : null,
            contentTypeMediaOrMedianotifyMixinGroup: l.value,
            rcat: a.value,
          })
        : l;
    }
    ((l.parseContentTypeMediaSingleRcat = e),
      (l.parseContentTypeMediaSingleMixin = s));
  },
  98,
);
