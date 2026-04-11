__d(
  "WAWebUseShowPastParticipants",
  [
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupType",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(6),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = ["participants", "pastParticipants", "groupType"]), (t[0] = n))
        : (n = t[0]);
      var a = o("useWAWebModelValues").useOptionalModelValues(
          e.groupMetadata,
          n,
        ),
        i = a == null ? void 0 : a.pastParticipants,
        l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["bulk_add", "bulk_remove", "reset"]), (t[1] = l))
        : (l = t[1]);
      var s;
      t[2] !== i
        ? ((s = function () {
            return !!(i != null && i.getValidRecords().length);
          }),
          (t[2] = i),
          (t[3] = s))
        : (s = t[3]);
      var u = r("useWAWebEventTargetValue")(i, l, s);
      if (
        !u ||
        o(
          "WAWebGroupMemberUpdatesGatingUtils",
        ).groupMemberUpdatesHideInThreadEnabled()
      )
        return !1;
      if (
        (a == null ? void 0 : a.groupType) ===
        o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
      ) {
        var c;
        return (
          t[4] !== (a == null ? void 0 : a.participants)
            ? ((c = a == null ? void 0 : a.participants.iAmAdmin()),
              (t[4] = a == null ? void 0 : a.participants),
              (t[5] = c))
            : (c = t[5]),
          !!c
        );
      }
      return !0;
    }
    l.useShowPastParticipants = e;
  },
  98,
);
