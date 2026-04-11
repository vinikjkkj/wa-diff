__d(
  "WASmaxOutGroupsDeleteParentGroupRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
        o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("delete_parent", null),
        ),
        e,
      );
      return t;
    }
    l.makeDeleteParentGroupRequest = e;
  },
  98,
);
