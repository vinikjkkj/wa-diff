__d(
  "WAWebMusicChatsRefreshBatcher",
  ["WAWebMusicChatsConsumptionRefresherLoadable", "WAWebMusicGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = 300,
      s = new Set(),
      u = null;
    function c(t) {
      o("WAWebMusicGatingUtils").isMusicOnChatsReceiverEnabled() &&
        (s.add(t.toString()), u == null && (u = self.setTimeout(d, e)));
    }
    function d() {
      var e = Array.from(s);
      (s.clear(),
        (u = null),
        o(
          "WAWebMusicChatsConsumptionRefresherLoadable",
        ).refreshMusicChatsConsumptionLoadable(e));
    }
    l.requestMusicChatsRefresh = c;
  },
  98,
);
