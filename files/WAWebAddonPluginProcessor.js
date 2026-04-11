__d(
  "WAWebAddonPluginProcessor",
  [
    "WANullthrows",
    "WAWebAddonCrossWindowUtils",
    "WAWebMessagePluginProcessAsAddonRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = new Map();
      for (var t of r("WAWebMessagePluginProcessAsAddonRegistry")) {
        var n = t.processor,
          o = t.type;
        n != null && e.set(o, n);
      }
      return e;
    }
    var s = e();
    function u() {
      return s;
    }
    function c(e) {
      var t;
      return (
        typeof e == "string"
          ? (t = e)
          : (t = o("WAWebAddonCrossWindowUtils").getAddonProcessorType(e)),
        r("WANullthrows")(s.get(t))
      );
    }
    function d(e) {
      return !!s.get(e);
    }
    ((l.getAddonProcessorsMap = u),
      (l.getAddonProcessor = c),
      (l.hasAddonProcessor = d));
  },
  98,
);
