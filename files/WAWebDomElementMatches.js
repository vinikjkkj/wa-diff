__d(
  "WAWebDomElementMatches",
  [],
  function (t, n, r, o, a, i) {
    var e = Element.prototype,
      l = e.matches || e.msMatchesSelector || e.webkitMatchesSelector;
    function s(e, t) {
      return e instanceof HTMLElement ? l.call(e, t) : !1;
    }
    i.default = s;
  },
  66,
);
