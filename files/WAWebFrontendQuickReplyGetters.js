__d(
  "WAWebFrontendQuickReplyGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebQuickReplyGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        root: o("WAWebQuickReplyGetters").getQuickReplyUnsafe,
        createCache: o("WAWebGettersCaches").createFrontendQuickReplyCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("pendingCount"),
      p = u(
        function (e) {
          var t = e[0],
            n = e[1];
          return t + n;
        },
        [o("WAWebQuickReplyGetters").getCount, m],
      );
    ((l.clearFrontendQuickReplyGetterCacheFor = d), (l.getTotalCount = p));
  },
  98,
);
