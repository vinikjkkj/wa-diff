__d(
  "useWAWebChatValues",
  [
    "WAWebChatCollection",
    "WAWebNewsletterCollection",
    "react-compiler-runtime",
    "useWAWebCollectionValues",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("react-compiler-runtime").c(1),
        a;
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = [
              o("WAWebChatCollection").ChatCollection,
              r("WAWebNewsletterCollection"),
            ]),
            (n[0] = a))
          : (a = n[0]),
        o("useWAWebCollectionValues").useCollectionValues(a, e, t)
      );
    }
    function s(e, t) {
      var n = o("react-compiler-runtime").c(1),
        a;
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = [
              o("WAWebChatCollection").ChatCollection,
              r("WAWebNewsletterCollection"),
            ]),
            (n[0] = a))
          : (a = n[0]),
        o("useWAWebCollectionValues").useOptionalCollectionValues(a, e, t)
      );
    }
    ((l.useChatValues = e), (l.useOptionalChatValues = s));
  },
  98,
);
