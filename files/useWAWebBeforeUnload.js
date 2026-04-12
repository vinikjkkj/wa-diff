__d(
  "useWAWebBeforeUnload",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(
        function () {
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
        },
        [e],
      );
    }
    l.default = u;
  },
  98,
);
