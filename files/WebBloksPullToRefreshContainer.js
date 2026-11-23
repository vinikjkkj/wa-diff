__d(
  "WebBloksPullToRefreshContainer",
  ["WebBloksComponentContext", "WebBloksModel"],
  function (t, n, r, o, a, i, l) {
    var e = o("WebBloksModel").defineWebBloksAttributeKey("#");
    function s(t) {
      var n = t.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode;
      return a(n.getSubNode(e));
    }
    l.default = s;
  },
  98,
);
