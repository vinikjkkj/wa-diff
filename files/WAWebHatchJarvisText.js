__d(
  "WAWebHatchJarvisText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "sandbox://",
      l = /!\[(.*?)\]\((\S+)\)/g,
      s = /^\s*(```|~~~)/;
    function u(e) {
      return s.test(e);
    }
    function c(t) {
      var n = t.trim();
      if (n === "" || n.replace(l, "").trim() !== "") return null;
      var r = [];
      for (var o of n.matchAll(l)) {
        var a = o[2];
        if (!a.startsWith(e) || a === e) return null;
        r.push({ label: o[1], url: a });
      }
      return r;
    }
    function d(e) {
      var t = !1;
      return e
        .trim()
        .split("\n")
        .filter(function (e) {
          return (u(e) && (t = !t), t || c(e) == null);
        })
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }
    ((i.HATCH_JARVIS_SANDBOX_PREFIX = e),
      (i.isHatchJarvisCodeFence = u),
      (i.parseHatchJarvisEmbedLine = c),
      (i.getHatchJarvisReplyText = d));
  },
  66,
);
