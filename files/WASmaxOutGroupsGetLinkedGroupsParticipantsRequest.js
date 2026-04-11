__d(
  "WASmaxOutGroupsGetLinkedGroupsParticipantsRequest",
  ["WASmaxJsx", "WASmaxOutGroupsBaseGetGroupMixin"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxOutGroupsBaseGetGroupMixin").mergeBaseGetGroupMixin(
        o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("linked_groups_participants", null),
        ),
        e,
      );
      return t;
    }
    l.makeGetLinkedGroupsParticipantsRequest = e;
  },
  98,
);
