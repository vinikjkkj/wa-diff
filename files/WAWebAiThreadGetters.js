__d(
  "WAWebAiThreadGetters",
  [
    "fbt",
    "WAWebAiThreadCreationUtils",
    "WAWebBotGating",
    "WAWebGetters",
    "WAWebGettersCaches",
    "isStringNotNullAndNotWhitespaceOnly",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createAiThreadCache,
      }),
      u = e.clearCacheFor,
      c = e.computed,
      d = e.field,
      m = u,
      p = d("id"),
      _ = d("title"),
      f = d("botModeSelection"),
      g = d("botModeOverride"),
      h = c(
        function (e) {
          var t = e[0],
            n = e[1];
          if (
            t.equals(
              o("WAWebAiThreadCreationUtils").getHistoricalMetaAiThreadId(),
            )
          ) {
            if (o("WAWebBotGating").isDefaultThreadRoutingEnabled())
              return s._(/*BTDS*/ "Meta AI");
            if (!r("isStringNotNullAndNotWhitespaceOnly")(n))
              return s._(/*BTDS*/ "Older chats");
          }
          return r("isStringNotNullAndNotWhitespaceOnly")(n)
            ? n
            : s._(/*BTDS*/ "Untitled chat");
        },
        [p, _],
      );
    ((l.clearAiThreadGetterCacheFor = m),
      (l.getBotModeSelection = f),
      (l.getBotModeOverride = g),
      (l.getDisplayTitle = h));
  },
  226,
);
