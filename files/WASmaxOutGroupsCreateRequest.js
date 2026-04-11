__d(
  "WASmaxOutGroupsCreateRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutGroupsBaseSetServerMixin",
    "WASmaxOutGroupsDedupAttrsMixin",
    "WASmaxOutGroupsGroupMemberAddModeMixin",
    "WASmaxOutGroupsGroupMemberLinkModeMixin",
    "WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin",
    "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
    "WASmaxOutGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
    "WASmaxOutGroupsParentGroupDefaultMembershipApprovalModeMixin",
    "WASmaxOutGroupsPermissionTokenMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.participantJid,
        n = e.participantPhoneNumber,
        r = e.participantUsername,
        a = e.permissionTokenMixinArgs,
        i = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsPermissionTokenMixin").mergePermissionTokenMixin,
          o("WASmaxJsx").smax("participant", {
            jid: o("WAWap").JID(t),
            phone_number: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            username: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r),
          }),
          a,
        );
      return i;
    }
    function s(e) {
      var t = e.descriptionId,
        n = e.bodyElementValue,
        r = o("WASmaxJsx").smax(
          "description",
          { id: o("WAWap").CUSTOM_STRING(t) },
          o("WASmaxJsx").smax("body", null, n),
        );
      return r;
    }
    function u() {
      var e = o("WASmaxJsx").smax("locked", null);
      return e;
    }
    function c() {
      var e = o("WASmaxJsx").smax("announcement", null);
      return e;
    }
    function d(e) {
      var t = e.hasParentGroupDefaultMembershipApprovalMode,
        n = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutGroupsParentGroupDefaultMembershipApprovalModeMixin")
            .mergeParentGroupDefaultMembershipApprovalModeMixin,
          o("WASmaxJsx").smax("parent", null),
          t,
        );
      return n;
    }
    function m() {
      var e = o("WASmaxJsx").smax("no_frequently_forwarded", null);
      return e;
    }
    function p(e) {
      var t = e.ephemeralExpiration,
        n = e.ephemeralTrigger,
        r = o("WASmaxJsx").smax("ephemeral", {
          expiration: o("WAWap").INT(t),
          trigger: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
        });
      return r;
    }
    function _(e) {
      var t = o(
        "WASmaxOutGroupsMembershipApprovalGroupJoinModeMixin",
      ).mergeMembershipApprovalGroupJoinModeMixin(
        o("WASmaxJsx").smax("membership_approval_mode", null),
        e,
      );
      return t;
    }
    function f() {
      var e = o("WASmaxJsx").smax("breakout", null);
      return e;
    }
    function g() {
      var e = o("WASmaxJsx").smax("created_as_lid", null);
      return e;
    }
    function h(e) {
      var t = e.addressingModeOverrideMode,
        n = o("WASmaxJsx").smax("addressing_mode_override", {
          mode: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function y(e) {
      var t = e.linkedParentJid,
        n = o("WASmaxJsx").smax("linked_parent", {
          jid: o("WAWap").GROUP_JID(t),
        });
      return n;
    }
    function C() {
      var e = o("WASmaxJsx").smax("hidden_group", null);
      return e;
    }
    function b() {
      var e = o("WASmaxJsx").smax("allow_non_admin_sub_group_creation", null);
      return e;
    }
    function v() {
      var e = o("WASmaxJsx").smax("create_general_chat", null);
      return e;
    }
    function S() {
      var e = o("WASmaxJsx").smax("capi", null);
      return e;
    }
    function R(t) {
      var n,
        r,
        a = t.participantArgs,
        i = t.descriptionArgs,
        l = t.hasLocked,
        R = t.hasAnnouncement,
        L = t.parentArgs,
        E = t.hasNoFrequentlyForwarded,
        k = t.ephemeralArgs,
        I = t.membershipApprovalModeArgs,
        T = t.hasBreakout,
        D = t.hasCreatedAsLid,
        x = t.addressingModeOverrideArgs,
        $ = t.linkedParentArgs,
        P = t.hasHiddenGroup,
        N = t.hasAllowNonAdminSubGroupCreation,
        M = t.hasCreateGeneralChat,
        w = t.hasCapi,
        A = t.dedupAttrsMixinArgs,
        F = t.groupMemberAddModeMixinArgs,
        O = t.groupMemberLinkModeMixinArgs,
        B = t.groupMemberShareGroupHistoryModeMixinArgs,
        W = t.namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs,
        q = o("WASmaxOutGroupsBaseSetServerMixin").mergeBaseSetServerMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o(
              "WASmaxOutGroupsNamedSubjectOrUnnamedSubjectFallbackMixinGroup",
            ).mergeNamedSubjectOrUnnamedSubjectFallbackMixinGroup(
              (n = o("WASmaxMixins")).optionalMerge(
                o("WASmaxOutGroupsGroupMemberShareGroupHistoryModeMixin")
                  .mergeGroupMemberShareGroupHistoryModeMixin,
                n.optionalMerge(
                  o("WASmaxOutGroupsGroupMemberLinkModeMixin")
                    .mergeGroupMemberLinkModeMixin,
                  n.optionalMerge(
                    o("WASmaxOutGroupsGroupMemberAddModeMixin")
                      .mergeGroupMemberAddModeMixin,
                    n.optionalMerge(
                      o("WASmaxOutGroupsDedupAttrsMixin").mergeDedupAttrsMixin,
                      o("WASmaxJsx").smax(
                        "create",
                        null,
                        [].concat(
                          (r = o("WASmaxChildren")).REPEATED_CHILD(
                            e,
                            a,
                            0,
                            19999,
                          ),
                          [
                            r.OPTIONAL_CHILD(s, i),
                            r.HAS_OPTIONAL_CHILD(u, l),
                            r.HAS_OPTIONAL_CHILD(c, R),
                            r.OPTIONAL_CHILD(d, L),
                            r.HAS_OPTIONAL_CHILD(m, E),
                            r.OPTIONAL_CHILD(p, k),
                            r.OPTIONAL_CHILD(_, I),
                            r.HAS_OPTIONAL_CHILD(f, T),
                            r.HAS_OPTIONAL_CHILD(g, D),
                            r.OPTIONAL_CHILD(h, x),
                            r.OPTIONAL_CHILD(y, $),
                            r.HAS_OPTIONAL_CHILD(C, P),
                            r.HAS_OPTIONAL_CHILD(b, N),
                            r.HAS_OPTIONAL_CHILD(v, M),
                            r.HAS_OPTIONAL_CHILD(S, w),
                          ],
                        ),
                      ),
                      A,
                    ),
                    F,
                  ),
                  O,
                ),
                B,
              ),
              W,
            ),
          ),
        );
      return q;
    }
    ((l.makeCreateRequestCreateParticipant = e),
      (l.makeCreateRequestCreateDescription = s),
      (l.makeCreateRequestCreateLocked = u),
      (l.makeCreateRequestCreateAnnouncement = c),
      (l.makeCreateRequestCreateParent = d),
      (l.makeCreateRequestCreateNoFrequentlyForwarded = m),
      (l.makeCreateRequestCreateEphemeral = p),
      (l.makeCreateRequestCreateMembershipApprovalMode = _),
      (l.makeCreateRequestCreateBreakout = f),
      (l.makeCreateRequestCreateCreatedAsLid = g),
      (l.makeCreateRequestCreateAddressingModeOverride = h),
      (l.makeCreateRequestCreateLinkedParent = y),
      (l.makeCreateRequestCreateHiddenGroup = C),
      (l.makeCreateRequestCreateAllowNonAdminSubGroupCreation = b),
      (l.makeCreateRequestCreateCreateGeneralChat = v),
      (l.makeCreateRequestCreateCapi = S),
      (l.makeCreateRequest = R));
  },
  98,
);
