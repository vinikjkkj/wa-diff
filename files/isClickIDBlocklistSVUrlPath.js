__d(
  "isClickIDBlocklistSVUrlPath",
  ["ClickIDURLBlocklistSVConfig.experimental", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["http", "https"];
    function u(t) {
      if (!s.includes(t.getProtocol())) return !1;
      var n = t.getDomain(),
        o = t.getPath(),
        a = n !== null ? n + o : null;
      return r("ClickIDURLBlocklistSVConfig.experimental").block_list_url.some(
        function (n) {
          var o;
          n != null && n.startsWith("http")
            ? (o = new (e || (e = r("URI")))(n))
            : (o = new (e || (e = r("URI")))("http://" + n));
          var i = o.getDomain() + o.getPath(),
            l = a != null && a === i;
          if (l) {
            var s = o.getQueryData(),
              u = t.getQueryData();
            for (var c of Object.entries(s)) {
              var d = c[0],
                m = c[1];
              if (u[d] == null || u[d] !== m) return !1;
            }
            return !0;
          }
          return !1;
        },
      );
    }
    l.default = u;
  },
  98,
);
