__d(
  "CometDevToolsQEs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      return {};
      var e, t, n, r;
      for (var o of t) {
        var a = o[0] || "",
          i = o[1].split(":");
        if (a.startsWith("qe")) {
          var s = a.match(r);
          if (!s || s.length < 2) continue;
          var u = {
            disabled: !1,
            experiment: i[0],
            group: i[1],
            selected: !0,
            universe: s[1],
          };
          n[l(u)] = u;
        }
      }
    }
    function l(e) {
      var t = e.experiment,
        n = e.group,
        r = e.universe;
      return [r, t, n].join(">");
    }
    ((i.getActiveQEs = e), (i.getUniqQEKey = l));
  },
  66,
);
