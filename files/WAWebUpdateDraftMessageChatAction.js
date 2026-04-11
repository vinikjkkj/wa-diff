__d(
  "WAWebUpdateDraftMessageChatAction",
  [
    "WAWebChatCollection",
    "WAWebNewsletterCollection",
    "WAWebUpdateDraftMessageChatJob",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = r("WAWebWid").isNewsletter(e)
          ? r("WAWebNewsletterCollection").get(e)
          : o("WAWebChatCollection").ChatCollection.get(e),
        a = new AbortController(),
        i = o("WAWebUpdateDraftMessageChatJob").updateDraftMessageChat({
          chatId: e,
          draftMessage: t,
          abortSignal: a.signal,
        });
      if (
        (i.finally(function () {
          if (n) {
            var e;
            (n == null || (e = n.promises.updateDraftMessage) == null
              ? void 0
              : e.promise) === i && (n.promises.updateDraftMessage = null);
          }
        }),
        n)
      ) {
        var l = n.promises;
        (l.updateDraftMessage != null &&
          l.updateDraftMessage.abortController.abort(),
          (n.draftMessage = t),
          (n.promises.updateDraftMessage = { promise: i, abortController: a }));
      }
      return i;
    }
    l.updateDraftMessageChat = e;
  },
  98,
);
