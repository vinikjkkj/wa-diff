__d(
  "maybe",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = { type: "none" };
    function u(e) {
      return { type: "some", value: e };
    }
    function c(e) {
      return e.type === "some" ? e.value : null;
    }
    function d(e) {
      return (e.type === "some" || s(0, 5020), e.value);
    }
    function m(e) {
      return e.type === "none";
    }
    function p(e) {
      return e.type === "some";
    }
    ((l.isNone = m),
      (l.isSome = p),
      (l.None = e),
      (l.Some = u),
      (l.unwrap = c),
      (l.unwrapEnforcing = d),
      (l.wrap = u));
  },
  98,
);
