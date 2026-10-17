__d(
  "HeroHoldLoggingBoundaryRegistry",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 100,
      l = new Map();
    function s(e) {
      l.has(e) || l.set(e, { holdIDs: [], name: null });
    }
    function u(e, t) {
      var n = l.get(e);
      n != null && (n.name = t);
    }
    function c(t, n) {
      var r,
        o = (r = l.get(t)) == null ? void 0 : r.holdIDs;
      o != null && (o.push(n), o.length > e && o.shift());
    }
    function d(e) {
      var t;
      return (t = l.get(e)) == null ? void 0 : t.name;
    }
    function m(e) {
      var t, n;
      return (t = (n = l.get(e)) == null ? void 0 : n.holdIDs) != null ? t : [];
    }
    function p(e) {
      l.delete(e);
    }
    ((i.addBoundary = s),
      (i.updateBoundaryName = u),
      (i.addHoldID = c),
      (i.getBoundaryName = d),
      (i.getHoldIDs = m),
      (i.removeBoundary = p));
  },
  66,
);
