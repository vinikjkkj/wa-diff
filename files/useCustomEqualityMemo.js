__d(
  "useCustomEqualityMemo",
  ["react", "useUnsafeRef_DEPRECATED"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (s || (s = o("react"))).useEffect;
    function c(t, n) {
      var o = (e || (e = r("useUnsafeRef_DEPRECATED")))(t),
        a = n(o.current, t) ? o.current : t;
      return (
        u(
          function () {
            o.current = a;
          },
          [a],
        ),
        a
      );
    }
    l.default = c;
  },
  98,
);
