__d(
  "useWAWebBeforeUnload",
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
              var t = e();
              if (t.showConfirmationDialog)
                return (n.preventDefault(), (n.returnValue = ""), "");
            };
            return (
              window.addEventListener("beforeunload", t),
              function () {
                window.removeEventListener("beforeunload", t);
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
    l.default = u;
  },
  98,
);
