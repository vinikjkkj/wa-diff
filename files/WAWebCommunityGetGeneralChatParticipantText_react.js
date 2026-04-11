__d(
  "WAWebCommunityGetGeneralChatParticipantText.react",
  ["fbt", "WAWebCommunityGatingUtils"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return o("WAWebCommunityGatingUtils").communityGeneralChatV2Enabled()
        ? ""
        : e
          ? s._(
              /*BTDS*/ "New community members will no longer be automatically added to this group because it is full.",
            )
          : s._(
              /*BTDS*/ "New community members will be automatically added to this group, until it is full.",
            );
    }
    l.getGeneralChatParticipantListText = e;
  },
  226,
);
