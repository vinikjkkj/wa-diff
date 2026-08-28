__d(
  "WebBloksZoomable",
  ["WebBloksComponentContext", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = "#";
    function s(t) {
      var n = o("react-compiler-runtime").c(3),
        r = t.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.renderNode,
        l;
      return (
        n[0] !== r || n[1] !== i
          ? ((l = i(r.getSubNode(e))), (n[0] = r), (n[1] = i), (n[2] = l))
          : (l = n[2]),
        l
      );
    }
    l.default = s;
  },
  98,
);
