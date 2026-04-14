__d(
  "useWAWebHover",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = c(!1),
        n = t[0],
        r = t[1];
      return (
        u(
          function () {
            var t = e.current;
            if (t) {
              var n = function () {
                  r(!0);
                },
                o = function () {
                  r(!1);
                };
              return (
                t.addEventListener("mouseenter", n),
                t.addEventListener("mouseleave", o),
                function () {
                  (t.removeEventListener("mouseenter", n),
                    t.removeEventListener("mouseleave", o));
                }
              );
            }
          },
          [e],
        ),
        n
      );
    }
    l.useWAWebHover = d;
  },
  98,
);
