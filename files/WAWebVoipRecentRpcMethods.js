__d(
  "WAWebVoipRecentRpcMethods",
  [],
  function (t, n, r, o, a, i) {
    var e = 8,
      l = [];
    function s() {
      return l.map(function (e) {
        var t = e.count,
          n = e.method;
        return t === 1 ? n : n + "*" + t;
      });
    }
    function u(t) {
      var n = l.at(-1);
      if (n != null && n.method === t) {
        n.count++;
        return;
      }
      (l.push({ count: 1, method: t }), l.length > e && l.shift());
    }
    ((i.getRecentRpcMethods = s), (i.recordSentRpcMethod = u));
  },
  66,
);
