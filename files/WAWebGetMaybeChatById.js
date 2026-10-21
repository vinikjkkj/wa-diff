__d(
  "WAWebGetMaybeChatById",
  ["WAWebChatCollection", "WAWebNewsletterCollection"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (t = o("WAWebChatCollection").ChatCollection.get(e)) != null
        ? t
        : r("WAWebNewsletterCollection").get(e);
    }
    l.getMaybeChatById = e;
  },
  98,
);
