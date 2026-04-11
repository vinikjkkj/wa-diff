__d(
  "isNode",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t,
        n,
        r = e != null ? ((t = e.ownerDocument) != null ? t : e) : document,
        o = (n = r.defaultView) != null ? n : window;
      return (
        e != null &&
        (typeof o.Node == "function"
          ? e instanceof o.Node
          : typeof e == "object" &&
            typeof e.nodeType == "number" &&
            typeof e.nodeName == "string")
      );
    }
    i.default = e;
  },
  66,
);
