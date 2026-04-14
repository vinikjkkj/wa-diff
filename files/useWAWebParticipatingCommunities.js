__d(
  "useWAWebParticipatingCommunities",
  [
    "WAWebChatCollection",
    "WAWebChatCommunityUtils",
    "WAWebGroupMetadataCollection",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("useWAWebEventTargetValue")(
        r("WAWebGroupMetadataCollection"),
        ["add", "remove", "change"],
        function () {
          return r("WAWebGroupMetadataCollection").filter(function (e) {
            return (
              e.isParentGroup === !0 &&
              (e.hasJoined() ||
                o("WAWebChatCommunityUtils").isIntegrityDeactivatedCommunity(
                  o("WAWebChatCollection").ChatCollection.get(e.id),
                ) === !0)
            );
          });
        },
      );
    }
    l.default = e;
  },
  98,
);
