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
        throw new (o("WebBloksErrors").WebBloksScriptError)(t.message, e);
      }
    }
    l.default = e;
  },
  98,
);
