__d(
  "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "message",
        { type: "poll" },
        o("WASmaxJsx").smax("meta", { polltype: "result_snapshot" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeContentTypePollResultSnapshotMixin = s;
  },
  98,
);
