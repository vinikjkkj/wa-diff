__d(
  "WASmaxOutGroupsUnlinkGroupsRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxOutGroupsBaseSetGroupMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.groupJid,
        n = e.hasGroupRemoveOrphanedMembersTrue,
        r = o("WASmaxJsx").smax("group", {
          jid: o("WAWap").GROUP_JID(t),
          remove_orphaned_members: o("WASmaxAttrs").OPTIONAL_LITERAL("true", n),
        });
      return r;
    }
    function s(t) {
      var n = t.groupArgs,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "unlink",
              { unlink_type: "sub_group" },
              o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 1e3),
            ),
          ),
          t,
        );
      return r;
    }
    ((l.makeUnlinkGroupsRequestUnlinkGroup = e),
      (l.makeUnlinkGroupsRequest = s));
  },
  98,
);
