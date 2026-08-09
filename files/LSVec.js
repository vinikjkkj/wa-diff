__d(
  "LSVec",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = { tag: { value: "ls-array" } };
    function l(t) {
      return Object.defineProperties([].concat(t), e);
    }
    function s(e) {
      return l(e);
    }
    function u(e) {
      return Array.from(e);
    }
    var c = { from: l, ofArray: s, toArray: u };
    i.default = c;
  },
  66,
);
