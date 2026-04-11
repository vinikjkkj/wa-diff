__d(
  "AMLoggingUtils",
  ["MetaConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("MetaConfig")._("148");
    }
    function s(e) {
      var t = /\r?\n[\t]+/g,
        n = /\r?\n/,
        r = e.replace(t, " "),
        o = {};
      return (
        r.split(n).forEach(function (e) {
          var t = e.split(":"),
            n = t.shift().trim();
          if (n) {
            var r = t.join(":").trim();
            o[n.toLowerCase()] = r;
          }
        }),
        o
      );
    }
    ((l.isInAdsManager = e), (l.parseHeaders = s));
  },
  98,
);
