__d(
  "WAWebChatCommunityUtils",
  [
    "WAWebChatCollection",
    "WAWebChatGroupUtils",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
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
      var t;
      return e
        ? (e == null || (t = e.groupMetadata) == null
            ? void 0
            : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY &&
            o("WAWebChatGroupUtils").isSuspendedGroup(e)
        : !1;
    }
    function u(e) {
      var t;
      return e
        ? (e == null || (t = e.groupMetadata) == null
            ? void 0
            : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY &&
            o("WAWebChatGroupUtils").isSuspendedGroup(e) &&
            o("WAWebChatGroupUtils").isTerminatedGroup(e)
        : !1;
    }
    function c(e) {
      if (!(e != null && e.groupMetadata)) return !1;
      var t = e.groupMetadata,
        n = t.participants;
      return n.iAmSuperAdmin();
    }
    function d(e) {
      return !(!(e != null && e.groupMetadata) || u(e) || s(e));
    }
    function m(e) {
      return r("WAWebGroupMetadataCollection")
        .filter(function (t) {
          return t.parentGroup === e && t.defaultSubgroup === !0;
        })
        .map(function (e) {
          return e.id;
        });
    }
    function p(e, t) {
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
    function _(e) {
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
    function f(e) {
      if (!e) return !1;
      var t = r("WAWebGroupMetadataCollection").get(e);
      if (!t) return !1;
      var n = t.participants.iAmAdmin();
      return t.allowNonAdminSubGroupCreation !== !0 && !n;
    }
    function g(e, t, n) {
      if (t == null) return !0;
      var r;
      if (n == null) {
        var a,
          i,
          l = (a = o("WAWebLidMigrationUtils").toPn(t.id)) != null ? a : t.id,
          s =
            e == null ||
            (i = e.groupMetadata) == null ||
            (i = i.getParentGroupChat()) == null ||
            (i = i.groupMetadata) == null
              ? void 0
              : i.participants;
        r =
          !!(s != null && s.iAmAdmin()) ||
          (l.isUser() && !!(s != null && s.userIsAdmin(l)));
      } else r = n.iAmCommunityAdmin || n.isSenderAdmin;
      return !e ||
        o("WAWebUserPrefsMeUser").isMeAccount(t.id) ||
        o("WAWebFrontendContactGetters").getIsMyContact(t) ||
        !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e) ||
        r
        ? !1
        : t.id.isLid()
          ? !0
          : o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(e);
    }
    function h(e) {
      var t = e.length !== 0 ? e[0].toString() : null;
      return !r("isStringNullOrEmpty")(t) && o("WAWebWidFactory").isWidlike(t)
        ? o("WAWebWidFactory").createWidFromWidLike(t)
        : null;
    }
    ((l.SUBGROUP_V2_CHAT_CELL_HEIGHT = e),
      (l.isSuspendedCommunity = s),
      (l.isIntegrityDeactivatedCommunity = u),
      (l.isCommunitySuperAdmin = c),
      (l.canAddGroupToCommunity = d),
      (l.getCagIdFromCommunity = m),
      (l.formatSubgroupUpdateTypes = p),
      (l.cagAndCommunitySubjectDiffer = _),
      (l.isSubgroupSuggestionCreation = f),
      (l.shouldMaskPhoneNumberForChat = g),
      (l.getNewCommunityOwnerFromTemplateParams = h));
  },
  98,
);
