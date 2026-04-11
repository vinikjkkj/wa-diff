__d(
  "WASmaxOutGroupsCreateSubGroupSuggestionSuggestionForNewGroupMixin",
  [
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsGroupMemberAddModeMixin",
    "WASmaxOutGroupsGroupMemberLinkModeMixin",
    "WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.bodyElementValue,
        n = o("WASmaxJsx").smax(
          "description",
          null,
          o("WASmaxJsx").smax("body", null, t),
        );
      return n;
    }
    function s() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function u() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function c() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function d(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function m(t) {
      var n,
        r = t.descriptionArgs,
        a = t.hasLocked,
        i = t.hasAnnouncement,
        l = t.hasHiddenGroup,
        m = t.membershipApprovalModeArgs,
        p = t.groupMemberAddModeMixinArgs,
        _ = t.groupMemberLinkModeMixinArgs,
        f = t.groupMemberShareGroupHistoryModeMixinArgs,
        g = t.subjectElementValue,
        h = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin")
            .mergeGroupMemberShareGroupHistoryModeMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutGroupsGroupMemberLinkModeMixin")
              .mergeGroupMemberLinkModeMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutGroupsGroupMemberAddModeMixin")
                .mergeGroupMemberAddModeMixin,
              o("WASmaxJsx").smax(
                "sub_group_suggestion",
                null,
                o("WASmaxJsx").smax("subject", null, g),
                (n = o("WASmaxChildren")).OPTIONAL_CHILD(e, r),
                n.HAS_OPTIONAL_CHILD(s, a),
                n.HAS_OPTIONAL_CHILD(u, i),
                n.HAS_OPTIONAL_CHILD(c, l),
                n.OPTIONAL_CHILD(d, m),
              ),
              p,
            ),
            _,
          ),
          f,
        );
      return h;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeCreateSubGroupSuggestionSuggestionForNewGroupDescription = e),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupLocked = s),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupAnnouncement = u),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupHiddenGroup = c),
      (l.makeCreateSubGroupSuggestionSuggestionForNewGroupMembershipApprovalMode =
        d),
      (l.mergeCreateSubGroupSuggestionSuggestionForNewGroupMixin = p));
  },
  98,
);
