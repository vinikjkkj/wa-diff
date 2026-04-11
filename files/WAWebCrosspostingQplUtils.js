__d(
  "WAWebCrosspostingQplUtils",
  ["WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(551499239, "3413"),
      s = Object.freeze({
        INIT_CROSSPOST: "INIT_CROSSPOST",
        FINISH_CROSSPOST: "FINISH_CROSSPOST",
        SEE_CROSSPOST_ERROR: "SEE_CROSSPOST_ERROR",
        SEE_CROSSPOST_SUCCESS: "SEE_CROSSPOST_SUCCESS",
      });
    function u() {
      o("WAWebQplFlowWrapper").QPL.markerStart(e);
    }
    function c(t) {
      o("WAWebQplFlowWrapper").QPL.markerPoint(e, t);
    }
    function d(t) {
      o("WAWebQplFlowWrapper").QPL.markerAnnotate(e, t);
    }
    function m() {
      o("WAWebQplFlowWrapper").QPL.markerEnd(e, 2);
    }
    function p() {
      o("WAWebQplFlowWrapper").QPL.markerEnd(e, 3);
    }
    ((l.CrosspostingQplPoints = s),
      (l.crosspostingQplStart = u),
      (l.crosspostingQplPoint = c),
      (l.crosspostingQplAnnotate = d),
      (l.crosspostingQplEndSuccess = m),
      (l.crosspostingQplEndFail = p));
  },
  98,
);
