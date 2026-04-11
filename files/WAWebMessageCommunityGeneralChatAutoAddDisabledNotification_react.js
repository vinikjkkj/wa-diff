__d(
  "WAWebMessageCommunityGeneralChatAutoAddDisabledNotification.react",
  ["fbt", "WAWebCommunityGatingUtils", "WAWebGroupType"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n,
        r,
        a =
          (n = o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.cast(
            (r = t[0]) == null ? void 0 : r.toString(),
          )) != null
            ? n
            : o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Full;
      return a ===
        o("WAWebGroupType").GeneralChatAutoAddDisabledReasonEnum.Server
        ? s._(
            /*BTDS*/ "New community members will no longer be automatically added.",
          )
        : o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
          ? s._(/*BTDS*/ '"{subgroup_name}" is now full.', [
              s._param("subgroup_name", e),
            ])
          : s._(
              /*BTDS*/ '"{subgroup_name}" is now full. New community members will no longer be automatically added to it.',
              [s._param("subgroup_name", e)],
            );
    }
    l.communityGeneralChatAutoAddDisabledNotification = e;
  },
  226,
);
