__d(
  "WAWebAddonPluginProcessor",
  ["WANullthrows", "WAWebAddonCrossWindowUtils", "cr:37443"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = n("cr:37443")) != null ? e : [];
    function u() {
      var e = new Map();
      for (var t of s) {
        var n = t.processor,
          r = t.type;
        n != null && e.set(r, n);
      }
      return e;
    }
    var c = u();
    function d() {
      return c;
    }
    function m(e) {
      var t;
      return (
        typeof e == "string"
          ? (t = e)
          : (t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e)),
        r("WANullthrows")(c.get(t))
      );
    }
    function p(e) {
      return !!c.get(e);
    }
    ((l.getAddonProcessorsMap = d),
      (l.getAddonProcessor = m),
      (l.hasAddonProcessor = p));
  },
  98,
);
