__d(
  "CometFeedStoryMenu.entrypoint",
  [
    "CometFeedStoryMenuEntryPointVariables",
    "CometFeedStoryMenuQuery$Parameters",
    "JSResourceForInteraction",
    "WebPixelRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = "homepage_stream";
      return n;
    }
    var s = {
      getPreloadProps: function (a) {
        var t = a.feedLocation,
          i = a.id,
          l = a.renderLocation,
          s = a.serializedFRTPIdentifiers,
          u = a.storyDebugInfo;
        return {
          extraProps: { originalStoryID: i },
          queries: {
            menuQueryReference: {
              parameters: n("CometFeedStoryMenuQuery$Parameters"),
              variables: {
                feed_location: t,
                feed_menu_icon_variant: r(
                  "CometFeedStoryMenuEntryPointVariables",
                ).iconVariant,
                id: i,
                renderLocation: e(l, t),
                scale: o("WebPixelRatio").get(),
                serialized_frtp_identifiers: s,
                story_debug_info: u,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")("CometFeedStoryMenu.react").__setRef(
        "CometFeedStoryMenu.entrypoint",
      ),
    };
    l.default = s;
  },
  98,
);
