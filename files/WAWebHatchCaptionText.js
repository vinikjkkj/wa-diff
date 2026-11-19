__d(
  "WAWebHatchCaptionText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /\\([\\[\]])|\[((?:\\[^]|[^\\[\]])+)\]\([^)]+\)/g,
      l = /\\([\\[\]])/g;
    function s(t) {
      return t.replace(e, function (e, t, n) {
        return t != null ? t : (n != null ? n : "").replace(l, "$1");
      });
    }
    i.hatchCaptionPlainText = s;
  },
  66,
);
