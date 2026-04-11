__d(
  "WebBloksStringSlice",
  ["WebBloksErrors", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      o("WebBloksUtils").nullthrows(n, "Unexpected null: offset");
      var a = n < 0 ? n + t.length : n;
      if (a < 0)
        throw new (o("WebBloksErrors").WebBloksError)(
          "string.Slice: index start < 0",
        );
      var i;
      if (r == null) i = t.length;
      else {
        if (r < 0)
          throw new (o("WebBloksErrors").WebBloksError)(
            "string.Slice: length < 0",
          );
        i = a + r;
      }
      if (i > t.length)
        throw new (o("WebBloksErrors").WebBloksError)(
          "string.Slice: index end > len(str)",
        );
      return t.slice(a, i);
    }
    l.default = e;
  },
  98,
);
