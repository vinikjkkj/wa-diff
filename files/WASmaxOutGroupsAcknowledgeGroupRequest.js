__d(
  "WASmaxOutGroupsAcknowledgeGroupRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
        o("WASmaxJsx").smax("iq", null, o("WASmaxJsx").smax("ack", null)),
        e,
      );
      return t;
    }
    l.makeAcknowledgeGroupRequest = e;
  },
  98,
);
