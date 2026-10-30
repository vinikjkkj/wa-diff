__d(
  "WAWebChatCommunityUtils",
  [
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebLidMigrationUtils",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 91;
    function s(e) {
      return e ? u(g(e)) : !1;
    }
    function u(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.COMMUNITY &&
        o("WAWebChatGroupUtils").isSuspendedGroupFor(e)
      );
    }
    function c(e) {
      return e ? d(g(e)) : !1;
    }
    function d(e) {
      return (
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(e.groupMetadata) ===
          o("WAWebGroupType").GroupType.COMMUNITY &&
        o("WAWebChatGroupUtils").isSuspendedGroupFor(e) &&
        o("WAWebChatGroupUtils").isTerminatedGroupFor(e)
      );
    }
    function m(e) {
      return p(e == null ? void 0 : e.groupMetadata);
    }
    function p(e) {
      return (e == null ? void 0 : e.participants.iAmSuperAdmin()) === !0;
    }
    function _(e) {
      return e ? f(g(e)) : !1;
    }
    function f(e) {
      return e.groupMetadata != null && !d(e) && !u(e);
    }
    function g(e) {
      return { chatId: e.id, groupMetadata: e.groupMetadata };
    }
    function h(e) {
      return r("WAWebGroupMetadataCollection")
        .filter(function (t) {
          return t.parentGroup === e && t.defaultSubgroup === !0;
        })
        .map(function (e) {
          return e.id;
        });
    }
    function y(e, t) {
      return e.map(function (e) {
        var n,
          a,
          i = t
            ? (n = o("WAWebChatCollection").ChatCollection.get(e)) == null
              ? void 0
              : n.formattedTitle
            : (a = r("WAWebUnjoinedSubgroupMetadataCollection").get(e)) == null
              ? void 0
              : a.subject;
        return { id: e, subject: i != null ? i : "" };
      });
    }
    function C(e) {
      if (!e || !e.contact.name) return !1;
      var t = o("WAWebChatCollection").ChatCollection.findFirst(function (t) {
        var n, r;
        return (
          ((n = t.groupMetadata) == null ? void 0 : n.parentGroup) === e.id &&
          ((r = t.groupMetadata) == null ? void 0 : r.defaultSubgroup)
        );
      });
      return !t || !t.contact.name ? !1 : t.contact.name !== e.contact.name;
    }
    function b(e) {
      if (!e) return !1;
      var t = r("WAWebGroupMetadataCollection").get(e);
      if (!t) return !1;
      var n = t.participants.iAmAdmin();
      return t.allowNonAdminSubGroupCreation !== !0 && !n;
    }
    function v(e, t, n) {
      return t == null
        ? !0
        : e == null
          ? !1
          : S({ chatId: e.id, groupMetadata: e.groupMetadata }, t, n);
    }
    function S(e, t, n) {
      var r = e.chatId,
        a = e.groupMetadata;
      if (t == null) return !0;
      var i;
      if (n == null) {
        var l,
          s,
          u = (l = o("WAWebLidMigrationUtils").toPn(t.id)) != null ? l : t.id,
          c =
            a == null ||
            (s = a.getParentGroupChat()) == null ||
            (s = s.groupMetadata) == null
              ? void 0
              : s.participants;
        i =
          !!(c != null && c.iAmAdmin()) ||
          (u.isUser() && !!(c != null && c.userIsAdmin(u)));
      } else i = n.iAmCommunityAdmin || n.isSenderAdmin;
      var d =
        (r == null ? void 0 : r.isGroup()) === !0 &&
        o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(a) ===
          o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP;
      return (
        d &&
        !o("WAWebUserPrefsMeUser").isMeAccount(t.id) &&
        !o("WAWebFrontendContactGetters").getIsMyContact(t) &&
        !i
      );
    }
    function R(e) {
      var t = e.length !== 0 ? e[0].toString() : null;
      return !r("isStringNullOrEmpty")(t) && o("WAWebWidFactory").isWidlike(t)
        ? o("WAWebWidFactory").createWidFromWidLike(t)
        : null;
    }
    ((l.SUBGROUP_V2_CHAT_CELL_HEIGHT = e),
      (l.isSuspendedCommunity = s),
      (l.isSuspendedCommunityFor = u),
      (l.isIntegrityDeactivatedCommunity = c),
      (l.isIntegrityDeactivatedCommunityFor = d),
      (l.isCommunitySuperAdmin = m),
      (l.isCommunitySuperAdminFor = p),
      (l.canAddGroupToCommunity = _),
      (l.canAddGroupToCommunityFor = f),
      (l.getCagIdFromCommunity = h),
      (l.formatSubgroupUpdateTypes = y),
      (l.cagAndCommunitySubjectDiffer = C),
      (l.isSubgroupSuggestionCreation = b),
      (l.shouldMaskPhoneNumberForChat = v),
      (l.shouldMaskPhoneNumberFor = S),
      (l.getNewCommunityOwnerFromTemplateParams = R));
  },
  98,
);
