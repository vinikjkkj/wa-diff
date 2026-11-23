__d(
  "WAWebNewsletterHydratePinnedMessagesAction",
  [
    "WALogger",
    "WAWebMsgModelFromData",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNoop",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e) {
      var t = e.attempted,
        n = e.chat,
        r = e.serverIds,
        a = e.signal,
        i = new Set(t);
      if (a.aborted || n.msgs.msgLoadState.isLoadingEarlierMsgs) return i;
      var l = r.filter(function (e) {
        return !i.has(e);
      });
      if (l.length === 0) return i;
      var s = await u(n, l, a);
      for (var c of s) i.add(c);
      if (a.aborted) return i;
      var d = l.filter(function (e) {
        return !s.has(e);
      });
      for (var m of d) {
        if (a.aborted) return i;
        if (!(i.has(m) || n.msgs.msgLoadState.isLoadingEarlierMsgs)) {
          i.add(m);
          try {
            await o(
              "WAWebNewsletterPullMessagesFromServerAction",
            ).pullNewsletterMessagesFromServer(n, {
              messageCount: 1,
              cursor: { before: m + 1 },
              signal: a,
            });
          } catch (e) {
            a.aborted && i.delete(m);
          }
        }
      }
      return i;
    }
    async function u(t, n, a) {
      var i;
      try {
        i = await o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
          Array.from(n),
          t.id.toJid(),
        );
      } catch (t) {
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[hydrateNewsletterPinnedMessages] pinned-message DB read failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .tags("NEWSLETTER", "PIN")
            .sendLogs("newsletter-pin-db-read"),
          new Set()
        );
      }
      if (a.aborted || i.size === 0) return new Set();
      var l = [];
      for (var s of i.values())
        l.push(o("WAWebMsgModelFromData").msgModelFromMsgData(s));
      return (
        await t.addQueue
          .enqueue(
            Promise.resolve().then(function () {
              t.msgs.add(l, { at: 0 });
            }),
          )
          .then(r("WAWebNoop"), r("WAWebNoop")),
        new Set(i.keys())
      );
    }
    l.hydrateNewsletterPinnedMessages = s;
  },
  98,
);
