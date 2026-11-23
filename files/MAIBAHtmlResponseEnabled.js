__d(
  "MAIBAHtmlResponseEnabled",
  ["FBLogger", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return r("gkx")("15672");
    }
    function s(t) {
      if (t == null) return !1;
      if (e()) return !0;
      var n = t.trim(),
        o = /^(?:\s*<tool-call[^\/]*\/>)*<html[\s>]/i.test(n),
        a = /<\/html>$/i.test(n);
      return (
        ((o && !a) || (!o && a)) &&
          r("FBLogger")("maiba").warn(
            "MAIBAHtmlResponseEnabled: incomplete HTML snippet: " + n,
          ),
        o || a
      );
    }
    ((l.MAIBAHtmlResponseEnabled = e), (l.isMAIBAHtmlResponse = s));
  },
  98,
);
