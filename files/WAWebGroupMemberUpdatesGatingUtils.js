__d(
  "WAWebGroupMemberUpdatesGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "group_member_updates_hide_in_thread_enabled",
      );
    }
    function s() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "group_member_updates_usernames_enabled",
      );
    }
    function u() {
      return !!o("WAWebABProps").getABPropConfigValue(
        "group_member_updates_username_description_enabled",
      );
    }
    ((l.groupMemberUpdatesHideInThreadEnabled = e),
      (l.groupMemberUpdatesUsernamesEnabled = s),
      (l.groupMemberUpdatesUsernameDescriptionEnabled = u));
  },
  98,
);
