__d(
  "WAWebUseCtrlFSearch",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(
        function () {
          var t = function (n) {
            (n.ctrlKey || n.metaKey) &&
              n.key === "f" &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e());
          };
          return (
            document.addEventListener("keydown", t, { capture: !0 }),
            function () {
              document.removeEventListener("keydown", t, { capture: !0 });
            }
          );
        },
        [e],
      );
    }
    l.useCtrlFSearch = u;
  },
  98,
);
