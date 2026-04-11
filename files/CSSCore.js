__d(
  "CSSCore",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      for (var n = e; n.parentNode; ) n = n.parentNode;
      if (n instanceof Element) {
        var r = n.querySelectorAll(t);
        return Array.prototype.indexOf.call(r, e) !== -1;
      }
      return !1;
    }
    function u(e, t) {
      return (
        !/\s/.test(t) || s(0, 11794, t),
        t &&
          (e.classList
            ? e.classList.add(t)
            : m(e, t) || (e.className = e.className + " " + t)),
        e
      );
    }
    function c(e, t) {
      return (
        !/\s/.test(t) || s(0, 11795, t),
        t &&
          (e.classList
            ? e.classList.remove(t)
            : m(e, t) &&
              (e.className = e.className
                .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
                .replace(/\s+/g, " ")
                .replace(/^\s*|\s*$/g, ""))),
        e
      );
    }
    function d(e, t, n) {
      return (n ? u : c)(e, t);
    }
    function m(e, t) {
      return (
        !/\s/.test(t) || s(0, 442),
        e.classList
          ? !!t && e.classList.contains(t)
          : (" " + e.className + " ").indexOf(" " + t + " ") > -1
      );
    }
    function p(t, n) {
      var r,
        o,
        a,
        i,
        l =
          (r =
            (o =
              (a = (i = t.matches) != null ? i : t.webkitMatchesSelector) !=
              null
                ? a
                : t.mozMatchesSelector) != null
              ? o
              : t.msMatchesSelector) != null
            ? r
            : function (n) {
                return e(t, n);
              };
      return l.call(t, n);
    }
    ((l.addClass = u),
      (l.removeClass = c),
      (l.conditionClass = d),
      (l.hasClass = m),
      (l.matchesSelector = p));
  },
  98,
);
