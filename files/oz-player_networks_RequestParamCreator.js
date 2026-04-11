__d(
  "oz-player/networks/RequestParamCreator",
  ["oz-player/shims/OzURI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      var e = this;
      ((this.createRequestParam = function (t, n, o) {
        var a = new (r("oz-player/shims/OzURI"))(t.toString());
        if (n) {
          var i = n.endByte,
            l = n.startByte;
          (l === 0 && i == null) ||
            (a.addQueryData({ bytestart: n.startByte }),
            i != null && a.addQueryData({ byteend: i }));
        }
        if (e.$2) {
          var s = e.$2(a);
          s &&
            Object.keys(s).forEach(function (e) {
              var t = s[e];
              a.addQueryData(e, t);
            });
        }
        var u = e.$1 && e.$1(a) ? "include" : "same-origin";
        return { uri: a, http: { credentials: u, priority: o } };
      }),
        (this.$1 = t),
        (this.$2 = n));
    };
    l.default = e;
  },
  98,
);
