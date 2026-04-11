__d(
  "WASmaxOutGroupsLinkSubGroupsRequest",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxOutGroupsBaseSetGroupMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function s(t) {
      var n = t.hasHiddenGroup,
        r = t.groupJid,
        a = o("WASmaxJsx").smax(
          "group",
          { jid: o("WAWap").GROUP_JID(r) },
          o("WASmaxChildren").HAS_OPTIONAL_CHILD(e, n),
        );
      return a;
    }
    function u(e) {
      var t = e.groupArgs,
        n = o("WASmaxOutGroupsBaseSetGroupMixin").mergeBaseSetGroupMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "links",
              null,
              o("WASmaxJsx").smax(
                "link",
                { link_type: "sub_group" },
                o("WASmaxChildren").REPEATED_CHILD(s, t, 1, 1e3),
              ),
            ),
          ),
          e,
        );
      return n;
    }
    ((l.makeLinkSubGroupsRequestLinksLinkGroupHiddenGroup = e),
      (l.makeLinkSubGroupsRequestLinksLinkGroup = s),
      (l.makeLinkSubGroupsRequest = u));
  },
  98,
);
