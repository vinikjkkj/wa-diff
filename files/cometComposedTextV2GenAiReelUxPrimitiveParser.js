__d(
  "cometComposedTextV2GenAiReelUxPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders").buildReelNode({
            avatarUrl: e.avatar_url,
            creator: e.creator,
            nodeType: "reel",
            reelsUrl: e.reels_url,
            thumbnailUrl: e.thumbnail_url,
          }),
        );
    }
    l.default = e;
  },
  98,
);
