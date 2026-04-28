__d(
  "makeImmutable",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = new Error(
        "This empty " + (e != null ? e : "Object") + " cannot be mutated.",
      );
      throw (t.stack, t);
    }
    function l(e, t) {
      return e;
    }
    i.default = l;
  },
  66,
);
