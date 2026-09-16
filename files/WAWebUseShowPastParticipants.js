__d(
  "WAWebUseShowPastParticipants",
  [
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues",
    "useWAWebIAmGroupAdmin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a,
        i = o("react-compiler-runtime").c(3),
        l = (t = e.groupMetadata) == null ? void 0 : t.pastParticipants,
        s =
          (n = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(
            (a = e.groupMetadata) == null ? void 0 : a.id,
            [o("WAWebGroupMetadataGetters").getGroupType],
          )) != null
            ? n
            : [],
        u = s[0],
        c;
      i[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["bulk_add", "bulk_remove", "reset"]), (i[0] = c))
        : (c = i[0]);
      var d;
      i[1] !== l
        ? ((d = function () {
            return !!(l != null && l.getValidRecords().length);
          }),
          (i[1] = l),
          (i[2] = d))
        : (d = i[2]);
      var m = r("useWAWebEventTargetValue")(l, c, d),
        p = r("useWAWebIAmGroupAdmin")(e.groupMetadata);
      return !m ||
        o(
          "WAWebGroupMemberUpdatesGatingUtils",
        ).groupMemberUpdatesHideInThreadEnabled()
        ? !1
        : u === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? p
          : !0;
    }
    l.useShowPastParticipants = e;
  },
  98,
);
