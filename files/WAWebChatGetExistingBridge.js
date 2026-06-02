__d(
  "WAWebChatGetExistingBridge",
  ["WAWebChatCollection", "WAWebChatFindBridge", "WAWebNewsletterCollection"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o("WAWebChatCollection").ChatCollection.get(e);
      if (t && !t.stale) return t;
      var n = e.isNewsletter();
      if (n) {
        var a = r("WAWebNewsletterCollection").get(e);
        if (a != null && !a.stale) return r("WAWebNewsletterCollection").get(e);
      }
      var i = await o("WAWebChatFindBridge").findLocal(e.toString());
      return i
        ? n
          ? r("WAWebNewsletterCollection").gadd(i)
          : o("WAWebChatCollection").ChatCollection.gadd(i)
        : null;
    }
    l.getExisting = e;
  },
  98,
);
