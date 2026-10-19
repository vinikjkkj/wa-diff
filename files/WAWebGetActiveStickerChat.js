__d(
  "WAWebGetActiveStickerChat",
  ["WAWebChatCollection", "WAWebNewsletterCollection"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e;
      return (e = r("WAWebNewsletterCollection").getActive()) != null
        ? e
        : o("WAWebChatCollection").ChatCollection.getActive();
    }
    l.default = e;
  },
  98,
);
