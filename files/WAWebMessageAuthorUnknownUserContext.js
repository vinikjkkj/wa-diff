__d(
  "WAWebMessageAuthorUnknownUserContext",
  ["WAWebDisplayType", "WAWebGroupMetadataCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType,
        n = e.isAnnouncementGroup,
        r = e.isCagInactive,
        a = r === void 0 ? !1 : r,
        i = e.isCommunityGroup,
        l = e.isCommunityLoaded,
        s = e.isCommunityMetadataLoaded,
        u = e.isPhoneNumberForceMasked,
        d = e.nameRendered;
      return t === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG
        ? "group_message_quoted"
        : u === !0 && !l && !s
          ? c(a)
          : u === !0
            ? d
              ? "group_message_cag_masked"
              : "group_message_cag_masked_bare"
            : n
              ? "group_message_cag"
              : i
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
      return (e == null ? void 0 : e.defaultSubgroup) !== !0
        ? !1
        : e.terminated === !0
          ? !0
          : e.stale === !1 &&
            e.participantQueryPromise == null &&
            !e.participants.iAmMember();
    }
    function c(e) {
      return e
        ? "group_message_cag_masked_noparent_inactive"
        : "group_message_cag_masked_noparent";
    }
    ((l.getMessageAuthorUnknownUserContext = e),
      (l.isParentGroupMetadataLoaded = s),
      (l.isInactiveCag = u));
  },
  98,
);
