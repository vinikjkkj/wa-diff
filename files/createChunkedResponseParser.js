__d(
  "createChunkedResponseParser",
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
            (n && ((o = n(a)), o == null || typeof o == "string" || s(0, 4071)),
            o)
          )
            for (var c = o.length; r < c; ) {
              var d = o.indexOf(e, r);
              if (d < 0)
                if (l) d = c;
                else break;
              var m = o.slice(r, d);
              ((r += m.length + u), t(m, i, l && r >= c));
            }
          else l && t("", i, !0);
        };
      return (
        (o.includeHeaders = t.includeHeaders),
        (o.parseStreaming = !0),
        o
      );
    }
    l.default = c;
  },
  98,
);
