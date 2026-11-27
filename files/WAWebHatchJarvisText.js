__d(
  "WAWebHatchJarvisText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "sandbox://",
      l = new Set([
        "bmp",
        "gif",
        "heic",
        "heif",
        "jpeg",
        "jpg",
        "png",
        "svg",
        "tiff",
        "webp",
      ]),
      s = /!\[(.*?)\]\((\S+)\)/g,
      u = /^\s*(```|~~~)/,
      c = new RegExp(
        "(`+)(?!`)[^\\n]*?(?<!`)\\1(?!`)|\\]\\([^)\\s]*\\)|\\bhttps?:\\/\\/[^\\s<>)]+",
        "g",
      ),
      d = new RegExp(
        "\\*\\*(?!\\s)([^*\\n]+?)(?<!\\s)\\*\\*|(?<![\\w_])__(?!\\s)([^_\\n]+?)(?<!\\s)__(?![\\w_])",
        "g",
      ),
      m = new RegExp(
        "(?<![*\\w])\\*(?![\\s*])([^*\\n]+?)(?<![\\s*])\\*(?![*\\w])",
        "g",
      ),
      p = "\uE000",
      _ = "\uE001",
      f = "\uE002",
      g = "\uE003",
      h = /\uE002(\d+)\uE003/g,
      y = /[\uE000-\uE003]/,
      C = /^\s*(`{3,}|~{3,})/;
    function b(e) {
      var t = e.lastIndexOf(".");
      return t > 0 ? e.slice(t + 1).toLowerCase() : "";
    }
    function v(e) {
      return l.has(e);
    }
    function S(e) {
      return u.test(e);
    }
    function R(t) {
      var n = t.trim();
      if (n === "" || n.replace(s, "").trim() !== "") return null;
      var r = [];
      for (var o of n.matchAll(s)) {
        var a = o[2];
        if (!a.startsWith(e) || a === e) return null;
        r.push({ label: o[1], url: a });
      }
      return r;
    }
    function L(e) {
      var t = !1;
      return e
        .trim()
        .split("\n")
        .filter(function (e) {
          return (S(e) && (t = !t), t || R(e) == null);
        })
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }
    function E(e) {
      var t = null;
      return e
        .split("\n")
        .map(function (e) {
          var n,
            r = (n = C.exec(e)) == null ? void 0 : n[1];
          return t == null
            ? r != null
              ? ((t = r), e)
              : k(e)
            : (r != null &&
                r[0] === t[0] &&
                r.length >= t.length &&
                e.trim() === r &&
                (t = null),
              e);
        })
        .join("\n");
    }
    function k(e) {
      if (y.test(e)) return e;
      var t = [],
        n = e.replace(c, function (e) {
          return (t.push(e), f + String(t.length - 1) + g);
        });
      return I(n).replace(h, function (e, n) {
        return t[Number(n)];
      });
    }
    function I(e) {
      var t = e,
        n;
      do
        ((n = t),
          (t = t
            .replace(m, function (e, t) {
              return _ + t + _;
            })
            .replace(d, function (e, t, n) {
              return p + (t != null ? t : n) + p;
            })));
      while (t !== n);
      return t.replaceAll(p, "*").replaceAll(_, "_");
    }
    ((i.HATCH_JARVIS_SANDBOX_PREFIX = e),
      (i.getHatchJarvisFileExtension = b),
      (i.isHatchJarvisImageExtension = v),
      (i.isHatchJarvisCodeFence = S),
      (i.parseHatchJarvisEmbedLine = R),
      (i.getHatchJarvisReplyText = L),
      (i.toHatchJarvisWhatsAppEmphasis = E));
  },
  66,
);
