__d(
  "WAWebMessageAuthorUnknownUserContext",
  ["WAWebDisplayType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType,
        n = e.isAnnouncementGroup,
        r = e.isCommunityGroup,
        a = e.isCommunityLoaded,
        i = e.isPhoneNumberForceMasked,
        l = e.nameRendered;
      return t === o("WAWebDisplayType").DISPLAY_TYPE.QUOTED_MSG
        ? "group_message_quoted"
        : i === !0 && !a
          ? "group_message_cag_masked_noparent"
          : i === !0
            ? l
              ? "group_message_cag_masked"
              : "group_message_cag_masked_bare"
            : n
              ? "group_message_cag"
              : r
                ? "group_message_community_sub"
                : "group_message_group";
    }
    l.getMessageAuthorUnknownUserContext = e;
  },
  98,
);
