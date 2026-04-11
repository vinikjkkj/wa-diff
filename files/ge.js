__d(
  "ge",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n) {
      return typeof e != "string"
        ? e
        : t
          ? l(e, t, n)
          : document.getElementById(e);
    }
    function l(e, t, n) {
      var r, o, a;
      if (s(t) == e) return t;
      if (t.getElementsByTagName) {
        for (o = t.getElementsByTagName(n || "*"), a = 0; a < o.length; a++)
          if (s(o[a]) == e) return o[a];
      } else
        for (o = t.childNodes, a = 0; a < o.length; a++)
          if (((r = l(e, o[a])), r)) return r;
      return null;
    }
    function s(e) {
      return e.getAttribute ? e.getAttribute("id") : null;
    }
    i.default = e;
  },
  66,
);
