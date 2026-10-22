__d(
  "WAWebMessageAuthorUnknownUserContext",
  ["WAWebDisplayType", "WAWebGroupMetadataCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType,
        n = e.hasCommunityAdmin,
        r = e.isAnnouncementGroup,
        a = e.isCommunityGroup,
        i = e.isCommunityLoaded,
        l = e.isCommunityMetadataLoaded,
        s = e.isPhoneNumberForceMasked,
        u = e.nameRendered;
      return t === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG
        ? "group_message_quoted"
        : s === !0 && !i
          ? l
            ? "group_message_cag_masked_nochat"
            : "group_message_cag_masked_noparent"
          : s === !0 && !n
            ? "group_message_cag_masked_noadmin"
            : s === !0
              ? u
                ? "group_message_cag_masked"
                : "group_message_cag_masked_bare"
              : r
                ? "group_message_cag"
                : a
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
    ((l.getMessageAuthorUnknownUserContext = e),
      (l.isParentGroupMetadataLoaded = s),
      (l.hasParentGroupAdmin = u));
  },
  98,
);
