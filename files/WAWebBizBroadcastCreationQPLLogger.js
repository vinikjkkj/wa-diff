__d(
  "WAWebBizBroadcastCreationQPLLogger",
  ["$InternalEnum", "WAWebQplFlowWrapper", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        BILLING_FETCH_END: "billing_fetch_end",
        CHECKOUT_FETCH_END: "checkout_fetch_end",
        DRAWER_MOUNTED: "drawer_mounted",
        FLOW_MOUNTED: "flow_mounted",
      }),
      s = r("qpl")._(183054996, "1362"),
      u = null;
    function c(e) {
      (u != null && u.drop(),
        (u = o("WAWebQplFlowWrapper").QPL.markerStart(
          s,
          e != null ? { annotations: e } : void 0,
        )));
    }
    function d(e) {
      u != null && u.addPoint(e);
    }
    function m(e) {
      u != null && u.annotate(e);
    }
    function p(e) {
      u != null && (u.end(e), (u = null));
    }
    function _() {
      u != null && (u.drop(), (u = null));
    }
    ((l.CreateBroadcastQPLPoints = e),
      (l.qplCreateStart = c),
      (l.qplCreatePoint = d),
      (l.qplCreateAnnotate = m),
      (l.qplCreateEnd = p),
      (l.qplCreateDrop = _));
  },
  98,
);
