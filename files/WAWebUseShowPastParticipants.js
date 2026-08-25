__d(
  "WAWebUseShowPastParticipants",
  [
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(6),
        i;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["participants", "pastParticipants"]), (a[0] = i))
        : (i = a[0]);
      var l = o("useWAWebModelValues").useOptionalModelValues(
          e.groupMetadata,
          i,
        ),
        s =
          (t = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(
            (n = e.groupMetadata) == null ? void 0 : n.id,
            [o("WAWebGroupMetadataGetters").getGroupType],
          )) != null
            ? t
            : [],
        u = s[0],
        c = l == null ? void 0 : l.pastParticipants,
        d;
      a[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["bulk_add", "bulk_remove", "reset"]), (a[1] = d))
        : (d = a[1]);
      var m;
      a[2] !== c
        ? ((m = function () {
            return !!(c != null && c.getValidRecords().length);
          }),
          (a[2] = c),
          (a[3] = m))
        : (m = a[3]);
      var p = r("useWAWebEventTargetValue")(c, d, m);
      if (
        !p ||
        o(
          "WAWebGroupMemberUpdatesGatingUtils",
        ).groupMemberUpdatesHideInThreadEnabled()
      )
        return !1;
      if (u === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) {
        var _;
        return (
          a[4] !== (l == null ? void 0 : l.participants)
            ? ((_ = l == null ? void 0 : l.participants.iAmAdmin()),
              (a[4] = l == null ? void 0 : l.participants),
              (a[5] = _))
            : (_ = a[5]),
          !!_
        );
      }
      return !0;
    }
    l.useShowPastParticipants = e;
  },
  98,
);
