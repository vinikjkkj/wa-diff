__d(
  "WAGetMediaDevicesSupportedConstraints",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      try {
        var t,
          n =
            (t = navigator.mediaDevices) == null
              ? void 0
              : t.getSupportedConstraints();
        return n;
      } catch (t) {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "getSupportedConstraints is not supported in this browser. Error: ",
                "",
              ])),
            t,
          ),
          null
        );
      }
    }
    l.getMediaDevicesSupportedConstraints = s;
  },
  98,
);
