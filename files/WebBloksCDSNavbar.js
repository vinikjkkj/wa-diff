__d(
  "WebBloksCDSNavbar",
  ["WebBloksComponentContext", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = "#";
    function s(t) {
      var n = o("react-compiler-runtime").c(3),
        r = t.node,
        a = o("WebBloksComponentContext").useWebBloksContext(),
        i = a.renderNode,
        l;
      if (n[0] !== r || n[1] !== i) {
        var s = r.get(e);
        ((l = i(s)), (n[0] = r), (n[1] = i), (n[2] = l));
      } else l = n[2];
      return l;
    }
    l.default = s;
  },
  98,
);
