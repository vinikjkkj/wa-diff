__d(
  "createRelayChunkedResponseParser",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "\r\n",
      u = 2;
    function c(t, n) {
      var r = 0,
        o = function (a, i, l) {
          var o = a;
          if (
            (n &&
              ((o = n(o)), o == null || typeof o == "string" || s(0, 42548)),
            o != null)
          ) {
            for (var c = o.length, d = []; r < c; ) {
              var m = o.indexOf(e, r);
              if (m < 0)
                if (l) m = c;
                else break;
              var p = o.slice(r, m);
              ((r += p.length + u),
                d.push({
                  isComplete: l && r >= c,
                  responseHeaders: i,
                  responseText: p,
                }));
            }
            d.length > 0 && t(d);
          } else
            l && t([{ isComplete: !0, responseHeaders: i, responseText: "" }]);
        };
      return ((o.parseStreaming = !0), o);
    }
    i.exports = c;
  },
  34,
);
