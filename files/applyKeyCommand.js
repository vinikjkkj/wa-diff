__d(
  "applyKeyCommand",
  ["getKeyCommand"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o) {
      var a = r("getKeyCommand")(e);
      if (a == null) return !1;
      for (var i = t; i != null; ) {
        if (i && i.applyCommand(a, e)) return !0;
        i = i && i.getParent();
      }
      return !!(
        (n != null && n.applyCommand(a, e)) ||
        (o != null && o.applyCommand(a, e))
      );
    }
    l.default = e;
  },
  98,
);
