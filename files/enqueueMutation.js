__d(
  "enqueueMutation",
  ["RelayMutationQueue"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = l();
    function l() {
      if (typeof WeakMap == "function") return new WeakMap();
      if (typeof Map == "function") return new Map();
      throw ReferenceError(
        "Cannot use enqueueMutation in this environment. Either WeakMap or Map must be defined to use enqueueMutation.",
      );
    }
    function s(t, r) {
      var o = e.get(t);
      return (
        o || ((o = new (n("RelayMutationQueue"))(t)), e.set(t, o)),
        o.push(r)
      );
    }
    function u(t) {
      return e.get(t);
    }
    a.exports = { __internal: { getMutationQueue: u }, enqueueMutation: s };
  },
  null,
);
