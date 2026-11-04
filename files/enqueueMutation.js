__d(
  "enqueueMutation",
  ["RelayMutationQueue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = s();
    function s() {
      if (typeof WeakMap == "function") return new WeakMap();
      if (typeof Map == "function") return new Map();
      var e = ReferenceError(
        "Cannot use enqueueMutation in this environment. Either WeakMap or Map must be defined to use enqueueMutation.",
      );
      throw (e.stack, e);
    }
    function u(t, n) {
      var o = e.get(t);
      return (
        o || ((o = new (r("RelayMutationQueue"))(t)), e.set(t, o)),
        o.push(n)
      );
    }
    function c(t) {
      return e.get(t);
    }
    var d = { getMutationQueue: c };
    ((l.__internal = d), (l.enqueueMutation = u));
  },
  98,
);
