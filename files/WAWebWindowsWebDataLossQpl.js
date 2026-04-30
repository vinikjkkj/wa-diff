__d(
  "WAWebWindowsWebDataLossQpl",
  ["WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(891431899, "3271");
    function s() {
      var t = o("WAWebQplFlowWrapper").QPL.markerStart(e);
      (t.addPoint("web_data_loss_reported"), t.end(2));
    }
    l.reportWebDataLossQpl = s;
  },
  98,
);
