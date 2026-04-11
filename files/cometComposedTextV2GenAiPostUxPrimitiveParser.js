__d(
  "cometComposedTextV2GenAiPostUxPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.is_verified != null ? !!e.is_verified : null;
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders").buildPostNode({
            commentsCount: e.comments_count,
            footerIcon: e.footer_icon,
            footerLabel: e.footer_label,
            isCarousel: !!e.is_carousel,
            isVerified: t,
            likesCount: e.likes_count,
            nodeType: "post",
            orientation: e.orientation,
            postCaption: e.post_caption,
            postDeeplink: e.post_deeplink,
            postType: e.post_type,
            postUrl: e.post_url,
            profilePictureUrl: e.profile_picture_url,
            sharesCount: e.shares_count,
            sourceApp: e.source_app,
            subtitle: e.subtitle,
            thumbnailUrl: e.thumbnail_url,
            title: e.title,
            username: e.username,
          }),
        );
    }
    l.default = e;
  },
  98,
);
