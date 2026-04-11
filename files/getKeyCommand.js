__d(
  "getKeyCommand",
  ["UserAgent", "createKeyCommand", "getCometKey"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("getCometKey")(e);
      if (t == null) return null;
      var n = !1;
      r("UserAgent").isPlatform("Mac OS X")
        ? e.metaKey && (n = !0)
        : e.ctrlKey && (n = !0);
      var o = { alt: e.altKey, command: n, key: t, shift: e.shiftKey };
      return r("createKeyCommand")(o);
    }
    l.default = e;
  },
  98,
);
