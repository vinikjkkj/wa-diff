__d(
  "WAWebDebugCommandGetters",
  ["WAWebGetters"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories(),
      s = e.computed,
      u = e.field,
      c = u("funcName"),
      d = u("displayName"),
      m = u("keywords"),
      p = u("params"),
      _ = u("doc"),
      f = s(
        function (e) {
          var t = e[0],
            n = e[1];
          return t != null && t !== "" ? t : n;
        },
        [d, c],
      ),
      g = s(
        function (e) {
          var t = e[0];
          return t.toLowerCase();
        },
        [f],
      ),
      h = s(
        function (e) {
          var t = e[0];
          return t.toLowerCase();
        },
        [_],
      ),
      y = s(
        function (e) {
          var t = e[0];
          return t.map(function (e) {
            return e.toLowerCase();
          });
        },
        [m],
      );
    ((l.getDisplayName = d),
      (l.getParams = p),
      (l.getDoc = _),
      (l.getName = f),
      (l.getNameNormalized = g),
      (l.getDocNormalized = h),
      (l.getKeywordsNormalized = y));
  },
  98,
);
