__d(
  "WebBloksNode",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.memo,
      c = s.useDebugValue;
    function d(e, t) {
      function n(e) {
        return t(e);
      }
      return (
        (n.displayName = n.name + " [from " + i.id + "]"),
        (n.displayName = e),
        u(n)
      );
    }
    function m(e) {
      c(e, function () {
        return e.toJSON();
      });
    }
    function p(e) {
      var t;
      c(
        (t = e.sourceMapNode) == null || (t = t.getBloksStackFrame()) == null
          ? void 0
          : t.offset,
        function (e) {
          return (
            "To view the server side location of this component, pase the below `component_uri` into the top line of this Bento notebook: https://fburl.com/anp/vcve8kbn.\n\n" +
            e
          );
        },
      );
    }
    l.createBridgedComponent = d;
  },
  98,
);
