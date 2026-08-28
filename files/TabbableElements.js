__d(
  "TabbableElements",
  ["Style"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.tabIndex < 0) return !1;
      if (
        e.tabIndex > 0 ||
        (e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
      )
        return !0;
      var t = e;
      switch (e.tagName) {
        case "A":
          var n = t;
          return !!n.href && n.rel != "ignore";
        case "INPUT":
          var r = t;
          return r.type != "hidden" && r.type != "file" && !r.disabled;
        case "BUTTON":
        case "SELECT":
        case "TEXTAREA":
          var o = t;
          return !o.disabled;
      }
      return !1;
    }
    function s(e) {
      for (
        var t = e;
        t &&
        t !== document &&
        r("Style").get(t, "visibility") != "hidden" &&
        r("Style").get(t, "display") != "none";
      )
        t = t.parentNode;
      return t === document;
    }
    function u(e) {
      return Array.from(e.getElementsByTagName("*")).filter(m);
    }
    function c(e) {
      return Array.from(e.getElementsByTagName("*")).find(m);
    }
    function d(e) {
      for (
        var t = Array.from(e.getElementsByTagName("*")), n = t.length - 1;
        n >= 0;
        n--
      )
        if (m(t[n])) return t[n];
      return null;
    }
    function m(t) {
      return e(t) && s(t);
    }
    function p(e) {
      return s(e);
    }
    ((l.find = u),
      (l.findFirst = c),
      (l.findLast = d),
      (l.isTabbable = m),
      (l.isVisible = p));
  },
  98,
);
