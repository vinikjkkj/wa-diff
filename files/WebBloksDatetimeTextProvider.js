__d(
  "WebBloksDatetimeTextProvider",
  ["WebBloksComponentContext", "WebBloksDateUtils", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#"),
      s = o("WebBloksModel").defineWebBloksAttributeKey("$"),
      u = o("WebBloksModel").defineWebBloksAttributeKey("&");
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
