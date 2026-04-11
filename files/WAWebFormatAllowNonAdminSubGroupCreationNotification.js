__d(
  "WAWebFormatAllowNonAdminSubGroupCreationNotification",
  ["fbt", "WAWebGroupType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n,
        r =
          t[0] &&
          o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.cast(
            t[0].toString(),
          ) ===
            o("WAWebGroupType").GroupSettingChangeSystemMessageToggleEnabled.On,
        a = !!((n = e.groupMetadata) != null && n.participants.iAmAdmin());
      return r
        ? a
          ? s._(
              /*BTDS*/ "Everyone in this community can now add groups. Click to change.",
            )
          : s._(/*BTDS*/ "Everyone in this community can now add groups.")
        : a
          ? s._(
              /*BTDS*/ "Only community admins can add groups. Members can suggest groups for admin approval. Click to change.",
            )
          : s._(
              /*BTDS*/ "Only community admins can add groups. Members can suggest groups for admin approval.",
            );
    }
    l.default = e;
  },
  226,
);
