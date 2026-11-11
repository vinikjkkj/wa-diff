__d(
  "WAWebUseShowPastParticipants",
  [
    "WAWebFrontendChatGetters",
    "WAWebGroupMemberUpdatesGatingUtils",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "react-compiler-runtime",
    "useWAWebChatValues",
    "useWAWebEventTargetValue",
    "useWAWebGroupMetadataValues",
    "useWAWebIAmGroupAdmin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o("react-compiler-runtime").c(4),
        a;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebFrontendChatGetters").getGroupMetadata]), (n[0] = a))
        : (a = n[0]);
      var i = o("useWAWebChatValues").useChatValues(e, a),
        l = i[0],
        s = l == null ? void 0 : l.pastParticipants,
        u =
          (t = o("useWAWebGroupMetadataValues").useOptionalGroupMetadataValues(
            l == null ? void 0 : l.id,
            [o("WAWebGroupMetadataGetters").getGroupType],
          )) != null
            ? t
            : [],
        c = u[0],
        d;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["bulk_add", "bulk_remove", "reset"]), (n[1] = d))
        : (d = n[1]);
      var m;
      n[2] !== s
        ? ((m = function () {
            return !!(s != null && s.getValidRecords().length);
          }),
          (n[2] = s),
          (n[3] = m))
        : (m = n[3]);
      var p = r("useWAWebEventTargetValue")(s, d, m),
        _ = r("useWAWebIAmGroupAdmin")(l);
      return !p ||
        o(
          "WAWebGroupMemberUpdatesGatingUtils",
        ).groupMemberUpdatesHideInThreadEnabled()
        ? !1
        : c === o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
          ? _
          : !0;
    }
    l.useShowPastParticipants = e;
  },
  98,
);
