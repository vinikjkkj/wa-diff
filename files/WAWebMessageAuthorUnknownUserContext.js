__d(
  "WAWebMessageAuthorUnknownUserContext",
  ["WAWebDisplayType", "WAWebGroupMetadataCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType,
        n = e.hasCommunityAdmin,
        r = e.isAnnouncementGroup,
        a = e.isCagInactive,
        i = a === void 0 ? !1 : a,
        l = e.isCommunityGroup,
        s = e.isCommunityLoaded,
        u = e.isCommunityMetadataLoaded,
        c = e.isPhoneNumberForceMasked,
        m = e.nameRendered;
      return t === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG
        ? "group_message_quoted"
        : c === !0 && !s
          ? u
            ? "group_message_cag_masked_nochat"
            : d(i)
          : c === !0 && !n
            ? "group_message_cag_masked_noadmin"
            : c === !0
              ? m
                ? "group_message_cag_masked"
                : "group_message_cag_masked_bare"
              : r
                ? "group_message_cag"
                : l
                  ? "group_message_community_sub"
                  : "group_message_group";
    }
    function s(e) {
      var t,
        n = e == null ? void 0 : e.parentGroup;
      return (
        n != null &&
        ((t = r("WAWebGroupMetadataCollection").get(n)) == null
          ? void 0
          : t.isParentGroup) === !0
      );
    }
    function u(e) {
      var t,
        n =
          e == null ||
          (t = e.getParentGroupChat()) == null ||
          (t = t.groupMetadata) == null
            ? void 0
            : t.participants.getAdmins();
      return n != null && n.length > 0;
    }
    function c(e) {
      return (e == null ? void 0 : e.defaultSubgroup) !== !0
        ? !1
        : e.terminated === !0
          ? !0
          : e.stale === !1 &&
            e.participantQueryPromise == null &&
            !e.participants.iAmMember();
    }
    function d(e) {
      return e
        ? "group_message_cag_masked_noparent_inactive"
        : "group_message_cag_masked_noparent";
    }
    ((l.getMessageAuthorUnknownUserContext = e),
      (l.isParentGroupMetadataLoaded = s),
      (l.hasParentGroupAdmin = u),
      (l.isInactiveCag = c));
  },
  98,
);
