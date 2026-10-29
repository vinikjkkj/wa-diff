__d(
  "WAWebHatchAgentDocumentText",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "<!--",
      l = "-->",
      s = "`",
      u = 3,
      c = "**About this file.**",
      d = /^>[ \t]?/,
      m = /^(?:[ \t]*\n)+/,
      p =
        /\*\*(?=[^\s*])([^*\n]*?[^\s*])\*\*|\*(?=[^\s*])([^*\n]*?[^\s*])\*|~~(?=[^\s~])([^~\n]*?[^\s~])~~/g;
    function _(t) {
      for (var n = [], r = 0, o = t.indexOf(e); o !== -1; ) {
        n.push(t.slice(r, o).trimEnd());
        var a = t.indexOf(l, o + e.length);
        if (a === -1) return n.join("");
        ((r = a + l.length), (o = t.indexOf(e, r)));
      }
      return (n.push(t.slice(r)), n.join(""));
    }
    function f(e) {
      for (var t = e.split("\n"), n = 0; n < t.length && d.test(t[n]); ) n++;
      var r = t
        .slice(0, n)
        .map(function (e) {
          return e.replace(d, "").trim();
        })
        .filter(function (e) {
          return e !== "";
        })
        .join(" ");
      return r.startsWith(c)
        ? {
            body: t.slice(n).join("\n").replace(m, ""),
            note: { lead: c.slice(2, -2), text: r.slice(c.length).trim() },
          }
        : { body: e, note: null };
    }
    function g(e) {
      for (var t = [], n = 0, r = e.indexOf(s); r !== -1; ) {
        var o = h(e, r),
          a = o - r,
          i = y(e, o, a),
          l = i !== -1 || a >= u;
        (l &&
          (t.push(e.slice(n, r).replace(p, C)),
          (n = i === -1 ? e.length : i),
          t.push(e.slice(r, n))),
          (r = e.indexOf(s, l ? n : o)));
      }
      return (t.push(e.slice(n).replace(p, C)), t.join(""));
    }
    function h(e, t) {
      for (var n = t; e[n] === s; ) n++;
      return n;
    }
    function y(e, t, n) {
      for (var r = t; r < e.length; )
        if (e[r] === s) {
          var o = h(e, r);
          if (o - r === n) return o;
          r = o;
        } else {
          if (e[r] === "\n" && n < u) return -1;
          r++;
        }
      return -1;
    }
    function C(e, t, n, r) {
      return t != null
        ? "*" + t + "*"
        : n != null
          ? "_" + n + "_"
          : "~" + (r != null ? r : "") + "~";
    }
    ((i.hideHatchAgentDocumentComments = _),
      (i.splitHatchAgentDocumentNote = f),
      (i.convertHatchAgentDocumentEmphasis = g));
  },
  66,
);
