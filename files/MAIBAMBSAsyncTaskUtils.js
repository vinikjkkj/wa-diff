__d(
  "MAIBAMBSAsyncTaskUtils",
  ["MAIBASurfacesUtils", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "MBS";
    }
    function s() {
      return e(o("MAIBASurfacesUtils").getCurrentAutoLoggingTool())
        ? r("gkx")("12055")
        : !1;
    }
    ((l.isMAIBAMBSAsyncTaskSurface = e), (l.isMAIBAMBSAsyncTaskEnabled = s));
  },
  98,
);
