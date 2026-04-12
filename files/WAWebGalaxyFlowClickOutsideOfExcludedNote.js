__d(
  "WAWebGalaxyFlowClickOutsideOfExcludedNote",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect;
    function d(e, t) {
      e === void 0 && (e = []);
      var n = u(
          function (n) {
            if (n.target instanceof Node) {
              var r = n.target;
              e.some(function (e) {
                var t;
                return (t = e.current) == null ? void 0 : t.contains(r);
              }) || t();
            }
          },
          [e, t],
        ),
        r = u(
          function (e) {
            if ((e === void 0 && (e = !1), e)) {
              document.addEventListener("mousedown", n);
              return;
            }
            document.removeEventListener("mousedown", n);
          },
          [n],
        );
      c(
        function () {
          return (
            r(!0),
            function () {
              r();
            }
          );
        },
        [r],
      );
    }
    l.useClickOutsideOfExcludedNode = d;
  },
  98,
);
