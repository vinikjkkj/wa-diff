__d(
  "WebBloksDatetimeTextProvider",
  ["WebBloksComponentContext", "WebBloksDateUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.node,
        n = t.get("timestamp"),
        r = t.get("type"),
        a = t.get("format"),
        i = o("WebBloksComponentContext").useWebBloksContext();
      return o("WebBloksDateUtils").getDateTimeText(
        n,
        i.bloksContext.objectSet.environment.locale,
        r,
        a,
      );
    }
    l.default = e;
  },
  98,
);
