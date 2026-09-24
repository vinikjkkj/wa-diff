__d(
  "WAWebDomElementMatches",
  [],
  function (t, n, r, o, a, i) {
    var e = Element.prototype,
      l =
        Element.prototype.matches ||
        e.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;
    function s(e, t) {
      return e instanceof HTMLElement ? l.call(e, t) : !1;
    }
    i.default = s;
  },
  66,
);
