__d(
  "useWAWebBizBroadcastOverlappingRecipients",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useMemo;
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n;
      e: {
        if (e.size < 2) {
          n = 0;
          break e;
        }
        var r;
        if (t[0] !== e) {
          var a = new Set();
          r = new Set();
          for (var i of e) {
            var l,
              s = (l = i.broadcastMetadata) == null ? void 0 : l.recipients;
            if (s != null)
              for (var u of s.toArray()) {
                var c = u.id.toString();
                a.has(c) ? r.add(c) : a.add(c);
              }
          }
          ((t[0] = e), (t[1] = r));
        } else r = t[1];
        n = r.size;
      }
      return n;
    }
    l.useWAWebBizBroadcastOverlappingRecipients = u;
  },
  98,
);
