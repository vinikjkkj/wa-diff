__d(
  "WAWebVoipCallWindowMode",
  ["WAWebWamEnumSubSurface"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "main";
    function s(t) {
      e = t;
    }
    function u() {
      return e;
    }
    function c() {
      e = "main";
    }
    function d() {
      return (function (e) {
        if (e === "popout")
          return o("WAWebWamEnumSubSurface").SUB_SURFACE.POPOUT_WINDOW;
        if (e === "pip")
          return o("WAWebWamEnumSubSurface").SUB_SURFACE.DOC_PIP_WINDOW;
        if (e === "main")
          return o("WAWebWamEnumSubSurface").SUB_SURFACE.MINI_PLAYER;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(u());
    }
    ((l.setCallWindowMode = s),
      (l.getCallWindowMode = u),
      (l.resetCallWindowMode = c),
      (l.getCallWindowSubSurface = d));
  },
  98,
);
