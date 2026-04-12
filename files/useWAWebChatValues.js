__d(
  "useWAWebChatValues",
  [
    "WAWebChatCollection",
    "WAWebNewsletterCollection",
    "useWAWebCollectionValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("useWAWebCollectionValues").useCollectionValues(
        [
          o("WAWebChatCollection").ChatCollection,
          r("WAWebNewsletterCollection"),
        ],
        e,
        t,
      );
    }
    function s(e, t) {
      return o("useWAWebCollectionValues").useOptionalCollectionValues(
        [
          o("WAWebChatCollection").ChatCollection,
          r("WAWebNewsletterCollection"),
        ],
        e,
        t,
      );
    }
    ((l.useChatValues = e), (l.useOptionalChatValues = s));
  },
  98,
);
