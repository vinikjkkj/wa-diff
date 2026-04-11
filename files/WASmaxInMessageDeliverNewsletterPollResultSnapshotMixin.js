__d(
  "WASmaxInMessageDeliverNewsletterPollResultSnapshotMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
    "WASmaxInMessageDeliverPayloadMixin",
    "WASmaxInMessageDeliverWAMOSubMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverPayloadMixin").parsePayloadMixin(
        n.value,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (!a.success) return a;
      var i = o("WASmaxInMessageDeliverWAMOSubMixin").parseWAMOSubMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ plaintextPayloadMixin: r.value }, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    l.parseNewsletterPollResultSnapshotMixin = e;
  },
  98,
);
