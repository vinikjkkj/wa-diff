__d(
  "VideoTimestampedCommentsConnectionHandler",
  ["mergeCommentEdgesSortedByTimestampInVideo", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.get(t.dataID);
      if (n) {
        var a = n.getLinkedRecord(t.fieldKey);
        if (!a) {
          n.setValue(null, t.handleKey);
          return;
        }
        var i = n.getLinkedRecord(t.handleKey);
        if (!i) {
          var l = e.create(
            o("relay-runtime").generateClientID(n.getDataID(), t.handleKey),
            a.getType(),
          );
          (l.copyFieldsFrom(a), n.setLinkedRecord(l, t.handleKey));
          return;
        }
        var s = a.getLinkedRecords("edges"),
          u = i.getLinkedRecords("edges"),
          c;
        (u == null
          ? (c = s)
          : s == null
            ? (c = u)
            : (c = r("mergeCommentEdgesSortedByTimestampInVideo")(u, s)),
          i.setLinkedRecords(c != null ? c : [], "edges"));
      }
    }
    function s(e, t, n) {
      var r = o("relay-runtime").getRelayHandleKey(
        "video_timestamped_comments",
        t,
        null,
      );
      return e.getLinkedRecord(r, n);
    }
    function u(e, t) {
      var n = e.getLinkedRecords("edges");
      if (!n) {
        e.setLinkedRecords([t], "edges");
        return;
      }
      var o = r("mergeCommentEdgesSortedByTimestampInVideo")(n, [t]);
      e.setLinkedRecords(o != null ? o : [], "edges");
    }
    ((l.update = e), (l.getConnection = s), (l.insertEdge = u));
  },
  98,
);
