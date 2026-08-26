__d(
  "WAWebStreamGetters",
  ["WALogger", "WAWebGetters", "WAWebGettersCaches", "WAWebStreamTypes"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createStreamCache,
      }),
      u = s.clearCacheFor,
      c = s.computed,
      d = s.field,
      m = u,
      p = d("info"),
      _ = d("obscurity"),
      f = d("hasSynced"),
      g = c(
        function (t) {
          var n = t[0],
            r = t[1],
            a = t[2];
          switch (r) {
            case o("WAWebStreamTypes").Obscurity.SHOW:
              return n;
            case o("WAWebStreamTypes").Obscurity.HIDE:
              return a === !0
                ? o("WAWebStreamTypes").StreamInfo.NORMAL
                : o("WAWebStreamTypes").StreamInfo.CONNECTING;
            case o("WAWebStreamTypes").Obscurity.OBSCURE:
              switch (n) {
                case o("WAWebStreamTypes").StreamInfo.OPENING:
                case o("WAWebStreamTypes").StreamInfo.PAIRING:
                case o("WAWebStreamTypes").StreamInfo.SYNCING:
                case o("WAWebStreamTypes").StreamInfo.RESUMING:
                  return o("WAWebStreamTypes").StreamInfo.CONNECTING;
                default:
                  return n;
              }
          }
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Stream:unknown obscure level:",
                ])),
            ),
            n
          );
        },
        [p, _, f],
      );
    ((l.clearStreamGetterCacheFor = m),
      (l.getInfo = p),
      (l.getObscurity = _),
      (l.getHasSynced = f),
      (l.getDisplayInfo = g));
  },
  98,
);
