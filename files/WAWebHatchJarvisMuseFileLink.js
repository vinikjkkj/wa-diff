__d(
  "WAWebHatchJarvisMuseFileLink",
  ["WAWebHatchJarvisText"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "https://agent.meta.ai/library/documents",
      s = "workspace",
      u = "~",
      c = ["/fs/raw/", "/home/hatch/", "~/", "/"],
      d = /[?#]/,
      m = /[\0-\x1F\/\\\x7F-\x9F]/,
      p = 8;
    function _(t) {
      if (!t.startsWith(o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX))
        return null;
      var n = t.slice(
        o("WAWebHatchJarvisText").HATCH_JARVIS_SANDBOX_PREFIX.length,
      );
      if (d.test(n)) return null;
      var r = f(n);
      if (r == null) return null;
      var a = new URL(e);
      return (a.searchParams.set("file", r), a.toString());
    }
    function f(e) {
      var t = g(e);
      if (t == null || t.length < 2 || t[0] !== s || t.some(h)) return null;
      var n = t.join("/");
      return n === n.trim() ? n : null;
    }
    function g(e) {
      var t,
        n = c.find(function (t) {
          return e.startsWith(t);
        }),
        r = e
          .slice((t = n == null ? void 0 : n.length) != null ? t : 0)
          .split("/")
          .filter(function (e) {
            return e !== "";
          })
          .map(C);
      return n != null || r[0] === s ? r : r[0] === u ? null : [s].concat(r);
    }
    function h(e) {
      var t = y(e);
      return t == null || t === "." || t === ".." || m.test(t);
    }
    function y(e) {
      for (var t = e, n = 0; n < p; n++) {
        var r = C(t);
        if (r === t) return t;
        t = r;
      }
      return null;
    }
    function C(e) {
      try {
        return decodeURIComponent(e);
      } catch (t) {
        return e;
      }
    }
    l.getHatchMuseFileUrl = _;
  },
  98,
);
