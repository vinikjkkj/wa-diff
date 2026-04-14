__d(
  "useWAWebBizBroadcastOverlappingRecipients",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      return s(
        function () {
          if (e.size < 2) return 0;
          var t = new Set(),
            n = new Set();
          for (var r of e) {
            var o,
              a = (o = r.broadcastMetadata) == null ? void 0 : o.recipients;
            if (a != null)
              for (var i of a.toArray()) {
                var l = i.id.toString();
                t.has(l) ? n.add(l) : t.add(l);
              }
          }
          return n.size;
        },
        [e],
      );
    }
    l.useWAWebBizBroadcastOverlappingRecipients = u;
  },
  98,
);
