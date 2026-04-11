__d(
  "WAWebLabelGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebListUtils"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createLabelsCache,
      }),
      s = e.computed,
      u = e.field,
      c = u("colorIndex"),
      d = u("color"),
      m = s(
        function (e) {
          var t = e[0],
            n = e[1];
          if (n != null) return o("WAWebListUtils").colorIndexToHex(n);
        },
        [d, c],
      );
    l.getHexColor = m;
  },
  98,
);
