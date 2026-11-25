__d(
  "WAWebMusicChatsRefreshBatcher",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebMusicChatsConsumptionRefresherLoadable",
    "WAWebMusicGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 300,
      u = new Set(),
      c = new Set(),
      d = new Map(),
      m = new Map(),
      p = new Set(),
      _ = null;
    function f(e, t) {
      if (o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled()) {
        var n = e.toString(),
          r = (t == null ? void 0 : t.force) === !0;
        (!r && d.has(n)) ||
          ((r || !m.has(n)) &&
            (m.set(n, o("WATimeUtils").unixTimeMs()),
            p.forEach(function (e) {
              return e();
            })),
          (r ? c : u).add(n),
          _ == null && (_ = self.setTimeout(y, s)));
      }
    }
    function g(e) {
      return m.get(e.toString());
    }
    function h(e) {
      return (
        p.add(e),
        function () {
          p.delete(e);
        }
      );
    }
    function y() {
      var e = Array.from(u).filter(function (e) {
          return !c.has(e);
        }),
        t = Array.from(c);
      (u.clear(),
        c.clear(),
        (_ = null),
        e.length > 0 && C(e),
        t.length > 0 && C(t, { force: !0 }));
    }
    function C(t, n) {
      (t.forEach(function (e) {
        var t;
        return d.set(e, ((t = d.get(e)) != null ? t : 0) + 1);
      }),
        o("WAWebMusicChatsConsumptionRefresherLoadable")
          .refreshMusicChatsConsumptionLoadable(t, n)
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "music chats refresh failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("music-chats-refresh-failed");
          })
          .finally(function () {
            t.forEach(b);
          }));
    }
    function b(e) {
      var t,
        n = ((t = d.get(e)) != null ? t : 0) - 1;
      n > 0 ? d.set(e, n) : d.delete(e);
    }
    ((l.requestMusicChatsRefresh = f),
      (l.getMusicChatsRefreshRequestedAtMs = g),
      (l.subscribeToMusicChatsRefreshRequests = h));
  },
  98,
);
