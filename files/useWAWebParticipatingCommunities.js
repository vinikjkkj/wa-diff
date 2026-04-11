__d(
  "useWAWebParticipatingCommunities",
  [
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebGroupMetadataCollection",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = ["add", "remove", "change"]), (e[0] = t))
          : (t = e[0]),
        r("useWAWebEventTargetValue")(r("WAWebGroupMetadataCollection"), t, s)
      );
    }
    function s() {
      return r("WAWebGroupMetadataCollection").filter(u);
    }
    function u(e) {
      return (
        e.isParentGroup === !0 &&
        (e.hasJoined() ||
          o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(
            o("WAWebChatCollection").ChatCollection.get(e.id),
          ) === !0)
      );
    }
    l.default = e;
  },
  98,
);
