__d(
  "Parent",
  ["CSSCore"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      t = t.toUpperCase();
      var n = m(e, function (e) {
        return e.nodeName === t;
      });
      return n instanceof Element ? n : null;
    }
    function s(e, t) {
      var n = m(e, function (e) {
        return e instanceof Element && o("CSSCore").hasClass(e, t);
      });
      return n instanceof Element ? n : null;
    }
    function u(e, t) {
      var n = e;
      if (typeof n.matches == "function") {
        for (; n && n !== document && !n.matches(t); ) n = n.parentNode;
        return n instanceof Element ? n : null;
      } else if (typeof n.msMatchesSelector == "function") {
        for (; n && n !== document && !n.msMatchesSelector(t); )
          n = n.parentNode;
        return n instanceof Element ? n : null;
      } else return c(n, t);
    }
    function c(e, t) {
      for (var n = e, r = n; r.parentNode; ) r = r.parentNode;
      if (!(r instanceof Element) && !(r instanceof Document)) return null;
      for (var o = r.querySelectorAll(t); n; ) {
        if (
          Array.from(o).some(function (e) {
            return e === n;
          })
        )
          return n instanceof Element ? n : null;
        n = n.parentNode;
      }
      return n instanceof Element ? n : null;
    }
    function d(e, t) {
      var n = m(e, function (e) {
        return e instanceof Element && !!e.getAttribute(t);
      });
      return n instanceof Element ? n : null;
    }
    function m(e, t) {
      for (var n = e; n; ) {
        if (t(n)) return n;
        n = n.parentNode;
      }
      return null;
    }
    ((l.byTag = e),
      (l.byClass = s),
      (l.bySelector = u),
      (l.bySelector_SLOW = c),
      (l.byAttribute = d),
      (l.find = m));
  },
  98,
);
