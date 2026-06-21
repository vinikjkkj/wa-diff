__d(
  "MarkedKatexPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /[\s,.+*?(){}^\-\[\]!%\'\"~=<>_:;]/,
      l = "\n\n",
      s = [
        { close: "$$", multiline: !0, open: "$$" },
        { close: "\\]", multiline: !0, open: "\\[" },
      ],
      u = [].concat(s, [
        { close: "\\)", multiline: !1, open: "\\(" },
        { close: "$", multiline: !1, open: "$" },
      ]);
    function c(t) {
      return t == null || e.test(t);
    }
    function d(e, t) {
      for (var n of t) if (e.startsWith(n.open)) return n;
      return null;
    }
    function m(e, t, n, r) {
      return t.close !== "$" && e.slice(n, r).includes("$");
    }
    function p(e, t, n, r) {
      return (!t.multiline && e.slice(n, r).includes("\n")) || m(e, t, n, r)
        ? !1
        : c(e[r + t.close.length]);
    }
    function _(e, t, n) {
      for (
        var r = t.multiline ? e.indexOf(l, n) : -1, o = e.indexOf(t.close, n);
        o !== -1;
      ) {
        if (r !== -1 && o > r) return -1;
        if (p(e, t, n, o)) return o;
        if (t.open === "$") return -1;
        o = e.indexOf(t.close, o + t.close.length);
      }
      return -1;
    }
    function f(e, t, n) {
      n === void 0 && (n = !1);
      var r = d(e, t);
      if (r == null) return null;
      var o = r.open.length,
        a = _(e, r, o);
      if (a === -1) return null;
      var i = a + r.close.length;
      return (
        n && e[i] === "\n" && i++,
        { raw: e.slice(0, i), text: e.slice(o, a) }
      );
    }
    var g =
      /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|.?\$|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))/;
    function h(e) {
      var t = "",
        n = f(e, u);
      if (
        (n == null && c(e[0]) && ((t = e[0]), (n = f(e.slice(1), u))),
        n != null)
      ) {
        var r = { raw: n.raw, text: n.text, type: "katex-inline" };
        return t.length > 0
          ? {
              raw: t + n.raw,
              text: "",
              tokens: [{ raw: t, text: t, type: "text" }, r],
              type: "text",
            }
          : r;
      }
    }
    function y(e) {
      var t = f(e, s, !0);
      if (t)
        return {
          raw: t.raw,
          text: t.text.replace(/^\n|\n$/g, ""),
          type: "katex-block",
        };
    }
    ((i.textWithKatexRule = g), (i.katexInline = h), (i.katexBlock = y));
  },
  66,
);
