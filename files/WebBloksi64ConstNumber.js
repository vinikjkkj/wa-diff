__d(
  "WebBloksi64ConstNumber",
  ["WebBloksErrors", "WebBloksInt64"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      try {
        var n = r("WebBloksInt64").fromString(String(t));
        return n.toString();
      } catch (t) {
        throw new (o("WebBloksErrors").WebBloksScriptError)(t.message, e);
      }
    }
    l.default = e;
  },
  98,
);
