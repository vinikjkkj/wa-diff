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
          if (
            (n && ((a = n(a)), a == null || typeof a == "string" || s(0, 4071)),
            a)
          )
            for (var o = a.length; r < o; ) {
              var c = a.indexOf(e, r);
              if (c < 0)
                if (l) c = o;
                else break;
              var d = a.slice(r, c);
              ((r += d.length + u), t(d, i, l && r >= o));
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
