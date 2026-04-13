__d(
  "useWAWebCameraPrewarm",
  ["WAWebVoipCameraPrewarm", "react", "react-compiler-runtime"],
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
            if (e) return (o("WAWebVoipCameraPrewarm").prewarmCamera(), c);
          }),
          (r = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = r))
        : ((n = t[1]), (r = t[2])),
        s(n, r));
    }
    function c() {
      o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
    }
    l.default = u;
  },
  98,
);
