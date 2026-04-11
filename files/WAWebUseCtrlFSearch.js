__d(
  "WAWebUseCtrlFSearch",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        r;
      (t[0] !== e
        ? ((n = function () {
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
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        s(n, r));
    }
    l.useCtrlFSearch = u;
  },
  98,
);
