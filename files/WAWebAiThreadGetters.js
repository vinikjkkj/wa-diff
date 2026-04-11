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
        createCache: o("WAWebGettersCaches").createCatalogCache,
      }),
      u = e.computed,
      c = e.field,
      d = c("id"),
      m = c("title"),
      p = u(
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
        [d, m],
      );
    l.getDisplayTitle = p;
  },
  226,
);
