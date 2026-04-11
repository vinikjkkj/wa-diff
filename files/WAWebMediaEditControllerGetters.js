__d(
  "WAWebMediaEditControllerGetters",
  ["WAWebGetters", "WAWebGettersCaches"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createMediaEditControllerCache,
      }),
      s = e.computed,
      u = e.field,
      c = u("stage"),
      d = u("cropOverlay"),
      m = u("mediaContainer"),
      p = s(
        function (e) {
          var t = e[0],
            n = e[1],
            r = e[2];
          return !!t && !!n && !!r;
        },
        [c, d, m],
      );
    l.getIsInitialized = p;
  },
  98,
);
