__d(
  "WAWebDomElementMatches",
  [],
  function (t, n, r, o, a, i) {
    var e =
      Element.prototype.matches ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
    function l(t, n) {
      return t instanceof HTMLElement ? e.call(t, n) : !1;
    }
    i.default = l;
  },
  66,
);
