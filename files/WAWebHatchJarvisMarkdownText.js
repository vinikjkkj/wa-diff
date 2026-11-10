__d(
  "WAWebHatchJarvisMarkdownText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^\s*(`{3,}|~{3,})/,
      l = /^\s*\$\$\s*$/,
      s = "$$",
      u = /(?:sandbox|jarvis-media):\/\/\S*/g;
    function c(e) {
      for (var t = e.split("\n"), n = [], r = 0; r < t.length; ) r = d(t, r, n);
      return n.join("\n");
    }
    function d(e, t, n) {
      var r = m(e[t]);
      return r != null
        ? p(e, t, n, r)
        : l.test(e[t]) && g(e, t)
          ? f(e, t, n)
          : h(e, t)
            ? b(e, t, n)
            : (n.push(k(e[t])), t + 1);
    }
    function m(t) {
      var n = e.exec(t);
      if (n == null) return null;
      var r = n[1],
        o = t.slice(t.indexOf(r) + r.length);
      return r[0] === "`" && o.includes("`") ? null : r;
    }
    function p(e, t, n, r) {
      for (var o = t + 1; o < e.length && !_(e[o], r); )
        (n.push(e[o]), (o += 1));
      return o + 1;
    }
    function _(t, n) {
      var r = e.exec(t);
      if (r == null) return !1;
      var o = r[1];
      return o[0] === n[0] && o.length >= n.length && t.trim() === o;
    }
    function f(e, t, n) {
      for (var r = t + 1; r < e.length && !l.test(e[r]); )
        (n.push(e[r]), (r += 1));
      return r + 1;
    }
    function g(e, t) {
      for (var n = t + 1; n < e.length; n += 1) if (l.test(e[n])) return !0;
      return !1;
    }
    function h(e, t) {
      if (!e[t].includes("|") || t + 1 >= e.length) return !1;
      var n = e[t + 1];
      return y(n) && R(n).length === R(e[t]).length;
    }
    function y(e) {
      return !e.includes("-") || !e.includes("|") ? !1 : R(e).every(C);
    }
    function C(e) {
      return /^:?-+:?$/.test(e.trim());
    }
    function b(e, t, n) {
      var r = R(e[t]),
        o = e[t].trim().startsWith("|");
      n.push(E(r));
      for (var a = t + 2; a < e.length && S(e[a], r.length, o); )
        (n.push(E(v(R(e[a]), r))), (a += 1));
      return a;
    }
    function v(e, t) {
      return t.map(function (t, n) {
        var r;
        return (r = e[n]) != null ? r : "";
      });
    }
    function S(e, t, n) {
      return e.includes("|")
        ? n
          ? e.trim().startsWith("|")
          : R(e).length === t
        : !1;
    }
    function R(e) {
      for (var t = [], n = "", r = 0; r < e.length; ) {
        var o = e[r] === "`" ? x(e, r) : null;
        o != null
          ? ((n += e.slice(r, o)), (r = o))
          : e[r] === "\\" && e[r + 1] === "|"
            ? ((n += "|"), (r += 2))
            : e[r] === "|"
              ? (t.push(n), (n = ""), (r += 1))
              : ((n += e[r]), (r += 1));
      }
      return (t.push(n), L(t));
    }
    function L(e) {
      var t = e[0].trim() === "" ? 1 : 0,
        n =
          e.length > 1 && e[e.length - 1].trim() === ""
            ? e.length - 1
            : e.length;
      return e.slice(t, n).map(function (e) {
        return e.trim();
      });
    }
    function E(e) {
      return e.map(k).join(" | ");
    }
    function k(e) {
      for (var t = "", n = 0; n < e.length; ) {
        var r = e[n] === "\\" ? null : I(e, n);
        r != null
          ? ((t += r.text), (n = r.end))
          : e[n] === "\\" && n + 1 < e.length
            ? ((t += e.slice(n, n + 2)), (n += 2))
            : ((t += e[n]), (n += 1));
      }
      return t;
    }
    function I(e, t) {
      var n,
        r,
        o = x(e, t);
      return o != null
        ? { end: o, text: e.slice(t, o) }
        : (n = (r = D(e, t)) != null ? r : P(e, t)) != null
          ? n
          : T(e, t);
    }
    function T(e, t) {
      u.lastIndex = t;
      var n = u.exec(e);
      return n != null && n.index === t
        ? { end: t + n[0].length, text: "" }
        : null;
    }
    function D(e, t) {
      if (!e.startsWith(s, t)) return null;
      var n = e.indexOf(s, t + s.length);
      return n === -1
        ? null
        : { end: n + s.length, text: e.slice(t + s.length, n).trim() };
    }
    function x(e, t) {
      var n = $(e, t);
      if (n === 0) return null;
      for (var r = t + n; r < e.length; ) {
        var o = $(e, r);
        if (o === n) return r + o;
        r += o > 0 ? o : 1;
      }
      return null;
    }
    function $(e, t) {
      for (var n = 0; e[t + n] === "`"; ) n += 1;
      return n;
    }
    function P(e, t) {
      var n = e[t] === "!",
        r = n ? t + 1 : t;
      if (e[r] !== "[") return null;
      var o = A(e, r);
      if (o === -1 || e[o + 1] !== "(") return null;
      var a = F(e, o + 1);
      if (a == null || !N(e.slice(o + 2, a - 1))) return null;
      var i = e.slice(r + 1, o);
      return i.trim() !== ""
        ? { end: a, text: k(i) }
        : { end: a, text: n ? "" : M(w(e.slice(o + 2, a - 1).trim())) };
    }
    function N(e) {
      var t = w(e.trim());
      return (
        t !== "" && (!/\s/.test(t) || (t.startsWith("<") && t.endsWith(">")))
      );
    }
    function M(e) {
      return ((u.lastIndex = 0), u.test(e) ? "" : e);
    }
    function w(e) {
      var t = /\s+(?:\"[^\"]*\"|\'[^\']*\'|\([^()]*\))$/.exec(e);
      return t != null ? e.slice(0, t.index) : e;
    }
    function A(e, t) {
      for (var n = 0, r = t; r < e.length; )
        if (e[r] === "\\") r += 2;
        else if (e[r] === "[") ((n += 1), (r += 1));
        else if (e[r] === "]") {
          if (((n -= 1), n === 0)) return r;
          r += 1;
        } else r += 1;
      return -1;
    }
    function F(e, t) {
      for (var n = 0, r = t; r < e.length; )
        if (e[r] === "\\") r += 2;
        else if (e[r] === "(") ((n += 1), (r += 1));
        else if (e[r] === ")") {
          if (((n -= 1), n === 0)) return r + 1;
          r += 1;
        } else r += 1;
      return null;
    }
    i.getPlainTextFromJarvisMarkdown = c;
  },
  66,
);
