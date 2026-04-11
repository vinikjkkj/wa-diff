__d(
  "HeroPendingPlaceholderTracker",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map();
    function l(t) {
      e.has(t) || e.set(t, new Map());
    }
    function s(t, n, r, o, a) {
      var i = e.get(t);
      i && i.set(n, { description: r, startTime: o, pageletStack: a });
    }
    function u(t) {
      var n = e.get(t);
      return n ? Array.from(n.values()) : [];
    }
    function c(t) {
      e.delete(t);
    }
    function d(t, n) {
      var r = e.get(t);
      r && r.delete(n);
    }
    function m(t) {
      return e.has(t);
    }
    ((i.addInteraction = l),
      (i.addPlaceholder = s),
      (i.dump = u),
      (i.removeInteraction = c),
      (i.removePlaceholder = d),
      (i.isInteractionActive = m));
  },
  66,
);
