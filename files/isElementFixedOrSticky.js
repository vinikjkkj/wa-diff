__d(
  "isElementFixedOrSticky",
  ["getComputedStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      for (var n = t; n != null; ) {
        var o = (e || (e = r("getComputedStyle")))(n);
        if (o == null) return !1;
        var a = o.getPropertyValue("position");
        if (a === "fixed" || a === "sticky") return !0;
        n = n.parentElement;
      }
      return !1;
    }
    l.default = s;
  },
  98,
);
