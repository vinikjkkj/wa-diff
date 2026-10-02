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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var s = yield d(n, l, a);
          for (var u of s) i.add(u);
          if (a.aborted) return i;
          var c = l.filter(function (e) {
            return !s.has(e);
          });
          for (var m of c) {
            if (a.aborted) return i;
            if (!(i.has(m) || n.msgs.msgLoadState.isLoadingEarlierMsgs)) {
              i.add(m);
              try {
                yield o(
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
        })),
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
