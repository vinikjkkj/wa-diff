__d(
  "WAWebUnnamedGroupSearch",
  [
    "WAWebChatGetters",
    "WAWebExactSearchMatchResult",
    "WAWebGroupMetadataGetters",
    "WAWebL10NAccentFold",
    "WAWebParticipantListUtils",
    "WAWebSearchMatchStrategies",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ", ";
    function s(t, n) {
      var r = u(t);
      if (r == null || !n) return null;
      var a = r.join(e),
        i = o("WAWebSearchMatchStrategies").substringMatch(a, n);
      return i == null
        ? null
        : {
            match: a,
            results: i.map(function (e) {
              return new (o(
                "WAWebExactSearchMatchResult",
              ).WAWebExactSearchMatchResult)(e.startIndex, e.length);
            }),
          };
    }
    function u(e) {
      var t = e.groupMetadata;
      if (
        t == null ||
        !o("WAWebChatGetters").getIsGroup(e) ||
        !o("WAWebGroupMetadataGetters").getIsUnnamed(t)
      )
        return null;
      var n = o("WAWebParticipantListUtils")
        .getUnnamedGroupParticipantNames(t, !0)
        .map(function (e) {
          return o("WAWebL10NAccentFold")
            .accentFold(e)
            .replace(/\s+/g, " ")
            .trim();
        })
        .filter(Boolean);
      return n.length === 0 ? null : n;
    }
    l.searchMatchUnnamedGroupExact = s;
  },
  98,
);
