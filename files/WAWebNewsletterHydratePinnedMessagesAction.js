__d(
  "WAWebNewsletterHydratePinnedMessagesAction",
  ["WAWebNewsletterPullMessagesFromServerAction", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            for (var a of t) {
              if (r.aborted) return;
              if (!(n.has(a) || e.msgs.msgLoadState.isLoadingEarlierMsgs)) {
                n.add(a);
                try {
                  yield o(
                    "WAWebNewsletterPullMessagesFromServerAction",
                  ).pullNewsletterMessagesFromServer(e, {
                    messageCount: 1,
                    cursor: { before: a + 1 },
                    signal: r,
                  });
                } catch (e) {
                  r.aborted && n.delete(a);
                }
              }
            }
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.hydrateNewsletterPinnedMessages = e;
  },
  98,
);
