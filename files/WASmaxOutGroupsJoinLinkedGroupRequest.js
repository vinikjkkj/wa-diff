__d(
  "WASmaxOutGroupsJoinLinkedGroupRequest",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.joinLinkedGroupType,
        n = e.joinLinkedGroupJid,
        r = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("join_linked_group", {
              type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
              jid: o("WAWap").GROUP_JID(n),
            }),
          ),
          e,
        );
      return r;
    }
    l.makeJoinLinkedGroupRequest = e;
  },
  98,
);
