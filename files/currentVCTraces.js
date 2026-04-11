__d(
  "currentVCTraces",
  [],
  function (t, n, r, o, a, i) {
    var e = "default",
      l = new Map(),
      s = new Map(),
      u = new Map();
    function c() {
      return new Map(u);
    }
    function d(e, t) {
      u.set(e, t);
    }
    function m(e) {
      u.delete(e);
    }
    function p(t) {
      var n;
      return (n = l.get(t != null ? t : e)) != null ? n : null;
    }
    function _(t, n) {
      l.set(n != null ? n : e, t);
    }
    function f(e) {
      l.forEach(e);
    }
    function g(t) {
      var n;
      return (n = s.get(t != null ? t : e)) != null ? n : null;
    }
    function h(t, n) {
      s.set(n != null ? n : e, t);
    }
    ((i.getCurrentVCTraces = c),
      (i.addVCTrace = d),
      (i.removeVCTrace = m),
      (i.getCurrentNavigationVCTrace = p),
      (i.setCurrentNavigationVCTrace = _),
      (i.forEachNavigationVCTrace = f),
      (i.getLastNavigationVCReport = g),
      (i.setLastNavigationVCReport = h));
  },
  66,
);
