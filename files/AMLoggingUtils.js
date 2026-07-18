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
          var t,
            n = e.split(":"),
            r = ((t = n.shift()) != null ? t : "").trim();
          if (r) {
            var a = n.join(":").trim();
            o[r.toLowerCase()] = a;
          }
        }),
        o
      );
    }
    ((l.isInAdsManager = e), (l.parseHeaders = s));
  },
  98,
);
