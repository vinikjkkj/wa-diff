__d(
  "useGlobalEventListener",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect,
      u = {
        fullscreenchange: [
          "webkitfullscreenchange",
          "mozfullscreenchange",
          "MSFullscreenChange",
          "fullscreenchange",
        ],
      };
    function c(e, t, n) {
      var r = o("react-compiler-runtime").c(5),
        a,
        i;
      (r[0] !== t || r[1] !== e || r[2] !== n
        ? ((a = function () {
            if (t != null) {
              var r,
                o = (r = u[e]) != null ? r : e;
              return (
                window.addEventListener(o, t, n),
                function () {
                  window.removeEventListener(
                    o,
                    t,
                    typeof n == "boolean" ? n : n == null ? void 0 : n.capture,
                  );
                }
              );
            }
          }),
          (i = [t, e, n]),
          (r[0] = t),
          (r[1] = e),
          (r[2] = n),
          (r[3] = a),
          (r[4] = i))
        : ((a = r[3]), (i = r[4])),
        s(a, i));
    }
    var d = c;
    l.default = d;
  },
  98,
);
