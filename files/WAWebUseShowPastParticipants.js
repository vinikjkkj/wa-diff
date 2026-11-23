__d(
  "WAWebUseShowPastParticipants",
  [
    "WAWebFrontendChatGetters",
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues",
    "useWAWebIAmGroupAdmin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("useWAWebChatValues").useChatValues(e, [
          o("WAWebFrontendChatGetters").getGroupMetadata,
        ]),
        a = n[0],
        i = a == null ? void 0 : a.pastParticipants,
        l =
          (t = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(
            a == null ? void 0 : a.id,
            [o("WAWebGroupMetadataGetters").getGroupType],
          )) != null
            ? t
            : [],
        s = l[0],
        u = r("useWAWebEventTargetValue")(
          i,
          ["bulk_add", "bulk_remove", "reset"],
          function () {
            return !!(i != null && i.getValidRecords().length);
          },
        ),
        c = r("useWAWebIAmGroupAdmin")(a);
      return !u ||
        o(
          "WAWebGroupMemberUpdatesGatingUtils",
        ).groupMemberUpdatesHideInThreadEnabled()
        ? !1
        : s === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? c
          : !0;
    }
    l.useShowPastParticipants = e;
  },
  98,
);
