__d(
  "MarkedKatexPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        /^([\s,.+*?(){}^\-\[\]!%\'\"~=<>_:;]?)\\?(\${1,2}|\\\[|\\\()(((?!\$|\]).)*)(\2|\\]|\\\))(?=($|[\s,.+*?(){}^\-\[\]!%\'\"~=<>_:;]))/,
      l = /^(\${1,2}|\\\[)\n((?:\\[^]|[^\\])+?)\n(?:(\${1,2})|\\\])(?:\n|$)/,
      s =
        /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|.?\$|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&\'*+\/=?_`{\|}~-]+@))/;
    function u(t) {
      var n = t.match(e);
      if (n) {
        var r,
          o = (r = n[1]) != null ? r : "",
          a = { raw: n[0].substr(o.length), text: n[3], type: "katex-inline" };
        return o.length > 0
          ? {
              raw: n[0],
              text: "",
              tokens: [{ raw: o, text: o, type: "text" }, a],
              type: "text",
            }
          : a;
      }
    }
    function c(e) {
      var t = e.match(l);
      if (t) return { raw: t[0], text: t[2], type: "katex-block" };
    }
    ((i.textWithKatexRule = s), (i.katexInline = u), (i.katexBlock = c));
  },
  66,
);
