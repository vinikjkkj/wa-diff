__d(
  "useWAWebCameraPrewarm",
  ["WAWebVoipCameraPrewarm", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(
        function () {
          if (e)
            return (
              o("WAWebVoipCameraPrewarm").prewarmCamera(),
              function () {
                o("WAWebVoipCameraPrewarm").cleanupPrewarmedCamera();
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
