__d(
  "WAWebContactsAndGroupsGroupSetup",
  [
    "WAWebContactsAndGroupsGroupsTableRows",
    "WAWebContactsAndGroupsMyGroups",
    "WAWebContactsAndGroupsSuggestionDismissals",
    "WAWebContactsAndGroupsThisWeek",
    "WAWebFrontendChatGetters",
    "WAWebProfilePicThumbGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 3,
      s = 2;
    function u(e, t) {
      var n;
      return o("WAWebContactsAndGroupsThisWeek").happenedThisWeek(
        (n = e.groupMetadata) == null ? void 0 : n.creation,
        t,
      );
    }
    function c(e, t) {
      return d(e, t) && m(e);
    }
    function d(e, t) {
      return (
        e.groupMetadata != null &&
        !o("WAWebFrontendChatGetters").getIsCommunity(e) &&
        o("WAWebContactsAndGroupsGroupsTableRows").isGroupAdmin(e) &&
        u(e, t) &&
        !o(
          "WAWebContactsAndGroupsSuggestionDismissals",
        ).isGroupSuggestionDismissed(e, "setup", t)
      );
    }
    function m(t) {
      var n = t.groupMetadata;
      if (n == null) return !1;
      var r = p({
        description: n.displayedDesc,
        memberCount: o("WAWebContactsAndGroupsMyGroups").getGroupMemberCount(t),
        photoUrl: o("WAWebProfilePicThumbGetters").getImgFull(
          t.contact.getProfilePicThumb(),
        ),
      });
      return r.length < e;
    }
    function p(e) {
      var t = e.description,
        n = e.memberCount,
        r = e.photoUrl,
        o = [];
      return (
        r != null && r !== "" && o.push("photo"),
        t != null && t.trim() !== "" && o.push("description"),
        (n != null ? n : 0) >= s && o.push("invite"),
        o
      );
    }
    ((l.GROUP_SETUP_STEP_COUNT = e),
      (l.isGroupCreatedThisWeek = u),
      (l.needsGroupSetup = c),
      (l.isGroupSetupCandidate = d),
      (l.hasGroupSetupLeft = m),
      (l.getDoneGroupSetupSteps = p));
  },
  98,
);
