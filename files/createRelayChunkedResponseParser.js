__d(
  "createRelayChunkedResponseParser",
  ["invariant"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "\r\n",
      s = 2;
    function u(t, n) {
      var r = 0,
        o = function (a, i, u) {
          var o = a;
          if (
            (n &&
              ((o = n(o)), o == null || typeof o == "string" || l(0, 42548)),
            o != null)
          ) {
            for (var c = o.length, d = []; r < c; ) {
              var m = o.indexOf(e, r);
              if (m < 0)
                if (u) m = c;
                else break;
              var p = o.slice(r, m);
              ((r += p.length + s),
                d.push({
                  isComplete: u && r >= c,
                  responseHeaders: i,
                  responseText: p,
                }));
            }
            d.length > 0 && t(d);
          } else
            u && t([{ isComplete: !0, responseHeaders: i, responseText: "" }]);
        };
      return ((o.parseStreaming = !0), o);
    }
    a.exports = u;
  },
  null,
);
