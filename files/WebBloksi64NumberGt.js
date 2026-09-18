__d(
  "WebBloksi64NumberGt",
  ["WebBloksErrors", "WebBloksInt64"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      try {
        var a = r("WebBloksInt64").fromString(String(t)),
          i = r("WebBloksInt64").fromString(String(n));
        return a.greaterThan(i);
      } catch (t) {
        var l;
        throw new (o("WebBloksErrors").WebBloksScriptError)(
          String((l = t == null ? void 0 : t.message) != null ? l : t),
          e,
        );
      }
    }
    l.default = e;
  },
  98,
);
