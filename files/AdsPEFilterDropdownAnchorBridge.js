__d(
  "AdsPEFilterDropdownAnchorBridge",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = null,
      c = new Set();
    function d() {
      for (var e of c) e();
    }
    function m() {
      u != null && ((u = null), d());
    }
    function p(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function _() {
      return u;
    }
    function f() {
      return s(p, _, _);
    }
    ((l.clearFilterDropdownAnchor = m), (l.useFilterDropdownAnchor = f));
  },
  98,
);
