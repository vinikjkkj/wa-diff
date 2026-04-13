__d(
  "useWAWebSimilarNewslettersConversationBanner",
  [
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumChannelEventSurface",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
    "useWAWebModelValues",
    "useWAWebSimilarNewsletters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(8),
        n = o("useWAWebSimilarNewsletters").useSimilarNewsletters(e),
        a = n.hasEnoughNewsletters,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = ["newsletterMetadata"]), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = ["recentlyFollowedFrom"]), (t[1] = l))
        : (l = t[1]);
      var s = o("useWAWebModelValues").useOptionalModelValues(
          o("useWAWebModelValues").useModelValues(e, i).newsletterMetadata,
          l,
        ),
        u;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = ["recentlyFollowedFrom"]), (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] !== (s == null ? void 0 : s.recentlyFollowedFrom)
        ? ((c = function () {
            return (
              (s == null ? void 0 : s.recentlyFollowedFrom) ===
              o("WAWebWamEnumChannelEventSurface").CHANNEL_EVENT_SURFACE
                .CHANNEL_THREAD
            );
          }),
          (t[3] = s == null ? void 0 : s.recentlyFollowedFrom),
          (t[4] = c))
        : (c = t[4]);
      var d = r("useWAWebEventTargetValue")(s, u, c),
        m;
      return (
        t[5] !== d || t[6] !== a
          ? ((m =
              a &&
              d &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isSimilarNewsletterInThreadEnabled()),
            (t[5] = d),
            (t[6] = a),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    l.useSimilarNewslettersConversationBanner = e;
  },
  98,
);
