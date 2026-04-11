__d(
  "WebBloksNode",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.memo,
      c = s.useDebugValue;
    function d(e, t) {
      var n = function (n) {
        return t(n);
      };
      return ((n.displayName = e), u(n));
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      (t[0] !== e
        ? ((n = function () {
            return e.toJSON();
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]),
        c(e, n));
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      if (t[0] !== e.sourceMapNode) {
        var r;
        ((n =
          (r = e.sourceMapNode) == null || (r = r.getBloksStackFrame()) == null
            ? void 0
            : r.offset),
          (t[0] = e.sourceMapNode),
          (t[1] = n));
      } else n = t[1];
      c(n, _);
    }
    function _(e) {
      return (
        "To view the server side location of this component, pase the below `component_uri` into the top line of this Bento notebook: https://fburl.com/anp/vcve8kbn.\n\n" +
        e
      );
    }
    l.createBridgedComponent = d;
  },
  98,
);
