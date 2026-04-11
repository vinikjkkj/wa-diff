__d(
  "useUnsafeRef_DEPRECATED",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      return s(function () {
        return { current: e };
      }, []);
    }
    l.default = u;
  },
  98,
);
