__d(
  "WAWebMessageLogQplEvents",
  ["WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    var e = r("qpl")._(774770248, "3424"),
      s = r("qpl")._(774769843, "3425");
    function u(t) {
      o("WAWebQplFlowWrapper").QPL.markerStart(e, {
        annotations: { string: { EntryPoint: t } },
      });
    }
    function c(t) {
      o("WAWebQplFlowWrapper").QPL.markerEnd(e, t);
    }
    function d(e) {
      o("WAWebQplFlowWrapper").QPL.markerStart(s, {
        annotations: { bool: { IsCached: e } },
      });
    }
    ((l.qplStartProfileView = u),
      (l.qplEndProfileView = c),
      (l.qplStartOrderView = d));
  },
  98,
);
