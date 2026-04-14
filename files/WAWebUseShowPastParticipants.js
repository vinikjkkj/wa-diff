__d(
  "WAWebUseShowPastParticipants",
  [
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupType",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("useWAWebModelValues").useOptionalModelValues(e.groupMetadata, [
          "participants",
          "pastParticipants",
          "groupType",
        ]),
        n = t == null ? void 0 : t.pastParticipants,
        a = r("useWAWebEventTargetValue")(
          n,
          ["bulk_add", "bulk_remove", "reset"],
          function () {
            return !!(n != null && n.getValidRecords().length);
          },
        );
      return !a ||
        o(
          "WAWebGroupMemberUpdatesGatingUtils",
        ).groupMemberUpdatesHideInThreadEnabled()
        ? !1
        : (t == null ? void 0 : t.groupType) ===
            o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? !!(t != null && t.participants.iAmAdmin())
          : !0;
    }
    l.useShowPastParticipants = e;
  },
  98,
);
