__d(
  "ContextualThing",
  ["CSS", "containsNode", "ge", "getOrCreateDOMID"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      e.setAttribute("data-ownerid", r("getOrCreateDOMID")(t));
    }
    function s(e, t) {
      for (var n = t; n; ) {
        if (r("containsNode")(e, n)) return !0;
        n = u(n);
      }
      return !1;
    }
    function u(e) {
      for (var t = e; t; ) {
        var n = null;
        if (
          (t instanceof Element && (n = t.getAttribute("data-ownerid")),
          n != null && n !== "")
        )
          return r("ge")(n);
        t = t.parentNode;
      }
      return null;
    }
    function c(e, t) {
      for (var n = e; n && !o("CSS").hasClass(n, t); ) {
        var a = null;
        (n instanceof Element && (a = n.getAttribute("data-ownerid")),
          a != null && a !== "" ? (n = r("ge")(a)) : (n = n.parentNode));
      }
      return n;
    }
    ((l.register = e),
      (l.containsIncludingLayers = s),
      (l.getContext = u),
      (l.parentByClass = c));
  },
  98,
);
