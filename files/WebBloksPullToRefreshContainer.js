__d(
  "WebBloksPullToRefreshContainer",
  ["WebBloksComponentContext", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.node,
        r = o("WebBloksComponentContext").useWebBloksContext(),
        a = r.renderNode,
        i;
      return (
        t[0] !== n || t[1] !== a
          ? ((i = a(n.getSubNode("child"))), (t[0] = n), (t[1] = a), (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = e;
  },
  98,
);
