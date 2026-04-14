__d(
  "useWAWebSimilarNewslettersConversationBanner",
  [
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumChannelEventSurface",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebSimilarNewsletters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("useWAWebSimilarNewsletters").useSimilarNewsletters(e),
        n = t.hasEnoughNewsletters,
        a = o("useWAWebModelValues").useOptionalModelValues(
          o("useWAWebModelValues").useModelValues(e, ["newsletterMetadata"])
            .newsletterMetadata,
          ["recentlyFollowedFrom"],
        ),
        i = r("useWAWebEventTargetValue")(
          a,
          ["recentlyFollowedFrom"],
          function () {
            return (
              (a == null ? void 0 : a.recentlyFollowedFrom) ===
              o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
                .CHANNEL_THREAD
            );
          },
        );
      return (
        n &&
        i &&
        o("WAWebNewsletterGatingUtils").isSimilarNewsletterInThreadEnabled()
      );
    }
    l.useSimilarNewslettersConversationBanner = e;
  },
  98,
);
