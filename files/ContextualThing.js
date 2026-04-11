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
      for (var t = e, n; t; ) {
        if (t.getAttribute && (n = t.getAttribute("data-ownerid")))
          return r("ge")(n);
        t = t.parentNode;
      }
      return null;
    }
    function c(e, t) {
      for (var n = e, a; n && !o("CSS").hasClass(n, t); )
        n.getAttribute && (a = n.getAttribute("data-ownerid"))
          ? (n = r("ge")(a))
          : (n = n.parentNode);
      return n;
    }
    ((l.register = e),
      (l.containsIncludingLayers = s),
      (l.getContext = u),
      (l.parentByClass = c));
  },
  98,
);
