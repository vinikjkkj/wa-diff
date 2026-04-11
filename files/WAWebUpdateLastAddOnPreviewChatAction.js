__d(
  "WAWebUpdateLastAddOnPreviewChatAction",
  [
    "WAWebChatCollection",
    "WAWebMsgKey",
    "WAWebNewsletterCollection",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e.forEach(function (e, t) {
        var n = r("WAWebWid").isNewsletter(t)
          ? r("WAWebNewsletterCollection").get(t)
          : o("WAWebChatCollection").ChatCollection.get(t);
        n != null && n.set({ chatlistPreview: e, lastReactionPreview: void 0 });
      });
    }
    function s(e) {
      var t = new Set(
        e.map(function (e) {
          return r("WAWebMsgKey").fromString(e).remote.toString();
        }),
      );
      t.forEach(function (t) {
        var n,
          a,
          i =
            (n = o("WAWebChatCollection").ChatCollection.get(t)) != null
              ? n
              : r("WAWebNewsletterCollection").get(t);
        if (i != null) {
          var l = (a = i.chatlistPreview) == null ? void 0 : a.parentMsgKey;
          l != null &&
            e.includes(l) &&
            i.unset(["chatlistPreview", "lastReactionPreview"]);
        }
      });
    }
    ((l.updateModelsForLastAddOnPreview = e),
      (l.deleteModelsForLastAddOnPreview = s));
  },
  98,
);
