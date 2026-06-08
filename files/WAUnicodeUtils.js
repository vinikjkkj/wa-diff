__d(
  "WAUnicodeUtils",
  ["WAStringz"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5e3,
      s = 0.5;
    function u(e, t) {
      return d(e || "", 0, t);
    }
    function c(e) {
      return o("WAStringz").length(e || "");
    }
    function d(t, n, r) {
      if (t == null || t === "") return "";
      var a = n || 0,
        i = r == null ? 1 / 0 : r;
      return a === 0 && i === 1 / 0
        ? t
        : t.length >= e && i / t.length <= s
          ? _(t, a, i)
          : o("WAStringz").substring(t, a, i);
    }
    function m(t, n, r) {
      var a = t || "",
        i = n || 0,
        l = r == null ? 1 / 0 : r;
      return a.length >= e && l / a.length <= s
        ? f(a, i, l)
        : o("WAStringz").toArray(a).slice(i, l);
    }
    function p(e, t) {
      if (t == null || encodeURI(e).length <= t) return e;
      for (var n = 0, r = m(e), o = r.length, a = 0; a < o; a++) {
        var i = r[a],
          l = encodeURI(i).length;
        if (n + l > t) return d(e, 0, a);
        n += l;
      }
      return e;
    }
    function _(e, t, n) {
      var r = new RegExp(o("WAStringz").astralRange),
        a = "",
        i,
        l = 0;
      do ((i = r.exec(e)), i && (a += i[0]), l++);
      while (i && l < n);
      return a;
    }
    function f(e, t, n) {
      var r = new RegExp(o("WAStringz").astralRange),
        a = [],
        i;
      do ((i = r.exec(e)), i && a.push(i[0]));
      while (i && a.length < n);
      return a;
    }
    ((l.firstNCodepoints = u),
      (l.numCodepoints = c),
      (l.substring = d),
      (l.toArray = m),
      (l.firstNEncodedBytes = p));
  },
  98,
);
