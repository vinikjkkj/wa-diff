__d(
  "QPLJoinUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      var o,
        a,
        i,
        l = (o = r == null ? void 0 : r.instanceKey) != null ? o : 0;
      (e.markerAnnotate(
        t,
        { string: ((a = {}), (a.qpl__source = "client"), a) },
        { instanceKey: l },
      ),
        e.markerAnnotate(
          t,
          { string: ((i = {}), (i.join_id = n), i) },
          { instanceKey: l },
        ));
    }
    function l(e, t, n, r) {
      var o, a;
      e.markerPoint(t, "join_request_" + n, {
        instanceKey: (o = r == null ? void 0 : r.instanceKey) != null ? o : 0,
        timestamp:
          (a = r == null ? void 0 : r.timestamp) != null
            ? a
            : e.currentTimestamp(),
        data: n != null ? { string: { __key: n } } : null,
      });
    }
    function s(e, t, n, r) {
      var o,
        a,
        i = (o = r == null ? void 0 : r.instanceKey) != null ? o : 0,
        l =
          (a = r == null ? void 0 : r.timestamp) != null
            ? a
            : e.currentTimestamp();
      e.markerPoint(t, "join_response_" + n, {
        instanceKey: i,
        timestamp: l,
        data: n != null ? { string: { __key: n } } : null,
      });
    }
    ((i.setJoinId = e), (i.markJoinRequest = l), (i.markJoinResponse = s));
  },
  66,
);
