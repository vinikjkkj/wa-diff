__d(
  "useWAWebGalaxyFlowsData",
  ["WAWebContactGetters", "react-compiler-runtime", "useWAWebContactValues"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("react-compiler-runtime").c(3),
        n;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = [o("WAWebContactGetters").getVerifiedName]), (t[0] = n))
        : (n = t[0]);
      var r = o("useWAWebContactValues").useContactValues(e.contact.id, n),
        a = r[0],
        i;
      return (
        t[1] !== a
          ? ((i = { businessName: a }), (t[1] = a), (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    l.default = e;
  },
  98,
);
