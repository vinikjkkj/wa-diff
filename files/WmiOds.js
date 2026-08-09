__d(
  "WmiOds",
  ["ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r) {
      (e || (e = o("ODS"))).bumpEntityKey(9819, t, n, r);
    }
    function u(e, t, n, r) {
      s(e, n !== "" ? t + "." + n : t, r);
    }
    ((l.wmiOdsBump = s), (l.wmiOdsBumpLabeled = u));
  },
  98,
);
