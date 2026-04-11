__d(
  "WebBloksAnimatedSequence",
  ["WebBloksAnimationsSequenceSet"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r) {
      var a = new (o(
        "WebBloksAnimationsSequenceSet",
      ).WebBloksAnimationsSequenceSet)({ animations: t, startDelay: r * 1e3 });
      return (
        n &&
          a.addOnCompleteListener(function (t) {
            return n == null ? void 0 : n(e, a, t, e.bloksContext);
          }),
        a
      );
    }
    l.default = e;
  },
  98,
);
