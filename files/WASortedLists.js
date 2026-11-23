__d(
  "WASortedLists",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return [];
    }
    function l(e, t) {
      for (var n = e.length === t.length, r = 0; n && r < e.length; r++)
        e[r] !== t[r] && (n = !1);
      return n;
    }
    function s(e, t) {
      for (var n = 0; n < e.length; n++) if (e[n] === t) return e;
      return e.concat([t]).sort();
    }
    function u(e) {
      return c(e.slice().sort());
    }
    function c(e) {
      for (var t = !1, n = 0; n < e.length - 1; n++)
        e[n] === e[n + 1] && (t = !0);
      if (!t) return e;
      for (var r = [], o = 0; o < e.length - 1; o++)
        e[o] !== e[o + 1] && r.push(e[o]);
      return (r.push(e[e.length - 1]), r);
    }
    function d(e) {
      return Array.from(e).sort();
    }
    function m(e, t, n) {
      for (var r = null, o = 0; !r && o < e.length; o++)
        e[o] === t && ((r = e.slice()), (r[o] = n), (r = c(r.sort())));
      return r || e;
    }
    function p(e) {
      return [e];
    }
    ((i.emptySet = e),
      (i.areEqual = l),
      (i.addToSet = s),
      (i.sortAndDedupe = u),
      (i.asSortedSet = d),
      (i.swapIn = m),
      (i.singleElement = p));
  },
  66,
);
