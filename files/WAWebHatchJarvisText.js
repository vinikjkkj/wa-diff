__d(
  "WAWebHatchJarvisText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "sandbox://",
      l = /!\[(.*?)\]\((\S+)\)/g,
      s = /^\s*(```|~~~)/,
      u = new RegExp(
        "(`+)(?!`)[^\\n]*?(?<!`)\\1(?!`)|\\]\\([^)\\s]*\\)|\\bhttps?:\\/\\/[^\\s<>)]+",
        "g",
      ),
      c = new RegExp(
        "\\*\\*(?!\\s)([^*\\n]+?)(?<!\\s)\\*\\*|(?<![\\w_])__(?!\\s)([^_\\n]+?)(?<!\\s)__(?![\\w_])",
        "g",
      ),
      d = new RegExp(
        "(?<![*\\w])\\*(?![\\s*])([^*\\n]+?)(?<![\\s*])\\*(?![*\\w])",
        "g",
      ),
      m = "\uE000",
      p = "\uE001",
      _ = "\uE002",
      f = "\uE003",
      g = /\uE002(\d+)\uE003/g,
      h = /[\uE000-\uE003]/,
      y = /^\s*(`{3,}|~{3,})/;
    function C(e) {
      return s.test(e);
    }
    function b(t) {
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
    function v(e) {
      var t = !1;
      return e
        .trim()
        .split("\n")
        .filter(function (e) {
          return (C(e) && (t = !t), t || b(e) == null);
        })
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }
    function S(e) {
      var t = null;
      return e
        .split("\n")
        .map(function (e) {
          var n,
            r = (n = y.exec(e)) == null ? void 0 : n[1];
          return t == null
            ? r != null
              ? ((t = r), e)
              : R(e)
            : (r != null &&
                r[0] === t[0] &&
                r.length >= t.length &&
                e.trim() === r &&
                (t = null),
              e);
        })
        .join("\n");
    }
    function R(e) {
      if (h.test(e)) return e;
      var t = [],
        n = e.replace(u, function (e) {
          return (t.push(e), _ + String(t.length - 1) + f);
        });
      return L(n).replace(g, function (e, n) {
        return t[Number(n)];
      });
    }
    function L(e) {
      var t = e,
        n;
      do
        ((n = t),
          (t = t
            .replace(d, function (e, t) {
              return p + t + p;
            })
            .replace(c, function (e, t, n) {
              return m + (t != null ? t : n) + m;
            })));
      while (t !== n);
      return t.replaceAll(m, "*").replaceAll(p, "_");
    }
    ((i.HATCH_JARVIS_SANDBOX_PREFIX = e),
      (i.isHatchJarvisCodeFence = C),
      (i.parseHatchJarvisEmbedLine = b),
      (i.getHatchJarvisReplyText = v),
      (i.toHatchJarvisWhatsAppEmphasis = S));
  },
  66,
);
