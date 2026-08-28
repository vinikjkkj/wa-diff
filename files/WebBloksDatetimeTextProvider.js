__d(
  "WebBloksDatetimeTextProvider",
  ["WebBloksComponentContext", "WebBloksDateUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "#",
      s = "$",
      u = "&";
    function c(t) {
      var n = t.node,
        r = n.get(s),
        a = n.get(u),
        i = n.get(e),
        l = o("WebBloksComponentContext").useWebBloksContext();
      return o("WebBloksDateUtils").getDateTimeText(
        r,
        l.bloksContext.objectSet.environment.locale,
        a,
        i,
      );
    }
    l.default = c;
  },
  98,
);
