__d(
  "WAWebNewsletterHydratePinnedMessagesAction",
  [
    "Promise",
    "WALogger",
    "WAWebMsgModelFromData",
    "WAWebNewsletterDBUtils",
    "WAWebNewsletterPullMessagesFromServerAction",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = new Set(n);
            if (r.aborted || e.msgs.msgLoadState.isLoadingEarlierMsgs) return a;
            var i = t.filter(function (e) {
              return !a.has(e);
            });
            if (i.length === 0) return a;
            var l = yield d(e, i, r);
            for (var s of l) a.add(s);
            if (r.aborted) return a;
            var u = i.filter(function (e) {
              return !l.has(e);
            });
            for (var c of u) {
              if (r.aborted) return a;
              if (!(a.has(c) || e.msgs.msgLoadState.isLoadingEarlierMsgs)) {
                a.add(c);
                try {
                  yield o(
                    "WAWebNewsletterPullMessagesFromServerAction",
                  ).pullNewsletterMessagesFromServer(e, {
                    messageCount: 1,
                    cursor: { before: c + 1 },
                    signal: r,
                  });
                } catch (e) {
                  r.aborted && a.delete(c);
                }
              }
            }
            return a;
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l;
          try {
            l = yield o("WAWebNewsletterDBUtils").bulkGetMessagesByServerIds(
              Array.from(a),
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
          if (i.aborted || l.size === 0) return new Set();
          var u = [];
          for (var c of l.values())
            u.push(o("WAWebMsgModelFromData").msgModelFromMsgData(c));
          return (
            yield t.addQueue
              .enqueue(
                (s || (s = n("Promise"))).resolve().then(function () {
                  t.msgs.add(u, { at: 0 });
                }),
              )
              .then(r("WAWebNoop"), r("WAWebNoop")),
            new Set(l.keys())
          );
        })),
        m.apply(this, arguments)
      );
    }
    l.hydrateNewsletterPinnedMessages = u;
  },
  98,
);
