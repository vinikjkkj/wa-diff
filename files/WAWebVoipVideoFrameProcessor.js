__d(
  "WAWebVoipVideoFrameProcessor",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      if (t == null) return !1;
      try {
        return t.shouldProcess();
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: video frame processor failed, sending the frame as is: ",
                "",
              ])),
            t,
          ),
          !1
        );
      }
    }
    l.shouldProcessFrame = s;
  },
  98,
);
